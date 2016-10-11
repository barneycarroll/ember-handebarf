import Ember from 'ember';

export function and(params/*, hash*/) {
  return params.reduce((a, b) => a && b );
}

export default Ember.Helper.helper(and);
