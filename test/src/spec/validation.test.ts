import { ValidationResults } from '@musical-patterns/pattern'
import { to } from '@musical-patterns/utilities'
import { PrototyperSpec, validationFunction } from '../../../src/indexForTest'

describe('validation', () => {
    it('reports nothing if all is well', () => {
        const spec: PrototyperSpec = {
            block: to.Block([ 0, 1, 2 ]),
            otherBlock: to.Block([ 0, 1, 2 ]),
            otherOtherBlock: to.Block([ 0, 1, 2 ]),
            scalarStrings: [ '1', '2', '3' ],
        }
        const validationResults: ValidationResults<PrototyperSpec> = validationFunction(spec)

        expect(validationResults)
            .toBeUndefined()
    })

    it('reports any block indices that exceed the scalarStrings count (when adjusted from one-indexed to zero-indexed)', () => {
        const spec: PrototyperSpec = {
            block: to.Block([ 4, 3, 5 ]),
            otherBlock: to.Block([ 0, 9, 2 ]),
            otherOtherBlock: to.Block([ 0, 1, 2 ]),
            scalarStrings: [ '1', '2', '3' ],
        }
        const validationResults: ValidationResults<PrototyperSpec> = validationFunction(spec)

        const expectedInvalidMessage: string = 'index is higher than count of scalarStrings'
        expect(validationResults)
            .toEqual({
                block: [
                    expectedInvalidMessage,
                    undefined,
                    expectedInvalidMessage,
                ],
                otherBlock: [
                    undefined,
                    expectedInvalidMessage,
                    undefined,
                ],
            })
    })

    describe('un-parseable scalar strings', () => {
        it('rejects scalar strings with more than one fraction sign', () => {
            const spec: PrototyperSpec = {
                block: to.Block([]),
                otherBlock: to.Block([]),
                otherOtherBlock: to.Block([]),
                scalarStrings: [ '1/2^3%7', 'hellothere', '3.5875' ],
            }
            const validationResults: ValidationResults<PrototyperSpec> = validationFunction(spec)

            expect(validationResults)
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
