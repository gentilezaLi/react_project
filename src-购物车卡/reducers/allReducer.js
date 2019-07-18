let allReducer = (state = [], action) => {
    switch (action.type) {
        case "ALL_DATA":
            console.log(action.list, "存进来了")
            state = action.list
            return [...state]
        default:
            return [...state]
    }
}
export default allReducer;