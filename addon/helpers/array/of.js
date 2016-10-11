import Ember from 'ember';

export function arrayOf(params/*, hash*/) {
  return Array.of(...params);
}

export default Ember.Helper.helper(arrayOf);
