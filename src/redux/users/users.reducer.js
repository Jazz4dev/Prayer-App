import {
    FETCH_PRAYER_FAILURE,
    FETCH_PRAYER_REQUEST, FETCH_PRAYER_SUCCESS,
    REGISTER_USER_FAILURE,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS
} from "./users.actionTypes";

export const USERS_FEATURE_KEY = 'user';

let initialState = {
  loading : false,
  errorMessage : '',
  user : []
};

let usersReducer = (state = initialState , action) => {
  let {type , payload} = action;
  switch(type) {
      // Register a User
      case REGISTER_USER_REQUEST:
          return{
              ...state,
              loading: true
          };
      case REGISTER_USER_SUCCESS:
          return {
              ...state,
              loading: false,
              user : payload
          };
      case REGISTER_USER_FAILURE:
          return {
              ...state,
              loading: false,
              errorMessage: payload
          };

        // Get All User
      case FETCH_PRAYER_REQUEST:
          return{
              ...state,
              loading: true
          };
      case FETCH_PRAYER_SUCCESS:
          return {
              ...state,
              loading: false,
              user : payload
          };
      case FETCH_PRAYER_FAILURE:
          return {
              ...state,
              loading: false,
              errorMessage: payload
          };
      default : return state;
  }
};

export {usersReducer};