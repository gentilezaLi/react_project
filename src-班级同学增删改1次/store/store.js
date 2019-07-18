import { combineReducers, createStore, applyMiddleware } from "redux"

import alldataReducer from "../reducers/alldata"
import addstudentreducer from "../reducers/addstudentreducer"
let reducers = combineReducers({ alldataReducer, addstudentreducer })
let store = createStore(reducers)
export default store;