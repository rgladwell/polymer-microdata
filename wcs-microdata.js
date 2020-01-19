import '../microtesia.js/lib/microtesia.js'

export const MicrodataMixin = (base) => class extends base {

  connectedCallback() {
    if (super.connectedCallback) super.connectedCallback()
    this.__updateMicrodata()
  }

  performUpdate() {
    this.__updateMicrodata()
    if (super.performUpdate) super.performUpdate()
  }

  __updateMicrodata() {
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
