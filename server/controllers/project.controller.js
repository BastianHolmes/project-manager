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
      const result = await dbModule.query(
        "INSERT INTO projects (name) values ($1) returning *",
        [req.body.name]
      );
      res.status(200).json({
        msg: "OK",
        data: {
          project: result.rows[0],
        },
      });
    } catch (error) {
      res.json({ msg: error.msg });
    }
  },
};

export default projectController;
