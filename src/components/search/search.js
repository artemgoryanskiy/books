import { DivComponent } from "../../common/div-component.js";
import search from "../../assets/icons/search.svg";
import searchWhite from "../../assets/icons/search-white.svg";
import * as styles from "./search.module.css";

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  search() {
    this.state.searchQuery = document.querySelector(
      `.${styles.search__input}`,
    ).value;
  }

  render() {
    this.el.classList.add(`${styles.search}`);
    this.el.innerHTML = `
            <div class="${styles.search__wrapper}">
                <input type="text" class="${styles.search__input}" placeholder="Найти книгу или автора...." value="${this.state.searchQuery ? this.state.searchQuery : ""}" />
                <img src="${search}" alt="search" class="${styles.search__icon}" />
             
            </div>
            <button class="${styles.search__button}"><img src="${searchWhite}" alt="search"></button>
        `;
    this.el
      .querySelector("button")
      .addEventListener("click", this.search.bind(this));
    this.el.querySelector("input").addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.search();
      }
    });
    return this.el;
  }
}
