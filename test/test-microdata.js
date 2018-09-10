import '../polymer-microdata.js';
import { PolymerElement } from '../../@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="test-microdata">
  <template>
    <span id="name">{{name}}</span>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

class TestMicrodata extends Microdata.Mixin(PolymerElement) {

  static get is() { return 'test-microdata' }

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

customElements.define(TestMicrodata.is, TestMicrodata);
