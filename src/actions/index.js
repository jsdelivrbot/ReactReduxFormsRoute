import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
const POST_API_ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const POST_API_KEY = 'key=dtkilla';

export function fetchPosts() {
    const request = axios.get(`${POST_API_ROOT_URL}/posts?${POST_API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}