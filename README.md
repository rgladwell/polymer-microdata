# wcs-microdata [![Build Status](https://travis-ci.org/rgladwell/wcs-microdata.svg?branch=master)](https://travis-ci.org/rgladwell/wcs-microdata)

Web components mixin to support microdata properties.

To install wcs-microdata run the following:

```sh
> npm install wcs-microdata --save
```

You can then decorate your custom elements as follows:

```js
import { MicrodataMixin } from '../wcs-microdata.js'
import { LitElement, html } from 'lit-element'

class MyMicrodataElement extends MicrodataMixin(LitElement) {

  static get is() { return 'my-microdata-element' }

  static get properties() {
    return {
      name: {
        type: String
      }
    }
  }

  render() {
    return html`<span id="name">${this.name}</span>`
  }
}

customElements.define(MyMicrodataElement.is, MyMicrodataElement)

```

You can then populate your element properties using microdata syntax as follows:


```html
<my-microdata-element itemscope>
  <span itemprop="name">my-name</span>
</my-microdata-element>
```

This should render as:

```html
<p>my-name</p>
```

## Hacking

To modify `polymer-microdata` you need the following installed:

  * [Node](https://nodejs.org/en/download/package-manager/)
  * [Polymer CLI](https://github.com/Polymer/tools/tree/master/packages/cli#installation)

Once you've cloned the repo run the following shell commands:

```shell
> npm install
```

You can run the tests as follows:

```shell
> npm test
```

Or you can run the test suite in your browser by running `polymer serve --open` and copy-and-pasting `http://127.0.0.1:8081/components/polymer-microdata/test/` into your address bar.
