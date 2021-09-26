import { assertStrictEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { compoundInterest } from "./compound-interest.ts"



Deno.test("should return compound interest for a capital of 100 for 1 period and 1 percent per period", () => {

    const startCapital = 100
    const numberOfPeriods = 1
    const percentPerPeriod = 1

    const actualResult = compoundInterest(startCapital, numberOfPeriods, percentPerPeriod)

    const expectedResult = 101

    assertStrictEquals(actualResult, expectedResult)

})

Deno.test("should return compound interest for a capital of 100 for 1 period and 10 percent per period", () => {

    const startCapital = 100
    const numberOfPeriods = 1
    const percentPerPeriod = 10

    const actualResult = compoundInterest(startCapital, numberOfPeriods, percentPerPeriod)
    const expectedResult = 110.00000000000001

    assertStrictEquals(actualResult, expectedResult)

})

Deno.test("should return compound interest for a capital of 100 for 2 period and 10 percent per period", () => {

    const startCapital = 100
    const numberOfPeriods = 2
    const percentPerPeriod = 10

    const actualResult = compoundInterest(startCapital, numberOfPeriods, percentPerPeriod)
    const expectedResult = 121.00000000000001

    assertStrictEquals(actualResult, expectedResult)

})
