import { LitElement, css, html } from "lit";

export class SubmitButton extends LitElement {
  static formAssociated = true;
  static properties = {
    text: { type: String },
  };

  static styles = css`
    * {
      margin: 0;
    }

    button {
      background-color: orange;
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
      border: none;
      font-weight: bold;
      margin: 1rem;
    }

    button:hover {
      background-color: darkorange;
    }
  `;

  constructor() {
    super();
    this.text = "Submit";
    this.internals = this.attachInternals();
  }

  handleClick(e) {
    e.preventDefault();
    const form = this.internals.form;

    if (form) {
      form.requestSubmit();
    }
  }

  render() {
    return html` <button @click=${this.handleClick} type="submit">${this.text}</button> `;
  }
}

window.customElements.define("submit-button", SubmitButton);
