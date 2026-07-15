import { useState } from "react";
import { Link } from "react-router";
import {
  MapPin, Globe, Phone, Mail, Clock, Star, Edit2, Share2, Heart,
  LayoutDashboard, User, MessageSquare, Settings, Menu, Bell, Search,
  LogOut, ChevronDown, Send, Paperclip, MoreVertical, Shield, BellRing,
  Lock, Building, Calendar, Plus, Activity, CheckCircle2, AlertCircle, XCircle, RefreshCw, CreditCard, TrendingUp, Receipt, X, Check, Upload, Image as ImageIcon, Briefcase, Camera, Euro, Users, Dog, ArrowLeft, BedDouble, Bath, Maximize, FileText, Eye, Trash2, Download, ClipboardList
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { toast, Toaster } from "sonner@2.0.3";
import { GetReviewsModal } from "./GetReviewsModal";
import { RenterBoardPreview } from "./RenterBoardPreview";
import { HomeownerApprovalsTab } from "./HomeownerApprovalsTab";
import { HomeownerPromotionsTab } from "./HomeownerPromotionsTab";

export function HomeownerProfilePage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [listingFilter, setListingFilter] = useState("active");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [notificationsTab, setNotificationsTab] = useState<'notifications' | 'activity'>('notifications');

  // Reviews with reply support
  type ReviewReply = { text: string; date: string };
  type Review = {
    id: number; author: string; date: string; rating: number;
    text: string; property: string; reply?: ReviewReply;
  };
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1, author: "Sarah T.", date: "Yesterday", rating: 5,
      property: "2 Pankshin Road",
      text: "Great homeowner, very responsive and the property was in excellent condition when we moved in.",
    },
    {
      id: 2, author: "Emeka N.", date: "3 days ago", rating: 4,
      property: "10 Oyo Street",
      text: "Good experience overall. Minor maintenance issue was resolved within two days. Would recommend.",
    },
    {
      id: 3, author: "Amara K.", date: "1 week ago", rating: 3,
      property: "Victoria Island Flat",
      text: "Property was decent but communication could have been faster during the move-in period.",
      reply: { text: "Hi Amara, thank you for the feedback. We have since hired a dedicated property coordinator to improve response times. We hope to do better next time!", date: "5 days ago" }
    },
  ]);
  const [replyingToId, setReplyingToId] = useState<number | null>(null);
  const [replyDraft, setReplyDraft] = useState("");

  const [selectedPropertyId, setSelectedPropertyId] = useState<number | null>(null);
  const [propertyViewMode, setPropertyViewMode] = useState<'management' | 'public'>('management');
  const [rentInvoiceUploaded, setRentInvoiceUploaded] = useState(false);
  const [utilityBillUploaded, setUtilityBillUploaded] = useState(false);

  // Modal states for Listings
  const [isEditListingModalOpen, setIsEditListingModalOpen] = useState(false);
  const [isBookingsModalOpen, setIsBookingsModalOpen] = useState(false);
  const [isNewListingModalOpen, setIsNewListingModalOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState<any>(null);
  const [editModalPropertyStatus, setEditModalPropertyStatus] = useState("vacant");

  // Modal states for Transactions & Ads
  const [isManageAdModalOpen, setIsManageAdModalOpen] = useState(false);
  const [isEditPaymentModalOpen, setIsEditPaymentModalOpen] = useState(false);
  const [isPromoteModalOpen, setIsPromoteModalOpen] = useState(false);
  const [autoRenew, setAutoRenew] = useState(true);

  // Get Reviews modal
  const [getReviewsProperty, setGetReviewsProperty] = useState<{ id: number | string; title: string; location?: string } | null>(null);

  // Modal state for Listing Deactivation/Rented
  const [isDeactivateModalOpen, setIsDeactivateModalOpen] = useState(false);
  const [deactivateReason, setDeactivateReason] = useState("");
  const [propertyToDeactivate, setPropertyToDeactivate] = useState<any>(null);

  // Property Details (Management) State
  const [maintenanceItems, setMaintenanceItems] = useState([
    { id: 1, name: 'Heating System', date: '20-08-2026' },
    { id: 2, name: 'Ventilation System', date: '10-12-2026' },
    { id: 3, name: 'Refrigeration System', date: '05-11-2026' },
    { id: 4, name: 'Water Heater', date: '22-09-2026' },
  ]);
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [newItemName, setNewItemName] = useState("");
  const [newItemDate, setNewItemDate] = useState("");

  const [documents, setDocuments] = useState([
    { id: 1, name: 'Rent_Agreement.pdf', size: '2.4 MB' },
    { id: 2, name: 'Utility_Bill_Mar2026.pdf', size: '1.1 MB' },
    { id: 3, name: 'Property_Insurance.pdf', size: '3.2 MB' }
  ]);

  const [listings, setListings] = useState([
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1770217102047-06e8490267ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFsJTIwYXBhcnRtZW50JTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NzMxNjEyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "2 Pankshin Road",
      location: "Plateau, Nigeria",
      status: "active",
      propertyStatus: "occupied",
      approvalStatus: "approved",
      tenantEmail: "yakubu.m@example.com",
      leaseStart: "2025-01-01",
      leaseDuration: "12 months",
      rentAmount: "£450,000",
      tenantReviews: "Great tenant, communicates well and pays on time.",
      newEnquiries: 3,
      totalEnquiries: 12,
      price: "£450,000"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnR8ZW58MXx8fHwxNzczMTgxMzEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "10 Oyo Street",
      location: "Oyo, Nigeria",
      status: "active",
      propertyStatus: "vacant",
      approvalStatus: "approved",
      newEnquiries: 1,
      totalEnquiries: 8,
      price: "£350,000"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      title: "Victoria Island Flat",
      location: "Lagos, Nigeria",
      status: "active",
      propertyStatus: "vacant",
      approvalStatus: "approved",
      newEnquiries: 7,
      totalEnquiries: 24,
      price: "£150,000"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      title: "Asokoro Luxury Apart...",
      location: "Abuja, Nigeria",
      status: "active",
      propertyStatus: "occupied",
      approvalStatus: "approved",
      tenantEmail: "amaka.d@example.com",
      leaseStart: "2024-06-15",
      leaseDuration: "24 months",
      rentAmount: "£550,000",
      tenantReviews: "Keeps the place in excellent condition.",
      newEnquiries: 2,
      totalEnquiries: 19,
      price: "£550,000"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1502672260266-1c1de2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      title: "GRA Duplex",
      location: "Port Harcourt, Nigeria",
      status: "active",
      propertyStatus: "unavailable",
      approvalStatus: "approved",
      newEnquiries: 1,
      totalEnquiries: 5,
      price: "£400,000"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzMxODEzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "15 Enugu Avenue",
      location: "Enugu, Nigeria",
      status: "inactive",
      propertyStatus: "vacant",
      approvalStatus: "approved",
      newEnquiries: 0,
      totalEnquiries: 4,
      price: "£200,000"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      title: "Ikoyi Studio Apartment",
      location: "Ikoyi, Lagos",
      status: "pending",
      propertyStatus: "vacant",
      approvalStatus: "pending_approval",
      newEnquiries: 0,
      totalEnquiries: 0,
      price: "£250,000",
      pendingReason: "Awaiting Admin Approval"
    }
  ]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setIsSidebarOpen(false);
  };

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { id: "profile", label: "Public Profile", icon: <User size={18} /> },
    { id: "properties", label: "Properties", icon: <Building size={18} /> },
    { id: "messages", label: "Messages", icon: <MessageSquare size={18} />, badge: "4" },
    { id: "approvals", label: "Approvals", icon: <CheckCircle2 size={18} />, badge: "3" },
    { id: "transactions", label: "Transactions & Ads", icon: <CreditCard size={18} /> },
    { id: "promotions", label: "Promotions", icon: <TrendingUp size={18} /> },
    { id: "set", label: "Set", icon: <Settings size={18} /> },
    { id: "notifications", label: "Notifications", icon: <BellRing size={18} />, badge: "2" },
    { id: "renter-board", label: "Renter Board", icon: <ClipboardList size={18} /> },
  ];

  const bottomNavItems = [
    { id: "settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  // TAB CONTENT RENDERERS
  const renderDashboardTab = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">Performance Overview</h1>
        <p className="text-gray-500 text-[14px] mt-1">Welcome back. Here's how your properties are performing this month.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <div className="bg-white rounded-[20px] p-5 border border-gray-100 shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-[#10b981]/10 flex items-center justify-center text-[#10b981]">
              <Building size={20} />
            </div>
            <span className="text-gray-500 text-[12px] font-bold uppercase tracking-wider">Total Active Listings</span>
          </div>
          <h3 className="text-[#10182c] text-[28px] font-bold font-['Montserrat',sans-serif]">2</h3>
        </div>

        <div className="bg-white rounded-[20px] p-5 border border-gray-100 shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-[#c85212]/10 flex items-center justify-center text-[#c85212]">
              <MessageSquare size={20} />
            </div>
            <span className="text-gray-500 text-[12px] font-bold uppercase tracking-wider">Total Enquiries This Month</span>
          </div>
          <h3 className="text-[#10182c] text-[28px] font-bold font-['Montserrat',sans-serif]">24</h3>
        </div>

        <div className="bg-white rounded-[20px] p-5 border border-gray-100 shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <Clock size={20} />
            </div>
            <span className="text-gray-500 text-[12px] font-bold uppercase tracking-wider">Average Response Time</span>
          </div>
          <h3 className="text-[#10182c] text-[24px] font-bold font-['Montserrat',sans-serif]">&lt; 2 Hours</h3>
        </div>

        <div className="bg-white rounded-[20px] p-5 border border-gray-100 shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-[#fbff79]/30 flex items-center justify-center text-[#a6b000]">
              <Star size={20} className="fill-[#a6b000]" />
            </div>
            <span className="text-gray-500 text-[12px] font-bold uppercase tracking-wider">Average Tenant Rating</span>
          </div>
          <h3 className="text-[#10182c] text-[28px] font-bold font-['Montserrat',sans-serif]">4.8 <span className="text-[14px] text-gray-400 font-normal">/ 5</span></h3>
        </div>
      </div>

      {/* Redesigned Overview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Properties Snapshot */}
          <div className="bg-white rounded-[24px] p-6 lg:p-8 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c] flex items-center gap-2"><Building size={20} className="text-[#c85212]" /> Properties Snapshot</h2>
              <button onClick={() => setActiveTab('properties')} className="text-[#c85212] text-[13px] font-bold hover:underline">Manage All</button>
            </div>
            <div className="space-y-4">
              {listings.map(property => (
                <div key={property.id} className="flex items-center justify-between p-4 bg-[#f8f9fc] rounded-[16px] border border-gray-50 hover:border-[#c85212]/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-[10px] overflow-hidden shrink-0">
                      <ImageWithFallback src={property.image} alt={property.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#10182c] text-[14px]">{property.title}</h4>
                      <p className="text-[12px] text-gray-500">{property.location}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider ${property.propertyStatus === 'occupied' ? 'bg-[#10b981]/10 text-[#10b981]' : property.propertyStatus === 'vacant' ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-600'}`}>{property.propertyStatus}</span>
                    {property.propertyStatus === 'occupied' && <span className="text-[12px] text-gray-500 mt-1 font-medium">Rent: {property.price}/yr</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Snapshot */}
          <div className="bg-[#10182c] rounded-[24px] p-6 lg:p-8 shadow-xl text-white">
            <h2 className="font-['Montserrat',sans-serif] text-[18px] font-bold mb-6 flex items-center gap-2"><CreditCard size={20} className="text-[#fbff79]" /> Financial Snapshot (This Month)</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-[12px] text-gray-400 font-bold uppercase tracking-wider mb-1">Expected Rent</p>
                <div className="text-[24px] font-bold font-['Montserrat',sans-serif] text-white">£4,000</div>
              </div>
              <div>
                <p className="text-[12px] text-gray-400 font-bold uppercase tracking-wider mb-1">Collected</p>
                <div className="text-[24px] font-bold font-['Montserrat',sans-serif] text-[#10b981]">£2,000</div>
              </div>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mb-3">
              <div className="h-full bg-[#10b981] w-[50%] rounded-full"></div>
            </div>
            <div className="flex justify-between items-center text-[13px] text-gray-400">
              <span>50% collection rate</span>
              <button onClick={() => setActiveTab('transactions')} className="text-[#fbff79] font-bold hover:underline">View Transactions</button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Upcoming Maintenance */}
          <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
            <h2 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c] mb-6 flex items-center gap-2"><Settings size={20} className="text-[#c85212]" /> Upcoming Maintenance</h2>
            <div className="space-y-4">
              {maintenanceItems.slice(0, 4).map((item) => (
                <div key={item.id} className="flex gap-3 items-start pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                  <div className="w-10 h-10 rounded-full bg-[#c85212]/10 text-[#c85212] flex items-center justify-center shrink-0">
                    <Settings size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#10182c] text-[14px]">{item.name}</h4>
                    <p className="text-[12px] text-gray-500 mt-0.5">Scheduled: <span className="font-medium text-[#10182c]">{item.date}</span></p>
                  </div>
                </div>
              ))}
              {maintenanceItems.length === 0 && <p className="text-[13px] text-gray-500">No upcoming maintenance.</p>}
            </div>
            <button onClick={() => setActiveTab('properties')} className="w-full mt-4 py-2.5 rounded-[12px] bg-[#f8f9fc] hover:bg-gray-100 text-[#10182c] text-[13px] font-bold transition-colors">Manage Equipment</button>
          </div>

          {/* Unread Messages */}
          <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c] flex items-center gap-2"><MessageSquare size={20} className="text-[#c85212]" /> Recent Messages</h2>
              <button onClick={() => setActiveTab('messages')} className="text-[#c85212] text-[13px] font-bold hover:underline">Inbox</button>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3 items-center p-3 bg-[#f9fafb] rounded-[16px] cursor-pointer hover:bg-gray-100 transition-colors">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1580000000000?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=256&h=256" alt="Avatar" className="w-full h-full object-cover"/>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h4 className="font-bold text-[#10182c] text-[14px] truncate">Yakubu M.</h4>
                    <span className="w-2 h-2 bg-[#c85212] rounded-full shrink-0"></span>
                  </div>
                  <p className="text-[12px] text-gray-500 truncate">Is it still possible to view the property tomorrow?</p>
                </div>
              </div>
              <div className="flex gap-3 items-center p-3 bg-white rounded-[16px] border border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop" alt="Avatar" className="w-full h-full object-cover"/>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h4 className="font-bold text-[#10182c] text-[14px] truncate">Sarah T.</h4>
                    <span className="text-[10px] text-gray-400 shrink-0">1d ago</span>
                  </div>
                  <p className="text-[12px] text-gray-500 truncate">Thank you for fixing the AC so quickly.</p>
                </div>
              </div>
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
          <p className="text-gray-500 text-[14px] mt-1">This is how renters see you on the platform. Build trust with transparency.</p>
        </div>
        <button 
          onClick={() => {
            const isCurrentlyEditing = false; // Add state if you want real editing
            toast.info("Opening edit profile modal...");
          }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-[12px] transition-colors font-bold text-[14px] shadow-sm bg-white border border-gray-200 text-[#10182c] hover:bg-gray-50`}
        >
          <Edit2 size={16} /> Edit Profile
        </button>
      </div>

      <div className="bg-white rounded-[24px] shadow-sm p-6 lg:p-8 border border-gray-100 transition-colors">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col items-center shrink-0 w-full lg:w-[180px]">
            <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] bg-[#f0f0f0] group">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzczMTgyMjAzfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="mt-4 text-center">
              <h2 className="text-[22px] font-bold text-[#10182c] font-['Montserrat',sans-serif] leading-none">Michael D.</h2>
              <span className="inline-flex items-center mt-2 bg-[#10b981]/10 text-[#10b981] text-[11px] font-bold px-2 py-0.5 rounded-full">
                <Check size={12} className="mr-1" /> Verified Homeowner
              </span>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col gap-5 justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              <div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5"><MapPin size={12} /> Location</div>
                <div className="text-[15px] font-medium text-[#10182c]">Abuja, Nigeria</div>
              </div>
              <div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5"><Phone size={12} /> Phone Number</div>
                <div className="text-[15px] font-medium text-[#10182c]">+234 800 000 0000</div>
              </div>
              <div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5"><Globe size={12} /> Languages</div>
                <div className="text-[15px] font-medium text-[#10182c]">English, Hausa</div>
              </div>
              <div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5"><Mail size={12} /> Email Address</div>
                <div className="text-[15px] font-medium text-[#10182c]">michael@example.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        {/* About Me Card */}
        <div className="bg-white rounded-[24px] shadow-sm p-6 lg:p-8 border border-gray-100 flex flex-col transition-colors">
          <h3 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c] mb-5 border-b border-gray-100 pb-4">About Me</h3>
          <div className="mb-6">
            <p className="text-[14px] leading-[1.6] text-gray-600">I'm a dedicated homeowner with a passion for providing comfortable, well-maintained spaces for my tenants. With over 10 years of experience in property management, I pride myself on quick response times and fair practices. All my properties are professionally cleaned before move-in and I ensure any maintenance issues are handled promptly.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-gray-400 text-[11px] font-bold tracking-wider uppercase mb-1.5"><Briefcase size={14} /> Joined</div>
              <div className="font-bold text-[15px] text-[#10182c]">2022</div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-gray-400 text-[11px] font-bold tracking-wider uppercase mb-1.5"><Building size={14} /> Active Listings</div>
              <div className="font-bold text-[15px] text-[#10182c]">2 Properties</div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-gray-400 text-[11px] font-bold tracking-wider uppercase mb-1.5"><Clock size={14} /> Response Time</div>
              <div className="font-bold text-[15px] text-[#10182c]">&lt; 2 Hours</div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-gray-400 text-[11px] font-bold tracking-wider uppercase mb-1.5"><Star size={14} /> Tenant Rating</div>
              <div className="font-bold text-[15px] text-[#10182c] flex items-center gap-1">4.8 / 5 <Star size={12} className="fill-[#c85212] text-[#c85212]" /></div>
            </div>
          </div>
        </div>


      </div>
    </motion.div>
  );

  const renderPropertiesTab = () => {
    if (selectedPropertyId) {
      const property = listings.find(l => l.id === selectedPropertyId) || listings[0];
      return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSelectedPropertyId(null)}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#10182c] hover:bg-gray-50 transition-colors shadow-sm shrink-0"
              >
                <ArrowLeft size={18} />
              </button>
              {propertyViewMode === 'management' && (
                <div className="hidden sm:block w-[52px] h-[52px] rounded-[14px] overflow-hidden shrink-0 border border-gray-200 shadow-sm">
                  <ImageWithFallback src={property.image} alt={property.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] sm:text-[32px] font-bold tracking-tight leading-none">{property.title}</h1>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider ${
                    property.propertyStatus === 'occupied' ? 'bg-blue-100 text-blue-700' : 
                    property.propertyStatus === 'vacant' ? 'bg-green-100 text-green-700' : 
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {property.propertyStatus}
                  </span>
                </div>
                <p className="text-[15px] text-gray-500 flex items-center gap-1 mt-2"><MapPin size={16} /> {property.location}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <div className="bg-gray-100 p-1 rounded-[12px] flex w-full sm:w-auto shrink-0">
                <button 
                  onClick={() => setPropertyViewMode('management')}
                  className={`${propertyViewMode === 'management' ? 'bg-white text-[#10182c] shadow-sm ring-1 ring-black/5' : 'text-gray-500 hover:text-[#10182c]'} flex-1 sm:flex-none px-5 py-2 rounded-[10px] text-[13px] font-bold transition-all`}
                >
                  Management
                </button>
                <button 
                  onClick={() => setPropertyViewMode('public')}
                  className={`${propertyViewMode === 'public' ? 'bg-white text-[#10182c] shadow-sm ring-1 ring-black/5' : 'text-gray-500 hover:text-[#10182c]'} flex-1 sm:flex-none px-5 py-2 rounded-[10px] text-[13px] font-bold transition-all`}
                >
                  Public View
                </button>
              </div>

              {propertyViewMode === 'management' ? (
                <button onClick={() => toast.info("Opening Edit Management dialog...")} className="bg-white border border-gray-200 text-[#10182c] px-5 py-2.5 rounded-[12px] text-[13px] font-bold shadow-sm flex items-center justify-center gap-2 transition-all hover:bg-gray-50 hover:border-gray-300 w-full sm:w-auto shrink-0">
                  <Edit2 size={16} className="text-gray-400" /> Edit Details
                </button>
              ) : (
                <button onClick={() => toast.info("Opening Edit Listing dialog...")} className="bg-white border border-gray-200 text-[#10182c] px-5 py-2.5 rounded-[12px] text-[13px] font-bold shadow-sm flex items-center justify-center gap-2 transition-all hover:bg-gray-50 hover:border-gray-300 w-full sm:w-auto shrink-0">
                  <Edit2 size={16} className="text-gray-400" /> Edit Listing
                </button>
              )}
            </div>
          </div>

          {/* Pending Admin Approval Banner */}
          {property.approvalStatus === 'pending_approval' && (
            <div className="bg-[#c85212]/10 border-2 border-[#c85212] rounded-[16px] p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#c85212] flex items-center justify-center text-white shrink-0">
                <Clock size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[16px] text-[#10182c] mb-1">Pending Admin Approval</h3>
                <p className="text-[14px] text-gray-700 leading-relaxed">
                  This property listing is currently under review by our admin team. Once approved, it will go live and be visible to potential renters.
                  This process typically takes 24-48 hours.
                </p>
              </div>
            </div>
          )}

          {propertyViewMode === 'management' ? (
            <div className="flex flex-col gap-6 xl:gap-8">
              {/* Quick Management Stats (Replaces Hero Image in Management View) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                <div className="bg-white rounded-[24px] p-5 lg:p-6 shadow-sm border border-gray-100 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Occupancy Status</div>
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${property.propertyStatus === 'occupied' ? 'bg-[#10b981]' : 'bg-[#c85212]'}`}></span>
                      <span className="text-[20px] font-bold font-['Montserrat',sans-serif] text-[#10182c] leading-none capitalize">{property.propertyStatus}</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${property.propertyStatus === 'occupied' ? 'bg-[#10b981]/10 text-[#10b981]' : 'bg-[#c85212]/10 text-[#c85212]'}`}>
                    <Building size={24} />
                  </div>
                </div>
                
                <div className="bg-white rounded-[24px] p-5 lg:p-6 shadow-sm border border-gray-100 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Financial Status</div>
                    <div className="text-[20px] font-bold font-['Montserrat',sans-serif] text-[#10182c] leading-none">Up to date</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                </div>

                <div className="bg-white rounded-[24px] p-5 lg:p-6 shadow-sm border border-gray-100 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Active Issues</div>
                    <div className="flex items-center gap-2">
                      <span className="text-[20px] font-bold font-['Montserrat',sans-serif] text-[#10182c] leading-none">0 Pending</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center shrink-0">
                    <Settings size={24} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 xl:gap-8">
                <div className="space-y-6 lg:space-y-8">
                  {/* Current Tenant */}
              <div className="bg-white rounded-[24px] p-6 lg:p-8 shadow-sm border border-gray-100">
                <h3 className="font-bold font-['Montserrat',sans-serif] text-[#10182c] text-[18px] mb-5">Current Tenant</h3>
                <div className="bg-[#f8f9fc] rounded-[20px] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-[64px] h-[64px] rounded-full overflow-hidden bg-gray-200 shrink-0 border-2 border-white shadow-sm">
                      <ImageWithFallback src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Tenant" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[20px]">{property.propertyStatus === 'occupied' ? 'Yakubu M.' : 'None'}</h4>
                      {property.propertyStatus === 'occupied' && (
                        <p className="text-[13px] font-medium text-gray-500 mt-1">Rent: Mar 26, 2026 - Apr 26, 2026</p>
                      )}
                    </div>
                  </div>
                  {property.propertyStatus === 'occupied' && (
                    <div className="flex gap-2">
                      <button className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#10182c] hover:bg-gray-50 transition-colors shadow-sm">
                        <MessageSquare size={20} />
                      </button>
                      <button className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#10182c] hover:bg-gray-50 transition-colors shadow-sm">
                        <Mail size={20} />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Marketing & Promotions */}
              <div className="bg-white rounded-[24px] p-6 lg:p-8 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold font-['Montserrat',sans-serif] text-[#10182c] text-[18px] flex items-center gap-2">
                    <TrendingUp size={20} className="text-[#c85212]" /> Marketing & Promotions
                  </h3>
                </div>
                {property.id === 1 ? (
                  <div className="bg-[#f8f9fc] rounded-[20px] p-5 border border-[#c85212]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-[12px] bg-[#c85212]/10 text-[#c85212] flex items-center justify-center shrink-0">
                        <Star size={24} className="fill-[#c85212]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-[#10182c] text-[15px]">Premium Spotlight Ad</h4>
                          <span className="bg-[#10b981]/10 text-[#10b981] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Active</span>
                        </div>
                        <p className="text-[13px] text-gray-500 mb-2">Your property is currently boosted in search results.</p>
                        <div className="flex items-center gap-4 text-[12px] font-medium">
                          <span className="text-[#10182c]"><strong className="text-[#c85212]">1,240</strong> Views</span>
                          <span className="text-[#10182c]"><strong className="text-[#c85212]">54</strong> Clicks</span>
                          <span className="text-gray-400">• 5 days remaining</span>
                        </div>
                      </div>
                    </div>
                    <button className="w-full sm:w-auto bg-white border border-gray-200 hover:bg-gray-50 text-[#10182c] px-4 py-2.5 rounded-[12px] text-[13px] font-bold transition-colors shadow-sm whitespace-nowrap">
                      Manage Ad
                    </button>
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-[#10182c] to-[#1a2642] rounded-[20px] p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative">
                    <div className="absolute -right-8 -bottom-8 text-white/5">
                      <TrendingUp size={120} />
                    </div>
                    <div className="relative z-10 flex-1">
                      <h4 className="font-bold font-['Montserrat',sans-serif] text-[18px] mb-2 text-[#fbff79]">Boost this property's visibility</h4>
                      <p className="text-[13px] text-gray-300 max-w-[400px] leading-relaxed">Get to the top of search results and reach 3x more potential tenants. Promoted properties rent 40% faster on average.</p>
                    </div>
                    <button className="relative z-10 w-full sm:w-auto bg-[#c85212] hover:bg-[#a6420c] text-white px-6 py-3 rounded-[12px] text-[14px] font-bold transition-colors shadow-sm whitespace-nowrap">
                      Promote Listing
                    </button>
                  </div>
                )}
              </div>

              {/* Maintenance & Equipment */}
              <div className="bg-white rounded-[24px] p-6 lg:p-8 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold font-['Montserrat',sans-serif] text-[#10182c] text-[18px]">Maintenance & Equipment</h3>
                  <button 
                    onClick={() => setIsAddingItem(!isAddingItem)} 
                    className="text-[#c85212] font-bold text-[14px] hover:underline flex items-center gap-1"
                  >
                    {isAddingItem ? <><X size={16}/> Cancel</> : <><Plus size={16}/> Add Item</>}
                  </button>
                </div>
                
                <AnimatePresence>
                  {isAddingItem && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden mb-4"
                    >
                      <div className="bg-[#f8f9fc] rounded-[20px] p-5 border border-[#c85212]/20 flex flex-col sm:flex-row gap-4 items-end">
                        <div className="flex-1 w-full">
                          <label className="block text-[12px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Item Name</label>
                          <input 
                            type="text" 
                            value={newItemName} 
                            onChange={(e) => setNewItemName(e.target.value)} 
                            placeholder="e.g. AC Unit" 
                            className="w-full border border-gray-200 rounded-[12px] px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]" 
                          />
                        </div>
                        <div className="flex-1 w-full">
                          <label className="block text-[12px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Scheduled Date</label>
                          <input 
                            type="date" 
                            value={newItemDate} 
                            onChange={(e) => setNewItemDate(e.target.value)} 
                            className="w-full border border-gray-200 rounded-[12px] px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]" 
                          />
                        </div>
                        <button 
                          onClick={() => {
                            if(newItemName && newItemDate) {
                              const [y, m, d] = newItemDate.split('-');
                              const formattedDate = `${d}-${m}-${y}`;
                              setMaintenanceItems([{id: Date.now(), name: newItemName, date: formattedDate}, ...maintenanceItems]);
                              setNewItemName('');
                              setNewItemDate('');
                              setIsAddingItem(false);
                              toast.success("Item added successfully");
                            } else {
                              toast.error("Please fill in both fields");
                            }
                          }}
                          className="w-full sm:w-auto bg-[#c85212] hover:bg-[#a6420c] text-white px-6 py-2.5 rounded-[12px] font-bold text-[14px] transition-colors shadow-sm shrink-0"
                        >
                          Save
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {maintenanceItems.map((item) => (
                    <div key={item.id} className="bg-[#f8f9fc] rounded-[20px] p-5 flex items-center justify-between border border-gray-100 hover:border-gray-200 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-400 shadow-sm border border-gray-100">
                          <Settings size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#10182c] text-[15px] mb-1">{item.name}</h4>
                          <p className="text-[12px] text-gray-400">Scheduled for: <br/><span className="font-medium text-gray-600">{item.date}</span></p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 border-l border-gray-200 pl-3">
                        <button className="text-gray-400 hover:text-[#10182c] transition-colors"><Edit2 size={16}/></button>
                        <button 
                          onClick={() => {
                            setMaintenanceItems(maintenanceItems.filter(i => i.id !== item.id));
                            toast.success("Item removed");
                          }} 
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <X size={16}/>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Past Tenants */}
              <div className="bg-white rounded-[24px] p-6 lg:p-8 shadow-sm border border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 bg-[#f8f9fc] p-2 pr-4 rounded-[20px]">
                  <h3 className="font-bold font-['Montserrat',sans-serif] text-[#10182c] text-[16px] pl-3">Past Tenants</h3>
                  <div className="relative flex-1 max-w-[240px]">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Search tenants..." 
                      className="w-full bg-white border border-gray-200 rounded-[14px] pl-9 pr-4 py-2.5 text-[13px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212] shadow-sm"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Joy Johnson', date: 'Jan 1, 2026 - Dec 31, 2026' },
                    { name: 'Michael Smith', date: 'Feb 1, 2026 - Jan 31, 2027' },
                    { name: 'Emily Davis', date: 'Mar 1, 2026 - Feb 28, 2027' },
                    { name: 'Daniel Lee', date: 'Apr 1, 2026 - Mar 31, 2027' },
                    { name: 'Sophie Brown', date: 'May 1, 2026 - Apr 30, 2027' }
                  ].map((tenant, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-100 rounded-[20px] hover:bg-gray-50 transition-colors gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shrink-0 border border-gray-200">
                          <ImageWithFallback src={`https://i.pravatar.cc/100?img=${idx+10}`} alt={tenant.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#10182c] text-[15px]">{tenant.name}</h4>
                          <p className="text-[12px] text-gray-500 mt-0.5">Lease: {tenant.date}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 sm:self-auto self-end">
                        <button className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#10182c] hover:bg-gray-50 transition-colors shadow-sm"><MessageSquare size={16}/></button>
                        <button className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#10182c] hover:bg-gray-50 transition-colors shadow-sm"><Mail size={16}/></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:space-y-8">
              {/* Financials Card */}
              <div className="bg-[#10182c] rounded-[24px] p-6 lg:p-8 shadow-[0_8px_30px_rgba(16,24,44,0.12)] text-white">
                <h3 className="font-bold font-['Montserrat',sans-serif] text-[20px] mb-6">Financials</h3>
                <div className="mb-6">
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Rent Amount</p>
                  <div className="text-[36px] font-bold font-['Montserrat',sans-serif] leading-none">£2,000<span className="text-[16px] text-gray-400 font-normal">/Mo</span></div>
                </div>
                <div className="flex justify-between items-center mb-6 border-b border-[rgba(255,255,255,0.1)] pb-6">
                  <span className="text-[14px] font-bold text-gray-300">Due Date:</span>
                  <span className="text-[14px] font-bold text-white">Apr 26, 2026</span>
                </div>
                
                <div className="bg-white text-[#10182c] rounded-[20px] p-4 lg:p-5 flex items-center justify-between mb-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 text-[#c85212] bg-[#c85212]/10 p-1.5 rounded-full"><BellRing size={16} /></div>
                    <div>
                      <h4 className="font-bold text-[14px] mb-0.5">Auto-Reminders</h4>
                      <p className="text-[12px] text-gray-500 leading-tight">Notify Renter<br/>before due date</p>
                    </div>
                  </div>
                  <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#c85212] shrink-0 cursor-pointer">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6 shadow-sm transition-transform" />
                  </div>
                </div>

                <div className="bg-white text-[#10182c] rounded-[20px] p-4 lg:p-5 shadow-sm">
                  <h4 className="font-bold text-[14px] mb-3">Send Documents</h4>
                  
                  {/* Rent Invoice Upload */}
                  <div className="mb-3">
                    <p className="text-[12px] font-bold text-gray-500 mb-1.5">Rent Invoice</p>
                    <button 
                      onClick={() => setRentInvoiceUploaded(true)}
                      className={`w-full border py-2.5 rounded-[12px] text-[13px] font-bold flex items-center justify-center gap-2 transition-colors ${rentInvoiceUploaded ? 'bg-[#10b981]/10 border-[#10b981]/20 text-[#10b981]' : 'bg-[#f8f9fc] border-[#f0f0f0] text-gray-600 hover:bg-gray-50'}`}
                    >
                      {rentInvoiceUploaded ? <><CheckCircle2 size={16}/> Uploaded</> : <><Upload size={16} className="text-[#c85212]" /> Upload Rent Invoice</>}
                    </button>
                  </div>
                  
                  {/* Utility Bill Upload */}
                  <div className="mb-4">
                    <p className="text-[12px] font-bold text-gray-500 mb-1.5">Utility Bill</p>
                    <button 
                      onClick={() => setUtilityBillUploaded(true)}
                      className={`w-full border py-2.5 rounded-[12px] text-[13px] font-bold flex items-center justify-center gap-2 transition-colors ${utilityBillUploaded ? 'bg-[#10b981]/10 border-[#10b981]/20 text-[#10b981]' : 'bg-[#f8f9fc] border-[#f0f0f0] text-gray-600 hover:bg-gray-50'}`}
                    >
                      {utilityBillUploaded ? <><CheckCircle2 size={16}/> Uploaded</> : <><Upload size={16} className="text-[#c85212]" /> Upload Utility Bill</>}
                    </button>
                  </div>

                  <button 
                    onClick={() => {
                      if (rentInvoiceUploaded || utilityBillUploaded) {
                        toast.success("Documents sent to tenant successfully!");
                        setRentInvoiceUploaded(false);
                        setUtilityBillUploaded(false);
                      } else {
                        toast.error("Please upload at least one document first.");
                      }
                    }}
                    className="w-full bg-[#c85212] hover:bg-[#a6420c] text-white py-3 rounded-[12px] text-[14px] font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <Send size={16} /> Send to Tenant
                  </button>
                </div>
              </div>

              {/* Documents Card */}
              <div className="bg-white rounded-[24px] p-6 lg:p-8 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-bold font-['Montserrat',sans-serif] text-[#10182c] text-[18px]">Documents</h3>
                  <input 
                    type="file" 
                    id="document-upload" 
                    className="hidden" 
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        const file = e.target.files[0];
                        setDocuments([...documents, { id: Date.now(), name: file.name, size: (file.size / 1024 / 1024).toFixed(1) + ' MB' }]);
                        toast.success("Document uploaded successfully");
                      }
                    }}
                  />
                  <button 
                    onClick={() => document.getElementById('document-upload')?.click()} 
                    className="text-[#c85212] font-bold text-[13px] flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <Plus size={16}/> Upload New
                  </button>
                </div>
                <div className="space-y-3">
                  {documents.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-3.5 bg-white rounded-[16px] border border-gray-100 hover:border-gray-200 transition-colors shadow-sm group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#f8f9fc] rounded-xl flex items-center justify-center text-gray-400 group-hover:text-[#c85212] transition-colors shrink-0">
                          <FileText size={18} />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-bold text-[#10182c] text-[13px] mb-0.5 truncate max-w-[150px] sm:max-w-[200px]">{doc.name}</h4>
                          <p className="text-[11px] text-gray-500">{doc.size}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <button onClick={() => toast.success(`Downloading ${doc.name}...`)} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-[#10182c] hover:bg-gray-50 rounded-lg transition-colors"><Upload size={16} className="rotate-180" /></button>
                        <button onClick={() => {
                          setDocuments(documents.filter(d => d.id !== doc.id));
                          toast.success("Document removed");
                        }} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"><X size={16} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Reviews Section ── */}
              <div className="bg-white rounded-[24px] p-6 lg:p-8 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-bold font-['Montserrat',sans-serif] text-[#10182c] text-[18px] flex items-center gap-2">
                    <Star size={18} className="text-[#c85212] fill-[#c85212]" /> Reviews
                  </h3>
                  <span className="text-[12px] text-gray-400 font-medium">{property.reviews || 0} total</span>
                </div>

                {/* Rating summary */}
                <div className="bg-[#f8f9fc] rounded-[16px] p-4 mb-5 flex items-center gap-4">
                  <div className="text-center shrink-0">
                    <p className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[32px] leading-none">{property.rating || "—"}</p>
                    <div className="flex items-center justify-center gap-0.5 mt-1.5">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} size={12} className={i <= Math.round(parseFloat(property.rating || "0")) ? "fill-[#c85212] text-[#c85212]" : "fill-gray-200 text-gray-200"} />
                      ))}
                    </div>
                    <p className="text-gray-400 text-[11px] mt-1">{property.reviews || 0} reviews</p>
                  </div>
                  <div className="flex-1 space-y-1.5">
                    {[5,4,3,2,1].map((star, idx) => {
                      const widths = ["65%","20%","10%","3%","2%"];
                      return (
                        <div key={star} className="flex items-center gap-2">
                          <span className="text-[10px] text-gray-400 w-3 shrink-0">{star}</span>
                          <div className="flex-1 bg-gray-100 rounded-full h-1.5 overflow-hidden">
                            <div className="h-full bg-[#c85212] rounded-full" style={{ width: widths[idx] }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Most recent review snippet */}
                <div className="border border-gray-100 rounded-[14px] p-4 mb-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full bg-[#10182c] flex items-center justify-center shrink-0">
                      <span className="text-white text-[10px] font-bold">YA</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#10182c] text-[12px]">Yakubu A.</p>
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(i => <Star key={i} size={9} className={i <= 4 ? "fill-[#c85212] text-[#c85212]" : "fill-gray-200 text-gray-200"} />)}
                      </div>
                    </div>
                    <span className="text-gray-400 text-[10px] ml-auto">Jan 2026</span>
                  </div>
                  <p className="text-gray-500 text-[12px] leading-relaxed italic line-clamp-2">
                    "Great homeowner, very responsive and the property was in excellent condition when we moved in."
                  </p>
                </div>

                {/* Get Reviews CTA */}
                <button
                  onClick={() => setGetReviewsProperty({ id: property.id, title: property.title, location: property.location })}
                  className="w-full bg-[#fbff79] hover:bg-[#f0f550] text-[#10182c] font-bold text-[13px] py-3 rounded-[12px] transition-colors flex items-center justify-center gap-2"
                >
                  <Star size={14} className="fill-[#10182c]" /> Get Reviews
                </button>
                <p className="text-center text-gray-400 text-[11px] mt-2">
                  Share a link or email past tenants to collect reviews
                </p>
              </div>
            </div>
          </div>
          </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 xl:gap-8">
              {/* Public View Left Column */}
              <div className="space-y-6 lg:space-y-8">
                {/* Main Hero Image */}
                <div className="h-[340px] sm:h-[400px] w-full rounded-[24px] overflow-hidden mb-3 lg:mb-4 border border-gray-100 shadow-sm relative group">
                  <ImageWithFallback src={property.image} alt={property.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-[12px] font-bold text-[#10182c] shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-pulse"></span> Active Listing
                  </div>
                  <div className="absolute bottom-4 right-4 bg-[#10182c]/80 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-[13px] font-bold flex items-center gap-2 cursor-pointer hover:bg-[#10182c] transition-colors">
                    <ImageIcon size={16} /> View all photos
                  </div>
                </div>
                
                {/* Property Description */}
                <div className="bg-white rounded-[24px] p-6 lg:p-8 shadow-sm border border-gray-100">
                  <h3 className="font-bold font-['Montserrat',sans-serif] text-[#10182c] text-[20px] mb-4">About this property</h3>
                  <p className="text-[14px] text-gray-600 leading-[1.8]">
                    Welcome to {property.title}. This beautiful property is situated in the heart of {property.location}. Featuring modern amenities, spacious rooms, and a welcoming neighborhood, it's the perfect place to call home.
                    <br/><br/>
                    The property has been professionally cleaned and is ready for immediate move-in. It features a spacious open-plan living area, a modern kitchen with top-of-the-line appliances, and a private balcony with stunning views of the surrounding area. 
                    <br/><br/>
                    Conveniently located near public transportation, shopping centers, and top-rated schools.
                  </p>
                </div>
                
                {/* Amenities */}
                <div className="bg-white rounded-[24px] p-6 lg:p-8 shadow-sm border border-gray-100">
                  <h3 className="font-bold font-['Montserrat',sans-serif] text-[#10182c] text-[20px] mb-6">Amenities & Features</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-4">
                    <div className="flex items-center gap-3 text-[14px] text-gray-600"><div className="w-8 h-8 rounded-full bg-[#10b981]/10 text-[#10b981] flex items-center justify-center"><CheckCircle2 size={16}/></div> Air Conditioning</div>
                    <div className="flex items-center gap-3 text-[14px] text-gray-600"><div className="w-8 h-8 rounded-full bg-[#10b981]/10 text-[#10b981] flex items-center justify-center"><CheckCircle2 size={16}/></div> Fast Internet</div>
                    <div className="flex items-center gap-3 text-[14px] text-gray-600"><div className="w-8 h-8 rounded-full bg-[#10b981]/10 text-[#10b981] flex items-center justify-center"><CheckCircle2 size={16}/></div> Parking Space</div>
                    <div className="flex items-center gap-3 text-[14px] text-gray-600"><div className="w-8 h-8 rounded-full bg-[#10b981]/10 text-[#10b981] flex items-center justify-center"><CheckCircle2 size={16}/></div> 24/7 Security</div>
                    <div className="flex items-center gap-3 text-[14px] text-gray-600"><div className="w-8 h-8 rounded-full bg-[#10b981]/10 text-[#10b981] flex items-center justify-center"><CheckCircle2 size={16}/></div> Balcony</div>
                    <div className="flex items-center gap-3 text-[14px] text-gray-600"><div className="w-8 h-8 rounded-full bg-[#10b981]/10 text-[#10b981] flex items-center justify-center"><CheckCircle2 size={16}/></div> Water Supply</div>
                  </div>
                </div>
              </div>
              
              {/* Public View Right Column */}
              <div className="space-y-6 lg:space-y-8">
                {/* Price & Action Card */}
                <div className="bg-[#10182c] rounded-[24px] p-6 lg:p-8 shadow-xl border border-gray-800 text-white sticky top-24">
                  <div className="text-[32px] font-bold font-['Montserrat',sans-serif] leading-none mb-1">{property.price}</div>
                  <div className="text-[13px] text-gray-400 mb-6">per year</div>
                  
                  <div className="space-y-3 mb-6 bg-white/5 p-4 rounded-[16px] border border-white/10">
                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-gray-400">Service Charge</span>
                      <span className="font-bold">£20,000</span>
                    </div>
                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-gray-400">Agency Fee (10%)</span>
                      <span className="font-bold">£35,000</span>
                    </div>
                    <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[15px]">
                      <span className="text-gray-300 font-bold">Total Initial</span>
                      <span className="font-bold text-[#c85212]">{property.price.replace('£', '£')}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-[#c85212] hover:bg-[#a6420c] text-white py-3.5 rounded-[16px] text-[15px] font-bold shadow-sm mb-3 transition-colors flex items-center justify-center gap-2">
                    <Calendar size={18} /> Book Viewing
                  </button>
                  <button className="w-full bg-white/10 hover:bg-white/20 text-white py-3.5 rounded-[16px] text-[15px] font-bold shadow-sm transition-colors flex items-center justify-center gap-2">
                    <MessageSquare size={18} /> Contact Homeowner
                  </button>
                </div>
                
                {/* Key Stats summary */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-[20px] p-5 text-center border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-[#c85212]/10 text-[#c85212] flex items-center justify-center mx-auto mb-3"><BedDouble size={20}/></div>
                    <div className="font-bold text-[#10182c] text-[16px] font-['Montserrat',sans-serif]">2 Beds</div>
                  </div>
                  <div className="bg-white rounded-[20px] p-5 text-center border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mx-auto mb-3"><Bath size={20}/></div>
                    <div className="font-bold text-[#10182c] text-[16px] font-['Montserrat',sans-serif]">3 Baths</div>
                  </div>
                  <div className="bg-white rounded-[20px] p-5 text-center border border-gray-100 shadow-sm col-span-2">
                    <div className="w-10 h-10 rounded-full bg-[#10b981]/10 text-[#10b981] flex items-center justify-center mx-auto mb-3"><Maximize size={20}/></div>
                    <div className="font-bold text-[#10182c] text-[16px] font-['Montserrat',sans-serif]">1,250 Sq M</div>
                  </div>
                </div>
                
                {/* Homeowner preview */}
                <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[14px] text-[#10182c] mb-4">Listed by</h4>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
                      <ImageWithFallback src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Homeowner" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-bold text-[#10182c] text-[15px]">Michael D.</div>
                      <div className="flex items-center gap-1 text-[12px] text-gray-500">
                        <Star size={12} className="fill-[#c85212] text-[#c85212]" /> 4.8 / 5 Rating
                      </div>
                    </div>
                  </div>
                  <button onClick={() => toast.info("Viewing homeowner profile...")} className="w-full py-2 bg-[#f8f9fc] hover:bg-gray-100 text-[#10182c] rounded-[12px] text-[13px] font-bold transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      );
    }

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
          <div>
            <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">Properties</h1>
            <p className="text-gray-500 text-[14px] mt-1">Manage your properties and track enquiries.</p>
          </div>
          <button onClick={() => { setEditModalPropertyStatus('vacant'); setIsNewListingModalOpen(true); }} className="bg-[#10182c] hover:bg-[#1a2642] text-white px-5 py-2.5 rounded-[12px] text-[14px] font-bold transition-colors shadow-sm flex items-center gap-2">
            <Plus size={18} /> New Property
          </button>
        </div>

        {/* Pending Listings Action Center */}
        {listings.some(l => l.status === 'pending') && listingFilter !== 'pending' && (
          <div className="bg-[#fffbeb] border border-[#fde68a] rounded-[24px] p-6 shadow-sm mb-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#f59e0b]/20 flex items-center justify-center text-[#d97706] shrink-0">
                <AlertCircle size={24} />
              </div>
              <div>
                <h3 className="font-bold text-[#10182c] text-[18px] mb-1">Action Required: Pending Listings</h3>
                <p className="text-[13px] text-gray-600">You have {listings.filter(l => l.status === 'pending').length} property waiting for approval or requiring additional details before going live.</p>
              </div>
            </div>
            <button 
              onClick={() => setListingFilter('pending')}
              className="bg-[#d97706] hover:bg-[#b45309] text-white px-6 py-2.5 rounded-[12px] font-bold text-[14px] transition-colors shadow-sm whitespace-nowrap"
            >
              Review Pending
            </button>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 border-b border-gray-200 mb-6">
          <button 
            onClick={() => setListingFilter('active')}
            className={`pb-3 px-4 text-[15px] font-bold transition-colors relative ${listingFilter === 'active' ? 'text-[#c85212]' : 'text-gray-500 hover:text-[#10182c]'}`}
          >
            Active
            {listingFilter === 'active' && <motion.div layoutId="listingTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c85212]" />}
          </button>
          <button 
            onClick={() => setListingFilter('pending')}
            className={`pb-3 px-4 text-[15px] font-bold transition-colors relative ${listingFilter === 'pending' ? 'text-[#c85212]' : 'text-gray-500 hover:text-[#10182c]'}`}
          >
            Pending
            {listings.some(l => l.status === 'pending') && (
              <span className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#f59e0b] text-white text-[10px]">{listings.filter(l => l.status === 'pending').length}</span>
            )}
            {listingFilter === 'pending' && <motion.div layoutId="listingTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c85212]" />}
          </button>
          <button 
            onClick={() => setListingFilter('inactive')}
            className={`pb-3 px-4 text-[15px] font-bold transition-colors relative ${listingFilter === 'inactive' ? 'text-[#c85212]' : 'text-gray-500 hover:text-[#10182c]'}`}
          >
            Inactive
            {listingFilter === 'inactive' && <motion.div layoutId="listingTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c85212]" />}
          </button>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[16px] lg:gap-[24px]">
          {listings.filter(l => l.status === listingFilter).map((property) => (
            <div 
              key={property.id} 
              onClick={() => setSelectedPropertyId(property.id)}
              className="group flex flex-col bg-white rounded-[16px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0px_8px_24px_rgba(0,0,0,0.12)] cursor-pointer overflow-hidden"
            >
              {/* Top Section (Image + Status Badge) */}
              <div className="relative h-[150px] w-full rounded-t-[16px] overflow-hidden shrink-0">
                <ImageWithFallback src={property.image} alt={property.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className={`px-[10px] py-[4px] rounded-full text-[10px] font-bold text-white uppercase tracking-wider shadow-sm ${property.status === 'active' ? 'bg-[#1DBF73]' : property.status === 'pending' ? 'bg-[#f59e0b]' : 'bg-gray-500'}`}>
                    {property.status.toUpperCase()}
                  </span>
                  {property.approvalStatus === 'pending_approval' && (
                    <span className="px-[10px] py-[4px] rounded-full text-[10px] font-bold bg-[#c85212] text-white uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <Clock size={10} /> Pending Approval
                    </span>
                  )}
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-[16px] flex flex-col flex-1">
                {/* Title & Location */}
                <h4 className="font-['Montserrat',sans-serif] font-semibold text-[#1A1A1A] group-hover:text-[#FF6A00] transition-colors text-[17px] leading-tight mb-[4px] truncate">
                  {property.title}
                </h4>
                <div className="flex items-center gap-[4px] text-[#6B7280] mb-[16px]">
                  <MapPin size={13} className="shrink-0" />
                  <span className="text-[12px] truncate">{property.location}</span>
                </div>

                {/* Info Cards Row */}
                <div className="grid grid-cols-2 gap-[12px]">
                  {/* Occupancy Card */}
                  <div className="bg-[#F9FAFB] px-[12px] py-[10px] rounded-[12px] flex flex-col justify-center">
                    <span className="text-[#9CA3AF] text-[10px] font-bold uppercase tracking-wider mb-1">Occupancy</span>
                    <div className="flex items-center gap-1.5">
                      <span className={`w-[6px] h-[6px] rounded-full ${property.propertyStatus === 'occupied' ? 'bg-[#1DBF73]' : 'bg-[#F59E0B]'}`}></span>
                      <span className={`text-[12px] font-medium capitalize ${property.propertyStatus === 'occupied' ? 'text-[#1DBF73]' : 'text-[#F59E0B]'}`}>
                        {property.propertyStatus}
                      </span>
                    </div>
                  </div>

                  {/* Enquiries Card */}
                  <div className="bg-[#F9FAFB] px-[12px] py-[10px] rounded-[12px] flex flex-col justify-center">
                    <span className="text-[#9CA3AF] text-[10px] font-bold uppercase tracking-wider mb-1">Enquiries</span>
                    <div className="flex items-center gap-1.5">
                      <MessageSquare size={13} className="text-[#F97316]" />
                      <span className="text-[#F97316] text-[12px] font-medium">
                        {property.newEnquiries || 0} New
                      </span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#E5E7EB] my-[14px] w-full"></div>

                {/* Bottom Section */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[#6B7280] text-[12px] font-medium">Total Enquiries: {property.totalEnquiries || 0}</span>
                  <div className="relative">
                    <MessageSquare size={16} className="text-[#6B7280] group-hover:text-[#1A1A1A] transition-colors" />
                    {(property.newEnquiries || 0) > 0 && (
                      <span className="absolute -top-1 -right-1 w-[6px] h-[6px] rounded-full bg-[#EF4444] border border-white"></span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  };

  const renderMessagesTab = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="h-[calc(100vh-200px)] min-h-[500px] flex flex-col sm:flex-row gap-6">
      {/* Inbox List */}
      <div className="w-full sm:w-[320px] lg:w-[380px] bg-white border border-gray-200 rounded-[20px] flex flex-col overflow-hidden shrink-0 shadow-sm">
        <div className="p-4 border-b border-gray-100">
          <h2 className="font-['Montserrat',sans-serif] text-[20px] font-bold text-[#10182c]">Enquiries</h2>
          <div className="mt-3 flex items-center bg-[#f5f6f8] px-3 py-2 rounded-xl">
            <Search size={16} className="text-gray-400 mr-2" />
            <input type="text" placeholder="Search chats..." className="bg-transparent border-none outline-none text-[13px] w-full" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className={`p-4 border-b border-gray-50 flex gap-3 cursor-pointer transition-colors ${i === 0 ? 'bg-[#f9fafb]' : 'hover:bg-gray-50'}`}>
              <div className="relative">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <ImageWithFallback src={`https://images.unsplash.com/photo-${1580000000000 + i}?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=256&h=256`} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                {i === 0 && <div className="absolute top-0 right-0 w-3 h-3 bg-[#c85212] border-2 border-white rounded-full"></div>}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h4 className="font-bold text-[14px] text-[#10182c] truncate">{i === 0 ? "Yakubu M." : "David L."}</h4>
                  <span className="text-[11px] text-gray-400 shrink-0">10:42 AM</span>
                </div>
                <p className="text-[12px] font-bold text-[#c85212] mb-0.5 truncate">Re: 2 Pankshin Road</p>
                <p className={`text-[13px] truncate ${i === 0 ? 'text-[#10182c] font-medium' : 'text-gray-500'}`}>
                  {i === 0 ? "Is it still possible to view the property tomorrow?" : "Thanks for the information!"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-white border border-gray-200 rounded-[20px] flex flex-col overflow-hidden shadow-sm hidden sm:flex">
        <div className="h-[72px] border-b border-gray-100 flex items-center justify-between px-6 shrink-0 bg-[#f9fafb]/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
              <ImageWithFallback src="https://images.unsplash.com/photo-1580000000000?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=256&h=256" alt="Yakubu" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-[15px] text-[#10182c]">Yakubu M.</h3>
              <p className="text-[12px] text-[#c85212] font-medium">Interested in 2 Pankshin Road</p>
            </div>
          </div>
          <button onClick={() => toast.info("Opening message options...")} className="p-2 text-gray-400 hover:text-[#10182c] transition-colors rounded-full hover:bg-gray-100">
            <MoreVertical size={20} />
          </button>
        </div>
        
        <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4 bg-[#fcfcfd]">
          <div className="text-center my-4">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-gray-100">Today</span>
          </div>
          
          <div className="flex gap-3 max-w-[80%] items-end self-start mt-2">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 shrink-0 mb-5">
              <ImageWithFallback src="https://images.unsplash.com/photo-1580000000000?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=256&h=256" alt="Yakubu" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="bg-white border border-gray-200 text-[#10182c] p-3 rounded-[16px] rounded-bl-[4px] text-[14px] shadow-sm">
                Hi, is it still possible to view the property tomorrow?
              </div>
              <span className="text-[11px] text-gray-400 ml-1">10:30 AM</span>
            </div>
          </div>

          <div className="flex flex-col gap-1 max-w-[80%] items-end self-end">
            <div className="bg-[#10182c] text-white p-3 rounded-[16px] rounded-br-[4px] text-[14px]">
              Yes, the viewing for tomorrow is confirmed!
            </div>
            <div className="bg-[#10182c] text-white p-3 rounded-[16px] rounded-br-[4px] text-[14px]">
              See you at 14:00.
            </div>
            <span className="text-[11px] text-gray-400 mr-1">10:42 AM</span>
          </div>
        </div>
        
        <div className="p-4 bg-white border-t border-gray-100 shrink-0">
          <div className="flex items-center gap-2 bg-[#f5f6f8] p-2 rounded-[16px] border border-gray-200 focus-within:border-[#c85212] focus-within:ring-1 focus-within:ring-[#c85212]/20 transition-all">
            <button onClick={() => toast.info("Opening file attachment dialog...")} className="p-2 text-gray-400 hover:text-[#10182c] transition-colors">
              <Paperclip size={20} />
            </button>
            <input type="text" placeholder="Type a reply..." className="flex-1 bg-transparent border-none outline-none text-[14px] px-2" />
            <button onClick={() => toast.success("Message sent!")} className="w-10 h-10 bg-[#c85212] hover:bg-[#a6430f] text-white rounded-xl flex items-center justify-center transition-colors shadow-sm">
              <Send size={18} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderTransactionsTab = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">Transactions & Ads</h1>
          <p className="text-gray-500 text-[14px] mt-1">Manage your listing promotions and billing history.</p>
        </div>
        <button onClick={() => setIsPromoteModalOpen(true)} className="bg-[#10182c] hover:bg-[#1a2642] text-white px-5 py-2.5 rounded-[12px] text-[14px] font-bold transition-colors shadow-sm flex items-center gap-2">
          <TrendingUp size={18} /> Promote Listing
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Active Promotions */}
          <div className="bg-white border border-gray-100 rounded-[24px] shadow-sm p-6">
            <h2 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c] mb-5">Active Promotions</h2>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-[#c85212]/30 bg-[#c85212]/5 items-center">
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                  <ImageWithFallback src={listings[0].image} alt="Property" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#10182c] text-[15px]">{listings[0].title}</h4>
                  <p className="text-[13px] text-gray-500">Premium Spotlight Ad</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="bg-[#10b981]/10 text-[#10b981] text-[11px] font-bold px-2 py-0.5 rounded-full">Active</span>
                    <span className="text-[12px] text-gray-500">Ends in 5 days</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[#10182c] text-[16px]">£45.00</div>
                  <button onClick={() => setIsManageAdModalOpen(true)} className="text-[12px] font-bold text-[#c85212] hover:underline mt-1">Manage Ad</button>
                </div>
              </div>
            </div>
          </div>

          {/* Billing History */}
          <div className="bg-white border border-gray-100 rounded-[24px] shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c]">Billing History</h2>
              <button onClick={() => toast.success("Downloading all invoices...")} className="text-[13px] font-bold text-[#c85212] hover:underline">Download All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f9fafb] text-[11px] uppercase tracking-wider text-gray-400 font-bold">
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Description</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Amount</th>
                    <th className="px-6 py-4 text-center">Invoice</th>
                  </tr>
                </thead>
                <tbody className="text-[14px]">
                  <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-[#10182c]">Mar 10, 2026</td>
                    <td className="px-6 py-4 text-gray-600">Premium Ad - 2 Pankshin Road</td>
                    <td className="px-6 py-4"><span className="bg-[#10b981]/10 text-[#10b981] text-[11px] font-bold px-2 py-0.5 rounded-full">Paid</span></td>
                    <td className="px-6 py-4 text-right font-bold text-[#10182c]">£45.00</td>
                    <td className="px-6 py-4 text-center"><button onClick={() => toast.success("Invoice downloaded")} className="text-gray-400 hover:text-[#c85212] transition-colors inline-block"><Receipt size={16} /></button></td>
                  </tr>
                  <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-[#10182c]">Feb 25, 2026</td>
                    <td className="px-6 py-4 text-gray-600">Standard Ad - 10 Oyo Street</td>
                    <td className="px-6 py-4"><span className="bg-[#10b981]/10 text-[#10b981] text-[11px] font-bold px-2 py-0.5 rounded-full">Paid</span></td>
                    <td className="px-6 py-4 text-right font-bold text-[#10182c]">£25.00</td>
                    <td className="px-6 py-4 text-center"><button onClick={() => toast.success("Invoice downloaded")} className="text-gray-400 hover:text-[#c85212] transition-colors inline-block"><Receipt size={16} /></button></td>
                  </tr>
                  <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-[#10182c]">Jan 12, 2026</td>
                    <td className="px-6 py-4 text-gray-600">Boost Pack - 3 Listings</td>
                    <td className="px-6 py-4"><span className="bg-[#10b981]/10 text-[#10b981] text-[11px] font-bold px-2 py-0.5 rounded-full">Paid</span></td>
                    <td className="px-6 py-4 text-right font-bold text-[#10182c]">£90.00</td>
                    <td className="px-6 py-4 text-center"><button onClick={() => toast.success("Invoice downloaded")} className="text-gray-400 hover:text-[#c85212] transition-colors inline-block"><Receipt size={16} /></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Payment Method */}
          <div className="bg-white border border-gray-100 rounded-[24px] shadow-sm p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c]">Payment Method</h2>
              <button onClick={() => setIsEditPaymentModalOpen(true)} className="text-[13px] font-bold text-[#c85212] hover:underline">Edit</button>
            </div>
            <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl bg-[#f9fafb]">
              <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center shrink-0">
                <div className="font-bold text-[12px] italic text-[#1a1f71]">VISA</div>
              </div>
              <div>
                <div className="font-bold text-[#10182c] text-[14px]">•••• •••• •••• 4242</div>
                <div className="text-[12px] text-gray-500">Expires 12/28</div>
              </div>
            </div>
          </div>

          {/* Notice about transactions */}
          <div className="bg-[#fbff79]/30 border border-[#fbff79] rounded-[24px] shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
              <Shield size={20} className="text-[#c85212]" />
            </div>
            <h3 className="font-bold text-[#10182c] text-[16px] mb-2">Off-Platform Payments</h3>
            <p className="text-[13px] text-gray-600 leading-relaxed">
              Apartey only handles payments for advertising and listing promotions. Property transactions, rent, and deposits should be handled directly with renters securely.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  // Settings page state
  const [platformName, setPlatformName] = useState("Apartey");
  const [adminName, setAdminName] = useState("Festus");
  const [adminEmail, setAdminEmail] = useState("admin@apartey.com");
  const [currency, setCurrency] = useState("EUR - Euro");
  const [timezone, setTimezone] = useState("GMT +0 (West African Time)");
  const [adminEmailAlerts, setAdminEmailAlerts] = useState(false);
  const [userActivityNotifications, setUserActivityNotifications] = useState(true);

  const renderSetTab = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      {/* Header with Save Button */}
      <div className="flex items-center justify-between">
        <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">Settings</h1>
        <button
          onClick={() => toast.success("All settings saved successfully!")}
          className="bg-[#c85212] hover:bg-[#b34810] text-white px-6 py-2.5 rounded-[10px] text-[13px] font-bold transition-colors"
        >
          Save all settings
        </button>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Profile & Platform Configuration */}
        <div className="bg-white border border-gray-100 rounded-[16px] shadow-sm p-6 space-y-6">
          {/* Profile Photo Section */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden mb-3 flex items-center justify-center">
              <User size={40} className="text-gray-400" />
            </div>
            <button
              onClick={() => toast.success("Opening photo uploader...")}
              className="text-[13px] text-[#c85212] font-medium hover:underline mb-1"
            >
              Change photo
            </button>
            <p className="text-[11px] text-gray-400">JPG, PNG, or GIF. Max size 2MB</p>
          </div>

          {/* Platform Configuration */}
          <div className="pt-6 border-t border-gray-100">
            <h2 className="text-[16px] font-bold text-[#10182c] mb-4">Platform Configuration</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-[12px] text-gray-500 mb-2">Platform Name</label>
                <input
                  type="text"
                  value={platformName}
                  onChange={(e) => setPlatformName(e.target.value)}
                  className="w-full border border-gray-200 rounded-[8px] px-4 py-2.5 text-[14px] text-[#10182c] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212] bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-[12px] text-gray-500 mb-2">Admin Name</label>
                <input
                  type="text"
                  value={adminName}
                  onChange={(e) => setAdminName(e.target.value)}
                  className="w-full border border-gray-200 rounded-[8px] px-4 py-2.5 text-[14px] text-[#10182c] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212] bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-[12px] text-gray-500 mb-2">Admin Email</label>
                <input
                  type="email"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  className="w-full border border-gray-200 rounded-[8px] px-4 py-2.5 text-[14px] text-[#10182c] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212] bg-gray-50"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - System Preference & Notification Settings */}
        <div className="space-y-6">
          {/* System Preference Card */}
          <div className="bg-white border border-gray-100 rounded-[16px] shadow-sm p-6">
            <h2 className="text-[16px] font-bold text-[#10182c] mb-4">System Preference</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-[12px] text-gray-500 mb-2">Currency</label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full border border-gray-200 rounded-[8px] px-4 py-2.5 text-[14px] text-[#10182c] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212] bg-white appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    paddingRight: '2.5rem'
                  }}
                >
                  <option>EUR - Euro</option>
                  <option>USD - US Dollar</option>
                  <option>GBP - British Pound</option>
                  <option>NGN - Nigerian Naira</option>
                </select>
              </div>
              <div>
                <label className="block text-[12px] text-gray-500 mb-2">Timezone</label>
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-full border border-gray-200 rounded-[8px] px-4 py-2.5 text-[14px] text-[#10182c] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212] bg-white appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    paddingRight: '2.5rem'
                  }}
                >
                  <option>GMT +0 (West African Time)</option>
                  <option>GMT +1 (Central European Time)</option>
                  <option>GMT -5 (Eastern Time)</option>
                  <option>GMT +8 (Singapore Time)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notification Settings Card */}
          <div className="bg-white border border-gray-100 rounded-[16px] shadow-sm p-6">
            <h2 className="text-[16px] font-bold text-[#10182c] mb-4">Notification Settings</h2>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[14px] font-medium text-[#10182c] mb-1">Admin Email Alerts</p>
                  <p className="text-[12px] text-gray-500">Receive email notifications for admin actions</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer ml-4">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={adminEmailAlerts}
                    onChange={(e) => setAdminEmailAlerts(e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c85212]"></div>
                </label>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[14px] font-medium text-[#10182c] mb-1">User Activity Notifications</p>
                  <p className="text-[12px] text-gray-500">Notify when new users register</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer ml-4">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={userActivityNotifications}
                    onChange={(e) => setUserActivityNotifications(e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c85212]"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderSettingsTab = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl space-y-8">
      <div>
        <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">Notification Preferences</h1>
        <p className="text-gray-500 text-[14px] mt-1">Choose how you want to be notified about activity on your listings.</p>
      </div>

      <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 lg:p-8 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600"><BellRing size={20} /></div>
            <h2 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c]">Enquiry Alerts</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[15px] font-bold text-[#10182c]">Email Notifications</p>
                <p className="text-[13px] text-gray-500">Receive an email for every new enquiry</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10b981]"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[15px] font-bold text-[#10182c]">Phone (SMS) Notifications</p>
                <p className="text-[13px] text-gray-500">Get a text message for every new enquiry</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10b981]"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderNotificationsTab = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 max-w-4xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">Notifications & Activity</h1>
          <p className="text-gray-500 text-[14px] mt-1">Important alerts and recent events across your properties.</p>
        </div>
        
        <div className="flex bg-gray-100 p-1 rounded-xl w-full sm:w-auto">
          <button 
            onClick={() => setNotificationsTab('notifications')}
            className={`flex-1 sm:px-6 py-2 text-[13px] font-bold rounded-lg transition-colors ${notificationsTab === 'notifications' ? 'bg-white text-[#10182c] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Notifications
          </button>
          <button 
            onClick={() => setNotificationsTab('activity')}
            className={`flex-1 sm:px-6 py-2 text-[13px] font-bold rounded-lg transition-colors ${notificationsTab === 'activity' ? 'bg-white text-[#10182c] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Activity
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {notificationsTab === 'notifications' ? (
          <motion.div key="notifs" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-white border border-gray-100 rounded-[24px] shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex justify-end">
              <button className="text-[#c85212] font-bold text-[13px] hover:underline">Mark all as read</button>
            </div>
            
            <div className="p-6 border-b border-gray-50 bg-[#fff9f6]/50 flex gap-4 items-start relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#c85212]"></div>
              <div className="w-10 h-10 rounded-full bg-[#c85212]/10 flex items-center justify-center text-[#c85212] shrink-0">
                <BellRing size={18} />
              </div>
              <div>
                <h4 className="font-bold text-[#10182c] text-[15px]">Ad Promotion Expiring Soon</h4>
                <p className="text-[14px] text-gray-500 mt-1 mb-3">Your Premium Spotlight Ad for "2 Pankshin Road" expires in 24 hours.</p>
                <button onClick={() => { setActiveTab('transactions'); setIsManageAdModalOpen(true); }} className="text-[12px] font-bold bg-[#10182c] hover:bg-[#1a2642] text-white px-4 py-2 rounded-lg transition-colors inline-block">
                  Renew Promotion
                </button>
                <span className="text-[11px] text-gray-400 block mt-2">2 hours ago</span>
              </div>
            </div>

            <div className="p-6 border-b border-gray-50 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 shrink-0">
                <MessageSquare size={18} />
              </div>
              <div>
                <h4 className="font-bold text-[#10182c] text-[15px]">New Message Received</h4>
                <p className="text-[14px] text-gray-500 mt-1">You have a new message from Yakubu M. regarding a viewing.</p>
                <span className="text-[11px] text-gray-400 block mt-2">Yesterday</span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div key="activity" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-white border border-gray-100 rounded-[24px] shadow-sm p-6 lg:p-8">
            <div className="space-y-6">
              {/* Enquiry Event */}
              <div className="flex gap-4 items-start pb-6 border-b border-gray-50">
                <div className="w-10 h-10 rounded-full bg-[#c85212]/10 flex items-center justify-center text-[#c85212] shrink-0 mt-1">
                  <MessageSquare size={18} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-1">
                    <p className="text-[15px] text-[#10182c] font-medium">New enquiry for <span className="font-bold">2 Pankshin Road</span></p>
                    <span className="text-[12px] text-gray-400">2 hours ago</span>
                  </div>
                  <p className="text-[14px] text-gray-500 mb-3">Yakubu M. has requested a viewing for this weekend.</p>
                  <button onClick={() => setActiveTab('messages')} className="text-[12px] font-bold bg-[#f5f6f8] hover:bg-gray-200 text-[#10182c] px-4 py-2 rounded-lg transition-colors inline-block">
                    View Message
                  </button>
                </div>
              </div>

              {/* Review Events */}
              {reviews.map((review, idx) => (
                <div key={review.id} className={`flex gap-4 items-start pb-6 border-b border-gray-50 ${idx === reviews.length - 1 ? "border-b-0 pb-0" : ""}`}>
                  <div className="w-10 h-10 rounded-full bg-[#fbff79]/30 flex items-center justify-center text-[#a6b000] shrink-0 mt-1">
                    <Star size={18} className="fill-[#a6b000]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-1">
                      <p className="text-[15px] text-[#10182c] font-medium">Review from <span className="font-bold">{review.author}</span> · <span className="text-gray-400 font-normal text-[13px]">{review.property}</span></p>
                      <span className="text-[12px] text-gray-400 shrink-0">{review.date}</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl mb-3">
                      <div className="flex gap-0.5 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={13} className={i < review.rating ? "fill-[#a6b000] text-[#a6b000]" : "fill-gray-200 text-gray-200"} />
                        ))}
                      </div>
                      <p className="text-[13px] text-gray-600 italic">"{review.text}"</p>
                    </div>

                    {/* Existing reply */}
                    {review.reply && replyingToId !== review.id && (
                      <div className="ml-2 pl-4 border-l-2 border-[#c85212] mb-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-bold bg-[#c85212]/10 text-[#c85212] px-2 py-0.5 rounded-full">Your Response</span>
                          <span className="text-[11px] text-gray-400">{review.reply.date}</span>
                        </div>
                        <p className="text-[13px] text-gray-600">"{review.reply.text}"</p>
                        <button
                          onClick={() => { setReplyingToId(review.id); setReplyDraft(review.reply!.text); }}
                          className="text-[11px] text-[#c85212] hover:underline mt-1 font-bold"
                        >
                          Edit reply
                        </button>
                      </div>
                    )}

                    {/* Inline reply form */}
                    {replyingToId === review.id ? (
                      <div className="bg-[#f9fafb] border border-gray-200 rounded-xl p-4 mb-3">
                        <p className="text-[12px] font-bold text-[#10182c] mb-2">Your public reply — visible to all renters</p>
                        <textarea
                          value={replyDraft}
                          onChange={e => setReplyDraft(e.target.value)}
                          rows={3}
                          placeholder="Write a professional, helpful reply..."
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 resize-none bg-white"
                          autoFocus
                        />
                        <div className="flex gap-2 mt-2 justify-end">
                          <button
                            onClick={() => { setReplyingToId(null); setReplyDraft(""); }}
                            className="text-[12px] font-bold px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-500 transition-colors"
                          >
                            Cancel
                          </button>
                          <button
                            disabled={!replyDraft.trim()}
                            onClick={() => {
                              if (!replyDraft.trim()) return;
                              setReviews(prev => prev.map(r =>
                                r.id === review.id
                                  ? { ...r, reply: { text: replyDraft.trim(), date: "Just now" } }
                                  : r
                              ));
                              setReplyingToId(null);
                              setReplyDraft("");
                              toast.success("Reply published — renters can now see your response.");
                            }}
                            className="text-[12px] font-bold bg-[#c85212] hover:bg-[#a6430f] disabled:opacity-40 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
                          >
                            <Send size={13} /> Publish Reply
                          </button>
                        </div>
                      </div>
                    ) : null}

                    {/* Action buttons */}
                    {replyingToId !== review.id && (
                      <div className="flex gap-2 flex-wrap">
                        {!review.reply && (
                          <button
                            onClick={() => { setReplyingToId(review.id); setReplyDraft(""); }}
                            className="text-[12px] font-bold bg-[#10182c] hover:bg-[#1a2642] text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
                          >
                            <MessageSquare size={13} /> Reply
                          </button>
                        )}
                        <button onClick={() => toast.info("Report submitted for moderation.")} className="text-[12px] font-bold bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 px-4 py-2 rounded-lg transition-colors flex items-center gap-1"><AlertCircle size={14}/> Report</button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Status Change Event */}
              <div className="flex gap-4 items-start pb-6 border-b border-gray-50">
                <div className="w-10 h-10 rounded-full bg-[#10b981]/10 flex items-center justify-center text-[#10b981] shrink-0 mt-1">
                  <CheckCircle2 size={18} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-1">
                    <p className="text-[15px] text-[#10182c] font-medium">Listing Status Changed</p>
                    <span className="text-[12px] text-gray-400">3 days ago</span>
                  </div>
                  <p className="text-[14px] text-gray-500"><span className="font-bold text-[#10182c]">10 Oyo Street</span> is now <span className="text-[#10b981] font-bold">Active</span>.</p>
                </div>
              </div>

              {/* Transaction Event */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0 mt-1">
                  <Receipt size={18} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-1">
                    <p className="text-[15px] text-[#10182c] font-medium">Transaction Complete</p>
                    <span className="text-[12px] text-gray-400">5 days ago</span>
                  </div>
                  <p className="text-[14px] text-gray-500 mb-3">Payment of £45.00 for <span className="font-bold text-[#10182c]">Premium Spotlight Ad</span> was successfully processed.</p>
                  <button onClick={() => setActiveTab('transactions')} className="text-[12px] font-bold bg-[#f5f6f8] hover:bg-gray-200 text-[#10182c] px-4 py-2 rounded-lg transition-colors inline-block">
                    View Receipt
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}} className="min-h-screen bg-[#f5f6f8] flex font-['Mulish',sans-serif]">
      
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
              <div className="w-10 h-10 rounded-full bg-[#c85212]/20 text-[#c85212] flex items-center justify-center font-bold">
                MD
              </div>
              <div className="text-left">
                <p className="text-[13px] font-bold">Michael D.</p>
                <p className="text-[11px] text-white/60">Homeowner</p>
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
                      <Building size={14} />
                    </div>
                    <div className="flex-1">
                      <div>Homeowner</div>
                      <div className="text-[10px] text-white/60 font-normal">Active Profile</div>
                    </div>
                    <Check size={14} className="text-[#c85212]" />
                  </button>

                  <Link to="/profile" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-white/80 transition-colors text-[13px] font-bold text-left group">
                    <div className="w-8 h-8 rounded-full bg-[#1a2642] text-white/60 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      <User size={14} />
                    </div>
                    <div className="flex-1">
                      <div>Renter</div>
                      <div className="text-[10px] text-white/40 font-normal">Switch to renting</div>
                    </div>
                  </Link>

                  <Link to="/agent" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-white/80 transition-colors text-[13px] font-bold text-left group">
                    <div className="w-8 h-8 rounded-full bg-[#1a2642] text-white/60 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      <Briefcase size={14} />
                    </div>
                    <div className="flex-1">
                      <div>Agent</div>
                      <div className="text-[10px] text-white/40 font-normal">Switch to manager</div>
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
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-[14px] font-bold w-full ${activeTab === item.id ? 'bg-[#c85212] text-white shadow-[0_4px_12px_rgba(200,82,18,0.2)]' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
            >
              {item.icon}
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="bg-[#fbff79] text-[#10182c] text-[10px] px-2 py-0.5 rounded-full font-bold">{item.badge}</span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10 flex flex-col gap-2">
          {bottomNavItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-[14px] font-bold w-full ${activeTab === item.id ? 'bg-[#c85212] text-white shadow-[0_4px_12px_rgba(200,82,18,0.2)]' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
            >
              {item.icon}
              <span className="flex-1 text-left">{item.label}</span>
            </button>
          ))}
          <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-colors text-[14px] font-bold w-full">
            <LogOut size={18} /> <span className="text-left">Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        
        {/* Top Navbar */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8 shrink-0 z-30">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div className="relative hidden md:flex items-center gap-2 bg-[#f5f6f8] px-4 py-2.5 rounded-full border border-gray-200 w-[300px] focus-within:border-[#c85212] focus-within:ring-1 focus-within:ring-[#c85212]/20 transition-all">
              <Search size={18} className="text-gray-400" />
              <input 
                type="text" 
                placeholder="Search properties, enquiries..." 
                className="bg-transparent border-none outline-none text-[14px] w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSearchSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSearchSuggestions(false), 200)}
              />
              
              <AnimatePresence>
                {showSearchSuggestions && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-[calc(100%+8px)] left-0 w-[350px] bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden"
                  >
                    <div className="p-2">
                      <div className="px-3 py-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Recent Searches</div>
                      <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        <Clock size={16} className="text-gray-400" />
                        <span className="text-[14px] text-[#10182c]">John Doe Enquiry</span>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        <Clock size={16} className="text-gray-400" />
                        <span className="text-[14px] text-[#10182c]">Camden Property</span>
                      </div>
                      
                      <div className="px-3 py-2 mt-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Suggested</div>
                      <Link to="/listings" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        <Building size={16} className="text-gray-400" />
                        <span className="text-[14px] text-[#10182c]">View All My Properties</span>
                      </Link>
                      <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        <MessageSquare size={16} className="text-gray-400" />
                        <span className="text-[14px] text-[#10182c]">Unread Messages</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            <button onClick={() => { setEditModalPropertyStatus('vacant'); setIsNewListingModalOpen(true); }} className="bg-[#10182c] hover:bg-[#1a2642] text-white px-4 py-2 rounded-[10px] text-[13px] font-bold transition-colors hidden sm:block">
              Add Property
            </button>
            <div className="h-8 w-[1px] bg-gray-200 hidden sm:block"></div>
            <button onClick={() => setActiveTab('notifications')} className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#c85212] rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 cursor-pointer group hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 group-hover:border-[#c85212] transition-colors bg-[#f0f0f0]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzczMTgyMjAzfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <ChevronDown size={16} className="text-gray-400 hidden sm:block" />
            </div>
          </div>
        </header>

        {/* Dynamic Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 relative">
          <div className="max-w-[1200px] mx-auto pb-12">
            <AnimatePresence mode="wait">
              {activeTab === "dashboard" && <motion.div key="dashboard" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>{renderDashboardTab()}</motion.div>}
              {activeTab === "profile" && <motion.div key="profile" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>{renderPublicProfileTab()}</motion.div>}
              {activeTab === "properties" && <motion.div key="properties" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>{renderPropertiesTab()}</motion.div>}
              {activeTab === "messages" && <motion.div key="messages" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>{renderMessagesTab()}</motion.div>}
              {activeTab === "approvals" && <motion.div key="approvals" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}><HomeownerApprovalsTab /></motion.div>}
              {activeTab === "transactions" && <motion.div key="transactions" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>{renderTransactionsTab()}</motion.div>}
              {activeTab === "promotions" && <motion.div key="promotions" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}><HomeownerPromotionsTab onOpenPromoteModal={() => setIsPromoteModalOpen(true)} /></motion.div>}
              {activeTab === "set" && <motion.div key="set" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>{renderSetTab()}</motion.div>}
              {activeTab === "notifications" && <motion.div key="notifications" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>{renderNotificationsTab()}</motion.div>}
              {activeTab === "settings" && <motion.div key="settings" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>{renderSettingsTab()}</motion.div>}
              {activeTab === "renter-board" && (
                <motion.div key="renter-board" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">Renter Board</h1>
                      <p className="text-gray-500 text-[14px] mt-1">Renters who have posted exactly what they need. If you have a match — message them directly.</p>
                    </div>
                    <a href="/renter-board" target="_blank" rel="noopener" className="text-[#c85212] text-[13px] font-bold hover:underline flex items-center gap-1">View full board →</a>
                  </div>
                  <RenterBoardPreview />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {isDeactivateModalOpen && propertyToDeactivate && (
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10182c]/40 backdrop-blur-sm">
            <motion.div initial={{scale: 0.95}} animate={{scale: 1}} exit={{scale: 0.95}} className="bg-white rounded-[24px] shadow-xl w-full max-w-md overflow-hidden flex flex-col">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c]">Update Property Status</h3>
                <button onClick={() => { setIsDeactivateModalOpen(false); setDeactivateReason(""); }} className="text-gray-400 hover:text-[#10182c] transition-colors"><X size={20} /></button>
              </div>
              <div className="p-6 overflow-y-auto max-h-[70vh]">
                <p className="text-[14px] text-gray-600 mb-6 leading-relaxed">
                  Have you rented this home? Please let us know where this transaction took place so we can better track our platform's performance.
                </p>
                
                <div className="space-y-3 mb-6">
                  <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-colors ${deactivateReason === 'apartey' ? 'border-[#c85212] bg-[#fff9f6]' : 'border-gray-200 hover:bg-gray-50'}`}>
                    <input type="radio" name="deactivateReason" value="apartey" checked={deactivateReason === 'apartey'} onChange={(e) => setDeactivateReason(e.target.value)} className="w-4 h-4 text-[#c85212] focus:ring-[#c85212] border-gray-300" />
                    <span className="ml-3 text-[14px] font-bold text-[#10182c]">Yes, rented on Apartey</span>
                  </label>
                  <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-colors ${deactivateReason === 'elsewhere' ? 'border-[#c85212] bg-[#fff9f6]' : 'border-gray-200 hover:bg-gray-50'}`}>
                    <input type="radio" name="deactivateReason" value="elsewhere" checked={deactivateReason === 'elsewhere'} onChange={(e) => setDeactivateReason(e.target.value)} className="w-4 h-4 text-[#c85212] focus:ring-[#c85212] border-gray-300" />
                    <span className="ml-3 text-[14px] font-bold text-[#10182c]">Yes, rented elsewhere</span>
                  </label>
                  <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-colors ${deactivateReason === 'off_market' ? 'border-[#c85212] bg-[#fff9f6]' : 'border-gray-200 hover:bg-gray-50'}`}>
                    <input type="radio" name="deactivateReason" value="off_market" checked={deactivateReason === 'off_market'} onChange={(e) => setDeactivateReason(e.target.value)} className="w-4 h-4 text-[#c85212] focus:ring-[#c85212] border-gray-300" />
                    <span className="ml-3 text-[14px] font-bold text-[#10182c]">No, temporarily off market</span>
                  </label>
                </div>

                <AnimatePresence>
                  {deactivateReason === 'apartey' && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="space-y-4 pt-4 border-t border-gray-100 overflow-hidden">
                      <h4 className="font-bold text-[#10182c] text-[14px] mb-2">Tenant Details (Optional)</h4>
                      <p className="text-[12px] text-gray-500 mb-4 leading-relaxed">Save this information to manage leases and receive automated reminders when it's time to renew.</p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">First Name</label>
                          <input type="text" placeholder="e.g. John" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:border-[#c85212]" />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Last Name</label>
                          <input type="text" placeholder="e.g. Doe" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:border-[#c85212]" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Email Address</label>
                        <input type="email" placeholder="john@example.com" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:border-[#c85212]" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Lease Start</label>
                          <input type="date" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:border-[#c85212]" />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Lease End</label>
                          <input type="date" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:border-[#c85212]" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Rent Amount</label>
                        <input type="text" placeholder="£" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:border-[#c85212]" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="p-4 bg-[#f9fafb] border-t border-gray-100 flex justify-end gap-3">
                <button onClick={() => { setIsDeactivateModalOpen(false); setDeactivateReason(""); }} className="px-5 py-2.5 rounded-xl text-[13px] font-bold text-gray-600 hover:bg-gray-100 transition-colors">Cancel</button>
                <button 
                  onClick={() => { 
                    setListings(listings.map(p => p.id === propertyToDeactivate.id ? { 
                      ...p, 
                      status: 'inactive', 
                      propertyStatus: (deactivateReason === 'apartey' || deactivateReason === 'elsewhere') ? 'occupied' : 'unavailable' 
                    } : p));
                    setIsDeactivateModalOpen(false); 
                    setDeactivateReason(""); 
                    toast.success("Listing successfully deactivated."); 
                  }} 
                  className={`bg-[#10182c] text-white px-6 py-2.5 rounded-xl text-[13px] font-bold transition-colors ${!deactivateReason ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#1a2642]'}`}
                  disabled={!deactivateReason}
                >
                  Confirm & Update
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {isManageAdModalOpen && (
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10182c]/40 backdrop-blur-sm">
            <motion.div initial={{scale: 0.95}} animate={{scale: 1}} exit={{scale: 0.95}} className="bg-white rounded-[24px] shadow-xl w-full max-w-md overflow-hidden flex flex-col">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c]">Manage Promotion</h3>
                <button onClick={() => setIsManageAdModalOpen(false)} className="text-gray-400 hover:text-[#10182c] transition-colors"><X size={20} /></button>
              </div>
              <div className="p-6 flex-1 overflow-y-auto">
                <div className="flex gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                    <ImageWithFallback src={listings[0].image} alt="Property" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#10182c] text-[15px]">{listings[0].title}</h4>
                    <p className="text-[13px] text-gray-500">Premium Spotlight Ad</p>
                    <div className="font-bold text-[#c85212] mt-1">£45.00 / month</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-[#f9fafb] border border-gray-100 rounded-xl">
                    <div>
                      <div className="font-bold text-[#10182c] text-[14px]">Auto-renew Promotion</div>
                      <div className="text-[12px] text-gray-500 mt-0.5">Renews automatically every month</div>
                    </div>
                    <button 
                      onClick={() => setAutoRenew(!autoRenew)} 
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${autoRenew ? 'bg-[#10b981]' : 'bg-gray-300'}`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${autoRenew ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </div>

                  <div className="p-4 bg-[#fff9f6] border border-[#c85212]/20 rounded-xl">
                    <div className="flex items-start gap-3">
                      <TrendingUp size={18} className="text-[#c85212] mt-0.5 shrink-0" />
                      <div>
                        <div className="font-bold text-[#10182c] text-[14px] mb-1">Boost performance by 3x</div>
                        <p className="text-[12px] text-gray-600 mb-3">Upgrade to Premium Plus to feature your listing on our homepage and newsletter.</p>
                        <button onClick={() => { setIsManageAdModalOpen(false); setIsPromoteModalOpen(true); toast.info("Proceeding to upgrade..."); }} className="bg-[#10182c] hover:bg-[#1a2642] text-white px-4 py-2 rounded-lg text-[12px] font-bold transition-colors w-full">Upgrade for +£25/mo</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-[#f9fafb] border-t border-gray-100 flex justify-between items-center">
                <button onClick={() => { setIsManageAdModalOpen(false); toast.success("Promotion cancelled."); }} className="text-[13px] font-bold text-red-500 hover:text-red-600 px-4 py-2">Cancel Promotion</button>
                <button onClick={() => setIsManageAdModalOpen(false)} className="bg-[#10182c] text-white px-5 py-2.5 rounded-xl text-[13px] font-bold transition-colors">Done</button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {isEditPaymentModalOpen && (
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10182c]/40 backdrop-blur-sm">
            <motion.div initial={{scale: 0.95}} animate={{scale: 1}} exit={{scale: 0.95}} className="bg-white rounded-[24px] shadow-xl w-full max-w-md overflow-hidden flex flex-col">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c]">Update Payment Method</h3>
                <button onClick={() => setIsEditPaymentModalOpen(false)} className="text-gray-400 hover:text-[#10182c] transition-colors"><X size={20} /></button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Card Number</label>
                  <div className="relative">
                    <input type="text" defaultValue="**** **** **** 4242" className="w-full bg-[#f9fafb] border border-gray-200 rounded-xl px-4 py-3 text-[14px] outline-none focus:border-[#c85212] font-medium" />
                    <CreditCard size={18} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Expiry Date</label>
                    <input type="text" defaultValue="12/28" className="w-full bg-[#f9fafb] border border-gray-200 rounded-xl px-4 py-3 text-[14px] outline-none focus:border-[#c85212] font-medium" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">CVC</label>
                    <input type="text" defaultValue="***" className="w-full bg-[#f9fafb] border border-gray-200 rounded-xl px-4 py-3 text-[14px] outline-none focus:border-[#c85212] font-medium" />
                  </div>
                </div>
                <div className="pt-2">
                  <div className="flex items-start gap-2 text-gray-500 text-[12px] bg-[#f9fafb] p-3 rounded-lg border border-gray-100">
                    <Shield size={14} className="mt-0.5 shrink-0 text-[#10b981]" />
                    <span>Your payment information is encrypted and securely processed. We do not store your full card details.</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-[#f9fafb] border-t border-gray-100 flex justify-end gap-3">
                <button onClick={() => setIsEditPaymentModalOpen(false)} className="px-5 py-2.5 rounded-xl text-[13px] font-bold text-gray-600 hover:bg-gray-100 transition-colors">Cancel</button>
                <button onClick={() => { toast.success("Payment method updated securely."); setIsEditPaymentModalOpen(false); }} className="bg-[#10182c] hover:bg-[#1a2642] text-white px-5 py-2.5 rounded-xl text-[13px] font-bold transition-colors flex items-center gap-2">
                  <Check size={16} /> Save Changes
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {isPromoteModalOpen && (
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10182c]/40 backdrop-blur-sm">
            <motion.div initial={{scale: 0.95}} animate={{scale: 1}} exit={{scale: 0.95}} className="bg-white rounded-[24px] shadow-xl w-full max-w-2xl overflow-hidden flex flex-col">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div>
                  <h3 className="font-['Montserrat',sans-serif] text-[20px] font-bold text-[#10182c]">Promote a Listing</h3>
                  <p className="text-[13px] text-gray-500 mt-1">Boost your visibility and reach more potential tenants</p>
                </div>
                <button onClick={() => setIsPromoteModalOpen(false)} className="text-gray-400 hover:text-[#10182c] transition-colors"><X size={24} /></button>
              </div>
              <div className="p-6 flex-1 overflow-y-auto max-h-[70vh]">
                <h4 className="font-bold text-[#10182c] text-[15px] mb-4">1. Select Listing</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {listings.slice(0, 2).map(listing => (
                    <div key={`promote-${listing.id}`} className="border-2 border-transparent hover:border-[#c85212] rounded-xl overflow-hidden cursor-pointer bg-[#f9fafb] transition-all group relative">
                      <div className="h-32 w-full">
                        <ImageWithFallback src={listing.image} alt={listing.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-3">
                        <h5 className="font-bold text-[#10182c] text-[14px] truncate">{listing.title}</h5>
                        <p className="text-[12px] text-gray-500">{listing.location}</p>
                      </div>
                      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/90 shadow-sm border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Check size={14} className="text-[#c85212]" />
                      </div>
                    </div>
                  ))}
                </div>

                <h4 className="font-bold text-[#10182c] text-[15px] mb-4">2. Choose Promotion Package</h4>
                <div className="space-y-4">
                  <div className="border-2 border-[#c85212] bg-[#fff9f6] rounded-xl p-4 cursor-pointer relative">
                    <div className="absolute top-0 right-0 bg-[#c85212] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wide">Most Popular</div>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <Star size={18} className="text-[#c85212] fill-[#c85212]" />
                          <h5 className="font-bold text-[#10182c] text-[16px]">Premium Spotlight</h5>
                        </div>
                        <ul className="mt-3 space-y-2 text-[13px] text-gray-600">
                          <li className="flex items-center gap-2"><Check size={14} className="text-[#10b981]" /> Top of search results</li>
                          <li className="flex items-center gap-2"><Check size={14} className="text-[#10b981]" /> Highlighted border</li>
                          <li className="flex items-center gap-2"><Check size={14} className="text-[#10b981]" /> Homepage feature (3 days)</li>
                        </ul>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-[#10182c] text-[20px]">£45</div>
                        <div className="text-[12px] text-gray-500">per month</div>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 hover:border-[#c85212]/50 bg-white rounded-xl p-4 cursor-pointer transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <TrendingUp size={18} className="text-gray-400" />
                          <h5 className="font-bold text-[#10182c] text-[16px]">Standard Boost</h5>
                        </div>
                        <ul className="mt-3 space-y-2 text-[13px] text-gray-600">
                          <li className="flex items-center gap-2"><Check size={14} className="text-[#10b981]" /> Higher in search results</li>
                          <li className="flex items-center gap-2"><Check size={14} className="text-[#10b981]" /> "Featured" tag</li>
                        </ul>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-[#10182c] text-[20px]">£25</div>
                        <div className="text-[12px] text-gray-500">per month</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-[#f9fafb] border-t border-gray-100 flex justify-end gap-3">
                <button onClick={() => setIsPromoteModalOpen(false)} className="px-5 py-2.5 rounded-xl text-[13px] font-bold text-gray-600 hover:bg-gray-100 transition-colors">Cancel</button>
                <button onClick={() => { toast.success("Promotion successfully created! Payment processed."); setIsPromoteModalOpen(false); }} className="bg-[#10182c] hover:bg-[#1a2642] text-white px-5 py-2.5 rounded-xl text-[14px] font-bold transition-colors flex items-center gap-2">
                  <CreditCard size={18} /> Pay £45.00
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {isEditListingModalOpen && selectedListing && (
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10182c]/40 backdrop-blur-sm">
            <motion.div initial={{scale: 0.95}} animate={{scale: 1}} exit={{scale: 0.95}} className="bg-white rounded-[24px] shadow-xl w-full max-w-md overflow-hidden flex flex-col">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c]">Manage Listing</h3>
                <button onClick={() => setIsEditListingModalOpen(false)} className="text-gray-400 hover:text-[#10182c] transition-colors"><X size={20} /></button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Listing Title</label>
                  <input type="text" defaultValue={selectedListing.title} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]" />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Location</label>
                  <input type="text" defaultValue={selectedListing.location} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Price</label>
                    <input type="text" defaultValue={selectedListing.price} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Ad Status</label>
                    <select defaultValue={selectedListing.status} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212] bg-white">
                      <option value="active">Active</option>
                      <option value="inactive">Paused / Inactive</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Property Status</label>
                  <select 
                    value={editModalPropertyStatus} 
                    onChange={(e) => setEditModalPropertyStatus(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212] bg-white"
                  >
                    <option value="vacant">Vacant</option>
                    <option value="occupied">Occupied</option>
                    <option value="unavailable">Unavailable</option>
                  </select>
                </div>
                
                {editModalPropertyStatus === "occupied" && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="space-y-4 border-t border-gray-100 pt-4 mt-2">
                    <h4 className="font-bold text-[#10182c] text-[14px]">Tenant Details</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Tenant Email</label>
                        <input type="email" defaultValue={selectedListing.tenantEmail || ''} placeholder="tenant@example.com" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]" />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Rent Amount</label>
                        <input type="text" defaultValue={selectedListing.rentAmount || selectedListing.price || ''} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]" />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Lease Start Date</label>
                        <input type="date" defaultValue={selectedListing.leaseStart || ''} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212] bg-white" />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Lease Duration</label>
                        <select defaultValue={selectedListing.leaseDuration || '12 months'} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212] bg-white">
                          <option value="6 months">6 months</option>
                          <option value="12 months">12 months</option>
                          <option value="24 months">24 months</option>
                          <option value="custom">Custom</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Tenant Notes / Reviews</label>
                        <textarea defaultValue={selectedListing.tenantReviews || ''} placeholder="Any notes or reviews about this tenant..." rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212] resize-none"></textarea>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              <div className="p-4 bg-[#f9fafb] border-t border-gray-100 flex justify-end gap-3">
                <button onClick={() => setIsEditListingModalOpen(false)} className="px-5 py-2.5 rounded-xl text-[13px] font-bold text-gray-600 hover:bg-gray-100 transition-colors">Cancel</button>
                <button onClick={() => { toast.success("Listing updated successfully."); setIsEditListingModalOpen(false); }} className="bg-[#10182c] hover:bg-[#1a2642] text-white px-5 py-2.5 rounded-xl text-[13px] font-bold transition-colors">
                  Save Changes
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {isBookingsModalOpen && selectedListing && (
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10182c]/40 backdrop-blur-sm">
            <motion.div initial={{scale: 0.95}} animate={{scale: 1}} exit={{scale: 0.95}} className="bg-white rounded-[24px] shadow-xl w-full max-w-lg overflow-hidden flex flex-col">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div>
                  <h3 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c]">Upcoming Bookings</h3>
                  <p className="text-[13px] text-gray-500">{selectedListing.title}</p>
                </div>
                <button onClick={() => setIsBookingsModalOpen(false)} className="text-gray-400 hover:text-[#10182c] transition-colors"><X size={20} /></button>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-[#c85212]/10 text-[#c85212] flex flex-col items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold uppercase">OCT</span>
                      <span className="text-[16px] font-bold font-['Montserrat',sans-serif] leading-none">24</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#10182c] text-[15px]">Viewing with Yakubu M.</h4>
                      <div className="flex items-center gap-3 mt-1 text-[13px] text-gray-500">
                        <span className="flex items-center gap-1"><Clock size={14} /> 10:00 AM</span>
                        <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-[#10b981]" /> Confirmed</span>
                      </div>
                    </div>
                    <button onClick={() => toast.info("Opening calendar to reschedule...")} className="text-[13px] font-bold text-[#10182c] bg-white border border-gray-200 hover:bg-gray-50 px-3 py-1.5 rounded-lg transition-colors">Reschedule</button>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-[#c85212]/10 text-[#c85212] flex flex-col items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold uppercase">OCT</span>
                      <span className="text-[16px] font-bold font-['Montserrat',sans-serif] leading-none">26</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#10182c] text-[15px]">Viewing with Sarah T.</h4>
                      <div className="flex items-center gap-3 mt-1 text-[13px] text-gray-500">
                        <span className="flex items-center gap-1"><Clock size={14} /> 2:30 PM</span>
                        <span className="flex items-center gap-1 text-yellow-600"><AlertCircle size={14} /> Pending</span>
                      </div>
                    </div>
                    <button onClick={() => toast.success("Booking confirmed for Sarah T.")} className="text-[13px] font-bold text-white bg-[#10182c] hover:bg-[#1a2642] px-3 py-1.5 rounded-lg transition-colors">Confirm</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {isNewListingModalOpen && (
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10182c]/40 backdrop-blur-sm">
            <motion.div initial={{scale: 0.95}} animate={{scale: 1}} exit={{scale: 0.95}} className="bg-white rounded-[24px] shadow-xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
              <div className="flex items-center justify-between p-6 border-b border-gray-100 shrink-0">
                <h3 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c]">Create New Listing</h3>
                <button onClick={() => setIsNewListingModalOpen(false)} className="text-gray-400 hover:text-[#10182c] transition-colors"><X size={20} /></button>
              </div>
              <div className="p-6 space-y-5 overflow-y-auto">
                <div onClick={() => document.getElementById('photo-upload')?.click()} className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-[#c85212] transition-colors cursor-pointer bg-gray-50 group">
                  <input type="file" id="photo-upload" className="hidden" multiple accept="image/*" onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      toast.success(`${e.target.files.length} photo(s) selected for upload.`);
                    }
                  }} />
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 group-hover:text-[#c85212] mb-3 transition-colors">
                    <Upload size={20} />
                  </div>
                  <p className="text-[14px] font-bold text-[#10182c] mb-1">Click to upload photos</p>
                  <p className="text-[12px] text-gray-500">PNG, JPG up to 10MB</p>
                </div>
                
                <div>
                  <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Property Title</label>
                  <input type="text" placeholder="e.g. Modern 3-Bedroom Apartment" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]" />
                </div>
                
                <div>
                  <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Location</label>
                  <div className="relative">
                    <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="e.g. Asokoro, Abuja" className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Price (per year)</label>
                    <input type="text" placeholder="£" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Property Type</label>
                    <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212] bg-white">
                      <option>Apartment</option>
                      <option>House</option>
                      <option>Studio</option>
                      <option>Commercial</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Property Status</label>
                  <select 
                    value={editModalPropertyStatus} 
                    onChange={(e) => setEditModalPropertyStatus(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212] bg-white"
                  >
                    <option value="vacant">Vacant</option>
                    <option value="occupied">Occupied</option>
                    <option value="unavailable">Unavailable</option>
                  </select>
                </div>
                
                {editModalPropertyStatus === "occupied" && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="space-y-4 border-t border-gray-100 pt-4 mt-2">
                    <h4 className="font-bold text-[#10182c] text-[14px]">Tenant Details</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Tenant Email</label>
                        <input type="email" placeholder="tenant@example.com" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]" />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Rent Amount</label>
                        <input type="text" placeholder="£" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]" />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Lease Start Date</label>
                        <input type="date" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212] bg-white" />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Lease Duration</label>
                        <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212] bg-white">
                          <option value="6 months">6 months</option>
                          <option value="12 months">12 months</option>
                          <option value="24 months">24 months</option>
                          <option value="custom">Custom</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Tenant Notes / Reviews</label>
                        <textarea placeholder="Any notes or reviews about this tenant..." rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212] resize-none"></textarea>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              <div className="p-4 bg-[#f9fafb] border-t border-gray-100 flex justify-end gap-3 shrink-0">
                <button onClick={() => setIsNewListingModalOpen(false)} className="px-5 py-2.5 rounded-xl text-[13px] font-bold text-gray-600 hover:bg-gray-100 transition-colors">Cancel</button>
                <button onClick={() => { toast.success("New listing created successfully!"); setIsNewListingModalOpen(false); }} className="bg-[#10182c] hover:bg-[#1a2642] text-white px-5 py-2.5 rounded-xl text-[13px] font-bold transition-colors">
                  Publish Listing
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Approval Modal */}
      

      <Toaster position="bottom-right" />

      {/* Get Reviews Modal */}
      <AnimatePresence>
        {getReviewsProperty && (
          <GetReviewsModal
            property={getReviewsProperty}
            onClose={() => setGetReviewsProperty(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
