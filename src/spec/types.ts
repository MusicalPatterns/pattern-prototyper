import { Configurations, RangedConfiguration, StandardSpecs, StringedConfiguration } from '@musical-patterns/pattern'
import { Block } from '@musical-patterns/utilities'

enum PrototyperSpec {
    BLOCK = 'block',
    OTHER_BLOCK = 'otherBlock',
    OTHER_OTHER_BLOCK = 'otherOtherBlock',
    SCALAR_STRINGS = 'scalarStrings',
}

interface PrototyperSpecs extends StandardSpecs {
    [ PrototyperSpec.BLOCK ]: Block,
    [ PrototyperSpec.OTHER_BLOCK ]: Block,
    [ PrototyperSpec.OTHER_OTHER_BLOCK ]: Block,
    [ PrototyperSpec.SCALAR_STRINGS ]: string[],
}

interface PrototyperConfigurations extends Configurations<PrototyperSpecs> {
    [ PrototyperSpec.BLOCK ]: RangedConfiguration,
    [ PrototyperSpec.OTHER_BLOCK ]: RangedConfiguration,
    [ PrototyperSpec.OTHER_OTHER_BLOCK ]: RangedConfiguration,
    [ PrototyperSpec.SCALAR_STRINGS ]: StringedConfiguration,
}

type PrototyperValue = string[] | Block

export {
    PrototyperSpecs,
    PrototyperConfigurations,
    PrototyperSpec,
    PrototyperValue,
}
