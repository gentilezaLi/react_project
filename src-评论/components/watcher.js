class Watcher {
    constructor() {
            this.callback = null;
        }
        //订阅
    subscribe(callback) {
            this.callback = callback;
        }
        //发布
    publish(type, msg, val) {
        if (type === "zan") {
            this.callback(type, msg)
        } else if (type === "ping") {
            this.callback(type, msg)
        } else if (type === "sub") {
            this.callback(type, msg, val)
        }

    }
}

export default Watcher;