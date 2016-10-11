import Ember from 'ember';

export function arrayPrototypePop(params/*, hash*/) {
  return Array.prototype.pop.call(...params);
}

export default Ember.Helper.helper(arrayPrototypePop);
