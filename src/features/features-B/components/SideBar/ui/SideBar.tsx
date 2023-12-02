import React from "react";
import { RootState } from "entities/redux/store";
import { useSelector } from "react-redux";
import {
  CiViewTable,
  CiCalendarDate,
  CiViewBoard,
  CiUser,
  CiSettings,
} from "react-icons/ci";
import { FaRegUser, FaRegClipboard } from "react-icons/fa";

import styles from "./SideBar.module.css"
import { Link } from "react-router-dom";

const SideBar: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.profile);
  return (
    <div className={styles.sidebar}>
      <div className={styles.profile}>
        <div className={styles.iconbox}>

        
          <div> {
            user?.photoURL ?
              <img
              
            src={user?.photoURL}
            alt="UserAvatar"
            className={styles.userimg}
          />:   <FaRegUser className={styles.icon} />
          }</div>
          {
            user?.displayName?
 <h3>{user?.displayName}</h3>: <h1>User</h1>
          }
         
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.menu}>
        <ul>
          <Link to="/Boards">
            <li>
              <CiViewBoard /> Board
            </li>
          </Link>
          <Link to="#">
            <li>
              <CiUser /> Members
            </li>
          </Link>
          <Link to="#">
            <li>
              <CiSettings /> Workspace settings
            </li>
          </Link>
        </ul>
      </div>
      <div className={styles.line}></div>
      <div className={styles.menu}>

        <ul>
          <Link to="#">
            <li>
              <CiViewTable /> Table
            </li>
          </Link>
          <Link to="#">
            <li>
              <CiCalendarDate /> Calendar
            </li>
          </Link>
        </ul>
      </div>
      <div className={styles.line}></div>
      <div className={styles.menu}>

        <ul>
          <Link to="#Table">
            <li>    <FaRegClipboard   className={styles.tableIcon}/> Board 1</li>
          </Link>
         
        </ul>
      </div>
    </div>
  );
};

export default SideBar;