import BabyNamesApi from "../utilities/babyNamesApi";
export const FETCH_BABY_NAMES_PENDING = "FETCH_BABY_NAMES_PENDING";
export const FETCH_BABY_NAMES_SUCCESS = "FETCH_BABY_NAMES_SUCCESS";
export const FETCH_BABY_NAMES_ERROR = "FETCH_BABY_NAMES_ERROR";
export const SET_BABY_NAME_LIST_ID = "SET_BABY_NAME_LIST_ID";

function fetchBabyNamesPending() {
  return { type: FETCH_BABY_NAMES_PENDING };
}
function fetchBabyNamesSuccess(babyNames) {
  return { type: FETCH_BABY_NAMES_SUCCESS, babyNames };
}
function fetchBabyNamesError(error = null) {
  return { type: FETCH_BABY_NAMES_ERROR, error };
}

export function setBabyNameListId(babyNameListId = null) {
  return { type: SET_BABY_NAME_LIST_ID, payload: babyNameListId };
}

export function fetchBabyNames(list_id = null) {
  return (dispatch) => {
    dispatch(fetchBabyNamesPending());
    BabyNamesApi.getBabyNames(list_id)
      .then((response) => {
        if (response.error) {
          throw response.error;
        }
        dispatch(fetchBabyNamesSuccess(response.baby_names));
        return response.baby_names;
      })
      .catch((error) => {
        dispatch(fetchBabyNamesError(error));
      });
  };
}

export function createBabyName(name = null) {
  return (dispatch) => {
    dispatch(createBabyNamePending());
  };
}
