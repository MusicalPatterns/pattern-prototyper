import { Scale } from '@musical-patterns/compiler'
import { materializeStandardScales } from '@musical-patterns/pattern'
import { PrototyperSpec, PrototyperSpecs } from '../spec'
import { parseScalars } from './scalars'

const materializeScales: (specs: PrototyperSpecs) => Scale[] =
    (specs: PrototyperSpecs): Scale[] =>
        materializeStandardScales(specs, { pitchScalars: parseScalars(specs[ PrototyperSpec.SCALAR_STRINGS ]) })

export {
    materializeScales,
}
