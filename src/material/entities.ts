import { Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { PitchOnly } from '@musical-patterns/pattern'
import { to } from '@musical-patterns/utilities'
import { PrototyperProperty, PrototyperSpec } from '../spec'
import { buildNoteSpec } from './notes'

const buildEntities: (spec: PrototyperSpec) => Entity[] =
    (spec: PrototyperSpec): Entity[] => [
        {
            noteSpecs: spec[ PrototyperProperty.BLOCK ].map(
                (blockElement: number) => buildNoteSpec(to.ContourElement<PitchOnly>([ blockElement ])),
            ),
            timbreName: TimbreNameEnum.SQUARE,
        },
        {
            noteSpecs: spec[ PrototyperProperty.OTHER_BLOCK ].map(
                (blockElement: number) => buildNoteSpec(to.ContourElement<PitchOnly>([ blockElement ])),
            ),
            timbreName: TimbreNameEnum.SAW,
        },
        {
            noteSpecs: spec[ PrototyperProperty.OTHER_OTHER_BLOCK ].map(
                (blockElement: number) => buildNoteSpec(to.ContourElement<PitchOnly>([ blockElement ])),
            ),
            timbreName: TimbreNameEnum.TRIANGLE,
        },
    ]

export {
    buildEntities,
}
