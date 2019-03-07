import {
    RangedInputType,
    SpecPropertyAttributes,
    SpecPropertyType,
    standardSpecAttributes,
} from '@musical-patterns/pattern'
import { PrototyperSpecAttributes } from './types'

const blockAttributes: SpecPropertyAttributes = {
    constraint: {
        integer: true,
        min: 0,
    },
    hideInput: RangedInputType.RANGE,
    isArrayed: true,
    specPropertyType: SpecPropertyType.RANGED,
}

const attributes: PrototyperSpecAttributes = {
    ...standardSpecAttributes,
    block: {
        ...blockAttributes,
        formattedName: 'first note set',
    },
    otherBlock: {
        ...blockAttributes,
        formattedName: 'second note set',
    },
    otherOtherBlock: {
        ...blockAttributes,
        formattedName: 'third note set',
    },
    scalarStrings: {
        formattedName: 'scale',
        isArrayed: true,
        specPropertyType: SpecPropertyType.STRINGED,
    },
}

export {
    attributes,
}
