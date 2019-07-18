import Home from "../views/home"
import HomeDetail from "../views/homeDetail"
import Page from "../views/page"
import PageDetail from "../views/page.Detail"
import My from "../views/my"
import MyDetail from "../views/myDetail"
import Login from "../views/login"

export const routes = [{
        path: "/home",
        component: Home
    },
    {
        path: "/homeDetail",
        component: HomeDetail
    },
    {
        path: "/page",
        component: Page
    }, {
        path: "/pageDetail",
        component: PageDetail
    },
    {
        path: "/my",
        component: My
    }, {
        path: "/myDetail",
        component: MyDetail
    }, {
        path: "/login",
        component: Login
    },
    {
        path: "/",
        redirect: "/home"
    }
]