import Ember from 'ember';

export function globalAlias(params/*, hash*/) {
  return params.reduce((host, key)=>host[key], window||global)
}

export default Ember.Helper.helper(globalAlias);
