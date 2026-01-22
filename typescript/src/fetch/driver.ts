/**
 * Task:
 * Hit the reddit San Francisco page to retrieve JSON data
 * Then print the top 5 upvoted posts (sorted by the ups attribute) and list their titles
 */

const LIMIT = 5;

const httpRequestDriver = async () => {
    const response = await makeHttpRequest("https://www.reddit.com/r/sanfrancisco.json", "GET");
    const json = await response.json();
    const posts = processRedditData(json);

    const topPosts = posts.slice(0, LIMIT);
    topPosts.forEach(post => console.log(post.title, post.ups));
};

const makeHttpRequest = async (url: string, method: string): Promise<Response> => {
    const response = await fetch(url, {
        "method": method
    });

    // console.log("Async Response: ", response);
    console.log("Async Response Status: ", response?.status);

    return response;
};

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

httpRequestDriver().then(() => console.log("\nDone."));
