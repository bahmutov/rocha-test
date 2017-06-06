const execa = require('execa')

function runRochaSpec (filename) {
  const cmd = `rocha ${filename}`
  const env = {

  }
  return execa.shell('rocha', {env})
}
