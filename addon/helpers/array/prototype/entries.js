import Ember from 'ember';

export function arrayPrototypeEntries(params/*, hash*/) {
  return Array.prototype.entries.call(...params);
}

export default Ember.Helper.helper(arrayPrototypeEntries);
