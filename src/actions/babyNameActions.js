import BabyNamesApi from "../utilities/babyNamesApi";
export const FETCH_BABY_NAMES_SUCCESS = "FETCH_BABY_NAMES_SUCCESS";
export const FETCH_BABY_NAMES_ERROR = "FETCH_BABY_NAMES_ERROR";
export const CREATE_BABY_NAME_SUCCESS = "CREATE_BABY_NAME_SUCCESS";
export const CREATE_BABY_NAME_ERROR = "CREATE_BABY_NAME_ERROR";
export const SET_BABY_NAME_LIST_ID = "SET_BABY_NAME_LIST_ID";

function fetchBabyNamesSuccess(babyNames) {
  return { type: FETCH_BABY_NAMES_SUCCESS, babyNames };
}
function fetchBabyNamesError(error = null) {
  return { type: FETCH_BABY_NAMES_ERROR, error };
}

function createBabyNameSuccess() {
  return { type: CREATE_BABY_NAME_SUCCESS };
}
function createBabyNameError(error = null) {
  return { type: CREATE_BABY_NAME_ERROR, error };
}

export function setBabyNameListId(babyNameListId = null) {
  return { type: SET_BABY_NAME_LIST_ID, payload: babyNameListId };
}

export function fetchBabyNames(list_id = null) {
  return (dispatch) => {
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
    BabyNamesApi.createBabyName({ name })
      .then((response) => {
        if (response.error) {
          throw response.error;
        }
        dispatch(createBabyNameSuccess(response.baby_name));
        return response.baby_name;
      })
      .catch((error) => {
        dispatch(createBabyNameError(error));
      });
  };
}
