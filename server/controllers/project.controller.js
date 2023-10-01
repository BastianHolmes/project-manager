import { pool } from "../db/index.js";
const projectController = {
  getAllProjects: async (req, res) => {
    try {
      const { rows } = await pool.query("select * from projects");
      res.status(200).json({ msg: "OK", data: rows });
    } catch (error) {
      res.json({ msg: error.msg });
    }
  },
  postNewProject: async (req, res) => {
    try {
      const { rows } = await pool.query(
        "INSERT INTO projects (title) values ($1) returning *",
        [req.body.title]
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
