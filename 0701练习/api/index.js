export function request() {
    return fetch("/api/rikao").then(res => res.json())
}
// import axios from "axios"
// export function request() {
//     axios.get("/api/rikao").then(res => {
//         console.log(res.data.list)
//     })
// }