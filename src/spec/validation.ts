import {
    SingularPropertyInvalidSpecMessage,
    SpecValidationFunction,
    SpecValidationResults,
} from '@musical-patterns/pattern'
import { evaluate } from '@musical-patterns/utilities'
import { PrototyperSpec } from './types'

const validationFunction: SpecValidationFunction<PrototyperSpec> =
    (spec: PrototyperSpec): SpecValidationResults<PrototyperSpec> => {
        const results: SpecValidationResults<PrototyperSpec> = {}

        const blockInRange: boolean = spec.block.every(
            (blockElement: number): boolean =>
                blockElement <= spec.scalarStrings.length,
        )
        if (!blockInRange) {
            results.block = spec.block.map(
                (blockElement: number): SingularPropertyInvalidSpecMessage => {
                    if (blockElement > spec.scalarStrings.length) {
                        return 'index is higher than count of scalarStrings'
                    }

                    return undefined
                },
            )
        }

        const scalarStringsAreAllParseable: boolean = spec.scalarStrings.every((scalarString: string): boolean => {
            try {
                evaluate(scalarString)
            }
            catch (e) {
                return false
            }

            return true
        })

        if (!scalarStringsAreAllParseable) {
            results.scalarStrings = spec.scalarStrings.map(
                (scalarString: string): SingularPropertyInvalidSpecMessage => {
                    try {
                        evaluate(scalarString)
                    }
                    catch (e) {
                        return 'numeric expression cannot be parsed'
                    }

                    return undefined
                },
            )
        }

        return Object.keys(results).length ? results : undefined
    }

export {
    validationFunction,
}
