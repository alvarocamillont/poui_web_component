const template = document.createElement('template');
template.innerHTML = `
  <style>
    .card {
      padding: 12px;
      border: 1px solid #ccc;
    }

    .title {
      border-bottom: 1px solid #ccc;
      margin-bottom: 12px;
    }
  </style>
  <div class="card">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <slot></slot>
  </div>
`;

class XDetailCardComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('x-detail-card', XDetailCardComponent);