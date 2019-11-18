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

        case USER_SIGNING:
            return{
                ...state,
                fetchingData: true,
            }

        case USER_SIGNING_SUCCESS:
            return{
                ...state,
                fetchingData: false,
                userData: action.payload
            }

        case USER_SIGNING_FAILURE:
            return{
                ...state,
                fetchingData: false,
                error: action.payload
            }

        case USER_LOGING_IN: 
            return{
                ...state,
                fetchingData: true
            }
        
        case USER_LOGING_IN_SUCCESS:
            return{
                ...state,
                fetchingData: false,
                userData: action.payload
            }
        
        case USER_LOGING_IN_FAILURE:
            return{
                ...state,
                fetchingData: false,
                error: action.payload
            }


        default:
            return state
    }
}

export default reducer;