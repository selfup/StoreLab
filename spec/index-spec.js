/* globals describe, it, expect */

const StoreLab = require('./../lib/index.js');

describe('lspi basics', () => {
  it('can has a default store and actions', () => {
    const store = new StoreLab();

    expect(store.state).toEqual({});
    expect(store.actions).toEqual({});
    expect(typeof store.dispatch).toBe('function');
  });
});
