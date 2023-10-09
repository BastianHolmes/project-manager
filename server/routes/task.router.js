import { Router } from "express";
const router = Router();

import taskController from "../controllers/tasks.controller.js";

router.get("/", taskController.getAllTasks);
router.post("/", taskController.postTask);
router.put("/description", taskController.addDescription);
router.put("/status", taskController.changeStatus);
router.put("/priority", taskController.changePriority);

export default router;
