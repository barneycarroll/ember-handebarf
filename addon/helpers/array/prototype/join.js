import Ember from 'ember';

export function arrayPrototypeJoin(params/*, hash*/) {
  return Array.prototype.join.call(...params);
}

export default Ember.Helper.helper(arrayPrototypeJoin);
