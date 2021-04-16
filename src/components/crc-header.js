import { LitElement, css, html } from 'lit-element';

class CrcHeader extends LitElement {
  static get styles() {
    return [
      css`
        .header {
          background-color: #ffffff;
          border-bottom: 1px solid #d5d5d5;
          height: 63px;
          z-index: 1001;
        }
        .logo {
          width: 120px;
          height: 63px;
          margin-right: 30px;
        }
        .container {
          display: flex;
          margin: 0 auto;
          max-width: 1600px;
        }
        .flex-wrapper {
          display: flex;
          align-items: center;
        }
        h2 {
          margin: 0;
          font-weight: 500;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="header">
        <div class="container">
          <div class="flex-wrapper">
            <img
              alt="ING logo"
              class="logo"
              src="../../../assets/images/ing-logo.svg"
            />
            <h2>CRC 2021 - Frontend</h2>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('crc-header', CrcHeader);
