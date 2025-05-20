const Post = require("../models/post.model");

async function createPost(req, res) {
    try {
        const post = new Post(req.body);

        await post.save();

        res.status(200).send({ post });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

async function readPosts(req, res) {
    try {
        const posts = await Post.find();

        res.status(200).send({ posts });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

async function readPost(req, res) {
    try {
        const post = await Post.find({ _id: req.params.id });

        res.status(200).send({ post });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

async function updatePost(req, res) {
    try {
        const post = await Post.findOneAndUpdate({ _id: req.params.id }, req.body);
        const updatePost = await Post.find({ _id: post._id });

        res.status(200).send({ updatePost });
    } catch (error) {
        res.status(400).send({ message: error.message });
    };
}

async function deletePost(req, res) {
    try {
        const post = await Post.deleteOne({ _id: req.params.id });

        res.status(200).send({ post });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

module.exports = {
    createPost,
    readPosts,
    readPost,
    updatePost,
    deletePost
};
