import {
    RangedInputType,
    SpecData,
    SpecPropertyType,
    standardInitialSpec,
    standardSpecAttributes,
    StandardSpecProperties,
} from '@musical-patterns/pattern'
import {
    PROTOTYPER_INITIAL_BASE_DURATION,
    PROTOTYPER_INITIAL_BASE_FREQUENCY,
    PROTOTYPER_INITIAL_BLOCK,
    PROTOTYPER_INITIAL_SCALARS,
} from './constants'
import { PrototyperSpec, PrototyperSpecAttributes } from './types'
import { validationFunction } from './validation'

const initial: PrototyperSpec = {
    ...standardInitialSpec,
    [ StandardSpecProperties.BASE_DURATION ]: PROTOTYPER_INITIAL_BASE_DURATION,
    [ StandardSpecProperties.BASE_FREQUENCY ]: PROTOTYPER_INITIAL_BASE_FREQUENCY,
    block: PROTOTYPER_INITIAL_BLOCK,
    scalars: PROTOTYPER_INITIAL_SCALARS,
}

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
    scalars: {
        constraint: {
            min: 0,
        },
        hideInput: RangedInputType.RANGE,
        isArrayed: true,
        specPropertyType: SpecPropertyType.RANGED,
    },
}

const specData: SpecData<PrototyperSpec> = {
    attributes,
    initial,
    validationFunction,
}

export {
    specData,
}
