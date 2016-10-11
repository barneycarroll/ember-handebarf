import Ember from 'ember';

export function array(params/*, hash*/) {
  return Array(...params);
}

export default Ember.Helper.helper(array);
