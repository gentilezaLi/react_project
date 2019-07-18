import Menu from "../components/menu"
import Shopping from "../components/shopping"
import Order from "../components/order"
import My from "../components/my"

export const routes=[
    {
        path:"/menu",
        component:Menu
    },
    {
        path:"/shopping",
        component:Shopping
    },
    {
        path:"/order",
        component:Order
    },
    {
        path:"/my",
        component:My
    }
]