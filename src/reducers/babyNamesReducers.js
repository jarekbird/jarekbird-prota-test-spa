import {
  FETCH_BABY_NAMES_SUCCESS,
  FETCH_BABY_NAMES_ERROR,
  SET_BABY_NAME_LIST_ID,
  CREATE_BABY_NAME_SUCCESS,
  CREATE_BABY_NAME_ERROR,
  UPDATE_BABY_NAME_ERROR,
  UPDATE_BABY_NAME_SUCCESS,
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
      return { ...state, response: state.response.concat([action.payload]) };
    case CREATE_BABY_NAME_ERROR:
      return { ...state, errors: state.errors.concat([action.error]) };
    case UPDATE_BABY_NAME_SUCCESS:
      const index = state.response.findIndex(
        (element) => element.id == action.payload.id
      );
      const new_response = state.response.slice();
      new_response[index] = action.payload;
      return { ...state, response: new_response };
    case UPDATE_BABY_NAME_ERROR:
      return { ...state, errors: state.errors.concat([action.error]) };
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
export const getBabyNamesErrors = (state) => state.babyNames.errors;
export const getBabyNamesListId = (state) => state.babyNameListId;
export const getBabyNameByIndex = (state, index) =>
  state.babyNames.response[index];
export const getErrorByIndex = (state, index) => state.babyNames.errors[index];
