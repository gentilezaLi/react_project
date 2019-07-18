let listReducer = (state = [], action) => {
    console.log(action.data)
    switch (action.type) {
        case "ADD_LIST":
            state = action.data ? action.data : []
            return [...state]
        default:
            return [...state]
    }
}
export default listReducer;