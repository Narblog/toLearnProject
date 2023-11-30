import React,{useState} from "react";
import { BsPlusLg } from "react-icons/bs";
import { SlOptions } from "react-icons/sl"
import { LuLayoutTemplate } from "react-icons/lu"
import Card from "entities/Card/ui/Card";
import { MainCardProps } from "./MainCard.interface";
import styles from "./MainCard.module.css"
import { Draggable,  } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { addItem } from "entities/firebase/tasks/taskSlice";
import { FaCheck ,FaCircleXmark } from "react-icons/fa6";


const MainCard: React.FC<MainCardProps> = ({task}) => {
  const [isTemplate, setisTemplate] = useState<boolean>(false)

const isOpen = (): void => {
    setisTemplate(!isTemplate);
  }
  const [newItemName, setNewItemName] = useState("");
  const [addNewClicked, setAddNewClicked] = useState(false);

  const dispatch = useDispatch();

  const handleAddClick = () => {
    setAddNewClicked(true);
  };


  const onInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNewItemName(e.target.value)
  }

  const onAddNewClick = () => {
    if(newItemName===""){
      setAddNewClicked(false)
    }else{
       dispatch(addItem({parentId: task.id, name: newItemName}))
       setNewItemName('')
    }
  } 


  return (
    <div className={styles.MainCard}>
      <div className={styles.title}>
        <h3>{task.taskState }</h3>
        <div className={styles.optbtn} title="Options">
          <SlOptions />
        </div>
      </div>
      {task.tasks.map((item, index) => {
        return (
          <Draggable
            key={item.id}
            draggableId={item.id.toString()}
            index={index}
          >
            {(provided) => {
              return (
                <div
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                >
                  <Card item={item} parentId={task.id} key={item.id} />
                </div>
              );
            }}
          </Draggable>
        );
      })}
      
      <div className={styles.actions}>
      {!addNewClicked ? (
          <div className={styles.taskBottomDiv}>
            <button className={styles.addButton} onClick={handleAddClick}>
              + Add a card
            </button>
          
          </div>
        ) : (
          <div className={styles.addNew}>
            <input type="text" value={newItemName} onChange={onInputChange }/>
            <div className={styles.addSave} onClick={onAddNewClick}>{newItemName!=="" ? <FaCheck className={styles.iconsX} />: <FaCircleXmark className={styles.iconsX}  />}</div>
          </div>
        )}
        
        
      </div>
    </div>
  );
};

export default MainCard;
