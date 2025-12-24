import { LitElement, css, html } from "lit";

export class PageHeader extends LitElement {
  constructor() {
    super();
  }

  static styles = css`
    * {
      margin: 0;
    }

    header {
      width: 100%;
      background-color: orange;
      display: flex;
      flex-direction: row;
      padding: 1rem;
    }

    h1 {
      font-size: 1.5rem;
    }
  `;

  render() {
    return html`<header>
      <h1>Daan's koekenbakkerij</h1>
    </header>`;
  }
}

window.customElements.define("page-header", PageHeader);
