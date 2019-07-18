import { createStore, combineReducers } from "redux"
import addId from "../api/addId"
let allDataReducer = (state = [], action) => {
    let ind = state.findIndex(item => item.classRoom === action.obj.classRoom)

    switch (action.type) {
        case "ADD_CLASS":
            state.push(action.obj)
            addId(state)
            console.log(state, "添加班级成功")
            return [...state]
        case "DEL_CLASSROOM":
            state.splice(ind, 1)
            addId(state)
            console.log(state, "删除班级成功")
            return [...state]
        case "ADD_STUDENT":
            state[ind].studentList.push(action.obj)
            addId(state[ind].studentList)
            console.log(state, "添加学生成功")
            return [...state]
        case "DEL_STUDENT":
            state[ind].studentList.splice(action.obj.id, 1)
            addId(state[ind].studentList)
            console.log(state, "删除学生成功")
            return [...state]
        case "CHANGE_NAME":
            state[ind].studentList[action.obj.id].name = action.obj.name
            console.log(state, "只修改名字的学生")
            return [...state]
        case "CHANGE_NAME_CLASSROOM":
            let { name, newClassRoom, classRoom, id } = action.obj
            state[ind].studentList.splice(id, 1)
            let newInd = state.findIndex(item => item.classRoom === newClassRoom)
            let newStudent = {
                name,
                classRoom
            }
            if (newInd === -1) {
                state.push({ classRoom: newClassRoom, id: state.length, studentList: [newStudent] })
            } else {
                state[newInd].studentList.push(newStudent)
            }
            addId(state[state.length - 1].studentList)
            addId(state[ind].studentList)
            return [...state]

        default:
            return [...state]
    }
}
let reducers = combineReducers({ allDataReducer })
let store = createStore(reducers)
export default store;