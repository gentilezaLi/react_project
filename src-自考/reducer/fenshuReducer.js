let fenshuReducer = (state = [], action) => {
    switch (action.type) {
        case "FENSHU":
            state = action.list
            return [...state]

        default:
            return [...state]


    }
}
export default fenshuReducer;