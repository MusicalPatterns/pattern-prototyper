import { evaluate, Hz, Scalar, to } from '@musical-patterns/utilities'

const parseScalars: (scalarStrings: string[]) => Array<Scalar<Hz>> =
    (scalarStrings: string[]): Array<Scalar<Hz>> =>
        scalarStrings
            .map(evaluate)
            .map((evaluatedString: number) => to.Scalar<Hz>(evaluatedString))

export {
    parseScalars,
}
