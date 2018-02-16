window.Microdata = window.Microdata || {};

Microdata.Mixin = Polymer.dedupingMixin(function(superClass) {

  return class extends superClass {

    connectedCallback() {
      if(super.connectedCallback()) super.connectedCallback();

      const microdata = parseMicrodata(this)[0];

      for (const name in microdata) {
        const value = microdata[name];
        const property = this.constructor.properties[name];

        this[name] = value;

        if(property === Array || property.type === Array) {
          if(!Array.isArray(value)) {
            this[name] = [value];
          }
        }
      }
    }

  }

})
