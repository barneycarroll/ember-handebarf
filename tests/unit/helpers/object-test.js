import { object } from 'dummy/helpers/object';
import { module, test } from 'qunit';

module('Unit | Helper | object');

test('Returns a plain object', function(assert) {
  assert.equals(object([]).constructor, Object)
});

test('Given an even number of params, creates an object with params 2n+1 mapped to the keys 2n', function(assert) {
  const reference = {}

  assert.deepEquals(
    object([
      'foo',     'bar',
      'options', object([
        'reference', reference
      ])
    ]),

    {
      foo     : 'bar',
      options : {
        reference : reference
      }
    }
  )
});
