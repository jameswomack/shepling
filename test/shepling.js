var tap      = require('tap'),
    shepling = require('../');

var test     = tap.test;

var data = {
  '#!/usr/bin/ruby'          : 'ruby',
  '#!/usr/bin/env node'      : 'node',
  '#!/usr/bin/env python -c' : 'python',
  '#! /bin/sh'               : 'sh',
  '#!/usr/awk -f'            : 'awk',
  '#!/bin/sed -f'            : 'sed',
  '#!/bin/sed -f\n\nsudo foo': 'sed',
  'Foo bar baz'              : null
};

test('shepling', function (assert) {
  for (var prop in data) {
    if (data.hasOwnProperty(prop)) {
      var shep = shepling(prop);

      if (shep) {
        assert.equal(shep.name, data[prop]);
        assert.equal(shep.has, true);
      } else {
        assert.equal(shep, data[prop]);
      }
    }
  }

  assert.notEqual(shepling('#!/usr/bin/php').name, 'php2');
  assert.end();
});
