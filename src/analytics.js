import ReactGA from 'react-ga';

const doNotTrack = () => {
  return (
    window.doNotTrack === '1' ||
    navigator.doNotTrack === 'yes' ||
    navigator.doNotTrack === '1' ||
    navigator.msDoNotTrack === '1' ||
    ('msTrackingProtectionEnabled' in window.external &&
    window.external.msTrackingProtectionEnabled())
  );
}

let gaInitialized = false;
const initialize = () => {
  if (doNotTrack() || gaInitialized) {
    return;
  }
  ReactGA.initialize(process.env.REACT_APP_GA_ID);
  ReactGA.set({anonymizeIp: true});
  gaInitialized = true;
}

const pageview = (pathname) => {
  if (doNotTrack() || !gaInitialized) {
    return;
  }
  ReactGA.pageview(pathname);
}

const event = (category, action, label) => {
  if (doNotTrack || !gaInitialized) {
    return;
  }
  ReactGA.event({
    category: category,
    action: action,
    label: label
  });
}

export default {
  initialize,
  pageview,
  event
}