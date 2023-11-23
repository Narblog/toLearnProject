import Header from "features/features-A/components/Header";
import React from "react";
import styles from "./UserPage.module.css"
import { AiFillEdit } from "react-icons/ai";
import { FcBusinessman } from "react-icons/fc";
import { UserPageProps } from "./UserPage.interface";

const UserPage: React.FC<UserPageProps> = ({ user }) => {
    return (
        <div>
            <Header />
            <div className={styles.box}>
                <div className={styles.page}>
                    <div className={styles.person}>
                        {
                            user?.photoURL ? <img src={user.photoURL} alt="" /> : <FcBusinessman className={styles.man} />
                        }
                    </div>
                    <div className={styles.userInfo}>
                        <h2>{user?.displayName}</h2>
                        <p>Student</p>
                    </div>
                    <AiFillEdit className={styles.edit} />
                </div>
                <div className={styles.info}>
                    <h2>Information</h2>
                    <hr />
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