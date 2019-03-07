import {
    SingularPropertyInvalidSpecMessage,
    SpecValidationFunction,
    SpecValidationResults,
} from '@musical-patterns/pattern'
import { Block, evaluate, isUndefined } from '@musical-patterns/utilities'
import { PrototyperSpec, PrototyperSpecProperty, PrototyperSpecValue } from './types'

const isBlockNeedingValidation: (block: unknown) => block is Block =
    (block: unknown): block is Block =>
        block instanceof Array && block.length > 0 && typeof block[0] === 'number'

const validateBlock:
    (
        prototyperSpec: PrototyperSpec,
        previousResults: SpecValidationResults<PrototyperSpec>,
        blockKey: PrototyperSpecProperty,
    ) => SpecValidationResults<PrototyperSpec> =
    (
        prototyperSpec: PrototyperSpec,
        previousResults: SpecValidationResults<PrototyperSpec>,
        blockKey: PrototyperSpecProperty,
    ): SpecValidationResults<PrototyperSpec> => {
        let results: SpecValidationResults = previousResults
        const block: PrototyperSpecValue = prototyperSpec[ blockKey ]
        if (!isBlockNeedingValidation(block)) {
            return undefined
        }

        const blockInRange: boolean = block.every(
            (blockElement: number): boolean =>
                blockElement <= prototyperSpec.scalarStrings.length,
        )

        if (!blockInRange) {
            if (isUndefined(results)) {
                results = {}
            }
            results[ blockKey ] = block.map(
                (blockElement: number): SingularPropertyInvalidSpecMessage => {
                    if (blockElement > prototyperSpec.scalarStrings.length) {
                        return 'index is higher than count of scalarStrings'
                    }

                    return undefined
                },
            )
        }

        return results
    }

const validationFunction: SpecValidationFunction<PrototyperSpec> =
    (spec: PrototyperSpec): SpecValidationResults<PrototyperSpec> => {
        let results: SpecValidationResults<PrototyperSpec> = undefined

        results = validateBlock(spec, results, PrototyperSpecProperty.BLOCK)
        results = validateBlock(spec, results, PrototyperSpecProperty.OTHER_BLOCK)
        results = validateBlock(spec, results, PrototyperSpecProperty.OTHER_OTHER_BLOCK)

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
            if (isUndefined(results)) {
                results = {}
            }
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

        return results && Object.keys(results).length ? results : undefined
    }

export {
    validationFunction,
}
