import Ember from 'ember';

export function arrayPrototypeReduce(params/*, hash*/) {
  return Array.prototype.reduce.call(...params);
}

export default Ember.Helper.helper(arrayPrototypeReduce);
