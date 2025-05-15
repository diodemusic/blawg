import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;

mongoose.connect(MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
    console.error("Connection error:", error);
});

db.once("open", () => {
    console.log("Connected to MongoDB");
});

const postSchema = new mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    category: {
        type: String
    },
    tags: {
        type: [String]
    }
});

const Post = mongoose.model("Post", postSchema);

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
