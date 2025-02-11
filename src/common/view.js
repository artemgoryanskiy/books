export class AbstractView {
    constructor() {
        this.app = document.getElementById('root');
    }
    set title(value) {
        document.title = value;
    }

    render() {
        return
    }
    destroy() {
        return
    }
}