import { useState } from "react";
import { X, ChevronDown, ChevronUp, MapPin, Bed, Bath, Car, Sofa, Dog, Check, Minus, Star, ArrowUpDown, Scale } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export type CompareProperty = {
  id: number;
  image: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  rating: string;
  reviews: number;
  sqm?: number;
  parking?: boolean;
  furnished?: boolean;
  petsAllowed?: boolean;
  leaseTerm?: string;
  availableFrom?: string;
  responseRate?: string;
  depositMonths?: number;
  amenities?: string[];
};

type Props = {
  compareList: CompareProperty[];
  onRemove: (id: number) => void;
  onClear: () => void;
  onClose: () => void;
  mode?: "guest" | "authenticated";
};

const ROW_DEFS: { label: string; key: keyof CompareProperty; render?: (val: unknown) => React.ReactNode }[] = [
  { label: "Monthly Rent", key: "price", render: (v) => <span className="font-bold text-[#c85212]">{v as string}</span> },
  { label: "Location", key: "location", render: (v) => <span className="flex items-center gap-1"><MapPin size={13} className="text-[#c85212] shrink-0" />{v as string}</span> },
  { label: "Bedrooms", key: "beds", render: (v) => <span className="flex items-center gap-1"><Bed size={13} />{v as number} bed{(v as number) !== 1 ? "s" : ""}</span> },
  { label: "Bathrooms", key: "baths", render: (v) => <span className="flex items-center gap-1"><Bath size={13} />{v as number} bath{(v as number) !== 1 ? "s" : ""}</span> },
  { label: "Size", key: "sqm", render: (v) => v ? <span>{v as number} m²</span> : <Minus size={14} className="text-gray-300" /> },
  { label: "Parking", key: "parking", render: (v) => v ? <Check size={16} className="text-green-500" /> : <Minus size={14} className="text-gray-300" /> },
  { label: "Furnished", key: "furnished", render: (v) => v ? <span className="flex items-center gap-1"><Sofa size={13} /> Yes</span> : <span className="text-gray-400">Unfurnished</span> },
  { label: "Pets Allowed", key: "petsAllowed", render: (v) => v ? <span className="flex items-center gap-1 text-green-600"><Dog size={13} /> Yes</span> : <span className="text-gray-400">No pets</span> },
  { label: "Lease Term", key: "leaseTerm", render: (v) => v ? <span>{v as string}</span> : <Minus size={14} className="text-gray-300" /> },
  { label: "Available From", key: "availableFrom", render: (v) => v ? <span>{v as string}</span> : <span className="text-green-600 font-medium">Now</span> },
  { label: "Deposit", key: "depositMonths", render: (v) => v ? <span>{v as number} month{(v as number) > 1 ? "s" : ""}</span> : <Minus size={14} className="text-gray-300" /> },
  { label: "Response Rate", key: "responseRate", render: (v) => v ? <span className="text-[#10182c] font-medium">{v as string}</span> : <Minus size={14} className="text-gray-300" /> },
  { label: "Rating", key: "rating", render: (v) => v ? <span className="flex items-center gap-1"><Star size={13} className="fill-[#fbff79] text-[#c85212]" />{v as string}</span> : <Minus size={14} className="text-gray-300" /> },
];

