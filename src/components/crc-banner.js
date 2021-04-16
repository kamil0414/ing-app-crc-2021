import { LitElement, css, html } from 'lit-element';

class CrcBanner extends LitElement {
  static get properties() {
    return {
      title: String,
      description: String,
    };
  }

  static get styles() {
    return [
      css`
        .banner {
          background-color: #ffffff;
          box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 1px 0px,
            rgba(0, 0, 0, 0.24) 0px 1px 1px 0px;
          padding: 30px 0;
        }
        .container {
          margin: 0 auto;
          max-width: 1600px;
        }
        h1 {
          color: #ff6200;
        }
        .btn {
          border-radius: 4px;
          border: 1px solid transparent;
          cursor: pointer;
          display: inline-block;
          font-size: 16px;
          font-weight: 400;
          line-height: 36px;
          outline: none;
          padding: 0 15px;
          text-decoration: none;
        }
        .btn-orange {
          background-color: #ff6200;
          color: #ffffff;
        }
        .btn-indingo {
          background-color: #525199;
          color: #ffffff;
        }
        .btn-lg {
          padding: 5px 12px;
          margin: 5px;
        }
        .flex {
          display: flex;
        }
        .labels_container {
          flex: 1;
        }
      `,
    ];
  }

  render() {
    return html`<div class="banner">
      <div class="container">
        <div class="flex">
          <div class="labels_container">
            <h1>${this.title}</h1>
            <p>${this.description}</p>
          </div>
        </div>
      </div>
    </div> `;
  }
}

window.customElements.define('crc-banner', CrcBanner);
