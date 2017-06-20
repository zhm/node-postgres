'use strict'
const co = require('co')

const helper = require('./test-helper')

const pg = helper
const suite = new helper.Suite()

suite.test('multiple select statements return multiple results', co.wrap(function *  () {
  const client = new pg.Client()
  yield client.connect()
  const res = yield client.query(`SELECT 'one' as one, 'two' as two; SELECT 'three' as three, 'four' as four;`)
  assert.equal(res.length, 2)
  yield client.end()
}))
