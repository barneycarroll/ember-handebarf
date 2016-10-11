import Ember from 'ember';

export function arrayPrototypeCopyWithin(params/*, hash*/) {
  return Array.prototype.copyWithin.call(...params);
}

export default Ember.Helper.helper(arrayPrototypeCopyWithin);
