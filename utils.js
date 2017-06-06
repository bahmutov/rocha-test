const execa = require('execa')

function runRochaSpec (filename) {
  const cmd = `rocha ${filename}`
  const env = {
    DEBUG: 'cypress:e2e'
  }
  return execa.shell(cmd, {env})
    .then(r => r.stdout)
}

module.exports = {
  runRochaSpec
}
