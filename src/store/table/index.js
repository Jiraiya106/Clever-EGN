import { TYPES } from "../action-types";

const INITIAL_STATE = {
  tableData: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const tableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.GET_TABLE_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMessage: "",
      };
    }

    case TYPES.GET_TABLE_DATA_REQUEST_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.message,
      };
    }
    case TYPES.GET_TABLE_DATA_REQUEST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        tableData: action.data,
      };
    }

    default:
      return state;
  }
};
