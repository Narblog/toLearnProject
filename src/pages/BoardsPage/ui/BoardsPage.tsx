
import Header from "features/features-A/components/Header";
import React from "react";
import styles from "./Boards.module.css"
import { HeaderProps, } from "features/features-A/components/Header/ui/Header.interface";
import SideBoards from "entities/SideBoards";
import { FaStar } from "react-icons/fa6";
import Board from "entities/Board";



const BoardsPage: React.FC<HeaderProps> = () => {
    return (
        <div>
            <Header />
            <div className='container'>
                <div className={styles.boards}>
                    <SideBoards />
                    <div className={styles.table}>
                        <div>
                            <h3> <FaStar />Marked boards</h3>
                            <div className={styles.box}>
                                <Board />  
                            </div>
                        </div>
                        <div className={styles.inline}>
                            <h3>YOUR WORKSPACES</h3>
                            <div className={styles.box}>
                                <Board />  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BoardsPage