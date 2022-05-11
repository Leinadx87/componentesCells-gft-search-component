import { LitElement, html, customElement, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './GftSearchComponent-styles.js';

import './GftButton.js'
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
export class GftSearchComponent extends LitElement {
  static get is() {
    return 'gft-search-component';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
      isButtonDisabled: { type: Boolean},
      texto: { type: String },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
    this.isButtonDisabled = true;
    this.texto = ""
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('gft-search-component-shared-styles')
    ];
  }

  // Define a template
  render() {
    return html`
      <slot name="prueba"></slot>
      <p>Welcome to ${this.name}</p>
      <br>
      
      <gft-input @gft-text-input-changed="${this._handlerInputText}"></gft-input>

      <gft-button color="#c5c5c5" .isDisabled="${this.isButtonDisabled}" @gft-button-clicked="${this._handlerSearchInfo}">Buscar</gft-button>
        
    `;
  }

  _handlerInputText(evento){
    if ((evento.detail).trim()) {
      this.isButtonDisabled = false;
      this.texto = evento.detail;
      console.log("entro al if de GftSearchComponent ", evento);
    } else {
      this.isButtonDisabled = true;
      console.log("entro al else de GftSearchComponent ");
    }
    /* evento.detail!="" ? this.isButtonDisabled=false : this.isButtonDisabled=true  */
  }

  _handlerSearchInfo(){
    console.log("presionaste el boton y el valor del input seria::: ", this.texto );
    this.dispatchEvent(new CustomEvent('gft-search-component-info',{
      composed: true,
      bubbles: true,
      detail: this.texto
    }))
  }

}
