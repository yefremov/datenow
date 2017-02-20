var test = require('tape');
var datenow = require('.');

test('datenow()', function (t) {
  t.ok(typeof datenow === 'function', 'should be a function');
  t.ok(typeof datenow() === 'number', 'should return a number');
  t.ok(datenow() >= 0, 'should return a positive value');
  t.end();
});
