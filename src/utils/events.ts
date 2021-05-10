import { TagT } from '@mersocarlin.com/types'

function sendEvent(event: any) {
  return fetch('/api/events', {
    body: JSON.stringify(event),
    method: 'POST',
  })
}

function getClientPath() {
  return `${window.location.pathname}${window.location.hash}${window.location.search}`
}

export function trackChangeTheme(theme: string) {
  return sendEvent({
    id: '580bf852-f5ff-48a4-a3cb-422b764eb232',
    path: getClientPath(),
    value: theme,
  })
}

export function trackPageLoad(time: number) {
  return sendEvent({
    id: '3eb866d5-6139-42c8-8968-6a3abb257119',
    path: getClientPath(),
    value: time,
  })
}

export function trackPageView(routerPath: URL | string) {
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'UA-17163651-1', {
      page_path: routerPath,
    })
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('[Page view]', routerPath)
  }

  return sendEvent({
    id: 'dd15ce5f-540d-4173-ba80-bb0d0b4b2f94',
    path: routerPath,
    referrer: typeof document === 'object' ? document.referrer : '',
  })
}

export function trackClickEditLink(component: string) {
  return sendEvent({
    id: '30f6fbe3-db8d-4882-9fa3-c76d9c738595',
    path: getClientPath(),
    value: component,
  })
}

export function trackTagClick(tag: TagT) {
  return sendEvent({
    id: '62c31286-cd0b-4d24-b94b-b7f5a6d096ab',
    path: getClientPath(),
    value: tag,
  })
}
