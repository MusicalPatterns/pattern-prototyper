import { RangedSpecPropertyAttributes, SpecAttributes, StandardSpec } from '@musical-patterns/pattern'
import { Block, Scalar } from '@musical-patterns/utilities'

interface PrototyperSpec extends StandardSpec {
    block: Block,
    scalars: Scalar[],
}

interface PrototyperSpecAttributes extends SpecAttributes<PrototyperSpec> {
    block: RangedSpecPropertyAttributes,
    scalars: RangedSpecPropertyAttributes,
}

export {
    PrototyperSpec,
    PrototyperSpecAttributes,
}
