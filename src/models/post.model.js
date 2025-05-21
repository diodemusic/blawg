const mongoose = require('mongoose');

const PostSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        category: {
            type: String
        },
        tags: {
            type: [String]
        }
    },
    { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema)

module.exports = Post;
