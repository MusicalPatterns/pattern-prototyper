import { NoteSpec } from '@musical-patterns/compiler'
import {
    SILENT,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_INDEX_INDICATING_REST,
    STANDARD_PITCH_SCALE_INDEX,
} from '@musical-patterns/pattern'
import {
    FOUR_FIFTHS,
    from,
    Ordinal,
    Scalar,
    to,
    translateFromOneIndexedToZeroIndexed,
} from '@musical-patterns/utilities'

const buildNoteSpec: (blockElement: number) => NoteSpec =
    (blockElement: number): NoteSpec => {
        const pitchIndex: Ordinal = translateFromOneIndexedToZeroIndexed(to.Ordinal(blockElement))

        if (pitchIndex === STANDARD_PITCH_INDEX_INDICATING_REST) {
            return {
                durationSpec: {
                    scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
                },
                gainSpec: {
                    scalar: from.Amplitude(SILENT) as Scalar,
                },
            }
        }

        return {
            durationSpec: {
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
            pitchSpec: {
                index: pitchIndex,
                scaleIndex: STANDARD_PITCH_SCALE_INDEX,
            },
            sustainSpec: {
                scalar: FOUR_FIFTHS,
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
        }
    }

export {
    buildNoteSpec,
}
