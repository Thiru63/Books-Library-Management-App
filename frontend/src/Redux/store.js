import { legacy_createStore,combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { authReducer } from "./AuthReducer/reducer";
import {booksReducer} from './BookReducer/reducer'


const rootReducer=combineReducers({authReducer,booksReducer})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
