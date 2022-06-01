import React, { useState, useReducer, useContext, useEffect } from "react";
import reducer from "./reducers";
import axios from "axios";
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_ERROR,
  SETUP_USER_SUCCESS,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  GET_POSTS_BEGIN,
  GET_POSTS_SUCCESS,
} from "./action";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const userLocation = localStorage.getItem("location");
const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  city: '',
  district: '',
  ward: '',
  address: '',
  price: '',
  deposit: '',
  area: '',
  title: '',
  description: '',
  image: '',
  userLocation: userLocation || "",
  jobLocation: userLocation || "",
  showSidebar: false,
  posts: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };
  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("location");
  };
  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const { data } = await axios.post(`/api/auth/${endPoint}`, currentUser);

      const { user, token, location } = data;
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, location, alertText },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
  };

  const resetPassword = async ({ passwordChange }) => {
    try {
      const { data } = await axios.post(
        `/api/auth/reset-password`,
        passwordChange
      );
    } catch (error) {}
  };

  const getPosts = async () => {
    dispatch({ type: GET_POSTS_BEGIN });
    try {
      const { data } = await axios.get(`/api/post`);
      const posts = data;
      dispatch({
        type: GET_POSTS_SUCCESS,
        payload: {
          posts,
        },
      });
    } catch (error) {
      console.log(error.response);
    }
    clearAlert();
  };


  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        setupUser,
        resetPassword,
        toggleSidebar,
        logoutUser,
        getPosts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
