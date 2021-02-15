const template = document.createElement('template');
template.innerHTML = `
  <style>
    p {
      color: var(--z-component-color, orange);
      font-size: var(--z-component-font-size, 16px);
      padding: 4px;
    }
  </style>
  <p>
    <slot></slot>
  </p>
`;

class ZComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('z-component', ZComponent);
