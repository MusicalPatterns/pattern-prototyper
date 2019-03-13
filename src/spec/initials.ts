import { standardInitialSpecs, StandardSpec } from '@musical-patterns/pattern'
import {
    PROTOTYPER_INITIAL_BASE_DURATION,
    PROTOTYPER_INITIAL_BASE_FREQUENCY,
    PROTOTYPER_INITIAL_BLOCK,
    PROTOTYPER_INITIAL_OTHER_BLOCK,
    PROTOTYPER_INITIAL_OTHER_OTHER_BLOCK,
    PROTOTYPER_INITIAL_SCALAR_STRINGS,
} from './constants'
import { PrototyperSpecs } from './types'

const initialSpecs: PrototyperSpecs = {
    ...standardInitialSpecs,
    [ StandardSpec.BASE_DURATION ]: PROTOTYPER_INITIAL_BASE_DURATION,
    [ StandardSpec.BASE_FREQUENCY ]: PROTOTYPER_INITIAL_BASE_FREQUENCY,
    block: PROTOTYPER_INITIAL_BLOCK,
    otherBlock: PROTOTYPER_INITIAL_OTHER_BLOCK,
    otherOtherBlock: PROTOTYPER_INITIAL_OTHER_OTHER_BLOCK,
    scalarStrings: PROTOTYPER_INITIAL_SCALAR_STRINGS,
}

export {
    initialSpecs,
}
