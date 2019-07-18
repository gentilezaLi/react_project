import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import dataReducer from "../reducers/dataReducer"
import addReducer from "../reducers/addReducer"
let reducers = combineReducers({ dataReducer, addReducer })
let store = createStore(reducers, applyMiddleware(thunk))
export default store;