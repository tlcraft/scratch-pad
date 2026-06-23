/**
 * Task:
 * Hit the reddit San Francisco page to retrieve JSON data
 * Then print the top 5 upvoted posts (sorted by the ups attribute) and list their titles
 */

const LIMIT = 5;
const URL = "https://www.reddit.com/r/sanfrancisco.json";

const redditRequestDriver = async (url: string) => {
    const response = await makeHttpRequest(url, HttpMethod.GET);
    if (response.ok) {
        const json = await response.json();
        const posts = processRedditData(json);
    
        const topPosts = posts.slice(0, LIMIT);
        topPosts.forEach(post => console.log(post.title, post.ups));
    } else {
        console.error("HTTP Request Failed: ", response.status, response.statusText);
        const errorBody = await response.text();
        console.error("Response body snippet:", errorBody.slice(0, 300));
    }
};

const makeHttpRequest = async (url: string, method: HttpMethod): Promise<Response> => {
    const response = await fetch(url, {
        "method": method,
        "headers": {
            "User-Agent": "request-example:v1.0",
            "Accept": "application/json"
        }
    });

    // console.log("Async Response: ", response);
    // console.log("Async Response Status: ", response?.status);

    return response;
};

enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}

const processRedditData = (json: RedditData): any[] => {
    if (json) {
        // console.log("JSON: ", json);
        console.log("JSON Kind: ", json.kind);
        const children = json.data?.children ?? [];

        if (children && children.length > 0) {
            console.log("JSON Data Children Length: ", children.length);
            // console.log("JSON Data Children Example: ", JSON.stringify(children[0], null, 4));
        
            const mappedData: any[] = children.map((post: any) => {
                return { title: post?.data?.title, ups: post?.data?.ups }
            });
        
            mappedData.sort((a: any, b: any) => b.ups - a.ups);
        
            return mappedData;
        }
    }

    return [];
};

interface RedditData {
    kind: string,
    data: {
        children: {
            data: {
                ups: number;
                title: string;
            }
        }[]
    }
}

redditRequestDriver(URL).then(() => console.log("\nDone."));
