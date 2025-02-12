import { DivComponent } from "../../common/div-component.js";
import favoriteWhite from "../../assets/icons/favorite-white.svg";
import favoriteBlack from "../../assets/icons/favorite-black.svg";
import * as styles from "./card.module.css";

export class Card extends DivComponent {
  constructor(appState, cardState) {
    super();
    this.appState = appState;
    this.cardState = cardState;
  }

  render() {
    this.el.classList.add(`${styles.card}`);
    const existInFavorites = this.appState.favorites.find(
      (item) => item.id === this.cardState.id,
    );
    this.el.innerHTML = `
		    <div class="${styles.card__image}">
		        <img src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg" alt="Обложка" />
            </div>
            <div class="${styles.card__info}">
                <div class="${styles.card__tag}">
                    ${this.cardState.first_publish_year}
                </div>
                 <div class="${styles.card__name}">
                    ${this.cardState.title}
                </div>
                <div class="${styles.card__author}">
                    ${this.cardState.author_name ? this.cardState.author_name[0] : "Не задано"}
                </div>
                <div class="${styles.card__footer}">
                    <button class="${styles.button__add}" ${existInFavorites ? `${styles.button__active}` : ""}">
                        ${existInFavorites ? `<img src=${favoriteBlack} alt="favorite"/>` : ` <img src=${favoriteWhite} alt="favorites"/>`}
                    </button>
                </div>
            </div>
	`;

    return this.el;
  }
}
