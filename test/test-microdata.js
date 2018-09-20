import { MicrodataMixin } from '../polymer-microdata.js'
import { PolymerElement, html } from '../../@polymer/polymer/polymer-element.js'

class TestMicrodata extends MicrodataMixin(PolymerElement) {

  static get is() { return 'test-microdata' }

  static get template() {
    return html`<span id="name">{{name}}</span>`
  }

  static get properties() {
    return {
      prop: {
        type: String
      },
      name: {
        type: String
      },
      array: {
        type: Array
      }
    }
  }
}

customElements.define(TestMicrodata.is, TestMicrodata)
