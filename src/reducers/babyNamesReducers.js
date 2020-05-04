import {
  FETCH_BABY_NAMES_SUCCESS,
  FETCH_BABY_NAMES_ERROR,
  SET_BABY_NAME_LIST_ID,
  CREATE_BABY_NAME_PENDING,
} from "../actions/babyNameActions";

const initialBabyNamesState = {
  response: [],
  errors: [],
};

export function babyNamesApiReducer(state = initialBabyNamesState, action) {
  switch (action.type) {
    case FETCH_BABY_NAMES_SUCCESS:
      return { ...state, response: action.babyNames };
    case FETCH_BABY_NAMES_ERROR:
      return {
        ...state,
        errors: state.errors.concat([action.error]),
      };
    case CREATE_BABY_NAME_SUCCESS:
      return { ...state, response: state.response.concat([action.baby_name]) };
    case CREATE_BABY_NAME_ERROR:
      return { ...state, error: state.error.concat([action.error]) };
    default:
      return state;
  }
}

const initialListId = new URLSearchParams(window.location.search).get(
  "list_id"
);

export function babyNamesListReducer(babyNameListId = initialListId, action) {
  switch (action.type) {
    case SET_BABY_NAME_LIST_ID:
      return action.payload;
    default:
      return babyNameListId;
  }
}

export const getBabyNames = (state) => state.babyNames.response;
export const getBabyNamesPending = (state) => state.babyNames.pending;
export const getBabyNamesError = (state) => state.babyNames.error;
export const getBabyNamesListId = (state) => state.babyNameListId;
export const getBabyNameByIndex = (state, index) =>
  state.babyNames.response[index];
