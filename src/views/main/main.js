import {AbstractView} from '../../common/view.js';
import onChange from 'on-change';
import {Header} from '../../components/header/header.js';

export class MainView extends AbstractView {
    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0
    }

    constructor(appState) {
        super();
        this.title = 'Поиск книг';
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
    }

    appStateHook(path, value, previousValue) {
        console.log(path);
        console.log(value);
        console.log(previousValue);
    }

    render() {
        const el = document.createElement('div');
        this.app.innerHTML = '';
        this.app.append(el);
        this.renderHeader();
    }
    renderHeader() {
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }
}