// tslint:disable max-file-line-count

import { ComputeValidations, SingularValidation, Validations } from '@musical-patterns/spec'
import {
    as,
    Block,
    computeLength,
    evaluate,
    isArray,
    isEmpty,
    isNumber,
    isUndefined,
    objectSet,
} from '@musical-patterns/utilities'
import { PrototyperSpec, PrototyperSpecs, PrototyperValue } from './types'

const isBlockNeedingValidation: (block: unknown) => block is Block =
    (block: unknown): block is Block =>
        isArray(block) && !isEmpty(block) && isNumber(block[ 0 ])

const validateBlock: (
    prototyperSpecs: PrototyperSpecs,
    existingValidations: Validations<PrototyperSpecs>,
    blockKey: PrototyperSpec,
) => Validations<PrototyperSpecs> =
    (
        prototyperSpecs: PrototyperSpecs,
        existingValidations: Validations<PrototyperSpecs>,
        blockKey: PrototyperSpec,
    ): Validations<PrototyperSpecs> => {
        const block: PrototyperValue = prototyperSpecs[ blockKey ]
        if (!isBlockNeedingValidation(block)) {
            return existingValidations
        }

        let validations: Validations = existingValidations

        const blockInRange: boolean = block.every(
            (blockElement: number): boolean =>
                blockElement <= as.number(computeLength(prototyperSpecs.scalarStrings)),
        )

        if (!blockInRange) {
            if (isUndefined(validations)) {
                validations = {}
            }

            objectSet(validations, blockKey, block.map(
                (blockElement: number): SingularValidation => {
                    if (blockElement > as.number(computeLength(prototyperSpecs.scalarStrings))) {
                        return 'index is higher than count of scalarStrings'
                    }

                    return undefined
                },
            ))
        }

        return validations
    }

const computeValidations: ComputeValidations<PrototyperSpecs> =
    (prototyperSpecs: PrototyperSpecs): Validations<PrototyperSpecs> => {
        let validations: Validations<PrototyperSpecs> = undefined

        validations = validateBlock(prototyperSpecs, validations, PrototyperSpec.BLOCK_1)
        validations = validateBlock(prototyperSpecs, validations, PrototyperSpec.BLOCK_2)
        validations = validateBlock(prototyperSpecs, validations, PrototyperSpec.BLOCK_3)
        validations = validateBlock(prototyperSpecs, validations, PrototyperSpec.BLOCK_4)
        validations = validateBlock(prototyperSpecs, validations, PrototyperSpec.BLOCK_5)
        validations = validateBlock(prototyperSpecs, validations, PrototyperSpec.BLOCK_6)

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

        return validations && !isEmpty(Object.keys(validations)) ? validations : undefined
    }

export {
    computeValidations,
}
