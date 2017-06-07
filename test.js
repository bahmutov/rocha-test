import test from 'ava'
import { range, replace, test as testRegex, compose, tap } from 'ramda'
import { runRochaSpec } from './utils'
import debug from 'debug'

const log = debug('test')

const ten = range(1, 10)

// returns something like [5, 1, 8, ...]
const leaveTestNames = output => {
  return output
    .split('\n')
    .filter(testRegex(/d1-/))
    .map(replace(/^\s+✓ d1-/, ''))
    .map(parseFloat)
}

function logNames (testNames) {
  log('test names')
  log(testNames)
}

const cleanup = compose(tap(logNames), leaveTestNames)

const execute = specFilename => async t => {
  const output = await runRochaSpec(specFilename)
  const testNames = cleanup(output)
  t.notDeepEqual(testNames, ten)
}

test('just tests', execute('./specs/only-tests-spec'))

test('tests in single describe', execute('./specs/one-describe-spec'))

test('tests in nested describe', execute('./specs/nested-describe-spec'))

test('tests in multiple describes', execute('./specs/multiple-describes-spec'))
