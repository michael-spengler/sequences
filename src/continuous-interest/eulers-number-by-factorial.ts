import { factorial } from "../factorial/factorial.ts";


export const eulersNumberByFactorialFormular = (): number => {

    let counter = 1

    let result = 1

    while (counter < 100) {
        counter++
        result = result + 1 / factorial(counter)
    }

    return result
}

console.log(eulersNumberByFactorialFormular())