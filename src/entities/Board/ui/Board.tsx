import React from "react"
import styles from './Board.module.css'
import { BsStar } from "react-icons/bs";


const Board:React.FC=()=>{
    return(
        <div className={styles.board}>
            <h2>React js</h2>
            <div className={styles.info}>
            <h3>username</h3>
            <BsStar  className={styles.star}/>
            </div>
        </div>
       
      
    )
}
export default Board