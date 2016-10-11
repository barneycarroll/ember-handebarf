import Ember from 'ember';

export function tripleEquals(params/*, hash*/) {
  return params.reduceRight((a, b) => a === b );
}

export default Ember.Helper.helper(tripleEquals);
