import { Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { PrototyperSpec } from '../spec'
import { buildNoteSpec } from './notes'

const buildEntities: (spec: PrototyperSpec) => Entity[] =
    (spec: PrototyperSpec): Entity[] => [
        {
            noteSpecs: spec.block.map(buildNoteSpec),
            timbreName: TimbreNameEnum.SQUARE,
        },
    ]

export {
    buildEntities,
}
