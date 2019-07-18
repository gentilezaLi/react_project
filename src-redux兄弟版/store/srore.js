import { createStore, combineReducers } from "redux"
import userReducer from "../reducer/userReducer"
import listReducer from "../reducer/listReducer"
let reducers = combineReducers({ userReducer, listReducer })
let store = createStore(reducers)
export default store;