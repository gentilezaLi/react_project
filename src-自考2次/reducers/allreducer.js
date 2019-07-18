let allreducer = (state = [], action) => {
    switch (action.type) {
        case "ALLDATA":
            state = action.list
            JSON.parse(JSON.stringify(state))
            console.log(state, "存到仓库")
            return [...state]
        default:
            return [...state]
    }
}
export default allreducer;