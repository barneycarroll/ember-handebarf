import Ember from 'ember';

export function arrayPrototypeConcat(params/*, hash*/) {
  return Array.prototype.concat.call(...params);
}

export default Ember.Helper.helper(arrayPrototypeConcat);
