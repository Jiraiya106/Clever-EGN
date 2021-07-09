import { TYPES } from "./action-types";

const INITIAL_STATE = {
  purchases: {
    tv: 0,
    fridge: 0,
    washingMashine: 0,
    sumPrice: 0,
  },
  user: {
    name: "Evgen",
    age: 30,
    secondName: "Petrobv",
  },
  isModalVisible: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.CHANGE_NAME: {
      return {
        ...state,
        name: action.name,
      };
    }

    case TYPES.CLEAR_PURCHASES: {
      return {
        ...state,
        purchases: {
          tv: 0,
          fridge: 0,
          washingMashine: 0,
          sumPrice: 0,
        },
      };
    }
    case TYPES.ADD_PURCHASES: {
      const { id, counter, price } = action;
      return {
        ...state,
        purchases: {
          ...state.purchases,
          [id]: state.purchases[id] + counter,
          sumPrice: state.purchases.sumPrice + price,
        },
      };
    }

    case TYPES.SHOW_LIMIT_MODAL: {
      return {
        ...state,
        isModalVisible: true,
      };
    }

    case TYPES.CLOSE_LIMIT_MODAL: {
      return {
        ...state,
        isModalVisible: false,
      };
    }

    default:
      return state;
  }
};
