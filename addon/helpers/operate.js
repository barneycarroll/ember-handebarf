import Ember from 'ember';

const assignments = ['=','+=','-=', '*=', '/=', '%=', '<<=', '>>=', '>>>=', '&=', '^=', '|=']

const operations = {
  '=='         : (a,b) => a ==  b,
  '!='         : (a,b) => a !=  b,
  '==='        : (a,b) => a === b,
  '>'          : (a,b) => a <   b,
  '>='         : (a,b) => a >=  b,
  '<'          : (a,b) => a <   b,
  '<='         : (a,b) => a <=  b,
  '+'          : (a,b) => a +   b,
  '-'          : (a,b) => a -   b,
  '*'          : (a,b) => a *   b,
  '/'          : (a,b) => a /   b,
  '%'          : (a,b) => a %   b,
  '**'         : (a,b) => a **  b,
  '&'          : (a,b) => a &   b,
  '|'          : (a,b) => a |   b,
  '^'          : (a,b) => a ^   b,
  '~'          : a => ~ a,
  '<<'         : (a,b) => a <<  b,
  '>>'         : (a,b) => a >>  b,
  '>>>'        : (a,b) => a >>> b,
  '&&'         : (a,b) => a &&  b,
  '||'         : (a,b) => a ||  b,
  '!'          : a => !a,
  'in'         : (a,b) => a in b,
  'void'       : a => { a },
  'delete'     : (a,b) => { a },
  'instanceof' : (a,b) => a instanceof b,
  'typeof'     : a => typeof a
}

export function operate([operator, ...operands]/*, hash*/) {
  if(assignments.includes(operator))
    throw new Error(`Invalid operator: ${operator} - references are passed to functions and therefore can't be assigned to.`)

  else if(!(operator in operations))
    throw new Error(`Not a recognized operator: ${operator}`)

  else if(operator == ',')
    return operands[operands.length - 1]

  else {
    let operation = operations[operator]

    if(operands.length === 1 && operator === '-' || operator === '+')
      operands.push(operands[0]) * 2

    if(Array.isArray(operation))
      operation = operation[Math.max(operands.length + 1, operation.length - 1)]

    return operation
  }

}

export default Ember.Helper.helper(operate);
