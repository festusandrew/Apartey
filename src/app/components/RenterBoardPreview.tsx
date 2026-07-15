import { useState } from "react";
import { MapPin, Bed, Calendar, DollarSign, MessageSquare, Sofa, Dog, Clock, Lock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BOARD_LISTINGS, type RenterRequirement } from "./RenterBoardPage";

function formatBudget(min: number, max: number, currency: string) {
  const fmt = (n: number) =>
    n >= 1_000_000 ? `${(n / 1_000_000).toFixed(1)}M` : n >= 1000 ? `${(n / 1000).toFixed(0)}K` : String(n);
  return `${currency} ${fmt(min)} – ${fmt(max)}`;
}

function MessageModal({ req, onClose }: { req: RenterRequirement; onClose: () => void }) {
  const [message, setMessage] = useState(
    `Hi ${req.renterName.split(" ")[0]}, I saw your requirement on Apartey and I have a property that might be a great fit — `
  );
  const [sent, setSent] = useState(false);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onClose}>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[24px] w-full max-w-[500px] overflow-hidden shadow-2xl"
      >
        <div className="bg-[#10182c] px-6 py-5">
          <p className="text-white/50 text-[12px] mb-1">Messaging renter</p>
          <h3 className="font-['Montserrat',sans-serif] font-bold text-white text-[17px]">{req.renterName}</h3>
          <p className="text-white/50 text-[12px] mt-0.5 flex items-center gap-1"><MapPin size={11} /> {req.location} · {formatBudget(req.budgetMin, req.budgetMax, req.currency)}</p>
        </div>
        <div className="p-6">
          {sent ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={22} className="text-green-500" />
              </div>
              <h4 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[17px] mb-2">Message sent!</h4>
              <p className="text-gray-500 text-[14px]">{req.renterName} will receive your message and can reply via their Apartey inbox.</p>
              <button onClick={onClose} className="mt-5 text-[#c85212] font-bold text-[13px] hover:underline">Close</button>
            </div>
          ) : (
            <>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-[14px] resize-none focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 transition-all mb-4"
              />
              <div className="flex gap-3">
                <button onClick={onClose} className="flex-1 border border-gray-200 text-[#10182c] font-bold text-[13px] py-3 rounded-[12px] hover:bg-gray-50 transition-colors">Cancel</button>
                <button
                  onClick={() => setSent(true)}
                  disabled={!message.trim()}
                  className="flex-1 bg-[#c85212] hover:bg-[#a6430f] disabled:opacity-40 text-white font-bold text-[13px] py-3 rounded-[12px] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare size={14} /> Send Message
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export function RenterBoardPreview() {
  const [messagingReq, setMessagingReq] = useState<RenterRequirement | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {BOARD_LISTINGS.map((req) => (
          <motion.div
            key={req.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-[20px] border border-gray-100 shadow-sm hover:shadow-md hover:border-[#c85212]/20 transition-all flex flex-col overflow-hidden"
          >
            <div className="bg-[#10182c] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#c85212] flex items-center justify-center shrink-0">
                  <span className="font-bold text-white text-[13px]">{req.initials}</span>
                </div>
                <div>
                  <p className="font-['Mulish',sans-serif] font-bold text-white text-[14px]">{req.renterName}</p>
                  <p className="text-white/40 text-[11px] flex items-center gap-1"><Clock size={10} /> {req.postedDate}</p>
                </div>
              </div>
              <span className="bg-[#fbff79] text-[#10182c] text-[10px] font-bold px-2 py-1 rounded-full">Active</span>
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <div className="flex flex-wrap gap-1.5">
                <span className="bg-[#c85212]/10 text-[#c85212] text-[12px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <DollarSign size={11} /> {formatBudget(req.budgetMin, req.budgetMax, req.currency)}
                </span>
                <span className="bg-gray-100 text-[#10182c] text-[12px] px-2.5 py-1 rounded-full flex items-center gap-1">
                  <MapPin size={11} className="text-[#c85212]" /> {req.location}
                </span>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[12px] text-gray-500">
                <span className="flex items-center gap-1"><Bed size={12} className="text-[#c85212]" /> {req.bedrooms} beds</span>
                <span className="flex items-center gap-1"><Calendar size={12} className="text-[#c85212]" /> {req.moveInDate}</span>
                {req.furnished && <span className="flex items-center gap-1"><Sofa size={12} className="text-[#c85212]" /> Furnished</span>}
                {req.petsAllowed && <span className="flex items-center gap-1"><Dog size={12} className="text-[#c85212]" /> Pets ok</span>}
              </div>
              <p className="text-gray-500 text-[12px] leading-relaxed line-clamp-2 border-t border-gray-50 pt-3">"{req.notes}"</p>
              <button
                onClick={() => setMessagingReq(req)}
                className="mt-auto w-full bg-[#10182c] hover:bg-[#1a2642] text-white font-bold text-[12px] py-2.5 rounded-[10px] transition-colors flex items-center justify-center gap-1.5"
              >
                <Lock size={12} /> <MessageSquare size={13} /> Message Renter
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Message modal */}
      <AnimatePresence>
        {messagingReq && (
          <MessageModal req={messagingReq} onClose={() => setMessagingReq(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
