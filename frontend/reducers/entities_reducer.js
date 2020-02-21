import { combineReducers } from "redux";
import BusinessesReducer from "./businesses_reducer";
import UsersReducer from "./users_reducer";

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    businesses: BusinessesReducer
});

export default EntitiesReducer;