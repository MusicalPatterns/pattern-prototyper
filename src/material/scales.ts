import { Scale } from '@musical-patterns/compiler'
import { materializeStandardScales } from '@musical-patterns/pattern'
import { PrototyperProperty, PrototyperSpec } from '../spec'
import { parseScalars } from './scalars'

const materializeScales: (spec: PrototyperSpec) => Scale[] =
    (spec: PrototyperSpec): Scale[] =>
        materializeStandardScales(spec, { pitchScalars: parseScalars(spec[ PrototyperProperty.SCALAR_STRINGS ]) })

export {
    materializeScales,
}
