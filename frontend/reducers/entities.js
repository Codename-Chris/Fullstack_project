import { combineReducers } from "redux";
import BusinessesReducer from "./businesses_reducer";

const EntitiesReducer = combineReducers({
    businesses: BusinessesReducer
});

export default EntitiesReducer;