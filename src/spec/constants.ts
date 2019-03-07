// tslint:disable no-magic-numbers

import { Block, Hz, Ms, Scalar, to } from '@musical-patterns/utilities'

const PROTOTYPER_INITIAL_BASE_DURATION: Scalar<Ms> = to.Ms(to.Scalar(200))
const PROTOTYPER_INITIAL_BASE_FREQUENCY: Scalar<Hz> = to.Hz(to.Scalar(200))

const PROTOTYPER_INITIAL_BLOCK: Block = to.Block([
    5,
    4, 5,
    3, 4, 5,
    2, 3, 4, 5,
    1, 2, 3, 4, 5,
    0,
])
const PROTOTYPER_INITIAL_OTHER_BLOCK: Block = to.Block([])
const PROTOTYPER_INITIAL_OTHER_OTHER_BLOCK: Block = to.Block([])
const PROTOTYPER_INITIAL_SCALAR_STRINGS: string[] = [ '1', '6 / 5', '7 / 5', '8 / 5', '9 / 5', '2' ]

const PROTOTYPER_RHYTHM_PRESET_BLOCK: Block = to.Block([ 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0 ])

const PROTOTYPER_POLYRHYTHM_PRESET_BLOCK: Block = to.Block([
    1, 0, 0, 0,
    1, 0, 0,
    1, 0, 0, 0,
    1, 0, 0,
    1, 0, 0, 0,
    1, 0, 0,
    1, 0, 0, 0,
])
const PROTOTYPER_POLYRHYTHM_PRESET_OTHER_BLOCK: Block = to.Block([
    2, 0, 0, 0, 0,
    2, 0, 0, 0, 0,
    2, 0, 0, 0, 0,
    2, 0, 0, 0, 0,
    2, 0, 0, 0, 0,
])

export {
    PROTOTYPER_INITIAL_BASE_DURATION,
    PROTOTYPER_INITIAL_BASE_FREQUENCY,
    PROTOTYPER_INITIAL_BLOCK,
    PROTOTYPER_INITIAL_OTHER_BLOCK,
    PROTOTYPER_INITIAL_OTHER_OTHER_BLOCK,
    PROTOTYPER_INITIAL_SCALAR_STRINGS,
    PROTOTYPER_RHYTHM_PRESET_BLOCK,
    PROTOTYPER_POLYRHYTHM_PRESET_BLOCK,
    PROTOTYPER_POLYRHYTHM_PRESET_OTHER_BLOCK,
}
