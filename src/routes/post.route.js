const express = require("express");
const router = express.Router();
const { createPost, readPosts } = require("../controllers/post.controller");

router.post("/create/", createPost);
router.get("/read-all/", readPosts);

module.exports = router;
