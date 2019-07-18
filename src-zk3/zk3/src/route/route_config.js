import Shou from "../views/shou"
import Fen from "../views/fen"
import Gou from "../views/gou"
import My from "../views/my"

import Detail from "../views/detail"

export const routes = [{
        path: "/shou",
        component: Shou
    },
    {
        path: "/fen",
        component: Fen
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

    {
        path: "/detail",
        component: Detail
    },



]