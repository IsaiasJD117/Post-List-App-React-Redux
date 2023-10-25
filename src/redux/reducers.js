import { 
    FETCH_POSTS_REQUEST, 
    FETCH_POSTS_SUCCESS, 
    FETCH_POSTS_FAILURE,
} from './actions';

const initialState = {
    posts: [],
    loading: false,
    error: null,
};
const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload,
            };
        case FETCH_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};
export default postsReducer;