let count_jia = (state = {}, action) => {
    console.log(action.data)
    switch (action.type) {
        case "JIA":
            state = action.data ? action.data : {}
            return {...state }
        default:
            return {...state }
    }
}
export default count_jia;