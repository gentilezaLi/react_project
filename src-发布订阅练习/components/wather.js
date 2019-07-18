class Watcher {
    constructor() {
            // this.callback=null;
            this.obj = {}
                // window.obj = this.obj
        }
        //订阅
    subscribe(key, callback) {
            this.obj[key] = callback;
        }
        //发布
    publish(key, msg) {
        if (this.obj[key]) {
            this.obj[key](msg)
        }

    }
}

//抛出
export default Watcher;