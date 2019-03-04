import { SpecValidationFunction, SpecValidationResults } from '@musical-patterns/pattern'
import { PrototyperSpec } from './types'

const validationFunction: SpecValidationFunction<PrototyperSpec> =
    (spec: PrototyperSpec): SpecValidationResults<PrototyperSpec> => {
        const blockInRange: boolean = spec.block.every(
            (blockElement: number): boolean =>
                blockElement <= spec.scalars.length,
        )

        if (!blockInRange) {
            return {
                block: 'index is higher than count of scalars',
            }
        }

        return undefined
    }

export {
    validationFunction,
}
