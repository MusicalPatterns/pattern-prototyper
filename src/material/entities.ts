import { Entity, PitchOnly, TimbreNameEnum } from '@musical-patterns/material'
import { as } from '@musical-patterns/utilities'
import { PrototyperSpec, PrototyperSpecs } from '../spec'
import { computeNote } from './features'

const materializeEntities: (specs: PrototyperSpecs) => Entity[] =
    (specs: PrototyperSpecs): Entity[] => [
        {
            sections: [
                {
                    notes: specs[ PrototyperSpec.BLOCK_1 ].map(
                        (blockElement: number) => computeNote(as.ContourElement<PitchOnly>([ blockElement ])),
                    ),
                },
            ],
            timbreName: TimbreNameEnum.SQUARE,
        },
        {
            sections: [
                {
                    notes: specs[ PrototyperSpec.BLOCK_2 ].map(
                        (blockElement: number) => computeNote(as.ContourElement<PitchOnly>([ blockElement ])),
                    ),
                },
            ],
            timbreName: TimbreNameEnum.SAW,
        },
        {
            sections: [
                {
                    notes: specs[ PrototyperSpec.BLOCK_3 ].map(
                        (blockElement: number) => computeNote(as.ContourElement<PitchOnly>([ blockElement ])),
                    ),
                },
            ],
            timbreName: TimbreNameEnum.TRIANGLE,
        },
        {
            sections: [
                {
                    notes: specs[ PrototyperSpec.BLOCK_4 ].map(
                        (blockElement: number) => computeNote(as.ContourElement<PitchOnly>([ blockElement ])),
                    ),
                },
            ],
            timbreName: TimbreNameEnum.TRIANGLE,
        },
        {
            sections: [
                {
                    notes: specs[ PrototyperSpec.BLOCK_5 ].map(
                        (blockElement: number) => computeNote(as.ContourElement<PitchOnly>([ blockElement ])),
                    ),
                },
            ],
            timbreName: TimbreNameEnum.SAW,
        },
        {
            sections: [
                {
                    notes: specs[ PrototyperSpec.BLOCK_6 ].map(
                        (blockElement: number) => computeNote(as.ContourElement<PitchOnly>([ blockElement ])),
                    ),
                },
            ],
            timbreName: TimbreNameEnum.SQUARE,
        },
    ]

export {
    materializeEntities,
}
