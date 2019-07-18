let numReducer = (state = 0, action) => {
    console.log(action.num, "lkjhgfd")
    switch (action.type) {
        case "NUM":
            state = action.num
            return state;
        default:
            return state;

    }
}
export default numReducer;