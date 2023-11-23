import React from "react"
import styles from "./SideBoards.module.css"
import { Link } from "react-router-dom"
import { BsPlusLg } from "react-icons/bs";
import { FaTable,FaClipboard, FaConfluence} from "react-icons/fa6";

const SideBoards:React.FC=()=>{
    return(
        <div className={styles.boards}>
             <Link to="/Table"> <FaTable /> Table</Link>
            <Link to="/Boards"><FaClipboard /> Boards</Link>
            <Link to="/HomePage"><FaConfluence />Home Page</Link>
            <div>
            <div className={styles.line}></div>
           <p className={styles.WorkSpaces}>WorkSpaces  <BsPlusLg className={styles.icons}/></p>    


            </div>
        </div>
    )
}
export default SideBoards