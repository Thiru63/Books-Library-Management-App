//   action for get request
import {
  GET_BOOKS_FAILURE,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_REQUEST,
  POST_BOOK_REQUEST,
  POST_BOOK_SUCCESS,
  POST_BOOK_FAILURE,
} from "./actionTypes";
import axios from "axios";

export const getBookRequest = () => {
  return {type:GET_BOOKS_REQUEST}
 
};

export const getBookSuccess = (payload) => {
  return {type:GET_BOOKS_SUCCESS,payload:payload}
 
};

export const getBookFailure = () => {
 return {type:GET_BOOKS_FAILURE}
};

// method to get data from an api
export const getDataBooks = async (dispatch) =>  {
  try {
    dispatch(getBookRequest())
  let res=await axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`)
  console.log(res)
  dispatch(getBookSuccess(res.data))
  } catch (error) {
    console.log(error)
    dispatch(getBookFailure())
  }
};

//  POST REQUEST

export const postBookRequest = () => {
  return {type:POST_BOOK_REQUEST}
}
 

export const postBookSuccess = (payload) => {
 return {type:POST_BOOK_SUCCESS,payload:payload}
};

export const postBookFailure = () => {
  return {type:POST_BOOK_FAILURE}
};

// method for post Book

export const postBook =async (dispatch,newBook) => {
  try {
    dispatch(postBookRequest())
    let res=await axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`,newBook)
    console.log(res)
   getDataBooks(dispatch)
  } catch (error) {
    console.log(error)
    dispatch(postBookFailure())
  }

}
