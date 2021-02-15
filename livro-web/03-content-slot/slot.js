const template = document.createElement('template');
template.innerHTML = `
  <style>
    p {
      padding: 12px;
      border: 1px solid #ccc;
    }
  </style>
  <p>
    <slot></slot>
  </p>
`;

class XComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('x-component', XComponent);
