import React from "react";
import ReactDom from "react-dom";
import { useDispatch } from "react-redux";

import { closeLimitModal } from "../../store/actions-creator";

import styles from "./modal.module.css";

export const Modal = () => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(closeLimitModal());
  };

  return ReactDom.createPortal(
    <div className={styles.modal}>
      <div className={styles.modalCard}>
        <p>Слишком большая сумма!!!</p>
        <button type="button" onClick={onClose}>
          X
        </button>
      </div>
    </div>,
    document.getElementById("root")
  );
};
