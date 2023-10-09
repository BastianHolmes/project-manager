import Router from "express";
const router = Router();

import subtaskController from "../controllers/subtask.controller.js";

router.get("/:task_id", subtaskController.getAllSubTasks);
router.post("/", subtaskController.postSubTask);
router.delete("/", subtaskController.deleteSubtask);

export default router;
