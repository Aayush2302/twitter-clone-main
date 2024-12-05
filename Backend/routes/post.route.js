import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  createPost,
  deletePost,
  commentPost,
  likeUnlikePost,
  getAllPosts,
  getLikedPosts,
  getFollowingPosts,
  getUserPosts,
} from "../controllers/post.controller.js";

const Router = express.Router();
Router.get("/all", protectRoute, getAllPosts);
Router.get("/likes/:id", protectRoute, getLikedPosts);
Router.get("/following", protectRoute, getFollowingPosts);
Router.get("/user/:username", protectRoute, getUserPosts);
Router.post("/create", protectRoute, createPost);
Router.post("/like/:id", protectRoute, likeUnlikePost);
Router.post("/comment/:id", protectRoute, commentPost);
Router.delete("/:id", protectRoute, deletePost);

export default Router;
