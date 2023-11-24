import React, { useState } from "react";
import { MdOutlineSubject } from "react-icons/md";
import { LiaCommentDots, } from "react-icons/lia";
import { FaRegPenToSquare } from "react-icons/fa6";
import styles from "./Card.module.css"
import Modal from "entities/Modal";
import Info from "entities/Info";
import { CardProps } from "./Card.interface";
import Comments from "entities/Comments/ui/Comments";

const Card: React.FC<CardProps> = ({ card }) => {
  const [isOpenInfo, setIsOpenInfo] = useState<boolean>(false);
  const [isOpenComments, setIsOpenComments] = useState<boolean>(false);

  return (
    <div className={styles.card}>
     <div className={styles.content}>
        <p>{card.title}</p>
      </div>
      <div className={styles.cardActions}>
        <div
          className={styles.btn}
          title="Information"
          onClick={() => setIsOpenInfo(true)}
        >
          <MdOutlineSubject />
        </div>
        <div
           className={styles.btn}
          title="Comments "
          onClick={() => setIsOpenComments(true)}
        >
          <LiaCommentDots />
          <span>{card.comments.length}</span>
          <span> </span>
         
        </div>
        <div    className={styles.btn} title="Edit">
          <FaRegPenToSquare />
        </div>
      </div>
      {isOpenInfo ? (
       
           <Modal close={setIsOpenInfo} >
            <Info  {...card} />
        
        </Modal> 

       
      ) : null}
      {isOpenComments ? (
        <Modal close={setIsOpenComments}>
          <Comments {...card}/>
        </Modal>
      ) : null}
    </div>
  );
};

export default Card;
