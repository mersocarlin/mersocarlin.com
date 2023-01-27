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

export function debounce(fn: Function, delay: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return (...args: string[]) => {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

export function safeParseJSON<T>(
  json: string | undefined | null,
  defaultValue: T
): T {
  if (!json) {
    return defaultValue
  }

  try {
    return JSON.parse(json)
  } catch {
    return defaultValue
  }
}

export function getItem(key: string) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

export function setItem(key: string, value: string) {
  localStorage.setItem(key, value)
}
