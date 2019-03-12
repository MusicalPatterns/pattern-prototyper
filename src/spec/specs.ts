import { Spec } from '@musical-patterns/pattern'
import { configurations } from './configurations'
import { initial } from './initials'
import { presets } from './presets'
import { PrototyperSpecs } from './types'
import { computeValidations } from './validations'

const spec: Spec<PrototyperSpecs> = {
    computeValidations,
    configurations,
    initial,
    presets,
}

export {
    spec,
}
