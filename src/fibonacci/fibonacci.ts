

export const fibonacci = (n: number): number => {
    if (n % 1 !== 0 || n < 0) throw new Error(`The Fibonacci sequence starts at 0 - expecting whole positive numbers`)
    if (n === 0) return 0
    if (n === 1) return 1
    return (fibonacci(n - 1) + fibonacci(n - 2))
}