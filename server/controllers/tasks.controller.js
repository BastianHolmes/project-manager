import { pool } from "../db/index.js";
const projectController = {
  getAllTasks: async (req, res) => {
    try {
      const { rows } = await pool.query("select * from tasks");
      res.status(200).json({ msg: "OK", data: rows });
    } catch (error) {
      res.json({ msg: error.msg });
    }
  },
  postTask: async (req, res) => {
    try {
      const { rows } = await pool.query(
        "INSERT INTO tasks (count, title,project_id, status) values ($1,$2,$3,$4) returning *",
        [req.body.count, req.body.title, req.body.project_id, req.body.status]
      );
      res.status(200).json({
        msg: "OK",
        data: rows,
      });
    } catch (error) {
      res.json({ msg: error.msg });
    }
  },
};

export default projectController;
