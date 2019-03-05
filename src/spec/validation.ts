import {
    ArrayedPropertyInvalidSpecMessage,
    SingularPropertyInvalidSpecMessage,
    SpecValidationFunction,
    SpecValidationResults,
} from '@musical-patterns/pattern'
import { PrototyperSpec } from './types'

const validationFunction: SpecValidationFunction<PrototyperSpec> =
    (spec: PrototyperSpec): SpecValidationResults<PrototyperSpec> => {
        const blockInRange: boolean = spec.block.every(
            (blockElement: number): boolean =>
                blockElement <= spec.scalars.length,
        )

        if (blockInRange) {
            return undefined
        }

        const invalidSpecMessagesForBlock: ArrayedPropertyInvalidSpecMessage = spec.block.map(
            (blockElement: number): SingularPropertyInvalidSpecMessage => {
                if (blockElement > spec.scalars.length) {
                    return 'index is higher than count of scalars'
                }

                return undefined
            },
        )

        return {
            block: invalidSpecMessagesForBlock,
        }
    }

export {
    validationFunction,
}
