import axios from 'axios';
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = () => {
    return async(dispatch) => {
        dispatch({ type: FETCH_POSTS_REQUEST});
        try {
            const response = await axios.get(API_URL);
            dispatch({
                type: FETCH_POSTS_SUCCESS,
                payload: response.data,
            });
        } catch (error){
            dispatch({
                type: FETCH_POSTS_FAILURE,
                error: 'Failed to fetch posts',
            });
        }
    };
};