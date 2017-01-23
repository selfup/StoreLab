/* eslint linebreak-style: ["error", "windows"], no-console: ["off"]*/

// use the transpiled/package version
const StoreLab = require('./../index.js');

// define state
const appState = {
  dates: [],
};

// define mutating actions
const appActions = {
  ADD(state) {
    const newDate = new Date().getTime();
    const dates = [newDate, ...state.dates];
    return { dates };
  },
  CLEAR() {
    return { dates: [] };
  },
  MODIFY(state, { index, newValue }) {
    const dates = state.dates.map((date, idx) => {
      if (idx === index) return newValue;
      return date;
    });
    return { dates };
  },
};

// create store with user defined state/actions
const store = new StoreLab(appState, appActions);

// print to the console to see what is happening
console.log('default state', store.state);
store.dispatch('ADD');
console.log('ADD', store.state);
store.dispatch('MODIFY', { index: 0, newValue: 'Not a date!' });
console.log('MODIFY', store.state);
store.dispatch('CLEAR');
console.log('CLEAR', store.state);
