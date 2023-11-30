import React, { useEffect } from "react";
import styles from "./Header.module.css"
import { useState } from "react";
import { BsBellFill, BsBellSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HeaderProps } from "./Header.interface";
import { UserPageProps } from "pages/UserPage/ui/UserPage.interface";
import { FaClipboardQuestion } from "react-icons/fa6";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "entities/firebase/user/userSlice";
import { auth } from "../../../../../firebase";
import { useSelector } from "react-redux";
import { RootState } from "entities/firebase/store";
import { FaUserGraduate } from "react-icons/fa6";
import CreatePostPage from "entities/CreatePost/CreatePost";
const Header: React.FC<HeaderProps | UserPageProps> = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch(setUser(currentUser));
    });

    return unsubscribe;
  }, []);

  const handleSignOut = () => {
    signOut(auth).catch((error) => console.log(error));
  };




  const user = useSelector((state: RootState) => state.user.profile);





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
            <CreatePostPage/>
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
              user?.photoURL ?
                <img

                  src={user?.photoURL}
                  alt="UserAvatar"
                  className={styles.userImage}
                /> : <div><FaUserGraduate className={styles.gradient} /></div>
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
                    <Link to="/Login" onClick={handleSignOut}>Sign Out</Link>
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