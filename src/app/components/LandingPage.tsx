import { useLayoutEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import Component1 from "../../imports/1506-1/index";
import { ProfileSwitcherModal } from "./ProfileSwitcherModal";
import { FeaturedListings } from "./FeaturedListings";
import { Footer } from "./Footer";
import { Gift, Ticket, ShoppingBag, Shirt, ArrowRight } from "lucide-react";

// Native Figma canvas dimensions (1728px wide)
const NATIVE_WIDTH = 1728;
const NATIVE_HEIGHT = 7800;

// Pixel positions (in native 1728px coordinates) where the Figma
// "Home Listings" section starts and ends, so we can replace it with
// the live FeaturedListings component (which has the compare icon).
const LISTINGS_TOP = 2632;   // end of Frame27 (stats bar)
const LISTINGS_BOTTOM = 3592; // end of Frame40 (Home Listings 960px)

// The Figma canvas footer starts around y=7200 (estimated).
// We clip the bottom slice before it so we can render our live Footer instead.
const FOOTER_TOP = 7200;

// Role → route map matching ProfileSwitcherModal ids
const ROLE_ROUTES: Record<string, string> = {
  "tenants-buyers": "/renter",
  "homeowners-sellers": "/homeowner",
  "agents-developers": "/agent",
  "property-manager": "/property-manager",
  "admin": "/admin",
};

// Walk up the DOM from a clicked element looking for text that matches a predicate
function findAncestorText(el: EventTarget | null, predicate: (text: string) => boolean): boolean {
  let node = el as HTMLElement | null;
  let depth = 0;
  while (node && depth < 8) {
    const text = node.textContent?.trim() ?? "";
    if (predicate(text)) return true;
    node = node.parentElement;
    depth++;
  }
  return false;
}

function AffiliatesBanner() {
  const navigate = useNavigate();
  const rewards = [
    { icon: <ShoppingBag size={16} />, label: "Tote bag", at: "3 refs" },
    { icon: <Ticket size={16} />, label: "Cinema ×2", at: "7 refs" },
    { icon: <Shirt size={16} />, label: "T-shirt", at: "15 refs" },
  ];

  return (
    <section className="bg-[#10182c] relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-[300px] h-[300px] rounded-full bg-[#c85212]/20 blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-16 left-0 w-[240px] h-[240px] rounded-full bg-[#fbff79]/10 blur-[60px] pointer-events-none" />

      <div className="relative max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 py-14 md:py-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left */}
          <div className="max-w-[560px]">
            <div className="flex items-center gap-2 mb-3">
              <Gift size={16} className="text-[#fbff79]" />
              <span className="text-[#fbff79] text-[12px] uppercase font-bold tracking-[2px]">Refer & Earn</span>
            </div>
            <h2 className="font-['Montserrat',sans-serif] font-bold text-white text-[26px] md:text-[34px] leading-[1.15] mb-3">
              Know someone looking for a home?<br />
              <span className="text-[#c85212]">Earn real rewards for the intro.</span>
            </h2>
            <p className="text-white/55 text-[15px] leading-relaxed">
              Invite friends to list or review on Apartey. Every qualifying action earns you a reward — tote bags, cinema tickets, t-shirts, and more.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">
            {/* Reward pills */}
            <div className="flex flex-wrap gap-2">
              {rewards.map(r => (
                <div key={r.label} className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3.5 py-2 text-white text-[13px]">
                  {r.icon}
                  <span className="font-bold">{r.label}</span>
                  <span className="text-white/45 text-[11px]">at {r.at}</span>
                </div>
              ))}
              <div className="flex items-center gap-1 text-white/40 text-[12px] px-1">+more</div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/earn")}
              className="inline-flex items-center gap-2 bg-[#fbff79] hover:bg-yellow-300 text-[#10182c] font-bold text-[15px] px-7 py-3.5 rounded-[12px] transition-colors whitespace-nowrap self-start lg:self-auto"
            >
              Learn more <ArrowRight size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LandingPage() {
  const navigate = useNavigate();
  const [scale, setScale] = useState(
    typeof window !== "undefined" ? window.innerWidth / NATIVE_WIDTH : 1
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState("tenants-buyers");

  useLayoutEffect(() => {
    const update = () => setScale(window.innerWidth / NATIVE_WIDTH);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const isSignIn = findAncestorText(e.target, (t) => /^sign\s*in$/i.test(t));
    const isSignUp = findAncestorText(e.target, (t) => /^sign\s*up$/i.test(t));
    const isReadReviews = findAncestorText(e.target, (t) => /read\s*(all\s*)?reviews/i.test(t));

    if (isSignIn || isSignUp) {
      e.preventDefault();
      e.stopPropagation();
      setModalOpen(true);
    } else if (isReadReviews) {
      e.preventDefault();
      e.stopPropagation();
      navigate("/reviews");
    }
  }, [navigate]);

  const handleRoleSelect = useCallback((roleId: string) => {
    setCurrentRole(roleId);
    const route = ROLE_ROUTES[roleId];
    if (route) navigate(route);
  }, [navigate]);

  return (
    <>
      {/* ── TOP SLICE: canvas from y=0 to y=LISTINGS_TOP ── */}
      <div
        style={{ height: LISTINGS_TOP * scale, width: "100%", overflow: "hidden" }}
        onClick={handleClick}
      >
        <div
          style={{
            width: NATIVE_WIDTH,
            height: NATIVE_HEIGHT,
            transformOrigin: "top left",
            transform: `scale(${scale})`,
            position: "relative",
          }}
        >
          <Component1 />
        </div>
      </div>

      {/* ── LIVE Featured Listings (with compare Scale icon) ── */}
      <FeaturedListings />

      {/* ── AFFILIATES PROMO BANNER ── */}
      <AffiliatesBanner />

      {/* ── BOTTOM SLICE: canvas from y=LISTINGS_BOTTOM to y=FOOTER_TOP ── */}
      <div
        style={{ height: (FOOTER_TOP - LISTINGS_BOTTOM) * scale, width: "100%", overflow: "hidden" }}
        onClick={handleClick}
      >
        <div
          style={{
            width: NATIVE_WIDTH,
            height: NATIVE_HEIGHT,
            transformOrigin: "top left",
            transform: `scale(${scale})`,
            position: "relative",
            marginTop: `-${LISTINGS_BOTTOM * scale}px`,
          }}
        >
          <Component1 />
        </div>
      </div>

      {/* ── LIVE FOOTER (replaces the Figma static footer) ── */}
      <Footer />

      {/* Profile / role switcher modal — triggered by Sign In or Sign Up */}
      <AnimatePresence>
        {modalOpen && (
          <ProfileSwitcherModal
            open={modalOpen}
            onOpenChange={setModalOpen}
            currentRole={currentRole}
            onRoleSelect={handleRoleSelect}
          />
        )}
      </AnimatePresence>
    </>
  );
}
