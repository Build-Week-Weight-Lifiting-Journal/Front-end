import{
    USER_SIGNING,
    USER_SIGNING_SUCCESS,
    USER_SIGNING_FAILURE,

    USER_LOGING_IN,
    USER_LOGING_IN_SUCCESS,
    USER_LOGING_IN_FAILURE,

    START_FETCHING_DATA,
    FETCH_SUCCESS_DATA,
    FETCH_FAILURE_DATA,

    DELETING_DATA,
    DELETING_DATA_SUCCESS,
    DELETING_DATA_FAILURE,

    POSTING_DATA,
    POSTING_DATA_SUCCESS,
    POSTING_DATA_FAILURE,

    EDIT_DATA_START,
    EDIT_DATA_SUCCESS,
    EDIT_DATA_FAILURE,

    POST_EXERCISE,
    POST_EXERCISE_SUCCESS,
    POST_EXERCISE_FAILURE,

    DELETING_EXERCISE,
    DELETING_EXERCISE_SUCCESS,
    DELETING_EXERCISE_FAILURE

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

        case DELETING_DATA:
            return{
                ...state,
                fetchingData: true
            }

        case DELETING_DATA_SUCCESS:
            return{
                ...state,
                userData: action.payload,
                fetchingData: false
            }

        case DELETING_DATA_FAILURE:
            return{
                ...state,
                fetchingData: false,
                error: action.payload
            }

        case POSTING_DATA:
            return{
                ...state,
                fetchingData: true
            }

        case POSTING_DATA_SUCCESS:
            return{
                ...state,
                fetchingData: false,
                userData: action.payload
            }

        case POSTING_DATA_FAILURE:
            return{
                ...state,
                fetchingData: false,
                error: action.payload
            }

        case EDIT_DATA_START:
            return{
                ...state,
                fetchingData: true
            }    

        case EDIT_DATA_SUCCESS:
            return{
                ...state,
                fetchingData: false,
                userData: action.payload
            }

        case EDIT_DATA_FAILURE:
            return{
                ...state,
                fetchingData: false,
                error: action.payload
            }

        case POST_EXERCISE:
            return{
                ...state,
                fetchingData: true
            }

        case POST_EXERCISE_SUCCESS:
            return{
                ...state,
                fetchingData: false,
                userData: action.payload
            }

        case POST_EXERCISE_FAILURE:
            return{
                ...state,
                fetchingData: false,
                error: action.payload
            }

        case DELETING_EXERCISE:
            return{
                ...state,
                fetchingData: true
            }
        
        case DELETING_EXERCISE_SUCCESS:{
            return{
                ...state,
                fetchingData: false,
                userData: action.payload
            }
        }
        
        case DELETING_EXERCISE_FAILURE:
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