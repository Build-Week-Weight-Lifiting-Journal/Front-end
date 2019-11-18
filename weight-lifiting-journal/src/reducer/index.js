import{
    USER_SIGNING,
    USER_SIGNING_SUCCESS,
    USER_SIGNING_FAILURE,

    USER_LOGING_IN,
    USER_LOGING_IN_SUCCESS,
    USER_LOGING_IN_FAILURE

} from '../action'

const initialState = {
    userData: [],
    fetchingData: false,
    error: '',
    userData: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type) {

        default:
            return state
    }
}

export default reducer;