import { RangedInputType, SpecPropertyType, standardSpecAttributes } from '@musical-patterns/pattern'
import { PrototyperSpecAttributes } from './types'

const attributes: PrototyperSpecAttributes = {
    ...standardSpecAttributes,
    block: {
        constraint: {
            integer: true,
            min: 0,
        },
        hideInput: RangedInputType.RANGE,
        isArrayed: true,
        specPropertyType: SpecPropertyType.RANGED,
    },
    scalarStrings: {
        isArrayed: true,
        specPropertyType: SpecPropertyType.STRINGED,
    },
}

export {
    attributes,
}
