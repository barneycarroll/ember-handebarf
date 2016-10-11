import Ember from 'ember';

export function arrayPrototypeEvery(params/*, hash*/) {
  return Array.prototype.every.call(...params);
}

export default Ember.Helper.helper(arrayPrototypeEvery);
