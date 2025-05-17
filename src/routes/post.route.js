const express = require("express");
const router = express.Router();
const { createPost, readPosts, readPost, deletePost } = require("../controllers/post.controller");

router.post("/create/", createPost);
router.get("/read-all/", readPosts);
router.get("/read/:id/", readPost);
router.delete("/delete/:id/", deletePost);

module.exports = router;
