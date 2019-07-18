import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import allDataReducer from "../reducer/allDataReducer"
let reducers = combineReducers({ allDataReducer })
let store = createStore(reducers, applyMiddleware(thunk))
export default store