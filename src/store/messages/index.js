import { TYPES } from "../action-types";

const INITIAL_STATE = {
  messages: [],
  totalResults: null,
  isLoading: false,
  isError: false,
};

export const messagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.GET_MESSAGES_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case TYPES.GET_MESSAGES_REQUEST_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case TYPES.GET_MESSAGES_REQUEST_SUCCESS: {
      const { messages, totalResults } = action;
      return {
        ...state,
        isLoading: false,
        messages,
        totalResults,
      };
    }

    default:
      return state;
  }
};
