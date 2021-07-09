import { TYPES } from "./action-types";

export const clearPurchases = () => ({
  type: TYPES.CLEAR_PURCHASES,
});

export const addPurchases = (id, counter, price) => ({
  type: TYPES.ADD_PURCHASES,
  id,
  counter: counter,
  price,
});

export const showLimitModal = () => ({
  type: TYPES.SHOW_LIMIT_MODAL,
});

export const closeLimitModal = () => ({
  type: TYPES.CLOSE_LIMIT_MODAL,
});
