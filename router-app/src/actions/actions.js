import { FETCH_USERS, FETCH_USERS_ERROR, FETCH_POSTS, FETCH_POSTS_ERROR } from "./constants";

export const fetchUsers = () => {
    return (dispatch) => {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(
                { type: FETCH_USERS, payload: json }))
            .catch(err => dispatch(
                { type: FETCH_USERS_ERROR, msg: "Unable to fetch data" }))
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => dispatch(
                { type: FETCH_POSTS, payload: json }))
            .catch(err => dispatch(
                { type: FETCH_POSTS_ERROR, msg: "Unable to fetch data" }))
    }
}

