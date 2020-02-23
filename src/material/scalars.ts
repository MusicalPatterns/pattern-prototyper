import { as, evaluate, Pitch, Scalar } from '@musical-patterns/utilities'

const parseScalars: (scalarStrings: string[]) => Array<Scalar<Pitch>> =
    (scalarStrings: string[]): Array<Scalar<Pitch>> =>
        scalarStrings
            .map(evaluate)
            .map((evaluatedString: number): Scalar<Pitch> => as.Scalar<Pitch>(evaluatedString))

export {
    parseScalars,
}
