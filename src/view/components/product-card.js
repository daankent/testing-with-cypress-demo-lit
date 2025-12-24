import { LitElement, css, html } from "lit";

export class ProductCard extends LitElement {
  constructor() {
    super();
  }

  static properties = {
    productName: { type: String },
  };

  static styles = css`
    * {
      margin: 0;
    }

    h2 {
      font-size: 1.5rem;
      color: orange;
    }

    article {
      border: 2px solid darkorange;
      max-width: 350px;
    }

    .img-container {
      background-color: lightblue;
      opacity: 0.5rem;
      display: flex;
      min-height: 100px;
    }

    .img-container img {
      max-width: 100%;
    }

    .info {
      padding: 1rem;
    }
  `;

  render() {
    return html`<article>
      <section class="img-container"><img src="/koek.png" alt="afbeelding van een koek" /></section>

      <section class="info">
        <h2>${this.productName}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed purus convallis, feugiat
          ligula eget, sodales est. Pellentesque a congue mi, sollicitudin imperdiet leo. Aliquam
          elementum libero ante, quis volutpat urna condimentum quis.
        </p>
      </section>
    </article>`;
  }
}

window.customElements.define("product-card", ProductCard);
