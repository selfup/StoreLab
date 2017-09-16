/* eslint-disable no-param-reassign, linebreak-style */
/* globals describe, it, expect */

const StoreLab = require('./../lib/index.js');

describe('StoreLab', () => {
  const appState = {
    messages: [],
  };

  const appActions = {
    ADD_MESSAGE(state, message) {
      const messages = Object.assign([], state.messages);
      messages.unshift(message);
      return { messages };
    },
    CLEAR() {
      return { messages: [] };
    },
    OOPS() {
      return 'lol';
    },
  };

  it('has a default store and actions - exposes install', () => {
    const store = new StoreLab();

    expect(store.state).toEqual({});
    expect(store.actions).toEqual({});
    expect(typeof store.dispatch).toBe('function');
  });

  it('can take in user defined state and actions', () => {
    const store = new StoreLab(appState, appActions);

    expect(store.state).toEqual(appState);
    expect(store.actions).toEqual(appActions);
  });

  it('can mutate state', () => {
    const store = new StoreLab(appState, appActions);
    expect(store.state.messages).toEqual([]);

    store.dispatch('ADD_MESSAGE', 'OK');
    expect(store.state.messages).toEqual(['OK']);

    store.dispatch('CLEAR');
    expect(store.state.messages).toEqual([]);
  });

  it('raises an error when an object literal is not returned', () => {
    const store = new StoreLab(appState, appActions);

    expect(() => store.dispatch('OOPS'))
      .toThrow(new Error('StoreLab: Please Return An Object Literal :D'));
  });
});

