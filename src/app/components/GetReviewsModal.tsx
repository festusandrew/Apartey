import { useState } from "react";
import { X, Link2, Mail, Copy, Check, Send, Star, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner@2.0.3";

type Props = {
  property: { id: number | string; title: string; location?: string };
  onClose: () => void;
};

export function GetReviewsModal({ property, onClose }: Props) {
  const [tab, setTab] = useState<"link" | "email">("link");
  const [copied, setCopied] = useState(false);
  const [tenantEmail, setTenantEmail] = useState("");
  const [tenantName, setTenantName] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const slug = String(property.title)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const reviewLink = `${window.location.origin}/review/property/${property.id}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(reviewLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const canNativeShare = typeof navigator !== "undefined" && !!navigator.share;

  const handleShare = async () => {
    try {
      await navigator.share({
        title: `Review ${property.title} on Apartey`,
        text: `Share your experience living at ${property.title}. It only takes 2 minutes.`,
        url: reviewLink,
      });
    } catch {
      // User cancelled or share failed — fall back silently
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tenantEmail) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      toast.success(`Review request sent to ${tenantEmail}`);
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[24px] w-full max-w-[540px] overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="bg-[#10182c] px-6 py-5 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Star size={16} className="text-[#fbff79]" />
              <span className="text-[#fbff79] text-[12px] font-bold uppercase tracking-wider">Get Reviews</span>
            </div>
            <h2 className="font-['Montserrat',sans-serif] font-bold text-white text-[18px] leading-snug">
              {property.title}
            </h2>
            {property.location && (
              <p className="text-white/50 text-[13px] mt-0.5">{property.location}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors shrink-0 mt-1"
          >
            <X size={16} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100">
          <button
            onClick={() => setTab("link")}
            className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-[14px] font-bold transition-colors border-b-2 ${
              tab === "link"
                ? "text-[#c85212] border-[#c85212]"
                : "text-gray-400 border-transparent hover:text-gray-600"
            }`}
          >
            <Link2 size={15} /> Copy Link
          </button>
          <button
            onClick={() => setTab("email")}
            className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-[14px] font-bold transition-colors border-b-2 ${
              tab === "email"
                ? "text-[#c85212] border-[#c85212]"
                : "text-gray-400 border-transparent hover:text-gray-600"
            }`}
          >
            <Mail size={15} /> Request by Email
          </button>
        </div>

        {/* Tab content */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            {tab === "link" ? (
              <motion.div
                key="link"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="space-y-4"
              >
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  Share this link anywhere — WhatsApp, SMS, email, or paste it in a message. Tenants land directly on the review form with the property pre-filled.
                </p>

                {/* Link box */}
                <div className="flex items-center gap-2 bg-[#f5f6f8] rounded-[12px] p-3 border border-gray-200">
                  <Link2 size={15} className="text-gray-400 shrink-0" />
                  <span className="text-[13px] text-[#10182c] flex-1 truncate font-mono">{reviewLink}</span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={handleCopy}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] text-[12px] font-bold transition-all ${
                        copied
                          ? "bg-green-500 text-white"
                          : "bg-[#10182c] hover:bg-[#1a2642] text-white"
                      }`}
                    >
                      {copied ? <><Check size={12} /> Copied!</> : <><Copy size={12} /> Copy</>}
                    </button>
                    {canNativeShare && (
                      <button
                        onClick={handleShare}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] text-[12px] font-bold bg-[#c85212] hover:bg-[#a6430f] text-white transition-colors"
                        title="Share via apps"
                      >
                        <Share2 size={12} /> Share
                      </button>
                    )}
                  </div>
                </div>

                {/* Share hint */}
                <div className="bg-[#fbff79]/20 border border-[#fbff79]/40 rounded-[12px] p-4">
                  <p className="text-[#10182c] text-[13px] font-bold mb-1">💡 Tip</p>
                  <p className="text-gray-600 text-[13px] leading-relaxed">
                    Send this to past tenants right after they move out — that's when feedback is most honest and most likely to be given.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="email"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
              >
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 space-y-3"
                  >
                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                      <Check size={24} className="text-green-500" />
                    </div>
                    <h3 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[17px]">Request sent!</h3>
                    <p className="text-gray-500 text-[14px]">
                      {tenantName ? `${tenantName} will` : "Your tenant will"} receive a personalised email with a direct link to review <strong>{property.title}</strong>.
                    </p>
                    <button
                      onClick={() => { setSent(false); setTenantEmail(""); setTenantName(""); }}
                      className="text-[#c85212] text-[13px] font-bold hover:underline"
                    >
                      Send another request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSend} className="space-y-4">
                    <p className="text-gray-500 text-[14px] leading-relaxed">
                      Send a personalised review request directly to your tenant's inbox. One click takes them straight to the pre-filled review form.
                    </p>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-[12px] font-bold text-[#10182c] mb-1.5 uppercase tracking-wide">
                          Tenant name <span className="text-gray-400 font-normal normal-case">(optional)</span>
                        </label>
                        <input
                          type="text"
                          value={tenantName}
                          onChange={(e) => setTenantName(e.target.value)}
                          placeholder="e.g. Amara Osei"
                          className="w-full border border-gray-200 rounded-[10px] px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold text-[#10182c] mb-1.5 uppercase tracking-wide">
                          Tenant email <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          value={tenantEmail}
                          onChange={(e) => setTenantEmail(e.target.value)}
                          placeholder="tenant@email.com"
                          required
                          className="w-full border border-gray-200 rounded-[10px] px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Email preview */}
                    <div className="bg-[#f5f6f8] rounded-[12px] p-4 border border-gray-200">
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Email preview</p>
                      <p className="text-[13px] text-gray-600 leading-relaxed">
                        <em>
                          "Hi {tenantName || "there"}, [Homeowner name] has asked you to leave a review for <strong>{property.title}</strong> on Apartey. Your honest feedback helps future renters make better decisions — it takes less than 2 minutes."
                        </em>
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={!tenantEmail || sending}
                      className="w-full bg-[#c85212] hover:bg-[#a6430f] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-[14px] py-3.5 rounded-[12px] transition-colors flex items-center justify-center gap-2"
                    >
                      {sending ? (
                        <span className="animate-pulse">Sending…</span>
                      ) : (
                        <><Send size={15} /> Send Review Request</>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
