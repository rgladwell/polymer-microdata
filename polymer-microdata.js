window.Microdata = window.Microdata || {};

Microdata.Mixin = Polymer.dedupingMixin(function(superClass) {

  return class extends superClass {

    connectedCallback() {
      if(super.connectedCallback()) super.connectedCallback();

      const microdata = parseMicrodata(this)[0];

      for (const property in microdata) {
        this[property] = microdata[property];
      }
    }

  }

})
