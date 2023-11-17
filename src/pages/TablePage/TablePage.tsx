import SideBar from "features/features-B/components/SIdeBar";
import Header from "features/features-A/components/Header";
import React from "react";
import styles from "./TablePage.module.css"
import { BsFillBookmarkStarFill,BsFillBookmarkHeartFill,BsFillFilterCircleFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";
import List from "entities/List";
import { HeaderProps, } from "features/features-A/components/Header/Header.interface";


const TablePage:React.FC<HeaderProps | any>=({news})=>{
    return(
        <div>
             <Header />
             <SideBar/>
       <div className={styles.table}>
        <nav className={styles.tablenavbar}>
            <h2>My Table Name</h2>
            <BsFillBookmarkStarFill/>
            <BsFillBookmarkHeartFill/>
            <BsFillFilterCircleFill className={styles.filter}/>
           < FaBars/>
        </nav>
       
        <div className={styles.list}>
        <List news={news}/>
       
        </div>
       </div>
      
        </div>
      
    )
}
export default TablePage