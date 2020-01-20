import { MicrodataMixin } from '../wcs-microdata.js'
import { LitElement, html } from 'lit-element'

class TestMicrodata extends MicrodataMixin(LitElement) {

  static get is() { return 'test-microdata' }

  static get properties() {
    return {
      prop: String,
      name: String,
      array: Array
    }
  }

  render() {
    return html`<span id="name">${this.name}</span>`
  }

}

customElements.define(TestMicrodata.is, TestMicrodata)
