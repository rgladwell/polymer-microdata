import '../polymer-microdata.js';
import { PolymerElement } from '../../@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="test-microdata-with-simple-array-type">
  <template>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

class TestMicrodataWithSimpleArrayType extends Microdata.Mixin(PolymerElement) {

  static get is() { return 'test-microdata-with-simple-array-type' }

  static get properties() {
    return {
      array: Array
    }
  }

}

customElements.define(TestMicrodataWithSimpleArrayType.is, TestMicrodataWithSimpleArrayType);
