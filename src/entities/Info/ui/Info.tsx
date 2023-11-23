import { TasksProps } from "pages/TablePage/ui/TablePage.interface";
import "./info.css";

const Info: React.FC<TasksProps> = ({
  id,
  author,
  date,
  description,
  title,
}) => {
  return (
    <>
      <h1>{title}</h1>
      <div className="modal-content">
        <p>{description}</p>
        <div className="line"></div>
        <div className="line"></div>
        <span>{author}</span>
      </div>
    </>
  );
};

export default Info;