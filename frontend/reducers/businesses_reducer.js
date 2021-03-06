import {
    RECEIVE_BUSINESSES,
    RECEIVE_BUSINESS,
    CLEAR_BUSINESSES
} from '../actions/businesses_action';

const BusinessesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_BUSINESSES:
            return action.businesses.businesses;
        case RECEIVE_BUSINESS:
            // debugger
            return Object.assign(
                {}, newState, { [action.business.business.id]: action.business.business }
            )
        case CLEAR_BUSINESSES:
            newState = {}
            return newState;
        default:
            return oldState;
    };
};

export default BusinessesReducer; 