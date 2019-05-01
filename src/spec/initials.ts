import { standardInitialSpecs, StandardSpec } from '@musical-patterns/spec'
import {
    PROTOTYPER_INITIAL_BLOCK_ONE,
    PROTOTYPER_INITIAL_BLOCK_OTHER,
    PROTOTYPER_INITIAL_HZ_PHYSICALIZATION,
    PROTOTYPER_INITIAL_MS_PHYSICALIZATION,
    PROTOTYPER_INITIAL_SCALAR_STRINGS,
} from './constants'
import { PrototyperSpec, PrototyperSpecs } from './types'

const initialSpecs: PrototyperSpecs = {
    ...standardInitialSpecs,
    [ StandardSpec.MS_PHYSICALIZATION ]: PROTOTYPER_INITIAL_MS_PHYSICALIZATION,
    [ StandardSpec.HZ_PHYSICALIZATION ]: PROTOTYPER_INITIAL_HZ_PHYSICALIZATION,
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
