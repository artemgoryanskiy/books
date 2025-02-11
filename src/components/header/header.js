import {DivComponent} from '../../common/div-component.js';
import logo from '../../assets/icons/logo.svg';

export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }
    render() {
       this.el.innerHTML = ''
        this.el.classList.add('header')
        this.el.innerHTML = `
            <div>
               <img src="${logo}" alt="logo" class="header__logo">
            </div>
        `
        return this.el
    }
}