let FuYinReducer = (state = {}, action) => {
    switch (action.type) {
        case "GETLIST":
            state = action.obj
            console.log(state, "----------------------------------------------存进来了")
            return {...state }
        default:
            return {...state }
    }
}
export default FuYinReducer;