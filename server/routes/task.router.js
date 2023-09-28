import { Router } from "express";
const router = Router();

import projectController from "../controllers/tasks.controller.js";

router.get("/", projectController.getAllTasks);

export default router;