import { combineReducers } from "redux";
import BusinessesReducer from "./businesses_reducer";
import UsersReducer from "./users_reducer";
import reviewsReducer from "./reviews_reducer";

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    businesses: BusinessesReducer,
    reviews: reviewsReducer
}); 

export default EntitiesReducer; 