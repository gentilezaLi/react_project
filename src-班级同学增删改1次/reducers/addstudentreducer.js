let addstudentreducer = (state = [], action) => {
    switch (action.type) {
        case "ADDSTUDENT":
            state = action.list
            console.log(state, "新同学添加成功")
            return [...state]
        default:
            return [...state]
    }
}
export default addstudentreducer;