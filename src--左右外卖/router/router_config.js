import Diancan from "../views/diancan"
import Pingjia from "../views/pingjia"
import Shangjia from "../views/shangjia"



export const routes = [{
        path: "/diancan",
        component: Diancan,

    },
    {
        path: "/pingjia",
        component: Pingjia
    },
    {
        path: "/shangjia",
        component: Shangjia
    }, {
        path: "/",
        redirect: "/diancan"
    }
]