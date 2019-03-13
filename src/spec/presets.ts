import { Preset } from '@musical-patterns/pattern'
import { ObjectOf } from '@musical-patterns/utilities'
import {
    PROTOTYPER_POLYRHYTHM_PRESET_BLOCK,
    PROTOTYPER_POLYRHYTHM_PRESET_OTHER_BLOCK,
    PROTOTYPER_RHYTHM_PRESET_BLOCK,
} from './constants'
import { initialSpecs } from './initials'
import { PrototyperSpecs } from './types'

const presets: ObjectOf<Preset<PrototyperSpecs>> = {
    melodic: {
        description: '5453452345123450',
        order: 0,
        specs: initialSpecs,
    },
    polyrhythm: {
        description: '4,3,4,3,4,3,4:5,5,5,5,5',
        order: 2,
        specs: {
            ...initialSpecs,
            block: PROTOTYPER_POLYRHYTHM_PRESET_BLOCK,
            otherBlock: PROTOTYPER_POLYRHYTHM_PRESET_OTHER_BLOCK,
        },
    },
    rhythm: {
        description: 'x--x--xx---',
        order: 1,
        specs: {
            ...initialSpecs,
            block: PROTOTYPER_RHYTHM_PRESET_BLOCK,
            scalarStrings: [ '1' ],
        },
    },
}

export {
    presets,
}
