import Header from "features/features-A/components/Header";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "entities/firebase/store";
import styles from "./UserPage.module.css"

import { UserPageProps } from "./UserPage.interface";

const UserPage: React.FC = () => {
    const user = useSelector((state: RootState) => state.user.profile);
    return (
        <div>
            <Header />
            <div className={styles.box}>
                <div className={styles.page}>
                    <div className={styles.person}>
                        {user?.photoURL ? (
                            <img src={user.photoURL} alt="" className={styles.photo} />
                        ) : (
                            <div>No image</div>
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
                            <span>{user?.displayName}</span>
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