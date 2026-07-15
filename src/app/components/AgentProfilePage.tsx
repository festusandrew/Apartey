import { useState, useRef } from "react";
import { Link } from "react-router";
import { 
  MapPin, Globe, Phone, Mail, Clock, Star, Edit2, Share2, Heart,
  LayoutDashboard, User, MessageSquare, Settings, Menu, Bell, Search, 
  LogOut, ChevronDown, Send, Paperclip, MoreVertical, Shield, BellRing, 
  Lock, Building, Calendar, Plus, Activity, CheckCircle2, AlertCircle, 
  XCircle, RefreshCw, CreditCard, TrendingUp, Receipt, X, Check, Upload, 
  Image as ImageIcon, Users, Briefcase, Award, Languages, Kanban, ClipboardList,
  Download, Loader2, FileText, Camera
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { toast } from "sonner@2.0.3";
import { RenterBoardPreview } from "./RenterBoardPreview";

export function AgentProfilePage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [crmTab, setCrmTab] = useState<'owners' | 'renters'>('owners');

  // Interactive States
  const [isExporting, setIsExporting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [modalState, setModalState] = useState<'none' | 'region' | 'language' | 'lead' | 'property' | 'client' | 'scan' | 'manage' | 'match'>('none');
  const [leadSearch, setLeadSearch] = useState("");
  const [clientSearch, setClientSearch] = useState("");

  // Property Management Modals
  const [showQuickAddModal, setShowQuickAddModal] = useState(false);
  const [showCompleteListingModal, setShowCompleteListingModal] = useState(false);
  const [selectedStoredProperty, setSelectedStoredProperty] = useState<number | null>(null);

  // Quick Add Form State
  const [quickAddForm, setQuickAddForm] = useState({
    address: "",
    propertyType: "",
    beds: "",
    baths: "",
    size: "",
    notes: "",
    photos: [] as string[]
  });

  // Complete Listing Form State
  const [completeListingForm, setCompleteListingForm] = useState({
    headline: "",
    description: "",
    price: "",
    deposit: "",
    availableFrom: "",
    leaseTerm: "",
    furnished: "",
    parking: "",
    petFriendly: "",
    amenities: [] as string[],
    photos: [] as string[]
  });

  const bioRef = useRef<HTMLTextAreaElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const avatarInputRef = useRef<HTMLInputElement>(null);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setIsSidebarOpen(false);
  };

  const closeModal = () => setModalState('none');

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { id: "listings", label: "Portfolio Management", icon: <Building size={18} /> },
    { id: "enquiries", label: "Enquiries", icon: <MessageSquare size={18} />, badge: "12" },
    { id: "performance", label: "Performance", icon: <TrendingUp size={18} /> },
    { id: "profile", label: "Profile", icon: <User size={18} /> },
    { id: "renter-board", label: "Renter Board", icon: <ClipboardList size={18} /> },
  ];

  const bottomNavItems = [
    { id: "settings", label: "Settings", icon: <Settings size={18} /> },
    { id: "logout", label: "Log Out", icon: <LogOut size={18} /> },
  ];

  // Data States
  const [agentProfile, setAgentProfile] = useState({
    name: "Eleanor Thompson",
    title: "Senior Property Manager",
    agency: "Thompson & Co Estates",
    agencyLogo: "https://images.unsplash.com/photo-1770507423228-85dd82d418da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwZ2VvbWV0cmljJTIwbG9nbyUyMHNpZ258ZW58MXx8fHwxNzczNjY3NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    photo: "https://images.unsplash.com/photo-1770199105692-9e52ff137cad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjBwcm9mZXNzaW9uYWwlMjBzbWlsaW5nfGVufDF8fHx8MTc3MzY2NzQ2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    experience: "12 Years",
    licence: "ARLA 9845210",
    languages: ["English", "French"],
    regions: ["Central London", "North London"],
    responseTime: "< 1 hour",
    successfulDeals: 342,
    rating: 4.9,
    reviewsCount: 128,
    bio: "I specialize in high-end residential lettings and property management across London. My goal is to ensure property owners maximize their yields while providing tenants with exceptional homes and responsive service. With over a decade of experience, I handle everything from finding the right tenant to comprehensive portfolio management, taking the stress out of property ownership.",
    email: "eleanor@thompsonestates.co.uk",
    phone: "+44 (0) 7700 900456"
  });

  const stages = ['New', 'Contacted', 'Viewing Scheduled', 'Closed'];
  
  const [leads, setLeads] = useState([
    { id: 1, name: "David Chen", type: "Renter", property: "10 Oyo Street", stage: "New", date: "2 hrs ago", notes: "Looking for 2-bed, no pets.", phone: "+44 7700 900111", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop" },
    { id: 2, name: "Sarah Jenkins", type: "Renter", property: "15 Thames View", stage: "New", date: "4 hrs ago", notes: "Needs moving date ASAP.", phone: "+44 7700 900222", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
    { id: 3, name: "Marcus Okafor", type: "Renter", property: "2 Pankshin Road", stage: "Contacted", date: "Yesterday", notes: "Needs moving date around 1st next month.", phone: "+44 7700 900333", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
    { id: 4, name: "Emma Wilson", type: "Renter", property: "15 Thames View", stage: "Viewing Scheduled", date: "2 days ago", notes: "Viewing set for Thursday 2pm.", phone: "+44 7700 900444", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
    { id: 5, name: "James Smith", type: "Renter", property: "10 Oyo Street", stage: "Closed", date: "3 days ago", notes: "Offer agreed and deposit paid.", phone: "+44 7700 900555", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
  ]);

  // Stored Properties (not yet listed live on platform)
  const [storedProperties, setStoredProperties] = useState([
    { id: 1, address: "42 Victoria Street", propertyType: "Apartment", beds: 2, baths: 1, size: "850 sq ft", notes: "Owner wants to list in June", addedDate: "May 10, 2026", photos: [] as string[] },
    { id: 2, address: "18 Kings Road", propertyType: "House", beds: 4, baths: 3, size: "1,800 sq ft", notes: "Pending renovation completion", addedDate: "May 5, 2026", photos: [] as string[] },
  ]);

  // Live Listings on Platform
  const [portfolio, setPortfolio] = useState([
    { id: 1, address: "10 Oyo Street", headline: "Modern 2-Bed Flat in Islington", location: "Islington, London", price: "£2,500/mo", status: "Active", approvalStatus: "approved", views: 245, clicks: 112, enquiries: 14, listedDate: "12 Feb 2026", image: "https://images.unsplash.com/photo-1706808849802-8f876ade0d1f?w=1080&q=80" },
    { id: 2, address: "2 Pankshin Road", headline: "Spacious Studio in Camden", location: "Camden, London", price: "£1,800/mo", status: "Expired", approvalStatus: "approved", views: 432, clicks: 230, enquiries: 32, listedDate: "05 Jan 2026", image: "https://images.unsplash.com/photo-1664813954641-1ffcb7b55fd1?w=1080&q=80" },
    { id: 3, address: "15 Thames View", headline: "Luxury Penthouse with River View", location: "Canary Wharf, London", price: "£3,200/mo", status: "Active", approvalStatus: "approved", views: 189, clicks: 95, enquiries: 8, listedDate: "01 Mar 2026", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1080&q=80" },
    { id: 4, address: "5 Highgate Lane", headline: "Charming 1-Bed Garden Flat", location: "Highgate, London", price: "£1,950/mo", status: "Pending", approvalStatus: "pending_approval", views: 0, clicks: 0, enquiries: 0, listedDate: "18 May 2026", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1080&q=80" }
  ]);

  // Derived Search Results
  const filteredLeads = leads.filter(l => l.name.toLowerCase().includes(leadSearch.toLowerCase()) || l.property.toLowerCase().includes(leadSearch.toLowerCase()));
  const filteredListings = portfolio.filter(p => p.address.toLowerCase().includes(clientSearch.toLowerCase()) || p.location.toLowerCase().includes(clientSearch.toLowerCase()));

  // Render Functions
  const renderDashboardTab = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">Dashboard</h1>
          <p className="text-gray-500 text-[14px] mt-1">Welcome back, {agentProfile.name.split(' ')[0]}. Here's your portfolio overview.</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setShowQuickAddModal(true)} className="bg-[#10182c] hover:bg-[#1a2642] text-white px-5 py-2.5 rounded-[12px] text-[14px] font-bold transition-colors shadow-sm flex items-center gap-2">
            <Plus size={18} /> Add Property
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-[20px] shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#10182c]/5 text-[#10182c] flex items-center justify-center shrink-0"><Building size={20} /></div>
          <div>
            <p className="text-[13px] text-gray-500 font-medium">Active Listings</p>
            <h3 className="font-['Montserrat',sans-serif] text-[24px] font-bold text-[#10182c]">{portfolio.filter(p => p.status === 'Active').length}</h3>
          </div>
        </div>
        <div className="bg-white p-5 rounded-[20px] shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#c85212]/10 text-[#c85212] flex items-center justify-center shrink-0"><MessageSquare size={20} /></div>
          <div>
            <p className="text-[13px] text-gray-500 font-medium">Total Enquiries (This Month)</p>
            <div className="flex items-end gap-2">
              <h3 className="font-['Montserrat',sans-serif] text-[24px] font-bold text-[#10182c]">54</h3>
            </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-[20px] shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#fbff79]/40 text-[#a6b000] flex items-center justify-center shrink-0"><CheckCircle2 size={20} className="text-[#a6b000]" /></div>
          <div>
            <p className="text-[13px] text-gray-500 font-medium">Response Rate</p>
            <h3 className="font-['Montserrat',sans-serif] text-[24px] font-bold text-[#10182c]">98%</h3>
          </div>
        </div>
        <div className="bg-white p-5 rounded-[20px] shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0"><Clock size={20} /></div>
          <div>
            <p className="text-[13px] text-gray-500 font-medium">Avg Response Time</p>
            <h3 className="font-['Montserrat',sans-serif] text-[24px] font-bold text-[#10182c]">15 mins</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Pipeline */}
          <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c] flex items-center gap-2"><Kanban size={20} className="text-[#c85212]" /> Pipeline Overview</h2>
              <button onClick={() => setActiveTab('enquiries')} className="text-[#c85212] text-[13px] font-bold hover:underline">All Leads</button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1 bg-[#f8f9fc] p-4 rounded-[16px] border border-gray-100">
                <div className="text-[12px] font-bold text-blue-600 uppercase tracking-wider mb-1">New</div>
                <div className="text-[24px] font-bold text-[#10182c]">{leads.filter(l => l.stage === 'New').length}</div>
              </div>
              <div className="flex-1 bg-[#f8f9fc] p-4 rounded-[16px] border border-gray-100">
                <div className="text-[12px] font-bold text-purple-600 uppercase tracking-wider mb-1">Contacted</div>
                <div className="text-[24px] font-bold text-[#10182c]">{leads.filter(l => l.stage === 'Contacted').length}</div>
              </div>
              <div className="flex-1 bg-[#f8f9fc] p-4 rounded-[16px] border border-gray-100">
                <div className="text-[12px] font-bold text-orange-600 uppercase tracking-wider mb-1">Viewing</div>
                <div className="text-[24px] font-bold text-[#10182c]">{leads.filter(l => l.stage === 'Viewing Scheduled').length}</div>
              </div>
              <div className="flex-1 bg-[#f8f9fc] p-4 rounded-[16px] border border-gray-100">
                <div className="text-[12px] font-bold text-green-600 uppercase tracking-wider mb-1">Closed</div>
                <div className="text-[24px] font-bold text-[#10182c]">{leads.filter(l => l.stage === 'Closed').length}</div>
              </div>
            </div>

            <h3 className="text-[14px] font-bold text-[#10182c] mb-4">Latest Interactions</h3>
            <div className="space-y-3">
              {leads.slice(0, 3).map((lead) => (
                <div key={lead.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-[#f9fafb] rounded-[16px] border border-gray-50 gap-4 hover:border-[#c85212]/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0">
                      {lead.avatar ? <ImageWithFallback src={lead.avatar} alt={lead.name} className="w-full h-full object-cover"/> : <User size={16} className="m-auto mt-2 text-gray-400" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#10182c] text-[14px]">{lead.name}</h4>
                      <p className="text-[12px] text-gray-500">{lead.property} • <span className="font-medium text-[#10182c]">{lead.date}</span></p>
                    </div>
                  </div>
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
                    <span className={`text-[10px] uppercase font-bold px-2.5 py-1 rounded-md shrink-0 ${lead.stage === 'New' ? 'bg-blue-50 text-blue-600' : lead.stage === 'Contacted' ? 'bg-purple-50 text-purple-600' : lead.stage === 'Viewing Scheduled' ? 'bg-orange-50 text-orange-600' : 'bg-green-50 text-green-600'}`}>{lead.stage}</span>
                    <div className="flex gap-1.5 ml-2">
                      <button onClick={() => toast.success(`Calling ${lead.name}...`)} className="p-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:text-[#10182c] transition-colors shadow-sm"><Phone size={14}/></button>
                      <button onClick={() => toast.success(`Opening Message...`)} className="p-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:text-[#10182c] transition-colors shadow-sm"><MessageSquare size={14}/></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Top Performing Properties */}
          <div className="bg-[#10182c] rounded-[24px] p-6 shadow-xl border border-gray-800 text-white">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-['Montserrat',sans-serif] text-[18px] font-bold flex items-center gap-2"><Star size={20} className="text-[#fbff79]" /> Top Properties</h2>
              <button onClick={() => setActiveTab('listings')} className="text-[#fbff79] text-[13px] font-bold hover:underline">View Portfolio</button>
            </div>
            <div className="space-y-4">
              {portfolio.slice(0, 2).map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-white/5 rounded-[16px] border border-white/10 relative">
                  {item.approvalStatus === 'pending_approval' && (
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-1 rounded-full text-[9px] font-bold bg-[#c85212] text-white uppercase tracking-wider flex items-center gap-1">
                        <Clock size={9} /> Pending
                      </span>
                    </div>
                  )}
                  <div className="w-[60px] h-[60px] rounded-[12px] overflow-hidden shrink-0">
                    <ImageWithFallback src={item.image} alt={item.headline} className="w-full h-full object-cover"/>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[14px] truncate">{item.address}</h4>
                    <div className="flex gap-4 mt-2">
                      <div className="text-[12px]"><span className="text-[#fbff79] font-bold">{item.views}</span> <span className="text-gray-400">Views</span></div>
                      <div className="text-[12px]"><span className="text-[#fbff79] font-bold">{item.enquiries}</span> <span className="text-gray-400">Leads</span></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Upcoming Viewings (Right column) */}
          <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
            <h2 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c] mb-6 flex items-center gap-2"><Calendar size={20} className="text-[#c85212]" /> Upcoming Viewings</h2>
            <div className="space-y-4">
              <div className="flex gap-4 border-l-2 border-[#c85212] pl-3 py-1">
                <div className="text-center shrink-0">
                  <div className="text-[11px] font-bold text-gray-400 uppercase">Today</div>
                  <div className="text-[16px] font-bold text-[#10182c]">14:00</div>
                </div>
                <div>
                  <h4 className="font-bold text-[#10182c] text-[14px]">Emma Wilson</h4>
                  <p className="text-[12px] text-gray-500">15 Thames View</p>
                </div>
              </div>
              <div className="flex gap-4 border-l-2 border-gray-200 pl-3 py-1">
                <div className="text-center shrink-0">
                  <div className="text-[11px] font-bold text-gray-400 uppercase">Tmrw</div>
                  <div className="text-[16px] font-bold text-[#10182c]">10:30</div>
                </div>
                <div>
                  <h4 className="font-bold text-[#10182c] text-[14px]">David Chen</h4>
                  <p className="text-[12px] text-gray-500">10 Oyo Street</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 py-2.5 bg-[#f8f9fc] hover:bg-gray-100 text-[#10182c] rounded-[12px] text-[13px] font-bold transition-colors">Open Calendar</button>
          </div>

          {/* Quick Actions Panel */}
          <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
            <h2 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c] mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <button onClick={() => setShowQuickAddModal(true)} className="w-full flex items-center gap-3 p-4 rounded-[16px] border border-gray-100 hover:border-[#10182c] hover:bg-gray-50 transition-all text-left group">
                <div className="w-10 h-10 rounded-full bg-[#10182c]/5 text-[#10182c] flex items-center justify-center group-hover:bg-[#10182c] group-hover:text-white transition-colors"><Plus size={18} /></div>
                <div>
                  <h4 className="font-bold text-[#10182c] text-[14px]">Add Property</h4>
                  <p className="text-[12px] text-gray-500">Store property in portfolio</p>
                </div>
              </button>
              <button onClick={() => toast.success("Opening boost options")} className="w-full flex items-center gap-3 p-4 rounded-[16px] border border-gray-100 hover:border-[#c85212] hover:bg-orange-50/50 transition-all text-left group">
                <div className="w-10 h-10 rounded-full bg-[#c85212]/10 text-[#c85212] flex items-center justify-center group-hover:bg-[#c85212] group-hover:text-white transition-colors"><TrendingUp size={18} /></div>
                <div>
                  <h4 className="font-bold text-[#10182c] text-[14px]">Boost Listing</h4>
                  <p className="text-[12px] text-gray-500">Get more visibility</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderPublicProfileTab = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">Public Profile</h1>
          <p className="text-gray-500 text-[14px] mt-1">This is how your profile appears to renters and homeowners.</p>
        </div>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-[12px] transition-colors font-bold text-[14px] shadow-sm ${isEditing ? 'bg-[#10b981] hover:bg-[#059669] text-white' : 'bg-white border border-gray-200 text-[#10182c] hover:bg-gray-50'}`}
        >
          {isEditing ? <><Check size={16} /> Save Changes</> : <><Edit2 size={16} /> Edit Profile</>}
        </button>
      </div>

      <div className={`bg-white rounded-[24px] shadow-sm p-6 lg:p-8 border ${isEditing ? 'border-[#c85212] ring-1 ring-[#c85212]/20' : 'border-gray-100'} transition-colors`}>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col items-center shrink-0 w-full lg:w-[180px]">
            <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] bg-[#f0f0f0] group">
              <ImageWithFallback 
                src={agentProfile.photo} 
                alt={agentProfile.name} 
                className="w-full h-full object-cover"
              />
              {isEditing && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" onClick={() => avatarInputRef.current?.click()}>
                  <Camera size={24} className="text-white" />
                  <input type="file" ref={avatarInputRef} className="hidden" onChange={(e) => {
                    if(e.target.files && e.target.files.length > 0) toast.success("Profile photo updated!");
                  }}/>
                </div>
              )}
            </div>
            
            {isEditing ? (
              <input type="text" value={agentProfile.name} onChange={(e) => setAgentProfile({...agentProfile, name: e.target.value})} className="mt-4 text-[20px] font-bold text-center border-b border-gray-300 focus:border-[#c85212] outline-none w-full max-w-[140px] font-['Montserrat',sans-serif]" />
            ) : (
              <div className="mt-4 text-center">
                <h2 className="text-[22px] font-bold text-[#10182c] font-['Montserrat',sans-serif] leading-none">{agentProfile.name}</h2>
                <span className="inline-flex items-center mt-2 bg-blue-50 text-blue-600 text-[11px] font-bold px-2 py-0.5 rounded-full">
                  <Shield size={12} className="mr-1" /> Verified Pro
                </span>
              </div>
            )}
          </div>
          
          <div className="flex-1 flex flex-col gap-5 justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              <div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5"><MapPin size={12} /> Service Areas</div>
                {isEditing ? (
                  <div className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg p-2 flex flex-wrap gap-1.5 min-h-[42px]">
                     {agentProfile.regions.map((region, i) => (
                      <span key={i} className="bg-white border border-gray-200 px-2 py-1 rounded text-[12px] font-medium text-gray-600 flex items-center gap-1">
                        {region} 
                        <X size={10} className="cursor-pointer text-gray-400 hover:text-red-500" onClick={() => setAgentProfile({...agentProfile, regions: agentProfile.regions.filter((_, idx) => idx !== i)})} />
                      </span>
                    ))}
                    <button onClick={() => setModalState('region')} className="text-[#c85212] px-2 py-1 rounded text-[12px] font-bold hover:bg-orange-50 transition-colors">+ Add</button>
                  </div>
                ) : (
                  <div className="text-[15px] font-medium text-[#10182c]">{agentProfile.regions.join(", ")}</div>
                )}
              </div>
              <div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5"><Phone size={12} /> Phone Number</div>
                {isEditing ? <input type="text" value={agentProfile.phone} onChange={e => setAgentProfile({...agentProfile, phone: e.target.value})} className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-3 py-2 text-[14px] outline-none focus:border-[#c85212]" /> : <div className="text-[15px] font-medium text-[#10182c]">{agentProfile.phone}</div>}
              </div>
              <div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5"><Globe size={12} /> Languages</div>
                {isEditing ? (
                  <div className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg p-2 flex flex-wrap gap-1.5 min-h-[42px]">
                     {agentProfile.languages.map((lang, i) => (
                      <span key={i} className="bg-white border border-gray-200 px-2 py-1 rounded text-[12px] font-medium text-gray-600 flex items-center gap-1">
                        {lang} 
                        <X size={10} className="cursor-pointer text-gray-400 hover:text-red-500" onClick={() => setAgentProfile({...agentProfile, languages: agentProfile.languages.filter((_, idx) => idx !== i)})} />
                      </span>
                    ))}
                    <button onClick={() => setModalState('language')} className="text-[#c85212] px-2 py-1 rounded text-[12px] font-bold hover:bg-orange-50 transition-colors">+ Add</button>
                  </div>
                ) : (
                  <div className="text-[15px] font-medium text-[#10182c]">{agentProfile.languages.join(", ")}</div>
                )}
              </div>
              <div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5"><Mail size={12} /> Email Address</div>
                {isEditing ? <input type="email" value={agentProfile.email} onChange={e => setAgentProfile({...agentProfile, email: e.target.value})} className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-3 py-2 text-[14px] outline-none focus:border-[#c85212]" /> : <div className="text-[15px] font-medium text-[#10182c]">{agentProfile.email}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className={`bg-white rounded-[24px] shadow-sm p-6 lg:p-8 border ${isEditing ? 'border-[#c85212]/50' : 'border-gray-100'} flex flex-col transition-colors`}>
          <h3 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c] mb-5 border-b border-gray-100 pb-4">Professional Bio</h3>
          <div className="mb-6">
            {isEditing ? (
              <textarea 
                value={agentProfile.bio} 
                onChange={(e) => setAgentProfile({...agentProfile, bio: e.target.value})} 
                className="w-full h-32 bg-[#f9fafb] border border-gray-200 rounded-xl p-4 text-[14px] outline-none focus:border-[#c85212] resize-none" 
              />
            ) : (
              <p className="text-[14px] leading-[1.6] text-gray-600">{agentProfile.bio}</p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-gray-400 text-[11px] font-bold tracking-wider uppercase mb-1.5"><Briefcase size={14} /> Agency</div>
              {isEditing ? (
                <input type="text" value={agentProfile.agency} onChange={(e) => setAgentProfile({...agentProfile, agency: e.target.value})} className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-3 py-2 text-[13px] outline-none focus:border-[#c85212]" />
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded overflow-hidden shadow-sm shrink-0">
                    <ImageWithFallback src={agentProfile.agencyLogo} alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <div className="font-bold text-[15px] text-[#10182c] truncate">{agentProfile.agency}</div>
                </div>
              )}
            </div>
            <div>
              <div className="flex items-center gap-2 text-gray-400 text-[11px] font-bold tracking-wider uppercase mb-1.5"><Award size={14} /> Title</div>
              {isEditing ? (
                <input type="text" value={agentProfile.title} onChange={(e) => setAgentProfile({...agentProfile, title: e.target.value})} className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-3 py-2 text-[13px] outline-none focus:border-[#c85212]" />
              ) : (
                <div className="font-bold text-[15px] text-[#10182c]">{agentProfile.title}</div>
              )}
            </div>
          </div>
          <div className="pt-5 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between mt-auto gap-3 bg-[#f9fafb] -mx-6 -mb-6 lg:-mx-8 lg:-mb-8 px-6 py-4 lg:px-8 lg:py-5 rounded-b-[24px]">
            <div className="flex items-center gap-2 text-gray-500 text-[12px] font-bold uppercase tracking-wider"><FileText size={16} /> Licence Number</div>
            {isEditing ? (
              <input type="text" value={agentProfile.licence} onChange={(e) => setAgentProfile({...agentProfile, licence: e.target.value})} className="sm:w-[150px] bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-[13px] font-bold outline-none focus:border-[#c85212]" />
            ) : (
              <div className="font-bold text-[14px] text-[#10182c]">{agentProfile.licence}</div>
            )}
          </div>
        </div>

        <div className={`bg-white rounded-[24px] shadow-sm p-6 lg:p-8 border ${isEditing ? 'border-[#c85212]/50' : 'border-gray-100'} flex flex-col transition-colors`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4 mb-5">
            <h3 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c]">Performance Stats</h3>
            <span className="bg-green-50 text-green-600 px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1">
              Top 5% Agent
            </span>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                  <Star size={18} className="fill-current" />
                </div>
                <div>
                  <p className="text-[13px] text-gray-500 font-medium">Average Rating</p>
                  <p className="text-[16px] font-bold text-[#10182c]">{agentProfile.rating} <span className="text-[12px] text-gray-400 font-normal">({agentProfile.reviewsCount} reviews)</span></p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#10b981]/10 text-[#10b981] flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <p className="text-[13px] text-gray-500 font-medium">Deals Closed</p>
                  <p className="text-[16px] font-bold text-[#10182c]">{agentProfile.successfulDeals}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#c85212]/10 text-[#c85212] flex items-center justify-center shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-[13px] text-gray-500 font-medium">Avg Response Time</p>
                  <p className="text-[16px] font-bold text-[#10182c]">{agentProfile.responseTime}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center shrink-0">
                  <Calendar size={18} />
                </div>
                <div>
                  <p className="text-[13px] text-gray-500 font-medium">Experience</p>
                  {isEditing ? (
                    <input type="text" value={agentProfile.experience} onChange={(e) => setAgentProfile({...agentProfile, experience: e.target.value})} className="w-[100px] bg-[#f9fafb] border border-gray-200 rounded px-2 py-1 text-[14px] font-bold outline-none focus:border-[#c85212] mt-1" />
                  ) : (
                    <p className="text-[16px] font-bold text-[#10182c]">{agentProfile.experience}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderEnquiriesTab = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 shrink-0">
        <div>
          <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">Enquiries</h1>
          <p className="text-gray-500 text-[14px] mt-1">Manage your leads and convert them faster.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search enquiries..." 
              value={leadSearch}
              onChange={(e) => setLeadSearch(e.target.value)}
              className="pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-[13px] outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 w-full sm:w-[250px] shadow-sm transition-all"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto pb-4">
        <div className="flex gap-4 min-w-max h-full">
          {stages.map(stage => {
            const stageLeads = filteredLeads.filter(l => l.stage === stage);
            return (
              <div key={stage} className="w-[300px] flex flex-col bg-gray-50/50 rounded-2xl border border-gray-100 h-full max-h-[calc(100vh-200px)]">
                <div className="p-4 flex items-center justify-between border-b border-gray-100 shrink-0 bg-white rounded-t-2xl">
                  <h3 className="font-bold text-[#10182c] text-[14px]">{stage}</h3>
                  <span className="bg-gray-100 text-gray-600 text-[11px] font-bold px-2 py-0.5 rounded-full">{stageLeads.length}</span>
                </div>
                <div className="p-3 flex-1 overflow-y-auto space-y-3">
                  {stageLeads.map(lead => (
                    <div key={lead.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#c85212]/50 transition-colors cursor-pointer group">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex gap-2">
                          <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 bg-gray-100 flex items-center justify-center">
                            {lead.avatar ? <ImageWithFallback src={lead.avatar} alt={lead.name} className="w-full h-full object-cover"/> : <User size={14} className="text-gray-400" />}
                          </div>
                          <div>
                            <h4 className="font-bold text-[#10182c] text-[14px] leading-tight group-hover:text-[#c85212] transition-colors">{lead.name}</h4>
                            <span className="text-[12px] text-gray-500">{lead.phone}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-[12px] font-bold text-[#10182c] mb-1 flex items-center gap-1.5">
                          <Building size={12} className="text-gray-400" /> {lead.property}
                        </p>
                        <p className="text-[12px] text-gray-500 italic line-clamp-2">"{lead.notes}"</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
                        <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-medium">
                          <Clock size={12} /> {lead.date}
                        </div>
                        <div className="flex gap-1.5">
                          <button onClick={(e) => { e.stopPropagation(); toast.success(`Calling ${lead.name}...`); }} className="w-7 h-7 rounded-full bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-100 transition-colors">
                            <Phone size={12} />
                          </button>
                          <button onClick={(e) => { e.stopPropagation(); toast.success(`Opening WhatsApp...`); }} className="w-7 h-7 rounded-full bg-[#10b981]/10 text-[#10b981] flex items-center justify-center hover:bg-[#10b981]/20 transition-colors">
                            <MessageSquare size={12} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <select 
                          className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-[12px] rounded-lg px-2 py-1.5 outline-none focus:border-[#c85212]"
                          value={lead.stage}
                          onChange={(e) => {
                            e.stopPropagation();
                            toast.success(`Moved to ${e.target.value}`);
                          }}
                        >
                          {stages.map(s => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))}
                  {stageLeads.length === 0 && (
                    <div className="text-center py-8 text-gray-400 text-[13px] border-2 border-dashed border-gray-200 rounded-xl">
                      No enquiries
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );

  const renderPerformanceTab = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">Performance</h1>
          <p className="text-gray-500 text-[14px] mt-1">Track your conversion metrics and listing performance.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-[20px] shadow-sm border border-gray-100 flex flex-col justify-center">
          <p className="text-[13px] text-gray-500 font-medium mb-1">Total Listings</p>
          <h3 className="font-['Montserrat',sans-serif] text-[28px] font-bold text-[#10182c]">{portfolio.length}</h3>
        </div>
        <div className="bg-white p-5 rounded-[20px] shadow-sm border border-gray-100 flex flex-col justify-center">
          <p className="text-[13px] text-gray-500 font-medium mb-1">Total Enquiries</p>
          <h3 className="font-['Montserrat',sans-serif] text-[28px] font-bold text-[#10182c]">54</h3>
        </div>
        <div className="bg-white p-5 rounded-[20px] shadow-sm border border-gray-100 flex flex-col justify-center">
          <p className="text-[13px] text-gray-500 font-medium mb-1">Conversion Rate</p>
          <h3 className="font-['Montserrat',sans-serif] text-[28px] font-bold text-[#10b981]">18%</h3>
        </div>
        <div className="bg-white p-5 rounded-[20px] shadow-sm border border-gray-100 flex flex-col justify-center">
          <p className="text-[13px] text-gray-500 font-medium mb-1">Avg Response Time</p>
          <h3 className="font-['Montserrat',sans-serif] text-[28px] font-bold text-[#c85212]">15 mins</h3>
        </div>
      </div>

      <div className="w-full">
        <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c]">Listing Performance Table</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-[12px] font-bold text-gray-500 uppercase tracking-wider">
                  <th className="p-4">Property</th>
                  <th className="p-4 text-center">Views</th>
                  <th className="p-4 text-center">Clicks</th>
                  <th className="p-4 text-center">Enquiries</th>
                  <th className="p-4 text-center">Conversion</th>
                  <th className="p-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {portfolio.map(p => (
                  <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-[#10182c] text-[14px]">{p.address}</div>
                      <div className="text-[12px] text-gray-500">{p.location}</div>
                    </td>
                    <td className="p-4 text-center font-medium text-gray-600">{p.views}</td>
                    <td className="p-4 text-center font-medium text-gray-600">{p.clicks}</td>
                    <td className="p-4 text-center font-bold text-[#c85212]">{p.enquiries}</td>
                    <td className="p-4 text-center">
                      <span className="bg-green-50 text-green-600 px-2 py-1 rounded-md text-[11px] font-bold">
                        {Math.round((p.enquiries / (p.views || 1)) * 100)}%
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      {p.approvalStatus === 'pending_approval' ? (
                        <span className="bg-[#c85212]/10 text-[#c85212] px-2 py-1 rounded-md text-[11px] font-bold uppercase flex items-center justify-center gap-1">
                          <Clock size={11} /> Pending Approval
                        </span>
                      ) : (
                        <span className="bg-green-50 text-green-600 px-2 py-1 rounded-md text-[11px] font-bold uppercase">
                          <Check size={11} className="inline" /> Approved
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderSettingsTab = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 max-w-3xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">Settings</h1>
          <p className="text-gray-500 text-[14px] mt-1">Manage notifications and contact visibility.</p>
        </div>
      </div>

      <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c]">Smart Notifications</h2>
          <p className="text-[13px] text-gray-500 mt-1">Only the alerts that matter.</p>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-[#10182c] text-[15px]">New Enquiry</h3>
              <p className="text-[13px] text-gray-500">Get notified instantly when a lead comes in.</p>
            </div>
            <div className="w-12 h-6 bg-[#10b981] rounded-full relative cursor-pointer shadow-inner">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-[#10182c] text-[15px]">Missed Response</h3>
              <p className="text-[13px] text-gray-500">Alert me if I haven't responded within 30 mins.</p>
            </div>
            <div className="w-12 h-6 bg-[#10b981] rounded-full relative cursor-pointer shadow-inner">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-[#10182c] text-[15px]">Listing Expiring Soon</h3>
              <p className="text-[13px] text-gray-500">Alert me 3 days before a listing expires.</p>
            </div>
            <div className="w-12 h-6 bg-[#10b981] rounded-full relative cursor-pointer shadow-inner">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c]">Contact Visibility</h2>
          <p className="text-[13px] text-gray-500 mt-1">Control how people can reach you.</p>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-[#10182c] text-[15px]">Show Phone Number</h3>
              <p className="text-[13px] text-gray-500">Display phone number on public profile and listings.</p>
            </div>
            <div className="w-12 h-6 bg-[#10b981] rounded-full relative cursor-pointer shadow-inner">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-[#10182c] text-[15px]">Show Email Address</h3>
              <p className="text-[13px] text-gray-500">Display email address on public profile.</p>
            </div>
            <div className="w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer shadow-inner">
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const [listingFilter, setListingFilter] = useState('All');

  const renderListingsTab = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">Portfolio Management</h1>
          <p className="text-gray-500 text-[14px] mt-1">Manage your active and expired property listings.</p>
        </div>
        <button onClick={() => setShowQuickAddModal(true)} className="bg-[#10182c] hover:bg-[#1a2642] text-white px-5 py-2.5 rounded-[12px] text-[14px] font-bold transition-colors shadow-sm flex items-center gap-2">
          <Plus size={18} /> Add Property
        </button>
      </div>

      {/* Stored Properties (Not Yet Listed Live) */}
      {storedProperties.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-['Montserrat',sans-serif] text-[20px] font-bold text-[#10182c]">Stored Properties</h2>
              <p className="text-[13px] text-gray-500 mt-1">Properties in your portfolio not yet listed live on Apartey</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {storedProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-[16px] p-5 border-2 border-dashed border-gray-200 hover:border-[#c85212]/30 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-[15px] text-[#10182c] mb-1">{property.address}</h3>
                    <p className="text-[12px] text-gray-500">{property.propertyType} • Added {property.addedDate}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center">
                    <p className="text-[11px] text-gray-500 font-bold uppercase">Beds</p>
                    <p className="text-[16px] font-bold text-[#10182c]">{property.beds}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[11px] text-gray-500 font-bold uppercase">Baths</p>
                    <p className="text-[16px] font-bold text-[#10182c]">{property.baths}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[11px] text-gray-500 font-bold uppercase">Size</p>
                    <p className="text-[12px] font-bold text-[#10182c]">{property.size}</p>
                  </div>
                </div>

                {property.notes && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-[10px]">
                    <p className="text-[12px] text-gray-600 italic">"{property.notes}"</p>
                  </div>
                )}

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setSelectedStoredProperty(property.id);
                      setShowCompleteListingModal(true);
                    }}
                    className="flex-1 py-2.5 bg-[#c85212] hover:bg-[#a6430f] text-white rounded-[10px] text-[13px] font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <Upload size={14} /> List Live
                  </button>
                  <button
                    onClick={() => {
                      if (confirm(`Remove "${property.address}" from your portfolio?`)) {
                        setStoredProperties(storedProperties.filter(p => p.id !== property.id));
                        toast.success("Property removed");
                      }
                    }}
                    className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-[10px] transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <h2 className="font-['Montserrat',sans-serif] text-[20px] font-bold text-[#10182c] mb-4">Live Listings on Apartey</h2>
          </div>
        </div>
      )}

      <div className="flex gap-2 overflow-x-auto pb-0 border-b border-gray-200 mb-6">
        {['All', 'Active', 'Expired', 'Most Viewed', 'Most Enquiries'].map(filter => (
          <button
            key={filter}
            onClick={() => setListingFilter(filter)}
            className={`pb-3 px-4 text-[15px] font-bold transition-colors relative whitespace-nowrap ${listingFilter === filter ? 'text-[#c85212]' : 'text-gray-500 hover:text-[#10182c]'}`}
          >
            {filter} Properties
            {listingFilter === filter && <motion.div layoutId="agentListingTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c85212]" />}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[16px] lg:gap-[24px]">
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
            <div 
              key={prop.id} 
              onClick={() => toast.info(`Viewing details for ${prop.address}`)}
              className="group flex flex-col bg-white rounded-[16px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0px_8px_24px_rgba(0,0,0,0.12)] cursor-pointer overflow-hidden"
            >
              {/* Top Section (Image + Status Badge) */}
              <div className="relative h-[150px] w-full rounded-t-[16px] overflow-hidden shrink-0">
                <ImageWithFallback src={prop.image} alt={prop.headline} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4">
                  <span className={`px-[10px] py-[4px] rounded-full text-[10px] font-bold text-white uppercase tracking-wider shadow-sm ${prop.status === 'Active' ? 'bg-[#1DBF73]' : 'bg-gray-500'}`}>
                    {prop.status === 'Active' ? 'ACTIVE' : 'EXPIRED'}
                  </span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-[16px] flex flex-col flex-1">
                {/* Title & Location */}
                <h4 className="font-['Montserrat',sans-serif] font-semibold text-[#1A1A1A] group-hover:text-[#FF6A00] transition-colors text-[17px] leading-tight mb-[4px] truncate" title={prop.headline}>
                  {prop.headline}
                </h4>
                <div className="flex items-center justify-between text-[#6B7280] mb-[16px]">
                  <div className="flex items-center gap-[4px] truncate">
                    <MapPin size={13} className="shrink-0" />
                    <span className="text-[12px] truncate">{prop.location}</span>
                  </div>
                  <span className="text-[#10182c] font-bold text-[14px] ml-2 shrink-0">{prop.price}</span>
                </div>

                {/* Info Cards Row */}
                <div className="grid grid-cols-2 gap-[12px]">
                  {/* Views Card */}
                  <div className="bg-[#F9FAFB] px-[12px] py-[10px] rounded-[12px] flex flex-col justify-center">
                    <span className="text-[#9CA3AF] text-[10px] font-bold uppercase tracking-wider mb-1">Total Views</span>
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[12px] font-medium text-[#1A1A1A]`}>
                        {prop.views}
                      </span>
                    </div>
                  </div>

                  {/* Enquiries Card */}
                  <div className="bg-[#F9FAFB] px-[12px] py-[10px] rounded-[12px] flex flex-col justify-center">
                    <span className="text-[#9CA3AF] text-[10px] font-bold uppercase tracking-wider mb-1">Enquiries</span>
                    <div className="flex items-center gap-1.5">
                      <MessageSquare size={13} className="text-[#F97316]" />
                      <span className="text-[#F97316] text-[12px] font-medium">
                        {prop.enquiries} Total
                      </span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#E5E7EB] my-[14px] w-full"></div>
                {/* Bottom Section */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-10 h-5 bg-gray-200 rounded-full relative cursor-pointer shadow-inner flex items-center"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setPortfolio(portfolio.map(p => p.id === prop.id ? { ...p, status: prop.status === 'Active' ? 'Expired' : 'Active' } : p));
                        toast.success(prop.status === 'Active' ? "Listing deactivated" : "Listing is now active");
                      }}
                    >
                      <div className={`absolute w-3.5 h-3.5 bg-white rounded-full shadow-sm transition-all duration-300 ${prop.status === 'Active' ? 'left-[22px] bg-[#1DBF73]' : 'left-[2px]'}`}></div>
                    </div>
                    <span className="text-[#6B7280] text-[11px] font-bold uppercase tracking-wider">{prop.status === 'Active' ? 'Live' : 'Hidden'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalState('manage');
                      }}
                      className="text-[#6B7280] hover:text-[#10182c] transition-colors" title="Edit Listing">
                      <Edit2 size={16} />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toast.success("Boost activated!");
                      }}
                      className="text-[#c85212] hover:text-[#a6420c] transition-colors" title="Boost">
                      <TrendingUp size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </motion.div>
  );



  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}} className="min-h-screen bg-[#f5f6f8] flex font-['Mulish',sans-serif] relative">
      
      {/* Sidebar Overlay (Mobile) */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-[260px] bg-[#10182c] text-white flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-20 flex items-center px-8 border-b border-white/10 shrink-0">
          <Link to="/" className="text-[24px] font-['Montserrat',sans-serif] font-bold tracking-tight text-white flex items-center gap-2">
            Apartey<span className="w-2 h-2 rounded-full bg-[#c85212] mt-2"></span>
          </Link>
        </div>

        <div className="relative border-b border-white/10 shrink-0">
          <button 
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
                <ImageWithFallback src={agentProfile.photo} alt="Agent" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <p className="text-[13px] font-bold line-clamp-1">{agentProfile.name}</p>
                <p className="text-[11px] text-[#fbff79] font-bold">Agent / Manager</p>
              </div>
            </div>
            <ChevronDown size={16} className={`text-white/60 transition-transform ${isProfileMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isProfileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden bg-[#0a0f1d]"
              >
                <div className="px-4 py-2 flex flex-col gap-1 border-t border-white/5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-white/40 px-2 pt-2 pb-1">Switch Account</div>
                  
                  <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/10 text-white text-[13px] font-bold text-left">
                    <div className="w-8 h-8 rounded-full bg-[#c85212] text-white flex items-center justify-center shrink-0">
                      <Briefcase size={14} />
                    </div>
                    <div className="flex-1">
                      <div>Agent</div>
                      <div className="text-[10px] text-white/60 font-normal">Active Profile</div>
                    </div>
                    <Check size={14} className="text-[#c85212]" />
                  </button>

                  <Link to="/homeowner" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-white/80 transition-colors text-[13px] font-bold text-left group">
                    <div className="w-8 h-8 rounded-full bg-[#1a2642] text-white/60 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      <Building size={14} />
                    </div>
                    <div className="flex-1">
                      <div>Homeowner</div>
                      <div className="text-[10px] text-white/40 font-normal">Manage own property</div>
                    </div>
                  </Link>

                  <Link to="/profile" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-white/80 transition-colors text-[13px] font-bold text-left group">
                    <div className="w-8 h-8 rounded-full bg-[#1a2642] text-white/60 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      <User size={14} />
                    </div>
                    <div className="flex-1">
                      <div>Renter</div>
                      <div className="text-[10px] text-white/40 font-normal">Switch to renting</div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <nav className="flex-1 py-6 px-4 flex flex-col gap-2 overflow-y-auto">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all duration-200 group ${
                activeTab === item.id 
                  ? "bg-[#c85212] text-white font-bold shadow-md" 
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`${activeTab === item.id ? "text-white" : "text-white/50 group-hover:text-white"} transition-colors`}>
                  {item.icon}
                </div>
                <span className="text-[14px]">{item.label}</span>
              </div>
              {item.badge && (
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                  activeTab === item.id 
                    ? "bg-white/20 text-white" 
                    : "bg-[#c85212] text-white"
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10 shrink-0 space-y-2">
          {bottomNavItems.map((item) => (
            <Link
              key={item.id}
              to={item.id === "logout" ? "/" : "#"}
              onClick={(e) => {
                if (item.id !== "logout") {
                  e.preventDefault();
                  handleTabChange(item.id);
                }
              }}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all duration-200 text-white/70 hover:bg-white/10 hover:text-white ${
                activeTab === item.id && item.id !== "logout" ? "bg-white/10 text-white font-bold" : ""
              }`}
            >
              <div className="text-white/50">{item.icon}</div>
              <span className="text-[14px]">{item.label}</span>
            </Link>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-8 shrink-0 z-30">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg lg:hidden"
            >
              <Menu size={24} />
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm">
              <span className="text-gray-400 font-medium">Dashboard</span>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#10182c] capitalize">{activeTab.replace('-', ' ')}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            <button onClick={() => setModalState('scan')} className="bg-[#10182c] hover:bg-[#1a2642] text-white px-4 py-2 rounded-[10px] text-[13px] font-bold transition-colors hidden sm:flex items-center gap-2 shadow-sm">
              <FileText size={16} /> Scan Document
            </button>
            <div className="h-8 w-[1px] bg-gray-200 hidden sm:block"></div>
            <button onClick={() => setActiveTab('notifications')} className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#c85212] rounded-full border-2 border-white"></span>
            </button>
            <div onClick={() => setActiveTab('profile')} className="flex items-center gap-3 cursor-pointer group hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 group-hover:border-[#c85212] transition-colors">
                <ImageWithFallback src={agentProfile.photo} alt="Agent Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 relative">
          <div className="max-w-[1200px] mx-auto pb-12 h-full">
            <AnimatePresence mode="wait">
              {activeTab === "dashboard" && <motion.div key="dashboard" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>{renderDashboardTab()}</motion.div>}
              {activeTab === "profile" && <motion.div key="profile" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>{renderPublicProfileTab()}</motion.div>}
              {activeTab === "enquiries" && <motion.div key="enquiries" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="h-full">{renderEnquiriesTab()}</motion.div>}
              {activeTab === "listings" && <motion.div key="listings" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>{renderListingsTab()}</motion.div>}
              {activeTab === "performance" && <motion.div key="performance" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>{renderPerformanceTab()}</motion.div>}
              {activeTab === "settings" && <motion.div key="settings" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>{renderSettingsTab()}</motion.div>}
              {activeTab === "renter-board" && (
                <motion.div key="renter-board" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">Renter Board</h1>
                      <p className="text-gray-500 text-[14px] mt-1">Verified renters looking for properties. Message them directly if you have a match.</p>
                    </div>
                    <a href="/renter-board" target="_blank" rel="noopener" className="text-[#c85212] text-[13px] font-bold hover:underline">View full board →</a>
                  </div>
                  <RenterBoardPreview />
                </motion.div>
              )}
              {/* Fallback for unbuilt tabs */}
              {(activeTab === "messages" || activeTab === "transactions" || activeTab === "notifications") && (
                <motion.div key="placeholder" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-4"><Activity size={24}/></div>
                  <h2 className="text-[#10182c] font-bold text-[20px] mb-2 capitalize">{activeTab}</h2>
                  <p className="text-gray-500 text-[14px]">This section shares the same layout as the Homeowner dashboard.</p>
                  <button onClick={() => setActiveTab('dashboard')} className="mt-6 text-[#c85212] font-bold text-[14px] hover:underline">Return to Dashboard</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* Global Modals */}
      <AnimatePresence>
        {modalState !== 'none' && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm" onClick={closeModal}>
            
            {/* Scan Document Modal */}
            {modalState === 'scan' && (
              <motion.div initial={{scale:0.95, opacity:0}} animate={{scale:1, opacity:1}} exit={{scale:0.95, opacity:0}} onClick={e => e.stopPropagation()} className="bg-white rounded-[24px] overflow-hidden w-full max-w-md text-center p-8 relative shadow-2xl">
                 <h3 className="font-bold text-[20px] text-[#10182c] mb-2">Scan Document</h3>
                 <p className="text-gray-500 text-[14px] mb-6">Align document within the frame</p>
                 
                 <div className="relative w-full aspect-[3/4] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 overflow-hidden mx-auto mb-6">
                   <motion.div 
                     animate={{ top: ['0%', '100%', '0%'] }} 
                     transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                     className="absolute left-0 right-0 h-1 bg-[#c85212] shadow-[0_0_15px_#c85212] z-10"
                   />
                   <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                     <FileText size={64} className="opacity-50" />
                   </div>
                 </div>
                 
                 <button onClick={() => { toast.success("Document scanned and saved successfully!"); closeModal(); }} className="w-full py-3.5 bg-[#10182c] text-white font-bold rounded-xl hover:bg-[#1a2642] transition-colors text-[15px]">
                   Capture Document
                 </button>
                 
                 <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full p-2">
                   <X size={16} />
                 </button>
              </motion.div>
            )}

            {/* Add Region Modal */}
            {modalState === 'region' && (
              <motion.div initial={{scale:0.95, opacity:0}} animate={{scale:1, opacity:1}} exit={{scale:0.95, opacity:0}} onClick={e => e.stopPropagation()} className="bg-white rounded-[24px] p-6 w-full max-w-sm shadow-xl">
                <h3 className="font-bold text-[18px] text-[#10182c] mb-4">Add Service Region</h3>
                <input id="regionInput" type="text" placeholder="e.g. South London" className="w-full border border-gray-200 rounded-xl px-4 py-3 mb-6 outline-none focus:border-[#c85212] text-[14px]" autoFocus />
                <div className="flex gap-3 justify-end">
                  <button onClick={closeModal} className="px-4 py-2.5 text-gray-500 font-bold text-[13px] hover:bg-gray-50 rounded-xl transition-colors">Cancel</button>
                  <button onClick={() => {
                    const val = (document.getElementById('regionInput') as HTMLInputElement).value;
                    if(val.trim()) setAgentProfile({...agentProfile, regions: [...agentProfile.regions, val.trim()]});
                    closeModal();
                  }} className="px-5 py-2.5 bg-[#10182c] text-white font-bold text-[13px] rounded-xl hover:bg-[#1a2642] transition-colors">Add Region</button>
                </div>
              </motion.div>
            )}

            {/* Add Language Modal */}
            {modalState === 'language' && (
              <motion.div initial={{scale:0.95, opacity:0}} animate={{scale:1, opacity:1}} exit={{scale:0.95, opacity:0}} onClick={e => e.stopPropagation()} className="bg-white rounded-[24px] p-6 w-full max-w-sm shadow-xl">
                <h3 className="font-bold text-[18px] text-[#10182c] mb-4">Add Language</h3>
                <input id="languageInput" type="text" placeholder="e.g. Spanish" className="w-full border border-gray-200 rounded-xl px-4 py-3 mb-6 outline-none focus:border-[#c85212] text-[14px]" autoFocus />
                <div className="flex gap-3 justify-end">
                  <button onClick={closeModal} className="px-4 py-2.5 text-gray-500 font-bold text-[13px] hover:bg-gray-50 rounded-xl transition-colors">Cancel</button>
                  <button onClick={() => {
                    const val = (document.getElementById('languageInput') as HTMLInputElement).value;
                    if(val.trim()) setAgentProfile({...agentProfile, languages: [...agentProfile.languages, val.trim()]});
                    closeModal();
                  }} className="px-5 py-2.5 bg-[#10182c] text-white font-bold text-[13px] rounded-xl hover:bg-[#1a2642] transition-colors">Add Language</button>
                </div>
              </motion.div>
            )}

            {/* Add Lead Modal */}
            {modalState === 'lead' && (
              <motion.div initial={{scale:0.95, opacity:0}} animate={{scale:1, opacity:1}} exit={{scale:0.95, opacity:0}} onClick={e => e.stopPropagation()} className="bg-white rounded-[24px] p-6 w-full max-w-md shadow-xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-[20px] text-[#10182c]">New Lead</h3>
                  <button onClick={closeModal} className="text-gray-400 hover:text-gray-600"><X size={20}/></button>
                </div>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  setLeads([{
                    id: Date.now(),
                    name: fd.get('name') as string,
                    type: fd.get('type') as string,
                    property: fd.get('property') as string,
                    stage: 'New',
                    date: 'Just now',
                    notes: fd.get('notes') as string,
                    avatar: ""
                  }, ...leads]);
                  toast.success("Lead added successfully");
                  closeModal();
                }} className="space-y-4">
                  <div>
                    <label className="block text-[12px] font-bold text-gray-500 mb-1.5">Client Name</label>
                    <input name="name" required placeholder="John Doe" className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#c85212] text-[14px]" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-bold text-gray-500 mb-1.5">Client Type</label>
                      <select name="type" className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#c85212] text-[14px] bg-white">
                        <option value="Renter">Renter</option>
                        <option value="Owner">Property Owner</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-gray-500 mb-1.5">Interest/Property</label>
                      <input name="property" required placeholder="123 Main St" className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#c85212] text-[14px]" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-gray-500 mb-1.5">Initial Notes</label>
                    <textarea name="notes" placeholder="Looking for a 2 bed apartment..." className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#c85212] text-[14px] min-h-[100px] resize-none" />
                  </div>
                  <div className="pt-2">
                    <button type="submit" className="w-full py-3.5 bg-[#c85212] text-white font-bold rounded-xl hover:bg-[#a5420d] transition-colors text-[15px]">Create Lead</button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Add Property / Manage / Client Placeholders */}
            {(modalState === 'property' || modalState === 'client' || modalState === 'manage') && (
              <motion.div initial={{scale:0.95, opacity:0}} animate={{scale:1, opacity:1}} exit={{scale:0.95, opacity:0}} onClick={e => e.stopPropagation()} className="bg-white rounded-[24px] p-8 w-full max-w-sm text-center shadow-xl relative">
                <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full p-2"><X size={16} /></button>
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                  {modalState === 'property' ? <Building size={24} /> : modalState === 'client' ? <User size={24} /> : <Settings size={24} />}
                </div>
                <h3 className="font-bold text-[20px] text-[#10182c] mb-2 capitalize">{modalState === 'manage' ? 'Manage Settings' : `Add New ${modalState}`}</h3>
                <p className="text-gray-500 text-[14px] mb-6">This form acts similarly to the New Lead form, utilizing shared platform components.</p>
                <button onClick={() => { toast.success("Action completed successfully!"); closeModal(); }} className="w-full py-3 bg-[#10182c] text-white font-bold rounded-xl hover:bg-[#1a2642] transition-colors">
                  Continue
                </button>
              </motion.div>
            )}

            {/* Match Properties Modal */}
            {modalState === 'match' && (
              <motion.div initial={{scale:0.95, opacity:0}} animate={{scale:1, opacity:1}} exit={{scale:0.95, opacity:0}} onClick={e => e.stopPropagation()} className="bg-white rounded-[24px] w-full max-w-2xl overflow-hidden shadow-xl flex flex-col max-h-[80vh]">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50 shrink-0">
                  <div>
                    <h3 className="font-bold text-[20px] text-[#10182c]">Matched Properties</h3>
                    <p className="text-[13px] text-gray-500 mt-1">Found 3 properties matching client criteria.</p>
                  </div>
                  <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 bg-white shadow-sm rounded-full p-2"><X size={20}/></button>
                </div>
                <div className="p-6 overflow-y-auto space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex gap-4 p-4 border border-gray-100 rounded-2xl hover:border-[#c85212]/30 transition-colors">
                      <div className="w-24 h-24 bg-gray-200 rounded-xl overflow-hidden shrink-0">
                        <ImageWithFallback src={`https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300&q=80&fit=crop`} alt="House" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-[#10182c] text-[15px]">15 Thames View, London</h4>
                          <span className="text-[#c85212] font-bold text-[15px]">£1,400/mo</span>
                        </div>
                        <p className="text-[12px] text-gray-500 mt-1">2 Beds • 1 Bath • Available Now</p>
                        <div className="mt-3 flex gap-2">
                          <button onClick={() => { toast.success("Property shared with client!"); closeModal(); }} className="px-4 py-1.5 bg-[#10182c] text-white text-[12px] font-bold rounded-lg hover:bg-[#1a2642]">Share Property</button>
                          <button onClick={() => toast.info("Viewing details...")} className="px-4 py-1.5 bg-gray-100 text-[#10182c] text-[12px] font-bold rounded-lg hover:bg-gray-200">View Details</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </div>
        )}
      </AnimatePresence>

      {/* Quick Add Property Modal */}
      <AnimatePresence>
        {showQuickAddModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm" onClick={() => setShowQuickAddModal(false)}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[24px] overflow-hidden w-full max-w-xl relative shadow-2xl max-h-[85vh] flex flex-col"
            >
              <div className="bg-[#10182c] px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-[20px] text-white font-['Montserrat',sans-serif]">Quick Add Property</h3>
                    <p className="text-white/70 text-[12px] mt-0.5">Store basic property details for your portfolio</p>
                  </div>
                  <button onClick={() => setShowQuickAddModal(false)} className="text-white/70 hover:text-white">
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-4 overflow-y-auto flex-1">
                <div>
                  <label className="block text-[12px] font-bold text-[#10182c] mb-1.5">
                    Property Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={quickAddForm.address}
                    onChange={(e) => setQuickAddForm({ ...quickAddForm, address: e.target.value })}
                    placeholder="e.g., 123 Main Street, London"
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-[12px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[12px] font-bold text-[#10182c] mb-1.5">
                      Property Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={quickAddForm.propertyType}
                      onChange={(e) => setQuickAddForm({ ...quickAddForm, propertyType: e.target.value })}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-[12px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent"
                    >
                      <option value="">Select type</option>
                      <option value="Apartment">Apartment</option>
                      <option value="House">House</option>
                      <option value="Studio">Studio</option>
                      <option value="Villa">Villa</option>
                      <option value="Condo">Condo</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold text-[#10182c] mb-1.5">
                      Size
                    </label>
                    <input
                      type="text"
                      value={quickAddForm.size}
                      onChange={(e) => setQuickAddForm({ ...quickAddForm, size: e.target.value })}
                      placeholder="e.g., 1,200 sq ft"
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-[12px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[12px] font-bold text-[#10182c] mb-1.5">
                      Bedrooms
                    </label>
                    <input
                      type="number"
                      value={quickAddForm.beds}
                      onChange={(e) => setQuickAddForm({ ...quickAddForm, beds: e.target.value })}
                      placeholder="0"
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-[12px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold text-[#10182c] mb-1.5">
                      Bathrooms
                    </label>
                    <input
                      type="number"
                      value={quickAddForm.baths}
                      onChange={(e) => setQuickAddForm({ ...quickAddForm, baths: e.target.value })}
                      placeholder="0"
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-[12px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-[#10182c] mb-1.5">
                    Notes (Optional)
                  </label>
                  <textarea
                    value={quickAddForm.notes}
                    onChange={(e) => setQuickAddForm({ ...quickAddForm, notes: e.target.value })}
                    placeholder="Add any notes about this property..."
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-[12px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent min-h-[60px] resize-none"
                  />
                </div>

                {/* Property Photos */}
                <div>
                  <label className="block text-[12px] font-bold text-[#10182c] mb-1.5">
                    Property Photos (Optional)
                  </label>
                  <p className="text-[11px] text-gray-500 mb-2">Add photos now or later (max 10 images)</p>

                  <div className="space-y-2">
                    {/* Upload Button */}
                    <label className="flex items-center justify-center gap-2 w-full px-3 py-4 border-2 border-dashed border-gray-300 rounded-[12px] cursor-pointer hover:border-[#c85212] hover:bg-[#c85212]/5 transition-colors group">
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => {
                          const files = Array.from(e.target.files || []);
                          if (files.length + quickAddForm.photos.length > 10) {
                            toast.error("Maximum 10 photos allowed");
                            return;
                          }

                          files.forEach((file) => {
                            const reader = new FileReader();
                            reader.onload = (event) => {
                              const imageUrl = event.target?.result as string;
                              setQuickAddForm(prev => ({
                                ...prev,
                                photos: [...prev.photos, imageUrl]
                              }));
                            };
                            reader.readAsDataURL(file);
                          });
                          e.target.value = '';
                        }}
                        className="hidden"
                      />
                      <Upload className="w-4 h-4 text-gray-400 group-hover:text-[#c85212]" />
                      <span className="text-[12px] text-gray-600 group-hover:text-[#c85212] font-medium">
                        Click to upload photos
                      </span>
                    </label>

                    {/* Photo Preview Grid */}
                    {quickAddForm.photos.length > 0 && (
                      <div className="grid grid-cols-4 gap-2">
                        {quickAddForm.photos.map((photo, index) => (
                          <div key={index} className="relative group aspect-square rounded-[8px] overflow-hidden border border-gray-200">
                            <img
                              src={photo}
                              alt={`Property photo ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <button
                                onClick={() => {
                                  setQuickAddForm(prev => ({
                                    ...prev,
                                    photos: prev.photos.filter((_, i) => i !== index)
                                  }));
                                }}
                                className="p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                              >
                                <X size={12} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-3">
                <button
                  onClick={() => {
                    if (!quickAddForm.address || !quickAddForm.propertyType) {
                      toast.error("Please fill in required fields");
                      return;
                    }

                    const newProperty = {
                      id: storedProperties.length + 1,
                      address: quickAddForm.address,
                      propertyType: quickAddForm.propertyType,
                      beds: parseInt(quickAddForm.beds) || 0,
                      baths: parseInt(quickAddForm.baths) || 0,
                      size: quickAddForm.size || "N/A",
                      notes: quickAddForm.notes,
                      photos: quickAddForm.photos,
                      addedDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
                    };

                    setStoredProperties([...storedProperties, newProperty]);
                    setQuickAddForm({ address: "", propertyType: "", beds: "", baths: "", size: "", notes: "", photos: [] });
                    setShowQuickAddModal(false);
                    toast.success("Property added to your portfolio!");
                  }}
                  className="flex-1 py-3 bg-[#10182c] text-white font-bold rounded-[12px] hover:bg-[#1a2642] transition-colors text-[13px]"
                >
                  Add to Portfolio
                </button>
                <button
                  onClick={() => {
                    setShowQuickAddModal(false);
                    setQuickAddForm({ address: "", propertyType: "", beds: "", baths: "", size: "", notes: "", photos: [] });
                  }}
                  className="flex-1 py-3 bg-gray-100 text-gray-700 font-bold rounded-[12px] hover:bg-gray-200 transition-colors text-[13px]"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Complete Listing Modal */}
      <AnimatePresence>
        {showCompleteListingModal && selectedStoredProperty !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm" onClick={() => setShowCompleteListingModal(false)}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[24px] overflow-hidden w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
            >
              <div className="sticky top-0 bg-[#10182c] px-8 py-6 z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-[22px] text-white font-['Montserrat',sans-serif]">Complete Listing Details</h3>
                    <p className="text-white/70 text-[13px] mt-1">Add full details to publish this property live on Apartey</p>
                  </div>
                  <button onClick={() => setShowCompleteListingModal(false)} className="text-white/70 hover:text-white">
                    <X size={24} />
                  </button>
                </div>
              </div>

              <div className="p-8 space-y-6">
                {/* Property Info Summary */}
                <div className="bg-gray-50 rounded-[16px] p-5">
                  <h4 className="font-bold text-[15px] text-[#10182c] mb-3">Property Information</h4>
                  {(() => {
                    const property = storedProperties.find(p => p.id === selectedStoredProperty);
                    if (!property) return null;
                    return (
                      <div className="grid grid-cols-2 gap-3 text-[13px]">
                        <div>
                          <p className="text-gray-500">Address</p>
                          <p className="font-medium text-[#10182c]">{property.address}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Type</p>
                          <p className="font-medium text-[#10182c]">{property.propertyType}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Beds</p>
                          <p className="font-medium text-[#10182c]">{property.beds}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Baths</p>
                          <p className="font-medium text-[#10182c]">{property.baths}</p>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* Listing Details */}
                <div className="space-y-5">
                  <div>
                    <label className="block text-[13px] font-bold text-[#10182c] mb-2">
                      Listing Headline <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={completeListingForm.headline}
                      onChange={(e) => setCompleteListingForm({ ...completeListingForm, headline: e.target.value })}
                      placeholder="e.g., Modern 2-Bed Flat in Central London"
                      className="w-full px-4 py-3 border border-gray-200 rounded-[12px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-[#10182c] mb-2">
                      Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={completeListingForm.description}
                      onChange={(e) => setCompleteListingForm({ ...completeListingForm, description: e.target.value })}
                      placeholder="Describe the property, its features, and neighborhood..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-[12px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent min-h-[120px] resize-y"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-bold text-[#10182c] mb-2">
                        Monthly Rent <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={completeListingForm.price}
                        onChange={(e) => setCompleteListingForm({ ...completeListingForm, price: e.target.value })}
                        placeholder="e.g., £2,500"
                        className="w-full px-4 py-3 border border-gray-200 rounded-[12px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-[#10182c] mb-2">
                        Security Deposit
                      </label>
                      <input
                        type="text"
                        value={completeListingForm.deposit}
                        onChange={(e) => setCompleteListingForm({ ...completeListingForm, deposit: e.target.value })}
                        placeholder="e.g., £2,500"
                        className="w-full px-4 py-3 border border-gray-200 rounded-[12px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-bold text-[#10182c] mb-2">
                        Available From
                      </label>
                      <input
                        type="date"
                        value={completeListingForm.availableFrom}
                        onChange={(e) => setCompleteListingForm({ ...completeListingForm, availableFrom: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-[12px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-[#10182c] mb-2">
                        Lease Term
                      </label>
                      <select
                        value={completeListingForm.leaseTerm}
                        onChange={(e) => setCompleteListingForm({ ...completeListingForm, leaseTerm: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-[12px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent"
                      >
                        <option value="">Select term</option>
                        <option value="6 months">6 months</option>
                        <option value="12 months">12 months</option>
                        <option value="24 months">24 months</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[13px] font-bold text-[#10182c] mb-2">
                        Furnished
                      </label>
                      <select
                        value={completeListingForm.furnished}
                        onChange={(e) => setCompleteListingForm({ ...completeListingForm, furnished: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-[12px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent"
                      >
                        <option value="">Select</option>
                        <option value="Furnished">Furnished</option>
                        <option value="Unfurnished">Unfurnished</option>
                        <option value="Part Furnished">Part Furnished</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-[#10182c] mb-2">
                        Parking
                      </label>
                      <select
                        value={completeListingForm.parking}
                        onChange={(e) => setCompleteListingForm({ ...completeListingForm, parking: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-[12px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent"
                      >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-[#10182c] mb-2">
                        Pet Friendly
                      </label>
                      <select
                        value={completeListingForm.petFriendly}
                        onChange={(e) => setCompleteListingForm({ ...completeListingForm, petFriendly: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-[12px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent"
                      >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  </div>

                  {/* Property Photos */}
                  <div>
                    <label className="block text-[13px] font-bold text-[#10182c] mb-2">
                      Property Photos <span className="text-red-500">*</span>
                    </label>
                    <p className="text-[12px] text-gray-500 mb-3">Upload high-quality photos of your property (max 10 images)</p>

                    <div className="space-y-3">
                      {/* Upload Button */}
                      <label className="flex items-center justify-center gap-2 w-full px-4 py-6 border-2 border-dashed border-gray-300 rounded-[12px] cursor-pointer hover:border-[#c85212] hover:bg-[#c85212]/5 transition-colors group">
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={(e) => {
                            const files = Array.from(e.target.files || []);
                            if (files.length + completeListingForm.photos.length > 10) {
                              toast.error("Maximum 10 photos allowed");
                              return;
                            }

                            files.forEach((file) => {
                              const reader = new FileReader();
                              reader.onload = (event) => {
                                const imageUrl = event.target?.result as string;
                                setCompleteListingForm(prev => ({
                                  ...prev,
                                  photos: [...prev.photos, imageUrl]
                                }));
                              };
                              reader.readAsDataURL(file);
                            });
                            e.target.value = '';
                          }}
                          className="hidden"
                        />
                        <Upload className="w-5 h-5 text-gray-400 group-hover:text-[#c85212]" />
                        <span className="text-[13px] text-gray-600 group-hover:text-[#c85212] font-medium">
                          Click to upload photos
                        </span>
                      </label>

                      {/* Photo Preview Grid */}
                      {completeListingForm.photos.length > 0 && (
                        <div className="grid grid-cols-3 gap-3">
                          {completeListingForm.photos.map((photo, index) => (
                            <div key={index} className="relative group aspect-square rounded-[12px] overflow-hidden border border-gray-200">
                              <img
                                src={photo}
                                alt={`Property photo ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button
                                  onClick={() => {
                                    setCompleteListingForm(prev => ({
                                      ...prev,
                                      photos: prev.photos.filter((_, i) => i !== index)
                                    }));
                                  }}
                                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                                >
                                  <X size={16} />
                                </button>
                              </div>
                              {index === 0 && (
                                <div className="absolute top-2 left-2 bg-[#c85212] text-white text-[10px] px-2 py-1 rounded-full font-bold">
                                  Cover
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-100 mt-6">
                  <button
                    onClick={() => {
                      if (!completeListingForm.headline || !completeListingForm.description || !completeListingForm.price) {
                        toast.error("Please fill in all required fields");
                        return;
                      }

                      if (completeListingForm.photos.length === 0) {
                        toast.error("Please upload at least one photo");
                        return;
                      }

                      toast.success("Listing submitted for admin approval!");
                      setShowCompleteListingModal(false);
                      setSelectedStoredProperty(null);
                      setCompleteListingForm({
                        headline: "",
                        description: "",
                        price: "",
                        deposit: "",
                        availableFrom: "",
                        leaseTerm: "",
                        furnished: "",
                        parking: "",
                        petFriendly: "",
                        amenities: [],
                        photos: []
                      });
                    }}
                    className="flex-1 py-3.5 bg-[#c85212] text-white font-bold rounded-[12px] hover:bg-[#a6430f] transition-colors text-[14px]"
                  >
                    Submit for Approval
                  </button>
                  <button
                    onClick={() => {
                      setShowCompleteListingModal(false);
                      setSelectedStoredProperty(null);
                    }}
                    className="flex-1 py-3.5 bg-gray-100 text-gray-700 font-bold rounded-[12px] hover:bg-gray-200 transition-colors text-[14px]"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
