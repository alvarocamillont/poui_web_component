const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      --color: red;
      --font-size: 16px;
    }

    :host([dark]) p {
      color: #fff;
      background: #2d2d2d;
    }

    p {
      color: var(--color);
      font-size: var(--font-size);
      padding: 4px;
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
