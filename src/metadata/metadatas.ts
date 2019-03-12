import { Metadata } from '@musical-patterns/pattern'
import { post } from './posts'

const metadata: Metadata = {
    description: post,
    formattedName: 'Prototyper',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-10-31T07:00:00.000Z',
    musicalIdeaIllustrated: '',
    originalPublish: '2019-03-03T07:00:00.000Z',
    version: process.env.PATTERN_VERSION || 'unknown',
}

export {
    metadata,
}
