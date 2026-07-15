import { useState, useEffect, useRef, useCallback } from "react";
import imgApartey2 from "figma:asset/7d425bbf61d32feb50fb9bfbd3b2ace1146e5ed1.png";
import {
  Search,
  MapPin,
  Menu,
  X,
  Bell,
  ChevronDown,
  LogIn,
  UserPlus,
  Home,
  Building2,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Plus,
  KeyRound,
  HardHat,
  User,
  Settings,
  RefreshCw,
  LogOut,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProfileSwitcherModal } from "./ProfileSwitcherModal";
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { toast } from "sonner@2.0.3";

/* ─── Slide Data ─── */
interface HeroSlide {
  id: string;
  persona: string;
  personaIcon: React.ReactNode;
  headingLine1: string;
  headingLine2: string;
  subtitle: string;
  guestSubtitle: string;
  /* Signed-in: role-specific search + CTAs */
  searchPlaceholders: string[];
  primaryCTA: string;
  secondaryCTA: string;
  image: string;
  brightHero?: boolean; // bright background — use dark text for contrast
  stats: { value: string; label: string }[];
}

/* ─── Shared guest experience (consistent across all tabs) ─── */
const guestSearch = {
  placeholders: [
    "Search by address, neighbourhood, or city...",
    "Try 'Kalamaja, Tallinn'",
    "Try 'Lekki Phase 1, Lagos'",
    "Try 'Kesklinn, Tartu'",
    "Try 'Victoria Island, Lagos'",
  ],
  primaryCTA: "Search Properties",
  secondaryCTA: "Read Reviews",
};

