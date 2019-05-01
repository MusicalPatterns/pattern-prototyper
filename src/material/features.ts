import { Note, PitchOnly, SILENT, STANDARD_PITCH_INDEX_INDICATING_REST } from '@musical-patterns/material'
import { as, ContourElement, FOUR_FIFTHS, Pitch, Scalar } from '@musical-patterns/utilities'

const computeNote: (contourElement: ContourElement<PitchOnly>) => Note =
    ([ pitch ]: ContourElement<PitchOnly>): Note => {
        if (pitch === as.number(STANDARD_PITCH_INDEX_INDICATING_REST)) {
            return {
                intensity: {
                    scalar: SILENT,
                },
            }
        }

        return {
            envelope: {
                scalar: FOUR_FIFTHS,
            },
            pitch: {
                index: as.Ordinal<Array<Scalar<Pitch>>>(pitch),
            },
        }
    }

export {
    computeNote,
}
