import { SingularValidationResult, ValidationFunction, ValidationResults } from '@musical-patterns/pattern'
import { Block, evaluate, isUndefined } from '@musical-patterns/utilities'
import { PrototyperProperty, PrototyperSpec, PrototyperValue } from './types'

const isBlockNeedingValidation: (block: unknown) => block is Block =
    (block: unknown): block is Block =>
        block instanceof Array && block.length > 0 && typeof block[ 0 ] === 'number'

const validateBlock:
    (
        prototyperSpec: PrototyperSpec,
        previousValidationResults: ValidationResults<PrototyperSpec>,
        blockKey: PrototyperProperty,
    ) => ValidationResults<PrototyperSpec> =
    (
        prototyperSpec: PrototyperSpec,
        previousValidationResults: ValidationResults<PrototyperSpec>,
        blockKey: PrototyperProperty,
    ): ValidationResults<PrototyperSpec> => {
        let validationResults: ValidationResults = previousValidationResults
        const block: PrototyperValue = prototyperSpec[ blockKey ]
        if (!isBlockNeedingValidation(block)) {
            return undefined
        }

        const blockInRange: boolean = block.every(
            (blockElement: number): boolean =>
                blockElement <= prototyperSpec.scalarStrings.length,
        )

        if (!blockInRange) {
            if (isUndefined(validationResults)) {
                validationResults = {}
            }
            validationResults[ blockKey ] = block.map(
                (blockElement: number): SingularValidationResult => {
                    if (blockElement > prototyperSpec.scalarStrings.length) {
                        return 'index is higher than count of scalarStrings'
                    }

                    return undefined
                },
            )
        }

        return validationResults
    }

const validationFunction: ValidationFunction<PrototyperSpec> =
    (prototyperSpec: PrototyperSpec): ValidationResults<PrototyperSpec> => {
        let validationResults: ValidationResults<PrototyperSpec> = undefined

        validationResults = validateBlock(prototyperSpec, validationResults, PrototyperProperty.BLOCK)
        validationResults = validateBlock(prototyperSpec, validationResults, PrototyperProperty.OTHER_BLOCK)
        validationResults = validateBlock(prototyperSpec, validationResults, PrototyperProperty.OTHER_OTHER_BLOCK)

        const scalarStringsAreAllParseable: boolean = prototyperSpec.scalarStrings.every(
            (scalarString: string): boolean => {
                try {
                    evaluate(scalarString)
                }
                catch (e) {
                    return false
                }

                return true
            })

        if (!scalarStringsAreAllParseable) {
            if (isUndefined(validationResults)) {
                validationResults = {}
            }
            validationResults.scalarStrings = prototyperSpec.scalarStrings.map(
                (scalarString: string): SingularValidationResult => {
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

        return validationResults && Object.keys(validationResults).length ? validationResults : undefined
    }

export {
    validationFunction,
}
