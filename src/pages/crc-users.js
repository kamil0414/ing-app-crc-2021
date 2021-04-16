import { LitElement, css, html } from 'lit-element';

class CrcUsers extends LitElement {
  static get properties() {
    return {
      users: Array,
    };
  }

  static get styles() {
    return [
      css`
        :host {
          background-color: #f0f0f0;
          display: flex;
          flex: 1;
          flex-direction: column;
        }
        .container {
          display: flex;
          flex-wrap: wrap;
          margin: 16px auto;
          max-width: 1600px;
        }
      `,
    ];
  }

  async firstUpdated() {}

  render() {}
}

window.customElements.define('crc-users', CrcUsers);
