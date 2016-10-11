import Ember from 'ember';

export function arrayPrototypeLastIndexOf(params/*, hash*/) {
  return Array.prototype.lastIndefOf.call(...params);
}

export default Ember.Helper.helper(arrayPrototypeLastIndexOf);
