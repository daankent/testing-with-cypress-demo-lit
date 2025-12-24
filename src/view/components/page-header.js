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
      background-color: lightblue;
      display: flex;
      flex-direction: row;
      padding: 1rem;
    }

    h1 {
      font-size: 1.5rem;
    }

    a {
      text-decoration: none;
      color: darkorange;
    }
  `;

  render() {
    return html`<header>
      <h1><a href="/">Daan's koekenbakkerij</a></h1>
    </header>`;
  }
}

window.customElements.define("page-header", PageHeader);
