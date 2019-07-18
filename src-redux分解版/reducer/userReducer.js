let userReducer = (state = {}, action) => {
    console.log(action.user)
    switch (action.type) {
        case "ADD_USER":
            state = action.user ? action.user : {};
            return {...state }
        default:
            return {...state }
    }
}
export default userReducer;