import "../components/page-title";
import "../components/product-list";

import { LitElement, css, html } from "lit";

export class HomePage extends LitElement {
  constructor() {
    super();
  }

  static styles = css`
    main {
      padding: 1rem;
    }

    h2 {
      color: orange;
    }
  `;

  render() {
    return html`<main>
      <page-title>Welkom bij Daan's koekenbakkerij</page-title>
      <h2>Populaire koeken</h2>
      <p>Onze best verkopende koeken</p>
      <a href="/koeken">Bekijk alle koeken</a>
      <product-list productAmount="4"></product-list>
    </main> `;
  }
}

window.customElements.define("home-page", HomePage);
