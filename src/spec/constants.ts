// tslint:disable no-magic-numbers

import { Block, Hz, Ms, Scalar, to } from '@musical-patterns/utilities'

const PROTOTYPER_INITIAL_BASE_DURATION: Scalar<Ms> = to.Scalar<Ms>(200)
const PROTOTYPER_INITIAL_BASE_FREQUENCY: Scalar<Hz> = to.Scalar<Hz>(200)

const PROTOTYPER_INITIAL_BLOCK_ONE: Block = to.Block([
    4,
    3, 4,
    2, 3, 4,
    1, 2, 3, 4,
    0, 1, 2, 3, 4,
    -1,
])
const PROTOTYPER_INITIAL_BLOCK_OTHER: Block = to.Block([])
const PROTOTYPER_INITIAL_SCALAR_STRINGS: string[] = [ '1', '6 / 5', '7 / 5', '8 / 5', '9 / 5', '2' ]

const RHYTHM_PRESET_BLOCK: Block = to.Block([ 0, -1, -1, 0, -1, -1, 0, 0, -1, -1, -1 ])

const POLYRHYTHM_PRESET_BLOCK_ONE: Block = to.Block([
    0, -1, -1, -1,
    0, -1, -1,
    0, -1, -1, -1,
    0, -1, -1,
    0, -1, -1, -1,
    0, -1, -1,
    0, -1, -1, -1,
])
const POLYRHYTHM_PRESET_BLOCK_TWO: Block = to.Block([
    1, -1, -1, -1, -1,
    1, -1, -1, -1, -1,
    1, -1, -1, -1, -1,
    1, -1, -1, -1, -1,
    1, -1, -1, -1, -1,
])

const CHORD_PRESET_BLOCK_ONE: Block = to.Block([ 0 ])
const CHORD_PRESET_BLOCK_TWO: Block = to.Block([ 1 ])
const CHORD_PRESET_BLOCK_THREE: Block = to.Block([ 2 ])
const CHORD_PRESET_BLOCK_FOUR: Block = to.Block([ 3 ])
const CHORD_PRESET_BLOCK_FIVE: Block = to.Block([ 4 ])
const CHORD_PRESET_BLOCK_SIX: Block = to.Block([ 5 ])
const CHORD_PRESET_SCALAR_STRINGS: string[] = [ '4', '5', '6', '28/5', '7', '42/5' ]
const CHORD_PRESET_BASE_DURATION: Scalar<Ms> = to.Scalar<Ms>(1000)

export {
    PROTOTYPER_INITIAL_BASE_DURATION,
    PROTOTYPER_INITIAL_BASE_FREQUENCY,
    PROTOTYPER_INITIAL_BLOCK_ONE,
    PROTOTYPER_INITIAL_BLOCK_OTHER,
    PROTOTYPER_INITIAL_SCALAR_STRINGS,
    RHYTHM_PRESET_BLOCK,
    POLYRHYTHM_PRESET_BLOCK_ONE,
    POLYRHYTHM_PRESET_BLOCK_TWO,
    CHORD_PRESET_BLOCK_FIVE,
    CHORD_PRESET_BLOCK_FOUR,
    CHORD_PRESET_BLOCK_ONE,
    CHORD_PRESET_BLOCK_SIX,
    CHORD_PRESET_BLOCK_THREE,
    CHORD_PRESET_BLOCK_TWO,
    CHORD_PRESET_SCALAR_STRINGS,
    CHORD_PRESET_BASE_DURATION,
}
