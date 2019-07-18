let userReducer = (state = {}, action) => {
    console.log(action.user, "接收到的")
    switch (action.type) {
        case "ADD_USER":
            state = action.user ? action.user : {}
            return {...state }
        default:
            return {...state }
    }

}
export default userReducer;