import { ComputeValidations, SingularValidation, Validations } from '@musical-patterns/pattern'
import { Block, evaluate, isUndefined } from '@musical-patterns/utilities'
import { PrototyperSpec, PrototyperSpecs, PrototyperValue } from './types'

const isBlockNeedingValidation: (block: unknown) => block is Block =
    (block: unknown): block is Block =>
        block instanceof Array && block.length > 0 && typeof block[ 0 ] === 'number'

const validateBlock:
    (
        prototyperSpecs: PrototyperSpecs,
        previousValidations: Validations<PrototyperSpecs>,
        blockKey: PrototyperSpec,
    ) => Validations<PrototyperSpecs> =
    (
        prototyperSpecs: PrototyperSpecs,
        previousValidations: Validations<PrototyperSpecs>,
        blockKey: PrototyperSpec,
    ): Validations<PrototyperSpecs> => {
        let validations: Validations = previousValidations
        const block: PrototyperValue = prototyperSpecs[ blockKey ]
        if (!isBlockNeedingValidation(block)) {
            return undefined
        }

        const blockInRange: boolean = block.every(
            (blockElement: number): boolean =>
                blockElement <= prototyperSpecs.scalarStrings.length,
        )

        if (!blockInRange) {
            if (isUndefined(validations)) {
                validations = {}
            }
            validations[ blockKey ] = block.map(
                (blockElement: number): SingularValidation => {
                    if (blockElement > prototyperSpecs.scalarStrings.length) {
                        return 'index is higher than count of scalarStrings'
                    }

                    return undefined
                },
            )
        }

        return validations
    }

const computeValidations: ComputeValidations<PrototyperSpecs> =
    (prototyperSpecs: PrototyperSpecs): Validations<PrototyperSpecs> => {
        let validations: Validations<PrototyperSpecs> = undefined

        validations = validateBlock(prototyperSpecs, validations, PrototyperSpec.BLOCK)
        validations = validateBlock(prototyperSpecs, validations, PrototyperSpec.OTHER_BLOCK)
        validations = validateBlock(prototyperSpecs, validations, PrototyperSpec.OTHER_OTHER_BLOCK)

        const scalarStringsAreAllParseable: boolean = prototyperSpecs.scalarStrings.every(
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
            if (isUndefined(validations)) {
                validations = {}
            }
            validations.scalarStrings = prototyperSpecs.scalarStrings.map(
                (scalarString: string): SingularValidation => {
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

        return validations && Object.keys(validations).length ? validations : undefined
    }

export {
    computeValidations,
}