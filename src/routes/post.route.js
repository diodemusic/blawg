const express = require("express");
const router = express.Router();
const { createPost, readPosts, readPost, updatePost, deletePost } = require("../controllers/post.controller");

router.post("/create/", createPost);
router.get("/read-all/", readPosts);
router.get("/read/:id/", readPost);
router.patch("/update/:id", updatePost);
router.delete("/delete/:id/", deletePost);

module.exports = router;
