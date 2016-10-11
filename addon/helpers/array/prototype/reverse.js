import Ember from 'ember';

export function arrayPrototypeReverse(params/*, hash*/) {
  return Array.prototype.reverse.call(...params);
}

export default Ember.Helper.helper(arrayPrototypeReverse);
