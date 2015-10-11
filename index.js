/**
* Extract normalized shebang command token.
*
*
* Examples:
*
*  shepling("#!/usr/bin/ruby") // "ruby"
*
*  shepling("#!/usr/bin/env node") // "node"
*
*  @param: {String}
*  @return {Object|null}
*/

module.exports = require('./lib/shepling');
