const { application } = require("express");
const express = require("express");
const {
  getPosts,
  getPost,
  addPost,
  updatePost,
  editPost,
  deletePost,
} = require("../controllers/postsController");

const router = express.Router();

// les routes post
//Get All Posts
router.get("/", getPosts);

//Ger Post
router.get("/post/:id", getPost);

//Create a new post
router.get("/edit/", editPost);

//Add Post
router.post("/", addPost);

//Edit Post
router.get("/edit/:id", editPost);

//Update Post
router.post("/update/:id", updatePost);

//Delete Post
router.get("/delete/:id", deletePost);

module.exports = router;
