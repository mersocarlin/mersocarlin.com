import * as dateFns from 'date-fns'

export function getHost(request: Request) {
  const host =
    request.headers.get('X-Forwarded-Host') ?? request.headers.get('host')

  if (!host) {
    throw new Error('Could not determine domain URL.')
  }

  const protocol = host.includes('localhost') ? 'http' : 'https'
  return `${protocol}://${host}`
}

export function parseDate(dateString: string) {
  return dateFns.add(dateFns.parseISO(dateString), {
    minutes: new Date().getTimezoneOffset(),
  })
}

export function formatDate(dateString: string | Date, format = 'PPP') {
  if (typeof dateString !== 'string') {
    dateString = dateString.toISOString()
  }
  return dateFns.format(parseDate(dateString), format)
}
