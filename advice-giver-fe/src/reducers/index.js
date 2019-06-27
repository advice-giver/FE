import { 
    FETCH_QUESTIONS_START, 
    FETCH_QUESTIONS_SUCCESS, 
    FETCH_QUESTIONS_FAIL, 
    LOGGING_IN, 
    LOGIN_SUCCESS, 
    REGISTERING, 
    REGISTER_SUCCESS,
    POST_QUESTION_START,
    POST_QUESTION_SUCCESS,
    POST_QUESTION_FAIL
} from '../actions'

const initialState = {
    user: {
        id: 0,
        username: '',
        password: '',
        adviceGiver: false,
        expertise: null,
        yearsOfExperience: null,
        age: null,
        email: "",
        token: "",
    },
    fetchingQuestions: false,
    userQuestions:[],
    error:'',
    registering: false,
    posting: false,
    loggingIn: false
}

function reducer(state = initialState, action){
    switch(action.type){
        case LOGGING_IN:
            return {
                ...state,
                loggingIn: true
            }
        case LOGIN_SUCCESS:
            return { ...state, 
                user: { ...action.payload },
                loggingIn: false,
    
            }
        case REGISTERING:
            return {
                ...state,
                registering: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                registering: false
            }
        case FETCH_QUESTIONS_START:
            return {
                ...state,
                fetchingQuestions:true,
                error:''
            }
        case FETCH_QUESTIONS_SUCCESS:
            return {
                ...state,
                fetchingQuestions: false,
                userQuestions: action.payload,
                error:''
            }
        case FETCH_QUESTIONS_FAIL:
            return {
                ...state,
                fetchingQuestions:true,
                error:action.payload                
            }
        case POST_QUESTION_START:
            return {
                ...state,
                posting: true
            }
        case POST_QUESTION_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                posting: false,
                error: ''
                // userQuestions: [...state.userQuestions, action.payload]
            }
        case POST_QUESTION_FAIL:
            return {
                ...state,
                posting: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;