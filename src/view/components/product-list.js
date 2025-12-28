import "./product-card";

import { LitElement, css, html } from "lit";

export class ProductList extends LitElement {
  constructor() {
    super();
  }

  static properties = {
    productAmount: { type: Number },
  };

  static styles = css`
    * {
      margin: 0;
    }

    h1 {
      font-size: 1.5rem;
      color: orange;
    }

    .list {
      margin-top: 1rem;
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (max-width: 900px) {
      .list {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media screen and (max-width: 700px) {
      .list {
        grid-template-columns: 1fr;
      }
    }
  `;

  render() {
    const koeken = [...Array(this.productAmount).keys()];
    return html` <section class="list">
      ${koeken.map((koek) => {
        return html`
          <product-card data-cy="product-card" productName=${"Koek " + koek}></product-card>
        `;
      })}
    </section>`;
  }
}

window.customElements.define("product-list", ProductList);
