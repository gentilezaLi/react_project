import List from "../views/list"
import Home from "../views/list/home"
import Hang from "../views/list/hang"
import Zi from "../views/list/zi"
import Jiao from "../views/list/jiao"
import Xun from "../views/list/xun"

import InpDetail from "../views/inpDetail"
import BianJiDetail from "../views/bianjiDetail"

export const routes = [{
        path: "/list",
        component: List,
        children: [{
                path: "/list/home",
                component: Home
            },
            {
                path: "/list/hang",
                component: Hang
            },
            {
                path: "/list/zi",
                component: Zi
            },
            {
                path: "/list/jiao",
                component: Jiao
            },
            {
                path: "/list/xun",
                component: Xun
            },
            {
                path: "/list",
                redirect: "/list/zi"
            }
        ]
    },
    {
        path: "/inpDetail",
        component: InpDetail
    },
    {
        path: "/bianjidetail",
        component: BianJiDetail
    },
    {
        path: "/",
        redirect: "/list"
    }
]