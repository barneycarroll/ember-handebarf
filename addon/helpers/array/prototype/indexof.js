import Ember from 'ember';

export function arrayPrototypeIndexOf(params/*, hash*/) {
  return Array.prototype.indexOf.call(...params);
}

export default Ember.Helper.helper(arrayPrototypeIndexOf);
