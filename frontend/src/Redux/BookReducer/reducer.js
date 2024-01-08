import {
  GET_BOOKS_FAILURE,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  POST_BOOK_FAILURE,
  POST_BOOK_REQUEST,
  POST_BOOK_SUCCESS,
} from "./actionTypes";

// Initial State
const initialState = {
  books: [],
  loading: false,
  error: null,
  success: false, // Add a success field to track success state
};

// Reducer
export const booksReducer = (state=initialState,{type,payload,message}) => {

  switch (type) {
    case GET_BOOKS_REQUEST:
      return {...state,loading:true}
      break;

      case GET_BOOKS_SUCCESS:
      return {...state,loading:false,success:true,books:payload,error:null}
      break;
      case GET_BOOKS_FAILURE:
      return {...state,loading:false,error:message}
      break;
      case POST_BOOK_REQUEST:
      return {...state,loading:true}
      break;
      case POST_BOOK_SUCCESS:
      return {...state,loading:false,success:true,books:[...state.books,payload],error:null}
      break;
      case POST_BOOK_FAILURE:
      return {...state,loading:false,error:message}
      break;
  
    default:
      return state
      break;
  }
};
