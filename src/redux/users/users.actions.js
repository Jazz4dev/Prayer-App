import {
    FETCH_PRAYER_FAILURE,
    FETCH_PRAYER_REQUEST, FETCH_PRAYER_SUCCESS,
    REGISTER_USER_FAILURE,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS
} from "./users.actionTypes";
import Axios from "axios";



// Register User
let registerUser = (user) => {
  return async (dispatch) => {
        try {
            dispatch({ type : REGISTER_USER_REQUEST});
            let dataUrl = 'http://127.0.0.1:5000/users/register';
            let response = await Axios.post(dataUrl , user);
            dispatch({ type : REGISTER_USER_SUCCESS , payload : response.data});

        }
        catch (error) {
            console.error(error);
            dispatch({ type : REGISTER_USER_FAILURE , payload : error});
        }
  };
};

// Get All user data
let getAllData = () => {
  return async (dispatch) => {
      try {
          dispatch({type : FETCH_PRAYER_REQUEST});
          let response = await Axios.get('http://127.0.0.1:5000/users/');
          dispatch({type : FETCH_PRAYER_SUCCESS , payload : response.data});
      }
      catch (error) {
        console.error(error);
        dispatch({type : FETCH_PRAYER_FAILURE , payload : error});
      }
  }
};

export {registerUser, getAllData};