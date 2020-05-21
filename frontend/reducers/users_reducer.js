import { RECEIVE_USERS } from "../actions/users_action";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { merge } from 'lodash';
import { RECEIVE_BUSINESS } from "../actions/businesses_action";

const UsersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = merge({}, state, { [action.currentUser.id]: action.currentUser});
            return newState;
        case RECEIVE_USERS:
            
            newState = merge({}, state, action.users)
            // Object.keys(action.users).forEach(userId => newState[userId] = action.users[usersId])
            // debugger
            return newState;
            
        case RECEIVE_BUSINESS:
            newState = merge({}, state, action.business.users)
            return newState;
        default:
            return state;
    }
}; 

export default UsersReducer; 