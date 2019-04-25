import { standardInitialSpecs, StandardSpec } from '@musical-patterns/spec'
import {
    PROTOTYPER_INITIAL_BASIS_DURATION,
    PROTOTYPER_INITIAL_BASIS_FREQUENCY,
    PROTOTYPER_INITIAL_BLOCK_ONE,
    PROTOTYPER_INITIAL_BLOCK_OTHER,
    PROTOTYPER_INITIAL_SCALAR_STRINGS,
} from './constants'
import { PrototyperSpec, PrototyperSpecs } from './types'

const initialSpecs: PrototyperSpecs = {
    ...standardInitialSpecs,
    [ StandardSpec.BASIS_DURATION ]: PROTOTYPER_INITIAL_BASIS_DURATION,
    [ StandardSpec.BASIS_FREQUENCY ]: PROTOTYPER_INITIAL_BASIS_FREQUENCY,
    [ PrototyperSpec.BLOCK_1 ]: PROTOTYPER_INITIAL_BLOCK_ONE,
    [ PrototyperSpec.BLOCK_2 ]: PROTOTYPER_INITIAL_BLOCK_OTHER,
    [ PrototyperSpec.BLOCK_3 ]: PROTOTYPER_INITIAL_BLOCK_OTHER,
    [ PrototyperSpec.BLOCK_4 ]: PROTOTYPER_INITIAL_BLOCK_OTHER,
    [ PrototyperSpec.BLOCK_5 ]: PROTOTYPER_INITIAL_BLOCK_OTHER,
    [ PrototyperSpec.BLOCK_6 ]: PROTOTYPER_INITIAL_BLOCK_OTHER,
    scalarStrings: PROTOTYPER_INITIAL_SCALAR_STRINGS,
}

export {
    initialSpecs,
}
