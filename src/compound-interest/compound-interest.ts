

export const compoundInterest = (k: number, n: number, p: number): number => {
    return (k * Math.pow((1 + (p / 100)), n))
}