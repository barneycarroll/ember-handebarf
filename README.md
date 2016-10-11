# ember-jshbs

Javascript in Handlebars (jshbs) provides 4 helpers to drastically improve Handlebars literacy:

## {{global path}}

Returns the global object - `global` or `window`. If `path` is supplied, we perform the dumb JS equivalent of `Ember.get` without the Ember magic. Thus:

| Handlebars | Javascript |
| :--- | :--- |
| <pre lang="hbs">{{global 'document.body.childNodes.0.tagName'}}</pre> | <pre land="js">window.document.body.childNodes.0.tagName</pre> |

## {{invoke fn ...args}}

Calls `fn` with `args`. If this seems insufficient for your functional ambitions, bear in mind you can do ludicrous stuff like `{{invoke (global 'Function.prototype.bind.apply')}}` or `{{invoke (get fn 'apply')}}` etc.

## `{{operate operator ...operands}}`

Applies `operator` to `operands`. Helpers are functions, so we can't position operators relative to their operands as normal, but in practice it's mostly procedural:

| Handlebars | Javascript |
| :--- | :--- |
| <pre lang="hbs">{{operator '-' 1}}</pre> | <pre land="js">-1</pre> |
| <pre lang="hbs">{{operator '-' 1 2}}</pre> | <pre land="js">1 - 2</pre> |
| <pre lang="hbs">{{operator '-' 1 2 3}}</pre> | <pre land="js">1 - 2 - 3</pre> |

Assignment operators don't work because we can't declare floating references in Handlebars, and as helpers are functions who receive values by reference or value, property assignment can't work either (however: `{{invoke (global 'Ember.set') this 'key' value}}` >:D).

The available operators are:

 `==`, `!=`, `===`, `>`, `>=`, `<`, `<=`, `+`, `-`, `*`, `/`, `%`, `**`, `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`, `&&`, `||`, `!`, `in`, `void`, `delete`, `instanceof`, `typeof`, `,`, `new`

`new` is a special case:

### `{{operate 'new' constructor ...arguments}}`

```hbs
{{operator 'new' (global 'Map')
  (global 'Array'
    (global 'Array' 'x' '1')
    (global 'Array' 'y' '2')
  )
}}
```
...is equivalent to:
```js
new Map([['x','1']['y','2']])
```

## `{{object ...[key, value]}}`

The one thing that remains impossible with the 3 helpers above is declaring objects. The `object` helper returns objects based on the signature above. Thus:

```hbs
(object
  'foo'    'bar'
  'config' (object
    'element' (invoke (get this '$'))
  )
)
```
...is equivalent to:
```js
{
  foo    : 'bar',
  config : {
    element : this.$()
  }
}
```

> This is useful for components that expect esoteric structured input. I find pseudo-MVC 'separation of concerns' is self-defeating if it requires that a nested component's esoteric input needs to be computed in a higher order model - information and transformation should happen as close to its site of consumption as possible. So the object above might be introduced into a template as eg `{{my-component options=(object 'foo' 'bar')}}`

***

The following outlines the details of collaborating on this Ember addon.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
