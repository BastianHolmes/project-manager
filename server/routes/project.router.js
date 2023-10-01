import { Router } from "express";
const router = Router();

import projectController from "../controllers/project.controller.js";

router.get("/", projectController.getAllProjects);
router.post("/", projectController.postNewProject);

export default router;
