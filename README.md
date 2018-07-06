# NodeJS Benchmark Async

> [Native promises](https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original), [Co generators](https://github.com/tj/co), [Native Async/Await](https://nodejs.org/en/blog/release/v8.0.0/) and [Bluebird promises](http://bluebirdjs.com/docs/getting-started.html) comparative [benchmark](https://benchmarkjs.com/). 

__Note:__ These are __not__ _"[Non plus ultra](https://en.wikipedia.org/wiki/Plus_ultra)"_ benchmarks but can give us an idea about the Node/V8 performance improvements on time. So, feel free to contribute.

## Usage

```sh
yarn start
```

## Benchmarks

### 1. Node v8

- __Node:__ v8.11.3
- __V8:__ v6.2.414.54

| suite | ops/sec | rme
--- | --- | ---
Co generators | 194,937 | ±0.94% (82 runs sampled)
Native async/await | 516,104 | ±0.60% (84 runs sampled)
Native promises | 1,364,965 | ±0.41% (85 runs sampled)
Bluebird promises | 1,852,194 | ±2.52%  (81 runs sampled)
-------------

⚡️ Fastest is __*Bluebird Promises*__

_Benchmark done in 24.47s._

### 2. Node v10

- __Node:__ v10.6.0
- __V8:__ v6.7.288.46-node.13

| suite | ops/sec | rme
--- | --- | ---
Co generators | 277,943 ops/sec | ±0.73% (82 runs sampled)
Native async/await | 656,739 ops/sec | ±0.58% (84 runs sampled)
Native promises | 3,661,503 ops/sec | ±0.29% (85 runs sampled)
Bluebird promises | 2,561,876 ops/sec | ±0.41% (81 runs sampled)
-------------

⚡️ Fastest is __*Native Promises*__

_Benchmark done in 24.23s._

## References
- [Asynchronous performance improvements in V8 v6.6](https://v8project.blogspot.com/2018/03/v8-release-66.html)
- [You're Missing the Point of Promises](https://gist.github.com/domenic/3889970)
- [BenchmarkJS](https://benchmarkjs.com/)

## License

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [José Luis Quintana](http://git.io/joseluisq) has waived all copyright and related or neighboring rights to this work.
