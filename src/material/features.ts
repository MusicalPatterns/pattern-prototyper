import {
    Note,
    PitchOnly,
    SILENT,
    STANDARD_PITCH_INDEX_INDICATING_REST,
    STANDARD_PITCH_SCALE_INDEX,
    STANDARD_VALUE_SCALE_INDEX,
} from '@musical-patterns/material'
import { as, ContourElement, FOUR_FIFTHS, Pitch, Scalar } from '@musical-patterns/utilities'

const computeNote: (contourElement: ContourElement<PitchOnly>) => Note =
    ([ pitch ]: ContourElement<PitchOnly>): Note => {
        if (pitch === as.number(STANDARD_PITCH_INDEX_INDICATING_REST)) {
            return {
                intensity: {
                    scalar: SILENT,
                },
                value: {
                    scaleIndex: STANDARD_VALUE_SCALE_INDEX,
                },
            }
        }

        return {
            envelope: {
                scalar: FOUR_FIFTHS,
                scaleIndex: STANDARD_VALUE_SCALE_INDEX,
            },
            pitch: {
                index: as.Ordinal<Array<Scalar<Pitch>>>(pitch),
                scaleIndex: STANDARD_PITCH_SCALE_INDEX,
            },
            value: {
                scaleIndex: STANDARD_VALUE_SCALE_INDEX,
            },
        }
    }

export {
    computeNote,
}
