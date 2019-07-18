import CreateClassRoom from "../views/createClassRoom"
import ClickAddStudent from "../views/clickAddStudent"
import AddStudent from "../views/addStudent"
import StudentDetail from "../views/studentDetail"
import ClassRoomManger from "../views/classRoomManger"

export const routes = [{
        path: "/createClassRoom",
        component: CreateClassRoom
    },
    {
        path: "/clickAddStudent",
        component: ClickAddStudent
    },
    {
        path: "/addStudent",
        component: AddStudent
    },
    {
        path: "/studentDetail",
        component: StudentDetail
    },
    {
        path: "/classRoomManger",
        component: ClassRoomManger
    },
    {
        path: "/",
        redirect: "createClassRoom"
    }
]