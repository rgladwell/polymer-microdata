import { dedupingMixin } from '../@polymer/polymer/lib/utils/mixin.js'
import '../microtesia.js/lib/microtesia.js'

let internalMicrodataMixin = (base) => class extends base {

  connectedCallback() {
    if (super.connectedCallback()) super.connectedCallback()

    function filterProperty(property, value) {
      if ((property === Array || property.type === Array) && !Array.isArray(value)) {
        return [value]
      } else {
        return value
      }
    }

    const microdata = parseMicrodata(this)[0]

    for (const name in microdata) {
      const value = microdata[name]
      const property = this.constructor.properties[name]

      if (property) {
        this[name] = filterProperty(property, value)
      }
    }
  }

}

export const MicrodataMixin = dedupingMixin(internalMicrodataMixin)