export function PropertyComparisonTool({ compareList, onRemove, onClear, onClose, mode = "authenticated" }: Props) {
  const [collapsedRows, setCollapsedRows] = useState<Set<string>>(new Set());
  const [sortKey, setSortKey] = useState<keyof CompareProperty | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const toggleRow = (label: string) => {
    setCollapsedRows(prev => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  };

  const handleSort = (key: keyof CompareProperty) => {
    if (sortKey === key) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortKey(key); setSortDir("asc"); }
  };

  const sorted = sortKey
    ? [...compareList].sort((a, b) => {
        const va = a[sortKey] ?? "";
        const vb = b[sortKey] ?? "";
        const cmp = String(va).localeCompare(String(vb), undefined, { numeric: true });
        return sortDir === "asc" ? cmp : -cmp;
      })
    : compareList;

  const colWidth = sorted.length === 2 ? "w-1/2" : sorted.length === 3 ? "w-1/3" : "w-1/4";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex flex-col"
    >
      {/* Header */}
      <div className="shrink-0 bg-[#10182c] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Scale size={20} className="text-[#fbff79]" />
          <h2 className="font-['Montserrat',sans-serif] font-bold text-white text-[20px]">Compare Properties</h2>
          <span className="bg-[#c85212] text-white text-[12px] font-bold px-2.5 py-0.5 rounded-full">{sorted.length}</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onClear}
            className="text-white/60 hover:text-white text-[13px] transition-colors px-3 py-1.5 rounded-lg hover:bg-white/10"
          >
            Clear all
          </button>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Sort bar */}
      <div className="shrink-0 bg-[#0d1525] px-6 py-2 flex items-center gap-4 border-b border-white/10">
        <span className="text-white/50 text-[12px]">Sort by:</span>
        {(["price", "beds", "baths", "rating"] as (keyof CompareProperty)[]).map(k => (
          <button
            key={k}
            onClick={() => handleSort(k)}
            className={`flex items-center gap-1 text-[12px] px-2.5 py-1 rounded-lg transition-colors ${sortKey === k ? "bg-[#c85212] text-white" : "text-white/60 hover:text-white hover:bg-white/10"}`}
          >
            {k.charAt(0).toUpperCase() + k.slice(1)}
            <ArrowUpDown size={11} />
          </button>
        ))}
      </div>

      {/* Scroll area */}
      <div className="flex-1 overflow-y-auto bg-[#f5f6f8]">
        <div className="max-w-5xl mx-auto px-4 py-6">

          {/* Property header cards */}
          <div className="flex gap-4 mb-6">
            {/* Row label column spacer */}
            <div className="w-[180px] shrink-0 hidden md:block" />
            <div className="flex flex-1 gap-4">
              {sorted.map(prop => (
                <div key={prop.id} className={`${colWidth} bg-white rounded-[20px] overflow-hidden border border-gray-100 shadow-sm relative flex-shrink-0`}>
                  <div className="relative h-[140px]">
                    <ImageWithFallback src={prop.image} alt={prop.title} className="w-full h-full object-cover" />
                    <button
                      onClick={() => onRemove(prop.id)}
                      className="absolute top-2 right-2 w-7 h-7 bg-[#10182c]/80 hover:bg-[#10182c] rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                    >
                      <X size={13} />
                    </button>
                  </div>
                  <div className="p-3">
                    <h3 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[14px] mb-1 truncate">{prop.title}</h3>
                    <p className="text-[#c85212] font-bold text-[16px]">{prop.price}</p>
                    <p className="text-gray-400 text-[11px] mt-0.5 truncate flex items-center gap-1"><MapPin size={11} />{prop.location}</p>
                  </div>
                </div>
              ))}
              {/* Empty slot(s) */}
              {sorted.length < 4 && Array.from({ length: 4 - sorted.length > 1 ? 1 : 4 - sorted.length }).map((_, i) => (
                <div key={`empty-${i}`} className={`${colWidth} border-2 border-dashed border-gray-200 rounded-[20px] flex flex-col items-center justify-center p-6 text-center bg-white/50 flex-shrink-0`}>
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                    <Scale size={18} className="text-gray-300" />
                  </div>
                  <p className="text-gray-400 text-[12px]">Add another property to compare</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison rows */}
          <div className="space-y-2">
            {ROW_DEFS.map(row => {
              const collapsed = collapsedRows.has(row.label);
              return (
                <div key={row.label} className="bg-white rounded-[16px] border border-gray-100 overflow-hidden shadow-sm">
                  <button
                    onClick={() => toggleRow(row.label)}
                    className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-[13px] text-[#10182c]">{row.label}</span>
                    {collapsed ? <ChevronDown size={15} className="text-gray-400" /> : <ChevronUp size={15} className="text-gray-400" />}
                  </button>
                  <AnimatePresence>
                    {!collapsed && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="flex gap-4 px-4 pb-4">
                          {sorted.map(prop => {
                            const val = prop[row.key];
                            return (
                              <div key={prop.id} className={`${colWidth} text-[13px] text-[#10182c] flex items-center flex-shrink-0`}>
                                {row.render ? row.render(val) : val !== undefined && val !== null ? String(val) : <Minus size={14} className="text-gray-300" />}
                              </div>
                            );
                          })}
                          {sorted.length < 4 && <div className={`${colWidth} flex-shrink-0`} />}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Amenities section */}
          <div className="mt-2 bg-white rounded-[16px] border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-50">
              <span className="font-bold text-[13px] text-[#10182c]">Amenities</span>
            </div>
            <div className="flex gap-4 px-4 py-4">
              {sorted.map(prop => (
                <div key={prop.id} className={`${colWidth} flex-shrink-0`}>
                  {prop.amenities && prop.amenities.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5">
                      {prop.amenities.map(a => (
                        <span key={a} className="bg-[#10182c]/5 text-[#10182c] text-[11px] px-2 py-0.5 rounded-full">{a}</span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-gray-300 text-[13px]">—</span>
                  )}
                </div>
              ))}
              {sorted.length < 4 && <div className={`${colWidth} flex-shrink-0`} />}
            </div>
          </div>

          {/* CTA row */}
          <div className="mt-6 flex gap-4">
            <div className="w-[180px] shrink-0 hidden md:block" />
            <div className="flex flex-1 gap-4">
              {sorted.map(prop => (
                <div key={prop.id} className={`${colWidth} flex-shrink-0 flex flex-col gap-2`}>
                  {mode === "guest" ? (
                    <>
                      <button className="w-full bg-[#c85212] hover:bg-[#a6430f] text-white font-bold text-[13px] py-3 rounded-[12px] transition-colors shadow-sm">
                        View Property
                      </button>
                      <button className="w-full bg-[#10182c] hover:bg-[#1a2642] text-white font-bold text-[13px] py-3 rounded-[12px] transition-colors">
                        Sign Up to Apply
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="w-full bg-[#c85212] hover:bg-[#a6430f] text-white font-bold text-[13px] py-3 rounded-[12px] transition-colors shadow-sm">
                        Apply Now
                      </button>
                      <button className="w-full border border-gray-200 hover:border-[#c85212] text-[#10182c] font-bold text-[13px] py-3 rounded-[12px] transition-colors">
                        Save to Favorites
                      </button>
                    </>
                  )}
                </div>
              ))}
              {sorted.length < 4 && <div className={`${colWidth} flex-shrink-0`} />}
            </div>
          </div>

          {/* Guest sign-up nudge */}
          {mode === "guest" && (
            <div className="mt-6 bg-[#10182c] rounded-[20px] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-white font-bold text-[16px] font-['Montserrat',sans-serif]">Want more details?</p>
                <p className="text-white/60 text-[13px] mt-1">Create a free account to see response rates, lease terms, deposit info, and apply directly.</p>
              </div>
              <div className="flex gap-3 shrink-0">
                <button className="bg-[#fbff79] hover:bg-[#e8ec60] text-[#10182c] font-bold text-[13px] px-5 py-2.5 rounded-[12px] transition-colors whitespace-nowrap">
                  Create Free Account
                </button>
                <button className="border border-white/20 hover:border-white/40 text-white font-bold text-[13px] px-5 py-2.5 rounded-[12px] transition-colors whitespace-nowrap">
                  Log In
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Floating Compare Bar ─────────────────────────────────────────────────────
type BarProps = {
  compareList: CompareProperty[];
  onRemove: (id: number) => void;
  onOpen: () => void;
  onClear: () => void;
};

export function CompareBar({ compareList, onRemove, onOpen, onClear }: BarProps) {
  if (compareList.length === 0) return null;
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[900] bg-[#10182c] rounded-[20px] shadow-2xl px-4 py-3 flex items-center gap-3 min-w-[320px] max-w-[90vw]"
    >
      <div className="flex items-center gap-2 flex-1 overflow-x-auto no-scrollbar">
        {compareList.map(prop => (
          <div key={prop.id} className="relative shrink-0 group">
            <div className="w-[52px] h-[52px] rounded-[12px] overflow-hidden border-2 border-white/20">
              <ImageWithFallback src={prop.image} alt={prop.title} className="w-full h-full object-cover" />
            </div>
            <button
              onClick={() => onRemove(prop.id)}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#c85212] rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X size={10} />
            </button>
          </div>
        ))}
        {compareList.length < 4 && (
          <div className="w-[52px] h-[52px] rounded-[12px] border-2 border-dashed border-white/20 flex items-center justify-center shrink-0">
            <span className="text-white/40 text-[20px] leading-none">+</span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-2 shrink-0 ml-2">
        <button
          onClick={onClear}
          className="text-white/50 hover:text-white text-[12px] transition-colors px-2"
        >
          Clear
        </button>
        <button
          onClick={onOpen}
          disabled={compareList.length < 2}
          className="bg-[#c85212] disabled:bg-white/20 disabled:cursor-not-allowed hover:bg-[#a6430f] text-white font-bold text-[13px] px-5 py-2.5 rounded-[12px] transition-colors whitespace-nowrap"
        >
          Compare {compareList.length < 2 ? `(need ${2 - compareList.length} more)` : `(${compareList.length})`}
        </button>
      </div>
    </motion.div>
  );
}
