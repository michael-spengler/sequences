// to explain time complexity, space complexity and base cases wrt. recursive functions
// details see: https://www.youtube.com/watch?v=oBt53YbR9Kk

// without memoization
export const fibonacciWithoutMemoization = (n: number): number => {
    if (n % 1 !== 0 || n < 0) throw new Error(`The Fibonacci sequence starts at 0 - expecting whole positive numbers`)
    if (n === 0) return 0
    if (n === 1) return 1
    return (fibonacciWithoutMemoization(n - 1) + fibonacciWithoutMemoization(n - 2))
}

// with memoization
export const fibonacci = (n: number, memo: any = {}): number => {
    if (n % 1 !== 0 || n < 0) throw new Error(`The Fibonacci sequence starts at 0 - expecting whole positive numbers`)
    if (n === 0) return 0
    if (n === 1) return 1
    if (n in memo) return memo[n]
    memo[n] = (fibonacci(n - 1, memo) + fibonacci(n - 2, memo))
    return memo[n]
}