import {
    RangedSpecPropertyAttributes,
    SpecAttributes,
    StandardSpec,
    StringedSpecPropertyAttributes,
} from '@musical-patterns/pattern'
import { Block } from '@musical-patterns/utilities'

interface PrototyperSpec extends StandardSpec {
    block: Block,
    scalarStrings: string[],
}

interface PrototyperSpecAttributes extends SpecAttributes<PrototyperSpec> {
    block: RangedSpecPropertyAttributes,
    scalarStrings: StringedSpecPropertyAttributes,
}

export {
    PrototyperSpec,
    PrototyperSpecAttributes,
}
