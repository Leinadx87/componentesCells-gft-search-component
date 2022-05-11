import { LitElement, html, customElement, } from 'lit-element';
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
export class GftInput extends LitElement {
  static get is() {
    return 'gft-input';
  }

  // Declare properties
  static get properties() {
    return {
      text: { type: String,},
    };
  }

  // Initialize properties
  constructor() {
    super();

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
    <input type="text" @input="${this._inputEvent}">    
    `;
  }

  _inputEvent(evento){
    console.log("Dentro del input y su valor es: ", evento.target.value);

    /* evento.target.value!="" ? this.active=false : this.active=true     
    this.textoinput = evento.target.value; */ 
    this.text = evento.target.value;
    
    this.dispatchEvent(new CustomEvent('gft-text-input-changed',{
      composed: true,
      bubbles: true,
      detail: this.text
    }))
  }

  

}
