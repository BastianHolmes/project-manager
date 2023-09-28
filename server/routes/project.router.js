import { Router } from "express";
const router = Router();

import projectController from "../controllers/project.controller.js";

router.get("/", projectController.getAllProjects);

export default router;
