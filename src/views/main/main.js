import { AbstractView } from "../../common/view.js";
import onChange from "on-change";
import { Header } from "../../components/header/header.js";
import { Search } from "../../components/search/search.js";
import { CardList } from "../../components/cardlist/cardlist.js";

export class MainView extends AbstractView {
  state = {
    list: [],
    numFound: 0,
    loading: false,
    searchQuery: undefined,
    offset: 0,
  };

  constructor(appState) {
    super();
    this.title = "Поиск книг";
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.state = onChange(this.state, this.stateHook.bind(this));
  }

  appStateHook(path) {
    if (path === "favorites") {
      console.log(path);
    }
  }

  async stateHook(path) {
    if (path === "searchQuery") {
      this.state.loading = true;
      const data = await this.loadList(
        this.state.searchQuery,
        this.state.offset,
      );
      this.state.loading = false;
      console.log(data);
      this.state.numFound = data.numFound;
      this.state.list = data.docs;
    }

    if (path === "list" || path === "loading") {
      this.render();
    }
  }

  async loadList(q, offset) {
    const res = await fetch(
      `https://openlibrary.org/search.json?q=${q}&offset=${offset}`,
    );
    return res.json();
  }

  render() {
    const el = document.createElement("div");
    el.append(new Search(this.state).render());
    el.append(new CardList(this.appState, this.state).render());
    this.app.innerHTML = "";
    this.app.append(el);
    this.renderHeader();
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }
}
