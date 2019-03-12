import { Spec } from '@musical-patterns/pattern'
import { configurations } from './configurations'
import { initial } from './initial'
import { presets } from './presets'
import { PrototyperSpecs } from './types'
import { computeValidations } from './validation'

const spec: Spec<PrototyperSpecs> = {
    computeValidations,
    configurations,
    initial,
    presets,
}

export {
    spec,
}
