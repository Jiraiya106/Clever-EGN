import React from "react";
import { useSelector } from "react-redux";

import { Cards } from "../cards";
import { Purchases } from "../purchases";
import { Modal } from "../modal";
import { useParams } from "react-router";

import styles from "./main.module.css";

export const Main = () => {
  const { id } = useParams();
  const isModalVisible = useSelector((state) => state.isModalVisible);
  return (
    <div className={styles.main}>
      <Cards />
      <Purchases />
      {isModalVisible && <Modal />}
    </div>
  );
};
