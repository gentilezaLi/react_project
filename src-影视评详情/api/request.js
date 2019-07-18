import axios from "axios"
import { video_audio } from "./api"
export default function request(next) {
    axios.get(video_audio).then(res => {
        console.log(res.data, "请求到数据了")
        next({ type: "GETLIST", obj: res.data })
    })
}