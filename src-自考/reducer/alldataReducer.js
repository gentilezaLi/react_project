let alldataReducer = (state = [], action) => {
    switch (action.type) {
        case "ALLDATA":
            state = action.list
            console.log(state, "数据存进来了")
            return [...state]
        default:
            return [...state]

    }
}
export default alldataReducer;