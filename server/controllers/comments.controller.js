import { pool } from "../db/index.js";
const commentsController = {
  postComments: async (req, res) => {
    try {
      const query = `INSERT INTO comments (task_id, comment_text, parent_id) VALUES ($1, $2, $3) returning *;`;
      const { rows } = await pool.query(query, [
        req.body.task_id,
        req.body.comment_text,
        req.body.parent_id,
      ]);
      res.status(200).json({ msg: "OK", data: rows });
    } catch (error) {
      res.json({ msg: error.message });
    }
  },

  getCommentsByTaskId: async (req, res) => {
    try {
      const query = `WITH RECURSIVE recursive_comments AS (
        SELECT id, comment_text, parent_id, created_at, updated_at
        FROM comments
        WHERE task_id = $1 AND parent_id IS NULL
        UNION ALL
        SELECT c.id, c.comment_text, c.parent_id, c.created_at, c.updated_at
        FROM comments c
        INNER JOIN recursive_comments rc ON rc.id = c.parent_id
        )
        SELECT *
        FROM recursive_comments
        ORDER BY created_at;`;
      const { rows } = await pool.query(query, [req.params.id]);
      res.status(200).json({
        msg: "OK",
        data: rows,
      });
    } catch (error) {
      res.json({ msg: error.msg });
    }
  },
};

export default commentsController;
