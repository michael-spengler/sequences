import { assertStrictEquals, fail } from "https://deno.land/std@0.86.0/testing/asserts.ts";
import { fibonacci } from "./fibonacci.ts";


Deno.test("should return the fibonacci number at position 10 assuming a zero based index", () => {

    const actualResult = fibonacci(7)
    const expectedResult = 13
    assertStrictEquals(actualResult, expectedResult)

})

Deno.test("should return the fibonacci number at position 3 assuming a zero based index", () => {

    const actualResult = fibonacci(3)
    const expectedResult = 2
    assertStrictEquals(actualResult, expectedResult)

})

Deno.test("should return the fibonacci number at position 2 assuming a zero based index", () => {

    const actualResult = fibonacci(2)
    const expectedResult = 1
    assertStrictEquals(actualResult, expectedResult)

})

Deno.test("should return the fibonacci number at position 1 assuming a zero based index", () => {

    const actualResult = fibonacci(1)
    const expectedResult = 1
    assertStrictEquals(actualResult, expectedResult)

})

Deno.test("should return the fibonacci number at position 0 assuming a zero based index", () => {

    const actualResult = fibonacci(0)
    const expectedResult = 0
    assertStrictEquals(actualResult, expectedResult)

})

Deno.test("should throw an error when n < 0", () => {

    try {
        fibonacci(-1)
        fail(`there should have been an error`)
    } catch (error) {
        // expecting this error
    }

})

Deno.test("should throw an error when n is not a whole number", () => {

    try {
        fibonacci(1.1)
        fail(`there should have been an error`)
    } catch (error) {
        // expecting this error
    }

})