import Re from "../views/re"
import Ke from "../views/ke"
import Xue from "../views/xue"
import Men from "../views/men"
import Si from "../views/si"
export const routes = [{
        path: "/re",
        component: Re
    },
    {
        path: "/xue",
        component: Xue
    },
    {
        path: "/ke",
        component: Ke,
        children: [{
                path: "/ke/men",
                component: Men,
            },
            {
                path: "/ke/si",
                component: Si,
            },
            {
                path: "/ke",
                redirect: "/ke/men"
            }
        ]
    }, {
        path: "/",
        redirect: "/re"
    }
]