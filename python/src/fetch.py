import json
import urllib.request
from typing import Final

LIMIT: Final[int] = 5

def fetch_reddit_data(url: str) -> any:
    with urllib.request.urlopen(url) as response:
        return json.load(response)

def process_reddit_json(json_data: any) -> list:
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
    top_posts = process_reddit_json(json_data)

    print("Top posts by upvotes:")
    for post in top_posts[:LIMIT]:
        print(f"Title: {post['title']}, Upvotes: {post['ups']}")
