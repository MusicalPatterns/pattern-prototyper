// tslint:disable no-magic-numbers

import { Block, Hz, Ms, Scalar, to } from '@musical-patterns/utilities'

const PROTOTYPER_INITIAL_BASE_DURATION: Scalar<Ms> = to.Ms(to.Scalar(200))
const PROTOTYPER_INITIAL_BASE_FREQUENCY: Scalar<Hz> = to.Hz(to.Scalar(200))
const PROTOTYPER_INITIAL_BLOCK: Block = to.Block([ 5, 0, 5, 4, 5, 3, 4, 5, 2, 3, 4, 5, 1, 2, 3, 4 ])
const PROTOTYPER_INITIAL_SCALARS: Scalar[] = [ 1, 6 / 5, 7 / 5, 8 / 5, 9 / 5, 2 ].map(to.Scalar)

export {
    PROTOTYPER_INITIAL_BASE_DURATION,
    PROTOTYPER_INITIAL_BASE_FREQUENCY,
    PROTOTYPER_INITIAL_BLOCK,
    PROTOTYPER_INITIAL_SCALARS,
}
