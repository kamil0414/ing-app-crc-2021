import { LitElement, css, html } from 'lit-element';

class CrcUserBox extends LitElement {
  static get properties() {
    return {
      firstname: String,
      lastname: String,
      email: String,
      gender: String,
      isActive: {
        type: Boolean,
        value: false,
      },
    };
  }

  static get styles() {
    return [
      css`
        .box {
          background-color: #ffffff;
          border-radius: 4px;
          box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12),
            0 1.5px 1.5px 0 rgba(0, 0, 0, 0.24);
          cursor: pointer;
          display: flex;
          flex-direction: row;
          width: 310px;
          transition: all 0.2s ease-in-out;
          padding: 32px;
          margin: 10px;
        }

        .box:hover {
          transform: scale(1.03);
        }

        .subtitle {
          color: #777777;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="box">
        <div class="user_details">
          <h4>${this.firstname}&nbsp;${this.lastname}</h4>
          <p>${this.email}</p>
          <p class="subtitle">${this.gender}</p>
        </div>
      </div>
    `;
  }
}

window.customElements.define('crc-user-box', CrcUserBox);
