import SideBar from "features/features-B/components/SideBar";
import Header from "features/features-A/components/Header";
import React from "react";
import styles from "./TablePage.module.css"
import { BsFillBookmarkStarFill,BsFillBookmarkHeartFill,BsFillFilterCircleFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";
import List from "entities/List";
import { TableProps } from "./TablePage.interface";




const TablePage:React.FC<TableProps>=({items})=>{
    return(
      <div>
             <Header />
           
       <div className={styles.table}>
        <div className={styles.list}>
        <SideBar/>
        <List  items={items} />
       
        </div>
     
      
        </div>
        </div>
    )
}
export default TablePage