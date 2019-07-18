import axios from "axios"
export function getCard(next) {
    axios.get("/api/card").then(res => {
        console.log(res.data.list, "请求过来")
        let list = res.data.list
        next({ type: "ALL_DATA", list })
    })
}