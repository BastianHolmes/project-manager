import {Router} from "express";
const router = Router();

import commentsController from "../controllers/comments.controller.js";

router.post("/", commentsController.postComments);
router.get("/:id", commentsController.getCommentsByTaskId);

export default router;