import { useEffect, useState } from "react";
import styles from "./Comments.module.scss";

const Comments = ({ comments, handleReply }) => {
  const [msg, setMsg] = useState([]);

  useEffect(() => {
    formatData();
  }, [comments]);

  const helper = (arr, item) => {
    arr.forEach((el) => {
      if (el.id === item.parentId) {
        el.children = el.children ? [...el.children, item] : [item];
      } else {
        el.children && helper(el.children, item);
      }
    });
  };

  const formatData = () => {
    let data = [];
    for (let item of comments) {
      if (!item.parentId) {
        data.push(item);
      } else {
        helper(data, item);
      }
    }
    setMsg(data);
  };

  return (
    <div className="App">
      {msg.map((item) => (
        <Tree key={item.id} data={item} handleReply={handleReply} />
      ))}
    </div>
  );
};

const Tree = ({ data, handleReply }) => {
  const handleReplyClick = (id) => {
    handleReply(id);
  };

  return (
    <>
      <div className={styles.bubble}>
        {data.body}
        <button onClick={() => handleReplyClick(data.id)}>Ответить</button>
      </div>
      {data.children &&
        data.children.map((item) => (
          <div className={styles.children}>
            <Tree key={item.id} data={item} handleReply={handleReply} />
          </div>
        ))}
    </>
  );
};

export default Comments;
