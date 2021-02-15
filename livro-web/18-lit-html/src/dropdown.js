import { LitElement, html } from 'lit-element';

class XDropdown extends LitElement {
  // If using TypeScript or Babel compile
  // steps advanced decorators are available
  // @property() visible = false;
  // @property() title = 'dropdown';

  static get properties() {
    return {
      show: { type: Boolean },
      title: { type: String },
    }
  }

  constructor() {
    super();
    this.show = false;
    this.title = 'dropdown';
  }

  render() {
    return html`
      <style>
        .dropdown div {
          border: 1px solid #ccc;
          padding: 12px;
        }
      </style>
      <div class="dropdown">
        <button @click="${(e) => this.toggle(e)}">${this.title}</button>
        ${this.show ?
          html`
            <div>
              <slot></slot>
            </div>`
          : '' }
      </div>
    `;
  }

  toggle() {
    this.show = !this.show;
    this.dispatchEvent(new CustomEvent('showChange', { detail: this.show }))
  }
}

customElements.define('x-dropdown', XDropdown);