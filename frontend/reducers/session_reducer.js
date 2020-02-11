import { 
    RECIEVE_CURRENT_USER, 
    LOGOUT_CURRENT_USER 
} from '../actions/session_actions';

const _nullSession = {
    currentUser: null
}
const SessionReducer = (oldState = _nullSession, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECIEVE_CURRENT_USER:
            return Object.assign({}, {currentUser: action.user});
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return oldState;
    }
}

export default SessionReducer;
