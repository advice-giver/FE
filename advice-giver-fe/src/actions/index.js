import axios from 'axios';

export const FETCH_QUESTIONS_START = "FETCH_QUESTOINS_START";
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTOINS_SUCCESS";
export const FETCH_QUESTIONS_FAIL = "FETCH_QUESTOINS_FAIL";

export const grabFeed = ()=> dispatch => {
    dispatch({ type: FETCH_QUESTIONS_START})
    axios
        .get('https://advice-giver.herokuapp.com/messages')
        .then(res =>
            dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: res.data})
            )
        .catch(err => dispatch ({type: FETCH_QUESTIONS_FAIL, payload: err}))
}