import { assertStrictEquals, fail } from "https://deno.land/std@0.86.0/testing/asserts.ts";
import { lazyCaterer } from "./lazy-caterer.ts";


Deno.test("should return the maximum number of pieces formed when slicing a cake with n cuts", () => {

    const actualResult = lazyCaterer(4)
    const expectedResult = 11
    assertStrictEquals(actualResult, expectedResult)

})
