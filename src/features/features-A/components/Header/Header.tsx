import React from "react";
import styles from "./Header.module.css"
import { useState } from "react";
import { BsBellFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HeaderProps } from "./Header.interface";


const Header: React.FC<HeaderProps> = ({ user }) => {
  const [isUserMenuOpen, setUserMenuOpen] = useState<boolean>(false)
  

  const toggleUserMenu = (): void => {
    setUserMenuOpen(!isUserMenuOpen);
  }

  return (
    <header className={styles.header}>
      <div className={styles.headernavbar}>
        <h2>ToLearn</h2>
        <Link to="/Table">WorkSpace</Link>
        <span>Recent</span>
        <span>Favorit</span>
        <button className={styles.create}>Create</button>
      </div>
      <div>
        <input type="search" />
        <button>Search</button>
        <BsBellFill className={styles.bell} />
        <div className={styles.userContainer}>
          
         
          <img
            src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg"
            alt="user name"
            className={styles.userImage}
            onClick={toggleUserMenu} />

          {
            isUserMenuOpen ? (
              <div className={styles.userMenu}>
                <ul>
                  <li>
                    <Link to="">Profile</Link>
                  </li>
                  <li>
                    <Link to="">Settings</Link>
                  </li>
                  <li>
                    <Link to="/Login">Sign Out</Link>
                  </li>
                </ul>
              </div>
            ) : null

          }

        </div>

      </div>

    </header>
  )
}
export default Header