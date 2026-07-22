import { useState } from "react";
import { motion } from "motion/react";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner@2.0.3";
import { AffiliateAuthLayout } from "./AffiliateAuthLayout";
import { useAuth } from "../AuthContext";

export function AffiliateSignInPage() {
  const navigate = useNavigate();
  const { affiliateSignIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    
    // Derive business display name from email (e.g. contact@apexrealty.com -> Apexrealty)
    const derivedName = email.split("@")[0].replace(/[^a-zA-Z0-9]/g, " ");
    const formattedName = derivedName.charAt(0).toUpperCase() + derivedName.slice(1);
    
    affiliateSignIn(formattedName || "Affiliate Partner");
    navigate("/affiliate/dashboard");
  };

  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0 },
  };

  const inputWrap = (field: string) =>
    `flex items-center rounded-xl border transition-all duration-200 bg-[#f8f9fb] ${
      focusedField === field
        ? "border-[#c85212] bg-white shadow-[0_0_0_3px_rgba(200,82,18,0.08)]"
        : "border-[#e2e5ea] hover:border-[#cad0d9] hover:bg-[#f4f5f7]"
    }`;

  const iconCls = (field: string) =>
    `w-[16px] h-[16px] ml-3.5 shrink-0 transition-colors ${
      focusedField === field ? "text-[#c85212]" : "text-[#b0b5be]"
    }`;

  const inputCls =
    "flex-1 bg-transparent border-none outline-none font-['Mulish',sans-serif] text-[#1e1e1e] text-[14px] tracking-[0.1px] placeholder:text-[#b0b5be] px-3 py-3 min-w-0";

  return (
    <AffiliateAuthLayout>
      <motion.form
        onSubmit={handleSubmit}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}
        initial="hidden"
        animate="show"
        className="flex flex-col"
      >
        <motion.div variants={item} className="mb-7">
          <span className="inline-block bg-[#c85212]/10 text-[#c85212] text-[11px] font-black uppercase tracking-[1.5px] px-3 py-1 rounded-full mb-3">
            Business Sign In
          </span>
          <h1 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[26px] sm:text-[30px] leading-[1.15] tracking-[-0.5px]">
            Affiliate sign in
          </h1>
          <p className="font-['Mulish',sans-serif] text-[#7f8694] text-[14px] sm:text-[15px] mt-2 tracking-[0.1px] leading-[1.55]">
            Access your earnings balance and redeem ₦5,000 gift cards.
          </p>
        </motion.div>

        {/* Email */}
        <motion.div variants={item} className="mb-4">
          <label className="block font-['Mulish',sans-serif] font-bold text-[#3d4554] text-[13px] tracking-[0.2px] mb-2">
            Email address
          </label>
          <div className={inputWrap("email")}>
            <Mail className={iconCls("email")} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              placeholder="you@example.com"
              className={inputCls}
            />
          </div>
        </motion.div>

        {/* Password */}
        <motion.div variants={item} className="mb-5">
          <label className="block font-['Mulish',sans-serif] font-bold text-[#3d4554] text-[13px] tracking-[0.2px] mb-2">
            Password
          </label>
          <div className={inputWrap("password")}>
            <Lock className={iconCls("password")} />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocusedField("password")}
              onBlur={() => setFocusedField(null)}
              placeholder="Enter your password"
              className={inputCls}
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="mr-3.5 text-[#b0b5be] hover:text-[#7f8694] transition-colors"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </motion.div>

        {/* Submit */}
        <motion.div variants={item}>
          <motion.button
            type="submit"
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
                Sign in
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </motion.div>

        <motion.p
          variants={item}
          className="text-center mt-6 font-['Mulish',sans-serif] text-[#7f8694] text-[13px] tracking-[0.15px]"
        >
          New affiliate?{" "}
          <Link to="/affiliate/signup" className="font-bold text-[#c85212] hover:text-[#a84410] transition-colors">
            Create account
          </Link>
        </motion.p>
      </motion.form>
    </AffiliateAuthLayout>
  );
}
