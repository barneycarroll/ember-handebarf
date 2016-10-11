import Ember from 'ember';

export function arrayPrototypeShift(params/*, hash*/) {
  return Array.prototype.shift.call(...params);
}

export default Ember.Helper.helper(arrayPrototypeShift);
