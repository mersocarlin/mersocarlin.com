import invariant from 'tiny-invariant'
import * as Amplitude from '@amplitude/node'

import type { AmplitudeEvent } from '~/types'
import pkg from '../../package.json'

invariant(process.env.AMPLITUDE_API_KEY, 'AMPLITUDE_API_KEY must be set')

const client = Amplitude.init(process.env.AMPLITUDE_API_KEY || '')

export async function sendAmplitudeEvents(events: AmplitudeEvent[]) {
  await Promise.allSettled(
    events.map((event) =>
      client.logEvent({
        event_properties: {
          ...event,
          configEnv: process.env.CONFIG_ENV || 'local',
          version: pkg.version,
        },
        event_type: event.category,
        user_id: 'mersocarlin@mersocarlin.com',
      })
    )
  ).then((results) => {
    if (process.env.CONFIG_ENV === 'local') {
      for (const result of results) {
        if (result.status === 'rejected') {
          console.log('-> failed to send event:', result.reason)
        }
      }
    }
  })
}
