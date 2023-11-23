import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { SlOptions } from "react-icons/sl"
import { LuLayoutTemplate } from "react-icons/lu"
import Card from "entities/Card/ui/Card";
import { ItemsProps } from "pages/TablePage/ui/TablePage.interface";
import styles from "./MainCard.module.css"

const MainCard: React.FC<ItemsProps> = ({ id, mainTitle, author, date, tasks }) => {
  return (
    <div className={styles.MainCard}>
      <div className={styles.title}>
        <h3>{mainTitle}</h3>
        <div className={styles.optbtn} title="Options">
          <SlOptions />
        </div>
      </div>
      {
        tasks?.map((el) => {
          return(
            <Card key={el.id} card={el}/>
          )
        })
      }
      <div className={styles.actions}>
        <div className={styles.addBtn}>
          <BsPlusLg />
          <span>Add a card</span>
        </div>
        <div className={styles.allBtn} title="Create from template">
          <LuLayoutTemplate />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
