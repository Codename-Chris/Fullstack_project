import {
    RECEIVE_REVIEWS,
    RECEIVE_REVIEW,
    REMOVE_REVIEW
} from "../actions/reviews_actions";
import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from "../actions/businesses_action"
import merge from "lodash/merge";

const reviewsReducer = (state = {}, action) => {
    let newState;
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews;
        case RECEIVE_REVIEW:
            return merge({}, state, { [action.review.id]: action.review });
        case RECEIVE_BUSINESS:
            return action.business.reviews || {};
        case RECEIVE_BUSINESSES:
            // debugger
            return action.businesses.reviews || {};
        case REMOVE_REVIEW:
            // debugger
            newState = merge({}, state);
            delete newState[action.reviewId.id]
            return newState;
        default:
            return state;
    }
};

export default reviewsReducer;