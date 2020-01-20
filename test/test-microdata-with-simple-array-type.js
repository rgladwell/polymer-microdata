import { MicrodataMixin } from '../wcs-microdata.js'
import { LitElement, html } from 'lit-element'

class TestMicrodataWithSimpleArrayType extends MicrodataMixin(LitElement) {

  static get is() { return 'test-microdata-with-simple-array-type' }

  static get template() {
  }

  static get properties() {
    return {
      array: Array
    }
  }

  render() {
    return html`<span id="name">${this.name}</span>`
  }

}

customElements.define(TestMicrodataWithSimpleArrayType.is, TestMicrodataWithSimpleArrayType)
