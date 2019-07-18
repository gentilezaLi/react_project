let dataReducer = (state = {}, action) => {
    switch (action.type) {
        case "SAVE":
            console.log(action.list, "存进来了")
            state = action.list
            return {...state }
        default:
            return {...state }

    }
}
export default dataReducer;