const heroSlides: HeroSlide[] = [
  {
    id: "tenants-buyers",
    persona: "Tenants & Buyers",
    personaIcon: <Home className="w-4 h-4" />,
    headingLine1: "Find Your Perfect",
    headingLine2: "Place to Call Home",
    subtitle:
      "Search verified listings by location, read real tenant reviews, compare neighbourhood safety scores, and book inspections — use the search bar below or tap Listings in the nav bar to browse by area, price, or type. To revisit your saved searches, shortlisted homes, and viewing history, tap your avatar in the top-right and select View Profile. New listing matches and inspection confirmations will appear in your notification bell.",
    guestSubtitle:
      "Discover your next home through the eyes of real tenants. Read verified reviews on homeowners, buildings, and neighbourhoods before you commit — compare safety scores, amenities, and rental prices across thousands of listings to find a place that truly fits your lifestyle and budget.",
    searchPlaceholders: [
      "Search by address, neighbourhood, or city...",
      "Try 'Kalamaja, Tallinn'",
      "Try 'Lekki Phase 1, Lagos'",
      "Try 'Kesklinn, Tartu'",
      "Try 'Victoria Island, Lagos'",
    ],
    primaryCTA: "Browse Listings",
    secondaryCTA: "Book Inspection",
    image:
      "https://images.unsplash.com/photo-1771544597107-8e8d57a3e1b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBzdWJ1cmJhbiUyMGhvbWUlMjBleHRlcmlvciUyMHN1bm55JTIwZGF5JTIwcmVhbCUyMGVzdGF0ZXxlbnwxfHx8fDE3NzI1NTEyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    brightHero: true,
    stats: [
      { value: "50K+", label: "Verified Reviews" },
      { value: "12K+", label: "Properties Listed" },
      { value: "4.8", label: "Avg. Trust Score" },
    ],
  },
  {
    id: "homeowners-sellers",
    persona: "Homeowners & Sellers",
    personaIcon: <KeyRound className="w-4 h-4" />,
    headingLine1: "Your Property,",
    headingLine2: "Maximum Exposure",
    subtitle:
      "List properties with photos and your own terms, track live enquiries, schedule viewings, and request free market valuations. To manage everything, tap your avatar in the top-right and select View Profile to open your Owner Dashboard — where you'll find your active listings, occupancy analytics, viewing schedules, and tenant feedback all in one place. New enquiry alerts and viewing requests will show up in your notification bell.",
    guestSubtitle:
      "Get your property in front of millions of verified renters and buyers. Professional listing tools, free market valuations, and built-in viewing management help you fill vacancies faster and attract quality tenants — all without the hassle of traditional agency fees.",
    searchPlaceholders: [
      "Enter your property address to get started...",
      "Try 'Pärnu mnt 15, Tallinn'",
      "Try 'Banana Island, Ikoyi'",
      "Try 'Rävala pst 8, Tallinn'",
      "Try 'Maitama, Abuja'",
    ],
    primaryCTA: "List Your Property",
    secondaryCTA: "Get Free Valuation",
    image:
      "https://images.unsplash.com/photo-1757262798677-ab4af4455a58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3IlMjBicmlnaHQlMjBsaXZpbmclMjBzcGFjZXxlbnwxfHx8fDE3NzA2ODc1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stats: [
      { value: "3.2M", label: "Monthly Visitors" },
      { value: "97%", label: "Occupancy Rate" },
      { value: "14 Days", label: "Avg. Time to Let" },
    ],
  },
  {
    id: "agents-developers",
    persona: "Agents & Developers",
    personaIcon: <HardHat className="w-4 h-4" />,
    headingLine1: "Grow Your",
    headingLine2: "Property Business",
    subtitle:
      "Manage your full property portfolio, access qualified leads, track every client interaction through the built-in CRM, and market new developments to targeted audiences. Tap your avatar in the top-right and select View Profile to open your Agency Dashboard — with lead scoring, conversion reports, and performance analytics. For live market data and pricing trends to advise clients, head to the Insights tab in the nav bar.",
    guestSubtitle:
      "Scale your property business with tools built for professionals. Access qualified leads, manage portfolios at scale, and market new developments to targeted audiences — backed by real-time analytics, conversion tracking, and a CRM designed for the modern real estate workflow.",
    searchPlaceholders: [
      "Search properties in your portfolio...",
      "Try 'Põhja-Tallinn, Tallinn'",
      "Try 'Ikeja GRA, Lagos'",
      "Try 'Pirita, Tallinn'",
      "Try 'Asokoro, Abuja'",
    ],
    primaryCTA: "Register Your Agency",
    secondaryCTA: "Access Dashboard",
    image:
      "https://images.unsplash.com/photo-1763561613211-0d0e79107404?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnbGFzcyUyMHNreXNjcmFwZXIlMjBjbGVhciUyMGJsdWUlMjBza3klMjBjb21tZXJjaWFsJTIwcHJvcGVydHklMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzE0MTk2NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stats: [
      { value: "8K+", label: "Active Agents" },
      { value: "340K+", label: "Leads Generated" },
      { value: "28%", label: "Avg. Conversion" },
    ],
  },
];

const SLIDE_DURATION = 7000;

