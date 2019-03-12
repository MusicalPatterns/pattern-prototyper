import { Id, Pattern, Patterns } from '@musical-patterns/pattern'
import { material } from './material'
import { metadata } from './metadata'
import { PrototyperSpecs, spec } from './spec'

const pattern: Pattern<PrototyperSpecs> = {
    id: Id.PROTOTYPER,
    material,
    metadata,
    spec,
}

const patterns: Partial<Patterns> = {
    [ pattern.id ]: pattern,
}

export {
    pattern,
    patterns,
}
