import { Router } from "express";
import multer from "multer";
const router = Router();

import taskController from "../controllers/tasks.controller.js";
const upload = multer({ dest: "uploads/" });

router.get("/", taskController.getAllTasks);
router.post("/", taskController.postTask);
router.put("/description", taskController.addDescription);
router.put("/status", taskController.changeStatus);
// router.put("/file", upload.single("file"), taskController.uploadFile);

export default router;
