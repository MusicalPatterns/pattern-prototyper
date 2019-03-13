import { Spec } from '@musical-patterns/pattern'
import { configurations } from './configurations'
import { initialSpecs } from './initials'
import { presets } from './presets'
import { PrototyperSpecs } from './types'
import { computeValidations } from './validations'

const spec: Spec<PrototyperSpecs> = {
    computeValidations,
    configurations,
    initialSpecs,
    presets,
}

export {
    spec,
}
