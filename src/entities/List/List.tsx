import React from "react";
import styles from "./List.module.css"



const List:React.FC=()=>{
    return(
    <div className={styles.list}>
   <h1>Done</h1>
   <input type="text"/>
   <button>Add</button>
    </div>
    )
}
export default List