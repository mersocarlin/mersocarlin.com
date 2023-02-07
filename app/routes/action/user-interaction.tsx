import type { ActionFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import type { AmplitudeEvent, UserInteractionEvent } from '~/types'
import { sendAmplitudeEvents } from '~/utils/tracking.server'
import { EVENT_CATEGORIES, EVENT_IDS } from '~/utils/userInteraction'

export const action: ActionFunction = async ({ request }) => {
  const events = (await request.json()) as UserInteractionEvent[]

  const amplitudeEvents: AmplitudeEvent[] = events
    .map<AmplitudeEvent | null>((event) => {
      const commonProps = {
        hash: event.hash,
        path: event.path,
        pathname: event.pathname,
        referrer: event.referrer,
        search: event.search,
        value: event.value,
      }

      switch (event.id) {
        default:
          return null
        case EVENT_IDS.CHANGE_THEME:
          return {
            ...commonProps,
            category: EVENT_CATEGORIES.USER,
            label: 'change theme',
          }
        case EVENT_IDS.CLICK_EDIT_LINK:
          return {
            ...commonProps,
            category: EVENT_CATEGORIES.USER,
            label: 'click edit link',
          }
        case EVENT_IDS.CLICK_TAG:
          return {
            ...commonProps,
            category: EVENT_CATEGORIES.USER,
            label: 'click tag',
          }
        case EVENT_IDS.PAGE_VIEW:
          return {
            ...commonProps,
            category: EVENT_CATEGORIES.USER,
            label: 'page view',
          }
        case EVENT_IDS.PAGE_LOAD:
          return {
            ...commonProps,
            category: EVENT_CATEGORIES.USER,
            label: 'page load',
          }
      }
    })
    .filter(Boolean) as AmplitudeEvent[]

  await sendAmplitudeEvents(amplitudeEvents)

  return json({ success: true })
}

export const loader = () => redirect('/', { status: 404 })
