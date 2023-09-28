import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import projectsRouter from "./routes/project.router.js";
import tasksRouter from "./routes/task.router.js";

const app = express();
dotenv.config();
app.use(express.json());

app.use("/api/v1/projects", projectsRouter);
app.use("/api/v1/tasks", tasksRouter);

app.listen(process.env.PORT, () =>
  console.log("Server is running on port 5000")
);
