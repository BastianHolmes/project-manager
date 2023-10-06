import { Router } from "express";
const router = Router();

import projectController from "../controllers/tasks.controller.js";

router.get("/", projectController.getAllTasks);
router.post("/", projectController.postTask);

export default router;
