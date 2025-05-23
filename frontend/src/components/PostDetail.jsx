import { useState, useEffect } from "react";
import { useParams, Link, } from "react-router-dom";
import axios from "axios";

export default function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/post/read/%{id}`)
            .then(res => {
                setPost(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(`Error fetching post: ${error.message}`)
            });
    }, [id]);

    if (loading) {
        return <p>Loading post...</p>
    }

    if (!post) {
        return <p>Post not found</p>
    }

    return (
        <article style={{ padding: "1rem", maxWidth: "600px", margin: "auto" }}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link to="/">Back to Posts</Link>
        </article>
    );
}
