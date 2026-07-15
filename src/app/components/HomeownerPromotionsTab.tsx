import { useState } from "react";
import {
  Search, Eye, Edit2, Trash2, Plus, Activity, TrendingUp,
  X, Calendar
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner@2.0.3";

const CAMPAIGNS = [
  { id: 1, propertyName: "Modern 2-Bed Flat in Islington", propertyDates: "2026-06-08 to 2026-06-25", advertiserName: "Sarah Jenkins", advertiserRole: "Property Manager", adType: "Featured Boost", budgetSpend: "€150.00", views: 1200, viewsTarget: 1500, clicks: 94, clicksTarget: 150, status: "active" },
  { id: 2, propertyName: "Luxury Condo in Chelsea", propertyDates: "2026-06-08 to 2026-06-21", advertiserName: "Daniel Egbochuo", advertiserRole: "Homeowner", adType: "Top Result", budgetSpend: "€75.00", views: 850, viewsTarget: 1000, clicks: 45, clicksTarget: 100, status: "active" },
  { id: 3, propertyName: "City Center Apartment", propertyDates: "2026-05-28 to 2026-06-15", advertiserName: "Michael Chen", advertiserRole: "Agent", adType: "Featured Boost", budgetSpend: "€120.00", views: 1650, viewsTarget: 2000, clicks: 87, clicksTarget: 150, status: "active" },
];

type Campaign = typeof CAMPAIGNS[0];

type Props = { onOpenPromoteModal: () => void };

export function HomeownerPromotionsTab({ onOpenPromoteModal }: Props) {
  const [promotionsTab, setPromotionsTab] = useState<'running' | 'history'>('running');
  const [promotionsStatusFilter, setPromotionsStatusFilter] = useState<'all' | 'active' | 'paused' | 'expired'>('all');
  const [promotionsSortBy, setPromotionsSortBy] = useState('newest');
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [isViewCampaignModalOpen, setIsViewCampaignModalOpen] = useState(false);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">Ads & Promoted Listings</h1>
          <p className="text-gray-500 text-[14px] mt-1">Configure boosted search queries, key bounce listings, and audit invoice logs.</p>
        </div>
        <button onClick={onOpenPromoteModal} className="bg-[#c85212] hover:bg-[#a6430f] text-white px-5 py-2.5 rounded-[12px] text-[14px] font-bold transition-colors shadow-sm flex items-center gap-2">
          <Plus size={18} /> Launch Ad Campaign
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Active Ad Campaigns", value: "3", sub: "Live Status", subColor: "text-[#10b981]", icon: <Activity size={20} className="text-[#c85212]" />, bg: "bg-[#fbff79]/20" },
          { label: "Accumulated Ad Revenue", value: "€895.00", sub: "100% audited", subColor: "text-[#10b981]", icon: <TrendingUp size={20} className="text-green-600" />, bg: "bg-green-50" },
          { label: "Total Views/Impressions", value: "6,715", sub: "CTR% Tracker", subColor: "text-blue-600", icon: <Eye size={20} className="text-blue-600" />, bg: "bg-blue-50" },
          { label: "Total Traffic Clicks", value: "471", sub: "~98% CTR / AR", subColor: "text-purple-600", icon: <Activity size={20} className="text-purple-600" />, bg: "bg-purple-50" },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-gray-100 rounded-[16px] shadow-sm p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className={`w-10 h-10 rounded-[10px] ${s.bg} flex items-center justify-center shrink-0`}>{s.icon}</div>
              <div className="flex-1">
                <p className="text-[11px] uppercase tracking-wider text-gray-400 font-bold mb-1">{s.label}</p>
                <p className="text-[32px] font-bold text-[#10182c] leading-none">{s.value}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 mt-3">
              <span className={`text-[11px] font-bold ${s.subColor}`}>{s.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-100 rounded-[20px] shadow-sm overflow-hidden">
        <div className="border-b border-gray-100 px-6 pt-5">
          <div className="flex gap-6">
            {(['running', 'history'] as const).map((t) => (
              <button key={t} onClick={() => setPromotionsTab(t)} className={`pb-3 text-[14px] font-bold transition-colors relative ${promotionsTab === t ? 'text-[#10182c]' : 'text-gray-400 hover:text-gray-600'}`}>
                {t === 'running' ? 'Running Campaigns (3)' : 'Ad Revenue History (5)'}
                {promotionsTab === t && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c85212]" />}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 border-b border-gray-100">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" placeholder="Search property, buyer, type..." className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-[10px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent" />
            </div>
            <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-bold text-gray-600">STATUS:</span>
                <div className="flex gap-2">
                  {(['all', 'active', 'paused', 'expired'] as const).map((s) => (
                    <button key={s} onClick={() => setPromotionsStatusFilter(s)} className={`px-3 py-1.5 rounded-[8px] text-[12px] font-bold transition-colors ${promotionsStatusFilter === s ? 'bg-[#10182c] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-bold text-gray-600">SORT:</span>
                <select value={promotionsSortBy} onChange={(e) => setPromotionsSortBy(e.target.value)} className="px-3 py-1.5 border border-gray-200 rounded-[8px] text-[12px] font-medium focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent">
                  <option value="newest">Newest Launch</option>
                  <option value="oldest">Oldest Launch</option>
                  <option value="budget">Budget (High to Low)</option>
                  <option value="performance">Best Performance</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 text-left"><input type="checkbox" className="w-4 h-4 rounded border-gray-300" /></th>
                <th className="px-6 py-4 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Property Details</th>
                <th className="px-6 py-4 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Ad Buyer / Advertiser</th>
                <th className="px-6 py-4 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Ad Type</th>
                <th className="px-6 py-4 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Budget Spend</th>
                <th className="px-6 py-4 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Performance Reach</th>
                <th className="px-6 py-4 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider">Admin Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {CAMPAIGNS.map((campaign) => (
                <tr key={campaign.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4"><input type="checkbox" className="w-4 h-4 rounded border-gray-300" /></td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-[14px] text-[#10182c] mb-0.5">{campaign.propertyName}</p>
                    <p className="text-[12px] text-gray-500 flex items-center gap-1"><Calendar size={12} />{campaign.propertyDates}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-[13px] text-[#10182c]">{campaign.advertiserName}</p>
                    <p className="text-[12px] text-gray-500">{campaign.advertiserRole}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold ${campaign.adType === 'Featured Boost' ? 'bg-[#c85212]/10 text-[#c85212]' : 'bg-blue-50 text-blue-600'}`}>
                      <TrendingUp size={12} />{campaign.adType}
                    </span>
                  </td>
                  <td className="px-6 py-4"><p className="font-bold text-[15px] text-[#10182c]">{campaign.budgetSpend}</p></td>
                  <td className="px-6 py-4">
                    <div className="space-y-2">
                      <div>
                        <div className="flex items-center justify-between mb-1"><span className="text-[11px] text-gray-500">Views</span><span className="text-[11px] font-bold text-[#10182c]">{campaign.views.toLocaleString()}</span></div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-[#c85212] rounded-full" style={{ width: `${(campaign.views / campaign.viewsTarget) * 100}%` }} /></div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1"><span className="text-[11px] text-gray-500">Clicks</span><span className="text-[11px] font-bold text-[#10182c]">{campaign.clicks}</span></div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-green-500 rounded-full" style={{ width: `${(campaign.clicks / campaign.clicksTarget) * 100}%` }} /></div>
                        <span className="text-[10px] text-gray-400 mt-0.5 block">{((campaign.clicks / campaign.clicksTarget) * 100).toFixed(1)}% CTR</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4"><span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 text-green-600 text-[11px] font-bold"><div className="w-1.5 h-1.5 bg-green-500 rounded-full" />Active</span></td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button onClick={() => toast.success("Editing campaign...")} className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Edit"><Edit2 size={16} className="text-gray-600" /></button>
                      <button onClick={() => { setSelectedCampaign(campaign); setIsViewCampaignModalOpen(true); }} className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="View"><Eye size={16} className="text-gray-600" /></button>
                      <button onClick={() => toast.success("Campaign deleted")} className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Delete"><Trash2 size={16} className="text-gray-600" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Campaign Modal */}
      <AnimatePresence>
        {isViewCampaignModalOpen && selectedCampaign && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4" onClick={() => setIsViewCampaignModalOpen(false)}>
            <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }} transition={{ duration: 0.2 }} onClick={(e) => e.stopPropagation()} className="bg-white rounded-[20px] overflow-hidden w-full max-w-5xl max-h-[90vh] flex flex-col shadow-xl">
              <div className="bg-white border-b border-gray-100 p-6 shrink-0">
                <div className="flex items-start justify-between">
                  <div><h2 className="font-['Montserrat',sans-serif] text-[22px] font-bold text-[#10182c] mb-1">Campaign Performance</h2><p className="text-gray-500 text-[13px]">{selectedCampaign.propertyName}</p></div>
                  <button onClick={() => setIsViewCampaignModalOpen(false)} className="w-9 h-9 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors shrink-0"><X size={18} /></button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-[12px] border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 text-green-600"><div className="w-1.5 h-1.5 bg-green-500 rounded-full" /><span className="text-[11px] font-bold">Active</span></div>
                    <div className="h-4 w-px bg-gray-300" />
                    <div className="flex items-center gap-1.5 text-[13px] text-gray-600"><Calendar size={14} /><span>{selectedCampaign.propertyDates}</span></div>
                  </div>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold ${selectedCampaign.adType === 'Featured Boost' ? 'bg-[#c85212]/10 text-[#c85212]' : 'bg-blue-50 text-blue-600'}`}><TrendingUp size={12} />{selectedCampaign.adType}</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[["Total Views", selectedCampaign.views.toLocaleString(), `of ${selectedCampaign.viewsTarget.toLocaleString()} target`, "text-[#10182c]"],["Total Clicks", String(selectedCampaign.clicks), `of ${selectedCampaign.clicksTarget} target`, "text-[#10182c]"],["CTR", `${((selectedCampaign.clicks/selectedCampaign.views)*100).toFixed(1)}%`, "Click-through rate", "text-green-600"],["Budget", selectedCampaign.budgetSpend, "Total spend", "text-[#c85212]"]].map(([l,v,s,c]) => (
                    <div key={l} className="bg-white border border-gray-100 rounded-[12px] p-4"><p className="text-[11px] uppercase tracking-wider text-gray-400 font-bold mb-2">{l}</p><p className={`text-[26px] font-bold ${c} leading-none mb-1`}>{v}</p><p className="text-[11px] text-gray-500">{s}</p></div>
                  ))}
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-5">
                  <h3 className="font-bold text-[15px] text-[#10182c] mb-4">Performance Reach</h3>
                  <div className="space-y-5">
                    <div><div className="flex items-center justify-between mb-2"><span className="text-[12px] text-gray-500">Views</span><span className="text-[12px] font-bold text-[#10182c]">{selectedCampaign.views.toLocaleString()}</span></div><div className="h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-[#c85212] rounded-full" style={{ width: `${(selectedCampaign.views/selectedCampaign.viewsTarget)*100}%` }} /></div></div>
                    <div><div className="flex items-center justify-between mb-2"><span className="text-[12px] text-gray-500">Clicks</span><span className="text-[12px] font-bold text-[#10182c]">{selectedCampaign.clicks}</span></div><div className="h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-green-500 rounded-full" style={{ width: `${(selectedCampaign.clicks/selectedCampaign.clicksTarget)*100}%` }} /></div><span className="text-[10px] text-gray-400 mt-1 block">{((selectedCampaign.clicks/selectedCampaign.clicksTarget)*100).toFixed(1)}% CTR</span></div>
                  </div>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] overflow-hidden">
                  <div className="p-4 bg-gray-50 border-b border-gray-100"><h3 className="font-bold text-[15px] text-[#10182c]">Campaign Details</h3></div>
                  <div className="divide-y divide-gray-100">
                    {[["Property", selectedCampaign.propertyName],["Budget", selectedCampaign.budgetSpend],["Duration", selectedCampaign.propertyDates]].map(([l,v]) => (
                      <div key={l} className="flex items-center justify-between p-4"><span className="text-[13px] text-gray-500">{l}</span><span className="text-[13px] font-bold text-[#10182c]">{v}</span></div>
                    ))}
                    <div className="flex items-center justify-between p-4"><span className="text-[13px] text-gray-500">Advertiser</span><div className="text-right"><p className="text-[13px] font-bold text-[#10182c]">{selectedCampaign.advertiserName}</p><p className="text-[11px] text-gray-500">{selectedCampaign.advertiserRole}</p></div></div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 border-t border-gray-100 p-6 shrink-0">
                <div className="flex gap-3">
                  <button onClick={() => { toast.success("Campaign paused successfully"); setIsViewCampaignModalOpen(false); }} className="flex-1 py-2.5 bg-white border border-gray-200 hover:bg-gray-100 text-[#10182c] rounded-[10px] font-bold text-[13px] transition-colors">Pause Campaign</button>
                  <button onClick={() => { toast.success("Opening editor..."); setIsViewCampaignModalOpen(false); }} className="flex-1 py-2.5 bg-[#c85212] hover:bg-[#a6430f] text-white rounded-[10px] font-bold text-[13px] transition-colors">Edit Campaign</button>
                  <button onClick={() => setIsViewCampaignModalOpen(false)} className="px-6 py-2.5 bg-white border border-gray-200 hover:bg-gray-100 text-gray-700 rounded-[10px] font-bold text-[13px] transition-colors">Close</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
