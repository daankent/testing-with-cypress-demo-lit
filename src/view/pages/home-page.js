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
      <h1>Welkom bij Daan's koekenbakkerij</h1>
    </main> `;
  }
}

window.customElements.define("home-page", HomePage);
