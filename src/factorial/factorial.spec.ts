import { assertStrictEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { factorial } from "./factorial.ts"

Deno.test("should return 3!", () => {

    const actualResult = factorial(10)

    const expectedResult = 3628800

    assertStrictEquals(actualResult, expectedResult)

})

