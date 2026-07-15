import { useState } from "react";
import { motion } from "motion/react";
import { Eye, EyeOff, Lock, Check, ArrowRight, ArrowLeft, ShieldCheck } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner@2.0.3";
import { AuthLayout } from "./AuthLayout";

const requirements = [
  { label: "At least 8 characters", test: (p: string) => p.length >= 8 },
  { label: "One uppercase letter", test: (p: string) => /[A-Z]/.test(p) },
  { label: "One number", test: (p: string) => /\d/.test(p) },
];

export function CreatePasswordPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const allMet = requirements.every((r) => r.test(password));
  const passwordsMatch =
    password === confirmPassword && confirmPassword.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!allMet) {
      toast.error("Password doesn't meet requirements");
      return;
    }
    if (!passwordsMatch) {
      toast.error("Passwords do not match");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    toast.success("Password updated successfully!");
    navigate("/signin");
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

  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0 },
  };

  // Password strength score
  const metCount = requirements.filter((r) => r.test(password)).length;
  const strengthPct = password.length > 0 ? (metCount / requirements.length) * 100 : 0;
  const strengthColor =
    strengthPct === 100
      ? "#22c55e"
      : strengthPct >= 66
      ? "#eab308"
      : "#e54545";

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
        {/* Back */}
        <motion.div variants={item} className="mb-5">
          <Link
            to="/signin"
            className="inline-flex items-center gap-1.5 font-['Mulish',sans-serif] text-[#7f8694] text-[13px] hover:text-[#10182c] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to sign in
          </Link>
        </motion.div>

        {/* Icon */}
        <motion.div
          variants={item}
          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c85212]/10 to-[#c85212]/5 border border-[#c85212]/10 flex items-center justify-center mb-5"
        >
          <ShieldCheck className="w-6 h-6 text-[#c85212]" />
        </motion.div>

        {/* Header */}
        <motion.div variants={item} className="mb-7">
          <h1 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[26px] sm:text-[30px] leading-[1.15] tracking-[-0.5px]">
            Create new password
          </h1>
          <p className="font-['Mulish',sans-serif] text-[#7f8694] text-[14px] sm:text-[15px] mt-2.5 tracking-[0.1px] leading-[1.55]">
            Your new password must be different from your previous password
          </p>
        </motion.div>

        {/* New password */}
        <motion.div variants={item} className="mb-4">
          <label className="block font-['Mulish',sans-serif] font-bold text-[#3d4554] text-[13px] tracking-[0.2px] mb-1.5">
            New Password
          </label>
          <div className={inputWrap("password")}>
            <Lock className={iconCls("password")} />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocusedField("password")}
              onBlur={() => setFocusedField(null)}
              placeholder="Enter new password"
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

          {/* Strength bar + requirements */}
          {password.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-3"
            >
              {/* Strength bar */}
              <div className="h-1.5 bg-[#eceef1] rounded-full overflow-hidden mb-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${strengthPct}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: strengthColor }}
                />
              </div>
              {/* Requirements */}
              <div className="flex flex-col gap-1.5">
                {requirements.map((req, i) => {
                  const met = req.test(password);
                  return (
                    <div key={i} className="flex items-center gap-2">
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
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Confirm */}
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
              placeholder="Confirm new password"
              className="flex-1 bg-transparent border-none outline-none font-['Mulish',sans-serif] text-[#1e1e1e] text-[14px] tracking-[0.1px] placeholder:text-[#b0b5be] px-3 py-3"
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
                transition={{
                  repeat: Infinity,
                  duration: 0.7,
                  ease: "linear",
                }}
                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
              />
            ) : (
              <>
                Reset password
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </motion.div>
      </motion.form>
    </AuthLayout>
  );
}
