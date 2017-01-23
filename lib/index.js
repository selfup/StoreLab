/*!
 * StoreLab
 * (c) 2016-2017 Regis Jean-Pierre Boudinot (selfup)
 * Released under the MIT License.
 */

const STORELAB_ERROR = 'StoreLab: Please Return An Object Literal :D';

class StoreLab {
  constructor(state = {}, actions = {}) {
    this.state = state;
    this.actions = actions;
    this.dispatch = (action, data) => {
      const newMergeData = this.actions[action](this.state, data);
      if (typeof newMergeData !== 'object') throw Error(STORELAB_ERROR);
      Object.assign(this.state, newMergeData);
    };
  }
}

module.exports = StoreLab;
