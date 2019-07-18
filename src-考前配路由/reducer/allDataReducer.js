let allDataReducer = (state = [], action) => {
    switch (action.type) {
        case "ALL_DATA":
            state = action.list
                // console.log(state, "存进来了")
            return [...state]
        default:
            return [...state]
    }
}
export default allDataReducer;