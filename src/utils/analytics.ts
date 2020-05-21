import ReactGA from 'react-ga'

let gaId: string = ''

export const initGA = (id: string) => {
  if (!id) {
    console.info('[GA Init]')
    return
  }

  ReactGA.initialize(id)
  gaId = id
}

export const trackPageView = (page: string) => {
  if (!gaId) {
    console.info('[GA Pageview]', page)
    return
  }

  ReactGA.set({ page })
  ReactGA.pageview(page)
}
