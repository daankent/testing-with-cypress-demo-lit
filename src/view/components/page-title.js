import { LitElement, css, html } from "lit";

export class PageTitle extends LitElement {
  constructor() {
    super();
  }

  static styles = css`
    h1 {
      font-size: 1.75rem;
      color: #e1712b;
    }
  `;

  render() {
    return html` <h1><slot></slot></h1> `;
  }
}

window.customElements.define("page-title", PageTitle);
