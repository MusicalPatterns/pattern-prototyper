import { Preset, StandardSpec } from '@musical-patterns/spec'
import { ObjectOf } from '@musical-patterns/utilities'
import {
    CHORD_PRESET_BASE_DURATION,
    CHORD_PRESET_BLOCK_FIVE,
    CHORD_PRESET_BLOCK_FOUR,
    CHORD_PRESET_BLOCK_ONE,
    CHORD_PRESET_BLOCK_SIX,
    CHORD_PRESET_BLOCK_THREE,
    CHORD_PRESET_BLOCK_TWO,
    CHORD_PRESET_SCALAR_STRINGS,
    POLYRHYTHM_PRESET_BLOCK_ONE,
    POLYRHYTHM_PRESET_BLOCK_TWO,
    RHYTHM_PRESET_BLOCK,
} from './constants'
import { initialSpecs } from './initials'
import { PrototyperSpec, PrototyperSpecs } from './types'

const presets: ObjectOf<Preset<PrototyperSpecs>> = {
    chord: {
        description: '[4,5,28/5,6,7,42/5]',
        order: 3,
        specs: {
            ...initialSpecs,
            [ PrototyperSpec.BLOCK_1 ]: CHORD_PRESET_BLOCK_ONE,
            [ PrototyperSpec.BLOCK_2 ]: CHORD_PRESET_BLOCK_TWO,
            [ PrototyperSpec.BLOCK_3 ]: CHORD_PRESET_BLOCK_THREE,
            [ PrototyperSpec.BLOCK_4 ]: CHORD_PRESET_BLOCK_FOUR,
            [ PrototyperSpec.BLOCK_5 ]: CHORD_PRESET_BLOCK_FIVE,
            [ PrototyperSpec.BLOCK_6 ]: CHORD_PRESET_BLOCK_SIX,
            [ PrototyperSpec.SCALAR_STRINGS ]: CHORD_PRESET_SCALAR_STRINGS,
            [ StandardSpec.BASE_DURATION ]: CHORD_PRESET_BASE_DURATION,
        },
    },
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
            [ PrototyperSpec.BLOCK_1 ]: POLYRHYTHM_PRESET_BLOCK_ONE,
            [ PrototyperSpec.BLOCK_2 ]: POLYRHYTHM_PRESET_BLOCK_TWO,
        },
    },
    rhythm: {
        description: 'x--x--xx---',
        order: 1,
        specs: {
            ...initialSpecs,
            [ PrototyperSpec.BLOCK_1 ]: RHYTHM_PRESET_BLOCK,
            [ PrototyperSpec.SCALAR_STRINGS ]: [ '1' ],
        },
    },
}

export {
    presets,
}
