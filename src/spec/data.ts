import { SpecData } from '@musical-patterns/pattern'
import { attributes } from './attributes'
import { initial } from './initial'
import { presets } from './presets'
import { PrototyperSpec } from './types'
import { validationFunction } from './validation'

const specData: SpecData<PrototyperSpec> = {
    attributes,
    initial,
    presets,
    validationFunction,
}

export {
    specData,
}
