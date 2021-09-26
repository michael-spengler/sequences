# Financial Mathematics

Please check the [unit tests](https://github.com/michael-spengler/financial-mathematics/blob/main/execute-single-unit-tests.sh) to see more usage examples.

## Usage Examples

### Compound Interest

```ts 

import { compoundInterest } from "https://deno.land/x/financial-mathematics/src/compound-interest.ts"

const startCapital = 100
const numberOfPeriods = 1
const percentPerPeriod = 1

const actualResult = compoundInterest(startCapital, numberOfPeriods, percentPerPeriod)

console.log(actualOutput)

```


### Fibonacci

```ts 

import { fibonacci } from "https://deno.land/x/financial-mathematics/src/fibonacci.ts"

const fibonacciAt20 = fibonacci(20) 
console.log(fibonacciAt20)


```