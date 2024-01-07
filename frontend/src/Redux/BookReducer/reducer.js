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
export const booksReducer = (state=initialState,{type,payload}) => {

  switch (type) {
    case GET_BOOKS_REQUEST:
      return {...state,loading:true}
      break;

      case GET_BOOKS_SUCCESS:
      return {...state,loading:false,success:true,books:payload}
      break;
      case GET_BOOKS_FAILURE:
      return {...state,loading:false,error:true}
      break;
      case POST_BOOK_REQUEST:
      return {...state,loading:true}
      break;
      case POST_BOOK_SUCCESS:
      return {...state,loading:false,success:true,books:[...state.books,payload]}
      break;
      case POST_BOOK_FAILURE:
      return {...state,loading:false,error:true}
      break;
  
    default:
      return state
      break;
  }
};
