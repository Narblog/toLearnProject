import React from "react";
import {
  CiViewTable,
  CiCalendarDate,
  CiViewBoard,
  CiUser,
  CiSettings,
} from "react-icons/ci";
import { FaRegUser, FaRegClipboard } from "react-icons/fa";

import styles from "./Sidebar.module.css"
import { Link } from "react-router-dom";

const SideBar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.profile}>
        <div className={styles.iconbox}>

          <FaRegUser className={styles.icon} />
          <h3>Name Surname</h3>
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
          <Link to="#">
            <li>    <FaRegClipboard   className={styles.tableIcon}/> Board 1</li>
          </Link>
          <Link to="#">
            <li>  <FaRegClipboard className={styles.tableIcon}/> Board 2</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;