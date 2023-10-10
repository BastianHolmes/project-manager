import { pool } from "../db/index.js";
import transform from "../transform.js";
const commentsController = {
  postComments: async (req, res) => {
    try {
      const comments = transform(req.body);
      for (let i = 0; i < comments.length; i++) {
        const query =
          "INSERT INTO comments (task_id, comment_text, parent_id) VALUES($1,$2,$3)";
        const values = [
          comments[i].taskId,
          comments[i].comment,
          comments[i].parentId,
        ];
        const { rows } = await pool.query(query, values);
        res.status(200).json({ msg: "OK", data: rows });
      }
    } catch (error) {
      res.json({ msg: error.msg });
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
