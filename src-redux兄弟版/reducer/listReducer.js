let listReducer = (state = [], action) => {
    switch (action.type) {
        case "LIST_USER":
            state = action.list ? action.list : []
            return [...state]
        default:
            return [...state]
    }
}
export default listReducer;