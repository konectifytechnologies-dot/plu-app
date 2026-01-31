export async function fetcher(endpoint, method = 'GET', jwt) {
    // Set default headers
    const defaultHeaders = {
        "Content-Type": "application/json",
    };


    // If running server-side on Node, we add a User-Agent to bypass Cloudflare
    if (typeof window === "undefined") {
        defaultHeaders["User-Agent"] = "Disqav-NextJS-Server";
    }

    const url = `http://localhost:8000/api/${endpoint}`
    const res = await fetch(url, {
        method,
        headers: {
            "Accept": "application/json",
            'Authorization': `Bearer ${jwt}`,
            ...defaultHeaders
        }
    })
    const data = await res.json();
    return data;
}
