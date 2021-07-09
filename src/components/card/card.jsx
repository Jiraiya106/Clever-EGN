import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { addPurchases } from "../../store/actions-creator";
import { Image } from "./card-image/image";

import styles from "./card.module.css";

export const Card = (props) => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);
  const [sumPrice, setSumPrice] = useState(0);

  const onCounter = ({ target: { value } }) => {
    setCounter(value);
    setSumPrice(value * props.cardData.price);
  };

  const onButtonClick = () => {
    dispatch(addPurchases(props.cardData.id, +counter, sumPrice));
    setCounter(0);
    setSumPrice(0);
  };

  const {
    cardData: { title, description, imgSrc },
  } = props;

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <div>{description}</div>
      <Image imgSrc={imgSrc} className={styles.cardImg} />
      <div>Цена: {props.cardData.price}$</div>
      <div>Сумма: {sumPrice ? `${sumPrice}$` : null}</div>
      <div>
        <label>
          Количество:
          <input
            type="number"
            name="card-counter"
            onChange={onCounter}
            value={counter}
          />
        </label>
      </div>
      <button type="button" onClick={onButtonClick}>
        Добавить в корзину
      </button>
    </div>
  );
};

Card.defaultProps = {
  cardData: {},
  onBuy: () => {},
};

Card.propTypes = {
  cardData: PropTypes.objectOf(PropTypes.any),
  onBuy: PropTypes.func,
};
