import { Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { PitchOnly } from '@musical-patterns/pattern'
import { to } from '@musical-patterns/utilities'
import { PrototyperSpec, PrototyperSpecs } from '../spec'
import { computeNote } from './features'

const materializeEntities: (specs: PrototyperSpecs) => Entity[] =
    (specs: PrototyperSpecs): Entity[] => [
        {
            sections: [
                {
                    notes: specs[ PrototyperSpec.BLOCK ].map(
                        (blockElement: number) => computeNote(to.ContourElement<PitchOnly>([ blockElement ])),
                    ),
                },
            ],
            timbreName: TimbreNameEnum.SQUARE,
        },
        {
            sections: [
                {
                    notes: specs[ PrototyperSpec.OTHER_BLOCK ].map(
                        (blockElement: number) => computeNote(to.ContourElement<PitchOnly>([ blockElement ])),
                    ),
                },
            ],
            timbreName: TimbreNameEnum.SAW,
        },
        {
            sections: [
                {
                    notes: specs[ PrototyperSpec.OTHER_OTHER_BLOCK ].map(
                        (blockElement: number) => computeNote(to.ContourElement<PitchOnly>([ blockElement ])),
                    ),
                },
            ],
            timbreName: TimbreNameEnum.TRIANGLE,
        },
    ]

export {
    materializeEntities,
}
