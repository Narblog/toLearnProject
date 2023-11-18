import React, { useState } from "react";
import Modal from "entities/Modal";
import { FaPen } from "react-icons/fa6";
import styles from "./List.module.css"

const List: React.FC<any> = ({ news }) => {
    const [isOpen, setIsOpen] = useState<Boolean>(true)
    return (
        <div className={styles.list}>
            <div className="card text-bg-light mb-3" >
                <div className="card-header">Done</div>
                <div className="card-body">
                    <div className="list-group">
                        {
                            news.map((item: any) => {
                                return (
                                    <div key={item.id} >
                                        <span className="list-group-item list-group-item-action"><h1>{item.title}</h1>
                                            <p>{item.content} <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
                                                <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                                                    <h2>Comment</h2>
                                                    <input type="text" />


                                                </Modal><FaPen />


                                            </button></p></span>
                                    </div>
                                )

                            })
                        }

                    </div>
                </div>
            </div>


        </div>
    )
}
export default List 