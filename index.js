'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*!
 * StoreLab
 * (c) 2016-2017 Regis Jean-Pierre Boudinot (selfup)
 * Released under the MIT License.
 */

var STORELAB_ERROR = 'StoreLab: Please Return An Object Literal :D';

var StoreLab = function StoreLab() {
  var _this = this;

  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var actions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, StoreLab);

  this.state = state;
  this.actions = actions;
  this.dispatch = function (action, data) {
    var newMergeData = _this.actions[action](_this.state, data);
    if ((typeof newMergeData === 'undefined' ? 'undefined' : _typeof(newMergeData)) !== 'object') throw Error(STORELAB_ERROR);
    Object.assign(_this.state, newMergeData);
  };
};

module.exports = StoreLab;
