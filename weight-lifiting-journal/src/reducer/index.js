import{
    USER_SIGNING,
    USER_SIGNING_SUCCESS,
    USER_SIGNING_FAILURE,

    USER_LOGING_IN,
    USER_LOGING_IN_SUCCESS,
    USER_LOGING_IN_FAILURE,

    START_FETCHING_DATA,
    FETCH_SUCCESS_DATA,
    FETCH_FAILURE_DATA

} from '../action'

const initialState = {
    userDataWorkout: [],
    fetchingData: false,
    error: '',
    userData: {},
    getUserData: {}
}

const reducer = (state = initialState, action) => {
    // console.log('Data from reducer', state.userData)

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
                userData: action.payload,
            }
        
        case USER_LOGING_IN_FAILURE:
            return{
                ...state,
                fetchingData: false,
                error: action.payload
            }

        case START_FETCHING_DATA:
            return{
                ...state,
                fetchingData: true
            }
        
        case FETCH_SUCCESS_DATA:
            return{
                ...state,
                fetchingData: false,
                getUserData: action.payload,
                userData: action.payload
            }
        
        case FETCH_FAILURE_DATA:
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