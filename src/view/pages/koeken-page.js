import "../components/page-title";
import "../components/product-list";

import { LitElement, css, html } from "lit";

export class KoekenPage extends LitElement {
  constructor() {
    super();
  }

  static styles = css`
    main {
      padding: 1rem;
    }
  `;

  render() {
    return html`<main>
      <page-title>Alle Koeken</page-title>
      <p>Alle koeken die wij op dit moment bakken</p>
      <product-list productAmount="14"></product-list>
    </main> `;
  }
}

window.customElements.define("koeken-page", KoekenPage);
