import { createStore, combineReducers } from "redux"
import count_jia from "../reducers/count_jia"
let reducers = combineReducers({ count_jia })
let store = createStore(reducers)
export default store;