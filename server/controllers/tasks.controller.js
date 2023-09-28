import { pool } from "../db/index.js";
const projectController = {
  getAllTasks: async (req, res) => {
    try {
      const { rows } = await pool.query("select * from tasks");
      res.json({ msg: "OK", data: rows[0] });
    } catch (error) {
      res.json({ msg: error.msg });
    }
  },
};

export default projectController;