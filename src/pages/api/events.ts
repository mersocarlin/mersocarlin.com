import type { NextApiRequest, NextApiResponse } from 'next'
import * as Amplitude from '@amplitude/node'

const client = Amplitude.init(process.env.AMPLITUDE_API_KEY || '')

import pkg from '../../../package.json'

const checkString = (val: any) => typeof val === 'string'
const checkNumber = (val: any) => typeof val === 'number'

type SiteEvent = {
  category: 'TIMING' | 'USER'
  label:
    | 'page load'
    | 'change theme'
    | 'page view'
    | 'click edit link'
    | 'click tag'
  path: string
  value?: string | number
  referrer?: string
}

type EventMap = {
  [eventId: string]: SiteEvent
}

const eventMap: EventMap = {
  // page load
  '3eb866d5-6139-42c8-8968-6a3abb257119': {
    category: 'TIMING',
    label: 'page load',
    path: '',
  },

  // change theme
  '580bf852-f5ff-48a4-a3cb-422b764eb232': {
    category: 'USER',
    label: 'change theme',
    path: '',
  },

  // page view
  'dd15ce5f-540d-4173-ba80-bb0d0b4b2f94': {
    category: 'USER',
    label: 'page view',
    path: '',
    value: undefined,
  },

  // click edit link
  '30f6fbe3-db8d-4882-9fa3-c76d9c738595': {
    category: 'USER',
    label: 'click edit link',
    path: '',
  },

  // click tag
  '62c31286-cd0b-4d24-b94b-b7f5a6d096ab': {
    category: 'USER',
    label: 'click tag',
    path: '',
  },
}

function isUserEvent(event: SiteEvent) {
  return checkString(event.category) || event.category === 'USER'
}

function isPageLoadEvent(event: SiteEvent) {
  return Boolean(
    checkString(event.category) &&
      checkString(event.label) &&
      checkString(event.path) &&
      checkNumber(event.value) &&
      event.category === 'TIMING' &&
      event.label === 'page load',
  )
}

function isChangeThemeEvent(event: SiteEvent) {
  return Boolean(
    isUserEvent(event) &&
      checkString(event.label) &&
      checkString(event.path) &&
      checkString(event.value) &&
      event.label === 'change theme',
  )
}

function isPageViewEvent(event: SiteEvent) {
  return Boolean(
    isUserEvent(event) &&
      checkString(event.label) &&
      checkString(event.path) &&
      checkString(event.referrer) &&
      event.value === undefined &&
      event.label === 'page view',
  )
}

function isClickEditLinkEvent(event: SiteEvent) {
  return Boolean(
    isUserEvent(event) &&
      checkString(event.label) &&
      checkString(event.path) &&
      checkString(event.value) &&
      event.label === 'click edit link',
  )
}

function isClickTagEvent(event: SiteEvent) {
  return Boolean(
    isUserEvent(event) &&
      checkString(event.label) &&
      checkString(event.path) &&
      checkString(event.value) &&
      event.label === 'click tag',
  )
}

export default async function events(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST' || !req.body || !process.env.AMPLITUDE_API_KEY) {
    return res.status(404).end()
  }

  if (!(req.body.id in eventMap)) {
    return res.status(400).end()
  }

  const siteEvent: SiteEvent = {
    ...eventMap[req.body.id],
    ...req.body,
  }

  if (
    isPageLoadEvent(siteEvent) ||
    isChangeThemeEvent(siteEvent) ||
    isPageViewEvent(siteEvent) ||
    isClickEditLinkEvent(siteEvent) ||
    isClickTagEvent(siteEvent)
  ) {
    const response = await client.logEvent({
      event_properties: {
        category: siteEvent.category,
        configEnv: process.env.CONFIG_ENV || 'local',
        label: siteEvent.label,
        path: siteEvent.path,
        referrer: siteEvent.referrer || '',
        value: siteEvent.value,
        version: pkg.version,
      },
      event_type: siteEvent.category,
      user_id: 'mersocarlin@mersocarlin.com',
    })

    return res.status(response.statusCode).json({
      status: response.status,
    })
  }

  return res.status(400).json({
    status: 'wrong-payload',
  })
}
