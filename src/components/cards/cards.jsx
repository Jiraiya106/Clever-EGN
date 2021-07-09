import React from "react";

import { Card } from "../card";

import { data } from "../../constants/goods-data";

import styles from "./cards.module.css";

export const Cards = (props) => (
  <div className={styles.cardsContainer}>
    <div className={styles.cards}>
      {data.map((cardData) => (
        <Card
          cardData={cardData}
          key={cardData.key}
          store={props.store}
        />
      ))}
    </div>
  </div>
);
