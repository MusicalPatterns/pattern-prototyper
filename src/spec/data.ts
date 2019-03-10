import { Data } from '@musical-patterns/pattern'
import { attributes } from './attributes'
import { initial } from './initial'
import { presets } from './presets'
import { PrototyperSpec } from './types'
import { validationFunction } from './validation'

const data: Data<PrototyperSpec> = {
    attributes,
    initial,
    presets,
    validationFunction,
}

export {
    data,
}
