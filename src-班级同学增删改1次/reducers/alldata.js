let alldataReducer = (state = [], action) => {
    switch (action.type) {
        case "ALLDATA":

            state.push(action.obj)
            console.log(state)
            return [...state]
        default:
            return [...state]
    }
}
export default alldataReducer;