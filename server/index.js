import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/project.router.js";

const app = express();
dotenv.config();
app.use(express.json());

app.use("/api/v1/projects", router);

app.listen(process.env.PORT, () =>
  console.log("Server is running on port 5000")
);
