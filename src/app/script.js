const fs = require('fs');

let content = fs.readFileSync('./components/AgentProfilePage.tsx', 'utf8');

// Replace renderPortfolioTab
const startPort = content.indexOf('const renderPortfolioTab = () => (');
const endPort = content.indexOf('const renderClientsTab = () => (');
if (startPort !== -1 && endPort !== -1) {
  content = content.substring(0, startPort) + `  const [listingFilter, setListingFilter] = useState('All');

  const renderListingsTab = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">My Listings</h1>
          <p className="text-gray-500 text-[14px] mt-1">Manage your active and expired listings.</p>
        </div>
        <button onClick={() => setModalState('property')} className="bg-[#10182c] hover:bg-[#1a2642] text-white px-5 py-2.5 rounded-[12px] text-[14px] font-bold transition-colors shadow-sm flex items-center gap-2">
          <Plus size={18} /> Add Listing
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 border-b border-gray-100">
        {['All', 'Active', 'Expired', 'Most Viewed', 'Most Enquiries'].map(filter => (
          <button 
            key={filter}
            onClick={() => setListingFilter(filter)}
            className={\`px-4 py-2 rounded-full text-[13px] font-bold whitespace-nowrap transition-colors \${listingFilter === filter ? 'bg-[#10182c] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}\`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings
          .filter(p => {
            if (listingFilter === 'All') return true;
            if (listingFilter === 'Active') return p.status === 'Active';
            if (listingFilter === 'Expired') return p.status === 'Expired';
            return true;
          })
          .sort((a, b) => {
            if (listingFilter === 'Most Viewed') return b.views - a.views;
            if (listingFilter === 'Most Enquiries') return b.enquiries - a.enquiries;
            return 0;
          })
          .map(prop => (
          <div key={prop.id} className="group flex flex-col bg-white rounded-[24px] p-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="relative h-[200px] w-full rounded-[16px] overflow-hidden mb-4">
              <ImageWithFallback src={prop.image} alt={prop.address} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 left-3">
                <span className={\`px-3 py-1 rounded-full text-[11px] font-bold shadow-sm flex items-center gap-1.5 \${prop.status === 'Active' ? 'bg-[#10b981] text-white' : 'bg-gray-600 text-white'}\`}>
                  {prop.status === 'Active' && <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>}
                  {prop.status}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-lg font-bold text-[14px]">
                {prop.price}
              </div>
            </div>
            
            <div className="px-2 pb-2 flex-1 flex flex-col">
              <h4 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[18px] mb-1 truncate">{prop.address}</h4>
              <p className="text-[13px] text-gray-500 mb-4 flex items-center gap-1"><MapPin size={14} /> {prop.location}</p>

              <div className="grid grid-cols-3 gap-2 bg-[#f9fafb] rounded-xl p-3 mb-4 border border-gray-100">
                <div className="flex flex-col text-center border-r border-gray-200">
                  <span className="text-[#10182c] font-bold text-[16px]">{prop.views}</span>
                  <span className="text-[10px] uppercase font-bold text-gray-400">Views</span>
                </div>
                <div className="flex flex-col text-center border-r border-gray-200">
                  <span className="text-[#10182c] font-bold text-[16px]">{prop.clicks}</span>
                  <span className="text-[10px] uppercase font-bold text-gray-400">Clicks</span>
                </div>
                <div className="flex flex-col text-center">
                  <span className="text-[#c85212] font-bold text-[16px]">{prop.enquiries}</span>
                  <span className="text-[10px] uppercase font-bold text-gray-400">Leads</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 mt-auto">
                <button 
                  onClick={() => setModalState('manage')}
                  className="bg-white border border-gray-200 hover:bg-gray-50 text-[#10182c] py-2 rounded-xl flex flex-col items-center justify-center transition-colors text-[11px] font-bold gap-1">
                  <Edit2 size={14} /> Edit
                </button>
                <button 
                  onClick={() => toast.success("Boost activated!")}
                  className="bg-orange-50 border border-orange-100 hover:bg-orange-100 text-[#c85212] py-2 rounded-xl flex flex-col items-center justify-center transition-colors text-[11px] font-bold gap-1">
                  <TrendingUp size={14} /> Boost
                </button>
                <button 
                  onClick={() => toast.success("Listing closed")} 
                  className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 py-2 rounded-xl flex flex-col items-center justify-center transition-colors text-[11px] font-bold gap-1">
                  <CheckCircle2 size={14} /> Close
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  ` + content.substring(endPort);
}

fs.writeFileSync('./components/AgentProfilePage.tsx', content);
