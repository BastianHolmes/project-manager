import { Router } from "express";
const router = Router();

import taskController from "../controllers/tasks.controller.js";

router.get("/", taskController.getAllTasks);
router.post("/", taskController.postTask);
router.put("/", taskController.addDescription);
router.put("/", taskController.changeStatus);

export default router;
