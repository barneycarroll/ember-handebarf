import Ember from 'ember';

export function arrayPrototypePush(params/*, hash*/) {
  return Array.prototype.push.call(...params);
}

export default Ember.Helper.helper(arrayPrototypePush);
