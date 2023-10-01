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
};

export default projectController;
