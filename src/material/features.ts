import {
    Note,
    PitchOnly,
    SILENT,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_INDEX_INDICATING_REST,
    STANDARD_PITCH_SCALE_INDEX,
} from '@musical-patterns/material'
import { ContourElement, FOUR_FIFTHS, from, insteadOf, Scalar, to } from '@musical-patterns/utilities'

const computeNote: (contourElement: ContourElement<PitchOnly>) => Note =
    ([ pitch ]: ContourElement<PitchOnly>): Note => {
        if (pitch === from.Ordinal<Scalar>(STANDARD_PITCH_INDEX_INDICATING_REST)) {
            return {
                duration: {
                    scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
                },
                gain: {
                    scalar: insteadOf<Scalar, Scalar>(SILENT),
                },
            }
        }

        return {
            duration: {
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
            pitch: {
                index: to.Ordinal<Scalar>(pitch),
                scaleIndex: STANDARD_PITCH_SCALE_INDEX,
            },
            sustain: {
                scalar: FOUR_FIFTHS,
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
        }
    }

export {
    computeNote,
}
