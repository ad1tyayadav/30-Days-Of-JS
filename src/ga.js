// src/ga.js

import ReactGA from 'react-ga4';

const MEASUREMENT_ID = "G-CQM40FEPCY"; // Replace with your actual Measurement ID
ReactGA.initialize(MEASUREMENT_ID);

export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
