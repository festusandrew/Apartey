import { useState } from "react";
import { motion } from "motion/react";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner@2.0.3";
import { AuthLayout } from "./AuthLayout";
import { GoogleIcon } from "./GoogleIcon";

export function SignInPage() {
  const navigate = useNavigate();
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
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    toast.success("Welcome back!");
    navigate("/");
  };

  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <AuthLayout>
      <motion.form
        onSubmit={handleSubmit}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
        }}
        initial="hidden"
        animate="show"
        className="flex flex-col"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-7">
          <h1 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[26px] sm:text-[30px] leading-[1.15] tracking-[-0.5px]">
            Welcome back
          </h1>
          <p className="font-['Mulish',sans-serif] text-[#7f8694] text-[14px] sm:text-[15px] mt-2.5 tracking-[0.1px] leading-[1.55]">
            Sign in to your Apartey account
          </p>
        </motion.div>

        {/* Google button */}
        <motion.button
          variants={item}
          type="button"
          whileHover={{ scale: 1.005, backgroundColor: "#f8f9fb" }}
          whileTap={{ scale: 0.995 }}
          className="w-full border border-[#e2e5ea] bg-white hover:border-[#cad0d9] text-[#1e293b] font-['Mulish',sans-serif] text-[14px] tracking-[0.15px] py-3 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-3"
        >
          <GoogleIcon className="w-[18px] h-[18px]" />
          Continue with Google
        </motion.button>

        {/* Divider */}
        <motion.div variants={item} className="flex items-center gap-4 my-5">
          <div className="flex-1 h-px bg-[#eceef1]" />
          <span className="font-['Mulish',sans-serif] text-[#b0b5be] text-[12px] tracking-[0.5px] uppercase">
            or
          </span>
          <div className="flex-1 h-px bg-[#eceef1]" />
        </motion.div>

        {/* Email */}
        <motion.div variants={item} className="mb-4">
          <label className="block font-['Mulish',sans-serif] font-bold text-[#3d4554] text-[13px] tracking-[0.2px] mb-2">
            Email address
          </label>
          <div
            className={`flex items-center rounded-xl border transition-all duration-200 bg-[#f8f9fb] ${
              focusedField === "email"
                ? "border-[#c85212] bg-white shadow-[0_0_0_3px_rgba(200,82,18,0.08)]"
                : "border-[#e2e5ea] hover:border-[#cad0d9] hover:bg-[#f4f5f7]"
            }`}
          >
            <Mail
              className={`w-[16px] h-[16px] ml-3.5 shrink-0 transition-colors ${
                focusedField === "email" ? "text-[#c85212]" : "text-[#b0b5be]"
              }`}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              placeholder="you@example.com"
              className="flex-1 bg-transparent border-none outline-none font-['Mulish',sans-serif] text-[#1e1e1e] text-[14px] tracking-[0.1px] placeholder:text-[#b0b5be] px-3 py-3"
            />
          </div>
        </motion.div>

        {/* Password */}
        <motion.div variants={item} className="mb-1.5">
          <div className="flex items-center justify-between mb-2">
            <label className="font-['Mulish',sans-serif] font-bold text-[#3d4554] text-[13px] tracking-[0.2px]">
              Password
            </label>
            <Link
              to="/reset-password"
              className="font-['Mulish',sans-serif] font-bold text-[#c85212] text-[12px] tracking-[0.2px] hover:text-[#a84410] transition-colors"
            >
              Forgot password?
            </Link>
          </div>
          <div
            className={`flex items-center rounded-xl border transition-all duration-200 bg-[#f8f9fb] ${
              focusedField === "password"
                ? "border-[#c85212] bg-white shadow-[0_0_0_3px_rgba(200,82,18,0.08)]"
                : "border-[#e2e5ea] hover:border-[#cad0d9] hover:bg-[#f4f5f7]"
            }`}
          >
            <Lock
              className={`w-[16px] h-[16px] ml-3.5 shrink-0 transition-colors ${
                focusedField === "password"
                  ? "text-[#c85212]"
                  : "text-[#b0b5be]"
              }`}
            />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocusedField("password")}
              onBlur={() => setFocusedField(null)}
              placeholder="Enter your password"
              className="flex-1 bg-transparent border-none outline-none font-['Mulish',sans-serif] text-[#1e1e1e] text-[14px] tracking-[0.1px] placeholder:text-[#b0b5be] px-3 py-3"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="pr-3.5 pl-2 text-[#b0b5be] hover:text-[#4e5562] transition-colors cursor-pointer"
            >
              {showPassword ? (
                <EyeOff className="w-[16px] h-[16px]" />
              ) : (
                <Eye className="w-[16px] h-[16px]" />
              )}
            </button>
          </div>
        </motion.div>

        {/* Submit */}
        <motion.div variants={item} className="mt-6">
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

        {/* Footer link */}
        <motion.p
          variants={item}
          className="text-center mt-6 font-['Mulish',sans-serif] text-[#7f8694] text-[13px] tracking-[0.15px]"
        >
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-bold text-[#c85212] hover:text-[#a84410] transition-colors"
          >
            Create account
          </Link>
        </motion.p>
      </motion.form>
    </AuthLayout>
  );
}
