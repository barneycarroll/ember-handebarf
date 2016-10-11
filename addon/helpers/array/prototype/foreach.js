import Ember from 'ember';

export function arrayPrototypeForEach(params/*, hash*/) {
  return Array.prototype.forEach.call(...params);
}

export default Ember.Helper.helper(arrayPrototypeForEach);
