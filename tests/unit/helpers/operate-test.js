import { operate } from 'dummy/helpers/operate';
import { module, test } from 'qunit';

module('Unit | Helper | operate');

test('Consumes a string matching a Javascript operator token as param 1, and 1 or more operands as subsequent arguments', function(assert) {
  assert.ok(operate(['+', 1, 2]));
});

test('Given an operator expecting left & right operands, treats param 2 as left and param 3 as right', function(assert) {
  assert.equal(
    operate(['-', 3, 4]),
    3 - 4
  );

  assert.equal(
    operate(['instanceof', {}, Object]),
    ({}) instanceof Object
  );
});

test('Given an operator expecting left & right operands and 3 or more operands, equivalent to operator being introduced between operands', function(assert) {
  assert.equal(
    operate(['/', 5, 6, 7]),
    5 / 6 / 7
  );

  assert.equal(
    operate(['instanceof', Array, Function, Boolean]),
    Array instanceof Function instanceof Boolean
  );
});

test('Can\'t perform assignment', function(assert) {
  ['=', '+=', '-=', '*=', '/=', '%=', '**=', '<<=', '>>=', '>>>=', '&=', '^=', '|='].forEach(function(operator) {
    let   left    = Math.random()
    const right   = Math.random()
    const initial = left

    assert.throws(
      operate([operator, left, right])
    )

    assert.equal(left, initial)
  });

  ['++', '--'].forEach(function(operator) {
    let   reference   = Math.random()
    const declaration = reference

    assert.throws(
      operate([operator, reference])
    )

    assert.equal(reference, declaration)
  });
});

module('Unit | Helper | operate | \'new\' operator');

test('* except for `new`, where param 2 is the constructor and params 3 onwards are the arguments', function(assert) {
  assert.deepEqual(
    operate(['new', Array, 10, 11, 12]),
    new Array(10, 11, 12)
  );
});

module('Unit | Helper | operate | polyadic operations');

test('Can perform all non-assigning left & right operand operators as expected', function(assert) {
  ['==', '!=', '===', '>', '>=', '<', '<=', '+', '-', '*', '/', '%', '**', '&', '|', '^', '~', '<<', '>>', '>>>', '&&', '||', 'in', 'instanceof', ','].forEach(function(operator) {
    const left  = Math.random()
    const right = Math.random()

    assert.equal(
      operate([operator, left, right]),
      eval([left, right].join(operator))
    )
  });
});

module('Unit | Helper | operate | unary operations');

const entities = Object.freeze([
  true,
  false,
  undefined,
  null,
  0,
  1e7 * 3,
  'aerrty re  resthyduu',
  [],
  {},
  new Date(),
  global || window
])

test('+', function(assert) {
  entities.forEach(function(entity) {
    assert.equal(
      operate(['+', entity]),
      +entity
    )
  })
});

test('-', function(assert) {
  entities.forEach(function(entity) {
    assert.equal(
      operate(['-', entity]),
      -entity
    )
  })
});

test('!', function(assert) {
  entities.forEach(function(entity) {
    assert.equal(
      operate(['!', entity]),
      !entity
    )
  })
});

test('void', function(assert) {
  entities.forEach(function(entity) {
    assert.equal(
      operate(['void', entity]),
      void entity
    )
  })
});

test('typeof', function(assert) {
  entities.forEach(function(entity) {
    assert.equal(
      operate(['typeof', entity]),
      typeof entity
    )
  })
});

test('delete', function(assert) {
  const value     = {}
  const mutable   = {key: value}
  const immutable = {key: value}

  assert.equal(
    operate(['delete', mutable, 'key']),
    true
  )

  assert.equal(
    'key' in mutable,
    false
  )

  assert.equal(
    operate(['delete', immutable, 'key']),
    false
  )

  assert.equal(
    'key' in immutable,
    true
  )
});
