import { Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { PitchOnly } from '@musical-patterns/pattern'
import { to } from '@musical-patterns/utilities'
import { PrototyperProperty, PrototyperSpec } from '../spec'
import { buildNote } from './features'

const materializeEntities: (spec: PrototyperSpec) => Entity[] =
    (spec: PrototyperSpec): Entity[] => [
        {
            notes: spec[ PrototyperProperty.BLOCK ].map(
                (blockElement: number) => buildNote(to.ContourElement<PitchOnly>([ blockElement ])),
            ),
            timbreName: TimbreNameEnum.SQUARE,
        },
        {
            notes: spec[ PrototyperProperty.OTHER_BLOCK ].map(
                (blockElement: number) => buildNote(to.ContourElement<PitchOnly>([ blockElement ])),
            ),
            timbreName: TimbreNameEnum.SAW,
        },
        {
            notes: spec[ PrototyperProperty.OTHER_OTHER_BLOCK ].map(
                (blockElement: number) => buildNote(to.ContourElement<PitchOnly>([ blockElement ])),
            ),
            timbreName: TimbreNameEnum.TRIANGLE,
        },
    ]

export {
    materializeEntities,
}
