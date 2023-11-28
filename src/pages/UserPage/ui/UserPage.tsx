import Header from "features/features-A/components/Header";
import React from "react";
import { useSelector } from "react-redux";
import { FaUserGraduate } from "react-icons/fa6";
import styles from "./UserPage.module.css"



const UserPage: React.FC = () => {
    const user = useSelector((state: any) => state.user.profile);
   
    return (
        <div>
            <Header />
            <div className={styles.box}>
                <div className={styles.page}>
                    <div className={styles.person}>
                        {user?.photoURL ? (
                            <img src={user.photoURL} alt="" className={styles.photo} />
                        ) : (
                            <div>< FaUserGraduate  className={styles.icons}/></div>
                        )}
                    </div>
                   <h1>Student</h1>

                </div>
                <div className={styles.info}>
                    <h2>Information</h2>
                    <hr />
                    <div className={styles.infobox}>
                        <div>
                            <p>Name</p>
                            <span>  {user?.displayName ? (
                            <div>{user.displayName}</div>
                        ) : (
                            <h2>Guest</h2>
                        )}</span>
                        </div>

                        <div>
                            <p>Email</p>
                            <span>{user?.email}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default UserPage