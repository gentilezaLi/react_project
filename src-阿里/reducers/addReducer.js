let addReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD":
            state.push(action.obj)
                // console.log(state, "添加一个")
            return [...state]
        case "DEL":
            // console.log(state)
            // console.log(action.data)
            let index = state.findIndex(item => item.id === action.data.id)
            state.splice(index, 1)
            return [...state]

        default:
            return [...state]
    }
}
export default addReducer;