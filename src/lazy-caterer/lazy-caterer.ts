
// returns the maximum number of pieces formed when slicing a cake with n cuts
export const lazyCaterer = (n: number): number => {

    return ((Math.pow(n, 2) + (n + 2)) / 2)

}