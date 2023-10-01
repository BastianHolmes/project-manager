import { pool } from "../db/index.js";
const projectController = {
  getAllProjects: async (req, res) => {
    try {
      const { rows } = await pool.query("select * from projects");
      res.json({ msg: "OK", data: rows });
    } catch (error) {
      res.json({ msg: error.msg });
    }
  },
};

export default projectController;
