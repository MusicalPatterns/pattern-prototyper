import { standardInitialSpec, StandardProperty } from '@musical-patterns/pattern'
import {
    PROTOTYPER_INITIAL_BASE_DURATION,
    PROTOTYPER_INITIAL_BASE_FREQUENCY,
    PROTOTYPER_INITIAL_BLOCK,
    PROTOTYPER_INITIAL_OTHER_BLOCK,
    PROTOTYPER_INITIAL_OTHER_OTHER_BLOCK,
    PROTOTYPER_INITIAL_SCALAR_STRINGS,
} from './constants'
import { PrototyperSpec } from './types'

const initial: PrototyperSpec = {
    ...standardInitialSpec,
    [ StandardProperty.BASE_DURATION ]: PROTOTYPER_INITIAL_BASE_DURATION,
    [ StandardProperty.BASE_FREQUENCY ]: PROTOTYPER_INITIAL_BASE_FREQUENCY,
    block: PROTOTYPER_INITIAL_BLOCK,
    otherBlock: PROTOTYPER_INITIAL_OTHER_BLOCK,
    otherOtherBlock: PROTOTYPER_INITIAL_OTHER_OTHER_BLOCK,
    scalarStrings: PROTOTYPER_INITIAL_SCALAR_STRINGS,
}

export {
    initial,
}
