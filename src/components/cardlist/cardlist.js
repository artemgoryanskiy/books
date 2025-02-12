import { DivComponent } from "../../common/div-component.js";
import * as styles from "./cardlist.module.css";

export class Cardlist extends DivComponent {
  constructor(appState, parentState) {
    super();
    this.appState = appState;
    this.parentState = parentState;
  }

  render() {
    if (this.parentState.loading) {
      this.el.innerHTML = `<div class="${styles.card_list__loader}">Загрузка...</div>`;
      return this.el;
    }
    this.el.classList.add(`card_list`);
    this.el.innerHTML = `
		<h1>Найдено число книг - ${this.parentState.list.length}</h1>
	`;

    return this.el;
  }
}
