import { evaluate, Scalar, to } from '@musical-patterns/utilities'

const parseScalars: (scalarStrings: string[]) => Scalar[] =
    (scalarStrings: string[]): Scalar[] =>
        scalarStrings
            .map(evaluate)
            .map(to.Scalar)

export {
    parseScalars,
}
