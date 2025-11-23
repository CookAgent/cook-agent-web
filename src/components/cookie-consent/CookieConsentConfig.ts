import type { CookieConsentConfig } from "vanilla-cookieconsent";

// NOTE: This file is a scaffold. Install the runtime with:
// npm install vanilla-cookieconsent

export const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: "box inline",
      position: "bottom left",
    },
    preferencesModal: {
      layout: "box",
      position: "right",
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: { readOnly: true },
    functionality: {},
    analytics: {
      services: {
        ga4: {
          label:
            "[Google Analytics 4](https://marketingplatform.google.com/about/analytics/)",
          onAccept: () => {
            // When accepted, update consents via gtag
            try {
              window.gtag("consent", "update", {
                ad_storage: "granted",
                ad_user_data: "granted",
                ad_personalization: "granted",
                analytics_storage: "granted",
              });
            } catch (e) {
              // gtag might not be available yet
            }
          },
          onReject: () => {
            // No-op: keep default denied
          },
          cookies: [{ name: /^_ga/ }],
        },
      },
    },
  },
  language: {
    default: "en",
    autoDetect: "browser",
  },
};
