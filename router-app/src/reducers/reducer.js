import { FETCH_USERS, FETCH_USERS_ERROR, FETCH_POSTS, FETCH_POSTS_ERROR } from "../actions/constants";

const initialState = {
    users: [],
    posts: [],
    error: '',
    isLoading: true,
}


export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_USERS:
            return { ...state, users: action.payload, isLoading: false }
        case FETCH_USERS_ERROR:
            return { ...state, error: action.msg }
        case FETCH_POSTS:
            return { ...state, posts: action.payload, isLoading: false }
        case FETCH_POSTS_ERROR:
            return { ...state, error: action.msg }
        default:
            return state
    }
}

