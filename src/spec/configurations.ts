import { Configuration, InputType, RangedInputType, standardConfigurations } from '@musical-patterns/spec'
import { PrototyperConfigurations, PrototyperSpec } from './types'

const blockConfigurations: Configuration = {
    arrayedNewFieldInitialValue: -1,
    constraint: {
        integer: true,
        min: -1,
    },
    hideInput: RangedInputType.RANGE,
    inputType: InputType.RANGED,
    isArrayed: true,
}

const configurations: PrototyperConfigurations = {
    ...standardConfigurations,
    [ PrototyperSpec.BLOCK_1 ]: {
        ...blockConfigurations,
        formattedName: 'note set one',
    },
    [ PrototyperSpec.BLOCK_2 ]: {
        ...blockConfigurations,
        formattedName: 'note set two',
    },
    [ PrototyperSpec.BLOCK_3 ]: {
        ...blockConfigurations,
        formattedName: 'note set three',
    },
    [ PrototyperSpec.BLOCK_4 ]: {
        ...blockConfigurations,
        formattedName: 'note set four',
    },
    [ PrototyperSpec.BLOCK_5 ]: {
        ...blockConfigurations,
        formattedName: 'note set five',
    },
    [ PrototyperSpec.BLOCK_6 ]: {
        ...blockConfigurations,
        formattedName: 'note set six',
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
