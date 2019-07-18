import List from "../views/list"

import Che from "../views/list/che"
import Look from "../views/list/look"
import My from "../views/list/my"

import Hello from "../views/list/che/hello"
import World from "../views/list/che/world"

const routes = [{
        path: "/list",
        component: List,
        children: [{
                path: "/list/che",
                component: Che,
                children: [{
                        path: "/list/che/hello",
                        component: Hello
                    },
                    {
                        path: "/list/che/world",
                        component: World
                    },
                    {
                        path: "/list/che",
                        redirect: "/list/che/hello"
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
                redirect: "/list/che"
            }
        ]
    },
    {
        path: "/",
        redirect: "/list"
    }
]
export default routes;