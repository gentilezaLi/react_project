import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import guanReducer from "../reducer/guanReducer"
let reducer = combineReducers({ guanReducer })
let store = createStore(reducer)
export default store;