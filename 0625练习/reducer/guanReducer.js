let guanReducer = (state = [{ id: 0, name: "haha" }], action) => {
    switch (action.type) {
        case "LIST":
            console.log(action.obj)
            state = action.obj
            return [...state]
        default:
            return [...state]
    }
}
export default guanReducer;