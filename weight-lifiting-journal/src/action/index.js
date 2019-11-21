import axiosWithAuth from "../utils/axiosWithAuth";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const USER_LOGING_IN = "USER_LOGING_IN";
export const USER_LOGING_IN_SUCCESS = "USER_LOGING_IN_SUCCESS";
export const USER_LOGING_IN_FAILURE = "USER_LOGING_IN_FAILURE";

export const login = loginData => dispatch => {
  dispatch({ type: USER_LOGING_IN });

  axiosWithAuth()
    .post(`/api/auth/login`, loginData)
    .then(response =>
      dispatch(
        { type: USER_LOGING_IN_SUCCESS, payload: response.data.user },
        localStorage.setItem("token", response.data.token),
        history.push("/workout-list")
      )
    )
    .catch(err =>
      dispatch({ type: USER_LOGING_IN_FAILURE, payload: err.response })
    );
};

export const USER_SIGNING = "USER_SIGNING";
export const USER_SIGNING_SUCCESS = "USER_SIGNING_SUCCESS";
export const USER_SIGNING_FAILURE = "USER_SIGNING_FAILURE";

export const signUp = signUpData => dispatch => {
  dispatch({ type: USER_SIGNING });

  axiosWithAuth()
    .post(`/api/auth/register`, signUpData)
    .then(response =>
      dispatch(
        { type: USER_SIGNING_SUCCESS, payload: response.data.user },
        localStorage.setItem("token", response.data.token)
        // history.push('/login')
      )
    )
    .catch(err =>
      dispatch({ type: USER_SIGNING_FAILURE, payload: err.response })
    );
};
export const START_FETCHING_DATA = "START_FETCHING_DATA";
export const FETCH_SUCCESS_DATA = "FETCH_SUCCESS_DATA";
export const FETCH_FAILURE_DATA = "FETCH_FAILURE_DATA";

export const fetchingUserData = () => dispatch => {
    dispatch({type: START_FETCHING_DATA})
    axiosWithAuth()
    .get(`/api/users/profile`)
    .then(response => dispatch({ type: FETCH_SUCCESS_DATA, payload: response.data }))
    .catch(err => dispatch({type: FETCH_FAILURE_DATA, payload: err.response}))
}

export const DELETING_DATA = "DELETING_DATA";
export const DELETING_DATA_SUCCESS = "DELETING_DATA_SUCCESS";
export const DELETING_DATA_FAILURE = "DELETING_DATA_FAILURE";

export const deleteWorkout = (id) => dispatch => {
    dispatch({type: DELETING_DATA})

    axiosWithAuth()
    .delete(`/api/workouts/${id}`)
    .then(response => dispatch({type: DELETING_DATA_SUCCESS, payload: response}))
    .catch(err => dispatch({type: DELETING_DATA_FAILURE, payload: err.response}))
}


export const POSTING_DATA = "POSTING_DATA";
export const POSTING_DATA_SUCCESS = "POSTING_DATA_SUCCESS";
export const POSTING_DATA_FAILURE = "POSTING_DATA_FAILURE";

export const addWorkout = (Id, data) => dispatch => {
    dispatch({type: POSTING_DATA})
    axiosWithAuth()
        .post(`/api/users/${Id}/workouts`, data)
        .then(response => dispatch({type: POSTING_DATA_SUCCESS, payload: response}))
        .catch(err => dispatch({type: POSTING_DATA_FAILURE, payload: err.response }))
}


export const EDIT_DATA_START = 'EDIT_DATA_START';
export const EDIT_DATA_SUCCESS = 'EDIT_DATA_SUCCESS';
export const EDIT_DATA_FAILURE = 'EDIT_DATA_FAILURE';

export const editWorkout = (data, id) => dispatch =>{
    dispatch({type: EDIT_DATA_START})

    axiosWithAuth()
    .put(`/api/workouts/${id}`, data)
    .then(response => dispatch({type: EDIT_DATA_SUCCESS, payload: response}))
    .catch(err => dispatch({type: EDIT_DATA_FAILURE, payload: err.response}))
}