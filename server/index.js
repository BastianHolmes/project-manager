import express from "express";
import dotenv from "dotenv";
import projectsRouter from "./routes/project.router.js";
import tasksRouter from "./routes/task.router.js";
import subtasksRouter from "./routes/subtask.router.js";
import cors from "cors";

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());

app.use("/api/v1/projects", projectsRouter);
app.use("/api/v1/tasks", tasksRouter);
app.use("/api/v1/subtasks", subtasksRouter);
app.listen(process.env.PORT, () =>
  console.log("Server is running on port 5000")
);
