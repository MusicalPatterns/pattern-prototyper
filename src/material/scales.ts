import { Scale } from '@musical-patterns/compiler'
import { buildStandardScales } from '@musical-patterns/pattern'
import { PrototyperSpec } from '../spec'
import { parseScalars } from './scalars'

const buildScales: (spec: PrototyperSpec) => Scale[] =
    (spec: PrototyperSpec): Scale[] =>
        buildStandardScales(spec, { pitchScalars: parseScalars(spec.scalarStrings) })

export {
    buildScales,
}
