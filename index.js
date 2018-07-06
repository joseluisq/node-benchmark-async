const Benchmark = require('benchmark')
const co = require('co')
const bluebird = require('bluebird')

const suite = new Benchmark.Suite()

suite
  .add('co generators', {
    defer: true,
    fn: deferred => {
      co(function * () {
        yield Promise.resolve(1)
        yield Promise.resolve(2)
        deferred.resolve()
      })
    }
  })
  .add('async/await', {
    defer: true,
    fn: deferred => {
      (async () => {
        await Promise.resolve(1)
        await Promise.resolve(2)
        deferred.resolve()
      })()
    }
  })
  .add('native promises', {
    defer: true,
    fn: deferred => {
      Promise.resolve(1)
        .then(() => Promise.resolve(2))
        .then(() => deferred.resolve())
    }
  })
  .add('bluebird promises', {
    defer: true,
    fn: deferred => {
      bluebird.resolve(1)
          .then(() => bluebird.resolve(2))
          .then(() => deferred.resolve())
    }
  })
  .on('cycle', event => {
    const r = event.target

    dd(r)
    dd(String(r))
  })
  .on('complete', () => {
    dd('Fastest is ' + suite.filter('fastest').map('name'))
  })
  .run({
    'async': false
  })

function dd (obj) {
  console.dir(obj, {colors: true})
}
