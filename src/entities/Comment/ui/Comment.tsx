import React from "react";
import styles from "./Comment.module.css";
import { CommentIProps } from "./Comment.interface";
import Replies from "entities/Replies";

const Comment: React.FC<CommentIProps> = ({ comment }) => {
  return (
    <div className={styles.commentContainer}>
        <div className={styles.userInfo}>
          <div className={styles.info}>
          <img src={comment.author.image} alt="UserPhoto" className={styles.image}/>
          <p>{comment.author.name}</p>
          </div>
    
          <div>
          
            <span>{comment.date}</span>
            <div className={styles.commentText}>{comment.text}</div>
          </div>
        </div>
     

      <Replies replies={comment.replies} />
      <div className={styles.addReply}>Add a Reply...</div>
    </div>
  );
};

export default Comment;