import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import allReducer from "../reducers/allReducer"
let reducers = combineReducers({ allReducer })
let store = createStore(reducers, applyMiddleware(thunk))
export default store;