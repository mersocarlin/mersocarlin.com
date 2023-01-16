import type { ActionFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'

export const action: ActionFunction = async ({ request }) => {
  const requestText = await request.text()
  const form = new URLSearchParams(requestText)
  const event = form.get('event')
  const path = form.get('path')
  const value = form.get('value')

  // TODO
  console.log('-> ', {
    event,
    path,
    value,
  })

  return json({ success: true })
}

export const loader = () => redirect('/', { status: 404 })
