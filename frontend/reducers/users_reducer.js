import { RECEIVE_USERS } from "../actions/users_action";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { merge } from 'lodash';

const UsersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = merge({}, state, { [action.currentUser.id]: action.currentUser});
            return newState;
        case RECEIVE_USERS:
            newState = merge({}, state)
            Object.keys(actions.users).forEach(userId => newState[userId] = action.users[usersId])
            return newState;
        default:
            return state;
    }
};

export default UsersReducer; 