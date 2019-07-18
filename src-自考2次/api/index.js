import axios from "axios"
export function request(next) {
    axios.get("/api/list").then(res => {
        console.log(res.data.qTypeQs, "请求到数据")
        next({ type: "ALLDATA", list: res.data.qTypeQs })
    })
}