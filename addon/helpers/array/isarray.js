import Ember from 'ember';

export function arrayIsArray(params/*, hash*/) {
  return Array.isArray(...params);
}

export default Ember.Helper.helper(arrayIsArray);
