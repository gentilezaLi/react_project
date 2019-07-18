import Shou from "../views/shou"
import Hui from "../views/hui"
import Gou from "../views/gou"
import My from "../views/my"

import Re from "../views/shouye/re"
import Huo from "../views/shouye/huo"
import Shui from "../views/shouye/shui"
import Shu from "../views/shouye/shu"

export const routes = [{
        path: "/shou",
        component: Shou,
        children: [{
                path: "/shou/re",
                component: Re
            },
            {
                path: "/shou/huo",
                component: Huo
            },
            {
                path: "/shou/shui",
                component: Shui
            },
            {
                path: "/shou/shu",
                component: Shu
            },
            {
                path: "/shou",
                redirect: "/shou/re"
            }
        ]
    },
    {
        path: "/hui",
        component: Hui
    },
    {
        path: "/gou",
        component: Gou
    },
    {
        path: "/my",
        component: My
    },
    {
        path: "/",
        redirect: "/shou"
    },

]