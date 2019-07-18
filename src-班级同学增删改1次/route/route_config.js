import Addclassroom from "../views/addclassroom"
import Classroomdetail from "../views/classroomdetail"
import Addstudent from "../views/addstudent"
import Studentdetail from "../views/studentdetail"
import Classroommanager from "../views/classroommanager"

export const routes = [{
        path: "/addclassroom",
        component: Addclassroom
    },
    {
        path: "/classroomdetail",
        component: Classroomdetail
    },
    {
        path: "/addstudent",
        component: Addstudent
    },
    {
        path: "/studentdetail",
        component: Studentdetail
    },
    {
        path: "/classroommanager",
        component: Classroommanager
    },
    {
        path: "/",
        redirect: "/addclassroom"
    }
]