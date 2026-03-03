// linkhub/config.js
// Update these anytime without touching the slide QR (as long as the hub URL stays the same).

window.LINKHUB = {
  title: "Echo",
  subtitle: "gentle returns",

  // Google Apps Script Web App endpoint (exec URL)
  feedbackEndpoint: "https://script.google.com/macros/s/AKfycbz-luUuOMtF9m2KuRctXLI6821wDRfUKx-W6bUmeOkDfmG294UMDAfwY646I6f9bb0m/exec",

  links: [
    {
      label: "TestFlight",
      detail: "get the latest build",
      href: "https://testflight.apple.com/join/c6kSkeQp",
      kind: "primary",
    },
    {
      label: "Message on Telegram",
      detail: "fastest way to reach us",
      href: "https://t.me/khbyong",
      kind: "secondary",
    },
    {
      label: "Instagram — @bybri4n",
      detail: "public account",
      href: "https://instagram.com/bybri4n",
      kind: "secondary",
    },
    {
      label: "Instagram — @phrypy",
      detail: "follow the build journey",
      href: "https://instagram.com/phrypy",
      kind: "secondary",
    },
    {
      label: "Add contact",
      detail: "save our contact card",
      href: "brian.vcf",
      kind: "secondary",
      sameTab: true,
    },
    {
      label: "Longer feedback",
      detail: "(optional) open a full form",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSfplv4kOj14h1BnhfSNDpZGH44UVLeM6ec4bg3ck1r8nLh7wA/viewform",
      kind: "secondary",
    },
    {
      label: "Other build: Year Mood Calendar",
      detail: "a tiny daily wallpaper ritual",
      href: "https://github.com/khbyong/Year-Mood-Calendar",
      kind: "secondary",
    },
  ],

  footer: "thanks for helping us make this calmer.",
};
