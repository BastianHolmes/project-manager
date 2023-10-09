import Router from "express";
const router = Router();

import subtaskController from "../controllers/subtask.controller.js";

router.get("/:id", subtaskController.getAllSubTasks);
router.post("/", subtaskController.postSubTask);
router.delete("/:id", subtaskController.deleteSubtask);
router.put("/:id", subtaskController.updateSubtask);

export default router;
