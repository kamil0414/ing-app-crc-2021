import { LitElement, css, html } from 'lit-element';

import '../components/crc-header.js';
import '../pages/crc-users.js';

class CrcApp extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          background-color: #ffffff;
          box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 1px 0px,
            rgba(0, 0, 0, 0.24) 0px 1px 1px 0px;
          display: flex;
          flex-direction: column;
          min-height: calc(100vh + 1px);
        }
      `,
    ];
  }

  render() {
    return html`
      <crc-header></crc-header>
      <crc-users></crc-users>
    `;
  }
}

window.customElements.define('crc-app', CrcApp);
