import { Link } from "react-router-dom";
import { CommentProps } from "./Comment.interface";
import "./Comment.css"

const Comment: React.FC<CommentProps> = ({
  id,
  author,
  date,
  message,
  reply,
}) => {
  return (
    <div className="comment">
      <div className="user-photo">
        <img
          src="https://fs01.cap.ru//www21-11/galatr/person/cb45deff-7216-4306-80f7-9e48d03f437e/no_avatar_3st4mbc2.png"
          alt="User"
        ></img>
      </div>
      <div className="user-data">
        <Link to="#">{author}</Link>
        <span>{(new Date().toDateString())}</span>
      </div>
      <div className="comment-content">
        <p>{message}</p>
        <div className="replies">
          {reply
            ? reply.map((el) => {
                return <Comment key={el.id} {...el} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Comment;