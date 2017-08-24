import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const CREATE_POST = 'CREATE_POST';
const POST_API_ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const POST_API_KEY = 'key=dtkilla';

export function fetchPosts() {
    const request = axios.get(`${POST_API_ROOT_URL}/posts?${POST_API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function fetchPost(id) {
    const request = axios.get(`${POST_API_ROOT_URL}/posts/${id}?${POST_API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    }
}

export function deletePost(id, callback) {
    const request = axios.delete(`${POST_API_ROOT_URL}/posts/${id}?${POST_API_KEY}`)
        .then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
    }
}

export function createPost(postValues, callback) {
    const request = axios.post(`${POST_API_ROOT_URL}/posts?${POST_API_KEY}`, postValues)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    }
}