import { axiosWithAuth } from '../utils/axiosWithAuth';
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const USER_SIGNING = 'USER_SIGNING';
export const USER_SIGNING_SUCCESS = 'USER_SIGNING_SUCCESS';
export const USER_SIGNING_FAILURE = 'USER_SIGNING_FAILURE';

export const login = loginData => dispatch => {
    dispatch( { type: USER_SIGNING } )

    axiosWithAuth()
    .post(`/api/auth/registration`, loginData)
    .then(response =>  dispatch({ type: USER_SIGNING_SUCCESS, payload: response.data }
    ))
    .then(history.push('/workout'))
    .catch(err => dispatch({ type: USER_SIGNING_FAILURE, payload: err.response }))
}

export const USER_LOGING_IN = 'USER_LOGING_IN';
export const USER_LOGING_IN_SUCCESS = 'USER_LOGING_IN_SUCCESS';
export const USER_LOGING_IN_FAILURE = 'USER_LOGING_IN_FAILURE';

export const SignUp = signUpData => dispatch => {
    dispatch( { type:USER_LOGING_IN } )

    axiosWithAuth()
    .post(`/api/auth/login`, signUpData)
    .then( response => dispatch({ type: USER_LOGING_IN_SUCCESS, payload: response.data },
        localStorage.setItem('token', response.data.token)
    ))
    .then(history.push('/workout'))
    .catch(err => dispatch({ type: USER_LOGING_IN_FAILURE, payload: err.response }))
}
export const START_FETCHING_DATA = 'START_FETCHING_DATA';
export const FETCH_SUCCESS_DATA = 'FETCH_SUCCESS_DATA';
export const FETCH_FAILURE_DATA = 'FETCH_FAILURE_DATA';

export const DELETING_DATA = 'DELETING_DATA';
export const DELETING_DATA_SUCCESS = 'DELETING_DATA_SUCCESS';
export const DELETING_DATA_FAILURE = 'DELETING_DATA_FAILURE';

export const POSTING_DATA = 'POSTING_DATA';
export const POSTING_DATA_SUCCESS = 'POSTING_DATA_SUCCESS';
export const POSTING_DATA_FAILURE = 'POSTING_DATA_FAILURE';