// https://www.youtube.com/watch?v=FGC5TdIiT9U


export function recaman(max: number) {

    let alreadyMatched = [0]
    let recamanSequence = []

    let hop = 0
    let position = 0

    let potentialNewPosition = 0

    while (hop < max) {

        hop++

        potentialNewPosition = position - hop

        if (potentialNewPosition < 0) {
            position = position + hop
        } else if (alreadyMatched.some((entry) => entry === potentialNewPosition)) {
            position = position + hop
        } else {
            position = potentialNewPosition
        }

        console.log(`hop: ${hop} - potentialNewPosition: ${potentialNewPosition} - position: ${position}`)

        recamanSequence.push(position)
        alreadyMatched.push(position)

    }

    return recamanSequence

}


