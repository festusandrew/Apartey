import { useState } from "react";
import { motion } from "motion/react";
import {
  Home,
  KeyRound,
  HardHat,
  Check,
  ArrowRight,
  Users,
  TrendingUp,
  Shield,
} from "lucide-react";
import { useNavigate } from "react-router";
import { toast } from "sonner@2.0.3";
import { AuthLayout } from "./AuthLayout";

const roles = [
  {
    id: "renter",
    label: "Renter / Buyer",
    icon: Home,
    tagIcon: Users,
    tagText: "Most popular",
    description: "Browse verified listings, read real tenant reviews, and find your next home with confidence.",
    color: "#c85212",
  },
  {
    id: "homeowner",
    label: "Homeowner / Seller",
    icon: KeyRound,
    tagIcon: TrendingUp,
    tagText: "High demand",
    description: "List your property, track enquiries, manage viewings, and earn trust through transparent reviews.",
    color: "#2563eb",
  },
  {
    id: "developer",
    label: "Agent / Developer",
    icon: HardHat,
    tagIcon: Shield,
    tagText: "Pro tools",
    description: "Manage portfolios at scale, access qualified leads, and leverage analytics for better conversions.",
    color: "#059669",
  },
];

export function RoleSelectPage() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    if (!selectedRole) {
      toast.error("Please select a role");
      return;
    }
    if (!agreed) {
      toast.error("Please agree to the terms");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    toast.success("Profile set up successfully!");
    navigate("/verify-email");
  };

  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <AuthLayout>
      <motion.div
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
        }}
        initial="hidden"
        animate="show"
        className="flex flex-col"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-7 text-center">
          <h1 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[26px] sm:text-[30px] leading-[1.15] tracking-[-0.5px]">
            Let's get started
          </h1>
          <p className="font-['Mulish',sans-serif] text-[#7f8694] text-[14px] sm:text-[15px] mt-2.5 tracking-[0.1px] leading-[1.55]">
            Tell us about yourself so we can tailor your experience
          </p>
        </motion.div>

        {/* Label */}
        <motion.div variants={item} className="mb-3">
          <label className="font-['Mulish',sans-serif] font-bold text-[#3d4554] text-[13px] tracking-[0.2px]">
            I am a
          </label>
        </motion.div>

        {/* Role cards */}
        <motion.div variants={item} className="flex flex-col gap-2.5 mb-6">
          {roles.map((role) => {
            const isSelected = selectedRole === role.id;
            return (
              <motion.button
                key={role.id}
                type="button"
                onClick={() => setSelectedRole(role.id)}
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.998 }}
                className={`relative w-full rounded-xl border p-4 text-left cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "border-[#c85212] bg-[#c85212]/[0.03] shadow-[0_0_0_3px_rgba(200,82,18,0.06)]"
                    : "border-[#e2e5ea] bg-white hover:border-[#cad0d9] hover:bg-[#fafbfc]"
                }`}
              >
                <div className="flex items-start gap-3.5">
                  {/* Radio */}
                  <div
                    className={`w-[18px] h-[18px] mt-0.5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                      isSelected
                        ? "border-[#c85212] bg-[#c85212]"
                        : "border-[#d0d3da]"
                    }`}
                  >
                    {isSelected && <Check className="w-2.5 h-2.5 text-white" />}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <role.icon
                        className={`w-4 h-4 shrink-0 ${
                          isSelected ? "text-[#c85212]" : "text-[#a0a8b4]"
                        }`}
                      />
                      <span className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[14px] tracking-[0.1px]">
                        {role.label}
                      </span>
                      {/* Tag */}
                      <span
                        className="ml-auto flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-['Mulish',sans-serif] font-bold tracking-[0.2px]"
                        style={{
                          backgroundColor: `${role.color}0D`,
                          color: role.color,
                        }}
                      >
                        <role.tagIcon className="w-3 h-3" />
                        {role.tagText}
                      </span>
                    </div>
                    <p className="font-['Mulish',sans-serif] text-[#7f8694] text-[13px] leading-[1.55] tracking-[0.1px]">
                      {role.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Terms */}
        <motion.div
          variants={item}
          className="flex items-start gap-2.5 mb-6"
        >
          <button
            type="button"
            onClick={() => setAgreed(!agreed)}
            className={`w-[18px] h-[18px] mt-0.5 shrink-0 rounded-md border-2 flex items-center justify-center cursor-pointer transition-all ${
              agreed
                ? "bg-[#c85212] border-[#c85212]"
                : "border-[#d0d3da] hover:border-[#c85212]"
            }`}
          >
            {agreed && <Check className="w-2.5 h-2.5 text-white" />}
          </button>
          <p className="font-['Mulish',sans-serif] text-[#7f8694] text-[13px] leading-[1.55] tracking-[0.1px]">
            I agree to the{" "}
            <span className="text-[#c85212] font-bold cursor-pointer hover:underline">
              Terms of Use
            </span>{" "}
            and{" "}
            <span className="text-[#c85212] font-bold cursor-pointer hover:underline">
              Privacy Policy
            </span>
          </p>
        </motion.div>

        {/* Continue */}
        <motion.div variants={item}>
          <motion.button
            type="button"
            onClick={handleContinue}
            disabled={loading}
            whileHover={loading ? {} : { scale: 1.005, boxShadow: "0 4px 20px rgba(200,82,18,0.25)" }}
            whileTap={loading ? {} : { scale: 0.995 }}
            className="w-full bg-gradient-to-r from-[#c85212] to-[#d4621f] hover:from-[#b84a10] hover:to-[#c85212] disabled:opacity-60 disabled:cursor-not-allowed text-white font-['Mulish',sans-serif] font-bold text-[14px] tracking-[0.3px] py-3.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_2px_12px_rgba(200,82,18,0.2)]"
          >
            {loading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
              />
            ) : (
              <>
                Continue
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </motion.div>
      </motion.div>
    </AuthLayout>
  );
}
