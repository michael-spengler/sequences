
import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { getPrimeNumbersTill } from "./prime-numbers.ts"

Deno.test("should return prime numbers till x!", () => {

    const actualResult = getPrimeNumbersTill(100)

    console.log(actualResult)

    const expectedResult = [
        2, 3, 5, 7, 11, 13, 17, 19,
        23, 29, 31, 37, 41, 43, 47, 53,
        59, 61, 67, 71, 73, 79, 83, 89,
        97
    ]

    assertEquals(actualResult, expectedResult)

})
