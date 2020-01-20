import { html, fixture, expect } from '@open-wc/testing'

import './test-microdata.js'
import './test-microdata-with-simple-array-type.js'

describe('wcs-microdata', () => {
  it('does not delete normal custom element properties', async () => {
    const element = await fixture(html`
      <test-microdata name="name" prop="normal-prop"></test-microdata>
    `)

    expect(element.prop).to.equal('normal-prop')
  })

  // it('increases the counter on button click', async () => {
  //   const el = await fixture(html`
  //     <test-wc></test-wc>
  //   `);
  //   el.shadowRoot.querySelector('button').click();
  //
  //   expect(el.counter).to.equal(6);
  // });
  //
  // it('can override the title via attribute', async () => {
  //   const el = await fixture(html`
  //     <test-wc title="attribute title"></test-wc>
  //   `);
  //
  //   expect(el.title).to.equal('attribute title');
  // });
  //
  // it('shows initially the text "hey there Nr. 5!" and an "increment" button', async () => {
  //   const el = await fixture(html`
  //     <test-wc></test-wc>
  //   `);
  //
  //   expect(el).shadowDom.to.equalSnapshot();
  // });
  //
  // it('passes the a11y audit', async () => {
  //   const el = await fixture(html`
  //     <test-wc></test-wc>
  //   `);
  //
  //   await expect(el).shadowDom.to.be.accessible();
  // });
})
