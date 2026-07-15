import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router";
import {
  ChevronLeft,
  ChevronDown,
  Star,
  Check,
  Home,
  Calendar,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  PenLine,
  Send,
} from "lucide-react";
import imgApartey1 from "figma:asset/7d425bbf61d32feb50fb9bfbd3b2ace1146e5ed1.png";
import svgPaths from "../imports/svg-u114kfou8c";
import { motion, AnimatePresence } from "motion/react";
import { Footer } from "./Footer";
import { toast } from "sonner@2.0.3";

/* ═══════════════════════════════════════════════════════
   STEP LABELS
   ═══════════════════════════════════════════════════════ */
const STEPS = [
  { key: "property", label: "Property Details", icon: Home },
  { key: "experience", label: "Experience and Ratings", icon: PenLine },
  { key: "submit", label: "Submit Review", icon: Send },
] as const;

const STEP_ENCOURAGEMENTS = [
  "Let's start your property review journey! Tell us about your place.",
  "You're doing great! Now let's dive into your experience.",
  "Almost there! Just a few more details and you're done.",
];

/* ═══════════════════════════════════════════════════════
   AMENITY / FACILITY OPTIONS
   ═══════════════════════════════════════════════════════ */
const BUILDING_FACILITIES = [
  "Parking lot", "Gate/security", "Swimming pool",
  "Gym", "Security system", "Elevator", "Playground", "CCTV",
];
const APPLIANCES = [
  "Dishwasher", "Air Conditioner", "Washing machine",
  "Refrigerator", "Oven", "Microwave", "Water heater", "Generator",
];
const UTILITIES_IN_RENT = [
  "Water", "Electricity", "Trash Collection",
  "Internet/WiFi", "Gas", "Cable TV",
];

/* ═══════════════════════════════════════════════════════
   NAVBAR (white version for light hero)
   ═══════════════════════════════════════════════════════ */
function WriteReviewNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="bg-white border-b border-[#f0f0f0] sticky top-0 z-50">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="relative h-[45px] md:h-[54px] w-[130px] md:w-[156px] shrink-0">
            <img src={imgApartey1} alt="Apartey" className="absolute h-[321%] left-[-17%] top-[-110%] w-[131%] max-w-none" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Home", href: "/" },
              { label: "Listings", href: "/listings", active: true },
              { label: "Insights", href: "/insights" },
              { label: "About", href: "/about" },
              { label: "Blog", href: "/blog" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`font-['Mulish',sans-serif] text-[15px] tracking-[0.38px] transition-colors ${item.active ? "text-[#c85212] font-bold" : "text-[rgba(0,0,0,0.8)] hover:text-[#c85212]"}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link to="/signin" className="font-['Mulish',sans-serif] text-[rgba(0,0,0,0.8)] text-[15px] tracking-[0.38px] hover:text-[#c85212] transition-colors">Login</Link>
            <Link to="/contact" className="bg-[#c85212] text-white font-['Mulish',sans-serif] font-bold text-[14px] tracking-[0.38px] px-5 py-2.5 rounded-[6px] hover:bg-[#b04710] transition-colors flex items-center gap-2">
              Contact us
            </Link>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-[#10182c]/60 cursor-pointer">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden mt-3 border-t border-[#f0f0f0] pt-3">
              <div className="flex flex-col gap-1">
                {["Home", "Listings", "Insights", "About", "Blog"].map((l) => (
                  <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase()}`} onClick={() => setMobileOpen(false)} className="px-3 py-2.5 rounded-lg font-['Mulish',sans-serif] text-[15px] text-[#10182c]/80">{l}</Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════
   STAR INPUT
   ════════════���══════════════════════════════════════════ */
