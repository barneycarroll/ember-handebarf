import Ember from 'ember';

export function arrayPrototypeIncludes(params/*, hash*/) {
  return Array.prototype.includes.call(...params);
}

export default Ember.Helper.helper(arrayPrototypeIncludes);
