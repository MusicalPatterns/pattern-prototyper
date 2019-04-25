import { as, evaluate, Hz, Pitch, Scalar } from '@musical-patterns/utilities'

const parseScalars: (scalarStrings: string[]) => Array<Scalar<Pitch>> =
    (scalarStrings: string[]): Array<Scalar<Pitch>> =>
        scalarStrings
            .map(evaluate)
            .map((evaluatedString: number) => as.Scalar<Pitch>(evaluatedString))

export {
    parseScalars,
}
