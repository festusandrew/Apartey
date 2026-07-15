import { useState } from "react";
import { motion } from "motion/react";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Check } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner@2.0.3";
import { AuthLayout } from "./AuthLayout";
import { GoogleIcon } from "./GoogleIcon";

const pwdReqs = [
  { label: "8+ characters", test: (p: string) => p.length >= 8 },
  { label: "One uppercase", test: (p: string) => /[A-Z]/.test(p) },
  { label: "One number", test: (p: string) => /\d/.test(p) },
];

export function SignUpPage() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const allMet = pwdReqs.every((r) => r.test(password));
  const passwordsMatch =
    password === confirmPassword && confirmPassword.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }
    if (!allMet) {
      toast.error("Password doesn't meet requirements");
      return;
    }
    if (!passwordsMatch) {
      toast.error("Passwords do not match");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    toast.success("Account created!");
    navigate("/signup/role");
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
    <AuthLayout>
      <motion.form
        onSubmit={handleSubmit}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
        }}
        initial="hidden"
        animate="show"
        className="flex flex-col"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-6">
          <h1 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[26px] sm:text-[30px] leading-[1.15] tracking-[-0.5px]">
            Create an account
          </h1>
          <p className="font-['Mulish',sans-serif] text-[#7f8694] text-[14px] sm:text-[15px] mt-2.5 tracking-[0.1px] leading-[1.55]">
            Start your journey with Apartey
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

        {/* Name row */}
        <motion.div variants={item} className="flex gap-3 mb-3.5">
          <div className="flex-1">
            <label className="block font-['Mulish',sans-serif] font-bold text-[#3d4554] text-[13px] tracking-[0.2px] mb-1.5">
              First Name
            </label>
            <div className={inputWrap("firstName")}>
              <User className={iconCls("firstName")} />
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onFocus={() => setFocusedField("firstName")}
                onBlur={() => setFocusedField(null)}
                placeholder="First name"
                className={inputCls}
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="block font-['Mulish',sans-serif] font-bold text-[#3d4554] text-[13px] tracking-[0.2px] mb-1.5">
              Last Name
            </label>
            <div className={inputWrap("lastName")}>
              <User className={iconCls("lastName")} />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onFocus={() => setFocusedField("lastName")}
                onBlur={() => setFocusedField(null)}
                placeholder="Last name"
                className={inputCls}
              />
            </div>
          </div>
        </motion.div>

        {/* Email */}
        <motion.div variants={item} className="mb-3.5">
          <label className="block font-['Mulish',sans-serif] font-bold text-[#3d4554] text-[13px] tracking-[0.2px] mb-1.5">
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
        <motion.div variants={item} className="mb-3.5">
          <label className="block font-['Mulish',sans-serif] font-bold text-[#3d4554] text-[13px] tracking-[0.2px] mb-1.5">
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
              placeholder="Create a strong password"
              className={inputCls}
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
          {/* Inline requirements */}
          {password.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="flex flex-wrap gap-x-4 gap-y-1 mt-2"
            >
              {pwdReqs.map((req, i) => {
                const met = req.test(password);
                return (
                  <div key={i} className="flex items-center gap-1.5">
                    <div
                      className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all ${
                        met ? "bg-green-500" : "border border-[#d0d3da]"
                      }`}
                    >
                      {met && <Check className="w-2 h-2 text-white" />}
                    </div>
                    <span
                      className={`font-['Mulish',sans-serif] text-[12px] tracking-[0.2px] ${
                        met ? "text-green-600" : "text-[#a0a8b4]"
                      }`}
                    >
                      {req.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          )}
        </motion.div>

        {/* Confirm Password */}
        <motion.div variants={item} className="mb-1">
          <label className="block font-['Mulish',sans-serif] font-bold text-[#3d4554] text-[13px] tracking-[0.2px] mb-1.5">
            Confirm Password
          </label>
          <div className={inputWrap("confirm")}>
            <Lock className={iconCls("confirm")} />
            <input
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onFocus={() => setFocusedField("confirm")}
              onBlur={() => setFocusedField(null)}
              placeholder="Confirm your password"
              className={inputCls}
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="pr-3.5 pl-2 text-[#b0b5be] hover:text-[#4e5562] transition-colors cursor-pointer"
            >
              {showConfirm ? (
                <EyeOff className="w-[16px] h-[16px]" />
              ) : (
                <Eye className="w-[16px] h-[16px]" />
              )}
            </button>
          </div>
          {confirmPassword.length > 0 && !passwordsMatch && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-['Mulish',sans-serif] text-[#e54545] text-[12px] mt-1.5 tracking-[0.2px]"
            >
              Passwords do not match
            </motion.p>
          )}
        </motion.div>

        {/* Submit */}
        <motion.div variants={item} className="mt-5">
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
                Create account
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Footer */}
        <motion.p
          variants={item}
          className="text-center mt-5 font-['Mulish',sans-serif] text-[#7f8694] text-[13px] tracking-[0.15px]"
        >
          Already have an account?{" "}
          <Link
            to="/signin"
            className="font-bold text-[#c85212] hover:text-[#a84410] transition-colors"
          >
            Sign in
          </Link>
        </motion.p>
      </motion.form>
    </AuthLayout>
  );
}
