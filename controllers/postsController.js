const pug = require("pug");
const Post = require("../models/postModel");
const mongoose = require("mongoose");
async function getPosts(req, res) {
  try {
    const posts = await Post.find();
    return res.render("index", { posts }); 
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
      data: [],
    });
  }
}

async function getPost(req, res) {
  //Recupérer un post definie par son _id dans myBlogdb et envoyer post.pug au client
  try {
    const post = await Post.findById(req.params.id);
    return res.render("post", { post });
    
  } catch (e) {
    return res.status(400).json({
      success: false,
    });
  }
}

async function addPost(req, res) {
  const payload = req.body;
  //Créer un nouveau post dans myBlogdb et rediriger le client vers /
  const post = new Post(payload);
  await post.save();
  return res.redirect("/posts");
}

async function editPost(req, res) {
  //Recupérer un post definie par son _id et renvoyer au client editPost.pug avec les donnée de ce post
  const id = req.params.id;
  if (!id) {
    //Create a new post
    return res.render("editPost", { isEdit: false });
  }
  const post = await Post.findById(id);
  if (post) return res.render("editPost", { isEdit: true, post });
}
async function updatePost(req, res) {
  //metre à jour un post et rediriger le client vers ce post
  const post = await Post.findById(req.params.id);
  const payload = req.body;

  Object.keys(payload).map((key) => (post[key] = payload[key]));
  post.save();
  return res.redirect("/posts");
}

async function deletePost(req, res) {
  //Suprimer un post et rediriger le client vers /
  const id = req.params.id.toString();
  const isExist = await Post.findOne({ _id: id });

  if (!isExist) return res.status(404).json({ message: "Post not found" });

  const deletedPost = await Post.deleteOne({ _id: id }).exec();
  return res.redirect("/posts");
}

module.exports = {
  getPosts,
  getPost,
  addPost,
  updatePost,
  editPost,
  deletePost,
};
