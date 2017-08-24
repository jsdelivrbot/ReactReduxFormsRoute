import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function (previousState = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            const postList = action.payload.data;
            return postList.reduce((postsObject, post) => {
                postsObject[post.id] = post;
                return postsObject;
            }, {});
        case FETCH_POST:
            const post = action.payload.data;
            return { ...previousState, [post.id]: post }
        case DELETE_POST:
            const { [action.payload]: deletedPost, ...minusDeleted } = previousState;
            return minusDeleted;
        default:
            return previousState;
    }
}