import {combineReducers} from "redux";
import {USERS_FEATURE_KEY, usersReducer} from "./users/users.reducer";

let rootReducer = combineReducers({
    [USERS_FEATURE_KEY] : usersReducer,
});

export {rootReducer};