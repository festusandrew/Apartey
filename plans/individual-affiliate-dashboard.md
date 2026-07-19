# Individual Affiliate Program + Points Dashboard

## Goal
Drop the two-program (business + individual) affiliate model. Keep only the individual
affiliate flow. Add a small gated dashboard where affiliates earn points from referral
links and redeem accumulated points for gift cards.

Decisions confirmed:
- Reward model: **points → gift cards only** (retire the merch milestone ladder)
- Dashboard: **new gated route** `/affiliate/dashboard`, marketing page links into it
- Earning trigger: **keep current rule** — referred friend must publish a listing or
  submit a verified review to count

## Changes

### 1. Retire the dual-program hub — `src/app/components/AffiliateHubPage.tsx`
- Remove the "Brand Partner" business card, the dual-card grid, and the 3-column
  comparison table (all business-vs-individual framing).
- Simplest path: stop routing to the hub entirely and point `/earn` at the individual
  page (see routing). Delete `AffiliateHubPage.tsx` and its import.
- Footer "Partner with Us" is repurposed → links to the individual affiliate page.

### 2. Rework the individual page — `src/app/components/AffiliatesPage.tsx`
- Replace the merch-milestone data (`MILESTONES` tote/cinema/shirt) and the "live
  milestone visualizer" slider with a **points model**:
  - New constant: points earned per qualifying referral (e.g. 100 pts).
  - New `GIFT_CARDS` catalogue (name, brand, point cost, e.g. ₦5k = 500 pts,
    ₦10k = 1000 pts, ₦25k = 2500 pts).
- Update hero + "how it works" + FAQ copy to describe points → gift cards.
- Primary CTA becomes **"Go to Dashboard"** (if signed in) / **"Get Referral Link"**
  which routes to `/affiliate/dashboard`.
- Keep existing dark hero / card visual language and `#c85212` accent.

### 3. New dashboard — `src/app/components/AffiliateDashboardPage.tsx`
Gated with `useAuth()`. If `!isSignedIn`, show a sign-in prompt (call `signIn()`),
mirroring how other pages use the auth context.

Sections (local `useState` mock data, matching the codebase's mock-data convention):
- **Points balance card** — current points, lifetime earned, points redeemed.
- **Referral link card** — the affiliate's unique link with copy-to-clipboard
  (reuse the existing copy pattern + `sonner` toast).
- **Referral stats** — total referrals, qualified (published listing/review) vs pending.
- **Recent referrals list** — mock rows: friend, status (pending/qualified), points.
- **Gift card catalogue / redeem** — cards from `GIFT_CARDS`; each shows cost and a
  Redeem button that is disabled when balance < cost. Redeeming deducts points
  (local state) and shows a success toast + a "redeemed" entry.
- **Redemption history** — mock list of past redemptions.

Uses `SharedNavbar` + `Footer` like sibling pages, Mulish/Montserrat fonts, motion
animations consistent with `AffiliatesPage`.

### 4. Routing — `src/app/routes.ts`
- Add `AffiliateDashboardPage` import + route `/affiliate/dashboard`.
- Point `/earn` at `AffiliatesPage` (remove `AffiliateHubPage` import/route).
- Keep `/affiliates` → `AffiliatesPage`.

### 5. Footer + Navbar wiring
- `src/app/components/Footer.tsx`: "Partner with Us" and "Refer & Earn" both point to
  `/earn` (now the individual page). No structural change needed beyond confirming target.
- Navbar "Earn" link already points to `/earn` — unchanged.

## Out of scope / notes
- No backend: points, referrals, and redemptions are front-end mock state that resets on
  reload (consistent with the rest of this prototype, e.g. `AuthContext`, mock profiles).
- Business/Brand Partner pages (`/partners`, `/partners/apply`) are left intact since the
  request only concerns the affiliate footer flow; they are simply no longer surfaced
  through the affiliate hub. (Can remove separately if desired.)

## Verification
- Run the project's build/dev to confirm the app compiles and routes resolve.
- Manually click Footer "Partner with Us" → lands on individual affiliate page →
  CTA → dashboard (with sign-in gate), copy link works, redeem disabled/enabled by
  balance, redeeming deducts points.
