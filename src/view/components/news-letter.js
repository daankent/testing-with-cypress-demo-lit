import "./submit-button";
import "./message-box";

import { LitElement, css, html, nothing } from "lit";

import { newsletterService } from "../../services/newsletterService";

export class NewsLetter extends LitElement {
  static properties = {
    message: { type: Object },
  };

  constructor() {
    super();
    this.message = { type: null, message: null };
  }

  static styles = css`
    * {
      margin: 0;
    }

    section {
      margin-top: 1rem;
      padding: 1rem;
      border: 2px solid orange;
    }

    h1 {
      font-size: 1.25rem;
      color: darkorange;
    }

    h2 {
      font-size: 1rem;
      color: orange;
    }

    form {
      padding: 1rem;
    }

    input {
      border-radius: 0.5rem;
      padding: 0.5rem;
      border: 2px solid lightblue;
    }

    label {
      color: orangered;
      font-weight: bold;
    }

    fieldset {
      border: none;
      display: flex;
      flex-direction: column;
      max-width: 350px;
    }
  `;

  async handleSubmit(e) {
    e.preventDefault();

    this.message = { type: null, message: null };

    const data = new FormData(e.target);

    e.target.reset();
    try {
      console.log(data, data.get("email"));
      await newsletterService.subscribe(data.get("email"));
      this.message = { type: "success", message: "Je bent ingeschreven voor de nieuwsbrief" };
    } catch (error) {
      this.message = { type: "error", message: error };
    }
  }

  async connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <section>
        <h1>Inschrijven voor de nieuwsbrief</h1>
        <h2>Krijg wekelijkse updates over de lekkerste koeken.</h2>
        ${this.message.type
          ? html`<message-box type=${this.message.type.toString()}
              >${this.message.message}</message-box
            > `
          : nothing}

        <form @submit=${this.handleSubmit}>
          <fieldset>
            <label for="email">E-mailadres</label>
            <input name="email" id="email" type="email" value="" required />
          </fieldset>

          <submit-button text="Inschrijven"></submit-button>
        </form>
      </section>
    `;
  }
}

window.customElements.define("news-letter", NewsLetter);
