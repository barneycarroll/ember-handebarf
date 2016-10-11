import Ember from 'ember';

export function arrayFrom(params/*, hash*/) {
  return Array.from(...params);
}

export default Ember.Helper.helper(arrayFrom);
