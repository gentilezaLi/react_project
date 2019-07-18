import { createStore, combineReducers } from "redux"
let reducer1 = (state = [1, 2, 3], action) => {
    console.log(action.data)
    switch (action.type) {
        case "ADD_LIST":
            state.push(action.data)
            return [...state]
        default:
            return [...state]
    }
}
let reducers = combineReducers({ reducer1 })
let store = createStore(reducers)
export default store;