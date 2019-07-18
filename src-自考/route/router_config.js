import List from "../views/list"
import Answer from "../views/answer"
import Look from "../views/look"
import Result from "../views/result"
export const routes = [{
        path: "/list",
        component: List
    },
    {
        path: "/answer/:id",
        component: Answer
    },
    {
        path: "/look",
        component: Look
    },
    {
        path: "/result",
        component: Result
    },
    {
        path: "/",
        redirect: "/list"
    }
]