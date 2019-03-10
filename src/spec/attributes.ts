import { PropertyAttributes, PropertyType, RangedInputType, standardAttributes } from '@musical-patterns/pattern'
import { PrototyperAttributes } from './types'

const blockAttributes: PropertyAttributes = {
    constraint: {
        integer: true,
        min: 0,
    },
    hideInput: RangedInputType.RANGE,
    isArrayed: true,
    propertyType: PropertyType.RANGED,
}

const attributes: PrototyperAttributes = {
    ...standardAttributes,
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
        propertyType: PropertyType.STRINGED,
    },
}

export {
    attributes,
}
