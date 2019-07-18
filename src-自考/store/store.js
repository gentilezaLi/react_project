import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import alldataReducer from "../reducer/alldataReducer"
import fenshuReducer from "../reducer/fenshuReducer"
let redusers = combineReducers({ alldataReducer, fenshuReducer })
let store = createStore(redusers, applyMiddleware(thunk))
export default store;