class Watcher {
    constructor() {
        this.callback = null
    }
    subscribe(callback) {
        this.callback = callback
    }
    publish(type, msg, val) {
        if (type === "zan") {
            this.callback(type, msg)
        }
        if (type === "ping") {
            this.callback(type, msg)
        }
        if (type === "sub") {
            this.callback(type, msg, val)
        }

    }
}
export default Watcher;