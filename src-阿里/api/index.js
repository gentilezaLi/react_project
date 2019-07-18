// export function getDate() {
//     return fetch("/api/list").then(res => res.json())
// }
import axios from "axios"
export function getDate(next) {
    axios.get("/api/list").then(res => {
        console.log(res.data, "请求数据回来了")
        let list = res.data
        next({ type: "SAVE", list })

    })
}