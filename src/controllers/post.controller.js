const Post = require("../models/post.model");

async function createPost(req, res) {
    try {
        const post = new Post(req.body);

        await post.save();

        res.status(200).send({
            message: "Post created.",
            post: post
        });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

async function readPosts(req, res) {
    try {
        const posts = await Post.find();

        res.status(200).send(posts);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

module.exports = {
    createPost,
    readPosts
};
