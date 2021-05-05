import axios from "axios";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import * as actionTypes from "./showsActionTypes";
import { AppStateType } from "./store";

const apiUrl = "http://api.tvmaze.com";

type ThunkType = ThunkAction<
  Promise<void> | void,
  AppStateType,
  unknown,
  Action<string>
>;

let wait = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const searchItems = (value: string): ThunkType => {
  return async (dispatch) => {
    try {
      if (value) {
        dispatch({ type: actionTypes.LOADING });
        const response = await axios.get(`${apiUrl}/search/shows?q=${value}`);
        dispatch({
          type: actionTypes.GET_SHOWS_SUCCESS,
          payload: response?.data,
        });
      }
    } catch (error) {
      dispatch({
        type: actionTypes.FAILURE,
        payload: error.response.data.error,
      });
    }
  };
};

export const handleCollapse = (data: any): ThunkType => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.LOADING });

    await wait(1000);
    dispatch({
      type: actionTypes.COLLAPSE,
      payload: data,
    });
  };
};

export const starItems = (name: string): ThunkType => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.LOADING });

    await wait(1000);
    dispatch({
      type: actionTypes.STAR_CHANGER,
      payload: name,
    });
  };
};

export const removeItem = (id: number): ThunkType => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.LOADING });

    await wait(1000);
    dispatch({
      type: actionTypes.DELETE_SHOW_SUCCESS,
      payload: id,
    });
  };
};

export const getShow = (id: number): ThunkType => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.LOADING });

    const response = await axios.get(`${apiUrl}/shows/${id}`);
    dispatch({
      type: actionTypes.GET_SHOW_SUCCESS,
      payload: response.data,
    });
  };
};

export const removeItems = (genre: string): ThunkType => {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOADING });
    dispatch({
      type: actionTypes.DELETE_SHOWS_SUCCESS,
      payload: genre,
    });
  };
};
