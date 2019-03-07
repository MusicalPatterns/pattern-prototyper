import { Preset } from '@musical-patterns/pattern'
import { DictionaryOf } from '@musical-patterns/utilities'
import {
    PROTOTYPER_POLYRHYTHM_PRESET_BLOCK,
    PROTOTYPER_POLYRHYTHM_PRESET_OTHER_BLOCK,
    PROTOTYPER_RHYTHM_PRESET_BLOCK,
} from './constants'
import { initial } from './initial'
import { PrototyperSpec } from './types'

const presets: DictionaryOf<Preset<PrototyperSpec>> = {
    melodic: {
        description: '5453452345123450',
        order: 0,
        spec: initial,
    },
    polyrhythm: {
        description: '4,3,4,3,4,3,4:5,5,5,5,5',
        order: 2,
        spec: {
            ...initial,
            block: PROTOTYPER_POLYRHYTHM_PRESET_BLOCK,
            otherBlock: PROTOTYPER_POLYRHYTHM_PRESET_OTHER_BLOCK,
        },
    },
    rhythm: {
        description: 'x--x--xx---',
        order: 1,
        spec: {
            ...initial,
            block: PROTOTYPER_RHYTHM_PRESET_BLOCK,
            scalarStrings: [ '1' ],
        },
    },
}

export {
    presets,
}
