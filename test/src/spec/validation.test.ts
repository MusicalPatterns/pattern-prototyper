import { SpecValidationResults } from '@musical-patterns/pattern'
import { to } from '@musical-patterns/utilities'
import { PrototyperSpec, validationFunction } from '../../../src/indexForTest'

describe('validation', () => {
    it('reports nothing if all is well', () => {
        const spec: PrototyperSpec = {
            block: to.Block([ 0, 1, 2 ]),
            scalars: [ 0, 1, 2 ].map(to.Scalar),
        }
        const validationResults: SpecValidationResults<PrototyperSpec> = validationFunction(spec)

        expect(validationResults)
            .toBeUndefined()
    })

    it('reports any block indices that exceed the scalars count (when adjusted from one-indexed to zero-indexed)', () => {
        const spec: PrototyperSpec = {
            block: to.Block([ 4, 3, 5 ]),
            scalars: [ 0, 1, 2 ].map(to.Scalar),
        }
        const validationResults: SpecValidationResults<PrototyperSpec> = validationFunction(spec)

        expect(validationResults)
            .toEqual({
                block: [
                    'index is higher than count of scalars',
                    undefined,
                    'index is higher than count of scalars',
                ],
            })
    })
})
