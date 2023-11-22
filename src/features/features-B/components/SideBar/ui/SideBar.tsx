import React from "react";
import styles from "./SideBar.module.css"
import { Link } from "react-router-dom";



const SideBar:React.FC=()=>{
    return(
      <div className={styles.sidebar}>
        <p>UserName</p>
        <hr/>
        <div className={styles.sidebarmenu} >
      <Link to="/Boards">Boards</Link>
          <span >Project</span>
          <span >Likes</span>
          <span >Calendar</span>
        </div>
          
      </div>
    )
}
export default SideBar