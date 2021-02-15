const baseStyles = `
  border: 1px solid #ccc;
  display: block;
  padding: 12px;
  margin-bottom: 12px;
`;

const templateOne = document.createElement('template');
templateOne.innerHTML = `
  <style>
    :host {
      ${baseStyles}
      --color: red;
    }

    p {
      color: var(--color);
    }
  </style>
  <p>Component 1 (Red)</p>
  <slot></slot>
`;

class OneComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(templateOne.content.cloneNode(true));
  }
}
customElements.define('one-component', OneComponent);

const templateTwo = document.createElement('template');
templateTwo.innerHTML = `
  <style>
    :host {
      ${baseStyles}
      --color: blue;
    }

    p {
      color: var(--color);
    }

    /*
      A slot override that is in the middle of a nested slot component tree
      does not override. A slot can only override slotted content if its is the
      final output slot at the bottom of the component tree.
    */
    /* ::slotted(p) {
      color: orange !important;
    } */
  </style>
  <p>Component 2 (Blue)</p>
  <slot></slot>
`;

class TwoComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(templateTwo.content.cloneNode(true));
  }
}
customElements.define('two-component', TwoComponent);


const templateThree = document.createElement('template');
templateThree.innerHTML = `
  <style>
    :host {
      ${baseStyles}
      --color: green;
    }

    p {
      color: var(--color);
    }
  </style>
  <p>Component 3 (Green)</p>
  <slot></slot>
`;

class ThreeComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(templateThree.content.cloneNode(true));
  }
}
customElements.define('three-component', ThreeComponent);

const templateFour = document.createElement('template');
templateFour.innerHTML = `
  <style>
    :host {
      ${baseStyles}
      --color: purple;
    }

    p {
      color: var(--color);
    }

    /* 
      Slot overrides have very low specificity. Any parent root style will have a
      higher specificity meaning needing a !important is likely.
    */
    /* ::slotted(p) {
      color: purple;
    } */
  </style>
  <p>Component 4 - purple override with ::slotted(p)</p>
  <slot></slot>
`;

class FourComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(templateFour.content.cloneNode(true));
  }
}
customElements.define('four-component', FourComponent);
