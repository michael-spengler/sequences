
export function getPrimeNumbersTill(x: number): number[] {

    let candidate = 0
    let primeNumbers: number[] = []

    while (candidate < x) {
        candidate++

        if (isPrime(candidate)) {
            primeNumbers.push(candidate)
        }

    }

    return primeNumbers

}

function isPrime(candidate: number): boolean {

    if (candidate <= 1) return false
    if (candidate === 2) return true

    for (let i = 2; i < candidate; i++) {

        if (candidate % i === 0) {
            return false
        }

    }

    return true

}

