import json
from urllib.error import HTTPError, URLError
import urllib.request
from typing import Final, Any

LIMIT: Final[int] = 5

def fetch_reddit_data(url: str) -> dict:
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "request-example:v1.0",
            "Accept": "application/json",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            return json.load(response)
    except HTTPError as e:
        print(f"HTTP error: {e.code} {e.reason}")
        return {}
    except URLError as e:
        print(f"Network error: {e.reason}")
        return {}

def process_reddit_json(json_data: Any) -> list:
    if json_data:
        print(json_data.get("kind"))

        children = json_data.get("data", {}).get("children", [])
        print(f"Number of posts: {len(children)}")

        if len(children):
            print("Record example: ", json.dumps(children[0], indent=4)) 

            mapped_data = [{"title": post.get("data", {}).get("title"), "ups": post.get("data", {}).get("ups")} for post in children]

            mapped_data.sort(key=lambda x: x["ups"], reverse=True)

            return mapped_data
        
    return []

if __name__ == "__main__":
    print("Getting data from Reddit...")
    json_data = fetch_reddit_data("https://www.reddit.com/r/sanfrancisco.json")
    
    if json_data:
        top_posts = process_reddit_json(json_data)

        print("Top posts by upvotes:")
        for post in top_posts[:LIMIT]:
            print(f"Title: {post['title']}, Upvotes: {post['ups']}")
