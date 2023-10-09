import { pool } from "../db/index.js";

const taskController = {
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
  addDescription: async (req, res) => {
    try {
      const { rows } = await pool.query(
        "UPDATE tasks SET description=$1 WHERE id=$2 returning *",
        [req.body.description, req.body.id]
      );
      res.status(200).json({
        msg: "OK",
        data: rows,
      });
    } catch (error) {
      res.json({ msg: error.msg });
    }
  },
  changeStatus: async (req, res) => {
    try {
      const { rows } = await pool.query(
        "UPDATE tasks SET status=$1 WHERE id=$2 returning *",
        [req.body.status, req.body.id]
      );
      res.status(200).json({
        msg: "OK",
        data: rows,
      });
    } catch (error) {
      res.json({ msg: error.msg });
    }
  },
  changePriority: async (req, res) => {
    try {
      const { rows } = await pool.query(
        "UPDATE tasks SET priority=$1 WHERE id=$2 returning *",
        [req.body.priority, req.body.id]
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

export default taskController;
