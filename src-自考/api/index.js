import axios from "axios"
export function allData(next) {
    axios.get("/api/list").then(res => {
        console.log(res.data.qTypeQs[0])
        let list = res.data.qTypeQs
        next({ type: "ALLDATA", list })
    })
}