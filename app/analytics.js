import ga from 'react-ga';


let pendingPages = [];
let isInitialized = false;


export function initializeGoogleAnalyticsIfNeeded (googleAnalyticsId) {
  if (!googleAnalyticsId || isInitialized) return;

  isInitialized = true;

  ga.initialize(googleAnalyticsId);

  pendingPages.forEach(pathname => trackPageView(pathname));
  pendingPages = [];
}


export function trackPageView (pathname) {
  if (!isInitialized) {
    pendingPages.push(pathname);
    return;
  }

  ga.pageview(pathname);
}
