import "../components/page-title";

import { LitElement, css, html } from "lit";

export class HomePage extends LitElement {
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
      <page-title>Welkom bij Daan's koekenbakkerij</page-title>
    </main> `;
  }
}

window.customElements.define("home-page", HomePage);
