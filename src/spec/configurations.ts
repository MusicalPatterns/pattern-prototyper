import { Configuration, InputType, RangedInputType, standardConfigurations } from '@musical-patterns/pattern'
import { PrototyperConfigurations } from './types'

const blockConfigurations: Configuration = {
    arrayedNewFieldInitialValue: 0,
    constraint: {
        integer: true,
        min: 0,
    },
    hideInput: RangedInputType.RANGE,
    inputType: InputType.RANGED,
    isArrayed: true,
}

const configurations: PrototyperConfigurations = {
    ...standardConfigurations,
    block: {
        ...blockConfigurations,
        formattedName: 'first note set',
    },
    otherBlock: {
        ...blockConfigurations,
        formattedName: 'second note set',
    },
    otherOtherBlock: {
        ...blockConfigurations,
        formattedName: 'third note set',
    },
    scalarStrings: {
        formattedName: 'scale',
        inputType: InputType.STRINGED,
        isArrayed: true,
    },
}

export {
    configurations,
}
