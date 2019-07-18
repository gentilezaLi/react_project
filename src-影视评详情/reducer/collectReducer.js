let collectReducer = (state = [], action) => {
    switch (action.type) {
        case "COLLECT":
            state.push(action.obj)
            console.log(state, "----------------------------------------")
            return [...state]
        default:
            return [...state]
    }
}
export default collectReducer;