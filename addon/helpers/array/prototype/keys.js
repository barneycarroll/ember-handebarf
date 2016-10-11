import Ember from 'ember';

export function arrayPrototypeKeys(params/*, hash*/) {
  return Array.prototype.keys.call(...params);
}

export default Ember.Helper.helper(arrayPrototypeKeys);
