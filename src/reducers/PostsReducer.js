import { FETCH_POSTS } from '../actions';

export default function (previousState = {}, action) {
    if (action.type === FETCH_POSTS) {
        return action.payload.data.reduce((acc, curr) => {
                acc[curr.id] = curr;
                return acc;
            },
            {}
        );
    }

    return previousState;
}