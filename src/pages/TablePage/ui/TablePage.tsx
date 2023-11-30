import SideBar from "features/features-B/components/SideBar";
import Header from "features/features-A/components/Header";
import React, { useState } from "react";
import styles from "./TablePage.module.css"
import List from "entities/List";
import { RootState } from "entities/firebase/store";
import { useDispatch,useSelector } from "react-redux";
import { addTask } from "entities/firebase/tasks/taskSlice";
import Modal from "entities/Modal";
import Comments from "entities/Comments";




const TablePage:React.FC=()=>{
    const dispatch = useDispatch();
    
  const [newTaskName, setNewTaskName] = useState("");
  const [addNewClicked, setAddNewClicked] = useState(false);

  const handleAddClick = () => {
    setAddNewClicked(true);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(e.target.value);
  };

  const onAddNewClick = () => {
    if (newTaskName === "") {
      setAddNewClicked(false);
    } else {
      dispatch(addTask(newTaskName));
      setNewTaskName("");
      setAddNewClicked(false);
    }
  };

  const comments = useSelector((state: RootState) => {
    return state.comments.comments;
  });

  const isClicked = useSelector((state: RootState) => {
    return state.comments.isClicked;
  });

    return(
      <div>
             <Header />
           
       <div className={styles.table}>
        <SideBar/>
       <div className={styles.listGroup}>
       <List />
        
          {!addNewClicked ? (
            <button onClick={handleAddClick} className={styles.addList}>
              + Add
            </button>
          ) : (
            <div className={styles.addNewList}>
              <input
                type="text"
                onChange={onInputChange}
                placeholder="Add list name"
                value={newTaskName}
              />{" "}
              <button  onClick={onAddNewClick}>
                {newTaskName !== "" ? "Add new List" : "Close"}
              </button>
            </div>
          )}
          {comments ? (
            <div className={styles.modal}>
              <Modal>
                <Comments comments={comments} />
              </Modal>
            </div>
          ) : null}
        </div>
        {isClicked ? <div className={styles.overlay}></div> : null}
      </div>
     
      
        </div>
        
    )
}
export default TablePage