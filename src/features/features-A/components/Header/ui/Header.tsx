import React from "react";
import styles from "./Header.module.css"
import { useState } from "react";
import { BsBellFill, BsBellSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HeaderProps } from "./Header.interface";
import { FcBusinessman } from "react-icons/fc";
import { UserPageProps } from "pages/UserPage/ui/UserPage.interface";
import { FaClipboardQuestion } from "react-icons/fa6";
const Header: React.FC<HeaderProps | UserPageProps> = ({ user }) => {
  const [isUserMenuOpen, setUserMenuOpen] = useState<boolean>(false)
  const [isBell, setIsBell] = useState<boolean>(false)
  const [isCreate, setIsCreate] = useState<boolean>(false)

  const toggleUserMenu = (): void => {
    setUserMenuOpen(!isUserMenuOpen);
  }
  const toggleisBell = (): void => {
    setIsBell(!isBell);
  }
  const toggleisCreate = (): void => {
    setIsCreate(!isCreate);
  }
  return (
    <header className={styles.header}>
      <div className={styles.headernavbar}>
        <Link to="/Boards"><h2>ToLearn</h2></Link>
        <Link to="/Table">WorkSpace</Link>
        <span>Recent</span>
        <span>Favorit</span>
        <button className={styles.create} onClick={toggleisCreate}>Create</button>
        {
          isCreate ? (
            <div className={styles.isCreate}>
              <h1>Create Board</h1>
              <img className={styles.imageBoard} src="https://images.ctfassets.net/rz1oowkt5gyp/4kCNudjaBYj90CGgG7Lict/cbafa67336b2007278f50d99ceabfb22/Boards_2x.png" alt="images" />
              <div> Board title: <input type="text" required /></div>
              <h6 ><FaClipboardQuestion />Enter the name of the board</h6>
              <div> Visibility:  <select id="cars"className={styles.select} name="cars">
                  <option value="volvo">Yes</option>
                  <option value="saab">No</option>
                </select></div>
  
        <p className={styles.info}>You can add a few more boards to the workspace - 6 boards.
           In the free version, workspaces can have up to 10 open boards.
            To add more, please subscribe.</p>
             
              <button className={styles.newBtn}>Create </button>
            </div>
          ) : null
        }
      </div>
      <div>
        <input type="search" className={styles.inputsearch} />
        <button>Search</button>
        <BsBellFill className={styles.bell} onClick={toggleisBell} />
        {
          isBell ? (
            <div className={styles.isBell}>
              <BsBellSlash className={styles.bsbell} />
              <p>You are not notifications</p>
            </div>
          ) : null

        }
        <div className={styles.userContainer}>
          <div className={styles.person} onClick={toggleUserMenu}>
            {
              user?.photoURL ? <img src={user.photoURL} alt="" /> : <FcBusinessman className={styles.man} />
            }
          </div>
          {
            isUserMenuOpen ? (
              <div className={styles.userMenu}>
                <ul>
                  <li>
                    <Link to="/User">Profile</Link>
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