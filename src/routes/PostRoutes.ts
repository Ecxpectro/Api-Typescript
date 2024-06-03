import { Router } from "express";
import PostController from "../controllers/PostController";

const PostRouter = Router();

PostRouter.post("/api/post/create", PostController.insertPost);

PostRouter.get("/api/post/getbyuser");

export default PostRouter;
