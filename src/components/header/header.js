import {DivComponent} from '../../common/div-component.js';
import logo from '../../assets/icons/logo.svg';
import search from '../../assets/icons/search.svg';
import favorites from '../../assets/icons/favorites.svg';
import * as styles from './header.module.css';

export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }
    render() {
       this.el.innerHTML = ''
        this.el.classList.add(`${styles.header}`);
        this.el.innerHTML = `
            <div>
               <img src="${logo}" alt="logo" class="header__logo">
            </div>
            <div class="${styles.menu}">
                <a href="#" class="${styles.menu__item}">
                    <img src="${search}" alt="Поиск">
                    Поиск книг
                </a>
                <a href="#favorites" class="${styles.menu__item}">
                    <img src="${favorites}" alt="Избранное">
                    Избранное
                    <div class="${styles.menu__counter}">
                        ${this.appState.favorites.length}
                    </div>
                </a>
            </div>
        `
        return this.el
    }
}