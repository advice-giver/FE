import axios from 'axios';

export const FETCH_QUESTIONS_START = "FETCH_QUESTOINS_START";
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTOINS_SUCCESS";
export const FETCH_QUESTIONS_FAIL = "FETCH_QUESTOINS_FAIL";

export const POST_QUESTION_START = "POST_QUESTION_START"
export const POST_QUESTION_SUCCESS = "POST_QUESTION_SUCCESS"
export const POST_QUESTION_FAIL = "POST_QUESTION_FAIL"



export const grabFeed = ()=> dispatch => {
    dispatch({ type: FETCH_QUESTIONS_START})
    axios
        .get('https://advice-giver.herokuapp.com/messages')
        .then(res =>
            dispatch({ 
                type: FETCH_QUESTIONS_SUCCESS, 
                payload: res.data
            })
            )
        .catch(err => dispatch ({type: FETCH_QUESTIONS_FAIL, payload: err}))
};

export const postQ = (question) => dispatch =>{
    dispatch({ type: POST_QUESTION_START })
    axios
        .post('https://advice-giver.herokuapp.com/messages', question)
        .then(res => 
            dispatch({ 
                type: POST_QUESTION_SUCCESS, 
                payload: res.data 
            })
            )
        .catch(err => dispatch({type: POST_QUESTION_FAIL, payload: err}))
};