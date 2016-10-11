import Ember from 'ember';

export function arrayPrototypeReduceRight(params/*, hash*/) {
  return Array.prototype.reduceRight.call(...params);
}

export default Ember.Helper.helper(arrayPrototypeReduceRight);
