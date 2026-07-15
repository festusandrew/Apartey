import { useState } from "react";
import { motion } from "motion/react";
import { Mail, ArrowLeft, ArrowRight, KeyRound } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner@2.0.3";
import { AuthLayout } from "./AuthLayout";

export function ResetPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
    toast.success("Reset link sent!");
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

        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/10 flex items-center justify-center mb-5">
              <Mail className="w-6 h-6 text-green-600" />
            </div>

            <h1 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[26px] sm:text-[30px] leading-[1.15] tracking-[-0.5px] mb-2.5">
              Check your inbox
            </h1>
            <p className="font-['Mulish',sans-serif] text-[#7f8694] text-[14px] tracking-[0.1px] leading-[1.6] mb-8">
              We've sent a password reset link to
              <br />
              <span className="font-bold text-[#10182c]">{email}</span>
            </p>

            <motion.button
              type="button"
              onClick={() => navigate("/create-password")}
              whileHover={{ scale: 1.005, boxShadow: "0 4px 20px rgba(200,82,18,0.25)" }}
              whileTap={{ scale: 0.995 }}
              className="w-full bg-gradient-to-r from-[#c85212] to-[#d4621f] text-white font-['Mulish',sans-serif] font-bold text-[14px] tracking-[0.3px] py-3.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_2px_12px_rgba(200,82,18,0.2)]"
            >
              Open reset page (demo)
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <button
              type="button"
              onClick={() => {
                setSent(false);
                setEmail("");
              }}
              className="mt-4 font-['Mulish',sans-serif] text-[#7f8694] text-[13px] hover:text-[#10182c] transition-colors cursor-pointer"
            >
              Try a different email
            </button>
          </motion.div>
        ) : (
          <>
            {/* Icon */}
            <motion.div
              variants={item}
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c85212]/10 to-[#c85212]/5 border border-[#c85212]/10 flex items-center justify-center mb-5"
            >
              <KeyRound className="w-6 h-6 text-[#c85212]" />
            </motion.div>

            {/* Header */}
            <motion.div variants={item} className="mb-7">
              <h1 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[26px] sm:text-[30px] leading-[1.15] tracking-[-0.5px]">
                Reset password
              </h1>
              <p className="font-['Mulish',sans-serif] text-[#7f8694] text-[14px] sm:text-[15px] mt-2.5 tracking-[0.1px] leading-[1.55]">
                Enter your email and we'll send you a reset link
              </p>
            </motion.div>

            {/* Email */}
            <motion.div variants={item} className="mb-6">
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
                    focusedField === "email"
                      ? "text-[#c85212]"
                      : "text-[#b0b5be]"
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
                    transition={{
                      repeat: Infinity,
                      duration: 0.7,
                      ease: "linear",
                    }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : (
                  <>
                    Send reset link
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </motion.div>

            {/* Footer */}
            <motion.p
              variants={item}
              className="text-center mt-6 font-['Mulish',sans-serif] text-[#7f8694] text-[13px] tracking-[0.15px]"
            >
              Remember your password?{" "}
              <Link
                to="/signin"
                className="font-bold text-[#c85212] hover:text-[#a84410] transition-colors"
              >
                Sign in
              </Link>
            </motion.p>
          </>
        )}
      </motion.form>
    </AuthLayout>
  );
}
