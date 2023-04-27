export const fetchPosts = async () => {
    const response = await fetch(' http://localhost:3900/posts');
    return response.json();
}

export const fetchPost = async (id) => {
    const response = await fetch(`http://localhost:3900/posts/${id}`);
    return response.json();
}

export const createPost = async (newPost) => {
    const response = await fetch(`http://localhost:3900/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost) 
    });
    return response.json();
}