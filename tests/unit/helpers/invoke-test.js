import { invoke } from 'dummy/helpers/invoke';
import { module, test } from 'qunit';

module('Unit | Helper | invoke');

test('Given 1 function param, invokes it', function(assert) {
  let called = 0

  invoke([() => called = 1])

  assert.equal(called, 1)
});

test('Given 1 function param & subsequent params, invokes it with subsequent params as arguments', function(assert) {
  invoke([
    (a,b,c) => {
      assert.equal(a,1)
      assert.equal(b,2)
      assert.equal(c,3)
    },
    1, 2, 3
  ])
});
