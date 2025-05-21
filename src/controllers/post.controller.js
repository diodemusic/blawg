const Post = require("../models/post.model");

async function createPost(req, res) {
    try {
        const post = new Post(req.body);

        await post.save();

        res.status(201).send({ post });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

async function readPosts(req, res) {
    try {
        if (!req.query.term) {
            const posts = await Post.find();

            return res.status(200).send({ posts });
        }

        const posts = await Post.find({ "title": { "$regex": req.query.term } })

        res.status(200).send({ posts });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

async function readPost(req, res) {
    try {
        const post = await Post.findById({ _id: req.params.id });

        if (!post) {
            res.status(404).send({ message: "Bad Request " });
        }

        res.status(200).send({ post });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

async function updatePost(req, res) {
    try {
        const post = await Post.findOneAndUpdate({ _id: req.params.id }, req.body);

        if (!post) {
            return res.status(404).send({ message: "Bad Request" })
        }

        const updatePost = await Post.find({ _id: post._id });

        res.status(200).send({ updatePost });
    } catch (error) {
        res.status(400).send({ message: error.message });
    };
}

async function deletePost(req, res) {
    try {
        const post = await Post.deleteOne({ _id: req.params.id });

        if (post.deletedCount == 0) {
            return res.status(404).send({ message: "Bad Request" })
        }

        res.status(204).end();
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
