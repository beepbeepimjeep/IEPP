export async function searchURL(url) {
    try {
        // const response = await fetch(`https://ieppteam4.chickenkiller.com/url/${url}`);
        const response = await fetch(`https://ieppteam4.chickenkiller.com/url?domain=${url}`);
        // const response = await fetch(`localhost:3080/url/${url}`);

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}