export function HeroSection() {
  const { isSignedIn, signIn, signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [currentRole, setCurrentRole] = useState("tenants-buyers"); // Track current user role
  const [profileModalOpen, setProfileModalOpen] = useState(false); // Profile switcher modal

  // Carousel state
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(Date.now());

  // Search state
  const [searchValue, setSearchValue] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // When signed in, show content based on currentRole, not activeSlide
  const currentSlide = isSignedIn
    ? heroSlides.find((slide) => slide.id === currentRole) || heroSlides[0]
    : heroSlides[activeSlide];

  // Handle role switching
  const handleRoleSwitch = (roleId: string) => {
    setCurrentRole(roleId);
    // Find the index of the role and update activeSlide to keep UI in sync
    const roleIndex = heroSlides.findIndex((slide) => slide.id === roleId);
    if (roleIndex !== -1) {
      setActiveSlide(roleIndex);
    }
    const roleName = heroSlides.find((s) => s.id === roleId)?.persona || "role";
    toast.success(`Switched to ${roleName} profile`, {
      description: "You now have access to role-specific features",
    });

    // Navigate to the appropriate dashboard
    const roleRoutes: Record<string, string> = {
      "tenants-buyers": "/renter",
      "homeowners-sellers": "/homeowner",
      "agents-developers": "/agent",
      "property-manager": "/property-manager",
      "admin": "/admin",
    };
    const targetRoute = roleRoutes[roleId];
    if (targetRoute) {
      navigate(targetRoute);
    }
  };

  // Resolve search placeholders and CTAs based on auth state
  const activePlaceholders = isSignedIn
    ? currentSlide.searchPlaceholders
    : guestSearch.placeholders;
  const activePrimaryCTA = isSignedIn
    ? currentSlide.primaryCTA
    : guestSearch.primaryCTA;
  const activeSecondaryCTA = isSignedIn
    ? currentSlide.secondaryCTA
    : guestSearch.secondaryCTA;

  // Cycle placeholder text
  useEffect(() => {
    setPlaceholderIndex(0);
    const interval = setInterval(() => {
      setPlaceholderIndex(
        (prev) => (prev + 1) % activePlaceholders.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [activeSlide, activePlaceholders.length, isSignedIn]);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-advance carousel (disabled)
  // useEffect(() => {
  //   if (isPaused) {
  //     if (progressRef.current) cancelAnimationFrame(progressRef.current);
  //     return;
  //   }
  //   lastTimeRef.current = Date.now();
  //   const startProgress = progress;
  //   const tick = () => {
  //     const now = Date.now();
  //     const elapsed = now - lastTimeRef.current;
  //     const newProgress = startProgress + (elapsed / SLIDE_DURATION) * 100;
  //     if (newProgress >= 100) {
  //       setProgress(0);
  //       setDirection(1);
  //       setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  //     } else {
  //       setProgress(newProgress);
  //       progressRef.current = requestAnimationFrame(tick);
  //     }
  //   };
  //   progressRef.current = requestAnimationFrame(tick);
  //   return () => {
  //     if (progressRef.current) cancelAnimationFrame(progressRef.current);
  //   };
  // }, [isPaused, activeSlide, progress]);

  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > activeSlide ? 1 : -1);
      setActiveSlide(index);
      setProgress(0);
    },
    [activeSlide]
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    setProgress(0);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setActiveSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
    setProgress(0);
  }, []);

  const navItems = ["Home", "Listings", "Insights", "About", "Blog"];
  const sectionIds: Record<string, string> = {
    Home: "hero",
    Listings: "listings",
    Insights: "insights",
    Blog: "blog",
  };

  const navigate = useNavigate();

  const handleNavClick = (item: string) => {
    if (item === "About") {
      navigate("/about");
      return;
    }
    if (item === "Blog") {
      navigate("/blog");
      return;
    }
    if (item === "Insights") {
      navigate("/insights");
      return;
    }
    if (item === "Listings") {
      navigate("/listings");
      return;
    }
    setActiveNav(item);
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionIds[item] || "");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Animation variants
  const bgVariants = {
    enter: { opacity: 0, scale: 1.06 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.02 },
  };

  const contentVariants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
  };

  return (
    <div
      id="hero"
      className="relative w-full min-h-[650px] md:min-h-[720px] lg:min-h-[800px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ─── Background Images with Crossfade ─── */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide.id}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={currentSlide.image}
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay — conditionally lighter for bright hero slides */}
          {currentSlide.brightHero ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10182c]/80 via-[#10182c]/20 to-transparent" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-[#10182c]/85 via-[#10182c]/55 to-[#10182c]/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10182c]/70 via-transparent to-[#10182c]/30" />
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* ─── Navigation Bar ─── */}
      <motion.div
        className={`${scrolled ? "fixed top-0 left-0 right-0 bg-[#10182c]/90 backdrop-blur-lg shadow-lg" : "relative"} z-50 transition-all duration-300`}
        initial={false}
      >
        <div className="max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 py-4 md:py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center gap-1 shrink-0 cursor-pointer"
              onClick={() => handleNavClick("Home")}
            >
              <div className="w-[50px] h-[40px] md:w-[70px] md:h-[55px] overflow-hidden relative">
                <img
                  src={imgApartey2}
                  alt="Apartey"
                  className="absolute h-[320%] left-[-17%] top-[-110%] w-[131%] max-w-none"
                />
              </div>
              <span className="font-['Poppins',sans-serif] font-bold text-white text-[20px] md:text-[28px] not-italic">
                apartey
              </span>
            </div>

            {/* Nav Links - Desktop */}
            <div className="hidden md:flex items-center bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-2 py-1.5 gap-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`rounded-full px-5 py-2 transition-all duration-300 cursor-pointer ${
                    activeNav === item ? "bg-white" : "hover:bg-white/10"
                  }`}
                >
                  <span
                    className={`font-['Mulish',sans-serif] text-[14px] tracking-[0.3px] transition-colors duration-300 ${
                      activeNav === item
                        ? "font-bold text-[#10182c]"
                        : "text-white/80"
                    }`}
                  >
                    {item}
                  </span>
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2 md:gap-3">
              {isSignedIn ? (
                <>
                  <div className="hidden md:flex relative w-[40px] h-[40px] items-center justify-center rounded-full bg-[rgba(255,255,255,0.32)] hover:bg-white/40 cursor-pointer transition-colors">
                    <Bell className="w-[18px] h-[18px] text-white" />
                    <span className="absolute top-[6px] right-[6px] w-[8px] h-[8px] bg-[#c85212] rounded-full shadow-[0px_0px_0px_0px_#10182c]" />
                  </div>
                  <div className="hidden lg:block w-px h-[28px] bg-[rgba(255,255,255,0.53)] mx-1" />
                  <DropdownMenu>
                    <DropdownMenuTrigger className="hidden lg:flex items-center gap-[10px] bg-[rgba(255,255,255,0.32)] hover:bg-white/40 h-[44px] w-[74px] rounded-full pl-[6px] cursor-pointer transition-colors group outline-none">
                      <div className="w-[32px] h-[32px] rounded-full overflow-hidden shadow-[0px_0px_0px_2px_rgba(255,255,255,0.4)] transition-all">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1584800526920-35d8a0409deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90JTIwYXZhdGFyfGVufDF8fHx8MTc3MDMzMTMyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="User"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <ChevronDown className="w-3.5 h-3.5 text-white/70 group-hover:text-white transition-colors mr-2" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-52 bg-[#10182c] border-white/15 text-white"
                      sideOffset={8}
                      align="end"
                    >
                      <DropdownMenuItem
                        className="cursor-pointer focus:bg-white/10 focus:text-white"
                        onClick={() => navigate('/profile')}
                      >
                        <User className="w-4 h-4 mr-2" />
                        View Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="cursor-pointer focus:bg-white/10 focus:text-white"
                        onClick={() => toast.info("Settings clicked")}
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Settings
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-white/15" />
                      <DropdownMenuItem
                        className="cursor-pointer focus:bg-[#c85212]/20 focus:text-[#fbff79]"
                        onClick={() => setProfileModalOpen(true)}
                      >
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Switch Profile
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-white/15" />
                      <DropdownMenuItem
                        className="cursor-pointer focus:bg-white/10 focus:text-white"
                        onClick={() => {
                          signOut();
                        }}
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <button
                    className="hidden md:flex lg:hidden items-center gap-1.5 text-white font-['Mulish',sans-serif] text-[14px] tracking-[0.3px] bg-white/10 hover:bg-white/20 rounded-full px-4 py-2.5 cursor-pointer transition-colors"
                    onClick={() => signOut()}
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </>
              ) : (
                <>
                  <div className="hidden lg:block w-px h-[28px] bg-white/20" />
                  <button
                    onClick={() => signIn()}
                    className="hidden md:flex items-center gap-1.5 text-white/80 font-['Mulish',sans-serif] text-[14px] tracking-[0.3px] hover:text-[#fbff79] cursor-pointer transition-colors"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Sign In</span>
                  </button>
                  <button 
                    onClick={() => signIn()}
                  >
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="hidden md:flex items-center gap-2 bg-white text-[#10182c] font-['Mulish',sans-serif] font-bold text-[14px] tracking-[0.3px] px-5 py-2.5 rounded-full cursor-pointer hover:bg-white/90 transition-colors"
                    >
                      <UserPlus className="w-4 h-4" />
                      <span>Sign Up</span>
                    </motion.div>
                  </button>
                </>
              )}

              <button
                className="md:hidden w-[40px] h-[40px] bg-white/15 hover:bg-white/25 rounded-full flex items-center justify-center cursor-pointer transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ─── Mobile Menu ─── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-[#10182c]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-2">
              {navItems.map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => handleNavClick(item)}
                  className={`text-left px-4 py-3 rounded-xl transition-colors ${
                    activeNav === item
                      ? "bg-[#c85212] text-white"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <span className="font-['Mulish',sans-serif] text-[18px] tracking-[0.4px]">
                    {item}
                  </span>
                </motion.button>
              ))}
              <div className="mt-4 pt-4 border-t border-white/20 flex flex-col gap-3">
                {isSignedIn ? (
                  <>
                    <button 
                      onClick={() => {
                        navigate("/profile");
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-3 w-full text-left p-2 hover:bg-white/10 rounded-xl transition-colors"
                    >
                      <div className="w-[36px] h-[36px] rounded-full overflow-hidden ring-2 ring-white/30 shrink-0">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1584800526920-35d8a0409deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90JTIwYXZhdGFyfGVufDF8fHx8MTc3MDMzMTMyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="User"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="font-['Mulish',sans-serif] text-white text-[16px] font-bold">
                        My Profile
                      </span>
                    </button>
                    <button
                      onClick={() => {
                        signOut();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full border border-white/30 text-white font-['Mulish',sans-serif] text-[15px] px-5 py-3 rounded-full flex items-center justify-center gap-2"
                    >
                      <LogIn className="w-4 h-4" />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        signIn();
                      }}
                      className="w-full border border-white/30 text-white font-['Mulish',sans-serif] text-[15px] px-5 py-3 rounded-full flex items-center justify-center gap-2"
                    >
                      <LogIn className="w-4 h-4" />
                      Sign In
                    </button>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        signIn();
                      }}
                      className="w-full bg-white text-[#10182c] font-['Mulish',sans-serif] text-[15px] px-5 py-3 rounded-full flex items-center justify-center gap-2"
                    >
                      <UserPlus className="w-4 h-4" />
                      Sign Up Free
                    </button>
                  </>
                )}
                <button className="w-full bg-[#c85212] text-white font-['Mulish',sans-serif] text-[15px] px-5 py-3 rounded-full flex items-center justify-center gap-2">
                  <Plus className="w-4 h-4" />
                  List Property
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Hero Content: Left-Aligned Layout ─── */}
      <div
        className={`relative z-10 max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 ${scrolled ? "pt-24 md:pt-28" : "pt-6 md:pt-10 lg:pt-14"} pb-0 flex flex-col justify-between`}
        style={{ minHeight: "calc(100% - 80px)" }}
      >
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key="static-hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[720px]"
            >
              <div className="font-['Montserrat',sans-serif] font-bold leading-[1.05] tracking-[-1.5px]">
                <p
                  className={`text-[32px] md:text-[48px] lg:text-[64px] transition-colors duration-700 ${currentSlide.brightHero ? "text-[#10182c] drop-shadow-[0_2px_8px_rgba(255,255,255,0.5)]" : "text-white"}`}
                >
                  Real People.
                </p>
                <p
                  className={`text-[32px] md:text-[48px] lg:text-[64px] transition-colors duration-700 ${currentSlide.brightHero ? "text-[#c85212] drop-shadow-[0_2px_8px_rgba(255,255,255,0.6)]" : "text-[#c85212]"}`}
                >
                  Real Experiences.
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ─── Bottom Bar: Persona Tabs + Stats + Navigation ─── */}
        <div className="mt-8 md:mt-10 pb-6 md:pb-8">
          {/* Frosted glass bottom panel */}
          <div className="bg-white/[0.07] backdrop-blur-md border border-white/[0.12] rounded-2xl md:rounded-3xl p-4 md:p-5 lg:p-6">
            {/* Top row: Persona Tabs + Navigation Controls */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
              {/* Persona Selector Tabs */}
              <div className="flex items-center gap-1 bg-white/[0.06] rounded-full p-1 md:p-1.5 w-full md:w-auto overflow-x-auto">
                {heroSlides.map((slide, i) => (
                  <motion.button
                    key={slide.id}
                    onClick={() => goToSlide(i)}
                    whileHover={activeSlide !== i ? { backgroundColor: "rgba(255,255,255,0.08)" } : {}}
                    whileTap={{ scale: 0.97 }}
                    className={`relative flex items-center gap-2 rounded-full px-4 md:px-5 py-2.5 md:py-2.5 cursor-pointer transition-all duration-400 whitespace-nowrap flex-1 md:flex-none justify-center ${
                      activeSlide === i
                        ? "text-[#10182c]"
                        : "text-white/60 hover:text-white/80"
                    }`}
                  >
                    {activeSlide === i && (
                      <motion.div
                        layoutId="persona-pill"
                        className="absolute inset-0 bg-white rounded-full shadow-sm"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <span
                        className={`transition-colors duration-300 ${
                          activeSlide === i
                            ? "text-[#c85212]"
                            : "text-white/40"
                        }`}
                      >
                        {slide.personaIcon}
                      </span>
                      <span
                        className={`font-['Mulish',sans-serif] text-[13px] md:text-[14px] tracking-[0.2px] transition-all duration-300 ${
                          activeSlide === i ? "font-bold" : ""
                        }`}
                      >
                        {slide.persona}
                      </span>
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Navigation Controls */}
              <div className="hidden md:flex items-center gap-3">
                <button
                  onClick={goPrev}
                  className="w-[36px] h-[36px] md:w-[38px] md:h-[38px] rounded-full border border-white/15 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors group"
                >
                  <ChevronLeft className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </button>
                <div className="flex items-center gap-1.5">
                  {heroSlides.map((slide, i) => (
                    <button
                      key={slide.id}
                      onClick={() => goToSlide(i)}
                      className="relative h-[3px] md:h-[4px] rounded-full overflow-hidden cursor-pointer transition-all duration-500"
                      style={{
                        width: activeSlide === i ? "48px" : "20px",
                        backgroundColor:
                          activeSlide === i
                            ? "rgba(255,255,255,0.15)"
                            : "rgba(255,255,255,0.1)",
                      }}
                    >
                      {activeSlide === i && (
                        <motion.div
                          className="absolute inset-y-0 left-0 rounded-full bg-[#c85212]"
                          style={{ width: `${progress}%` }}
                        />
                      )}
                      {activeSlide !== i && i < activeSlide && (
                        <div className="absolute inset-0 rounded-full bg-white/30" />
                      )}
                    </button>
                  ))}
                </div>
                <button
                  onClick={goNext}
                  className="w-[36px] h-[36px] md:w-[38px] md:h-[38px] rounded-full border border-white/15 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors group"
                >
                  <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/[0.08] my-4 md:my-5" />

            {/* Middle row: Animated Description + Search + CTAs */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`panel-content-${currentSlide.id}-${isSignedIn ? "auth" : "guest"}`}
                custom={direction}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-4 md:gap-5"
              >
                {/* Description */}
                <p className="font-['Mulish',sans-serif] text-white/65 text-[13px] md:text-[15px] tracking-[0.2px] max-w-[600px] leading-[1.65]">
                  {isSignedIn ? currentSlide.subtitle : currentSlide.guestSubtitle}
                </p>

                {/* Search Bar + CTA row */}
                <div className="flex flex-col md:flex-row items-stretch gap-3">
                  {/* Search Bar */}
                  <div className="flex-1 min-w-0">
                    <div
                      className={`bg-white/95 backdrop-blur-md rounded-xl h-[50px] md:h-[54px] flex items-center relative px-4 transition-all duration-300 shadow-[0_2px_16px_rgba(0,0,0,0.15)] ${
                        searchFocused
                          ? "ring-2 ring-[#c85212] shadow-[0_2px_24px_rgba(200,82,18,0.15)]"
                          : ""
                      }`}
                    >
                      <MapPin
                        className={`w-[17px] h-[17px] shrink-0 transition-colors duration-300 ${searchFocused ? "text-[#c85212]" : "text-[#10182c]/35"}`}
                      />
                      <input
                        ref={inputRef}
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setSearchFocused(true)}
                        onBlur={() => setSearchFocused(false)}
                        placeholder={
                          activePlaceholders[placeholderIndex]
                        }
                        className="flex-1 bg-transparent border-none outline-none font-['Mulish',sans-serif] text-[#10182c] text-[13px] md:text-[14px] tracking-[0.2px] placeholder:text-[#10182c]/30 ml-3 mr-[60px] md:mr-[70px]"
                      />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#c85212] rounded-lg w-[50px] md:w-[60px] h-[38px] md:h-[42px] flex items-center justify-center cursor-pointer hover:bg-[#a84410] transition-colors"
                      >
                        <Search className="w-[18px] h-[18px] text-white" />
                      </motion.button>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-2.5 shrink-0">
                    <motion.button
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 6px 24px rgba(200,82,18,0.35)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-[#c85212] text-white font-['Mulish',sans-serif] font-bold text-[13px] md:text-[14px] px-5 md:px-6 py-3 md:py-3.5 rounded-xl leading-[1.02] cursor-pointer transition-colors hover:bg-[#a84410] whitespace-nowrap"
                    >
                      {activePrimaryCTA}
                    </motion.button>
                    <motion.button
                      whileHover={{
                        scale: 1.02,
                        backgroundColor: "rgba(255,255,255,0.12)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="border border-white/35 text-white font-['Mulish',sans-serif] font-bold text-[13px] md:text-[14px] px-5 md:px-6 py-3 md:py-3.5 rounded-xl leading-[1.02] cursor-pointer backdrop-blur-sm hover:border-white/55 transition-all whitespace-nowrap"
                    >
                      {activeSecondaryCTA}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Divider */}
            <div className="w-full h-px bg-white/[0.08] my-4 md:my-5" />

            {/* Bottom row: Stats + Mobile Nav */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Stats Row */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`stats-${currentSlide.id}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-5 md:gap-8"
                >
                  {currentSlide.stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <span className="font-['Montserrat',sans-serif] font-bold text-white text-[18px] md:text-[22px] lg:text-[24px] tracking-[-0.5px] leading-none">
                          {stat.value}
                        </span>
                        <span className="font-['Mulish',sans-serif] text-white/40 text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.5px] uppercase mt-0.5">
                          {stat.label}
                        </span>
                      </div>
                      {i < currentSlide.stats.length - 1 && (
                        <div className="w-px h-[24px] bg-white/10 ml-1" />
                      )}
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Mobile Navigation Controls */}
              <div className="flex md:hidden items-center gap-3 justify-center">
                <button
                  onClick={goPrev}
                  className="w-[36px] h-[36px] rounded-full border border-white/15 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors group"
                >
                  <ChevronLeft className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </button>
                <div className="flex items-center gap-1.5">
                  {heroSlides.map((slide, i) => (
                    <button
                      key={slide.id}
                      onClick={() => goToSlide(i)}
                      className="relative h-[3px] rounded-full overflow-hidden cursor-pointer transition-all duration-500"
                      style={{
                        width: activeSlide === i ? "40px" : "16px",
                        backgroundColor:
                          activeSlide === i
                            ? "rgba(255,255,255,0.15)"
                            : "rgba(255,255,255,0.1)",
                      }}
                    >
                      {activeSlide === i && (
                        <motion.div
                          className="absolute inset-y-0 left-0 rounded-full bg-[#c85212]"
                          style={{ width: `${progress}%` }}
                        />
                      )}
                      {activeSlide !== i && i < activeSlide && (
                        <div className="absolute inset-0 rounded-full bg-white/30" />
                      )}
                    </button>
                  ))}
                </div>
                <button
                  onClick={goNext}
                  className="w-[36px] h-[36px] rounded-full border border-white/15 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors group"
                >
                  <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Profile Switcher Modal ─── */}
      <ProfileSwitcherModal
        open={profileModalOpen}
        onOpenChange={setProfileModalOpen}
        currentRole={currentRole}
        onRoleSelect={handleRoleSwitch}
      />
    </div>
  );
}