import React from "react";
import styles from "./Comments.module.css";
import { CommentsProps } from "../comments.interface";
import Comment from "entities/Comment/ui/Comment";
const Comments: React.FC<CommentsProps> = ({ comments }) => {
    return (

        <div className={styles.commentsTab}>
            <h1>Information  </h1>
            <ul className={styles.commentsList}>
                {comments.map((comment) => (
                    <li className={styles.comment} key={comment.id}>
                        <Comment comment={comment} key={comment.id} />
                    </li>
                ))}

                {!comments.length ? <h2>Info...</h2> : null}
            </ul>
        </div>
    );
};

export default Comments;
