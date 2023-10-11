import { pool } from "../db/index.js";
const commentsController = {
  postComments: async (req, res) => {
    try {
      const comments = req.body.comments;
      const query = `const query = 
      WITH RECURSIVE cte AS (
        SELECT * FROM unnest($1::json[]) as item
      ), recursive_cte AS (
        SELECT task_id, comment_text, parent_id FROM cte WHERE item ->> 'parentId' IS NULL
        UNION ALL
        SELECT cte.item ->> 'taskId', cte.item ->> 'comment', cte.item ->> 'parentId' FROM cte JOIN recursive_cte ON cte.item ->> 'parentId' = recursive_cte.task_id
      )
      INSERT INTO comments (task_id, comment_text, parent_id)
      SELECT task_id, comment_text, parent_id FROM recursive_cte
      RETURNING *;
    ;`;
      const { rows } = await pool.query(query, comments);
      res.status(200).json({ msg: "OK", data: rows });
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
