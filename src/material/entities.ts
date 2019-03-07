import { Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { PitchOnly } from '@musical-patterns/pattern'
import { to } from '@musical-patterns/utilities'
import { PrototyperSpec, PrototyperSpecProperty } from '../spec'
import { buildNoteSpec } from './notes'

const buildEntities: (spec: PrototyperSpec) => Entity[] =
    (spec: PrototyperSpec): Entity[] => [
        {
            noteSpecs: spec[ PrototyperSpecProperty.BLOCK ].map(
                (blockElement: number) => buildNoteSpec(to.ContourElement<PitchOnly>([ blockElement ])),
            ),
            timbreName: TimbreNameEnum.SQUARE,
        },
        {
            noteSpecs: spec[ PrototyperSpecProperty.OTHER_BLOCK ].map(
                (blockElement: number) => buildNoteSpec(to.ContourElement<PitchOnly>([ blockElement ])),
            ),
            timbreName: TimbreNameEnum.SAW,
        },
        {
            noteSpecs: spec[ PrototyperSpecProperty.OTHER_OTHER_BLOCK ].map(
                (blockElement: number) => buildNoteSpec(to.ContourElement<PitchOnly>([ blockElement ])),
            ),
            timbreName: TimbreNameEnum.TRIANGLE,
        },
    ]

export {
    buildEntities,
}
