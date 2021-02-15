import { LitElement, html } from 'lit-element';
import './dropdown.js';

// imperative way to interact with web component
const dropdown = document.querySelector('x-dropdown');
dropdown.title = 'custom dropdown';
dropdown.addEventListener('showChange', (e) => console.log(e));




// Declarative template binding to interact with web component
class XApp extends LitElement {
  constructor() {
    super();
    this.customTitle = 'Custom Title!';
  }

  render() {
    return html`
      <x-dropdown @showChange=${(e) => this.log(e)} .title="${this.customTitle}">
        Hello From Lit-HTML!
      </x-dropdown>
    `;
  }

  log(e) {
    console.log(e);
  }
}

customElements.define('x-app', XApp);