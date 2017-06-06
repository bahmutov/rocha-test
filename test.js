import test from 'ava'
import {range, replace, test as testRegex, compose, tap} from 'ramda'
import {runRochaSpec} from './utils'
import debug from 'debug'

const log = debug('test')

const ten = range(1, 10)

// returns something like [5, 1, 8, ...]
const leaveTestNames = (output) => {
  return output.split('\n')
    .filter(testRegex(/d1-/))
    .map(replace(/^\s+✓ d1-/, ''))
    .map(parseFloat)
}

function logNames (testNames) {
  log('test names')
  log(testNames)
}

const cleanup = compose(tap(logNames), leaveTestNames)

test('just tests', async t => {
  const output = await runRochaSpec('./specs/only-tests-spec.js')
  const testNames = cleanup(output)
  t.notDeepEqual(testNames, ten, 'should have shuffled tests')
})

test('tests in single describe', async t => {
  const output = await runRochaSpec('./specs/one-describe-spec.js')
  const testNames = cleanup(output)
  t.notDeepEqual(testNames, ten, 'should have shuffled tests')
})

test('tests in nested describe', async t => {
  const output = await runRochaSpec('./specs/nested-describe-spec.js')
  const testNames = cleanup(output)
  t.notDeepEqual(testNames, ten, 'should have shuffled tests')
})
