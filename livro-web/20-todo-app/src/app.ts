import { LitElement, html, customElement } from 'lit-element';
import './todos';

@customElement('x-app')
class XApp extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <header>
        <h1>Todos</h1>
      </header>
      <main>
        <x-todos></x-todos>
      </main>
    `;
  }
}
