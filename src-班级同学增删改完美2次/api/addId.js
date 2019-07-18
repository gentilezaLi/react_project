export default function addId(list) {
    list.map((item, i) => {
        item.id = i
        return item
    })
}