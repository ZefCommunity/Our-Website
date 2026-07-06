import { GA_MEASUREMENT_ID, isAnalyticsEnabled } from '../../config/analytics';

const GTAG_SCRIPT_ID = 'zef-ga4-gtag';
const PAGE_VIEW_DEDUPE_MS = 400;

/** @type {{ path: string, at: number } | null} */
let lastPageView = null;

let initialized = false;

/**
 * Builds a stable path string for SPA routes (pathname + search + hash).
 * @param {{ pathname: string, search?: string, hash?: string }} location
 */
export function getPagePath(location) {
  return `${location.pathname}${location.search || ''}${location.hash || ''}`;
}

/**
 * Loads gtag.js and configures GA4 once per session.
 * `send_page_view: false` — page views are sent manually on route changes
 * to avoid duplicate hits in this React Router SPA.
 */
export function initGA() {
  if (!isAnalyticsEnabled() || initialized) {
    return;
  }

  initialized = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false,
    anonymize_ip: true,
  });

  if (document.getElementById(GTAG_SCRIPT_ID)) {
    return;
  }

  const script = document.createElement('script');
  script.id = GTAG_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

/**
 * Sends a GA4 page_view event (used for React Router navigations).
 * @param {{ page_path: string, page_title?: string, page_location?: string }} params
 */
export function trackPageView(params) {
  if (!isAnalyticsEnabled()) {
    return;
  }

  initGA();

  if (typeof window.gtag !== 'function') {
    return;
  }

  const { page_path: pagePath } = params;
  const now = Date.now();

  if (
    lastPageView &&
    lastPageView.path === pagePath &&
    now - lastPageView.at < PAGE_VIEW_DEDUPE_MS
  ) {
    return;
  }

  lastPageView = { path: pagePath, at: now };

  window.gtag('event', 'page_view', {
    send_to: GA_MEASUREMENT_ID,
    page_path: pagePath,
    page_title: params.page_title ?? document.title,
    page_location: params.page_location ?? window.location.href,
  });
}

/**
 * Generic GA4 event helper — extend for custom dimensions and parameters.
 * @param {string} eventName
 * @param {Record<string, string | number | boolean>} [params]
 */
export function trackEvent(eventName, params = {}) {
  if (!isAnalyticsEnabled() || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, {
    send_to: GA_MEASUREMENT_ID,
    ...params,
  });
}

// TODO: event tracking — add named helpers (e.g. program_view, section_scroll)
// and call trackEvent() with consistent event names and parameters.

// TODO: CTA click tracking — wire Navbar/Footer/CtaLink buttons to trackCTAClick()
// with cta_id, cta_text, and page_path for funnel analysis.

/**
 * @param {{ cta_id: string, cta_text?: string, page_path?: string }} _params
 */
export function trackCTAClick(_params) {
  // TODO: implement CTA click tracking
  // trackEvent('cta_click', { cta_id: _params.cta_id, ... });
}

// TODO: volunteer conversion tracking — fire after successful volunteer form submit
// (Contact variant=volunteer) with form_type and optional campaign source.

/**
 * @param {{ form_type?: string, page_path?: string }} _params
 */
export function trackVolunteerConversion(_params) {
  // TODO: implement volunteer conversion tracking
  // trackEvent('volunteer_submit', { ... });
}

// TODO: newsletter tracking — fire when newsletter signup is implemented
// (e.g. footer or dedicated signup form success).

/**
 * @param {{ source?: string }} _params
 */
export function trackNewsletterSignup(_params) {
  // TODO: implement newsletter tracking
  // trackEvent('newsletter_signup', { ... });
}

// TODO: donation tracking — fire when a donation/payment flow is added.

/**
 * @param {{ amount?: number, currency?: string }} _params
 */
export function trackDonation(_params) {
  // TODO: implement donation tracking
  // trackEvent('donate', { value: _params.amount, currency: _params.currency });
}

/**
 * Fires after a successful Pilot Interest Form submission.
 * @param {{ pilot: string, user_type: string, source: string, state: string }} params
 */
export function trackPilotInterestSubmitted(params) {
  if (!isAnalyticsEnabled()) {
    return;
  }

  initGA();

  trackEvent('pilot_interest_submitted', {
    pilot: params.pilot,
    user_type: params.user_type,
    source: params.source,
    state: params.state,
  });

  // TODO: conversion funnels, add pilot_page_view and pilot_form_start events
  // to build a GA4 funnel (landing → form focus → submit).
  // TODO: campaign attribution, merge UTM params (utm_source, utm_campaign)
  // with source for multi-touch campaign reporting.
}
