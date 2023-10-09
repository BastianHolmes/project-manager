import Router from "express";
const router = Router();

import subtaskController from "../controllers/subtask.controller.js";

router.get("/", subtaskController.getAllSubTasks);
router.post("/", subtaskController.postSubTask);
router.delete("/", subtaskController.deleteSubtask);

export default router;
