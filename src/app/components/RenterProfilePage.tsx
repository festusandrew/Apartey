import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  MapPin, Globe, Phone, Mail, Briefcase, Euro, Users, Dog, FileText,
  Home, Map, Maximize, Car, Sofa, Clock, Edit2, Key, Share2, Copy, Heart,
  Bath, Bed, Star, Check, Camera, LayoutDashboard, User, FolderHeart, Building,
  MessageSquare, Settings, Menu, Bell, Search, LogOut, ChevronDown, Send, Paperclip, MoreVertical, Shield, BellRing, Lock, Eye, RefreshCw, Sparkles, Activity, Plus, X, Calendar, Trash2, Filter, ArrowUpDown, ThumbsUp, Flag, Scale, ClipboardList
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { PropertyComparisonTool, CompareBar, type CompareProperty } from "./PropertyComparisonTool";

export function RenterProfilePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [isNewProfile, setIsNewProfile] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isActivelyLooking, setIsActivelyLooking] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [notificationsTab, setNotificationsTab] = useState<'notifications' | 'activity'>('notifications');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddRentHistory, setShowAddRentHistory] = useState(false);
  const [editingReviewId, setEditingReviewId] = useState<number | null>(null);
  const [reviewSortBy, setReviewSortBy] = useState<'date' | 'rating'>('date');
  const [reviewFilterStatus, setReviewFilterStatus] = useState<'all' | 'published' | 'pending'>('all');
  const [showLandlordReferenceModal, setShowLandlordReferenceModal] = useState(false);
  const [selectedRentEntry, setSelectedRentEntry] = useState<number | null>(null);
  const [viewingReference, setViewingReference] = useState<number | null>(null);
  const [showSendReferenceModal, setShowSendReferenceModal] = useState(false);
  const [showReferenceSuccessModal, setShowReferenceSuccessModal] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState("");
  const [compareList, setCompareList] = useState<CompareProperty[]>([]);

  // My Requirement state
  const [requirement, setRequirement] = useState({
    location: "", budgetMin: "", budgetMax: "", bedrooms: "2",
    propertyType: "Apartment", moveInDate: "", leaseTerm: "12 months",
    furnished: false, petsAllowed: false, notes: "",
  });
  const [requirementPublished, setRequirementPublished] = useState(false);
  const [requirementEditing, setRequirementEditing] = useState(true);
  const [showCompareTool, setShowCompareTool] = useState(false);

  const toggleCompare = (prop: CompareProperty) => {
    setCompareList(prev => {
      const already = prev.find(p => p.id === prop.id);
      if (already) return prev.filter(p => p.id !== prop.id);
      if (prev.length >= 4) return prev;
      return [...prev, prop];
    });
  };
  const isInCompare = (id: number) => compareList.some(p => p.id === id);
  const [landlordReferenceForm, setLandlordReferenceForm] = useState({
    paymentHistory: "",
    propertyCondition: "",
    leaseCompliance: "",
    wouldRentAgain: "",
    overallComments: "",
    landlordSignature: ""
  });
  const [rentHistory, setRentHistory] = useState([
    {
      id: 1,
      address: "15 Oak Street, Apartment 3B",
      city: "Dublin",
      country: "Ireland",
      startDate: "Jan 2022",
      endDate: "Dec 2023",
      landlordName: "Sarah O'Connor",
      landlordEmail: "sarah.oconnor@email.com",
      monthlyRent: "€850",
      recommendationRequested: false,
      recommendationReceived: false,
      reference: null as {
        paymentHistory: string;
        propertyCondition: string;
        leaseCompliance: string;
        wouldRentAgain: string;
        overallComments: string;
        landlordSignature: string;
        dateSubmitted: string;
      } | null
    },
    {
      id: 2,
      address: "28 Temple Bar Road",
      city: "Cork",
      country: "Ireland",
      startDate: "Mar 2020",
      endDate: "Dec 2021",
      landlordName: "Michael Murphy",
      landlordEmail: "m.murphy@email.com",
      monthlyRent: "€750",
      recommendationRequested: true,
      recommendationReceived: true,
      reference: {
        paymentHistory: "always-on-time",
        propertyCondition: "excellent",
        leaseCompliance: "yes",
        wouldRentAgain: "yes",
        overallComments: "Excellent tenant. Always paid rent on time, kept the property in pristine condition, and was very respectful of neighbors. I would highly recommend them to any future landlord.",
        landlordSignature: "Michael Murphy",
        dateSubmitted: "Jan 15, 2024"
      }
    }
  ]);
  const [newRentEntry, setNewRentEntry] = useState({
    address: "",
    city: "",
    country: "",
    startDate: "",
    endDate: "",
    landlordName: "",
    landlordEmail: "",
    monthlyRent: ""
  });
  const [reviews, setReviews] = useState([
    {
      id: 1,
      propertyId: 1,
      propertyTitle: "2 Pankshin Road, Pankshin",
      propertyLocation: "Plateau, Nigeria",
      propertyImage: "https://images.unsplash.com/photo-1770217102047-06e8490267ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFsJTIwYXBhcnRtZW50JTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NzMxNjEyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
      reviewText: "Absolutely loved this property! The location was perfect, close to all amenities. The homeowner was very responsive and maintained the property well. Would highly recommend to anyone looking in this area.",
      datePosted: "Apr 15, 2026",
      status: "published" as const,
      helpfulCount: 12,
      propertyBeds: 4,
      propertyBaths: 4,
      propertyPrice: "£450,000"
    },
    {
      id: 2,
      propertyId: 2,
      propertyTitle: "10 Oyo Street, Ibadan",
      propertyLocation: "Oyo, Nigeria",
      propertyImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 3,
      reviewText: "Decent property but had some maintenance issues. Hot water was inconsistent and the AC in the bedroom needed repair. Location is good though, and rent was reasonable for the area.",
      datePosted: "Mar 8, 2026",
      status: "published" as const,
      helpfulCount: 5,
      propertyBeds: 5,
      propertyBaths: 3,
      propertyPrice: "£350,000"
    },
    {
      id: 3,
      propertyId: 3,
      propertyTitle: "15 Enugu Avenue, Enugu",
      propertyLocation: "Enugu, Nigeria",
      propertyImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 5,
      reviewText: "Perfect for young professionals! Modern, clean, and well-maintained. The building has great security and the neighborhood is quiet and safe. Homeowner was professional and easy to communicate with.",
      datePosted: "Feb 20, 2026",
      status: "published" as const,
      helpfulCount: 18,
      propertyBeds: 3,
      propertyBaths: 2,
      propertyPrice: "£200,000"
    },
    {
      id: 4,
      propertyId: 5,
      propertyTitle: "Asokoro Luxury Apart...",
      propertyLocation: "Abuja, Nigeria",
      propertyImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4,
      reviewText: "Beautiful property with great amenities. The gym and pool were excellent. Only downside was parking could get crowded on weekends. Overall a great experience.",
      datePosted: "Jan 10, 2026",
      status: "pending" as const,
      helpfulCount: 0,
      propertyBeds: 2,
      propertyBaths: 2,
      propertyPrice: "£550,000"
    }
  ]);

  const profilePercentage = isNewProfile ? 15 : 80;
  
  const properties: CompareProperty[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1770217102047-06e8490267ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFsJTIwYXBhcnRtZW50JTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NzMxNjEyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      baths: 4, beds: 4, rating: "4.0", reviews: 28,
      title: "2 Pankshin Road, Pankshin", price: "£450,000", location: "Plateau, Nigeria.",
      sqm: 220, parking: true, furnished: true, petsAllowed: false,
      leaseTerm: "12 months", availableFrom: "Now", depositMonths: 2,
      responseRate: "98%", amenities: ["Pool", "Gym", "Security", "Generator"]
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      baths: 3, beds: 5, rating: "3.5", reviews: 15,
      title: "10 Oyo Street, Ibadan", price: "£350,000", location: "Oyo, Nigeria.",
      sqm: 180, parking: true, furnished: false, petsAllowed: true,
      leaseTerm: "6 months min", availableFrom: "Jul 1, 2026", depositMonths: 3,
      responseRate: "85%", amenities: ["Security", "BQ", "Car park"]
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      baths: 2, beds: 3, rating: "4.8", reviews: 10,
      title: "15 Enugu Avenue, Enugu", price: "£200,000", location: "Enugu, Nigeria.",
      sqm: 140, parking: false, furnished: true, petsAllowed: true,
      leaseTerm: "12 months", availableFrom: "Now", depositMonths: 2,
      responseRate: "92%", amenities: ["CCTV", "Generator", "Water"]
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      baths: 1, beds: 2, rating: "4.2", reviews: 42,
      title: "Victoria Island Flat", price: "£150,000", location: "Lagos, Nigeria.",
      sqm: 90, parking: false, furnished: false, petsAllowed: false,
      leaseTerm: "12 months", availableFrom: "Now", depositMonths: 1,
      responseRate: "76%", amenities: ["Security", "Water"]
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      baths: 2, beds: 2, rating: "4.5", reviews: 19,
      title: "Asokoro Luxury Apart...", price: "£550,000", location: "Abuja, Nigeria.",
      sqm: 110, parking: true, furnished: true, petsAllowed: false,
      leaseTerm: "12 months", availableFrom: "Aug 1, 2026", depositMonths: 2,
      responseRate: "99%", amenities: ["Pool", "Gym", "Concierge", "Security", "Generator"]
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1502672260266-1c1de2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      baths: 3, beds: 4, rating: "4.1", reviews: 8,
      title: "GRA Duplex", price: "£400,000", location: "Port Harcourt, Nigeria.",
      sqm: 200, parking: true, furnished: false, petsAllowed: true,
      leaseTerm: "24 months", availableFrom: "Now", depositMonths: 3,
      responseRate: "88%", amenities: ["Security", "BQ", "Generator", "Water"]
    }
  ];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setIsSidebarOpen(false);
  };

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { id: "profile", label: "My Profile", icon: <User size={18} /> },
    { id: "matches", label: "Matches", icon: <Sparkles size={18} />, badge: "2" },
    { id: "favorites", label: "Favorited Properties", icon: <FolderHeart size={18} /> },
    { id: "compare", label: "Compare Properties", icon: <Scale size={18} />, badge: compareList.length > 0 ? String(compareList.length) : undefined },
    { id: "requirement", label: "My Requirement", icon: <ClipboardList size={18} />, badge: requirementPublished ? "Live" : undefined },
    { id: "applications", label: "Applications", icon: <FileText size={18} /> },
    { id: "reviews", label: "My Reviews", icon: <Star size={18} /> },
    { id: "messages", label: "Messages", icon: <MessageSquare size={18} />, badge: "3" },
    { id: "notifications", label: "Notifications", icon: <Bell size={18} />, badge: "5" },
  ];

  const bottomNavItems = [
    { id: "settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  // TAB CONTENT RENDERERS
  const renderDashboardTab = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">Dashboard</h1>
        <p className="text-gray-500 text-[14px] mt-1">Welcome back, Yakubu. Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="bg-white rounded-[20px] p-5 border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="relative w-[50px] h-[50px] flex items-center justify-center shrink-0">
            <svg width="50" height="50" className="transform -rotate-90">
              <circle cx="25" cy="25" r="20" stroke="#f5f6f8" strokeWidth="4" fill="none" />
              <circle cx="25" cy="25" r="20" stroke="#10b981" strokeWidth="4" fill="none" strokeDasharray="125.66" strokeDashoffset={125.66 * ((100 - profilePercentage) / 100)} strokeLinecap="round" className="transition-all duration-1000 ease-out" />
            </svg>
            <span className="absolute text-[#10182c] text-[12px] font-bold font-['Montserrat',sans-serif]">{profilePercentage}%</span>
          </div>
          <div>
            <h3 className="text-[#10182c] text-[15px] font-bold leading-tight mb-1">Profile Status</h3>
            <p className="text-gray-500 text-[12px] leading-tight cursor-pointer hover:text-[#c85212]" onClick={() => setActiveTab('profile')}>Complete your profile →</p>
          </div>
        </div>

        <div className="bg-white rounded-[20px] p-5 border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-[50px] h-[50px] rounded-full bg-[#c85212]/10 flex items-center justify-center text-[#c85212] shrink-0">
            <Key size={22} />
          </div>
          <div>
            <h3 className="text-[#10182c] text-[20px] font-bold leading-tight font-['Montserrat',sans-serif] mb-0.5">450</h3>
            <p className="text-gray-500 text-[12px] leading-tight uppercase font-bold tracking-wider">Apartey Keys</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#10182c] to-[#1a2642] rounded-[20px] p-5 shadow-sm flex items-center gap-4 relative overflow-hidden sm:col-span-2 lg:col-span-1">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#fbff79]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="w-[50px] h-[50px] rounded-full bg-white/10 flex items-center justify-center text-[#fbff79] shrink-0 relative z-10">
            <Share2 size={22} />
          </div>
          <div className="relative z-10 flex-1">
            <h3 className="text-white text-[15px] font-bold leading-tight mb-1">Refer & Earn</h3>
            <p className="text-white/70 text-[12px] leading-tight mb-2">Earn cinema tickets, tees & more</p>
            <button onClick={() => navigate("/earn")} className="text-[#10182c] bg-[#fbff79] text-[11px] font-bold px-3 py-1.5 rounded-lg hover:bg-[#e6ea6e] transition-colors inline-block">
              Get Link
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-[24px] shadow-sm p-6">
          <h3 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c] mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#10b981]/10 flex items-center justify-center text-[#10b981] shrink-0">
                <Check size={18} />
              </div>
              <div>
                <p className="text-[14px] text-[#10182c] font-medium">Viewing confirmed for <span className="font-bold">2 Pankshin Road</span></p>
                <p className="text-[12px] text-gray-500 mt-1">Tomorrow at 14:00 • with Homeowner Sarah</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <FileText size={18} />
              </div>
              <div>
                <p className="text-[14px] text-[#10182c] font-medium">Application submitted for <span className="font-bold">10 Oyo Street</span></p>
                <p className="text-[12px] text-gray-500 mt-1">2 days ago • Awaiting review</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#c85212]/10 flex items-center justify-center text-[#c85212] shrink-0">
                <MessageSquare size={18} />
              </div>
              <div>
                <p className="text-[14px] text-[#10182c] font-medium">New message from <span className="font-bold">Apartey Support</span></p>
                <p className="text-[12px] text-gray-500 mt-1">3 days ago • Profile verification complete</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-[24px] shadow-sm p-6 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c]">New Matches</h3>
            <button onClick={() => setActiveTab('matches')} className="text-[12px] font-bold text-[#c85212] hover:underline">View All</button>
          </div>
          <div className="flex-1 space-y-4">
            {properties.slice(0, 2).map(prop => (
              <Link to={`/properties/${prop.id}`} key={prop.id} className="flex gap-3 items-center group cursor-pointer">
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                  <ImageWithFallback src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[13px] font-bold text-[#10182c] truncate">{prop.title}</h4>
                  <p className="text-[13px] font-['Montserrat',sans-serif] font-bold text-[#c85212] mt-0.5">{prop.price}</p>
                  <p className="text-[11px] text-gray-500 truncate">{prop.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderProfileTab = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">My Profile</h1>
          <p className="text-gray-500 text-[14px] mt-1">Manage your personal information and preferences.</p>
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
                src={isNewProfile ? "https://images.unsplash.com/photo-1544168190-79c15427015f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFuayUyMHByb2ZpbGV8ZW58MXx8fHwxNzczMTY1NTAxfDA&ixlib=rb-4.1.0&q=80&w=1080" : "https://images.unsplash.com/photo-1579420593648-0deba81fd762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBoZWFkc2hvdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzczMTQxNjg3fDA&ixlib=rb-4.1.0&q=80&w=1080"} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
              {isEditing && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <Camera size={24} className="text-white" />
                </div>
              )}
            </div>
            
            {isEditing ? (
              <input type="text" defaultValue="Yakubu M." className="mt-4 text-[20px] font-bold text-center border-b border-gray-300 focus:border-[#c85212] outline-none w-full max-w-[140px] font-['Montserrat',sans-serif]" />
            ) : (
              <div className="mt-4 text-center">
                <h2 className="text-[22px] font-bold text-[#10182c] font-['Montserrat',sans-serif] leading-none">Yakubu M.</h2>
                <span className="inline-flex items-center mt-2 bg-[#10b981]/10 text-[#10b981] text-[11px] font-bold px-2 py-0.5 rounded-full">
                  <Check size={12} className="mr-1" /> Verified Renter
                </span>
              </div>
            )}
          </div>
          
          <div className="flex-1 flex flex-col gap-5 justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              <div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5"><MapPin size={12} /> Location</div>
                {isEditing ? <input type="text" defaultValue={isNewProfile ? "" : "Dublin, Ireland"} className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-3 py-2 text-[14px] outline-none focus:border-[#c85212]" /> : <div className={`text-[15px] font-medium ${isNewProfile ? "text-gray-400 italic" : "text-[#10182c]"}`}>{isNewProfile ? "Not specified" : "Dublin, Ireland"}</div>}
              </div>
              <div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5"><Phone size={12} /> Phone Number</div>
                {isEditing ? <input type="text" defaultValue={isNewProfile ? "" : "+372 5555 1234"} className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-3 py-2 text-[14px] outline-none focus:border-[#c85212]" /> : <div className={`text-[15px] font-medium ${isNewProfile ? "text-gray-400 italic" : "text-[#10182c]"}`}>{isNewProfile ? "Not provided" : "+372 5555 1234"}</div>}
              </div>
              <div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5"><Globe size={12} /> Languages</div>
                {isEditing ? <input type="text" defaultValue={isNewProfile ? "" : "English, Estonian"} className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-3 py-2 text-[14px] outline-none focus:border-[#c85212]" /> : <div className={`text-[15px] font-medium ${isNewProfile ? "text-gray-400 italic" : "text-[#10182c]"}`}>{isNewProfile ? "Not specified" : "English, Estonian"}</div>}
              </div>
              <div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5"><Mail size={12} /> Email Address</div>
                {isEditing ? <input type="email" defaultValue="yakubu@example.com" className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-3 py-2 text-[14px] outline-none focus:border-[#c85212]" /> : <div className="text-[15px] font-medium text-[#10182c]">yakubu@example.com</div>}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* About Me Card */}
        <div className={`bg-white rounded-[24px] shadow-sm p-6 lg:p-8 border ${isEditing ? 'border-[#c85212]/50' : 'border-gray-100'} flex flex-col transition-colors`}>
          <h3 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c] mb-5 border-b border-gray-100 pb-4">About Me</h3>
          <div className="mb-6">
            {isEditing ? <textarea defaultValue={isNewProfile ? "" : "Software engineer moving to Dublin. Quiet, clean, and responsible. Enjoy hiking on weekends and value a peaceful home."} className="w-full h-24 bg-[#f9fafb] border border-gray-200 rounded-xl p-4 text-[14px] outline-none focus:border-[#c85212] resize-none" /> : <p className={`text-[14px] leading-[1.6] ${isNewProfile ? "text-gray-400 italic" : "text-gray-600"}`}>{isNewProfile ? "No bio provided yet." : "Software engineer moving to Dublin. Quiet, clean, and responsible. Enjoy hiking on weekends and value a peaceful home."}</p>}
          </div>
          <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-gray-400 text-[11px] font-bold tracking-wider uppercase mb-1.5"><Briefcase size={14} /> Employment</div>
              {isEditing ? <><select className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-2 py-2 text-[14px] font-bold text-[#10182c] outline-none focus:border-[#c85212] mb-2"><option value="">Status</option><option selected={!isNewProfile}>Full-time</option><option>Part-time</option></select><input type="text" defaultValue={isNewProfile ? "" : "Fest Digital"} className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-3 py-2 text-[13px] outline-none focus:border-[#c85212]" /></> : <><div className={`font-bold text-[15px] ${isNewProfile ? "text-gray-400 italic font-medium" : "text-[#10182c]"}`}>{isNewProfile ? "Not specified" : "Full-time"}</div>{!isNewProfile && <div className="text-[13px] text-gray-500 mt-0.5">Fest Digital</div>}</>}
            </div>
            <div>
              <div className="flex items-center gap-2 text-gray-400 text-[11px] font-bold tracking-wider uppercase mb-1.5"><Euro size={14} /> Income</div>
              {isEditing ? <select className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-2 py-2 text-[14px] font-bold text-[#10182c] outline-none focus:border-[#c85212]"><option value="">Range</option><option selected={!isNewProfile}>€2,000 – 3,000</option><option>€3,000 – 4,000</option></select> : <><div className={`font-bold text-[15px] ${isNewProfile ? "text-gray-400 italic font-medium" : "text-[#10182c]"}`}>{isNewProfile ? "Not specified" : "€2,000 – 3,000"}</div>{!isNewProfile && <div className="flex items-center gap-1.5 mt-1"><div className="w-2 h-2 rounded-full bg-[#10b981]"></div><span className="text-[#10b981] text-[12px] font-medium">Proof available</span></div>}</>}
            </div>
            <div>
              <div className="flex items-center gap-2 text-gray-400 text-[11px] font-bold tracking-wider uppercase mb-1.5"><Users size={14} /> Household</div>
              {isEditing ? <input type="number" defaultValue={isNewProfile ? "" : "1"} min="1" className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-3 py-2 text-[14px] font-bold outline-none focus:border-[#c85212]" /> : <div className={`font-bold text-[15px] ${isNewProfile ? "text-gray-400 italic font-medium" : "text-[#10182c]"}`}>{isNewProfile ? "Not specified" : "1 Adult"}</div>}
            </div>
            <div>
              <div className="flex items-center gap-2 text-gray-400 text-[11px] font-bold tracking-wider uppercase mb-1.5"><Dog size={14} /> Pets</div>
              {isEditing ? <select className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-2 py-2 text-[14px] font-bold text-[#10182c] outline-none focus:border-[#c85212]"><option value="">Select</option><option selected={!isNewProfile}>None</option><option>Cat</option><option>Dog</option></select> : <div className={`font-bold text-[15px] ${isNewProfile ? "text-gray-400 italic font-medium" : "text-[#10182c]"}`}>{isNewProfile ? "Not specified" : "None"}</div>}
            </div>
          </div>
          <div className="mb-6 flex-grow">
            <div className="flex items-center gap-2 text-gray-400 text-[11px] font-bold tracking-wider uppercase mb-1.5"><Mail size={14} /> Work / School Email</div>
            {isEditing ? (
              <input type="email" defaultValue={isNewProfile ? "" : "yakubu@festdigital.com"} placeholder="name@company.com" className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-3 py-2 text-[14px] outline-none focus:border-[#c85212]" />
            ) : (
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <div className={`font-bold text-[15px] ${isNewProfile ? "text-gray-400 italic font-medium" : "text-[#10182c]"}`}>{isNewProfile ? "Not specified" : "yakubu@festdigital.com"}</div>
                {!isNewProfile && <div className="px-2 py-0.5 bg-[#f5f6f8] text-[#10182c] border border-gray-200 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><Shield size={10} className="text-green-600" /> Verified</div>}
              </div>
            )}
          </div>
          <div className="pt-5 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between mt-auto gap-3 bg-[#f9fafb] -mx-6 -mb-6 lg:-mx-8 lg:-mb-8 px-6 py-4 lg:px-8 lg:py-5 rounded-b-[24px]">
            <div className="flex items-center gap-2 text-gray-500 text-[12px] font-bold uppercase tracking-wider"><FileText size={16} /> Legal Status</div>
            {isEditing ? <div className="flex items-center gap-2 w-full sm:w-auto"><input type="text" defaultValue={isNewProfile ? "" : "EU Blue Card"} className="flex-1 sm:w-[130px] bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-[13px] font-bold outline-none focus:border-[#c85212]" /><input type="date" defaultValue={isNewProfile ? "" : "2028-12-31"} className="w-[130px] bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-[13px] outline-none focus:border-[#c85212]" /></div> : <div className={`font-bold text-[14px] ${isNewProfile ? "text-gray-400 italic font-medium" : "text-[#10182c]"}`}>{isNewProfile ? "Not specified" : <>EU Blue Card <span className="font-normal text-gray-500 text-[12px] ml-1">(Exp Dec 2028)</span></>}</div>}
          </div>
        </div>

        {/* Looking For Card */}
        <div className={`bg-white rounded-[24px] shadow-sm p-6 lg:p-8 border ${isEditing ? 'border-[#c85212]/50' : 'border-gray-100'} flex flex-col transition-colors`}>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4 mb-5">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h3 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c]">Looking For</h3>
              {requirementPublished && (
                <span className="bg-green-50 text-green-700 text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div> Live on Renter Board
                </span>
              )}
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-[12px] font-bold text-gray-500 uppercase tracking-wider">{isActivelyLooking ? "Actively Looking" : "Not Looking"}</span>
              {isEditing ? (
                <button
                  onClick={() => setIsActivelyLooking(!isActivelyLooking)}
                  className={`w-11 h-6 rounded-full relative transition-colors duration-300 focus:outline-none ${isActivelyLooking ? 'bg-[#c85212]' : 'bg-gray-300'}`}
                >
                  <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 shadow-sm ${isActivelyLooking ? 'translate-x-5' : 'translate-x-0'}`}></span>
                </button>
              ) : (
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide flex items-center gap-1.5 ${isActivelyLooking ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${isActivelyLooking ? "bg-green-500" : "bg-gray-400"}`}></div>
                  {isActivelyLooking ? "Active" : "Inactive"}
                </span>
              )}
            </div>
          </div>

          {!isActivelyLooking ? (
            <div className="flex-grow flex flex-col items-center justify-center text-center py-8">
              <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-400">
                <Home size={24} />
              </div>
              <h4 className="text-[16px] font-bold text-[#10182c] mb-2">Not currently looking</h4>
              <p className="text-[14px] text-gray-500 max-w-[280px]">
                You have marked yourself as not looking. Your profile will be hidden from matching algorithms and homeowners.
              </p>
            </div>
          ) : requirementPublished ? (
            /* ── Published: pull from live requirement state ── */
            <>
              <div className="grid grid-cols-2 gap-y-5 gap-x-6 mb-5 flex-grow">
                <div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5"><MapPin size={12} /> Location</div>
                  <span className="bg-[#f5f6f8] border border-gray-200 px-3 py-1.5 rounded-[8px] text-[13px] font-bold text-[#10182c] inline-block">{requirement.location || "—"}</span>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5"><Euro size={12} /> Budget</div>
                  {requirement.budgetMin && requirement.budgetMax
                    ? <div className="font-bold text-[16px] text-[#10182c]">NGN {Number(requirement.budgetMin).toLocaleString()}–{Number(requirement.budgetMax).toLocaleString()}<span className="text-gray-400 text-[12px] font-normal"> /yr</span></div>
                    : <span className="text-gray-400 italic text-[14px]">Not specified</span>}
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5"><Bed size={12} /> Bedrooms</div>
                  <div className="font-bold text-[15px] text-[#10182c]">{requirement.bedrooms} bedroom{requirement.bedrooms !== "1" ? "s" : ""}</div>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5"><Home size={12} /> Property type</div>
                  <span className="bg-[#f5f6f8] border border-gray-200 px-3 py-1.5 rounded-[8px] text-[13px] font-bold text-[#10182c] inline-block">{requirement.propertyType}</span>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5"><Calendar size={12} /> Move-in</div>
                  <div className="font-bold text-[15px] text-[#10182c]">{requirement.moveInDate || "Flexible"}</div>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5"><Clock size={12} /> Lease term</div>
                  <div className="font-bold text-[15px] text-[#10182c]">{requirement.leaseTerm}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] text-[12px] font-bold border ${requirement.furnished ? "bg-[#10b981]/10 text-[#059669] border-[#10b981]/20" : "bg-gray-50 text-gray-400 border-gray-100"}`}>
                  <Sofa size={13} /> {requirement.furnished ? "Furnished" : "Unfurnished"}
                </span>
                <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] text-[12px] font-bold border ${requirement.petsAllowed ? "bg-[#10b981]/10 text-[#059669] border-[#10b981]/20" : "bg-gray-50 text-gray-400 border-gray-100"}`}>
                  <Dog size={13} /> {requirement.petsAllowed ? "Pets welcome" : "No pets"}
                </span>
              </div>

              {requirement.notes && (
                <div className="bg-[#f9fafb] border border-gray-100 rounded-[12px] p-3 mb-4">
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Notes</p>
                  <p className="text-[13px] text-gray-600 italic">"{requirement.notes}"</p>
                </div>
              )}

              <div className="mt-auto pt-4 border-t border-gray-100 -mx-6 -mb-6 lg:-mx-8 lg:-mb-8 px-6 py-4 lg:px-8 bg-[#f9fafb] rounded-b-[24px] flex items-center justify-between">
                <p className="text-[12px] text-gray-400">Visible to verified homeowners on the Renter Board</p>
                <button onClick={() => handleTabChange("requirement")} className="text-[#c85212] font-bold text-[13px] hover:underline flex items-center gap-1.5">
                  <Edit2 size={13} /> Manage
                </button>
              </div>
            </>
          ) : (
            /* ── Not yet posted: show profile defaults + new fields + CTA ── */
            <>
              <div className="grid grid-cols-2 gap-y-5 gap-x-6 mb-5">
                <div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5"><MapPin size={12} /> Location</div>
                  {isEditing
                    ? <input type="text" defaultValue={isNewProfile ? "" : "Garki, Maitama"} className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-3 py-2 text-[14px] font-bold outline-none focus:border-[#c85212]" />
                    : <div className="flex flex-wrap gap-1.5">{isNewProfile ? <span className="text-[14px] text-gray-400 italic">Not specified</span> : <><span className="bg-[#f5f6f8] border border-gray-200 px-2.5 py-1 rounded-[8px] text-[12px] font-bold text-[#10182c]">Garki</span><span className="bg-[#f5f6f8] border border-gray-200 px-2.5 py-1 rounded-[8px] text-[12px] font-bold text-[#10182c]">Maitama</span></>}</div>}
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5"><Euro size={12} /> Budget</div>
                  {isEditing
                    ? <div className="flex items-center gap-2"><input type="number" defaultValue={isNewProfile ? "" : "500"} className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-3 py-2 text-[14px] font-bold outline-none focus:border-[#c85212]" /><span className="text-gray-400">-</span><input type="number" defaultValue={isNewProfile ? "" : "900"} className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-3 py-2 text-[14px] font-bold outline-none focus:border-[#c85212]" /></div>
                    : <div className={`font-bold text-[16px] ${isNewProfile ? "text-gray-400 italic text-[14px] font-medium" : "text-[#10182c]"}`}>{isNewProfile ? "Not specified" : <>€500 – €900 <span className="text-gray-400 text-[12px] font-normal">/mo</span></>}</div>}
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5"><Bed size={12} /> Bedrooms</div>
                  {isEditing
                    ? <select defaultValue={isNewProfile ? "" : "2"} className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-3 py-2 text-[14px] font-bold outline-none focus:border-[#c85212]"><option value="">Any</option>{["1","2","3","4","5+"].map(n => <option key={n} value={n}>{n} bed{n !== "1" ? "s" : ""}</option>)}</select>
                    : <div className={`font-bold text-[15px] ${isNewProfile ? "text-gray-400 italic font-medium text-[14px]" : "text-[#10182c]"}`}>{isNewProfile ? "Not specified" : "2 bedrooms"}</div>}
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5"><Home size={12} /> Property type</div>
                  {isEditing
                    ? <input type="text" defaultValue={isNewProfile ? "" : "Apartment, Studio"} className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-3 py-2 text-[14px] font-bold outline-none focus:border-[#c85212]" />
                    : <div className="flex flex-wrap gap-1.5">{isNewProfile ? <span className="text-[14px] text-gray-400 italic">Not specified</span> : <><span className="bg-[#f5f6f8] border border-gray-200 px-2.5 py-1 rounded-[8px] text-[12px] font-bold text-[#10182c]">Apartment</span><span className="bg-[#f5f6f8] border border-gray-200 px-2.5 py-1 rounded-[8px] text-[12px] font-bold text-[#10182c]">Studio</span></>}</div>}
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5"><Calendar size={12} /> Move-in date</div>
                  {isEditing
                    ? <input type="month" className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-3 py-2 text-[14px] outline-none focus:border-[#c85212]" />
                    : <div className="text-[14px] text-gray-400 italic font-medium">{isNewProfile ? "Not specified" : "Flexible"}</div>}
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5"><Clock size={12} /> Lease term</div>
                  {isEditing
                    ? <select defaultValue={isNewProfile ? "" : "12 months"} className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-3 py-2 text-[14px] font-bold outline-none focus:border-[#c85212]"><option value="">Any</option>{["6 months","12 months","24 months","Flexible"].map(t => <option key={t}>{t}</option>)}</select>
                    : <div className={`font-bold text-[15px] ${isNewProfile ? "text-gray-400 italic font-medium text-[14px]" : "text-[#10182c]"}`}>{isNewProfile ? "Not specified" : "12 months"}</div>}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] text-[12px] font-bold border ${!isNewProfile ? "bg-[#10b981]/10 text-[#059669] border-[#10b981]/20" : "bg-gray-50 text-gray-400 border-gray-100"}`}>
                  <Sofa size={13} /> {isNewProfile ? "Furnished: not specified" : "Furnished"}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] text-[12px] font-bold border bg-gray-50 text-gray-400 border-gray-100">
                  <Dog size={13} /> {isNewProfile ? "Pets: not specified" : "No pets"}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] text-[12px] font-bold border bg-gray-50 text-gray-400 border-gray-100">
                  <Car size={13} /> {isNewProfile ? "Parking: not specified" : "No parking needed"}
                </span>
              </div>

              {/* CTA to post full requirement */}
              <div className="mt-auto bg-[#c85212]/5 border border-[#c85212]/15 rounded-[14px] p-4 flex items-start gap-3">
                <div className="w-8 h-8 bg-[#c85212]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <ClipboardList size={15} className="text-[#c85212]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-bold text-[#10182c] mb-0.5">Get landlords coming to you</p>
                  <p className="text-[12px] text-gray-500 mb-2 leading-relaxed">Post your full requirement on the Renter Board and let verified homeowners, agents, and property managers reach out directly.</p>
                  <button onClick={() => handleTabChange("requirement")} className="text-[#c85212] font-bold text-[12px] hover:underline flex items-center gap-1">
                    Set up My Requirement <span className="text-[14px]">→</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Rent History Section */}
      <div className={`bg-white rounded-[24px] shadow-sm p-6 lg:p-8 border ${isEditing ? 'border-[#c85212]/50' : 'border-gray-100'} flex flex-col transition-colors`}>
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
          <div>
            <h3 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c]">Rent History</h3>
            <p className="text-[13px] text-gray-500 mt-1">Add your previous rental addresses to build trust with homeowners</p>
          </div>
          {isEditing && (
            <button
              onClick={() => setShowAddRentHistory(true)}
              className="bg-[#10182c] hover:bg-[#1a2642] text-white px-4 py-2 rounded-[12px] text-[13px] font-bold transition-colors shadow-sm flex items-center gap-2"
            >
              <Plus size={16} /> Add History
            </button>
          )}
        </div>

        {/* Add New Rent History Form */}
        <AnimatePresence>
          {showAddRentHistory && isEditing && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6 p-4 bg-[#f9fafb] rounded-[16px] border border-gray-200 overflow-hidden"
            >
              <h4 className="font-bold text-[15px] text-[#10182c] mb-4">Add Rent History</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-[12px] font-bold text-gray-600 mb-1.5">Address</label>
                  <input
                    type="text"
                    value={newRentEntry.address}
                    onChange={(e) => setNewRentEntry({...newRentEntry, address: e.target.value})}
                    placeholder="e.g., 15 Oak Street, Apartment 3B"
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-[14px] outline-none focus:border-[#c85212]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-gray-600 mb-1.5">City</label>
                  <input
                    type="text"
                    value={newRentEntry.city}
                    onChange={(e) => setNewRentEntry({...newRentEntry, city: e.target.value})}
                    placeholder="e.g., Dublin"
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-[14px] outline-none focus:border-[#c85212]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-gray-600 mb-1.5">Country</label>
                  <input
                    type="text"
                    value={newRentEntry.country}
                    onChange={(e) => setNewRentEntry({...newRentEntry, country: e.target.value})}
                    placeholder="e.g., Ireland"
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-[14px] outline-none focus:border-[#c85212]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-gray-600 mb-1.5">Start Date</label>
                  <input
                    type="text"
                    value={newRentEntry.startDate}
                    onChange={(e) => setNewRentEntry({...newRentEntry, startDate: e.target.value})}
                    placeholder="e.g., Jan 2022"
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-[14px] outline-none focus:border-[#c85212]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-gray-600 mb-1.5">End Date</label>
                  <input
                    type="text"
                    value={newRentEntry.endDate}
                    onChange={(e) => setNewRentEntry({...newRentEntry, endDate: e.target.value})}
                    placeholder="e.g., Dec 2023"
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-[14px] outline-none focus:border-[#c85212]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-gray-600 mb-1.5">Landlord Name</label>
                  <input
                    type="text"
                    value={newRentEntry.landlordName}
                    onChange={(e) => setNewRentEntry({...newRentEntry, landlordName: e.target.value})}
                    placeholder="e.g., Sarah O'Connor"
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-[14px] outline-none focus:border-[#c85212]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-gray-600 mb-1.5">Landlord Email</label>
                  <input
                    type="email"
                    value={newRentEntry.landlordEmail}
                    onChange={(e) => setNewRentEntry({...newRentEntry, landlordEmail: e.target.value})}
                    placeholder="e.g., sarah@email.com"
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-[14px] outline-none focus:border-[#c85212]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-gray-600 mb-1.5">Monthly Rent</label>
                  <input
                    type="text"
                    value={newRentEntry.monthlyRent}
                    onChange={(e) => setNewRentEntry({...newRentEntry, monthlyRent: e.target.value})}
                    placeholder="e.g., €850"
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-[14px] outline-none focus:border-[#c85212]"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => {
                    if (newRentEntry.address && newRentEntry.city) {
                      setRentHistory([
                        ...rentHistory,
                        {
                          id: rentHistory.length + 1,
                          ...newRentEntry,
                          recommendationRequested: false,
                          recommendationReceived: false
                        }
                      ]);
                      setNewRentEntry({
                        address: "",
                        city: "",
                        country: "",
                        startDate: "",
                        endDate: "",
                        landlordName: "",
                        landlordEmail: "",
                        monthlyRent: ""
                      });
                      setShowAddRentHistory(false);
                    }
                  }}
                  className="bg-[#10b981] hover:bg-[#059669] text-white px-4 py-2 rounded-lg text-[13px] font-bold transition-colors"
                >
                  Save Entry
                </button>
                <button
                  onClick={() => {
                    setShowAddRentHistory(false);
                    setNewRentEntry({
                      address: "",
                      city: "",
                      country: "",
                      startDate: "",
                      endDate: "",
                      landlordName: "",
                      landlordEmail: "",
                      monthlyRent: ""
                    });
                  }}
                  className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-[13px] font-bold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Rent History List */}
        {rentHistory.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home size={24} className="text-gray-400" />
            </div>
            <h4 className="text-[16px] font-bold text-[#10182c] mb-2">No Rent History Yet</h4>
            <p className="text-[14px] text-gray-500 max-w-md mx-auto mb-4">
              Add your previous rental addresses to show homeowners you're a reliable tenant with a proven track record.
            </p>
            {isEditing && (
              <button
                onClick={() => setShowAddRentHistory(true)}
                className="bg-[#10182c] hover:bg-[#1a2642] text-white px-6 py-2.5 rounded-[12px] text-[14px] font-bold transition-colors shadow-sm inline-flex items-center gap-2"
              >
                <Plus size={16} /> Add Your First Entry
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {rentHistory.map((entry) => (
              <div
                key={entry.id}
                className="p-4 bg-white border border-gray-200 rounded-[16px] hover:border-[#c85212]/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#10182c]/5 flex items-center justify-center shrink-0 mt-1">
                        <Home size={18} className="text-[#10182c]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[15px] text-[#10182c]">{entry.address}</h4>
                        <p className="text-[13px] text-gray-500">{entry.city}, {entry.country}</p>
                        <div className="flex items-center gap-4 mt-2 text-[12px] text-gray-600">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} className="text-gray-400" />
                            {entry.startDate} – {entry.endDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <Euro size={12} className="text-gray-400" />
                            {entry.monthlyRent}/month
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {isEditing && (
                    <button
                      onClick={() => setRentHistory(rentHistory.filter(h => h.id !== entry.id))}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Remove entry"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>

                {entry.landlordName && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-[11px] font-bold text-gray-600">
                          {entry.landlordName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-[13px] font-bold text-[#10182c]">{entry.landlordName}</p>
                          <p className="text-[12px] text-gray-500">{entry.landlordEmail}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {entry.recommendationReceived ? (
                          <div className="flex items-center gap-2">
                            <span className="flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-[12px] font-bold">
                              <Check size={14} /> Recommendation Received
                            </span>
                            <button
                              onClick={() => setViewingReference(entry.id)}
                              className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-lg text-[12px] font-bold transition-colors"
                              title="View recommendation"
                            >
                              <Eye size={14} /> View
                            </button>
                          </div>
                        ) : entry.recommendationRequested ? (
                          <span className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-[12px] font-bold">
                            <Clock size={14} /> Request Sent
                          </span>
                        ) : (
                          <button
                            onClick={() => {
                              setSelectedRentEntry(entry.id);
                              setShowLandlordReferenceModal(true);
                            }}
                            className="flex items-center gap-2 px-3 py-1.5 bg-[#c85212] hover:bg-[#a6430f] text-white rounded-lg text-[12px] font-bold transition-colors"
                            title="Request recommendation from landlord"
                          >
                            <MessageSquare size={14} /> Request Recommendation
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-center pt-8 border-t border-gray-200">
        <button onClick={() => setIsNewProfile(!isNewProfile)} className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 px-6 py-2.5 rounded-full transition-colors font-medium text-[13px] shadow-sm">
          {isNewProfile ? "Preview Completed Profile" : "Preview Empty Profile"}
        </button>
      </div>
    </motion.div>
  );

  const renderFavoritesTab = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">Favorited Properties</h1>
          <p className="text-gray-500 text-[14px] mt-1">Properties you've saved to review later.</p>
        </div>
      </div>

      {isNewProfile ? (
        <div className="bg-white border border-dashed border-gray-200 rounded-[24px] p-16 flex flex-col items-center justify-center text-center shadow-sm">
          <div className="w-16 h-16 bg-[#c85212]/10 rounded-full flex items-center justify-center mb-5">
            <Heart size={28} className="text-[#c85212]" />
          </div>
          <p className="text-[#10182c] font-bold text-[18px] mb-2">No favorites yet</p>
          <p className="text-gray-500 text-[15px] max-w-md mb-8">
            Properties you favorite while browsing will appear here so you can easily compare them and apply when ready.
          </p>
          <button className="bg-[#10182c] hover:bg-[#1a2642] text-white px-8 py-3.5 rounded-[12px] text-[15px] font-bold transition-colors shadow-sm">
            Browse Properties
          </button>
        </div>
      ) : (
        <>
          {compareList.length > 0 && (
            <div className="bg-[#10182c]/5 border border-[#10182c]/10 rounded-[16px] p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Scale size={16} className="text-[#10182c]" />
                <span className="text-[#10182c] font-bold text-[14px]">{compareList.length} propert{compareList.length === 1 ? "y" : "ies"} selected for comparison</span>
                {compareList.length < 2 && <span className="text-gray-400 text-[13px]">— add 1 more to compare</span>}
              </div>
              <button
                disabled={compareList.length < 2}
                onClick={() => setShowCompareTool(true)}
                className="bg-[#10182c] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#1a2642] text-white font-bold text-[13px] px-4 py-2 rounded-[10px] transition-colors flex items-center gap-2"
              >
                <Scale size={14} /> Compare Now
              </button>
            </div>
          )}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {properties.map((property) => {
              const inCompare = isInCompare(property.id);
              return (
                <div key={property.id} className={`group flex flex-col bg-white rounded-[20px] p-2 border shadow-sm hover:shadow-md transition-shadow ${inCompare ? "border-[#c85212] ring-2 ring-[#c85212]/20" : "border-gray-100"}`}>
                  <div className="relative h-[140px] w-full rounded-[14px] overflow-hidden mb-3">
                    <Link to={`/properties/${property.id}`}>
                      <ImageWithFallback src={property.image} alt={property.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </Link>
                    <div className="absolute top-2 right-2 flex gap-1.5">
                      <button
                        onClick={() => toggleCompare(property)}
                        title={inCompare ? "Remove from comparison" : compareList.length >= 4 ? "Max 4 properties" : "Add to comparison"}
                        disabled={!inCompare && compareList.length >= 4}
                        className={`rounded-full p-1.5 shadow-sm hover:scale-110 transition-transform backdrop-blur-md ${inCompare ? "bg-[#c85212] text-white" : "bg-white/90 text-gray-500 hover:text-[#c85212] disabled:opacity-40 disabled:cursor-not-allowed"}`}
                      >
                        <Scale size={13} />
                      </button>
                      <div className="bg-white/90 backdrop-blur-md rounded-full p-1.5 shadow-sm hover:scale-110 transition-transform">
                        <Heart size={13} className="text-[#c85212] fill-[#c85212]" />
                      </div>
                    </div>
                    {inCompare && (
                      <div className="absolute bottom-2 left-2 bg-[#c85212] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        In comparison
                      </div>
                    )}
                  </div>
                  <div className="px-1 pb-1">
                    <div className="flex items-center gap-2 text-[11px] text-gray-500 mb-1.5">
                      <div className="flex items-center gap-1"><Bath size={14} /> {property.baths} Bath</div>
                      <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                      <div className="flex items-center gap-1"><Bed size={14} /> {property.beds} Bed</div>
                    </div>
                    <h4 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[14px] mb-1 truncate">{property.title}</h4>
                    <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-50">
                      <span className="font-['Montserrat',sans-serif] font-bold text-[16px] text-[#c85212]">{property.price}</span>
                      <span className="text-[11px] text-gray-500 truncate ml-2 flex items-center gap-1"><MapPin size={12} /> {property.location.split(',')[0]}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </motion.div>
  );

  const renderMessagesTab = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="h-[calc(100vh-200px)] min-h-[500px] flex flex-col sm:flex-row gap-6">
      {/* Inbox List */}
      <div className="w-full sm:w-[320px] lg:w-[380px] bg-white border border-gray-200 rounded-[20px] flex flex-col overflow-hidden shrink-0 shadow-sm">
        <div className="p-4 border-b border-gray-100">
          <h2 className="font-['Montserrat',sans-serif] text-[20px] font-bold text-[#10182c]">Messages</h2>
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
                  <h4 className="font-bold text-[14px] text-[#10182c] truncate">{i === 0 ? "Sarah (Homeowner)" : "Apartey Support"}</h4>
                  <span className="text-[11px] text-gray-400 shrink-0">10:42 AM</span>
                </div>
                <p className={`text-[13px] truncate ${i === 0 ? 'text-[#10182c] font-medium' : 'text-gray-500'}`}>
                  {i === 0 ? "Yes, the viewing for tomorrow is confirmed!" : "Your profile verification was successful."}
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
              <ImageWithFallback src="https://images.unsplash.com/photo-1580000000000?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=256&h=256" alt="Sarah" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-[15px] text-[#10182c]">Sarah (Homeowner)</h3>
              <p className="text-[12px] text-gray-500">Re: 2 Pankshin Road</p>
            </div>
          </div>
          <button className="p-2 text-gray-400 hover:text-[#10182c] transition-colors rounded-full hover:bg-gray-100">
            <MoreVertical size={20} />
          </button>
        </div>
        
        <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4 bg-[#fcfcfd]">
          <div className="text-center my-4">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-gray-100">Today</span>
          </div>
          
          <div className="flex flex-col gap-1 max-w-[80%] items-end self-end">
            <div className="bg-[#10182c] text-white p-3 rounded-[16px] rounded-br-[4px] text-[14px]">
              Hi Sarah, is it still possible to view the property tomorrow?
            </div>
            <span className="text-[11px] text-gray-400 mr-1">10:30 AM</span>
          </div>
          
          <div className="flex gap-3 max-w-[80%] items-end self-start mt-2">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 shrink-0 mb-5">
              <ImageWithFallback src="https://images.unsplash.com/photo-1580000000000?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=256&h=256" alt="Sarah" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="bg-white border border-gray-200 text-[#10182c] p-3 rounded-[16px] rounded-bl-[4px] text-[14px] shadow-sm">
                Yes, the viewing for tomorrow is confirmed!
              </div>
              <div className="bg-white border border-gray-200 text-[#10182c] p-3 rounded-[16px] rounded-bl-[4px] text-[14px] shadow-sm">
                See you at 14:00.
              </div>
              <span className="text-[11px] text-gray-400 ml-1">10:42 AM</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-white border-t border-gray-100 shrink-0">
          <div className="flex items-center gap-2 bg-[#f5f6f8] p-2 rounded-[16px] border border-gray-200 focus-within:border-[#c85212] focus-within:ring-1 focus-within:ring-[#c85212]/20 transition-all">
            <button className="p-2 text-gray-400 hover:text-[#10182c] transition-colors">
              <Paperclip size={20} />
            </button>
            <input type="text" placeholder="Type a message..." className="flex-1 bg-transparent border-none outline-none text-[14px] px-2" />
            <button className="w-10 h-10 bg-[#c85212] hover:bg-[#a6430f] text-white rounded-xl flex items-center justify-center transition-colors shadow-sm">
              <Send size={18} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderMatchesTab = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">New Matches</h1>
          <p className="text-gray-500 text-[14px] mt-1">Properties that fit your preferences perfectly.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {properties.map((prop, idx) => {
          const inCompare = isInCompare(prop.id);
          const matchPct = [98, 94, 91, 88, 85, 82][idx] ?? 80;
          return (
            <div key={prop.id} className={`bg-white rounded-[20px] overflow-hidden border shadow-sm hover:shadow-md transition-shadow flex flex-col p-2.5 ${inCompare ? "border-[#c85212] ring-2 ring-[#c85212]/20" : "border-gray-100"}`}>
              <div className="relative h-40 w-full overflow-hidden rounded-[14px]">
                <Link to={`/properties/${prop.id}`} className="block w-full h-full">
                  <ImageWithFallback src={prop.image} alt={prop.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </Link>
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-[#10182c] shadow-sm flex items-center gap-1">
                  <Sparkles size={12} className="text-[#c85212]" /> {matchPct}% Match
                </div>
                <button
                  onClick={() => toggleCompare(prop)}
                  disabled={!inCompare && compareList.length >= 4}
                  className={`absolute top-3 right-3 p-2 rounded-full shadow-sm hover:scale-110 transition-transform backdrop-blur-md ${inCompare ? "bg-[#c85212] text-white" : "bg-white/90 text-gray-500 hover:text-[#c85212] disabled:opacity-40 disabled:cursor-not-allowed"}`}
                  title={inCompare ? "Remove from comparison" : "Add to comparison"}
                >
                  <Scale size={13} />
                </button>
              </div>
              <div className="p-3 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-1.5">
                  <h3 className="font-bold text-[#10182c] text-[15px] line-clamp-1">{prop.title}</h3>
                  <span className="font-bold text-[#c85212] text-[15px] whitespace-nowrap ml-2">{prop.price}</span>
                </div>
                <div className="flex items-center text-gray-500 text-[12px] mb-3">
                  <MapPin size={12} className="mr-1" />
                  {prop.location}
                </div>
                <div className="flex items-center gap-3 mt-auto pt-3 border-t border-gray-100">
                  <div className="flex items-center text-gray-500 text-[12px]"><Bed size={14} className="mr-1 text-gray-400" /> {prop.beds} Beds</div>
                  <div className="flex items-center text-gray-500 text-[12px]"><Bath size={14} className="mr-1 text-gray-400" /> {prop.baths} Baths</div>
                  <div className="flex items-center text-gray-500 text-[12px] ml-auto"><Star size={14} className="mr-1 text-[#fbff79] fill-[#fbff79]" /> <span className="font-bold text-[#10182c]">{prop.rating}</span></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );

  const renderNotificationsTab = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">Notifications & Activity</h1>
          <p className="text-gray-500 text-[14px] mt-1">Updates on matches, messages, and your recent actions.</p>
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
          <motion.div key="notifs" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-white border border-gray-100 rounded-[24px] shadow-sm flex flex-col overflow-hidden max-w-4xl">
            <div className="p-4 border-b border-gray-100 flex justify-end">
              <button className="text-[#c85212] text-[13px] font-bold hover:underline">Mark all as read</button>
            </div>
            {[
              { title: "New Match Found!", type: "match", desc: "A new 3-bedroom apartment in Lekki just matched your preferences.", time: "1 hour ago", unread: true },
              { title: "Message from Homeowner", type: "message", desc: "Michael Okafor sent you a message regarding your inquiry.", time: "5 hours ago", unread: true },
              { title: "Profile Verification Successful", type: "security", desc: "Your ID verification has been approved.", time: "1 day ago", unread: false },
              { title: "Price Drop Alert", type: "alert", desc: "A property in your favorites just dropped in price by 5%.", time: "2 days ago", unread: false },
              { title: "New Match Found!", type: "match", desc: "A 2-bedroom flat in Victoria Island matched your criteria.", time: "3 days ago", unread: false }
            ].map((notif, i) => (
              <div key={i} className={`p-5 flex gap-4 items-start border-b border-gray-50 transition-colors cursor-pointer hover:bg-gray-50 ${notif.unread ? 'bg-[#f5f6f8]/50' : 'bg-white'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${notif.type === 'match' ? 'bg-[#c85212]/10 text-[#c85212]' : notif.type === 'message' ? 'bg-[#10182c]/10 text-[#10182c]' : notif.type === 'security' ? 'bg-green-100 text-green-600' : 'bg-[#fbff79]/30 text-[#10182c]'}`}>
                  {notif.type === 'match' ? <Sparkles size={18} /> : notif.type === 'message' ? <MessageSquare size={18} /> : notif.type === 'security' ? <Shield size={18} /> : <BellRing size={18} />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className={`text-[14px] ${notif.unread ? 'font-bold' : 'font-medium'} text-[#10182c]`}>{notif.title}</h4>
                    <span className="text-[12px] text-gray-400 whitespace-nowrap ml-4">{notif.time}</span>
                  </div>
                  <p className="text-[13px] text-gray-500">{notif.desc}</p>
                </div>
                {notif.unread && <div className="w-2 h-2 rounded-full bg-[#c85212] mt-2 shrink-0"></div>}
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div key="activity" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-white border border-gray-100 rounded-[24px] shadow-sm p-6 max-w-4xl">
            <div className="space-y-6">
              {[
                { title: "Viewed Property", time: "2 hours ago", desc: "You viewed 2 Pankshin Road, Pankshin", icon: <Eye size={16} /> },
                { title: "Saved Search", time: "1 day ago", desc: "You created a new alert for '2 Bedroom in Lekki'", icon: <Search size={16} /> },
                { title: "Favorited Property", time: "2 days ago", desc: "You added 15 Enugu Avenue to your favorites", icon: <Heart size={16} /> },
                { title: "Profile Update", time: "1 week ago", desc: "You updated your employment details", icon: <User size={16} /> }
              ].map((activity, i) => (
                <div key={i} className="flex gap-4 items-start relative">
                  {i !== 3 && <div className="absolute left-[19px] top-10 bottom-[-24px] w-px bg-gray-100"></div>}
                  <div className="w-10 h-10 rounded-full bg-[#f5f6f8] flex items-center justify-center text-[#10182c] shrink-0 z-10">
                    {activity.icon}
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-[14px] font-bold text-[#10182c]">{activity.title}</h4>
                      <span className="text-[12px] text-gray-400">{activity.time}</span>
                    </div>
                    <p className="text-[13px] text-gray-500 mt-1">{activity.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  const renderReviewsTab = () => {
    const filteredReviews = reviews
      .filter(review => reviewFilterStatus === 'all' || review.status === reviewFilterStatus)
      .sort((a, b) => {
        if (reviewSortBy === 'date') {
          return new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime();
        } else {
          return b.rating - a.rating;
        }
      });

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-2">
          <div>
            <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">My Reviews</h1>
            <p className="text-gray-500 text-[14px] mt-1">Manage all your property reviews in one place</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <div className="relative">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-[12px] text-[14px] font-bold text-[#10182c] hover:bg-gray-50 transition-colors shadow-sm">
                <Filter size={16} />
                {reviewFilterStatus === 'all' ? 'All Reviews' : reviewFilterStatus === 'published' ? 'Published' : 'Pending'}
                <ChevronDown size={16} />
              </button>
            </div>
            
            <div className="relative">
              <button 
                onClick={() => setReviewSortBy(reviewSortBy === 'date' ? 'rating' : 'date')}
                className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-[12px] text-[14px] font-bold text-[#10182c] hover:bg-gray-50 transition-colors shadow-sm"
              >
                <ArrowUpDown size={16} />
                {reviewSortBy === 'date' ? 'Newest First' : 'Highest Rated'}
              </button>
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-[20px] p-5 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-[12px] font-bold uppercase tracking-wider mb-1">Total Reviews</p>
                <p className="text-[#10182c] text-[24px] font-bold font-['Montserrat',sans-serif]">{reviews.length}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#10182c]/5 flex items-center justify-center">
                <Star size={20} className="text-[#10182c]" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-[20px] p-5 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-[12px] font-bold uppercase tracking-wider mb-1">Avg Rating</p>
                <p className="text-[#c85212] text-[24px] font-bold font-['Montserrat',sans-serif]">
                  {(reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#c85212]/10 flex items-center justify-center">
                <Star size={20} className="text-[#c85212] fill-[#c85212]" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-[20px] p-5 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-[12px] font-bold uppercase tracking-wider mb-1">Helpful Votes</p>
                <p className="text-[#10b981] text-[24px] font-bold font-['Montserrat',sans-serif]">
                  {reviews.reduce((sum, r) => sum + r.helpfulCount, 0)}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#10b981]/10 flex items-center justify-center">
                <ThumbsUp size={20} className="text-[#10b981]" />
              </div>
            </div>
          </div>
        </div>

        {/* Reviews List */}
        {filteredReviews.length === 0 ? (
          <div className="bg-white border border-gray-100 rounded-[24px] shadow-sm p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star size={24} className="text-gray-400" />
            </div>
            <h3 className="text-[18px] font-bold text-[#10182c] mb-2">No Reviews Yet</h3>
            <p className="text-[14px] text-gray-500 max-w-md mx-auto">
              You haven't written any property reviews. Share your experiences to help other renters make informed decisions!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredReviews.map((review) => (
              <motion.div
                key={review.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-gray-100 rounded-[24px] shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Property Header */}
                <div className="flex flex-col sm:flex-row gap-4 p-5 border-b border-gray-100 bg-[#f9fafb]">
                  <Link to={`/properties/${review.propertyId}`} className="w-full sm:w-32 h-24 rounded-[16px] overflow-hidden shrink-0 group">
                    <ImageWithFallback 
                      src={review.propertyImage} 
                      alt={review.propertyTitle}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </Link>
                  
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <Link to={`/properties/${review.propertyId}`} className="hover:text-[#c85212] transition-colors">
                        <h3 className="font-['Montserrat',sans-serif] text-[17px] font-bold text-[#10182c] mb-1">
                          {review.propertyTitle}
                        </h3>
                      </Link>
                      <div className="flex items-center gap-3 text-[13px] text-gray-500 mb-2">
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {review.propertyLocation}
                        </span>
                        <span className="flex items-center gap-1">
                          <Bed size={14} />
                          {review.propertyBeds}
                        </span>
                        <span className="flex items-center gap-1">
                          <Bath size={14} />
                          {review.propertyBaths}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide ${
                          review.status === 'published' 
                            ? 'bg-[#10b981]/10 text-[#10b981]' 
                            : 'bg-[#fbff79]/50 text-[#10182c]'
                        }`}>
                          <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                            review.status === 'published' ? 'bg-[#10b981]' : 'bg-[#c85212]'
                          }`}></div>
                          {review.status}
                        </span>
                        <span className="text-[12px] text-gray-400">• {review.datePosted}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => setEditingReviewId(editingReviewId === review.id ? null : review.id)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Edit review"
                      >
                        <Edit2 size={18} className="text-gray-500" />
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm('Are you sure you want to delete this review? This action cannot be undone.')) {
                            setReviews(reviews.filter(r => r.id !== review.id));
                          }
                        }}
                        className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete review"
                      >
                        <Trash2 size={18} className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Review Content */}
                <div className="p-6">
                  {editingReviewId === review.id ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[13px] font-bold text-gray-700 mb-2">Your Rating</label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              onClick={() => {
                                setReviews(reviews.map(r => 
                                  r.id === review.id ? { ...r, rating: star } : r
                                ));
                              }}
                              className="hover:scale-110 transition-transform"
                            >
                              <Star 
                                size={28} 
                                className={star <= review.rating ? 'text-[#fbff79] fill-[#fbff79]' : 'text-gray-300'}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-[13px] font-bold text-gray-700 mb-2">Your Review</label>
                        <textarea
                          defaultValue={review.reviewText}
                          onChange={(e) => {
                            setReviews(reviews.map(r => 
                              r.id === review.id ? { ...r, reviewText: e.target.value } : r
                            ));
                          }}
                          className="w-full h-32 bg-[#f9fafb] border border-gray-200 rounded-[16px] p-4 text-[14px] outline-none focus:border-[#c85212] resize-none"
                          placeholder="Share your experience with this property..."
                        />
                      </div>
                      
                      <div className="flex gap-3">
                        <button
                          onClick={() => setEditingReviewId(null)}
                          className="bg-[#10b981] hover:bg-[#059669] text-white px-5 py-2.5 rounded-[12px] text-[14px] font-bold transition-colors shadow-sm flex items-center gap-2"
                        >
                          <Check size={16} />
                          Save Changes
                        </button>
                        <button
                          onClick={() => setEditingReviewId(null)}
                          className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-5 py-2.5 rounded-[12px] text-[14px] font-bold transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* Rating Stars */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star}
                              size={20} 
                              className={star <= review.rating ? 'text-[#fbff79] fill-[#fbff79]' : 'text-gray-300'}
                            />
                          ))}
                        </div>
                        <span className="text-[18px] font-bold text-[#10182c] font-['Montserrat',sans-serif]">
                          {review.rating}.0
                        </span>
                      </div>
                      
                      {/* Review Text */}
                      <p className="text-[15px] text-gray-700 leading-[1.7] mb-4">
                        {review.reviewText}
                      </p>
                      
                      {/* Review Actions */}
                      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                        <button className="flex items-center gap-2 text-[13px] font-bold text-gray-500 hover:text-[#10b981] transition-colors">
                          <ThumbsUp size={16} />
                          <span>{review.helpfulCount} found helpful</span>
                        </button>
                        
                        <button className="flex items-center gap-2 text-[13px] font-bold text-gray-500 hover:text-red-500 transition-colors">
                          <Flag size={16} />
                          <span>Report</span>
                        </button>
                        
                        <Link 
                          to={`/properties/${review.propertyId}`}
                          className="ml-auto flex items-center gap-2 text-[13px] font-bold text-[#c85212] hover:underline"
                        >
                          View Property →
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State for Filtered Results */}
        {filteredReviews.length === 0 && reviews.length > 0 && (
          <div className="bg-white border border-gray-100 rounded-[24px] shadow-sm p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter size={24} className="text-gray-400" />
            </div>
            <h3 className="text-[18px] font-bold text-[#10182c] mb-2">No Reviews Match Your Filter</h3>
            <p className="text-[14px] text-gray-500 max-w-md mx-auto">
              Try changing your filter settings to see more reviews.
            </p>
          </div>
        )}
      </motion.div>
    );
  };

  const renderSettingsTab = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl space-y-8">
      <div>
        <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">Settings</h1>
        <p className="text-gray-500 text-[14px] mt-1">Manage your account preferences, notifications, and security.</p>
      </div>

      <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 lg:p-8 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600"><BellRing size={20} /></div>
            <h2 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c]">Notifications</h2>
          </div>
          
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[15px] font-bold text-[#10182c]">Email Notifications</p>
                <p className="text-[13px] text-gray-500">Receive daily summaries of new property matches</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10b981]"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[15px] font-bold text-[#10182c]">SMS Alerts</p>
                <p className="text-[13px] text-gray-500">Get notified instantly about viewing confirmations</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10b981]"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="p-6 lg:p-8 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600"><Lock size={20} /></div>
            <h2 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c]">Security</h2>
          </div>
          
          <div className="space-y-4 max-w-md">
            <div>
              <label className="block text-[13px] font-bold text-gray-700 mb-1.5">Current Password</label>
              <input type="password" placeholder="••••••••" className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-4 py-2.5 text-[14px] outline-none focus:border-[#c85212]" />
            </div>
            <div>
              <label className="block text-[13px] font-bold text-gray-700 mb-1.5">New Password</label>
              <input type="password" placeholder="Enter new password" className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-4 py-2.5 text-[14px] outline-none focus:border-[#c85212]" />
            </div>
            <button className="bg-[#10182c] hover:bg-[#1a2642] text-white px-6 py-2.5 rounded-lg text-[13px] font-bold transition-colors mt-2">
              Update Password
            </button>
          </div>
        </div>

        <div className="p-6 lg:p-8 bg-[#fcfcfd]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600"><Shield size={20} /></div>
            <h2 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-red-600">Danger Zone</h2>
          </div>
          <p className="text-[13px] text-gray-500 mb-4 max-w-xl">
            Once you delete your account, there is no going back. Please be certain. All your data, messages, and saved properties will be permanently removed.
          </p>
          <button 
            onClick={() => setShowDeleteModal(true)}
            className="bg-white border border-red-200 text-red-600 hover:bg-red-50 px-6 py-2.5 rounded-lg text-[13px] font-bold transition-colors"
          >
            Delete Account
          </button>
        </div>
      </div>
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

        <nav className="flex-1 py-8 px-4 flex flex-col gap-2 overflow-y-auto">
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

        <div className="border-t border-white/10 flex flex-col">
          <div className="p-4 flex flex-col gap-2">
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
          </div>

          <div className="relative border-t border-white/10">
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#10b981]/20 text-[#10b981] flex items-center justify-center font-bold">
                  JD
                </div>
                <div className="text-left">
                  <p className="text-[13px] font-bold">John Doe</p>
                  <p className="text-[11px] text-white/60">Renter</p>
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
                      <div className="w-8 h-8 rounded-full bg-[#10b981] text-white flex items-center justify-center shrink-0">
                        <User size={14} />
                      </div>
                      <div className="flex-1">
                        <div>Renter</div>
                        <div className="text-[10px] text-white/60 font-normal">Active Profile</div>
                      </div>
                      <Check size={14} className="text-[#10b981]" />
                    </button>

                    <Link to="/homeowner" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-white/80 transition-colors text-[13px] font-bold text-left group">
                      <div className="w-8 h-8 rounded-full bg-[#1a2642] text-white/60 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                        <Building size={14} />
                      </div>
                      <div className="flex-1">
                        <div>Homeowner</div>
                        <div className="text-[10px] text-white/40 font-normal">Switch to hosting</div>
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

          <div className="px-4 pb-4">
            <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-colors text-[14px] font-bold w-full">
              <LogOut size={18} /> <span className="text-left">Sign Out</span>
            </Link>
          </div>
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
                placeholder="Search everywhere..." 
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
                      <Link to="/listings" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        <Clock size={16} className="text-gray-400" />
                        <span className="text-[14px] text-[#10182c]">Lekki Phase 1, Lagos</span>
                      </Link>
                      <Link to="/listings" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        <Clock size={16} className="text-gray-400" />
                        <span className="text-[14px] text-[#10182c]">2 Bedroom Apartments</span>
                      </Link>
                      
                      <div className="px-3 py-2 mt-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Suggested</div>
                      <Link to="/listings" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        <Home size={16} className="text-gray-400" />
                        <span className="text-[14px] text-[#10182c]">Affordable Homes in Yaba</span>
                      </Link>
                      <Link to="/homeowner" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        <User size={16} className="text-gray-400" />
                        <span className="text-[14px] text-[#10182c]">Top Rated Homeowners</span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            <button 
              onClick={() => setActiveTab("notifications")}
              className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#c85212] rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-[1px] bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-3 cursor-pointer group hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 group-hover:border-[#c85212] transition-colors bg-[#f0f0f0]">
                <ImageWithFallback 
                  src={isNewProfile ? "https://images.unsplash.com/photo-1544168190-79c15427015f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFuayUyMHByb2ZpbGV8ZW58MXx8fHwxNzczMTY1NTAxfDA&ixlib=rb-4.1.0&q=80&w=1080" : "https://images.unsplash.com/photo-1579420593648-0deba81fd762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBoZWFkc2hvdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzczMTQxNjg3fDA&ixlib=rb-4.1.0&q=80&w=1080"} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-[13px] font-bold text-[#10182c]">Yakubu M.</div>
                <div className="text-[11px] text-gray-500">Verified Renter</div>
              </div>
              <ChevronDown size={16} className="text-gray-400 hidden sm:block" />
            </div>
          </div>
        </header>

        {/* Dynamic Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 relative">
          <div className="max-w-[1200px] mx-auto pb-12">
            <AnimatePresence mode="wait">
              {activeTab === "requirement" && (
                <motion.div key="requirement" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6 max-w-2xl">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">My Requirement</h1>
                      <p className="text-gray-500 text-[14px] mt-1">Post what you're looking for. Verified homeowners, agents and property managers will message you directly.</p>
                    </div>
                    {requirementPublished && !requirementEditing && (
                      <span className="shrink-0 bg-green-100 text-green-700 text-[12px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 mt-1">
                        <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> Live on Renter Board
                      </span>
                    )}
                  </div>

                  {/* Published view */}
                  {requirementPublished && !requirementEditing ? (
                    <div className="bg-white border border-gray-100 rounded-[20px] shadow-sm overflow-hidden">
                      <div className="bg-[#10182c] px-6 py-5">
                        <p className="text-white/50 text-[12px] mb-1 uppercase tracking-widest">Your posted requirement</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="bg-[#c85212]/20 text-[#fbff79] text-[13px] font-bold px-3 py-1 rounded-full">NGN {requirement.budgetMin}–{requirement.budgetMax} / yr</span>
                          <span className="bg-white/10 text-white text-[13px] px-3 py-1 rounded-full flex items-center gap-1"><MapPin size={12} />{requirement.location}</span>
                          <span className="bg-white/10 text-white text-[13px] px-3 py-1 rounded-full flex items-center gap-1"><Bed size={12} />{requirement.bedrooms} beds</span>
                        </div>
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-[14px]">
                          <div><span className="text-gray-400">Type</span><p className="font-medium text-[#10182c] mt-0.5">{requirement.propertyType}</p></div>
                          <div><span className="text-gray-400">Move-in</span><p className="font-medium text-[#10182c] mt-0.5">{requirement.moveInDate}</p></div>
                          <div><span className="text-gray-400">Lease term</span><p className="font-medium text-[#10182c] mt-0.5">{requirement.leaseTerm}</p></div>
                          <div><span className="text-gray-400">Furnished</span><p className="font-medium text-[#10182c] mt-0.5">{requirement.furnished ? "Yes" : "No"}</p></div>
                          <div><span className="text-gray-400">Pets</span><p className="font-medium text-[#10182c] mt-0.5">{requirement.petsAllowed ? "Allowed" : "No pets"}</p></div>
                        </div>
                        {requirement.notes && <div className="border-t border-gray-100 pt-4"><p className="text-gray-400 text-[12px] mb-1">Notes</p><p className="text-[14px] text-gray-600 italic">"{requirement.notes}"</p></div>}
                        <div className="flex gap-3 pt-2">
                          <button onClick={() => setRequirementEditing(true)} className="flex-1 border border-gray-200 hover:bg-gray-50 text-[#10182c] font-bold text-[13px] py-3 rounded-[12px] transition-colors">Edit Requirement</button>
                          <button onClick={() => { setRequirementPublished(false); setRequirementEditing(true); }} className="border border-red-200 hover:bg-red-50 text-red-500 font-bold text-[13px] px-5 py-3 rounded-[12px] transition-colors">Remove</button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Form */
                    <div className="bg-white border border-gray-100 rounded-[20px] shadow-sm p-6 space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="sm:col-span-2">
                          <label className="block text-[12px] font-bold text-[#10182c] mb-1.5 uppercase tracking-wide">Preferred location <span className="text-red-400">*</span></label>
                          <input value={requirement.location} onChange={e => setRequirement(r => ({...r, location: e.target.value}))} placeholder="e.g. Lekki Phase 1, Lagos" className="w-full border border-gray-200 rounded-[10px] px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 transition-all" />
                        </div>
                        <div>
                          <label className="block text-[12px] font-bold text-[#10182c] mb-1.5 uppercase tracking-wide">Budget min (NGN/yr)</label>
                          <input type="number" value={requirement.budgetMin} onChange={e => setRequirement(r => ({...r, budgetMin: e.target.value}))} placeholder="e.g. 400000" className="w-full border border-gray-200 rounded-[10px] px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 transition-all" />
                        </div>
                        <div>
                          <label className="block text-[12px] font-bold text-[#10182c] mb-1.5 uppercase tracking-wide">Budget max (NGN/yr)</label>
                          <input type="number" value={requirement.budgetMax} onChange={e => setRequirement(r => ({...r, budgetMax: e.target.value}))} placeholder="e.g. 800000" className="w-full border border-gray-200 rounded-[10px] px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 transition-all" />
                        </div>
                        <div>
                          <label className="block text-[12px] font-bold text-[#10182c] mb-1.5 uppercase tracking-wide">Bedrooms needed</label>
                          <select value={requirement.bedrooms} onChange={e => setRequirement(r => ({...r, bedrooms: e.target.value}))} className="w-full border border-gray-200 rounded-[10px] px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] bg-white">
                            {["1","2","3","4","5+"].map(n => <option key={n} value={n}>{n} bedroom{n !== "1" ? "s" : ""}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-[12px] font-bold text-[#10182c] mb-1.5 uppercase tracking-wide">Property type</label>
                          <select value={requirement.propertyType} onChange={e => setRequirement(r => ({...r, propertyType: e.target.value}))} className="w-full border border-gray-200 rounded-[10px] px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] bg-white">
                            {["Apartment","Duplex / House","Studio","Flat","Penthouse / Luxury","Any"].map(t => <option key={t}>{t}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-[12px] font-bold text-[#10182c] mb-1.5 uppercase tracking-wide">Move-in date</label>
                          <input type="month" value={requirement.moveInDate} onChange={e => setRequirement(r => ({...r, moveInDate: e.target.value}))} className="w-full border border-gray-200 rounded-[10px] px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 transition-all" />
                        </div>
                        <div>
                          <label className="block text-[12px] font-bold text-[#10182c] mb-1.5 uppercase tracking-wide">Lease term</label>
                          <select value={requirement.leaseTerm} onChange={e => setRequirement(r => ({...r, leaseTerm: e.target.value}))} className="w-full border border-gray-200 rounded-[10px] px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] bg-white">
                            {["6 months","12 months","24 months","Flexible"].map(t => <option key={t}>{t}</option>)}
                          </select>
                        </div>
                        <div className="sm:col-span-2 flex gap-6">
                          <label className="flex items-center gap-2.5 cursor-pointer">
                            <div onClick={() => setRequirement(r => ({...r, furnished: !r.furnished}))} className={`w-10 h-6 rounded-full transition-colors relative ${requirement.furnished ? "bg-[#c85212]" : "bg-gray-200"}`}>
                              <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${requirement.furnished ? "left-[18px]" : "left-0.5"}`} />
                            </div>
                            <span className="text-[14px] text-[#10182c]">Furnished</span>
                          </label>
                          <label className="flex items-center gap-2.5 cursor-pointer">
                            <div onClick={() => setRequirement(r => ({...r, petsAllowed: !r.petsAllowed}))} className={`w-10 h-6 rounded-full transition-colors relative ${requirement.petsAllowed ? "bg-[#c85212]" : "bg-gray-200"}`}>
                              <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${requirement.petsAllowed ? "left-[18px]" : "left-0.5"}`} />
                            </div>
                            <span className="text-[14px] text-[#10182c]">Pet-friendly needed</span>
                          </label>
                        </div>
                        <div className="sm:col-span-2">
                          <label className="block text-[12px] font-bold text-[#10182c] mb-1.5 uppercase tracking-wide">Additional notes</label>
                          <textarea value={requirement.notes} onChange={e => setRequirement(r => ({...r, notes: e.target.value}))} rows={3} placeholder="Anything else homeowners should know — proximity to work, family size, lifestyle..." className="w-full border border-gray-200 rounded-[10px] px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 transition-all resize-none" />
                        </div>
                      </div>
                      <div className="flex gap-3 pt-2">
                        {requirementPublished && <button onClick={() => setRequirementEditing(false)} className="border border-gray-200 text-[#10182c] font-bold text-[13px] px-5 py-3 rounded-[12px] hover:bg-gray-50 transition-colors">Cancel</button>}
                        <button
                          disabled={!requirement.location || !requirement.budgetMax}
                          onClick={() => { setRequirementPublished(true); setRequirementEditing(false); }}
                          className="flex-1 bg-[#c85212] hover:bg-[#a6430f] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-[14px] py-3.5 rounded-[12px] transition-colors flex items-center justify-center gap-2"
                        >
                          <ClipboardList size={15} /> {requirementPublished ? "Update Requirement" : "Publish to Renter Board"}
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
              {activeTab === "dashboard" && <motion.div key="dashboard" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>{renderDashboardTab()}</motion.div>}
              {activeTab === "profile" && <motion.div key="profile" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>{renderProfileTab()}</motion.div>}
              {activeTab === "favorites" && <motion.div key="favorites" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>{renderFavoritesTab()}</motion.div>}
              {activeTab === "applications" && (
                <motion.div key="applications" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col items-center justify-center py-20">
                  <div className="w-16 h-16 bg-[#10182c]/5 rounded-full flex items-center justify-center mb-4 text-[#10182c]"><FileText size={28} /></div>
                  <h2 className="text-[20px] font-bold text-[#10182c] font-['Montserrat',sans-serif] mb-2">No Active Applications</h2>
                  <p className="text-gray-500 text-[14px]">You haven't applied for any properties yet.</p>
                </motion.div>
              )}
              {activeTab === "reviews" && <motion.div key="reviews" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>{renderReviewsTab()}</motion.div>}
              {activeTab === "messages" && <motion.div key="messages" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>{renderMessagesTab()}</motion.div>}
              {activeTab === "matches" && <motion.div key="matches" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>{renderMatchesTab()}</motion.div>}
              {activeTab === "notifications" && <motion.div key="notifications" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>{renderNotificationsTab()}</motion.div>}
              {activeTab === "settings" && <motion.div key="settings" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>{renderSettingsTab()}</motion.div>}
              {activeTab === "compare" && (
                <motion.div key="compare" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                  <div>
                    <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">Compare Properties</h1>
                    <p className="text-gray-500 text-[14px] mt-1">Select up to 4 properties from Favorites or Matches to compare side-by-side.</p>
                  </div>
                  {compareList.length === 0 ? (
                    <div className="bg-white border border-dashed border-gray-200 rounded-[24px] p-16 flex flex-col items-center justify-center text-center shadow-sm">
                      <div className="w-16 h-16 bg-[#c85212]/10 rounded-full flex items-center justify-center mb-5">
                        <Scale size={28} className="text-[#c85212]" />
                      </div>
                      <p className="text-[#10182c] font-bold text-[18px] mb-2">No properties selected yet</p>
                      <p className="text-gray-500 text-[15px] max-w-md mb-8">
                        Go to your <strong>Favorites</strong> or <strong>Matches</strong> tab and click the <Scale size={14} className="inline" /> icon on any property to add it here.
                      </p>
                      <div className="flex gap-3">
                        <button onClick={() => setActiveTab("favorites")} className="bg-[#10182c] hover:bg-[#1a2642] text-white px-6 py-3 rounded-[12px] text-[14px] font-bold transition-colors">Go to Favorites</button>
                        <button onClick={() => setActiveTab("matches")} className="bg-white border border-gray-200 hover:border-[#c85212] text-[#10182c] px-6 py-3 rounded-[12px] text-[14px] font-bold transition-colors">Go to Matches</button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <p className="text-[14px] text-gray-500">{compareList.length} of 4 properties selected</p>
                        <div className="flex gap-2">
                          <button onClick={() => setCompareList([])} className="text-[13px] text-gray-400 hover:text-gray-600 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors">Clear all</button>
                          <button
                            disabled={compareList.length < 2}
                            onClick={() => setShowCompareTool(true)}
                            className="bg-[#c85212] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#a6430f] text-white font-bold text-[13px] px-5 py-2 rounded-[12px] transition-colors flex items-center gap-2"
                          >
                            <Scale size={14} /> Compare Now
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {compareList.map(prop => (
                          <div key={prop.id} className="bg-white rounded-[20px] p-2 border border-[#c85212]/30 ring-2 ring-[#c85212]/10 shadow-sm relative">
                            <div className="relative h-[120px] w-full rounded-[14px] overflow-hidden mb-3">
                              <ImageWithFallback src={prop.image} alt={prop.title} className="w-full h-full object-cover" />
                              <button onClick={() => toggleCompare(prop)} className="absolute top-2 right-2 w-6 h-6 bg-[#10182c]/80 rounded-full flex items-center justify-center text-white hover:bg-[#10182c]">
                                <X size={12} />
                              </button>
                            </div>
                            <h4 className="font-bold text-[#10182c] text-[13px] truncate">{prop.title}</h4>
                            <p className="text-[#c85212] font-bold text-[14px]">{prop.price}</p>
                          </div>
                        ))}
                        {compareList.length < 4 && (
                          <button onClick={() => setActiveTab("favorites")} className="border-2 border-dashed border-gray-200 rounded-[20px] flex flex-col items-center justify-center p-6 text-center hover:border-[#c85212]/40 hover:bg-[#c85212]/5 transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-[#c85212]/10 flex items-center justify-center mb-2 transition-colors">
                              <Plus size={18} className="text-gray-400 group-hover:text-[#c85212]" />
                            </div>
                            <p className="text-gray-400 group-hover:text-[#c85212] text-[12px] transition-colors">Add property</p>
                          </button>
                        )}
                      </div>
                      {compareList.length < 2 && (
                        <p className="text-center text-gray-400 text-[13px]">Add at least 2 properties to enable comparison</p>
                      )}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* Floating Compare Bar */}
      <AnimatePresence>
        {activeTab !== "compare" && (
          <CompareBar
            compareList={compareList}
            onRemove={(id) => setCompareList(prev => prev.filter(p => p.id !== id))}
            onOpen={() => setShowCompareTool(true)}
            onClear={() => setCompareList([])}
          />
        )}
      </AnimatePresence>

      {/* Full-screen Comparison Tool */}
      <AnimatePresence>
        {showCompareTool && compareList.length >= 2 && (
          <PropertyComparisonTool
            compareList={compareList}
            onRemove={(id) => {
              const next = compareList.filter(p => p.id !== id);
              setCompareList(next);
              if (next.length < 2) setShowCompareTool(false);
            }}
            onClear={() => { setCompareList([]); setShowCompareTool(false); }}
            onClose={() => setShowCompareTool(false)}
          />
        )}
      </AnimatePresence>

      {/* Landlord Reference Request Modal (Demo: Simulates form sent to landlord) */}
      <AnimatePresence>
        {showLandlordReferenceModal && selectedRentEntry !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm" onClick={() => setShowLandlordReferenceModal(false)}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[24px] overflow-hidden w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-[22px] text-[#10182c] font-['Montserrat',sans-serif]">Landlord Reference Request</h3>
                    <p className="text-gray-500 text-[13px] mt-1">
                      Demo: This simulates the form your landlord would receive via email
                    </p>
                  </div>
                  <button onClick={() => setShowLandlordReferenceModal(false)} className="text-gray-400 hover:text-gray-600">
                    <X size={24} />
                  </button>
                </div>
              </div>

              <div className="p-8 space-y-6">
                {/* Tenant Information (Auto-filled) */}
                <div className="bg-gray-50 rounded-[16px] p-6">
                  <h4 className="font-bold text-[15px] text-[#10182c] mb-4">Tenant Information</h4>
                  <div className="grid grid-cols-2 gap-4 text-[13px]">
                    <div>
                      <p className="text-gray-500 mb-1">Property Address</p>
                      <p className="font-bold text-[#10182c]">{rentHistory.find(h => h.id === selectedRentEntry)?.address}</p>
                      <p className="text-gray-600 text-[12px]">
                        {rentHistory.find(h => h.id === selectedRentEntry)?.city}, {rentHistory.find(h => h.id === selectedRentEntry)?.country}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Tenancy Period</p>
                      <p className="font-bold text-[#10182c]">
                        {rentHistory.find(h => h.id === selectedRentEntry)?.startDate} – {rentHistory.find(h => h.id === selectedRentEntry)?.endDate}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Monthly Rent</p>
                      <p className="font-bold text-[#10182c]">{rentHistory.find(h => h.id === selectedRentEntry)?.monthlyRent}</p>
                    </div>
                  </div>
                </div>

                {/* Reference Form */}
                <div className="space-y-5">
                  <div>
                    <label className="block text-[13px] font-bold text-[#10182c] mb-2">
                      Rent Payment History <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={landlordReferenceForm.paymentHistory}
                      onChange={(e) => setLandlordReferenceForm({ ...landlordReferenceForm, paymentHistory: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-[12px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent"
                    >
                      <option value="">Select payment history</option>
                      <option value="always-on-time">Always paid on time</option>
                      <option value="occasional-delays">Occasional minor delays (1-3 days)</option>
                      <option value="frequent-delays">Frequent delays (more than 3 days)</option>
                      <option value="late-payments">Consistently late payments</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-[#10182c] mb-2">
                      Property Condition & Maintenance <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={landlordReferenceForm.propertyCondition}
                      onChange={(e) => setLandlordReferenceForm({ ...landlordReferenceForm, propertyCondition: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-[12px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent"
                    >
                      <option value="">Select property condition</option>
                      <option value="excellent">Excellent - Property maintained in pristine condition</option>
                      <option value="good">Good - Well-maintained with normal wear and tear</option>
                      <option value="fair">Fair - Adequate maintenance, minor issues</option>
                      <option value="poor">Poor - Significant maintenance issues or damage</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-[#10182c] mb-2">
                      Lease Agreement Compliance <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={landlordReferenceForm.leaseCompliance}
                      onChange={(e) => setLandlordReferenceForm({ ...landlordReferenceForm, leaseCompliance: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-[12px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent"
                    >
                      <option value="">Select compliance level</option>
                      <option value="yes">Yes - Followed all lease terms</option>
                      <option value="mostly">Mostly - Minor violations addressed promptly</option>
                      <option value="no">No - Significant or repeated violations</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-[#10182c] mb-2">
                      Would you rent to this tenant again? <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={landlordReferenceForm.wouldRentAgain}
                      onChange={(e) => setLandlordReferenceForm({ ...landlordReferenceForm, wouldRentAgain: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-[12px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent"
                    >
                      <option value="">Select recommendation</option>
                      <option value="yes">Yes - Would gladly rent to them again</option>
                      <option value="maybe">Maybe - Would consider with reservations</option>
                      <option value="no">No - Would not rent to them again</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-[#10182c] mb-2">
                      Additional Comments
                    </label>
                    <textarea
                      value={landlordReferenceForm.overallComments}
                      onChange={(e) => setLandlordReferenceForm({ ...landlordReferenceForm, overallComments: e.target.value })}
                      placeholder="Any additional information that would help future landlords..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-[12px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent min-h-[100px] resize-y"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-[#10182c] mb-2">
                      Your Full Name (Signature) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={landlordReferenceForm.landlordSignature}
                      onChange={(e) => setLandlordReferenceForm({ ...landlordReferenceForm, landlordSignature: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-[12px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => {
                      const isFormValid =
                        landlordReferenceForm.paymentHistory &&
                        landlordReferenceForm.propertyCondition &&
                        landlordReferenceForm.leaseCompliance &&
                        landlordReferenceForm.wouldRentAgain &&
                        landlordReferenceForm.landlordSignature;

                      if (!isFormValid) {
                        alert("Please fill in all required fields");
                        return;
                      }

                      // Submit the reference
                      setRentHistory(rentHistory.map(h =>
                        h.id === selectedRentEntry ? {
                          ...h,
                          recommendationRequested: true,
                          recommendationReceived: true,
                          reference: {
                            ...landlordReferenceForm,
                            dateSubmitted: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
                          }
                        } : h
                      ));

                      // Reset form
                      setLandlordReferenceForm({
                        paymentHistory: "",
                        propertyCondition: "",
                        leaseCompliance: "",
                        wouldRentAgain: "",
                        overallComments: "",
                        landlordSignature: ""
                      });

                      setShowLandlordReferenceModal(false);
                      setSelectedRentEntry(null);
                    }}
                    className="flex-1 py-3.5 bg-[#c85212] text-white font-bold rounded-[12px] hover:bg-[#a6430f] transition-colors text-[14px]"
                  >
                    Submit Reference
                  </button>
                  <button
                    onClick={() => {
                      setShowLandlordReferenceModal(false);
                      setSelectedRentEntry(null);
                      setLandlordReferenceForm({
                        paymentHistory: "",
                        propertyCondition: "",
                        leaseCompliance: "",
                        wouldRentAgain: "",
                        overallComments: "",
                        landlordSignature: ""
                      });
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

      {/* View Reference Modal */}
      <AnimatePresence>
        {viewingReference !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm" onClick={() => setViewingReference(null)}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[24px] overflow-hidden w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-[22px] text-[#10182c] font-['Montserrat',sans-serif]">Landlord Reference</h3>
                    <p className="text-gray-500 text-[13px] mt-1">
                      Submitted on {rentHistory.find(h => h.id === viewingReference)?.reference?.dateSubmitted}
                    </p>
                  </div>
                  <button onClick={() => setViewingReference(null)} className="text-gray-400 hover:text-gray-600">
                    <X size={24} />
                  </button>
                </div>
              </div>

              <div className="p-8 space-y-6">
                {/* Property Details */}
                <div className="bg-gray-50 rounded-[16px] p-6">
                  <h4 className="font-bold text-[15px] text-[#10182c] mb-4">Property Details</h4>
                  <div className="grid grid-cols-2 gap-4 text-[13px]">
                    <div>
                      <p className="text-gray-500 mb-1">Address</p>
                      <p className="font-bold text-[#10182c]">{rentHistory.find(h => h.id === viewingReference)?.address}</p>
                      <p className="text-gray-600 text-[12px]">
                        {rentHistory.find(h => h.id === viewingReference)?.city}, {rentHistory.find(h => h.id === viewingReference)?.country}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Tenancy Period</p>
                      <p className="font-bold text-[#10182c]">
                        {rentHistory.find(h => h.id === viewingReference)?.startDate} – {rentHistory.find(h => h.id === viewingReference)?.endDate}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Landlord</p>
                      <p className="font-bold text-[#10182c]">{rentHistory.find(h => h.id === viewingReference)?.landlordName}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Monthly Rent</p>
                      <p className="font-bold text-[#10182c]">{rentHistory.find(h => h.id === viewingReference)?.monthlyRent}</p>
                    </div>
                  </div>
                </div>

                {/* Reference Details */}
                {(() => {
                  const reference = rentHistory.find(h => h.id === viewingReference)?.reference;
                  if (!reference) return null;

                  const getPaymentHistoryLabel = (value: string) => {
                    const map: Record<string, string> = {
                      "always-on-time": "Always paid on time",
                      "occasional-delays": "Occasional minor delays (1-3 days)",
                      "frequent-delays": "Frequent delays (more than 3 days)",
                      "late-payments": "Consistently late payments"
                    };
                    return map[value] || value;
                  };

                  const getPropertyConditionLabel = (value: string) => {
                    const map: Record<string, string> = {
                      "excellent": "Excellent - Property maintained in pristine condition",
                      "good": "Good - Well-maintained with normal wear and tear",
                      "fair": "Fair - Adequate maintenance, minor issues",
                      "poor": "Poor - Significant maintenance issues or damage"
                    };
                    return map[value] || value;
                  };

                  const getComplianceLabel = (value: string) => {
                    const map: Record<string, string> = {
                      "yes": "Yes - Followed all lease terms",
                      "mostly": "Mostly - Minor violations addressed promptly",
                      "no": "No - Significant or repeated violations"
                    };
                    return map[value] || value;
                  };

                  const getRentAgainLabel = (value: string) => {
                    const map: Record<string, string> = {
                      "yes": "Yes - Would gladly rent to them again",
                      "maybe": "Maybe - Would consider with reservations",
                      "no": "No - Would not rent to them again"
                    };
                    return map[value] || value;
                  };

                  return (
                    <div className="space-y-5">
                      <div>
                        <p className="text-[12px] font-bold text-gray-500 mb-2 uppercase tracking-wide">Rent Payment History</p>
                        <p className="text-[14px] text-[#10182c] font-medium">{getPaymentHistoryLabel(reference.paymentHistory)}</p>
                      </div>

                      <div>
                        <p className="text-[12px] font-bold text-gray-500 mb-2 uppercase tracking-wide">Property Condition & Maintenance</p>
                        <p className="text-[14px] text-[#10182c] font-medium">{getPropertyConditionLabel(reference.propertyCondition)}</p>
                      </div>

                      <div>
                        <p className="text-[12px] font-bold text-gray-500 mb-2 uppercase tracking-wide">Lease Agreement Compliance</p>
                        <p className="text-[14px] text-[#10182c] font-medium">{getComplianceLabel(reference.leaseCompliance)}</p>
                      </div>

                      <div>
                        <p className="text-[12px] font-bold text-gray-500 mb-2 uppercase tracking-wide">Would Rent Again</p>
                        <p className="text-[14px] text-[#10182c] font-medium">{getRentAgainLabel(reference.wouldRentAgain)}</p>
                      </div>

                      {reference.overallComments && (
                        <div>
                          <p className="text-[12px] font-bold text-gray-500 mb-2 uppercase tracking-wide">Additional Comments</p>
                          <p className="text-[14px] text-[#10182c] leading-relaxed bg-gray-50 p-4 rounded-[12px]">
                            "{reference.overallComments}"
                          </p>
                        </div>
                      )}

                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-[12px] font-bold text-gray-500 mb-1 uppercase tracking-wide">Landlord Signature</p>
                        <p className="text-[16px] font-['Montserrat',sans-serif] text-[#10182c] italic">{reference.landlordSignature}</p>
                      </div>
                    </div>
                  );
                })()}

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => {
                      setShowSendReferenceModal(true);
                    }}
                    className="flex-1 py-3.5 bg-[#c85212] text-white font-bold rounded-[12px] hover:bg-[#a6430f] transition-colors text-[14px] flex items-center justify-center gap-2"
                  >
                    <Send size={16} /> Send to Landlord
                  </button>
                  <button
                    onClick={() => setViewingReference(null)}
                    className="flex-1 py-3.5 bg-gray-100 text-gray-700 font-bold rounded-[12px] hover:bg-gray-200 transition-colors text-[14px]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Send Reference Email Modal */}
      <AnimatePresence>
        {showSendReferenceModal && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm" onClick={() => setShowSendReferenceModal(false)}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[24px] overflow-hidden w-full max-w-md p-8 relative shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-[22px] text-[#10182c] font-['Montserrat',sans-serif]">Send Reference</h3>
                <button onClick={() => setShowSendReferenceModal(false)} className="text-gray-400 hover:text-gray-600">
                  <X size={24} />
                </button>
              </div>

              <p className="text-gray-500 text-[14px] mb-6">
                Enter the email address of the prospective landlord or property manager you'd like to share this reference with.
              </p>

              <div className="mb-6">
                <label className="block text-[13px] font-bold text-[#10182c] mb-2">
                  Recipient Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                  placeholder="landlord@example.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-[12px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent"
                />
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    if (!recipientEmail || !recipientEmail.includes('@')) {
                      alert("Please enter a valid email address");
                      return;
                    }

                    setShowSendReferenceModal(false);
                    setShowReferenceSuccessModal(true);
                    setRecipientEmail("");
                  }}
                  className="w-full py-3.5 bg-[#c85212] text-white font-bold rounded-[12px] hover:bg-[#a6430f] transition-colors text-[14px] flex items-center justify-center gap-2"
                >
                  <Send size={16} /> Send Reference
                </button>
                <button
                  onClick={() => {
                    setShowSendReferenceModal(false);
                    setRecipientEmail("");
                  }}
                  className="w-full py-3.5 bg-gray-100 text-gray-700 font-bold rounded-[12px] hover:bg-gray-200 transition-colors text-[14px]"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Reference Sent Success Modal */}
      <AnimatePresence>
        {showReferenceSuccessModal && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm" onClick={() => setShowReferenceSuccessModal(false)}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[24px] overflow-hidden w-full max-w-md p-8 relative shadow-2xl text-center"
            >
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                <Check size={32} />
              </div>
              <h3 className="font-bold text-[22px] text-[#10182c] mb-2 font-['Montserrat',sans-serif]">Reference Sent!</h3>
              <p className="text-gray-500 text-[14px] mb-8 leading-relaxed">
                Your landlord reference has been successfully sent. The recipient will receive it shortly and can review your rental history.
              </p>

              <button
                onClick={() => {
                  setShowReferenceSuccessModal(false);
                  setViewingReference(null);
                }}
                className="w-full py-3.5 bg-[#c85212] text-white font-bold rounded-[12px] hover:bg-[#a6430f] transition-colors text-[14px]"
              >
                Done
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Delete Account Modal */}
      <AnimatePresence>
        {showDeleteModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm" onClick={() => setShowDeleteModal(false)}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[24px] overflow-hidden w-full max-w-md p-8 relative shadow-2xl text-center"
            >
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-red-600 mx-auto mb-4">
                <Shield size={28} />
              </div>
              <h3 className="font-bold text-[22px] text-[#10182c] mb-2 font-['Montserrat',sans-serif]">Delete Account?</h3>
              <p className="text-gray-500 text-[14px] mb-8 leading-relaxed">
                This action cannot be undone. All your saved properties, messages, and profile data will be permanently deleted. Are you absolutely sure?
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    setShowDeleteModal(false);
                    // Add redirect logic here if applicable
                  }}
                  className="w-full py-3.5 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors text-[14px]"
                >
                  Yes, delete my account
                </button>
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="w-full py-3.5 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors text-[14px]"
                >
                  Cancel, keep my account
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
