import type { NextApiRequest, NextApiResponse } from 'next'
import * as Amplitude from '@amplitude/node'

const client = Amplitude.init(process.env.AMPLITUDE_API_KEY || '')

import pkg from '../../../package.json'

const checkString = (val: any) => val && typeof val === 'string'
const checkNumber = (val: any) => typeof val === 'number'

const eventMap: any = {
  // page load
  '3eb866d5-6139-42c8-8968-6a3abb257119': {
    category: 'TIMING',
    label: 'page load',
  },

  // change theme
  '580bf852-f5ff-48a4-a3cb-422b764eb232': {
    category: 'USER',
    label: 'change theme',
  },

  // page view
  'dd15ce5f-540d-4173-ba80-bb0d0b4b2f94': {
    category: 'USER',
    label: 'page view',
    value: undefined,
  },

  // click edit link
  '30f6fbe3-db8d-4882-9fa3-c76d9c738595': {
    category: 'USER',
    label: 'click edit link',
  },
}

function isPageLoadEvent(event: any) {
  return Boolean(
    checkString(event.category) &&
      checkString(event.label) &&
      checkString(event.path) &&
      checkNumber(event.value) &&
      event.category === 'TIMING' &&
      event.label === 'page load',
  )
}

function isChangeThemeEvent(event: any) {
  return Boolean(
    checkString(event.category) &&
      checkString(event.label) &&
      checkString(event.path) &&
      checkString(event.value) &&
      event.category === 'USER' &&
      event.label === 'change theme',
  )
}

function isPageViewEvent(event: any) {
  return Boolean(
    checkString(event.category) &&
      checkString(event.label) &&
      checkString(event.path) &&
      event.value === undefined &&
      event.category === 'USER' &&
      event.label === 'page view',
  )
}

function isClickEditLinkEvent(event: any) {
  return Boolean(
    checkString(event.category) &&
      checkString(event.label) &&
      checkString(event.path) &&
      checkString(event.value) &&
      event.category === 'USER' &&
      event.label === 'click edit link',
  )
}

export default function events(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST' || !req.body || !process.env.AMPLITUDE_API_KEY) {
    return res.status(404).end()
  }

  let parsedBody = JSON.parse(req.body)
  if (!(parsedBody.id in eventMap)) {
    return res.status(400).end()
  }

  parsedBody = {
    ...parsedBody,
    ...eventMap[parsedBody.id],
  }

  if (
    isPageLoadEvent(parsedBody) ||
    isChangeThemeEvent(parsedBody) ||
    isPageViewEvent(parsedBody) ||
    isClickEditLinkEvent(parsedBody)
  ) {
    client.logEvent({
      event_properties: {
        category: parsedBody.category,
        configEnv: process.env.CONFIG_ENV || 'local',
        label: parsedBody.label,
        path: parsedBody.path,
        value: parsedBody.value,
        version: pkg.version,
      },
      event_type: parsedBody.category,
      user_id: 'mersocarlin@mersocarlin.com',
    })

    return res.status(200).json({
      success: true,
    })
  }

  return res.status(400).json({
    success: false,
  })
}
