const template = document.createElement('template');
template.innerHTML = 'Component Lifecycle';

class XComponent extends HTMLElement {
  static get observedAttributes() {
    return ['value'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  
  connectedCallback() {
    console.log('connectedCallback');
  }

  disconnectedCallback() {
    console.log('disconnectedCallback');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    console.log('attributeChangedCallback', attrName, newVal);
  }
}

customElements.define('x-component', XComponent);
