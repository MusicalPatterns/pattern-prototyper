import {
    Note,
    PitchOnly,
    SILENT,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_INDEX_INDICATING_REST,
    STANDARD_PITCH_SCALE_INDEX,
} from '@musical-patterns/material'
import { Amplitude, ContourElement, FOUR_FIFTHS, from, Scalar, to } from '@musical-patterns/utilities'

const computeNote: (contourElement: ContourElement<PitchOnly>) => Note =
    ([ pitch ]: ContourElement<PitchOnly>): Note => {
        if (pitch === STANDARD_PITCH_INDEX_INDICATING_REST) {
            return {
                duration: {
                    scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
                },
                gain: {
                    scalar: from.Amplitude<Scalar, Scalar<Amplitude>>(SILENT),
                },
            }
        }

        return {
            duration: {
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
            pitch: {
                index: to.Ordinal(pitch),
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
