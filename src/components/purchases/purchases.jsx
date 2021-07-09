import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearPurchases, showLimitModal } from "../../store/actions-creator";

import styles from "./purchases.module.css";

export const Purchases = () => {
  const dispatch = useDispatch();
  const purchases = useSelector((state) => state.purchases);

  const onClearClick = () => {
    const clearPurchasesAction = clearPurchases();
    dispatch(clearPurchasesAction);
  };

  const onBuy = () => {
    if (purchases.sumPrice > 4000) {
      dispatch(showLimitModal());
    }
  };

  return (
    <div className={styles.purchases}>
      Корзина:
      <p>Холодильник: {purchases.fridge}</p>
      <p>TV: {purchases.tv}</p>
      <p>Стиралка: {purchases.washingMashine}</p>
      <div>Сумма Покупок: {purchases.sumPrice} $</div>
      <button type="button" className={styles.buyButton} onClick={onClearClick}>
        Очистить корзину
      </button>
      <button type="button" className={styles.buyButton} onClick={onBuy}>
        Купить
      </button>
    </div>
  );
};
