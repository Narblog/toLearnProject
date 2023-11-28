import React, { useState } from "react";
import styles from "./Card.module.css"
import { CardProps } from "./Card.interface";
import { FaPen, FaAlignLeft, FaComment } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { clickChange,commentChange } from "entities/firebase/comments/commentsSlice";
import { RootState } from "entities/firebase/store";
import { changeTaskItemName } from "entities/firebase/tasks/taskSlice";


const Card: React.FC<CardProps> = ({ item, parentId }) => {
 
  const [isEditting, setEditting] = useState(false)
  const [itemName, setItemName] =useState(item.name)

  
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clickChange(true));
    dispatch(commentChange(item.comments));
  };

  const handleTaskItemChange = () => {
    setEditting(!isEditting)
  };

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value)
    dispatch(changeTaskItemName({ parentId, selfId: item.id, name: e.target.value }));

  }

  return(
   
    <div className={styles.box} >
        <div className={styles.taskName}>
          {!isEditting ? <p onClick={handleClick}>{item.name}</p>: <input type="text" value={itemName} onChange={handleInputChange}/>}
          <button className={styles.icon}  onClick={handleTaskItemChange}>
            <FaPen />
          </button>
        </div>

      
        </div>
  );
};

export default Card;
