import {
    RangedSpecPropertyAttributes,
    Spec,
    SpecAttributes,
    StringedSpecPropertyAttributes,
} from '@musical-patterns/pattern'
import { Block } from '@musical-patterns/utilities'

enum PrototyperSpecProperty {
    BLOCK = 'block',
    OTHER_BLOCK = 'otherBlock',
    OTHER_OTHER_BLOCK = 'otherOtherBlock',
    SCALAR_STRINGS = 'scalarStrings',
}

interface PrototyperSpec extends Spec {
    [ PrototyperSpecProperty.BLOCK ]: Block,
    [ PrototyperSpecProperty.OTHER_BLOCK ]: Block,
    [ PrototyperSpecProperty.OTHER_OTHER_BLOCK ]: Block,
    [ PrototyperSpecProperty.SCALAR_STRINGS ]: string[],
}

interface PrototyperSpecAttributes extends SpecAttributes<PrototyperSpec> {
    [ PrototyperSpecProperty.BLOCK ]: RangedSpecPropertyAttributes,
    [ PrototyperSpecProperty.OTHER_BLOCK ]: RangedSpecPropertyAttributes,
    [ PrototyperSpecProperty.OTHER_OTHER_BLOCK ]: RangedSpecPropertyAttributes,
    [ PrototyperSpecProperty.SCALAR_STRINGS ]: StringedSpecPropertyAttributes,
}

type PrototyperSpecValue = string[] | Block

export {
    PrototyperSpec,
    PrototyperSpecAttributes,
    PrototyperSpecProperty,
    PrototyperSpecValue,
}
