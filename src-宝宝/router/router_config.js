import See from "../views/see"
import Listen from "../views/listen"
import My from "../views/my"

import Er from "../views/see/er"
import Gu from "../views/see/gu"
import Dong from "../views/see/dong"

import Erge from "../views/listen/erge"
import Gushi from "../views/listen/gushi"

import Detail from "../views/detail"
import MusicDetail from "../views/music_detail"

import Login from "../views/login"

export const routes = [{
        path: "/see",
        component: See,
        children: [{
                path: "/see/er",
                component: Er
            },
            {
                path: "/see/gu",
                component: Gu
            },
            {
                path: "/see/dong",
                component: Dong
            },
            {
                path: "/see",
                redirect: "/see/er"
            }
        ]
    },
    {
        path: "/listen",
        component: Listen,
        children: [{
                path: "/listen/erge",
                component: Erge
            },
            {
                path: "/listen/gushi",
                component: Gushi
            },
            {
                path: "/listen",
                redirect: "/listen/erge"
            }
        ]
    },
    {
        path: "/my",
        component: My
    },
    {
        path: "/",
        redirect: "/see"
    },
    {
        path: "/detail",
        component: Detail
    },
    {
        path: "/music/:id",
        component: MusicDetail
    },
    {
        path: "/login",
        component: Login
    }
]