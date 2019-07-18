import List from "../views/list"
import Dian from "../views/dian"
import Ping from "../views/ping"
import Shang from "../views/shang"
const routes = [{
    path: "/list",
    component: List,
    children: [{
            path: "/list/dian",
            component: Dian
        },
        {
            path: "/list/ping",
            component: Ping
        },
        {
            path: "/list/shang",
            component: Shang
        }
    ]
}, {
    path: "/list",
    redirect: "/list"
}]

export default routes;