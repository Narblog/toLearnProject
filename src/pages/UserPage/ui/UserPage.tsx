import Header from "features/features-A/components/Header";
import React from "react";
import styles from "./UserPage.module.css"
import { AiFillEdit } from "react-icons/ai";
import { FcBusinessman } from "react-icons/fc";

const UserPage: React.FC = () => {
    return (
        <div>
            <Header />

            <div className={styles.box}>
               
                    <div className={styles.page}>
                        <div className={styles.person}>
                        <FcBusinessman className={styles.man}/>
                        </div>
                        <h2>John </h2>
                        <p>Web Desinger</p>
                        <AiFillEdit className={styles.edit}/>
                    </div>
                    <div className={styles.info}>
                    <h2>Information</h2>
                    <hr/>
                    <div className={styles.infobox}>
                        <div>
                        <p>Email</p>
                         <span>google@gmail.com</span>
                        </div>
         
                        <div>
                        <p>Phone</p>
                         <span>+32423423421</span>
                        </div>
                    </div>
                
                  
                    
                    
                    </div>
            </div>

        </div>
    )
}
export default UserPage