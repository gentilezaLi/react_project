import axios from "axios"
export default function getData(next) {
    axios.get("/api/xianhua").then(res => {
        console.log(res.data.xianhuaList.list, "请求到数据")
        next({ type: "ALL_DATA", list: res.data.xianhuaList.list })
    })
}