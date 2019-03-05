import { Preset } from '@musical-patterns/pattern'
import { DictionaryOf, to } from '@musical-patterns/utilities'
import { initial } from './initial'
import { PrototyperSpec } from './types'

const presets: DictionaryOf<Preset<PrototyperSpec>> = {
    '5054534523451234': {
        order: 0,
        spec: initial,
    },
    'x--x--xx---': {
        order: 1,
        spec: {
            ...initial,
            block: to.Block([ 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0 ]),
            scalarStrings: [ '1' ],
        },
    },
}

export {
    presets,
}
