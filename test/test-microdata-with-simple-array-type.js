import { MicrodataMixin } from '../wcs-microdata.js'
import { PolymerElement, html } from '../../@polymer/polymer/polymer-element.js'

class TestMicrodataWithSimpleArrayType extends MicrodataMixin(PolymerElement) {

  static get is() { return 'test-microdata-with-simple-array-type' }

  static get template() {
    return html`<span id="name">{{name}}</span>`
  }

  static get properties() {
    return {
      array: Array
    }
  }

}

customElements.define(TestMicrodataWithSimpleArrayType.is, TestMicrodataWithSimpleArrayType)
