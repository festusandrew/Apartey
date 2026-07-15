import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "./AuthContext";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  Bell,
  ChevronDown,
  User,
  Settings,
  RefreshCw,
  LogOut,
  LogIn,
  UserPlus,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgApartey2 from "figma:asset/7d425bbf61d32feb50fb9bfbd3b2ace1146e5ed1.png";
import { ProfileSwitcherModal } from "./ProfileSwitcherModal";
import { toast } from "sonner@2.0.3";

interface SharedNavbarProps {
  activePage?: string;
  transparent?: boolean;
}

export function SharedNavbar({ activePage, transparent = false }: SharedNavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const { isSignedIn, signIn, signOut } = useAuth();
  const navigate = useNavigate();

  const handleRoleSwitch = (roleId: string) => {
    const roleRoutes: Record<string, { path: string; name: string }> = {
      "tenants-buyers": { path: "/renter", name: "Renter" },
      "homeowners-sellers": { path: "/homeowner", name: "Homeowner" },
      "agents-developers": { path: "/agent", name: "Agent" },
      "property-manager": { path: "/property-manager", name: "Property Manager" },
      "admin": { path: "/admin", name: "Administrator" },
    };

    const role = roleRoutes[roleId];
    if (role) {
      toast.success(`Switched to ${role.name} profile`, {
        description: "You now have access to role-specific features",
      });
      navigate(role.path);
    } else {
      toast.success("Profile switched successfully");
    }
    setProfileModalOpen(false);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Listings", href: "/listings" },
    { label: "Insights", href: "/insights" },
    { label: "Services", href: "/services" },
    { label: "Earn", href: "/earn" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <nav className={`relative z-50 ${transparent ? "" : "bg-[#10182c] border-b border-white/10"}`}>
      <div className="max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-1 shrink-0 cursor-pointer"
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
          </Link>

          {/* Desktop Nav Links */}
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
            {isSignedIn ? (
              <>
                <div className="relative w-[40px] h-[40px] items-center justify-center rounded-full bg-[rgba(255,255,255,0.32)] hover:bg-white/40 cursor-pointer transition-colors flex">
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
                    <DropdownMenuItem className="cursor-pointer focus:bg-white/10 focus:text-white">
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
                      onClick={() => signOut()}
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <div className="w-px h-[28px] bg-[rgba(255,255,255,0.53)] mx-1" />
                <button
                  onClick={() => signIn()}
                  className="flex items-center gap-1.5 text-white/80 font-['Mulish',sans-serif] text-[15px] tracking-[0.3px] hover:text-white transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Sign In</span>
                </button>
                <button onClick={() => signIn()}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 bg-white text-[#10182c] font-['Mulish',sans-serif] font-bold text-[15px] tracking-[0.3px] px-5 py-2.5 rounded-full cursor-pointer hover:bg-white/90 transition-colors"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Sign Up</span>
                  </motion.div>
                </button>
              </>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white/80 cursor-pointer"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-xl font-['Mulish',sans-serif] text-[15px] tracking-[0.38px] transition-colors ${
                      activePage === item.label
                        ? "bg-white text-[#10182c] font-bold"
                        : "text-white/80 hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-3 pt-3 border-t border-white/10">
                  {isSignedIn ? (
                    <>
                      <button
                        onClick={() => {
                          navigate("/profile");
                          setMobileOpen(false);
                        }}
                        className="flex-1 text-center py-3 bg-white/10 rounded-xl text-white font-['Mulish',sans-serif] text-[15px] flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
                      >
                        <User className="w-4 h-4" />
                        My Profile
                      </button>
                      <button
                        onClick={() => {
                          signOut();
                          setMobileOpen(false);
                        }}
                        className="flex-1 text-center py-3 border border-white/30 rounded-xl text-white font-['Mulish',sans-serif] text-[15px] hover:bg-white/5 transition-colors"
                      >
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          signIn();
                          setMobileOpen(false);
                        }}
                        className="flex-1 text-center py-3 border border-white/30 rounded-xl text-white font-['Mulish',sans-serif] text-[15px]"
                      >
                        Sign In
                      </button>
                      <button
                        onClick={() => {
                          signIn();
                          setMobileOpen(false);
                        }}
                        className="flex-1 text-center py-3 bg-white rounded-xl text-[#10182c] font-['Mulish',sans-serif] font-bold text-[15px]"
                      >
                        Sign Up
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ProfileSwitcherModal
        open={profileModalOpen}
        onOpenChange={setProfileModalOpen}
        currentRole=""
        onRoleSelect={handleRoleSwitch}
      />
    </nav>
  );
}
