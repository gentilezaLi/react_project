import Jie from "../views/jieshao"
import Shi from "../views/shiping"
import Ying from "../views/yinping"
export const routes = [{
        path: "/jie",
        component: Jie
    },
    {
        path: "/shi",
        component: Shi
    },
    {
        path: "/ying",
        component: Ying
    },
    {
        path: "/",
        redirect: "/jie"
    }
]