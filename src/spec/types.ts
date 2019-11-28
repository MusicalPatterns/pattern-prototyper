import { Configurations, RangedConfiguration, Specs, StringedConfiguration } from '@musical-patterns/spec'
import { Block } from '@musical-patterns/utilities'

enum PrototyperSpec {
    BLOCK_1 = 'blockOne',
    BLOCK_2 = 'blockTwo',
    BLOCK_3 = 'blockThree',
    BLOCK_4 = 'blockFour',
    BLOCK_5 = 'blockFive',
    BLOCK_6 = 'blockSix',
    SCALAR_STRINGS = 'scalarStrings',
}

interface PrototyperSpecs extends Specs {
    [ PrototyperSpec.BLOCK_1 ]: Block,
    [ PrototyperSpec.BLOCK_2 ]: Block,
    [ PrototyperSpec.BLOCK_3 ]: Block,
    [ PrototyperSpec.BLOCK_4 ]: Block,
    [ PrototyperSpec.BLOCK_5 ]: Block,
    [ PrototyperSpec.BLOCK_6 ]: Block,
    [ PrototyperSpec.SCALAR_STRINGS ]: string[],
}

interface PrototyperConfigurations extends Configurations<PrototyperSpecs> {
    [ PrototyperSpec.BLOCK_1 ]: RangedConfiguration,
    [ PrototyperSpec.BLOCK_2 ]: RangedConfiguration,
    [ PrototyperSpec.BLOCK_3 ]: RangedConfiguration,
    [ PrototyperSpec.BLOCK_4 ]: RangedConfiguration,
    [ PrototyperSpec.BLOCK_5 ]: RangedConfiguration,
    [ PrototyperSpec.BLOCK_6 ]: RangedConfiguration,
    [ PrototyperSpec.SCALAR_STRINGS ]: StringedConfiguration,
}

type PrototyperValue = string[] | Block

export {
    PrototyperSpecs,
    PrototyperConfigurations,
    PrototyperSpec,
    PrototyperValue,
}
