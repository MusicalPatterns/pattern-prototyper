import {
    Attributes,
    RangedPropertyAttributes,
    Spec,
    StringedPropertyAttributes,
} from '@musical-patterns/pattern'
import { Block } from '@musical-patterns/utilities'

enum PrototyperProperty {
    BLOCK = 'block',
    OTHER_BLOCK = 'otherBlock',
    OTHER_OTHER_BLOCK = 'otherOtherBlock',
    SCALAR_STRINGS = 'scalarStrings',
}

interface PrototyperSpec extends Spec {
    [ PrototyperProperty.BLOCK ]: Block,
    [ PrototyperProperty.OTHER_BLOCK ]: Block,
    [ PrototyperProperty.OTHER_OTHER_BLOCK ]: Block,
    [ PrototyperProperty.SCALAR_STRINGS ]: string[],
}

interface PrototyperAttributes extends Attributes<PrototyperSpec> {
    [ PrototyperProperty.BLOCK ]: RangedPropertyAttributes,
    [ PrototyperProperty.OTHER_BLOCK ]: RangedPropertyAttributes,
    [ PrototyperProperty.OTHER_OTHER_BLOCK ]: RangedPropertyAttributes,
    [ PrototyperProperty.SCALAR_STRINGS ]: StringedPropertyAttributes,
}

type PrototyperValue = string[] | Block

export {
    PrototyperSpec,
    PrototyperAttributes,
    PrototyperProperty,
    PrototyperValue,
}
