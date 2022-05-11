import { LitElement, html, customElement } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './GftSearchComponent-styles.js';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<gft-search-component></gft-search-component>
```

##styling-doc

@customElement gft-search-component
*/
export class GftButton extends LitElement {
  static get is() {
    return 'gft-button';
  }

  // Declare properties
  static get properties() {
    return {
      isDisabled: { type: Boolean },
      color: { type: String },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.isDisabled = false;
    this.color = '';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('gft-search-component-shared-styles'),
    ];
  }

  // Define a template
  //style="${this._getColor}"
  render() {
    return html`
      <button
        @click="${this._handlerClick}"
        ?disabled="${this.isDisabled}"
        style="background-color:${this.color}"
      >
        <slot></slot>
      </button>
    `;
  }

  /* get _getColor(){
    return this.color ? `background-color:${this.color}` : '';
  } */

  _handlerClick(evento) {
    console.log('Presionaste el boton y el detail seria: ', this.isDisabled);
    this.dispatchEvent(
      new CustomEvent('gft-button-clicked', {
        composed: true,
        bubbles: true,
        detail: this.isDisabled,
      })
    );
  }
}
