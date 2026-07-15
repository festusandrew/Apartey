import { motion, AnimatePresence } from "motion/react";
import { Home, KeyRound, HardHat, X, CheckCircle2, Shield, Building2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

interface ProfileRole {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
}

const profileRoles: ProfileRole[] = [
  {
    id: "tenants-buyers",
    name: "Renters & Buyers",
    icon: <Home className="w-6 h-6" />,
    description: "Find and secure your ideal home with confidence",
    features: [
      "Browse verified listings",
      "Read honest tenant reviews",
      "Book property inspections",
      "Compare neighbourhoods",
    ],
  },
  {
    id: "homeowners-sellers",
    name: "Homeowners & Sellers",
    icon: <KeyRound className="w-6 h-6" />,
    description: "List and manage your properties efficiently",
    features: [
      "List properties to verified users",
      "Track enquiries in real-time",
      "Manage viewings & bookings",
      "Get free property valuations",
    ],
  },
  {
    id: "agents-developers",
    name: "Agents & Developers",
    icon: <HardHat className="w-6 h-6" />,
    description: "Grow your property business with powerful tools",
    features: [
      "Access qualified leads",
      "Manage portfolio & CRM",
      "Market new developments",
      "Track analytics & conversions",
    ],
  },
  {
    id: "property-manager",
    name: "Property Manager",
    icon: <Building2 className="w-6 h-6" />,
    description: "Comprehensive property management and tenant services",
    features: [
      "Manage multiple properties",
      "Track maintenance requests",
      "Monitor rent collection",
      "Access pre-screened tenants",
    ],
  },
  {
    id: "admin",
    name: "Administrator",
    icon: <Shield className="w-6 h-6" />,
    description: "Manage platform operations and user oversight",
    features: [
      "Approve property listings",
      "Manage users & permissions",
      "Access all role dashboards",
      "Monitor platform analytics",
    ],
  },
];

interface ProfileSwitcherModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentRole: string;
  onRoleSelect: (roleId: string) => void;
}

export function ProfileSwitcherModal({
  open,
  onOpenChange,
  currentRole,
  onRoleSelect,
}: ProfileSwitcherModalProps) {
  const handleRoleSelect = (roleId: string) => {
    onRoleSelect(roleId);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[650px] bg-[#10182c] border-white/10 text-white p-0 overflow-hidden max-h-[85vh] flex flex-col">
        <DialogHeader className="px-5 pt-5 pb-3 border-b border-white/10 shrink-0">
          <DialogTitle className="text-[20px] font-['Montserrat',sans-serif] font-bold text-white">
            Switch Profile
          </DialogTitle>
          <DialogDescription className="text-white/60 font-['Mulish',sans-serif] mt-1 text-[13px]">
            Choose the profile that matches your current needs. You can switch anytime.
          </DialogDescription>
        </DialogHeader>

        <div className="px-5 py-4 space-y-2.5 overflow-y-auto flex-1">
          {profileRoles.map((role, index) => {
            const isActive = role.id === currentRole;
            return (
              <motion.button
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleRoleSelect(role.id)}
                className={`w-full text-left rounded-[12px] p-3.5 transition-all duration-300 border ${
                  isActive
                    ? "bg-[#c85212]/10 border-[#c85212]"
                    : "bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.06]"
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? "bg-[#c85212] text-white"
                        : "bg-white/5 text-white/60"
                    }`}
                  >
                    {role.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-['Montserrat',sans-serif] font-bold text-[15px] text-white">
                        {role.name}
                      </h3>
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                          }}
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#c85212]" />
                        </motion.div>
                      )}
                    </div>
                    <p className="font-['Mulish',sans-serif] text-white/50 text-[12px] mb-2">
                      {role.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {role.features.slice(0, 2).map((feature, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-white/5 rounded text-[10px] text-white/40 font-['Mulish',sans-serif]"
                        >
                          {feature}
                        </span>
                      ))}
                      {role.features.length > 2 && (
                        <span className="px-2 py-0.5 bg-white/5 rounded text-[10px] text-white/40 font-['Mulish',sans-serif]">
                          +{role.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        <div className="px-5 pb-4 pt-2 border-t border-white/10 shrink-0">
          <p className="text-[11px] text-white/40 font-['Mulish',sans-serif] text-center">
            Your data and preferences are saved across all profiles
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
