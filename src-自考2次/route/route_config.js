import List from "../views/list"

import Shop from "../views/shop"
import Look from "../views/look"
import My from "../views/my"

import Hello from "../views/hello"
import Wold from "../views/wold"

import Login from "../views/login"

export const routes = [{
        path: "/list",
        component: List,
        children: [{
                path: "/list/shop",
                component: Shop,
                children: [{
                        path: "/list/shop/hello",
                        component: Hello
                    },
                    {
                        path: "/list/shop/wold/:id",
                        component: Wold
                    },
                    {
                        path: "/list/shop",
                        redirect: "/list/shop/hello"
                    }
                ]
            },
            {
                path: "/list/look",
                component: Look
            },
            {
                path: "/list/my",
                component: My
            },
            {
                path: "/list",
                redirect: "/list/shop"
            }
        ]

    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/",
        redirect: "list"
    }
]