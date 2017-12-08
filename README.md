# Quick and Dirty Set
A tiny (10 LOC) ES6 `Set` implementation.

Want to use ES6 `Set` for some basic stuff?
Don't want to to pull in the entire polyfill?
Use `qd-set`!

**Disclaimer**: Not a polyfill, not spec-compliant, don't use on large data (slow!).

## Usage
```js
import { Set } from 'qd-set';

const s = new Set([1, 2, 2, 3])
s.size       // => 3
s.add(3)     // => Set([1, 2, 3])
s.add(4)     // => Set([1, 2, 3, 4])
s.has(4)     // => true
s.delete(3)  // => 3
s.forEach(x => console.log(x))
// 1
// 2
// 4
s.clear()    
s.size       // => 0
s.has(1)     // => false
```

Need `keys`, `values`, `entries`?

```js
import { Set } from 'qd-set/with-iter';

const s = new Set([1, 2, 2, 3])
const it = s.values();
it.next().value  // => 1
it.next().value  // => 2
it.next().value  // => 3
it.next().done   // => true
```

## CDN

```html
<script src="https://unpkg.com/qd-set"></script>
<!-- or -->
<script src="https://unpkg.com/qd-set/dist/with-iter.min.js"></script>

<script>
  var Set = qdSet.Set;
  var s = new Set([1, 2, 2, 3])
  // ...
</script>
```

## Source

```js
export const Set = global.Set && new global.Set([1]).size === 1 ? global.Set :
  function Set(a = []) {
    a = a.filter((x, i) => i === a.indexOf(x));
    a.size = a.length;
    a.has = x => a.indexOf(x) > -1;
    a.add = x => { if (!a.has(x)) { a.size++; a.push(x); } return a; };
    a.delete = x => { let t; if (t = a.has(x)) { a.size--; a.splice(a.indexOf(x), 1) } return t; };
    a.clear = () => { while (a.pop()) {} a.size = 0; };
    return a;
  };
```
