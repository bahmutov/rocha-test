const execa = require('execa')
const {tap, prop} = require('ramda')
const log = require('debug')('test')

function logOutput (output) {
  log('test output')
  log(output)
}

function runRochaSpec (filename) {
  const cmd = `rocha ${filename}`
  const env = {
    DEBUG: 'cypress:e2e'
  }
  return execa.shell(cmd, {env})
    .then(prop('stdout'))
    .then(tap(logOutput))
}

module.exports = {
  runRochaSpec
}
