const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT;
const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;

mongoose.connect(MONGODB_CONNECTION_STRING);

const db = mongoose.connection;

db.on("error", (error) => {
    console.error("Connection error:", error);
});

db.once("open", () => {
    console.log("Connected to MongoDB");
});

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tags: {
        type: [String]
    }
});

const Post = mongoose.model("Post", postSchema);

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.post("/api/post", (req, res) => {
    const {title, content, category, tags} = req.body;
    const newPost = new Post({
        title,
        content,
        category,
        tags
    });

    newPost.save((err, savedPost) => {
        if (err) {
            console.error(`Error saving post: {err}`);
            res.status(500).json({error: "Error saving post"});
        } else {
            console.log("Post saved succesfully");
            res.status(200).json({message: "Post saved succefully"});
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
