import { SpecValidationResults } from '@musical-patterns/pattern'
import { to } from '@musical-patterns/utilities'
import { PrototyperSpec, validationFunction } from '../../../src/indexForTest'

describe('validation', () => {
    it('reports nothing if all is well', () => {
        const spec: PrototyperSpec = {
            block: to.Block([ 0, 1, 2 ]),
            scalarStrings: [ '1', '2', '3' ],
        }
        const validationResults: SpecValidationResults<PrototyperSpec> = validationFunction(spec)

        expect(validationResults)
            .toBeUndefined()
    })

    it('reports any block indices that exceed the scalarStrings count (when adjusted from one-indexed to zero-indexed)', () => {
        const spec: PrototyperSpec = {
            block: to.Block([ 4, 3, 5 ]),
            scalarStrings: [ '1', '2', '3' ],
        }
        const validationResults: SpecValidationResults<PrototyperSpec> = validationFunction(spec)

        expect(validationResults)
            .toEqual({
                block: [
                    'index is higher than count of scalarStrings',
                    undefined,
                    'index is higher than count of scalarStrings',
                ],
            })
    })

    describe('un-parseable scalar strings', () => {
        it('rejects scalar strings with more than one fraction sign', () => {
            const spec: PrototyperSpec = {
                block: to.Block([]),
                scalarStrings: [ '1/2^3%7', 'hellothere', '3.5875' ],
            }
            const validationResults: SpecValidationResults<PrototyperSpec> = validationFunction(spec)

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
