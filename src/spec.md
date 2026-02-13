# Specification

## Summary
**Goal:** Apply the user-provided logo to the site header and update the business tagline to “Protecting Structures. Preserving Values.” across the site.

**Planned changes:**
- Update `frontend/src/content/siteContent.ts` so `siteContent.business.tagline` is exactly `"Protecting Structures. Preserving Values."`.
- Ensure the updated tagline is rendered wherever `siteContent.business.tagline` is used (at minimum: SiteHeader and Home page hero).
- Add the uploaded logo image (`IMG_4371-5.PNG`) to frontend static assets and update the SiteHeader to use it as the logo image, ensuring it loads reliably without triggering fallback behavior.

**User-visible outcome:** The header and Home hero show the updated tagline, and the site header displays the new BHUV Enterprises logo crisply instead of a text-based placeholder.
