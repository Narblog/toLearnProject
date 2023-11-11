import React from "react";
import styles from "./SideBar.module.css"
import { Link } from "react-router-dom";


const SideBar:React.FC=()=>{
    return(
      <div className={styles.sidebar}>
        <p>UserName</p>
        <hr/>
        <div className={styles.sidebarmenu} >
         <a href="#"> Table</a>
          <a href="#">Project</a>
          <a href="#">Likes</a>
          <a href="#">Calendar</a>
        </div>
          
      </div>
    )
}
export default SideBar