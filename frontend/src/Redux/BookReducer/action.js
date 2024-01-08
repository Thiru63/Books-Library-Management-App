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
export const getDataBooks = async (dispatch,token) =>  {
  try {
    dispatch(getBookRequest())
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  let res=await axios.get(`https://books-library-management-app.onrender.com/user/book`,config)
  console.log(res)
  if(res.status==200){
    dispatch(getBookSuccess(res.data))
  }else{
    dispatch(getBookFailure(res.data.message))
  }
  
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

export const postBook =async (dispatch,newBook,token) => {
  try {
    dispatch(postBookRequest())
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    let res=await axios.post(`https://books-library-management-app.onrender.com/user/book`,newBook,config)
    console.log(res)
    if(res.status==201){
      getDataBooks(dispatch,token)
      return true
      
    }else{
      dispatch(postBookFailure(res.data.message))
    }
   
  } catch (error) {
    console.log(error)
    dispatch(postBookFailure())
  }

}
