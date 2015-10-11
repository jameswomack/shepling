# Shepling

### Description

Node.js module for extracting the normalized shebang command token.

### Examples

```js
var shepling = require('shepling');

console.log(shepling("#!/usr/bin/ruby").name)     // "ruby"
console.log(shepling("#!/usr/bin/env node").name) // "node"
console.log(shepling("#!/usr/bin/ruby").has)      // true
console.log(shepling("foo bar baz").has)          // false
```

### Tests

```bash
npm test
```

## License

MIT.
