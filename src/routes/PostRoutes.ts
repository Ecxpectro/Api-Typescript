import { Router } from "express";
import PostController from "../controllers/PostController";

const PostRouter = Router();

PostRouter.post("/api/post/create", PostController.insertPost);

PostRouter.post("/api/post/getallpost", PostController.getAllPost);

PostRouter.get("/api/post/getPostByUserId/:id", PostController.getPostbyUserId);

export default PostRouter;
