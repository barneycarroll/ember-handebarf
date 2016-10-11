import { globalAlias } from 'dummy/helpers/global';
import { module, test } from 'qunit';

module('Unit | Helper | global');

test('Given no params, returns the global object', function(assert) {
  if( !global )
    var global = window

  assert.equal(globalAlias([]), global);
});

test('Given a single parameter, treats it as a path - similar to `Ember.get` (without the Ember object model logic) - and returns the value at that location', function(assert) {
  if( !global )
    var global = window

  if('path' in global){
    var replace = true
    var path    = global.path
  }
  else {
    var remove  = true
  }

  global.path = { to : { array : [ 'bar' ] } }

  assert.equal(
    globalAlias(['path.to.array.0']),

    global.path.to.array[0]
  );

  if(replace)
    global.path = path

  else if(remove)
    delete global.path
});
