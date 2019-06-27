import { FETCH_QUESTIONS_START, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_FAIL } from '../actions'

const initialState = {
    user:{
        isLoggedIn: false,
        id: '',
        username: '',
        password: '',
        adviceGiver: 0,
        expertise: null,
        yearsOfExperience: null,
        age: null,
        email: "",
        token: "",
    },
    fetchingQuestions: false,
    userQuestions:[],
    error:''
}

function reducer(state = initialState, action){
    // console.log('reducer:', action);
    switch(action.type){
        case FETCH_QUESTIONS_START:
            return {
                ...state,
                fetchingQuestions:true,
                error:''
            }
        case FETCH_QUESTIONS_SUCCESS:
            return {
                ...state,
                fetchingQuestions:false,
                userQuestions:action.payload,
                error:''
            }
        case FETCH_QUESTIONS_FAIL:
            return {
                ...state,
                fetchingQuestions:true,
                error:action.payload                
            };
        default:
            return state;
    }
}

export default reducer;