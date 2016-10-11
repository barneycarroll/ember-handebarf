import Ember from 'ember';

export function arrayPrototypeSlice(params/*, hash*/) {
  return Array.prototype.slice.call(...params);
}

export default Ember.Helper.helper(arrayPrototypeSlice);
