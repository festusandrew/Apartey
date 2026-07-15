import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  LayoutDashboard, User, Building2, Users, TrendingUp, Settings,
  Bell, ChevronDown, Search, Plus, Eye, MessageSquare, UserPlus,
  CheckCircle, Clock, XCircle, Mail, Phone, MapPin, Calendar,
  FileText, Upload, Download, Edit, Trash2, Filter, MoreVertical,
  Star, Award, Gift, Share2, Home, Lock, Unlock, ArrowRight,
  BarChart3, PieChart, Activity, DollarSign, TrendingDown,
  AlertCircle, Check, X, ChevronRight, ChevronLeft, RefreshCw, LogOut, ClipboardList
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { toast } from "sonner@2.0.3";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart as RechartsPieChart, Pie, Cell } from "recharts";
import { ProfileSwitcherModal } from "./ProfileSwitcherModal";
import { GetReviewsModal } from "./GetReviewsModal";
import { RenterBoardPreview } from "./RenterBoardPreview";

export function PropertyManagerProfilePage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleRoleSwitch = (roleId: string) => {
    const roleRoutes: Record<string, { path: string; name: string }> = {
      "tenants-buyers": { path: "/renter", name: "Renter" },
      "homeowners-sellers": { path: "/homeowner", name: "Homeowner" },
      "agents-developers": { path: "/agent", name: "Agent" },
      "property-manager": { path: "/property-manager", name: "Property Manager" },
      "admin": { path: "/admin", name: "Administrator" },
    };

    const role = roleRoutes[roleId];
    if (role) {
      toast.success(`Switched to ${role.name} profile`, {
        description: "You now have access to role-specific features",
      });
      navigate(role.path);
    }
    setProfileModalOpen(false);
  };

  // Dashboard Stats Data
  const dashboardStats = {
    totalProperties: 22,
    occupancyRate: 2,
    averageRating: 54,
    teamMembers: "15 mins"
  };

  // Performance Overview Data
  const performanceData = [
    { month: "Jan", views: 5000, enquiries: 10000 },
    { month: "Feb", views: 8000, enquiries: 6000 },
    { month: "Mar", views: 12000, enquiries: 8000 },
    { month: "Apr", views: 10000, enquiries: 6000 },
    { month: "May", views: 15000, enquiries: 6000 },
    { month: "Jun", views: 16000, enquiries: 8000 },
    { month: "Jul", views: 18000, enquiries: 6000 },
    { month: "Aug", views: 20000, enquiries: 6000 },
    { month: "Sep", views: 18000, enquiries: 8000 },
    { month: "Oct", views: 14000, enquiries: 4000 },
    { month: "Nov", views: 12000, enquiries: 4000 },
    { month: "Dec", views: 8000, enquiries: 4000 }
  ];

  // Recent Properties Data
  const recentProperties = [
    { id: 1, name: "Sunset Villa", location: "Banana Island", status: "ACTIVE", price: "£3,200/mo", initials: "ML" },
    { id: 2, name: "Ocean View Apartment", location: "Ikoyi", status: "ACTIVE", price: "£4,000/mo", initials: "NL" },
    { id: 3, name: "Mountain Retreat", location: "Lagos Mainland", status: "ACTIVE", price: "£3,800/mo", initials: "OL" }
  ];

  // Portfolio Management Data
  const [portfolioFilter, setPortfolioFilter] = useState("All Listings");
  const [getReviewsProperty, setGetReviewsProperty] = useState<{ id: number | string; title: string; location?: string } | null>(null);
  const portfolioListings = [
    {
      id: 1,
      title: "Modern 2-Bed Flat in...",
      price: "£2,500/mo",
      location: "Islington",
      status: "LIVE",
      views: 245,
      clicks: 112,
      enquiries: 14,
      image: "https://images.unsplash.com/photo-1706808849802-8f876ade0d1f?w=300&q=80"
    },
    {
      id: 2,
      title: "Spacious Studio in C...",
      price: "£1,800/mo",
      location: "Camden",
      status: "HIDDEN",
      views: 432,
      clicks: 230,
      enquiries: 32,
      image: "https://images.unsplash.com/photo-1664813954641-1ffcb7b55fd1?w=300&q=80"
    },
    {
      id: 3,
      title: "Modern 2-Bed Flat in...",
      price: "£2,500/mo",
      location: "Islington",
      status: "LIVE",
      views: 145,
      clicks: 82,
      enquiries: 11,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300&q=80"
    }
  ];

  // Enquiries Data
  const [enquiries, setEnquiries] = useState([
    {
      id: 1,
      name: "Nnaemeka Okechukwu",
      property: "2 Pankshin Road",
      message: "Hi, I'd like to book a viewing this weekend...",
      time: "10m ago",
      avatar: ""
    },
    {
      id: 2,
      name: "Nnaemeka Okechukwu",
      property: "2 Pankshin Road",
      message: "Hi, I'd like to book a viewing this weekend...",
      time: "10m ago",
      avatar: ""
    },
    {
      id: 3,
      name: "Nnaemeka Okechukwu",
      property: "2 Pankshin Road",
      message: "Hi, I'd like to book a viewing this weekend...",
      time: "10m ago",
      avatar: ""
    }
  ]);

  // Lead Tracker Data
  const leadTracker = [
    { id: 1, renter: "Peter Akin", property: "Sunset Villa", status: "New", broker: "Tunde John" },
    { id: 2, renter: "Maya Lin", property: "Oceanview Retreat", status: "Offer Made", broker: "Sarah Kahn" },
    { id: 3, renter: "Liam Chen", property: "Mountain Lodge", status: "Inactive", broker: "Raj Patel" },
    { id: 4, renter: "Peter Akin", property: "Sunset Villa", status: "New", broker: "Tunde John" },
    { id: 5, renter: "Maya Lin", property: "Oceanview Retreat", status: "Offer Made", broker: "Sarah Kahn" },
    { id: 6, renter: "Liam Chen", property: "Mountain Lodge", status: "Inactive", broker: "Raj Patel" },
    { id: 7, renter: "Peter Akin", property: "Sunset Villa", status: "New", broker: "Tunde John" }
  ];

  // Pre-Screened Queue Data
  const [prescreenedRenters, setPrescreenedRenters] = useState([
    {
      id: 1,
      name: "Ese Johnson",
      role: "Senior Product Manager",
      score: 98,
      income: "£2,000/mo",
      verifications: { id: true, income: true, employment: true, phone: true, email: true }
    },
    {
      id: 2,
      name: "Lila Chen",
      role: "UI/UX Designer",
      score: 92,
      income: "£2,800/mo",
      verifications: { id: true, income: true, employment: true, phone: true, email: true }
    },
    {
      id: 3,
      name: "Mark Patel",
      role: "Software Engineer",
      score: 85,
      income: "£4,250/mo",
      verifications: { id: true, income: true, employment: true, phone: true, email: true }
    },
    {
      id: 4,
      name: "Sara Kim",
      role: "Data Analyst",
      score: 90,
      income: "£3,500/mo",
      verifications: { id: true, income: true, employment: true, phone: true, email: true }
    }
  ]);

  const [selectedRenter, setSelectedRenter] = useState(prescreenedRenters[1]);

  // Property Management Data
  const managedProperties = [
    { id: 1, name: "Sunset Villa", location: "Banana Island", status: "ACTIVE", price: "£3,200/mo", initials: "ML" },
    { id: 2, name: "Oceanview Apartments", location: "Coral Beach", status: "ACTIVE", price: "£2,800/mo", initials: "ML" },
    { id: 3, name: "Mountain Retreat", location: "Pine Hill", status: "ACTIVE", price: "£2,500/mo", initials: "ML" },
    { id: 4, name: "City Loft", location: "Downtown", status: "ACTIVE", price: "£3,000/mo", initials: "ML" },
    { id: 5, name: "Riverfront Condo", location: "Willow Bend", status: "ACTIVE", price: "£2,950/mo", initials: "ML" }
  ];

  // Rewards Data
  const rewardsData = {
    totalReferrals: 45,
    qualifiedReferrals: 4,
    referralHistory: [
      { id: 1, name: "Joy Johnson", date: "2 days ago", status: "Approved", keys: "+500 keys" },
      { id: 2, name: "Mark Smith", date: "1 day ago", status: "Pending", keys: "No keys earned yet" },
      { id: 3, name: "Emily Davis", date: "3 days ago", status: "Approved", keys: "+500 keys" },
      { id: 4, name: "Michael Brown", date: "6 hours ago", status: "Signed up", keys: "No keys earned yet" },
      { id: 5, name: "Joy Johnson", date: "2 days ago", status: "Rejected", keys: "No keys earned yet" }
    ]
  };

  // Analytics Data
  const analyticsData = {
    totalViews: 4321,
    totalViewsChange: "+12% this week",
    engagement: 240,
    engagementDesc: "Saves & Enquiries",
    averageReview: 4.2,
    reviewCount: 12,
    marketComparison: "Above Average"
  };

  const maintenanceRequests = [
    { month: "Jan", open: 5000, resolved: 5000 },
    { month: "Feb", open: 10000, resolved: 5000 },
    { month: "Mar", open: 20000, resolved: 5000 },
    { month: "Apr", open: 15000, resolved: 5000 },
    { month: "May", open: 20000, resolved: 5000 }
  ];

  const rentRenewals = [
    { month: "Jan", renewing: 15000, leaving: 5000 },
    { month: "Feb", renewing: 8000, leaving: 2000 },
    { month: "Mar", renewing: 12000, leaving: 3000 },
    { month: "Apr", renewing: 10000, leaving: 4000 },
    { month: "May", renewing: 15000, leaving: 3000 },
    { month: "Jun", renewing: 12000, leaving: 2000 }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-['Montserrat',sans-serif] font-bold text-[32px] text-[#10182c]">Dashboard</h1>
          <p className="text-[#6a7282] text-[16px] font-['Mulish',sans-serif] mt-1">Welcome back, Eleanor. Here's your portfolio overview.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 border border-[#c85212] text-[#c85212] rounded-[12px] font-bold text-[14px] hover:bg-[#c85212]/5 transition-colors">
            Manage Team →
          </button>
          <button className="px-5 py-2.5 bg-[#c85212] text-white rounded-[12px] font-bold text-[14px] hover:bg-[#a6430f] transition-colors">
            View Portfolio →
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-5">
        <div className="bg-white rounded-[20px] p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gray-100 rounded-[12px] flex items-center justify-center">
              <Building2 className="w-6 h-6 text-[#10182c]" />
            </div>
            <div>
              <p className="text-[#6a7282] text-[13px]">Total Properties</p>
              <p className="font-bold text-[28px] text-[#10182c]">{dashboardStats.totalProperties}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[20px] p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gray-100 rounded-[12px] flex items-center justify-center">
              <Home className="w-6 h-6 text-[#10182c]" />
            </div>
            <div>
              <p className="text-[#6a7282] text-[13px]">Occupancy Rate</p>
              <p className="font-bold text-[28px] text-[#10182c]">{dashboardStats.occupancyRate}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[20px] p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-[#c85212]/10 rounded-[12px] flex items-center justify-center">
              <Star className="w-6 h-6 text-[#c85212]" />
            </div>
            <div>
              <p className="text-[#6a7282] text-[13px]">Average Rating</p>
              <p className="font-bold text-[28px] text-[#10182c]">{dashboardStats.averageRating}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[20px] p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-blue-50 rounded-[12px] flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-[#6a7282] text-[13px]">Team Members</p>
              <p className="font-bold text-[28px] text-[#10182c]">{dashboardStats.teamMembers}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Overview Chart */}
      <div className="bg-white rounded-[20px] p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-[20px] text-[#10182c]">Performance Overview</h3>
          <select className="px-4 py-2 border border-gray-200 rounded-[10px] text-[14px]">
            <option>Monthly</option>
            <option>Weekly</option>
            <option>Yearly</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#6a7282" />
            <YAxis stroke="#6a7282" />
            <Tooltip />
            <Legend />
            <Bar dataKey="views" fill="#10182c" name="Views" />
            <Bar dataKey="enquiries" fill="#c85212" name="Enquiries" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Properties */}
      <div className="bg-white rounded-[20px] p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-[20px] text-[#10182c]">Recent Properties</h3>
          <button className="text-[#c85212] text-[14px] font-bold hover:underline">View all</button>
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-4 gap-4 text-[12px] font-bold text-[#6a7282] pb-2 border-b border-gray-100">
            <div>PROPERTY</div>
            <div>LOCATION</div>
            <div>STATUS</div>
            <div>PRICE</div>
          </div>
          {recentProperties.map((property) => (
            <div key={property.id} className="grid grid-cols-4 gap-4 items-center py-3 border-b border-gray-50 hover:bg-gray-50 rounded-[8px] px-2 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-[8px] flex items-center justify-center font-bold text-[14px]">
                  {property.initials}
                </div>
                <span className="font-medium text-[14px] text-[#10182c]">{property.name}</span>
              </div>
              <div className="text-[14px] text-[#6a7282]">{property.location}</div>
              <div>
                <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[12px] font-bold">
                  {property.status}
                </span>
              </div>
              <div className="font-bold text-[14px] text-[#10182c]">{property.price}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <span className="text-[13px] text-[#6a7282]">Showing 1-5 of 10</span>
          <div className="flex gap-2">
            <button className="p-2 border border-gray-200 rounded-[8px] hover:bg-gray-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-2 border border-gray-200 rounded-[8px] hover:bg-gray-50">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPortfolioManagement = () => (
    <div className="space-y-6">
      <div>
        <h1 className="font-['Montserrat',sans-serif] font-bold text-[32px] text-[#10182c]">My Portfolio</h1>
        <p className="text-[#6a7282] text-[16px] font-['Mulish',sans-serif] mt-1">Manage your active and expired listings.</p>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        {["All Listings", "Active Listings", "Inactive Listings", "Most Viewed Listings", "Most Enquiries Listings"].map((filter) => (
          <button
            key={filter}
            onClick={() => setPortfolioFilter(filter)}
            className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-all ${
              portfolioFilter === filter
                ? "bg-white text-[#10182c] font-bold border-b-2 border-[#c85212]"
                : "text-[#6a7282] hover:text-[#10182c]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-3 gap-5">
        {portfolioListings.map((listing) => (
          <div key={listing.id} className="bg-white rounded-[20px] overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="relative h-[200px]">
              <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3">
                <span className={`px-3 py-1 rounded-full text-[12px] font-bold ${
                  listing.status === "LIVE" ? "bg-green-500 text-white" : "bg-gray-500 text-white"
                }`}>
                  {listing.status}
                </span>
              </div>
              <div className="absolute top-3 right-3 flex gap-2">
                <button className="p-2 bg-white/90 rounded-full hover:bg-white">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 bg-white/90 rounded-full hover:bg-white">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-[18px] text-[#10182c] mb-2">{listing.title}</h3>
              <p className="text-[#c85212] font-bold text-[16px] mb-4">{listing.price}</p>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="text-center">
                  <p className="text-[#6a7282] text-[11px]">Views</p>
                  <p className="font-bold text-[14px] text-[#10182c]">{listing.views}</p>
                </div>
                <div className="text-center border-x border-gray-100">
                  <p className="text-[#6a7282] text-[11px]">Clicks</p>
                  <p className="font-bold text-[14px] text-[#10182c]">{listing.clicks}</p>
                </div>
                <div className="text-center">
                  <p className="text-[#6a7282] text-[11px]">Enquiries</p>
                  <p className="font-bold text-[14px] text-[#10182c]">{listing.enquiries}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className={`flex-1 py-2 rounded-[10px] text-[13px] font-bold transition-colors ${
                  listing.status === "LIVE"
                    ? "bg-gray-100 text-[#10182c] hover:bg-gray-200"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}>
                  {listing.status === "LIVE" ? <><Unlock className="w-3 h-3 inline mr-1" /> LIVE</> : <><Lock className="w-3 h-3 inline mr-1" /> HIDDEN</>}
                </button>
                <button
                  onClick={() => setGetReviewsProperty({ id: listing.id, title: listing.title })}
                  className="flex items-center gap-1.5 bg-[#fbff79] hover:bg-[#f0f550] text-[#10182c] text-[11px] font-bold px-3 py-2 rounded-[10px] transition-colors shrink-0 whitespace-nowrap"
                >
                  <Star className="w-3 h-3 fill-[#10182c]" /> Get Reviews
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEnquiries = () => (
    <div className="space-y-6">
      <div>
        <h1 className="font-['Montserrat',sans-serif] font-bold text-[32px] text-[#10182c]">Enquiries</h1>
        <p className="text-[#6a7282] text-[16px] font-['Mulish',sans-serif] mt-1">Manage your leads and convert them faster.</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Incoming Enquiries */}
        <div className="col-span-2 bg-white rounded-[20px] p-6 border border-gray-100">
          <h3 className="font-bold text-[20px] text-[#10182c] mb-5">Incoming Enquiries</h3>
          <div className="space-y-4">
            {enquiries.map((enquiry) => (
              <div key={enquiry.id} className="border border-gray-100 rounded-[16px] p-5 hover:border-[#c85212]/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c85212] rounded-full flex items-center justify-center text-white font-bold">
                    {enquiry.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-[16px] text-[#10182c]">{enquiry.name}</h4>
                      <span className="text-[#6a7282] text-[13px]">{enquiry.time}</span>
                    </div>
                    <p className="text-[#6a7282] text-[14px] mb-1">{enquiry.property}</p>
                    <p className="text-[#10182c] text-[14px] mb-4">{enquiry.message}</p>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-white border border-gray-200 rounded-[10px] text-[14px] font-bold hover:bg-gray-50">
                        Reply
                      </button>
                      <button className="px-4 py-2 bg-[#10182c] text-white rounded-[10px] text-[14px] font-bold hover:bg-[#1a2642]">
                        Assign
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Tracker */}
        <div className="bg-white rounded-[20px] p-6 border border-gray-100">
          <h3 className="font-bold text-[20px] text-[#10182c] mb-5">Lead Tracker</h3>
          <div className="space-y-3">
            <div className="grid grid-cols-4 gap-2 text-[11px] font-bold text-[#6a7282] pb-2 border-b border-gray-100">
              <div>RENTER</div>
              <div>PROPERTY</div>
              <div>STATUS</div>
              <div>BROKER</div>
            </div>
            {leadTracker.slice(0, 7).map((lead) => (
              <div key={lead.id} className="grid grid-cols-4 gap-2 text-[12px] py-2 hover:bg-gray-50 rounded-[6px] px-1">
                <div className="text-[#10182c]">{lead.renter}</div>
                <div className="text-[#6a7282]">{lead.property}</div>
                <div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    lead.status === "New" ? "bg-blue-50 text-blue-600" :
                    lead.status === "Offer Made" ? "bg-orange-50 text-orange-600" :
                    "bg-gray-100 text-gray-600"
                  }`}>
                    {lead.status}
                  </span>
                </div>
                <div className="text-[#6a7282]">{lead.broker}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderPrescreenedQueue = () => (
    <div className="space-y-6">
      <div>
        <h1 className="font-['Montserrat',sans-serif] font-bold text-[32px] text-[#10182c]">Pre-screened Renter Queue</h1>
        <p className="text-[#6a7282] text-[16px] font-['Mulish',sans-serif] mt-1">Access our curated list of prospective renters. These applicants have been vetted with verified ID, work, and income data, saving you time.</p>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search by name or location..."
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-[12px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Renter List */}
        <div className="bg-white rounded-[20px] p-6 border border-gray-100">
          <p className="text-[#6a7282] text-[13px] mb-4">{prescreenedRenters.length} applicants found</p>
          <div className="space-y-3">
            {prescreenedRenters.map((renter) => (
              <div
                key={renter.id}
                onClick={() => setSelectedRenter(renter)}
                className={`p-4 rounded-[12px] cursor-pointer transition-all ${
                  selectedRenter?.id === renter.id ? "bg-[#c85212]/10 border-2 border-[#c85212]" : "border border-gray-100 hover:border-[#c85212]/30"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-[#10182c] rounded-full flex items-center justify-center text-white font-bold text-[14px]">
                    {renter.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[14px] text-[#10182c]">{renter.name}</h4>
                    <p className="text-[#6a7282] text-[12px]">{renter.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[16px] text-[#c85212]">{renter.score}%</p>
                    <p className="text-[#6a7282] text-[11px]">Score</p>
                  </div>
                </div>
                <p className="text-[#6a7282] text-[12px]">{renter.income}</p>
                <div className="flex gap-1 mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Renter Details */}
        {selectedRenter && (
          <div className="col-span-2 space-y-5">
            <div className="bg-white rounded-[20px] p-6 border border-gray-100">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#10182c] rounded-full flex items-center justify-center text-white font-bold text-[20px]">
                    {selectedRenter.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-bold text-[24px] text-[#10182c]">{selectedRenter.name}</h3>
                    <p className="text-[#6a7282] text-[14px]">{selectedRenter.role}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-5 py-2.5 border border-[#c85212] text-[#c85212] rounded-[12px] font-bold text-[14px] hover:bg-[#c85212]/5">
                    Message Renter
                  </button>
                  <button className="px-5 py-2.5 bg-[#c85212] text-white rounded-[12px] font-bold text-[14px] hover:bg-[#a6430f]">
                    Invite to Apply
                  </button>
                </div>
              </div>

              {/* Verification Status */}
              <div className="mb-6">
                <h4 className="font-bold text-[18px] text-[#10182c] mb-4">Verification Status</h4>
                <div className="flex gap-6">
                  {[
                    { key: 'id', label: 'ID' },
                    { key: 'income', label: 'Proof of Income' },
                    { key: 'employment', label: 'Employment' },
                    { key: 'phone', label: 'Phone Number' },
                    { key: 'email', label: 'Email Address' }
                  ].map(({ key, label }) => (
                    <div key={key} className="text-center">
                      <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-2 mx-auto">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      </div>
                      <p className="text-[#10182c] text-[12px] font-medium">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-[#6a7282] text-[13px] mb-1">PREFERRED LOCATION</p>
                  <p className="font-bold text-[18px] text-[#10182c]">Tallin, Dublin</p>
                </div>
                <div>
                  <p className="text-[#6a7282] text-[13px] mb-1">MOVE IN DATE</p>
                  <p className="font-bold text-[18px] text-[#10182c]">Sep 1, 2026</p>
                </div>
                <div>
                  <p className="text-[#6a7282] text-[13px] mb-1">BUDGET</p>
                  <p className="font-bold text-[20px] text-green-600">£2,000</p>
                </div>
                <div>
                  <p className="text-[#6a7282] text-[13px] mb-1">LEGAL STATUS</p>
                  <p className="font-bold text-[18px] text-[#10182c]">Bluecard EU</p>
                </div>
              </div>
            </div>

            {/* Qualified Properties */}
            <div className="bg-white rounded-[20px] p-6 border border-gray-100">
              <h4 className="font-bold text-[18px] text-[#10182c] mb-4">Qualified Properties</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border border-gray-100 rounded-[12px] hover:border-[#c85212]/30 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Home className="w-5 h-5 text-[#6a7282]" />
                    <div>
                      <p className="font-medium text-[14px] text-[#10182c]">Sunset Villa</p>
                      <p className="text-green-600 font-bold text-[14px]">£2,000</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#6a7282]" />
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-100 rounded-[12px] hover:border-[#c85212]/30 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Home className="w-5 h-5 text-[#6a7282]" />
                    <div>
                      <p className="font-medium text-[14px] text-[#10182c]">Palm Villa</p>
                      <p className="text-green-600 font-bold text-[14px]">£3,000</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#6a7282]" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderPropertyManagement = () => (
    <div className="space-y-6">
      <div>
        <h1 className="font-['Montserrat',sans-serif] font-bold text-[32px] text-[#10182c]">Property Management</h1>
        <p className="text-[#6a7282] text-[16px] font-['Mulish',sans-serif] mt-1">Maintenance tracking, rent collection, auto-reminders, and Document Vault.</p>
      </div>

      <div className="bg-white rounded-[20px] p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-[20px] text-[#10182c]">My Properties</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search Properties..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-[10px] text-[14px] w-[300px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-4 gap-4 text-[12px] font-bold text-[#6a7282] pb-2 border-b border-gray-100">
            <div>PROPERTY</div>
            <div>LOCATION</div>
            <div>STATUS</div>
            <div>PRICE</div>
          </div>
          {managedProperties.map((property) => (
            <div key={property.id} className="grid grid-cols-4 gap-4 items-center py-3 border-b border-gray-50 hover:bg-gray-50 rounded-[8px] px-2 transition-colors group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-[8px] flex items-center justify-center font-bold text-[14px]">
                  {property.initials}
                </div>
                <span className="font-medium text-[14px] text-[#10182c]">{property.name}</span>
              </div>
              <div className="text-[14px] text-[#6a7282]">{property.location}</div>
              <div>
                <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[12px] font-bold">
                  {property.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-[14px] text-[#10182c]">{property.price}</span>
                <ChevronRight className="w-5 h-5 text-[#6a7282] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <span className="text-[13px] text-[#6a7282]">Showing 1-5 of 10</span>
          <div className="flex gap-2">
            <button className="p-2 border border-gray-200 rounded-[8px] hover:bg-gray-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-2 border border-gray-200 rounded-[8px] hover:bg-gray-50">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRewards = () => (
    <div className="space-y-6">
      <div>
        <h1 className="font-['Montserrat',sans-serif] font-bold text-[32px] text-[#10182c]">My Rewards</h1>
        <p className="text-[#6a7282] text-[16px] font-['Mulish',sans-serif] mt-1">Invite friends to Apartey and earn keys. Use your keys to redeem exclusive rewards.</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Stats */}
        <div className="bg-white rounded-[20px] p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-6 h-6 text-[#c85212]" />
            <p className="text-[#6a7282] text-[14px]">TOTAL REFERRALS</p>
          </div>
          <p className="font-bold text-[32px] text-[#10182c]">{rewardsData.totalReferrals}</p>
        </div>

        <div className="bg-white rounded-[20px] p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <Award className="w-6 h-6 text-[#c85212]" />
            <p className="text-[#6a7282] text-[14px]">QUALIFIED REFERRALS</p>
          </div>
          <p className="font-bold text-[32px] text-[#10182c]">{rewardsData.qualifiedReferrals}</p>
        </div>

        <div className="bg-[#10182c] rounded-[20px] p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Gift className="w-6 h-6 text-[#fbff79]" />
            <p className="text-white/80 text-[14px]">Refer & Earn</p>
          </div>
          <p className="text-white/90 text-[14px] mb-4">Earn cinema tickets, tees & more</p>
          <button onClick={() => navigate("/earn")} className="w-full py-2.5 bg-[#fbff79] text-[#10182c] rounded-[10px] font-bold text-[14px] hover:bg-[#fbff79]/90">
            Get Link
          </button>
        </div>
      </div>

      {/* Referral History */}
      <div className="bg-white rounded-[20px] p-6 border border-gray-100">
        <div className="flex items-center gap-4 mb-6 border-b border-gray-100">
          <button className="pb-3 font-bold text-[15px] text-[#6a7282]">Redeem Rewards</button>
          <button className="pb-3 font-bold text-[15px] text-[#10182c] border-b-2 border-[#c85212]">History</button>
        </div>

        <div className="space-y-3">
          {rewardsData.referralHistory.map((referral) => (
            <div key={referral.id} className="flex items-center justify-between py-3 border-b border-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="font-medium text-[14px] text-[#10182c]">{referral.name}</p>
                  <p className="text-[#6a7282] text-[12px]">{referral.date}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`px-3 py-1 rounded-full text-[12px] font-bold ${
                  referral.status === "Approved" ? "bg-green-50 text-green-600" :
                  referral.status === "Pending" ? "bg-orange-50 text-orange-600" :
                  referral.status === "Signed up" ? "bg-blue-50 text-blue-600" :
                  "bg-red-50 text-red-600"
                }`}>
                  {referral.status}
                </span>
                <p className="text-[#6a7282] text-[12px] mt-1">{referral.keys}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-['Montserrat',sans-serif] font-bold text-[32px] text-[#10182c]">Analytics</h1>
          <p className="text-[#6a7282] text-[16px] font-['Mulish',sans-serif] mt-1">Firm-wide portfolio intelligence - Admin only</p>
        </div>
        <button className="px-5 py-2.5 bg-white border border-gray-200 rounded-[12px] font-bold text-[14px] hover:bg-gray-50 flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-4 gap-5">
        <div className="bg-white rounded-[20px] p-6 border border-gray-100">
          <p className="text-[#6a7282] text-[13px] mb-2">Total Views</p>
          <p className="font-bold text-[28px] text-[#10182c]">{analyticsData.totalViews.toLocaleString()}</p>
          <p className="text-green-600 text-[12px] mt-1">{analyticsData.totalViewsChange}</p>
        </div>
        <div className="bg-white rounded-[20px] p-6 border border-gray-100">
          <p className="text-[#6a7282] text-[13px] mb-2">Engagement</p>
          <p className="font-bold text-[28px] text-[#10182c]">{analyticsData.engagement}</p>
          <p className="text-[#6a7282] text-[12px] mt-1">{analyticsData.engagementDesc}</p>
        </div>
        <div className="bg-white rounded-[20px] p-6 border border-gray-100">
          <p className="text-[#6a7282] text-[13px] mb-2">Average Review</p>
          <p className="font-bold text-[28px] text-[#10182c]">{analyticsData.averageReview}</p>
          <p className="text-[#6a7282] text-[12px] mt-1">Based on {analyticsData.reviewCount} reviews</p>
        </div>
        <div className="bg-white rounded-[20px] p-6 border border-gray-100">
          <p className="text-[#6a7282] text-[13px] mb-2">Market Comparison</p>
          <p className="font-bold text-[28px] text-green-600">{analyticsData.marketComparison}</p>
          <p className="text-[#6a7282] text-[12px] mt-1">In your location</p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-[20px] p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[18px] text-[#10182c]">Maintenance request</h3>
            <select className="px-3 py-1.5 border border-gray-200 rounded-[8px] text-[13px]">
              <option>Monthly</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={maintenanceRequests}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6a7282" />
              <YAxis stroke="#6a7282" />
              <Tooltip />
              <Legend />
              <Bar dataKey="open" fill="#10182c" name="Open" stackId="a" />
              <Bar dataKey="resolved" fill="#16a34a" name="Resolved" stackId="a" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-[20px] p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[18px] text-[#10182c]">Rent Renewals</h3>
            <select className="px-3 py-1.5 border border-gray-200 rounded-[8px] text-[13px]">
              <option>Monthly</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={rentRenewals}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6a7282" />
              <YAxis stroke="#6a7282" />
              <Tooltip />
              <Legend />
              <Bar dataKey="renewing" fill="#c85212" name="Renewing" />
              <Bar dataKey="leaving" fill="#10182c" name="Leaving" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Actionable Insights */}
      <div className="bg-white rounded-[20px] p-6 border border-gray-100">
        <h3 className="font-bold text-[20px] text-[#10182c] mb-5">Actionable Insights</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="p-5 bg-blue-50 rounded-[16px] border border-blue-100">
            <TrendingUp className="w-6 h-6 text-blue-600 mb-3" />
            <h4 className="font-bold text-[15px] text-[#10182c] mb-2">Pricing Opportunity</h4>
            <p className="text-[13px] text-[#6a7282]">You are priced 12% higher than similar homes. Consider adjusting slightly.</p>
          </div>
          <div className="p-5 bg-cyan-50 rounded-[16px] border border-cyan-100">
            <Users className="w-6 h-6 text-cyan-600 mb-3" />
            <h4 className="font-bold text-[15px] text-[#10182c] mb-2">Audience Spike</h4>
            <p className="text-[13px] text-[#6a7282]">Your listing performs best on weekends. Recommend boosting on Friday.</p>
          </div>
          <div className="p-5 bg-pink-50 rounded-[16px] border border-pink-100">
            <TrendingDown className="w-6 h-6 text-pink-600 mb-3" />
            <h4 className="font-bold text-[15px] text-[#10182c] mb-2">Drop-off</h4>
            <p className="text-[13px] text-[#6a7282]">High views, low saves. Consider updating listing photos.</p>
          </div>
          <div className="p-5 bg-green-50 rounded-[16px] border border-green-100">
            <BarChart3 className="w-6 h-6 text-green-600 mb-3" />
            <h4 className="font-bold text-[15px] text-[#10182c] mb-2">Sentiment Analysis</h4>
            <p className="text-[13px] text-[#6a7282]">Negative feedback is mostly about noise. Address this in description.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-['Montserrat',sans-serif] font-bold text-[32px] text-[#10182c]">Property Firm Profile</h1>
          <p className="text-[#6a7282] text-[16px] font-['Mulish',sans-serif] mt-1">This is how your firm appears to owners and renters.</p>
        </div>
        <button className="px-5 py-2.5 bg-white border border-gray-200 rounded-[12px] font-bold text-[14px] hover:bg-gray-50 flex items-center gap-2">
          <Edit className="w-4 h-4" />
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Company Info */}
        <div className="col-span-2 bg-white rounded-[20px] p-8 border border-gray-100">
          <div className="flex gap-8 mb-8">
            <div className="w-32 h-32 bg-[#10182c] rounded-[16px] flex items-center justify-center">
              <div className="text-white font-bold text-[48px]">O</div>
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-[28px] text-[#10182c] mb-2">Okonkwo Properties Ltd</h2>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <div className="flex items-center gap-2 text-[#6a7282] text-[13px] mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>HEADQUARTERS & SERVICE AREAS</span>
                  </div>
                  <p className="text-[#10182c] text-[15px] font-medium">Central London, North London, Dublin</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[#6a7282] text-[13px] mb-1">
                    <Phone className="w-4 h-4" />
                    <span>PHONE NUMBER</span>
                  </div>
                  <p className="text-[#10182c] text-[15px] font-medium">+44 (0) 7700 900456</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[#6a7282] text-[13px] mb-1">
                    <Globe className="w-4 h-4" />
                    <span>WEBSITE</span>
                  </div>
                  <p className="text-[#10182c] text-[15px] font-medium">OkonkwoProperties.Ltd.com</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[#6a7282] text-[13px] mb-1">
                    <Mail className="w-4 h-4" />
                    <span>EMAIL ADDRESS</span>
                  </div>
                  <p className="text-[#10182c] text-[15px] font-medium">eleanor@thompsonestates.co.uk</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-bold text-[20px] text-[#10182c] mb-4">Professional Bio</h3>
            <p className="text-[#6a7282] text-[15px] leading-relaxed">
              Okonkwo Properties Ltd specializes in high-end residential lettings and property management across Lagos. Our goal is to ensure property owners maximize their yields while providing tenants with exceptional homes and responsive service. With over a decade of experience, we handle everything from finding the right tenant to comprehensive portfolio management, taking the stress out of property ownership.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-[#6a7282] text-[13px] mb-2">
              <FileText className="w-4 h-4" />
              <span>LICENCE NUMBER</span>
            </div>
            <p className="text-[#10182c] text-[18px] font-bold">ARLA 9845210</p>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="bg-white rounded-[20px] p-6 border border-gray-100">
          <h3 className="font-bold text-[20px] text-[#10182c] mb-5">Performance Stats</h3>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-[#6a7282]" />
                <span className="text-[#6a7282] text-[13px]">Average Rating</span>
              </div>
              <p className="font-bold text-[28px] text-[#10182c]">4.9</p>
              <p className="text-[#6a7282] text-[12px]">(128 reviews)</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-[#6a7282]" />
                <span className="text-[#6a7282] text-[13px]">Active Units Under Management</span>
              </div>
              <p className="font-bold text-[28px] text-[#10182c]">3,542</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-[#6a7282]" />
                <span className="text-[#6a7282] text-[13px]">Avg. Placement Time</span>
              </div>
              <p className="font-bold text-[28px] text-[#10182c]">14 days</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-[#6a7282]" />
                <span className="text-[#6a7282] text-[13px]">Years in Business</span>
              </div>
              <p className="font-bold text-[28px] text-[#10182c]">12 Years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTeamsAndRoles = () => (
    <div className="space-y-6">
      <div>
        <h1 className="font-['Montserrat',sans-serif] font-bold text-[32px] text-[#10182c]">Teams and Roles</h1>
        <p className="text-[#6a7282] text-[16px] font-['Mulish',sans-serif] mt-1">Invite a Team Member to Okonkwo Properties Ltd</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Invite Form */}
        <div className="bg-white rounded-[20px] p-6 border border-gray-100">
          <p className="text-[#6a7282] text-[14px] mb-5">Enter their email and set specific permissions. They'll receive an invitation to join your workspace.</p>

          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-[13px] font-bold text-[#10182c] mb-2">Team Member's Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-[10px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-[13px] font-bold text-[#10182c] mb-2">Assign Properties</label>
              <select className="w-full px-4 py-2.5 border border-gray-200 rounded-[10px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent">
                <option>Select Property</option>
              </select>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4" defaultChecked />
              <div>
                <p className="text-[14px] font-medium text-[#10182c]">Manage Properties</p>
                <p className="text-[12px] text-[#6a7282]">Can add, edit, and publish new listings.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4" defaultChecked />
              <div>
                <p className="text-[14px] font-medium text-[#10182c]">Reply to Enquiries</p>
                <p className="text-[12px] text-[#6a7282]">Can view and respond to all contact info.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4" />
              <div>
                <p className="text-[14px] font-medium text-[#10182c]">Manage Team</p>
                <p className="text-[12px] text-[#6a7282]">Can invite members and change permissions.</p>
              </div>
            </div>
          </div>

          <button className="w-full py-3 bg-[#c85212] text-white rounded-[12px] font-bold text-[14px] hover:bg-[#a6430f]">
            Send Invite
          </button>
        </div>

        {/* Team Members */}
        <div className="col-span-2 bg-white rounded-[20px] p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold text-[18px] text-[#10182c]">Team Members</h3>
            <span className="text-[#6a7282] text-[14px]">4 Members</span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="border border-gray-100 rounded-[12px] p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div>
                      <p className="font-bold text-[14px] text-[#10182c]">Ayibaemi Gaibio</p>
                      <p className="text-[#6a7282] text-[12px]">ayibagaibio@gmail.com</p>
                    </div>
                  </div>
                  <button className="text-[#6a7282] hover:text-[#10182c]">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-[#6a7282] text-[12px] mb-2">Team Member</p>
                <div className="flex gap-1">
                  <span className="px-2 py-1 bg-green-50 text-green-600 rounded text-[10px] font-bold">2 Bark Street, Yaba</span>
                  <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-[10px] font-bold">2 Pank...</span>
                </div>
                <div className="flex gap-1 mt-2">
                  <span className="px-2 py-1 bg-gray-100 text-[#6a7282] rounded text-[10px]">Edit Properties</span>
                  <span className="px-2 py-1 bg-gray-100 text-[#6a7282] rounded text-[10px]">View Analytics</span>
                  <span className="px-2 py-1 bg-gray-100 text-[#6a7282] rounded text-[10px]">Full Access</span>
                </div>
              </div>
            ))}
          </div>

          {/* Permissions Matrix */}
          <h3 className="font-bold text-[18px] text-[#10182c] mb-4">Role Permission Matrix</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="bg-[#10182c] text-white">
                  <th className="text-left p-3">PERMISSION CATEGORY</th>
                  <th className="text-center p-3">ADMIN</th>
                  <th className="text-center p-3">TEAM MEMBER</th>
                </tr>
              </thead>
              <tbody className="text-[#6a7282]">
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-bold text-[#10182c]" colSpan={3}>FIRM PROFILE</td>
                </tr>
                <tr className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="p-3">View firm dashboard & KPIs</td>
                  <td className="text-center"><CheckCircle className="w-4 h-4 text-green-500 mx-auto" /></td>
                  <td className="text-center"><div className="w-4 h-4 border border-gray-300 rounded mx-auto"></div></td>
                </tr>
                <tr className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="p-3">Edit firm profile details</td>
                  <td className="text-center"><CheckCircle className="w-4 h-4 text-green-500 mx-auto" /></td>
                  <td className="text-center"><div className="w-4 h-4 border border-gray-300 rounded mx-auto"></div></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-bold text-[#10182c]" colSpan={3}>PROPERTIES</td>
                </tr>
                <tr className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="p-3">View all properties firm-wide</td>
                  <td className="text-center"><CheckCircle className="w-4 h-4 text-green-500 mx-auto" /></td>
                  <td className="text-center"><div className="w-4 h-4 border border-gray-300 rounded mx-auto"></div></td>
                </tr>
                <tr className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="p-3">View assigned properties only</td>
                  <td className="text-center"><CheckCircle className="w-4 h-4 text-green-500 mx-auto" /></td>
                  <td className="text-center"><CheckCircle className="w-4 h-4 text-green-500 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div>
        <h1 className="font-['Montserrat',sans-serif] font-bold text-[32px] text-[#10182c]">Settings</h1>
        <p className="text-[#6a7282] text-[16px] font-['Mulish',sans-serif] mt-1">Manage your account preferences and security</p>
      </div>

      <div className="bg-white rounded-[20px] p-6 border border-gray-100">
        <h3 className="font-bold text-[20px] text-[#10182c] mb-5">Account Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-[13px] font-bold text-[#10182c] mb-2">Email Notifications</label>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4" defaultChecked />
              <span className="text-[14px] text-[#6a7282]">Receive email notifications for new enquiries</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4" defaultChecked />
              <span className="text-[14px] text-[#6a7282]">Weekly performance reports</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-[240px] bg-[#10182c] text-white flex flex-col z-40">
        {/* Logo */}
        <div className="flex items-center gap-2 p-6 pb-4 shrink-0">
          <div className="w-10 h-10 bg-[#c85212] rounded-lg flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <span className="font-['Poppins',sans-serif] font-bold text-[20px]">apartey</span>
        </div>

        {/* Navigation - Scrollable */}
        <nav className="flex-1 overflow-y-auto px-4 space-y-1 pb-4">
          {[
            { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
            { id: "profile", label: "Profile", icon: User },
            { id: "portfolio", label: "My Listings", icon: Building2 },
            { id: "enquiries", label: "Enquiries", icon: MessageSquare, badge: 12 },
            { id: "teams", label: "Teams and Roles", icon: Users },
            { id: "prescreened", label: "Pre-Screened Queue", icon: CheckCircle },
            { id: "rewards", label: "Rewards", icon: Gift },
            { id: "property-management", label: "Property Management", icon: Home },
            { id: "analytics", label: "Analytics", icon: TrendingUp },
            { id: "renter-board", label: "Renter Board", icon: ClipboardList },
            { id: "settings", label: "Settings", icon: Settings }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-[13px] font-medium transition-all ${
                activeTab === item.id
                  ? "bg-[#c85212] text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <item.icon className="w-4 h-4 shrink-0" />
              <span className="flex-1 text-left truncate">{item.label}</span>
              {item.badge && (
                <span className="px-1.5 py-0.5 bg-[#fbff79] text-[#10182c] rounded-full text-[10px] font-bold shrink-0">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Organization Switcher */}
        <div className="border-t border-white/10 p-4 shrink-0">
          <p className="text-white/50 text-[11px] mb-2 px-1">MY ORGANIZATIONS</p>
          <div className="bg-white/10 rounded-[10px] p-3 cursor-pointer hover:bg-white/20 transition-colors mb-3">
            <p className="font-medium text-[13px]">Okonkwo Properties Ltd</p>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <button
              onClick={() => setProfileModalOpen(true)}
              className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/10 hover:bg-white/20 rounded-[8px] transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5 text-white/70" />
              <span className="text-[12px] text-white/70 font-medium">Switch Profile</span>
            </button>
            <button
              onClick={() => {
                toast.success("Signed out successfully");
                navigate("/");
              }}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-[8px] transition-colors"
            >
              <LogOut className="w-3.5 h-3.5 text-white/70" />
            </button>
          </div>

          <div className="flex items-center gap-3 cursor-pointer hover:bg-white/10 p-2 rounded-[10px] transition-colors">
            <div className="w-8 h-8 bg-[#c85212] rounded-full flex items-center justify-center font-bold text-[13px] shrink-0">
              MD
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-[13px] truncate">Michael D.</p>
              <p className="text-white/50 text-[11px]">Property Manager</p>
            </div>
            <ChevronRight className="w-4 h-4 text-white/50 shrink-0" />
          </div>
        </div>
      </div>

      <ProfileSwitcherModal
        open={profileModalOpen}
        onOpenChange={setProfileModalOpen}
        currentRole="property-manager"
        onRoleSelect={handleRoleSwitch}
      />

      {/* Main Content */}
      <div className="ml-[240px] p-6 md:p-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("dashboard")}
                className="text-[#6a7282] hover:text-[#10182c] text-[14px] font-medium"
              >
                Dashboard
              </button>
              {activeTab !== "dashboard" && (
                <>
                  <ChevronRight className="w-4 h-4 text-[#6a7282]" />
                  <span className="text-[#10182c] font-medium text-[14px] capitalize">
                    {activeTab === "property-management" ? "Property Management" :
                     activeTab === "prescreened" ? "Pre-Screened Queue" :
                     activeTab === "portfolio" ? "My Listings" :
                     activeTab === "teams" ? "Teams and Roles" :
                     activeTab.replace("-", " ")}
                  </span>
                </>
              )}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setProfileModalOpen(true)}
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-[10px] hover:bg-gray-50 transition-colors"
              >
                <RefreshCw className="w-4 h-4 text-[#6a7282]" />
                <span className="text-[13px] font-medium text-[#6a7282]">Switch Profile</span>
              </button>
              <button className="p-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-[10px] transition-colors relative">
                <Bell className="w-5 h-5 text-[#6a7282]" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#c85212] rounded-full"></span>
              </button>
            </div>
          </div>

          {/* Content */}
          {activeTab === "dashboard" && renderDashboard()}
          {activeTab === "portfolio" && renderPortfolioManagement()}
          {activeTab === "enquiries" && renderEnquiries()}
          {activeTab === "prescreened" && renderPrescreenedQueue()}
          {activeTab === "property-management" && renderPropertyManagement()}
          {activeTab === "rewards" && renderRewards()}
          {activeTab === "analytics" && renderAnalytics()}
          {activeTab === "profile" && renderProfile()}
          {activeTab === "teams" && renderTeamsAndRoles()}
          {activeTab === "settings" && renderSettings()}
          {activeTab === "renter-board" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-['Montserrat',sans-serif] font-bold text-[32px] text-[#10182c]">Renter Board</h1>
                  <p className="text-[#6a7282] text-[16px] font-['Mulish',sans-serif] mt-1">Verified renters looking for properties. Message them directly if you have a match.</p>
                </div>
                <a href="/renter-board" target="_blank" rel="noopener" className="text-[#c85212] text-[13px] font-bold hover:underline">View full board →</a>
              </div>
              <RenterBoardPreview />
            </div>
          )}
        </div>
      </div>

      {/* Get Reviews Modal */}
      <AnimatePresence>
        {getReviewsProperty && (
          <GetReviewsModal
            property={getReviewsProperty}
            onClose={() => setGetReviewsProperty(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
