import { createStore } from "redux"

let reducer = (state = 0, action) => {
    // console.log(state)
    // console.log(action.data)

    switch (action.type) {
        case "SENDDAGE":
            state = action.data
            return state;
        case "JIA":
            return ++state;
        case "JIAN":
            return --state;
        default:
            return state;
    }
}

let store = createStore(reducer)
    // window.store = store
export default store;