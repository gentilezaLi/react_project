import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import allreducer from "../reducers/allreducer"
let reducers = combineReducers({ allreducer })
let store = createStore(reducers, applyMiddleware(thunk))
export default store;