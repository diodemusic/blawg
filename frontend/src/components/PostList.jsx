import { useState, useEffect } from "react";
import axios from "axios";

export default function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:8000/api/post/read-all/")
            .then(response => {
                setPosts(response.data.posts);
                setLoading(false);
            })
            .catch(error => {
                console.error(`Error fetching post: ${error.message}`);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>
    }

    posts.map(post => {
        console.log(post);
    });

    return (
        <div>
            {posts.map(post => (
                <>
                    <h2 key={post._id}>{post.title}</h2>
                </>
            ))}
        </div>
    );
};
