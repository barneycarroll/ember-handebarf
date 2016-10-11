import Ember from 'ember';

export function arrayPrototypeSplice(params/*, hash*/) {
  return Array.prototype.splice.call(...params);
}

export default Ember.Helper.helper(arrayPrototypeSplice);
