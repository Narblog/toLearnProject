import { TasksProps } from "pages/TablePage/ui/TablePage.interface";
import Comment from "entities/Comment";

const Comments: React.FC<TasksProps> = ({
    id,
    title,
    comments,
}) => {
    console.log(comments);
    return (
        <>
            <h1>{title}</h1>
            <div className="modal-content">
                <div className="line"></div>
                <div className="line"></div>
                <div className="comments-wrapper">
                    {comments.map((el: any) => {
                        return <Comment key={el.id} {...el} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default Comments;
