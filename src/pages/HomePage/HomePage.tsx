import React from "react";
import { Link } from "react-router-dom";
import styles from './HomePage.module.css'



const HomePage: React.FC = () => {

    return (
        <header className={styles.HomePageHeader}>
            <nav >
                <h1>ToLearn</h1>
                <div>
                 
                    <Link to="/Login" >Sign In</Link>
                    <Link to="/Register" className={styles.register}>Sign Up</Link>
                </div>
            </nav>
            <div className={styles.box}>
                <h2>ToLearn</h2>
                <p>Learn Trello</p>

                <main >
                    <h3> ToLearn brings all your tasks, teammates, and tools together</h3>
                    <input type="email" />
                    <button className={styles.button}><Link className={styles.link} to="/Register">Sign Up</Link></button>
                </main>
            </div>


        </header>

    )
}
export default HomePage