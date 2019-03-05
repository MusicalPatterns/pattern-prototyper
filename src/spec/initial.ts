import { standardInitialSpec, StandardSpecProperties } from '@musical-patterns/pattern'
import {
    PROTOTYPER_INITIAL_BASE_DURATION,
    PROTOTYPER_INITIAL_BASE_FREQUENCY,
    PROTOTYPER_INITIAL_BLOCK, PROTOTYPER_INITIAL_SCALAR_STRINGS,
} from './constants'
import { PrototyperSpec } from './types'

const initial: PrototyperSpec = {
    ...standardInitialSpec,
    [ StandardSpecProperties.BASE_DURATION ]: PROTOTYPER_INITIAL_BASE_DURATION,
    [ StandardSpecProperties.BASE_FREQUENCY ]: PROTOTYPER_INITIAL_BASE_FREQUENCY,
    block: PROTOTYPER_INITIAL_BLOCK,
    scalarStrings: PROTOTYPER_INITIAL_SCALAR_STRINGS,
}

export {
    initial,
}
