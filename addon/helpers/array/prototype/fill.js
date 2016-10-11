import Ember from 'ember';

export function arrayPrototypeFill(params/*, hash*/) {
  return Array.prototype.fill.call(...params);
}

export default Ember.Helper.helper(arrayPrototypeFill);