function StarInput({ value, onChange, label }: { value: number; onChange: (v: number) => void; label: string }) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex-1">
      <p className="font-['Mulish',sans-serif] text-[#364153] text-[13px] md:text-[14px] mb-2">{label}</p>
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <button
            key={i}
            type="button"
            onClick={() => onChange(i)}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(0)}
            className="cursor-pointer p-0.5"
          >
            <Star className={`w-6 h-6 transition-colors ${i <= (hover || value) ? "text-[#FACC16] fill-[#FACC16]" : "text-[#CAD0D9]"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   CHECKBOX GRID ITEM
   ═══════════════════════════════════════════════════════ */
function CheckboxItem({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer group">
      <div className={`w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center transition-all ${checked ? "bg-[#c85212] border-[#c85212]" : "border-[#cad0d9] group-hover:border-[#c85212]/40"}`}>
        {checked && <Check className="w-3 h-3 text-white" />}
      </div>
      <span className="font-['Mulish',sans-serif] text-[#364153] text-[13px] md:text-[14px]">{label}</span>
    </label>
  );
}

/* ═══════════════════════════════════════════════════════
   SELECT DROPDOWN
   ═══════════════════════════════════════════════════════ */
function SelectField({ label, value, onChange, options, placeholder }: { label: string; value: string; onChange: (v: string) => void; options: string[]; placeholder?: string }) {
  return (
    <div className="flex-1">
      <p className="font-['Mulish',sans-serif] text-[#364153] text-[13px] md:text-[14px] mb-2">{label}</p>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none bg-white border border-[#e5e7eb] rounded-[8px] px-4 py-3 pr-10 font-['Mulish',sans-serif] text-[14px] text-[#10182c] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 transition-all"
        >
          <option value="">{placeholder || "Select..."}</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#10182c]/30 pointer-events-none" />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   INPUT FIELD
   ═══════════════════════════════════════════════════════ */
function InputField({ label, value, onChange, placeholder, helperText, type = "text" }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; helperText?: string; type?: string }) {
  return (
    <div className="flex-1">
      <p className="font-['Mulish',sans-serif] text-[#364153] text-[13px] md:text-[14px] mb-2">{label}</p>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white border border-[#e5e7eb] rounded-[8px] px-4 py-3 font-['Mulish',sans-serif] text-[14px] text-[#10182c] placeholder:text-[#10182c]/30 focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 transition-all"
      />
      {helperText && <p className="font-['Mulish',sans-serif] text-[#10182c]/30 text-[12px] mt-1.5">{helperText}</p>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION CARD
   ═══════════════════════════════════════════════════════ */
function SectionCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-[12px] border border-[#e5e7eb] px-6 md:px-8 py-6 md:py-8">
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="pb-4 mb-6 border-b border-[#e5e7eb]">
      <h3 className="font-['Mulish',sans-serif] font-bold text-[#101828] text-[18px] md:text-[20px]">{children}</h3>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════ */
export function WriteReviewPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  /* ── Step 1: Property Details ── */
  const [address, setAddress] = useState("");
  const [rooms, setRooms] = useState("");
  const [occupants, setOccupants] = useState("");
  const [stillLiving, setStillLiving] = useState(false);
  const [leaveDate, setLeaveDate] = useState("");

  /* ── Step 2: Experience & Ratings ── */
  const [overallRating, setOverallRating] = useState(0);
  const [valueRating, setValueRating] = useState(0);
  const [homeRating, setHomeRating] = useState(0);
  const [areaAssessment, setAreaAssessment] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
  const [selectedAppliances, setSelectedAppliances] = useState<string[]>([]);
  const [selectedUtilities, setSelectedUtilities] = useState<string[]>([]);
  const [electricityReliability, setElectricityReliability] = useState("");
  const [waterSupply, setWaterSupply] = useState("");
  const [internetSpeed, setInternetSpeed] = useState("");

  /* ── Step 3: Submit ── */
  const [anonymous, setAnonymous] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  /* toggle helpers */
  const toggleInSet = (set: string[], item: string, setter: (v: string[]) => void) => {
    setter(set.includes(item) ? set.filter((s) => s !== item) : [...set, item]);
  };

  const canProceed = () => {
    if (step === 0) return address.trim().length > 0;
    if (step === 1) return overallRating > 0 && reviewText.trim().length > 10;
    if (step === 2) return agreeTerms;
    return true;
  };

  const handleNext = () => {
    if (!canProceed()) {
      toast.error(step === 0 ? "Please enter your address" : step === 1 ? "Please rate your experience and write a review" : "Please agree to the terms");
      return;
    }
    if (step < 2) setStep(step + 1);
    else {
      toast.success("Review submitted successfully!", { description: "Thank you for sharing your experience. Your review will be published after moderation." });
      setTimeout(() => navigate(id ? `/reviews/${id}` : "/"), 1800);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col">
      <SharedNavbar transparent={false} />

      {/* ───── Dark Hero ───── */}
      <section className="bg-[#10182c] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`, backgroundSize: "32px 32px" }} />
        <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-12 py-12 md:py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-['Mulish',sans-serif] font-bold text-white text-[32px] md:text-[48px] lg:text-[56px] tracking-[-1.5px] leading-[1.05] mb-4"
          >
            Write a Property Review
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-['Mulish',sans-serif] text-[#f7f7f7]/70 text-[14px] md:text-[16px] tracking-[0.3px] max-w-[520px] mx-auto"
          >
            Share your honest opinion about a property to help others make informed decisions.
          </motion.p>
        </div>
      </section>

      {/* ───── Stepper bar ───── */}
      <div className="max-w-[920px] mx-auto px-6 md:px-12 w-full -mt-6 md:-mt-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-[#3a414e] rounded-t-[16px] md:rounded-t-[20px] px-6 md:px-10 py-5 md:py-7"
        >
          {/* Steps row */}
          <div className="flex items-center justify-center gap-6 md:gap-12 mb-4 md:mb-5">
            {STEPS.map((s, i) => {
              const completed = i < step;
              const active = i === step;
              return (
                <div key={s.key} className="flex items-center gap-2 md:gap-3">
                  <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${completed ? "bg-[#c85212]" : active ? "bg-[#c85212]" : "bg-[#d9d9d9]"}`}>
                    {completed ? (
                      <Check className="w-4 h-4 text-white" />
                    ) : (
                      <span className={`font-['Mulish',sans-serif] font-bold text-[12px] md:text-[13px] ${active ? "text-white" : "text-[#4e5562]"}`}>{i + 1}</span>
                    )}
                  </div>
                  <span className={`font-['Mulish',sans-serif] text-[13px] md:text-[14px] tracking-[0.3px] hidden sm:inline ${completed || active ? "text-[#f7f7f7]" : "text-[#f7f7f7]/50"}`}>{s.label}</span>
                </div>
              );
            })}
          </div>
          {/* Encouragement */}
          <p className="font-['Mulish',sans-serif] text-[#f7f7f7]/70 text-[13px] md:text-[14px] text-center tracking-[0.3px]">
            {step === 0 && "🏠 "}
            {step === 1 && "🌟 "}
            {step === 2 && "🚀 "}
            {STEP_ENCOURAGEMENTS[step]}
          </p>
        </motion.div>
      </div>

      {/* ───── Form content ───── */}
      <main className="max-w-[920px] mx-auto px-6 md:px-12 w-full pb-16 md:pb-24">
        <div className="bg-white border-x border-b border-[#e5e7eb] rounded-b-[16px] md:rounded-b-[20px]">
          <AnimatePresence mode="wait">
            {/* ══════ STEP 1: PROPERTY DETAILS ══════ */}
            {step === 0 && (
              <motion.div
                key="step-0"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className="p-6 md:p-10 flex flex-col gap-8"
              >
                {/* Address */}
                <SectionCard>
                  <SectionTitle>Enter your Address</SectionTitle>
                  <InputField
                    label=""
                    value={address}
                    onChange={setAddress}
                    placeholder="Apartment Address"
                    helperText="e.g. 210 Quai de Bercy, Paris, France"
                  />
                </SectionCard>

                {/* Stay details */}
                <SectionCard>
                  <SectionTitle>Stay Details</SectionTitle>
                  <div className="flex flex-col sm:flex-row gap-5 mb-6">
                    <SelectField
                      label="Number of Rooms"
                      value={rooms}
                      onChange={setRooms}
                      options={["1", "2", "3", "4", "5+"]}
                      placeholder="1"
                    />
                    <SelectField
                      label="Number of Occupants"
                      value={occupants}
                      onChange={setOccupants}
                      options={["1", "2", "3", "4", "5+"]}
                      placeholder="1"
                    />
                  </div>

                  <div>
                    <p className="font-['Mulish',sans-serif] text-[#364153] text-[13px] md:text-[14px] mb-3">When did you leave this property?</p>
                    <label className="flex items-center gap-2.5 cursor-pointer mb-3">
                      <div className={`w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center transition-all ${stillLiving ? "bg-[#c85212] border-[#c85212]" : "border-[#cad0d9]"}`}>
                        {stillLiving && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span className="font-['Mulish',sans-serif] text-[#364153] text-[13px] md:text-[14px]">I am still living here</span>
                    </label>
                    {!stillLiving && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
                        <div className="w-full sm:w-[200px]">
                          <div className="relative">
                            <input
                              type="month"
                              value={leaveDate}
                              onChange={(e) => setLeaveDate(e.target.value)}
                              placeholder="MM/YYYY"
                              className="w-full bg-white border border-[#e5e7eb] rounded-[8px] px-4 py-3 font-['Mulish',sans-serif] text-[14px] text-[#10182c] placeholder:text-[#10182c]/30 focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 transition-all"
                            />
                            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#10182c]/30 pointer-events-none" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </SectionCard>
              </motion.div>
            )}

            {/* ══════ STEP 2: EXPERIENCE & RATINGS ══════ */}
            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className="p-6 md:p-10 flex flex-col gap-8"
              >
                {/* Ratings */}
                <SectionCard>
                  <SectionTitle>Fairness & Review</SectionTitle>
                  <div className="flex flex-col sm:flex-row gap-6 mb-6">
                    <StarInput label="Overall experience rating" value={overallRating} onChange={setOverallRating} />
                    <StarInput label="Value for money rating" value={valueRating} onChange={setValueRating} />
                    <StarInput label="Home itself rating" value={homeRating} onChange={setHomeRating} />
                  </div>

                  {/* Area assessment */}
                  <div className="mb-6">
                    <p className="font-['Mulish',sans-serif] text-[#364153] text-[13px] md:text-[14px] mb-2">Overall area assessment</p>
                    <div className="flex gap-3">
                      {["Quiet", "Happy"].map((a) => (
                        <button
                          key={a}
                          type="button"
                          onClick={() => setAreaAssessment(a)}
                          className={`px-6 py-2.5 rounded-[8px] border font-['Mulish',sans-serif] text-[14px] cursor-pointer transition-all ${areaAssessment === a ? "bg-[#c85212] border-[#c85212] text-white" : "border-[#e5e7eb] text-[#364153] hover:border-[#c85212]/30"}`}
                        >
                          {a}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Review text */}
                  <div>
                    <p className="font-['Mulish',sans-serif] text-[#364153] text-[13px] md:text-[14px] mb-2">Your review</p>
                    <textarea
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      placeholder="Write your honest review here..."
                      rows={5}
                      className="w-full bg-white border border-[#e5e7eb] rounded-[8px] px-4 py-3 font-['Mulish',sans-serif] text-[14px] text-[#10182c] placeholder:text-[#10182c]/30 focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 transition-all resize-none"
                    />
                  </div>
                </SectionCard>

                {/* Amenities */}
                <SectionCard>
                  <SectionTitle>Amenities & Facilities</SectionTitle>

                  {/* Building facilities */}
                  <p className="font-['Mulish',sans-serif] font-bold text-[#364153] text-[14px] mb-3">Building facilities</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                    {BUILDING_FACILITIES.map((f) => (
                      <CheckboxItem key={f} label={f} checked={selectedFacilities.includes(f)} onChange={() => toggleInSet(selectedFacilities, f, setSelectedFacilities)} />
                    ))}
                  </div>

                  {/* Appliances */}
                  <p className="font-['Mulish',sans-serif] font-bold text-[#364153] text-[14px] mb-3">Appliances & Fixtures</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                    {APPLIANCES.map((a) => (
                      <CheckboxItem key={a} label={a} checked={selectedAppliances.includes(a)} onChange={() => toggleInSet(selectedAppliances, a, setSelectedAppliances)} />
                    ))}
                  </div>

                  {/* Utilities in rent */}
                  <p className="font-['Mulish',sans-serif] font-bold text-[#364153] text-[14px] mb-3">Utilities included in rent</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {UTILITIES_IN_RENT.map((u) => (
                      <CheckboxItem key={u} label={u} checked={selectedUtilities.includes(u)} onChange={() => toggleInSet(selectedUtilities, u, setSelectedUtilities)} />
                    ))}
                  </div>
                </SectionCard>

                {/* Utility quality */}
                <SectionCard>
                  <SectionTitle>Utility Services Quality</SectionTitle>
                  <div className="flex flex-col sm:flex-row gap-5">
                    <SelectField label="Electricity reliability" value={electricityReliability} onChange={setElectricityReliability} options={["Excellent", "Good", "Average", "Poor", "Very Poor"]} />
                    <SelectField label="Water supply" value={waterSupply} onChange={setWaterSupply} options={["Excellent", "Good", "Average", "Poor", "Very Poor"]} />
                    <SelectField label="Internet speed" value={internetSpeed} onChange={setInternetSpeed} options={["Excellent", "Good", "Average", "Poor", "Very Poor"]} />
                  </div>
                </SectionCard>
              </motion.div>
            )}

            {/* ══════ STEP 3: SUBMIT ══════ */}
            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className="p-6 md:p-10 flex flex-col gap-8"
              >
                <SectionCard>
                  <SectionTitle>Submit your Review</SectionTitle>
                  <p className="font-['Mulish',sans-serif] text-[#364153]/60 text-[14px] mb-6">Enter your information to complete your review</p>

                  <label className="flex items-center gap-2.5 cursor-pointer mb-8">
                    <div className={`w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center transition-all ${anonymous ? "bg-[#c85212] border-[#c85212]" : "border-[#cad0d9]"}`}>
                      {anonymous && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <span className="font-['Mulish',sans-serif] text-[#364153] text-[14px]">Submit your review Anonymously?</span>
                  </label>

                  {/* Terms */}
                  <div className="border border-[#e5e7eb] rounded-[12px] p-5 md:p-6 mb-6">
                    <h4 className="font-['Mulish',sans-serif] font-bold text-[#101828] text-[16px] mb-1">Terms and Conditions</h4>
                    <p className="font-['Mulish',sans-serif] text-[#364153]/50 text-[13px] mb-4">Please review and accept our terms</p>

                    <div className="bg-[#fafafa] rounded-[10px] p-4 md:p-5 mb-5">
                      <p className="font-['Mulish',sans-serif] text-[#364153]/60 text-[13px] md:text-[14px] mb-2">By submitting this review, you confirm that:</p>
                      <ul className="list-disc pl-5 flex flex-col gap-1.5">
                        <li className="font-['Mulish',sans-serif] text-[#364153]/50 text-[13px] md:text-[14px]">You have personally lived at this property</li>
                        <li className="font-['Mulish',sans-serif] text-[#364153]/50 text-[13px] md:text-[14px]">Your review is honest and based on your own experience</li>
                        <li className="font-['Mulish',sans-serif] text-[#364153]/50 text-[13px] md:text-[14px]">You are not affiliated with the property owner or management</li>
                        <li className="font-['Mulish',sans-serif] text-[#364153]/50 text-[13px] md:text-[14px]">All information provided is accurate to the best of your knowledge</li>
                      </ul>
                    </div>

                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <div className={`w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center transition-all ${agreeTerms ? "bg-[#c85212] border-[#c85212]" : "border-[#cad0d9]"}`}>
                        {agreeTerms && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span className="font-['Mulish',sans-serif] text-[#364153] text-[14px]">I agree to the terms of use and privacy policy</span>
                    </label>
                  </div>
                </SectionCard>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ───── Navigation buttons ───── */}
          <div className="px-6 md:px-10 pb-8 flex items-center justify-end gap-4">
            {step > 0 && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setStep(step - 1)}
                className="px-8 py-3 border border-[#e5e7eb] rounded-[8px] font-['Mulish',sans-serif] font-bold text-[#364153] text-[14px] cursor-pointer hover:bg-[#f8f8f8] transition-colors"
              >
                Previous
              </motion.button>
            )}
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 4px 16px rgba(200,82,18,0.2)" }}
              whileTap={{ scale: 0.98 }}
              onClick={handleNext}
              className={`px-8 md:px-12 py-3 rounded-[8px] font-['Mulish',sans-serif] font-bold text-[14px] cursor-pointer transition-all flex items-center gap-2 ${canProceed() ? "bg-[#c85212] text-white hover:bg-[#b04710]" : "bg-[#c85212]/50 text-white/70"}`}
            >
              {step === 2 ? "Submit Review" : "Continue"}
              {step < 2 && <ArrowRight className="w-4 h-4" />}
            </motion.button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default WriteReviewPage;
