import { axiosWithAuth } from '../utils/axiosWithAuth';
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const USER_SIGNING = 'USER_SIGNING';
export const USER_SIGNING_SUCCESS = 'USER_SIGNING_SUCCESS';
export const USER_SIGNING_FAILURE = 'USER_SIGNING_FAILURE';

export const USER_LOGING_IN = 'USER_LOGING_IN';
export const USER_LOGING_IN_SUCCESS = 'USER_LOGING_IN_SUCCESS';
export const USER_LOGING_IN_FAILURE = 'USER_LOGING_IN_FAILURE';

export const START_FETCHING_DATA = 'START_FETCHING_DATA';
export const FETCH_SUCCESS_DATA = 'FETCH_SUCCESS_DATA';
export const FETCH_FAILURE_DATA = 'FETCH_FAILURE_DATA';

export const DELETING_DATA = 'DELETING_DATA';
export const DELETING_DATA_SUCCESS = 'DELETING_DATA_SUCCESS';
export const DELETING_DATA_FAILURE = 'DELETING_DATA_FAILURE';

export const POSTING_DATA = 'POSTING_DATA';
export const POSTING_DATA_SUCCESS = 'POSTING_DATA_SUCCESS';
export const POSTING_DATA_FAILURE = 'POSTING_DATA_FAILURE';