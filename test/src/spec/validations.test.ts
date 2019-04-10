import { Validations } from '@musical-patterns/spec'
import { to } from '@musical-patterns/utilities'
import { computeValidations, PrototyperSpec, PrototyperSpecs } from '../../../src/indexForTest'

describe('validations', () => {
    it('reports nothing if all is well', () => {
        const specs: PrototyperSpecs = {
            [ PrototyperSpec.BLOCK_1 ]: to.Block([ 0, 1, 2 ]),
            [ PrototyperSpec.BLOCK_2 ]: to.Block([ 0, 1, 2 ]),
            [ PrototyperSpec.BLOCK_3 ]: to.Block([ 0, 1, 2 ]),
            [ PrototyperSpec.BLOCK_4 ]: to.Block([]),
            [ PrototyperSpec.BLOCK_5 ]: to.Block([]),
            [ PrototyperSpec.BLOCK_6 ]: to.Block([]),
            scalarStrings: [ '1', '2', '3' ],
        }
        const validations: Validations<PrototyperSpecs> = computeValidations(specs)

        expect(validations)
            .toBeUndefined()
    })

    it('reports any block indices that exceed the scalarStrings count (when adjusted from one-indexed to zero-indexed)', () => {
        const specs: PrototyperSpecs = {
            [ PrototyperSpec.BLOCK_1 ]: to.Block([ 4, 3, 5 ]),
            [ PrototyperSpec.BLOCK_2 ]: to.Block([ 0, 9, 2 ]),
            [ PrototyperSpec.BLOCK_3 ]: to.Block([ 0, 1, 2 ]),
            [ PrototyperSpec.BLOCK_4 ]: to.Block([]),
            [ PrototyperSpec.BLOCK_5 ]: to.Block([]),
            [ PrototyperSpec.BLOCK_6 ]: to.Block([]),
            scalarStrings: [ '1', '2', '3' ],
        }
        const validations: Validations<PrototyperSpecs> = computeValidations(specs)

        const expectedInvalidMessage: string = 'index is higher than count of scalarStrings'
        expect(validations)
            .toEqual({
                [ PrototyperSpec.BLOCK_1 ]: [
                    expectedInvalidMessage,
                    undefined,
                    expectedInvalidMessage,
                ],
                [ PrototyperSpec.BLOCK_2 ]: [
                    undefined,
                    expectedInvalidMessage,
                    undefined,
                ],
            })
    })

    it('one spec not having any validation issues does not cause others who do to get wiped out', () => {
        const specs: PrototyperSpecs = {
            [ PrototyperSpec.BLOCK_1 ]: to.Block([ 4, 3, 5 ]),
            [ PrototyperSpec.BLOCK_2 ]: to.Block([ 0, 9, 2 ]),
            [ PrototyperSpec.BLOCK_3 ]: to.Block([]),
            [ PrototyperSpec.BLOCK_4 ]: to.Block([]),
            [ PrototyperSpec.BLOCK_5 ]: to.Block([]),
            [ PrototyperSpec.BLOCK_6 ]: to.Block([]),
            scalarStrings: [ '1', '2', '3' ],
        }
        const validations: Validations<PrototyperSpecs> = computeValidations(specs)

        const expectedInvalidMessage: string = 'index is higher than count of scalarStrings'
        expect(validations)
            .toEqual({
                [ PrototyperSpec.BLOCK_1 ]: [
                    expectedInvalidMessage,
                    undefined,
                    expectedInvalidMessage,
                ],
                [ PrototyperSpec.BLOCK_2 ]: [
                    undefined,
                    expectedInvalidMessage,
                    undefined,
                ],
            })
    })

    describe('un-parseable scalar strings', () => {
        it('rejects scalar strings with more than one fraction sign', () => {
            const specs: PrototyperSpecs = {
                [ PrototyperSpec.BLOCK_1 ]: to.Block([]),
                [ PrototyperSpec.BLOCK_2 ]: to.Block([]),
                [ PrototyperSpec.BLOCK_3 ]: to.Block([]),
                [ PrototyperSpec.BLOCK_4 ]: to.Block([]),
                [ PrototyperSpec.BLOCK_5 ]: to.Block([]),
                [ PrototyperSpec.BLOCK_6 ]: to.Block([]),
                scalarStrings: [ '1/2^3%7', 'hellothere', '3.5875' ],
            }
            const validations: Validations<PrototyperSpecs> = computeValidations(specs)

            expect(validations)
                .toEqual({
                    scalarStrings: [
                        undefined,
                        'numeric expression cannot be parsed',
                        undefined,
                    ],
                })
        })
    })
})
