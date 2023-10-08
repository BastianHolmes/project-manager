import { Router } from "express";
import multer from "multer";
const router = Router();

import taskController from "../controllers/tasks.controller.js";
import path from "path";

const uploadPath = path.join(__dirname, "../uploads");

const upload = multer({ dest: uploadPath });

router.get("/", taskController.getAllTasks);
router.post("/", taskController.postTask);
router.put("/description", taskController.addDescription);
router.put("/status", taskController.changeStatus);
router.put("/file", upload.single("file"), taskController.uploadFile);

export default router;
