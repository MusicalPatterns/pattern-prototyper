import { Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { PitchOnly } from '@musical-patterns/pattern'
import { to } from '@musical-patterns/utilities'
import { PrototyperSpec } from '../spec'
import { buildNoteSpec } from './notes'

const buildEntities: (spec: PrototyperSpec) => Entity[] =
    (spec: PrototyperSpec): Entity[] => [
        {
            noteSpecs: spec.block.map(
                (blockElement: number) => buildNoteSpec(to.ContourElement<PitchOnly>([ blockElement ])),
            ),
            timbreName: TimbreNameEnum.SQUARE,
        },
    ]

export {
    buildEntities,
}
