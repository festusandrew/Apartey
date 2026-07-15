import { useState } from "react";
import {
  Search, Eye, Check, X, XCircle, CheckCircle2, AlertCircle,
  Shield, FileText
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner@2.0.3";

const propertyListingApprovalsData = [
  { id: 1, propertyName: "4 Bedroom Villa in Lekki", type: "House", listedBy: "Daniel Egbochuo (Homeowner)", location: "Lagos, Nigeria", submittedDate: "2026-05-18", submittedTime: "14:30", status: "Pending", hasAudit: true, hasCadastralNumber: true, cadastralNumber: "CAD-LEK-82910" },
  { id: 2, propertyName: "Studio Appt - Yaba", type: "Apartment", listedBy: "Sarah Jenkins (PM)", location: "Lagos, Nigeria", submittedDate: "2026-05-17", submittedTime: "09:15", status: "Pending", hasAudit: true, hasCadastralNumber: true, cadastralNumber: "CAD-YAB-45621" },
  { id: 3, propertyName: "Luxury VI Penthouse", type: "Apartment", listedBy: "Victoria Estates", location: "Lagos, Nigeria", submittedDate: "2026-05-19", submittedTime: "11:00", status: "Pending", hasAudit: true, hasCadastralNumber: false, cadastralNumber: "" },
];

const renterReferenceChecksData = [
  { id: 1, renterName: "Michael Chen", propertyName: "2 Bed Flat in Camden", requestedBy: "Sarah Jenkins (PM)", location: "London, UK", submittedDate: "2026-05-20", submittedTime: "10:15", status: "Pending", hasAudit: false },
  { id: 2, renterName: "Amara Okafor", propertyName: "Studio in Ikoyi", requestedBy: "Daniel Egbochuo (Homeowner)", location: "Lagos, Nigeria", submittedDate: "2026-05-19", submittedTime: "16:45", status: "Pending", hasAudit: true },
];

type ApprovalItem = typeof propertyListingApprovalsData[0];

export function HomeownerApprovalsTab() {
  const [approvalsTab, setApprovalsTab] = useState<'listings' | 'references'>('listings');
  const [approvalsSearchQuery, setApprovalsSearchQuery] = useState("");
  const [approvalsStatusFilter, setApprovalsStatusFilter] = useState("All Statuses");
  const [approvalsSortBy, setApprovalsSortBy] = useState("Newest");
  const [selectedApprovalItem, setSelectedApprovalItem] = useState<ApprovalItem | null>(null);
  const [isApprovalModalOpen, setIsApprovalModalOpen] = useState(false);
  const [registrySearchKey, setRegistrySearchKey] = useState("CAD-LEK-82910");
  const [showRejectionReason, setShowRejectionReason] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");
  const [hasRegistryMatch, setHasRegistryMatch] = useState(true);
  const [registrySearched, setRegistrySearched] = useState(true);

  const currentData = approvalsTab === 'listings' ? propertyListingApprovalsData : renterReferenceChecksData;

  const closeModal = () => {
    setIsApprovalModalOpen(false);
    setShowRejectionReason(false);
    setRejectionReason("");
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">Approvals & Requests</h1>
      </div>

      <div className="flex gap-4">
        {(['listings', 'references'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setApprovalsTab(t)}
            className={`px-6 py-3 rounded-[12px] text-[14px] font-medium transition-colors ${approvalsTab === t ? 'bg-white text-[#10182c] shadow-sm border border-gray-200' : 'bg-transparent text-gray-500 hover:text-gray-700'}`}
          >
            {t === 'listings' ? 'Property Listing Approvals' : 'Renter Reference Checks'}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="relative w-full md:w-auto">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search listings"
            value={approvalsSearchQuery}
            onChange={(e) => setApprovalsSearchQuery(e.target.value)}
            className="w-full md:w-[320px] border border-gray-200 rounded-[10px] pl-11 pr-4 py-2.5 text-[13px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]"
          />
        </div>
        <div className="flex gap-3 items-center">
          <span className="text-[13px] text-gray-500">Filter by</span>
          <select value={approvalsStatusFilter} onChange={(e) => setApprovalsStatusFilter(e.target.value)} className="border border-gray-200 rounded-[8px] px-4 py-2 text-[13px] text-[#10182c] focus:outline-none focus:border-[#c85212] bg-white">
            <option>All Statuses</option><option>Pending</option><option>Approved</option><option>Rejected</option>
          </select>
          <span className="text-[13px] text-gray-500">Sort by</span>
          <select value={approvalsSortBy} onChange={(e) => setApprovalsSortBy(e.target.value)} className="border border-gray-200 rounded-[8px] px-4 py-2 text-[13px] text-[#10182c] focus:outline-none focus:border-[#c85212] bg-white">
            <option>Newest</option><option>Oldest</option><option>A-Z</option>
          </select>
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-[12px] shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left px-6 py-4"><input type="checkbox" className="w-4 h-4 rounded border-gray-300" /></th>
              <th className="text-left px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">{approvalsTab === 'listings' ? 'Property' : 'Renter'}</th>
              <th className="text-left px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Type</th>
              <th className="text-left px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">{approvalsTab === 'listings' ? 'Listed By' : 'Requested By'}</th>
              <th className="text-left px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Location</th>
              <th className="text-left px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Submitted</th>
              <th className="text-left px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
              <th className="text-left px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {approvalsTab === 'listings' && propertyListingApprovalsData.map((item) => (
              <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4"><input type="checkbox" className="w-4 h-4 rounded border-gray-300" /></td>
                <td className="px-6 py-4"><div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#c85212]"></div><span className="text-[13px] font-medium text-[#10182c]">{item.propertyName}</span></div></td>
                <td className="px-6 py-4"><span className="text-[13px] text-gray-600">{item.type}</span></td>
                <td className="px-6 py-4"><span className="text-[13px] text-gray-600">{item.listedBy}</span></td>
                <td className="px-6 py-4"><span className="text-[13px] text-gray-600">{item.location}</span></td>
                <td className="px-6 py-4"><div className="text-[13px] text-gray-600"><div>{item.submittedDate}</div><div className="text-[11px] text-gray-400">{item.submittedTime}</div></div></td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500"></div><span className="text-[12px] font-medium text-green-700">{item.status}</span></div>
                    {item.hasAudit && <span className="px-2 py-0.5 rounded-[6px] bg-blue-50 text-blue-700 text-[11px] font-medium">Audit</span>}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <button onClick={() => { setSelectedApprovalItem(item); setIsApprovalModalOpen(true); setRegistrySearchKey(item.cadastralNumber || ""); setHasRegistryMatch(item.hasCadastralNumber); setRegistrySearched(true); setShowRejectionReason(false); setRejectionReason(""); }} className="text-gray-400 hover:text-gray-600 transition-colors"><Eye size={18} /></button>
                    <button onClick={() => toast.success(`Approved ${item.propertyName}`)} className="text-gray-400 hover:text-green-600 transition-colors"><Check size={18} /></button>
                    <button onClick={() => toast.error(`Rejected ${item.propertyName}`)} className="text-gray-400 hover:text-red-600 transition-colors"><X size={18} /></button>
                  </div>
                </td>
              </tr>
            ))}
            {approvalsTab === 'references' && renterReferenceChecksData.map((item) => (
              <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4"><input type="checkbox" className="w-4 h-4 rounded border-gray-300" /></td>
                <td className="px-6 py-4"><div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#c85212]"></div><span className="text-[13px] font-medium text-[#10182c]">{item.renterName}</span></div></td>
                <td className="px-6 py-4"><span className="text-[13px] text-gray-600">{item.propertyName}</span></td>
                <td className="px-6 py-4"><span className="text-[13px] text-gray-600">{item.requestedBy}</span></td>
                <td className="px-6 py-4"><span className="text-[13px] text-gray-600">{item.location}</span></td>
                <td className="px-6 py-4"><div className="text-[13px] text-gray-600"><div>{item.submittedDate}</div><div className="text-[11px] text-gray-400">{item.submittedTime}</div></div></td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500"></div><span className="text-[12px] font-medium text-green-700">{item.status}</span></div>
                    {item.hasAudit && <span className="px-2 py-0.5 rounded-[6px] bg-blue-50 text-blue-700 text-[11px] font-medium">Audit</span>}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <button onClick={() => toast.info(`Viewing ${item.renterName}`)} className="text-gray-400 hover:text-gray-600 transition-colors"><Eye size={18} /></button>
                    <button onClick={() => toast.success(`Approved ${item.renterName}`)} className="text-gray-400 hover:text-green-600 transition-colors"><Check size={18} /></button>
                    <button onClick={() => toast.error(`Rejected ${item.renterName}`)} className="text-gray-400 hover:text-red-600 transition-colors"><X size={18} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Approval Modal */}
      <AnimatePresence>
        {isApprovalModalOpen && selectedApprovalItem && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }} transition={{ duration: 0.2 }} onClick={(e) => e.stopPropagation()} className="bg-white rounded-[20px] overflow-hidden w-full max-w-5xl max-h-[90vh] flex flex-col shadow-xl">
              <div className="p-6 border-b border-gray-100 flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-[10px] bg-orange-50 flex items-center justify-center shrink-0"><Shield size={20} className="text-[#c85212]" /></div>
                  <div>
                    <h2 className="text-[18px] font-bold text-[#10182c]">Property Listing & Cadastral Inspection</h2>
                    <p className="text-[12px] text-gray-500 mt-0.5">SuperAdmin verification workspace & Land registry alignment</p>
                  </div>
                </div>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 transition-colors"><X size={20} /></button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left — Submission Data */}
                  <div>
                    <div className="flex items-center gap-2 mb-4"><FileText size={16} className="text-gray-400" /><h3 className="text-[13px] font-bold text-[#10182c] uppercase tracking-wider">Listing Submission Data</h3></div>
                    <div className="space-y-4">
                      <div><label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Property Name</label><p className="text-[15px] font-bold text-[#10182c]">{selectedApprovalItem.propertyName}</p></div>
                      <div className="grid grid-cols-2 gap-4">
                        <div><label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Property Type</label><p className="text-[14px] text-gray-700">{selectedApprovalItem.type}</p></div>
                        <div><label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Submitted By</label><p className="text-[14px] text-gray-700">{selectedApprovalItem.listedBy}</p></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div><label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Location</label><p className="text-[14px] text-gray-700">{selectedApprovalItem.location}</p></div>
                        <div><label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Timestamp</label><p className="text-[14px] text-gray-700">{selectedApprovalItem.submittedDate} @ {selectedApprovalItem.submittedTime}</p></div>
                      </div>
                      <div><label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Request Status</label><span className="inline-block px-3 py-1 rounded-[6px] bg-yellow-50 text-yellow-700 text-[12px] font-bold uppercase">Pending</span></div>
                      <div className="bg-orange-50 border border-orange-200 rounded-[12px] p-4 mt-6">
                        <div className="flex items-start gap-3">
                          <Shield size={18} className="text-orange-600 shrink-0 mt-0.5" />
                          <div><h4 className="text-[13px] font-bold text-orange-900 mb-1">Listing Pre-screening Policy</h4><p className="text-[12px] text-orange-800 leading-relaxed">Verify that ownership identity documents and cadastral coordinates are certified clean before approving to listing boards.</p></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right — Cadastral Registry */}
                  <div>
                    <div className="flex items-center gap-2 mb-4"><div className="w-4 h-4 bg-blue-100 rounded flex items-center justify-center"><div className="w-2 h-2 bg-blue-600 rounded"></div></div><h3 className="text-[13px] font-bold text-[#10182c] uppercase tracking-wider">National Cadastral Registry Hub</h3></div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Registry Database Search Key</label>
                        <div className="flex gap-2">
                          <input type="text" value={registrySearchKey} onChange={(e) => setRegistrySearchKey(e.target.value)} className="flex-1 border border-gray-200 rounded-[8px] px-4 py-2 text-[13px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]" placeholder="CAD-LEK-82910" />
                          <button onClick={() => { setRegistrySearched(true); if (registrySearchKey.trim()) { setHasRegistryMatch(true); toast.success("Registry match found!"); } else { setHasRegistryMatch(false); toast.error("No registry match found"); } }} className="bg-[#10182c] hover:bg-[#1a2642] text-white px-4 py-2 rounded-[8px] text-[13px] font-bold transition-colors">Pull Registry</button>
                        </div>
                      </div>
                      {registrySearched && (
                        hasRegistryMatch ? (
                          <>
                            <div className="bg-green-50 border border-green-200 rounded-[12px] p-3 flex items-center justify-between"><div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-600" /><span className="text-[12px] font-bold text-green-700 uppercase tracking-wider">Registry Match Connected</span></div><span className="text-[11px] text-green-600">{registrySearchKey}</span></div>
                            <div className="bg-green-50 border border-green-200 rounded-[12px] p-4"><div className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center shrink-0"><Check size={14} className="text-white" /></div><div><h4 className="text-[13px] font-bold text-green-900 mb-1">True Title Alignment Verified</h4><p className="text-[12px] text-green-800 leading-relaxed">The land registry title corresponds with owner name "Daniel Egbochuo".</p></div></div></div>
                            <div className="grid grid-cols-2 gap-4 pt-2">
                              {[["Registered Owner","Daniel Egbochuo"],["Zoning Code","Residential (Zone R-2)"],["Parcel Dimension","820 sqm"],["Registry Assessed Value","€350,000.00"],["Disputed Status","None (Clear Title)"],["Coordinates","6.4281° N, 3.4219° E"]].map(([l,v]) => (
                                <div key={l}><label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">{l}</label><p className="text-[13px] font-medium text-gray-700">{v}</p></div>
                              ))}
                            </div>
                            <div><label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Deed Legal Description</label><div className="bg-gray-50 border border-gray-200 rounded-[8px] p-3"><p className="text-[12px] text-gray-600 leading-relaxed">Plot 14, Block B, Lekki Phase 1 Residential Scheme, Eti-Osa LGA</p></div></div>
                          </>
                        ) : (
                          <>
                            <div className="bg-red-50 border border-red-200 rounded-[12px] p-3 flex items-center gap-2"><XCircle size={16} className="text-red-600" /><span className="text-[12px] font-bold text-red-700 uppercase tracking-wider">No Registry Match Found</span></div>
                            <div className="bg-red-50 border border-red-200 rounded-[12px] p-4"><div className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center shrink-0"><AlertCircle size={14} className="text-white" /></div><div><h4 className="text-[13px] font-bold text-red-900 mb-1">Cadastral Number Not Found</h4><p className="text-[12px] text-red-800 leading-relaxed">This property does not have a valid cadastral registration number in the national land registry database. The listing cannot be approved without proper land title verification.</p></div></div></div>
                            <div className="bg-yellow-50 border border-yellow-200 rounded-[12px] p-4"><div className="flex items-start gap-3"><AlertCircle size={18} className="text-yellow-600 shrink-0 mt-0.5" /><div><h4 className="text-[13px] font-bold text-yellow-900 mb-2">Action Required</h4><ul className="text-[12px] text-yellow-800 leading-relaxed space-y-1 list-disc list-inside"><li>Request property owner to provide valid cadastral registration</li><li>Verify land title documentation with local land registry office</li><li>Reject listing until proper documentation is submitted</li></ul></div></div></div>
                            <div className="border border-gray-200 rounded-[12px] p-4"><p className="text-[12px] text-gray-600 text-center">Registry details unavailable - cadastral verification required before approval</p></div>
                          </>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-50 border-t border-gray-100">
                {showRejectionReason ? (
                  <div className="space-y-4">
                    <div><label className="block text-[12px] font-bold text-gray-700 mb-2">Rejection Reason</label><textarea value={rejectionReason} onChange={(e) => setRejectionReason(e.target.value)} placeholder="Please provide a reason for rejecting this listing..." rows={4} className="w-full border border-gray-200 rounded-[10px] px-4 py-3 text-[13px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212] resize-none" /></div>
                    <div className="flex items-center justify-end gap-3">
                      <button onClick={() => { setShowRejectionReason(false); setRejectionReason(""); }} className="text-gray-600 hover:text-gray-800 text-[14px] font-medium transition-colors">Cancel</button>
                      <button onClick={() => { if (rejectionReason.trim()) { toast.error(`Rejected ${selectedApprovalItem.propertyName}: ${rejectionReason}`); closeModal(); } else { toast.error("Please provide a rejection reason"); } }} className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-[10px] text-[14px] font-bold transition-colors">Confirm Rejection</button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <button onClick={closeModal} className="text-gray-600 hover:text-gray-800 text-[14px] font-medium transition-colors">Dismiss Action</button>
                    <div className="flex gap-3">
                      <button onClick={() => setShowRejectionReason(true)} className="text-red-600 hover:text-red-700 text-[14px] font-bold transition-colors">Reject Listing</button>
                      <button onClick={() => { toast.success(`Approved and published ${selectedApprovalItem.propertyName}`); closeModal(); }} className="bg-[#c85212] hover:bg-[#b34810] text-white px-6 py-2.5 rounded-[10px] text-[14px] font-bold transition-colors">Approve & Publish Listing</button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
