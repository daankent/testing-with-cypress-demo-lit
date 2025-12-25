import "./submit-button";

import { LitElement, css, html } from "lit";

export class MessageBox extends LitElement {
  static properties = {
    type: { type: String },
  };

  constructor() {
    super();
  }

  static styles = css`
    * {
      margin: 0;
    }

    section {
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      border: 2px solid black;
      margin: 0.5rem 0rem;
    }

    .success {
      background-color: #00ff0040;
      border-color: green;
      color: green;
    }

    .error {
      background-color: #ff000030;
      border-color: darkred;
      color: darkred;
    }
  `;

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    console.log(Object.fromEntries(data.entries()));
  }

  render() {
    return html`
      <section class="${this.type}"><slot data-cy="message-box-content">Message</slot></section>
    `;
  }
}

window.customElements.define("message-box", MessageBox);
