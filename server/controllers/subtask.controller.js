import { pool } from "../db/index.js";

const subtaskController = {
  getAllSubTasks: async (req, res) => {
    try {
      const { rows } = await pool.query(
        "select * from subtasks where task_id = $1",
        [req.params.id]
      );
      res.status(200).json({ msg: "OK", data: rows });
    } catch (error) {
      res.json({ msg: error.msg });
    }
  },
  postSubTask: async (req, res) => {
    try {
      const { rows } = await pool.query(
        "INSERT INTO subtasks (title, task_id) values ($1,$2) returning *",
        [req.body.title, req.body.task_id]
      );
      res.status(200).json({
        msg: "OK",
        data: rows,
      });
    } catch (error) {
      res.json({ msg: error.msg });
    }
  },
  deleteSubtask: async (req, res) => {
    try {
      const { rows } = await pool.query(
        "DELETE FROM subtasks WHERE id = $1 returning *",
        [req.body.id]
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

export default subtaskController;
