let cunvideoReducer = (state = {}, action) => {
    switch (action.type) {
        case "CUNVIDEO":
            state = action.dan
            return {...state }
        default:
            return {...state }
    }
}
export default cunvideoReducer;