import type { UserInteractionEvent } from '~/types'
import { debounce, setItem } from './misc'

export const EVENT_IDS = {
  CHANGE_THEME: '580bf852-f5ff-48a4-a3cb-422b764eb232',
  CLICK_EDIT_LINK: '30f6fbe3-db8d-4882-9fa3-c76d9c738595',
  CLICK_TAG: '62c31286-cd0b-4d24-b94b-b7f5a6d096ab',
  PAGE_LOAD: '3eb866d5-6139-42c8-8968-6a3abb257119',
  PAGE_VIEW: 'dd15ce5f-540d-4173-ba80-bb0d0b4b2f94',
} as const

export const EVENT_CATEGORIES = {
  USER: 'USER',
} as const

function createTracker() {
  const STORAGE_KEY = 'MERSOCARLIN_EVENT_POOL'

  let events: UserInteractionEvent[] = []

  const sendEvents = () => {
    const headers = {
      type: 'application/json',
    }
    const blob = new Blob([JSON.stringify(events)], headers)
    navigator.sendBeacon('/action/user-interaction', blob)

    events = []
    setItem(STORAGE_KEY, JSON.stringify(events))
  }

  const debouncedSendEvents = debounce(sendEvents, 2000)

  const trackEvent = (event: UserInteractionEvent) => {
    events.push(event)
    setItem(STORAGE_KEY, JSON.stringify(events))
    debouncedSendEvents()
  }

  return {
    trackEvent,
  }
}

export const appTracker = createTracker()
