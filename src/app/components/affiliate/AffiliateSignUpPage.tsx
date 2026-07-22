import { useState } from "react";
import { motion } from "motion/react";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Check, Building2, MapPin, Phone, Globe, Briefcase } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner@2.0.3";
import { AffiliateAuthLayout } from "./AffiliateAuthLayout";
import { useAuth } from "../AuthContext";

const pwdReqs = [
  { label: "8+ characters", test: (p: string) => p.length >= 8 },
  { label: "One uppercase", test: (p: string) => /[A-Z]/.test(p) },
  { label: "One number", test: (p: string) => /\d/.test(p) },
];

const BUSINESS_CATEGORIES = [
  "Real Estate Agency",
  "Independent Property Agent / Broker",
  "Property Manager",
  "Content Creator / Digital Marketer",
  "Local Services & Hospitality Partner",
  "Student Community Partner",
  "Other Individual Business",
];

export function AffiliateSignUpPage() {
  const navigate = useNavigate();
  const { affiliateSignIn } = useAuth();
  
  // Business fields
  const [businessName, setBusinessName] = useState("");
  const [businessCategory, setBusinessCategory] = useState(BUSINESS_CATEGORIES[0]);
  const [city, setCity] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  
  // Primary Contact & Account fields
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const allMet = pwdReqs.every((r) => r.test(password));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!businessName.trim()) {
      toast.error("Please enter your business or trading name");
      return;
    }
    if (!contactName.trim()) {
      toast.error("Please enter primary contact name");
      return;
    }
    if (!phone.trim()) {
      toast.error("Please enter your phone/WhatsApp number");
      return;
    }
    if (!city.trim()) {
      toast.error("Please specify your primary city or operating area");
      return;
    }
    if (!email.trim()) {
      toast.error("Please enter your work/business email address");
      return;
    }
    if (!password) {
      toast.error("Please enter a password");
      return;
    }
    if (!allMet) {
      toast.error("Password doesn't meet requirements");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    
    affiliateSignIn(businessName || contactName);
    toast.success("Affiliate business account created!");
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
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.04 } } }}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-5"
      >
        <motion.div variants={item} className="mb-2">
          <span className="inline-block bg-[#c85212]/10 text-[#c85212] text-[11px] font-black uppercase tracking-[1.5px] px-3 py-1 rounded-full mb-3">
            Individual Business Partner
          </span>
          <h1 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[24px] sm:text-[28px] leading-[1.15] tracking-[-0.5px]">
            Join the Affiliate Program
          </h1>
          <p className="font-['Mulish',sans-serif] text-[#7f8694] text-[13px] sm:text-[14px] mt-1.5 tracking-[0.1px] leading-[1.5]">
            Register your business to start referring renters &amp; property contributors to earn digital gift cards.
          </p>
        </motion.div>

        {/* SECTION 1: BUSINESS PROFILE */}
        <motion.div variants={item} className="space-y-3 pt-2">
          <div className="text-[12px] font-black uppercase tracking-[1.2px] text-[#c85212] border-b border-gray-100 pb-1.5 flex items-center gap-1.5">
            <Building2 size={13} /> Business Profile
          </div>

          {/* Business Name */}
          <div>
            <label className="block font-['Mulish',sans-serif] font-bold text-[#3d4554] text-[13px] tracking-[0.2px] mb-1.5">
              Business / Trading name <span className="text-red-500">*</span>
            </label>
            <div className={inputWrap("businessName")}>
              <Building2 className={iconCls("businessName")} />
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                onFocus={() => setFocusedField("businessName")}
                onBlur={() => setFocusedField(null)}
                placeholder="e.g. Apex Realty & Marketing"
                className={inputCls}
              />
            </div>
          </div>

          {/* Business Category & City Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-['Mulish',sans-serif] font-bold text-[#3d4554] text-[13px] tracking-[0.2px] mb-1.5">
                Business Type <span className="text-red-500">*</span>
              </label>
              <div className={inputWrap("businessCategory")}>
                <Briefcase className={iconCls("businessCategory")} />
                <select
                  value={businessCategory}
                  onChange={(e) => setBusinessCategory(e.target.value)}
                  onFocus={() => setFocusedField("businessCategory")}
                  onBlur={() => setFocusedField(null)}
                  className={`${inputCls} cursor-pointer appearance-none pr-3`}
                >
                  {BUSINESS_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block font-['Mulish',sans-serif] font-bold text-[#3d4554] text-[13px] tracking-[0.2px] mb-1.5">
                Primary City / Area <span className="text-red-500">*</span>
              </label>
              <div className={inputWrap("city")}>
                <MapPin className={iconCls("city")} />
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  onFocus={() => setFocusedField("city")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="e.g. Lagos, Port Harcourt"
                  className={inputCls}
                />
              </div>
            </div>
          </div>

          {/* Website / Social Handle */}
          <div>
            <label className="block font-['Mulish',sans-serif] font-bold text-[#3d4554] text-[13px] tracking-[0.2px] mb-1.5">
              Website or Social Media handle <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <div className={inputWrap("websiteUrl")}>
              <Globe className={iconCls("websiteUrl")} />
              <input
                type="text"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                onFocus={() => setFocusedField("websiteUrl")}
                onBlur={() => setFocusedField(null)}
                placeholder="e.g. instagram.com/apexrealty"
                className={inputCls}
              />
            </div>
          </div>
        </motion.div>

        {/* SECTION 2: CONTACT & ACCOUNT DETAILS */}
        <motion.div variants={item} className="space-y-3 pt-2">
          <div className="text-[12px] font-black uppercase tracking-[1.2px] text-[#c85212] border-b border-gray-100 pb-1.5 flex items-center gap-1.5">
            <User size={13} /> Primary Contact &amp; Security
          </div>

          {/* Contact Person Name */}
          <div>
            <label className="block font-['Mulish',sans-serif] font-bold text-[#3d4554] text-[13px] tracking-[0.2px] mb-1.5">
              Contact person full name <span className="text-red-500">*</span>
            </label>
            <div className={inputWrap("contactName")}>
              <User className={iconCls("contactName")} />
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                onFocus={() => setFocusedField("contactName")}
                onBlur={() => setFocusedField(null)}
                placeholder="Jane Doe"
                className={inputCls}
              />
            </div>
          </div>

          {/* Phone & Email Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-['Mulish',sans-serif] font-bold text-[#3d4554] text-[13px] tracking-[0.2px] mb-1.5">
                Phone / WhatsApp <span className="text-red-500">*</span>
              </label>
              <div className={inputWrap("phone")}>
                <Phone className={iconCls("phone")} />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="+234 800 000 0000"
                  className={inputCls}
                />
              </div>
            </div>

            <div>
              <label className="block font-['Mulish',sans-serif] font-bold text-[#3d4554] text-[13px] tracking-[0.2px] mb-1.5">
                Business Email <span className="text-red-500">*</span>
              </label>
              <div className={inputWrap("email")}>
                <Mail className={iconCls("email")} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="contact@business.com"
                  className={inputCls}
                />
              </div>
            </div>
          </div>
          <p className="text-[11px] text-gray-500 flex items-center gap-1">
            🎁 <span className="font-semibold text-gray-600">Gift Card Delivery Note:</span> Redeemed gift cards will be sent directly to this business email.
          </p>

          {/* Password */}
          <div>
            <label className="block font-['Mulish',sans-serif] font-bold text-[#3d4554] text-[13px] tracking-[0.2px] mb-1.5">
              Password <span className="text-red-500">*</span>
            </label>
            <div className={inputWrap("password")}>
              <Lock className={iconCls("password")} />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
                placeholder="Create a password"
                className={inputCls}
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="mr-3.5 text-[#b0b5be] hover:text-[#7f8694] transition-colors cursor-pointer"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            {/* Password requirements */}
            <div className="flex flex-wrap gap-2 mt-2.5">
              {pwdReqs.map((r) => {
                const met = r.test(password);
                return (
                  <span
                    key={r.label}
                    className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full border transition-colors ${
                      met
                        ? "bg-emerald-50 border-emerald-100 text-emerald-600"
                        : "bg-gray-50 border-gray-200 text-gray-400"
                    }`}
                  >
                    <Check size={11} /> {r.label}
                  </span>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Submit */}
        <motion.div variants={item} className="mt-2">
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={loading ? {} : { scale: 1.005, boxShadow: "0 4px 20px rgba(200,82,18,0.25)" }}
            whileTap={loading ? {} : { scale: 0.995 }}
            className="w-full bg-gradient-to-r from-[#c85212] to-[#d4621f] hover:from-[#b84a10] hover:to-[#c85212] disabled:opacity-60 disabled:cursor-not-allowed text-white font-['Mulish',sans-serif] font-bold text-[14px] tracking-[0.3px] py-3 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_2px_12px_rgba(200,82,18,0.2)]"
          >
            {loading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
              />
            ) : (
              <>
                Register Business &amp; Get Link
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </motion.div>

        <motion.p
          variants={item}
          className="text-center mt-2 font-['Mulish',sans-serif] text-[#7f8694] text-[13px] tracking-[0.15px]"
        >
          Already an affiliate?{" "}
          <Link to="/affiliate/signin" className="font-bold text-[#c85212] hover:text-[#a84410] transition-colors">
            Sign in
          </Link>
        </motion.p>
      </motion.form>
    </AffiliateAuthLayout>

  );
}
