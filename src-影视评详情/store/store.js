import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import FuYinReducer from "../reducer/FuYinReducer"
import CunvideoReducer from "../reducer/cunvideoReducer"
import collectReducer from "../reducer/collectReducer"
import numReducer from "../reducer/numReducer"
let reducers = combineReducers({ FuYinReducer, CunvideoReducer, collectReducer, numReducer })
let store = createStore(reducers, applyMiddleware(thunk))
export default store;