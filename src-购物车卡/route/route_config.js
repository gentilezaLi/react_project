import Detail from "../views/detail"
import List from "../views/list"
export const routes = [{
        path: "/list",
        component: List
    },
    {
        path: "/detail",
        component: Detail
    },
    {
        path: "/",
        redirect: "/list"
    }

]