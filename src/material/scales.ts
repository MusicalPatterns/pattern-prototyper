import { Scale } from '@musical-patterns/compiler'
import { buildStandardScales } from '@musical-patterns/pattern'
import { PrototyperSpec } from '../spec'

const buildScales: (spec: PrototyperSpec) => Scale[] =
    (spec: PrototyperSpec): Scale[] =>
        buildStandardScales(spec, { pitchScalars: spec.scalars })

export {
    buildScales,
}
