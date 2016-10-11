import Ember from 'ember';

export function arrayPrototypeFilter(params/*, hash*/) {
  return Array.prototype.filter.call(...params);
}

export default Ember.Helper.helper(arrayPrototypeFilter);
