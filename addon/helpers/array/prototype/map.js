import Ember from 'ember';

export function arrayPrototypeMap(params/*, hash*/) {
  return Array.prototype.map.call(...params);
}

export default Ember.Helper.helper(arrayPrototypeMap);
