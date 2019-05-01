import { materializeStandardScales, Scales } from '@musical-patterns/material'
import { PrototyperSpec, PrototyperSpecs } from '../spec'
import { parseScalars } from './scalars'

const materializeScales: (specs: PrototyperSpecs) => Scales =
    (specs: PrototyperSpecs): Scales =>
        materializeStandardScales(specs, { pitchScalars: parseScalars(specs[ PrototyperSpec.SCALAR_STRINGS ]) })

export {
    materializeScales,
}
