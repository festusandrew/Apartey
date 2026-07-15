# Affiliate System Plan

## Context

Apartey needs two distinct affiliate programmes:

1. **Business/Store Affiliates** — home product brands/shops pay for placement and referral traffic
2. **Individual Referral Affiliates** — users earn physical rewards (Not the cinema tickets, t-shirts, tote bags) by referring new listers/reviewers

No affiliate infrastructure exists yet. The "Refer & Earn" card in dashboards has a non-functional "Get Link" button (current text: "Get 500 keys per friend"). The Services feature provides a reusable pattern for the business affiliate flow (3-step form wizard, card grid, admin tab).

---

## What Gets Built

### 1. `/partners` — Business Affiliate Landing Page

**New file:** `src/app/components/PartnersPage.tsx`

A public-facing pitch page for home product brands wanting to list on Apartey.

- **Hero:** "Put your brand in front of thousands of active renters and homeowners" — dark navy background, orange CTA
- **Stats bar:** e.g. 40,000+ monthly users, 3 cities, verified audience
- **How it works:** 3-step visual (Apply → Get reviewed → Go live & earn referrals)
- **Product category tiles** (8 tiles): Furniture, Appliances, Bedding & Linen, Kitchen & Dining, Home Décor, Smart Home, Cleaning Products, Garden & Outdoor
- **Placement showcase:** Mockup showing where partner brands appear (property detail pages, renter dashboard, service cards)
- **Pricing tiers** (3 cards): Starter (free listing), Growth (featured placement), Pro (homepage + email)
- **CTA footer bar:** "Apply as a Partner" → `/partners/apply`

---

### 2. `/partners/apply` — Business Partner Application Form

**New file:** `src/app/components/PartnerApplyPage.tsx`

Reuses the same 3-step wizard pattern as `ListYourServicePage.tsx`.

| Step                     | Fields                                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------------------- |
| **1 — Business Info**    | Brand/store name, contact name, product category (8 tiles), one-line tagline                      |
| **2 — Product Details**  | Description, cities covered (multi-select pills), website URL, average price range, social handle |
| **3 — Contact & Submit** | Phone, WhatsApp toggle, email, preferred tier (Starter/Growth/Pro), terms checkbox                |

Success screen: "Application received — review within 48 hours."

---

### 3. `/affiliates` — Individual Referral Programme Landing Page

**New file:** `src/app/components/AffiliatesPage.tsx`

Public page explaining how the referral programme works and what rewards are available.

- **Hero:** "Share Apartey. Earn real-world rewards." — dark background with reward product imagery (cinema ticket, t-shirt, tote bag illustrations using lucide icons + styled divs)
- **Reward catalogue** (milestone-based):
  | Milestone | Reward |
  |-----------|--------|
  | 3 referrals | Apartey tote bag |
  | 7 referrals | Cinema ticket (x2) |
  | 15 referrals | Apartey t-shirt |
  | 30 referrals | ₦10,000 gift card |
- **How it works:** 4-step flow — Sign up → Get your unique link → Friend lists or reviews → Reward unlocked
- **Qualifying actions** explained: A referral counts when the referred user publishes a listing OR a verified review
- **FAQ accordion** (5 questions)
- **CTA:** "Get My Referral Link" — opens a copy-link panel (same Web Share API pattern used in `GetReviewsModal.tsx`)

---

### 4. Upgrade "Refer & Earn" Card — All Dashboards

**Files to edit:**

- `src/app/components/RenterProfilePage.tsx` (lines 296–308) — change subtitle + wire button
- `src/app/components/HomeownerProfilePage.tsx` — same card pattern
- `src/app/components/AgentProfilePage.tsx` — same card pattern
- `src/app/components/PropertyManagerProfilePage.tsx` — same card pattern

**Change:** Subtitle updated from "Get 500 keys per friend" → "Earn cinema tickets, tees & more". "Get Link" button navigates to `/affiliates` (using `useNavigate`). The Apartey Keys reward remains separate (keys are a different system).

---

### 5. Footer Additions

**File:** `src/app/components/Footer.tsx`

Add two links to existing footer columns:

- **Company column** (after "Blog"): `<Link to="/partners">Partner with Us</Link>`
- **Support column** (after "FAQ"): `<Link to="/affiliates">Refer & Earn</Link>`

---

### 6. SharedNavbar Addition

**File:** `src/app/components/SharedNavbar.tsx`

Add "Partners" to `navItems` array between "Services" and "About":

```js
{ label: "Partners", href: "/partners" }
```

---

### 7. Admin — Partner Applications Tab

**File:** `src/app/components/AdminProfilePage.tsx`

Add a "Partners" sidebar nav item (with pending badge) and tab content following the same pattern as the existing Services tab:

- Stat cards: Pending / Live / Rejected
- Pending applications table: Preview / Approve / Reject
- Live partners table: Unpublish / Edit

---

### 8. Routes

**File:** `src/app/routes.ts`

Add 3 new routes:

```ts
{ path: "/partners", Component: PartnersPage }
{ path: "/partners/apply", Component: PartnerApplyPage }
{ path: "/affiliates", Component: AffiliatesPage }
```

---

## Reused Patterns

- 3-step wizard: `ListYourServicePage.tsx` (copy structure exactly)
- Copy/share link: `GetReviewsModal.tsx` → `navigator.clipboard` + `navigator.share`
- Admin tab structure: `AdminProfilePage.tsx` Services tab (lines to be confirmed on read)
- Card grid: `ServicesPage.tsx` layout
- Footer link style: existing `<Link>` + `<a>` pattern in `Footer.tsx`

---

## Verification

1. Navigate to `/partners` — landing page renders with all sections
2. Click "Apply as a Partner" → `/partners/apply` 3-step form completes to success screen
3. Navigate to `/affiliates` — reward catalogue and how-it-works renders
4. Click "Get Link" from any dashboard "Refer & Earn" card → navigates to `/affiliates`
5. Footer: "Partner with Us" and "Refer & Earn" links route correctly
6. Admin dashboard → "Partners" tab shows pending/live tables
7. SharedNavbar shows "Partners" link on desktop and in mobile drawer