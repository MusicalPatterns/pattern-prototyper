import { Note } from '@musical-patterns/compiler'
import {
    PitchOnly,
    SILENT,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_INDEX_INDICATING_REST,
    STANDARD_PITCH_SCALE_INDEX,
} from '@musical-patterns/pattern'
import {
    Amplitude,
    ContourElement,
    FOUR_FIFTHS,
    from,
    Ordinal,
    Scalar,
    to,
    translateFromOneIndexedToZeroIndexed,
} from '@musical-patterns/utilities'

const buildNote: (contourElement: ContourElement<PitchOnly>) => Note =
    ([ pitch ]: ContourElement<PitchOnly>): Note => {
        const pitchIndex: Ordinal = translateFromOneIndexedToZeroIndexed(to.Ordinal(pitch))

        if (pitchIndex === STANDARD_PITCH_INDEX_INDICATING_REST) {
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
                index: pitchIndex,
                scaleIndex: STANDARD_PITCH_SCALE_INDEX,
            },
            sustain: {
                scalar: FOUR_FIFTHS,
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
        }
    }

export {
    buildNote,
}
