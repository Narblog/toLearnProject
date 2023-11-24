import { TasksProps } from "pages/TablePage/ui/TablePage.interface";
import styles from "./Info.module.css"
import { FaCircleInfo } from "react-icons/fa6";
const Info: React.FC<TasksProps> = ({
  id,
  author,
  date,
  info,
  title,
}) => {
  return (
    <>
      <h1>{title}</h1>
      <div className={styles.modal}>
      <FaCircleInfo />
        <p>{info}</p>
        <div className={styles.line}></div>
      
        <span>{author}</span>
      </div>
    </>
  );
};

export default Info;