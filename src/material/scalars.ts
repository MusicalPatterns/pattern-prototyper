import { as, evaluate, Hz, Scalar } from '@musical-patterns/utilities'

const parseScalars: (scalarStrings: string[]) => Array<Scalar<Hz>> =
    (scalarStrings: string[]): Array<Scalar<Hz>> =>
        scalarStrings
            .map(evaluate)
            .map((evaluatedString: number) => as.Scalar<Hz>(evaluatedString))

export {
    parseScalars,
}
