import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  ChevronDown,
  LogOut,
  Coins,
  LayoutDashboard,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import imgApartey2 from "figma:asset/7d425bbf61d32feb50fb9bfbd3b2ace1146e5ed1.png";
import { useAuth } from "../AuthContext";

interface AffiliateNavbarProps {
  activePage?: string;
  transparent?: boolean;
}

/**
 * Navbar for the affiliate program pages. Completely independent from the
 * platform SharedNavbar — no platform links, no profile switcher, and it only
 * reads the separate affiliate account session.
 */
export function AffiliateNavbar({ activePage, transparent = false }: AffiliateNavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAffiliateSignedIn, affiliateSignOut, affiliateName } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { label: "Program", href: "/earn" },
    ...(isAffiliateSignedIn ? [{ label: "Dashboard", href: "/affiliate/dashboard" }] : []),
  ];

  const handleSignOut = () => {
    affiliateSignOut();
    setMobileOpen(false);
    navigate("/earn");
  };

  return (
    <nav className={`relative z-50 ${transparent ? "" : "bg-[#10182c] border-b border-white/10"}`}>
      <div className="max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo + affiliate badge */}
          <Link to="/earn" className="flex items-center gap-2 shrink-0 cursor-pointer">
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
            <span className="hidden sm:inline-flex items-center bg-[#c85212]/20 border border-[#c85212]/30 text-[#fbff79] text-[10px] font-black uppercase tracking-[2px] px-2.5 py-1 rounded-full">
              Affiliates
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center bg-[rgba(255,255,255,0.1)] backdrop-blur-sm border border-[rgba(255,255,255,0.15)] rounded-full px-2 py-1.5 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`rounded-full px-5 py-2 transition-all duration-300 cursor-pointer ${
                  activePage === item.label ? "bg-white" : "hover:bg-white/10"
                }`}
              >
                <span
                  className={`font-['Mulish',sans-serif] text-[15px] tracking-[0.3px] transition-colors duration-300 ${
                    activePage === item.label
                      ? "font-bold text-[#10182c]"
                      : "text-white/80"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Right side - Desktop */}
          <div className="hidden md:flex items-center gap-2 md:gap-3">
            {isAffiliateSignedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 bg-[rgba(255,255,255,0.32)] hover:bg-white/40 h-[44px] rounded-full pl-2 pr-3 cursor-pointer transition-colors group outline-none">
                  <div className="w-[32px] h-[32px] rounded-full bg-[#c85212] flex items-center justify-center text-white text-[13px] font-black shrink-0">
                    {affiliateName ? affiliateName.charAt(0).toUpperCase() : <Coins className="w-4 h-4" />}
                  </div>
                  <span className="font-['Mulish',sans-serif] font-bold text-white text-[14px] max-w-[110px] truncate">
                    {affiliateName ? affiliateName.split(" ")[0] : "Affiliate"}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-white/70 group-hover:text-white transition-colors" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-52 bg-[#10182c] border-white/15 text-white"
                  sideOffset={8}
                  align="end"
                >
                  <DropdownMenuItem
                    className="cursor-pointer focus:bg-white/10 focus:text-white"
                    onClick={() => navigate("/affiliate/dashboard")}
                  >
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Affiliate Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-white/15" />
                  <DropdownMenuItem
                    className="cursor-pointer focus:bg-[#c85212]/20 focus:text-[#fbff79]"
                    onClick={handleSignOut}
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link
                  to="/affiliate/signin"
                  className="px-5 py-2.5 rounded-full text-white/85 hover:text-white font-['Mulish',sans-serif] font-bold text-[14px] transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/affiliate/signup"
                  className="px-5 py-2.5 rounded-full bg-[#c85212] hover:bg-[#a8440f] text-white font-['Mulish',sans-serif] font-bold text-[14px] transition-colors"
                >
                  Join
                </Link>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden w-[44px] h-[44px] flex items-center justify-center rounded-full bg-white/10 text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-xl font-['Mulish',sans-serif] text-[15px] transition-colors ${
                      activePage === item.label
                        ? "bg-white text-[#10182c] font-bold"
                        : "text-white/80 hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="mt-3 pt-3 border-t border-white/10">
                  {isAffiliateSignedIn ? (
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          navigate("/affiliate/dashboard");
                          setMobileOpen(false);
                        }}
                        className="flex-1 text-center py-3 bg-white/10 rounded-xl text-white font-['Mulish',sans-serif] text-[15px] flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
                      >
                        <LayoutDashboard className="w-4 h-4" />
                        Dashboard
                      </button>
                      <button
                        onClick={handleSignOut}
                        className="flex-1 text-center py-3 border border-white/30 rounded-xl text-white font-['Mulish',sans-serif] text-[15px] hover:bg-white/5 transition-colors"
                      >
                        Sign Out
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          navigate("/affiliate/signin");
                          setMobileOpen(false);
                        }}
                        className="flex-1 text-center py-3 border border-white/30 rounded-xl text-white font-['Mulish',sans-serif] text-[15px]"
                      >
                        Sign In
                      </button>
                      <button
                        onClick={() => {
                          navigate("/affiliate/signup");
                          setMobileOpen(false);
                        }}
                        className="flex-1 text-center py-3 bg-[#c85212] rounded-xl text-white font-['Mulish',sans-serif] font-bold text-[15px]"
                      >
                        Join
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
