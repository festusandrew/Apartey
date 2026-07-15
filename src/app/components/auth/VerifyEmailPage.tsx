import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import { toast } from "sonner@2.0.3";
import { AuthLayout } from "./AuthLayout";
import { Mail, ArrowRight } from "lucide-react";

const CORRECT_CODE = "1234";

export function VerifyEmailPage() {
  const navigate = useNavigate();
  const [code, setCode] = useState<string[]>(["", "", "", ""]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (resendTimer > 0) {
      const t = setTimeout(() => setResendTimer((p) => p - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [resendTimer]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = useCallback(
    (index: number, value: string) => {
      if (!/^\d*$/.test(value)) return;
      setError(false);
      const newCode = [...code];
      newCode[index] = value.slice(-1);
      setCode(newCode);
      if (value && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    },
    [code]
  );

  const handleKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent) => {
      if (e.key === "Backspace" && !code[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    },
    [code]
  );

  const handlePaste = useCallback((e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 4);
    if (pasted.length > 0) {
      const newCode = ["", "", "", ""];
      pasted.split("").forEach((char, i) => {
        if (i < 4) newCode[i] = char;
      });
      setCode(newCode);
      setError(false);
      inputRefs.current[Math.min(pasted.length, 3)]?.focus();
    }
  }, []);

  const handleVerify = async () => {
    const fullCode = code.join("");
    if (fullCode.length !== 4) {
      toast.error("Please enter the full 4-digit code");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    if (fullCode === CORRECT_CODE) {
      navigate("/email-verified");
    } else {
      setError(true);
      toast.error("Incorrect code. Try 1234 for demo.");
    }
  };

  const handleResend = () => {
    if (resendTimer > 0) return;
    setResendTimer(30);
    setCode(["", "", "", ""]);
    setError(false);
    inputRefs.current[0]?.focus();
    toast.success("Verification code resent!");
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
        className="flex flex-col items-center"
      >
        {/* Icon */}
        <motion.div
          variants={item}
          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c85212]/10 to-[#c85212]/5 border border-[#c85212]/10 flex items-center justify-center mb-5"
        >
          <Mail className="w-6 h-6 text-[#c85212]" />
        </motion.div>

        {/* Header */}
        <motion.div variants={item} className="mb-8 text-center">
          <h1 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[26px] sm:text-[30px] leading-[1.15] tracking-[-0.5px]">
            Verify your email
          </h1>
          <p className="font-['Mulish',sans-serif] text-[#7f8694] text-[14px] sm:text-[15px] mt-2.5 tracking-[0.1px] leading-[1.55]">
            We've sent a 4-digit code to your email
          </p>
        </motion.div>

        {/* OTP Inputs */}
        <motion.div
          variants={item}
          className="flex gap-3 sm:gap-4 mb-2 justify-center"
        >
          {code.map((digit, i) => (
            <motion.input
              key={i}
              ref={(el) => {
                inputRefs.current[i] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              onPaste={i === 0 ? handlePaste : undefined}
              whileFocus={{ scale: 1.04 }}
              className={`w-[64px] h-[72px] sm:w-[72px] sm:h-[80px] text-center font-['Montserrat',sans-serif] font-bold text-[24px] rounded-xl border-2 outline-none transition-all duration-200 ${
                error
                  ? "border-[#e54545] bg-[#e54545]/[0.04] text-[#e54545]"
                  : digit
                  ? "border-[#c85212] bg-[#c85212]/[0.03] text-[#10182c]"
                  : "border-[#e2e5ea] bg-[#f8f9fb] text-[#10182c] hover:border-[#cad0d9]"
              } focus:border-[#c85212] focus:bg-white focus:shadow-[0_0_0_3px_rgba(200,82,18,0.08)]`}
            />
          ))}
        </motion.div>

        {/* Error */}
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="font-['Mulish',sans-serif] text-[#e54545] text-[13px] text-center tracking-[0.2px] mt-2 mb-1"
            >
              Incorrect verification code
            </motion.p>
          )}
        </AnimatePresence>

        {/* Continue */}
        <motion.div variants={item} className="w-full mt-6">
          <motion.button
            type="button"
            onClick={handleVerify}
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
                Verify & Continue
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Resend */}
        <motion.div variants={item} className="mt-5 text-center">
          <p className="font-['Mulish',sans-serif] text-[#7f8694] text-[13px] tracking-[0.15px]">
            Didn't receive the code?{" "}
            <button
              type="button"
              onClick={handleResend}
              disabled={resendTimer > 0}
              className={`font-bold cursor-pointer transition-colors ${
                resendTimer > 0
                  ? "text-[#b0b5be] cursor-not-allowed"
                  : "text-[#c85212] hover:text-[#a84410]"
              }`}
            >
              {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend code"}
            </button>
          </p>
        </motion.div>
      </motion.div>
    </AuthLayout>
  );
}
