import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  LayoutDashboard, Users, Home, Building, Shield, Settings, LogOut, Menu, Bell,
  Search, ChevronDown, Check, X, Eye, Clock, Activity, TrendingUp, FileText,
  AlertCircle, Filter, Calendar, MoreVertical, UserCheck, UserX, Key, Mail,
  Phone, MapPin, Euro, Bed, Bath, Maximize, Star, MessageSquare, ChevronRight,
  User, Building2, UserPlus, CheckCircle, XCircle, Upload, Download, Edit, Trash2,
  Award, Gift, Share2, Lock, Unlock, ArrowRight, BarChart3, PieChart as PieChartIcon,
  DollarSign, TrendingDown, Plus, RefreshCw, ChevronLeft, Globe, Wrench, Store
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import { ProfileSwitcherModal } from "./ProfileSwitcherModal";
import { toast } from "sonner@2.0.3";

export function AdminProfilePage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [approvalFilter, setApprovalFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null);
  const [showPropertyDetailsModal, setShowPropertyDetailsModal] = useState(false);
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

  const [pendingProperties, setPendingProperties] = useState([
    {
      id: 1,
      title: "Modern 3-Bedroom Apartment",
      address: "15 Oak Street, Dublin",
      city: "Dublin",
      country: "Ireland",
      price: "€1,800/month",
      beds: 3,
      baths: 2,
      sqft: "1,200 sq ft",
      listingType: "homeowner",
      ownerName: "Sarah O'Connor",
      ownerEmail: "sarah.oconnor@email.com",
      submittedDate: "May 15, 2026",
      status: "pending" as const,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      description: "Beautiful modern apartment in the heart of Dublin. Recently renovated with high-end finishes."
    },
    {
      id: 2,
      title: "Luxury 4-Bedroom Villa",
      address: "28 Temple Bar Road, Cork",
      city: "Cork",
      country: "Ireland",
      price: "€2,500/month",
      beds: 4,
      baths: 3,
      sqft: "2,000 sq ft",
      listingType: "agent",
      ownerName: "Michael Murphy (Agent)",
      ownerEmail: "m.murphy@realestate.com",
      submittedDate: "May 16, 2026",
      status: "pending" as const,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      description: "Stunning luxury villa with modern amenities and beautiful garden views."
    },
    {
      id: 3,
      title: "Cozy 2-Bedroom Flat",
      address: "42 Main Street, Galway",
      city: "Galway",
      country: "Ireland",
      price: "€1,200/month",
      beds: 2,
      baths: 1,
      sqft: "850 sq ft",
      listingType: "homeowner",
      ownerName: "Emma Walsh",
      ownerEmail: "emma.walsh@email.com",
      submittedDate: "May 14, 2026",
      status: "approved" as const,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      description: "Charming flat in a quiet neighborhood, perfect for couples or small families."
    }
  ]);

  const [users, setUsers] = useState({
    renters: 1247,
    homeowners: 342,
    agents: 89,
    totalActive: 1678
  });

  const [stats, setStats] = useState({
    totalProperties: 2156,
    pendingApprovals: 12,
    activeListings: 1834,
    totalRevenue: "€45,230"
  });

  // Chart Data
  const revenueData = [
    { month: "Jan", revenue: 28500 },
    { month: "Feb", revenue: 32100 },
    { month: "Mar", revenue: 35800 },
    { month: "Apr", revenue: 38400 },
    { month: "May", revenue: 45230 },
  ];

  const userGrowthData = [
    { month: "Jan", renters: 980, homeowners: 285, agents: 72 },
    { month: "Feb", renters: 1050, homeowners: 298, agents: 76 },
    { month: "Mar", renters: 1120, homeowners: 312, agents: 81 },
    { month: "Apr", renters: 1185, homeowners: 328, agents: 85 },
    { month: "May", renters: 1247, homeowners: 342, agents: 89 },
  ];

  const propertyListingsData = [
    { month: "Jan", approved: 145, pending: 8, rejected: 3 },
    { month: "Feb", approved: 168, pending: 12, rejected: 5 },
    { month: "Mar", approved: 192, pending: 9, rejected: 4 },
    { month: "Apr", approved: 210, pending: 15, rejected: 6 },
    { month: "May", approved: 225, pending: 12, rejected: 7 },
  ];

  const propertyTypeData = [
    { name: "Apartments", value: 856, color: "#3b82f6" },
    { name: "Houses", value: 642, color: "#10b981" },
    { name: "Studios", value: 412, color: "#f59e0b" },
    { name: "Villas", value: 246, color: "#8b5cf6" },
  ];

  const geographicData = [
    { location: "Dublin", properties: 685 },
    { location: "Cork", properties: 423 },
    { location: "Galway", properties: 312 },
    { location: "Limerick", properties: 267 },
    { location: "Waterford", properties: 189 },
    { location: "Other", properties: 280 },
  ];

  // Property Manager Dashboard Data
  const pmDashboardStats = {
    totalProperties: 22,
    occupancyRate: 2,
    averageRating: 54,
    teamMembers: "15 mins"
  };

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

  const recentProperties = [
    { id: 1, name: "Sunset Villa", location: "Banana Island", status: "ACTIVE", price: "£3,200/mo", initials: "ML" },
    { id: 2, name: "Ocean View Apartment", location: "Ikoyi", status: "ACTIVE", price: "£4,000/mo", initials: "NL" },
    { id: 3, name: "Mountain Retreat", location: "Lagos Mainland", status: "ACTIVE", price: "£3,800/mo", initials: "OL" }
  ];

  const [portfolioFilter, setPortfolioFilter] = useState("All Listings");
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

  const [pmEnquiries, setPmEnquiries] = useState([
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

  const leadTracker = [
    { id: 1, renter: "Peter Akin", property: "Sunset Villa", status: "New", broker: "Tunde John" },
    { id: 2, renter: "Maya Lin", property: "Oceanview Retreat", status: "Offer Made", broker: "Sarah Kahn" },
    { id: 3, renter: "Liam Chen", property: "Mountain Lodge", status: "Inactive", broker: "Raj Patel" },
    { id: 4, renter: "Peter Akin", property: "Sunset Villa", status: "New", broker: "Tunde John" },
    { id: 5, renter: "Maya Lin", property: "Oceanview Retreat", status: "Offer Made", broker: "Sarah Kahn" },
    { id: 6, renter: "Liam Chen", property: "Mountain Lodge", status: "Inactive", broker: "Raj Patel" },
    { id: 7, renter: "Peter Akin", property: "Sunset Villa", status: "New", broker: "Tunde John" }
  ];

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

  const managedProperties = [
    { id: 1, name: "Sunset Villa", location: "Banana Island", status: "ACTIVE", price: "£3,200/mo", initials: "ML" },
    { id: 2, name: "Oceanview Apartments", location: "Coral Beach", status: "ACTIVE", price: "£2,800/mo", initials: "ML" },
    { id: 3, name: "Mountain Retreat", location: "Pine Hill", status: "ACTIVE", price: "£2,500/mo", initials: "ML" },
    { id: 4, name: "City Loft", location: "Downtown", status: "ACTIVE", price: "£3,000/mo", initials: "ML" },
    { id: 5, name: "Riverfront Condo", location: "Willow Bend", status: "ACTIVE", price: "£2,950/mo", initials: "ML" }
  ];

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

  const pmAnalyticsData = {
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

  const filteredProperties = pendingProperties.filter(prop => {
    const matchesFilter = approvalFilter === 'all' || prop.status === approvalFilter;
    const matchesSearch = prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prop.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleApproveProperty = (propertyId: number) => {
    setPendingProperties(pendingProperties.map(prop =>
      prop.id === propertyId ? { ...prop, status: "approved" as const } : prop
    ));
    setShowPropertyDetailsModal(false);
  };

  const handleRejectProperty = (propertyId: number) => {
    setPendingProperties(pendingProperties.map(prop =>
      prop.id === propertyId ? { ...prop, status: "rejected" as const } : prop
    ));
    setShowPropertyDetailsModal(false);
  };

  const renderOverviewTab = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-gray-500 text-[14px] mt-1">Manage users, properties, and platform operations.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-[20px] p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
              <Home size={20} className="text-blue-600" />
            </div>
            <TrendingUp size={16} className="text-green-500" />
          </div>
          <p className="text-[13px] text-gray-500 font-medium mb-1">Total Properties</p>
          <p className="text-[26px] font-bold text-[#10182c]">{stats.totalProperties}</p>
        </div>

        <div className="bg-white rounded-[20px] p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">
              <Clock size={20} className="text-[#c85212]" />
            </div>
            <AlertCircle size={16} className="text-[#c85212]" />
          </div>
          <p className="text-[13px] text-gray-500 font-medium mb-1">Pending Approvals</p>
          <p className="text-[26px] font-bold text-[#10182c]">{stats.pendingApprovals}</p>
        </div>

        <div className="bg-white rounded-[20px] p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
              <Check size={20} className="text-green-600" />
            </div>
            <TrendingUp size={16} className="text-green-500" />
          </div>
          <p className="text-[13px] text-gray-500 font-medium mb-1">Active Listings</p>
          <p className="text-[26px] font-bold text-[#10182c]">{stats.activeListings}</p>
        </div>

        <div className="bg-white rounded-[20px] p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
              <Euro size={20} className="text-purple-600" />
            </div>
            <TrendingUp size={16} className="text-green-500" />
          </div>
          <p className="text-[13px] text-gray-500 font-medium mb-1">Total Revenue</p>
          <p className="text-[26px] font-bold text-[#10182c]">{stats.totalRevenue}</p>
        </div>
      </div>

      {/* User Statistics */}
      <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
        <h2 className="font-bold text-[18px] text-[#10182c] mb-6 font-['Montserrat',sans-serif]">User Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
              <Users size={22} className="text-blue-600" />
            </div>
            <div>
              <p className="text-[22px] font-bold text-[#10182c]">{users.renters}</p>
              <p className="text-[13px] text-gray-500">Renters</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
              <Home size={22} className="text-green-600" />
            </div>
            <div>
              <p className="text-[22px] font-bold text-[#10182c]">{users.homeowners}</p>
              <p className="text-[13px] text-gray-500">Homeowners</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center">
              <Building size={22} className="text-purple-600" />
            </div>
            <div>
              <p className="text-[22px] font-bold text-[#10182c]">{users.agents}</p>
              <p className="text-[13px] text-gray-500">Agents</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
              <Activity size={22} className="text-[#c85212]" />
            </div>
            <div>
              <p className="text-[22px] font-bold text-[#10182c]">{users.totalActive}</p>
              <p className="text-[13px] text-gray-500">Total Active</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
        <h2 className="font-bold text-[18px] text-[#10182c] mb-4 font-['Montserrat',sans-serif]">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button
            onClick={() => setActiveTab("approvals")}
            className="flex items-center justify-between p-4 bg-[#c85212]/5 hover:bg-[#c85212]/10 rounded-[16px] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#c85212]/10 flex items-center justify-center">
                <Clock size={18} className="text-[#c85212]" />
              </div>
              <div className="text-left">
                <p className="text-[14px] font-bold text-[#10182c]">Review Approvals</p>
                <p className="text-[12px] text-gray-500">{stats.pendingApprovals} pending</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-gray-400 group-hover:text-[#c85212]" />
          </button>

          <button
            onClick={() => setActiveTab("users")}
            className="flex items-center justify-between p-4 bg-blue-50 hover:bg-blue-100 rounded-[16px] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Users size={18} className="text-blue-600" />
              </div>
              <div className="text-left">
                <p className="text-[14px] font-bold text-[#10182c]">Manage Users</p>
                <p className="text-[12px] text-gray-500">{users.totalActive} active</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-gray-400 group-hover:text-blue-600" />
          </button>

          <button
            onClick={() => setActiveTab("properties")}
            className="flex items-center justify-between p-4 bg-green-50 hover:bg-green-100 rounded-[16px] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Home size={18} className="text-green-600" />
              </div>
              <div className="text-left">
                <p className="text-[14px] font-bold text-[#10182c]">View Properties</p>
                <p className="text-[12px] text-gray-500">{stats.totalProperties} total</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-gray-400 group-hover:text-green-600" />
          </button>
        </div>
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend Chart */}
        <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
          <h2 className="font-bold text-[18px] text-[#10182c] mb-6 font-['Montserrat',sans-serif] flex items-center gap-2">
            <TrendingUp size={20} className="text-green-600" />
            Revenue Trend
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
              <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} tickFormatter={(value) => `€${(value / 1000).toFixed(0)}k`} />
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                formatter={(value: number) => [`€${value.toLocaleString()}`, 'Revenue']}
              />
              <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* User Growth Chart */}
        <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
          <h2 className="font-bold text-[18px] text-[#10182c] mb-6 font-['Montserrat',sans-serif] flex items-center gap-2">
            <Users size={20} className="text-blue-600" />
            User Growth
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
              <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Line type="monotone" dataKey="renters" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="homeowners" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="agents" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Property Listings Trend */}
        <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
          <h2 className="font-bold text-[18px] text-[#10182c] mb-6 font-['Montserrat',sans-serif] flex items-center gap-2">
            <Activity size={20} className="text-[#c85212]" />
            Property Listings Trend
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={propertyListingsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
              <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Bar dataKey="approved" fill="#10b981" radius={[8, 8, 0, 0]} />
              <Bar dataKey="pending" fill="#f59e0b" radius={[8, 8, 0, 0]} />
              <Bar dataKey="rejected" fill="#ef4444" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Property Type Distribution */}
        <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
          <h2 className="font-bold text-[18px] text-[#10182c] mb-6 font-['Montserrat',sans-serif] flex items-center gap-2">
            <Building size={20} className="text-purple-600" />
            Property Type Distribution
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={propertyTypeData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {propertyTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-3 mt-4 justify-center">
            {propertyTypeData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-[12px] text-gray-600">{item.name}: {item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Geographic Distribution */}
      <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
        <h2 className="font-bold text-[18px] text-[#10182c] mb-6 font-['Montserrat',sans-serif] flex items-center gap-2">
          <MapPin size={20} className="text-[#c85212]" />
          Geographic Distribution
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={geographicData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis type="number" stroke="#6b7280" style={{ fontSize: '12px' }} />
            <YAxis dataKey="location" type="category" stroke="#6b7280" style={{ fontSize: '12px' }} width={80} />
            <Tooltip
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              formatter={(value: number) => [value, 'Properties']}
            />
            <Bar dataKey="properties" fill="#c85212" radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );

  const renderApprovalsTab = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">Property Approvals</h1>
          <p className="text-gray-500 text-[14px] mt-1">Review and approve property listings from homeowners and agents.</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search properties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-[16px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent"
          />
        </div>

        <div className="flex gap-2">
          {(['all', 'pending', 'approved', 'rejected'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setApprovalFilter(filter)}
              className={`px-4 py-3 rounded-[12px] text-[13px] font-bold transition-colors ${
                approvalFilter === filter
                  ? 'bg-[#c85212] text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Properties List */}
      <div className="space-y-4">
        {filteredProperties.length === 0 ? (
          <div className="bg-white rounded-[24px] p-16 border border-dashed border-gray-200 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText size={28} className="text-gray-400" />
            </div>
            <p className="text-[#10182c] font-bold text-[18px] mb-2">No properties found</p>
            <p className="text-gray-500 text-[14px]">Try adjusting your filters or search query.</p>
          </div>
        ) : (
          filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-[20px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-64 h-48 md:h-auto relative flex-shrink-0">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1.5 rounded-full text-[11px] font-bold ${
                      property.status === 'pending' ? 'bg-orange-100 text-[#c85212]' :
                      property.status === 'approved' ? 'bg-green-100 text-green-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {property.status === 'pending' ? 'Pending Review' :
                       property.status === 'approved' ? 'Approved' : 'Rejected'}
                    </span>
                  </div>
                </div>

                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-[18px] text-[#10182c] mb-1">{property.title}</h3>
                      <p className="text-[13px] text-gray-500 flex items-center gap-1">
                        <MapPin size={14} />
                        {property.address}, {property.city}
                      </p>
                    </div>
                    <p className="text-[20px] font-bold text-[#c85212]">{property.price}</p>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-[13px] text-gray-600">
                    <span className="flex items-center gap-1">
                      <Bed size={16} className="text-gray-400" />
                      {property.beds} Beds
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath size={16} className="text-gray-400" />
                      {property.baths} Baths
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize size={16} className="text-gray-400" />
                      {property.sqft}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        {property.listingType === 'agent' ? <Building size={18} className="text-gray-600" /> : <Home size={18} className="text-gray-600" />}
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-[#10182c]">{property.ownerName}</p>
                        <p className="text-[12px] text-gray-500">
                          {property.listingType === 'agent' ? 'Agent' : 'Homeowner'} • Submitted {property.submittedDate}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedProperty(property.id);
                          setShowPropertyDetailsModal(true);
                        }}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-[10px] text-[13px] font-bold transition-colors flex items-center gap-2"
                      >
                        <Eye size={14} /> View Details
                      </button>

                      {property.status === 'pending' && (
                        <>
                          <button
                            onClick={() => handleApproveProperty(property.id)}
                            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-[10px] text-[13px] font-bold transition-colors flex items-center gap-2"
                          >
                            <Check size={14} /> Approve
                          </button>
                          <button
                            onClick={() => handleRejectProperty(property.id)}
                            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-[10px] text-[13px] font-bold transition-colors flex items-center gap-2"
                          >
                            <X size={14} /> Reject
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );

  const renderUsersTab = () => {
    const [userTypeFilter, setUserTypeFilter] = useState<'all' | 'renters' | 'homeowners' | 'agents'>('all');
    const [userSearchQuery, setUserSearchQuery] = useState("");

    const allUsers = [
      // Renters
      { id: 1, name: "John Doe", email: "john@example.com", type: "renter", status: "active", joinDate: "Jan 15, 2026", favoriteProperties: 5, reviewsPosted: 3 },
      { id: 2, name: "Sarah Williams", email: "sarah.w@example.com", type: "renter", status: "active", joinDate: "Feb 20, 2026", favoriteProperties: 8, reviewsPosted: 1 },
      { id: 3, name: "Mike Johnson", email: "mike.j@example.com", type: "renter", status: "inactive", joinDate: "Dec 10, 2025", favoriteProperties: 2, reviewsPosted: 0 },
      // Homeowners
      { id: 4, name: "Sarah O'Connor", email: "sarah.oconnor@email.com", type: "homeowner", status: "active", joinDate: "Mar 5, 2025", properties: 7, activeListings: 5 },
      { id: 5, name: "Emma Walsh", email: "emma.walsh@email.com", type: "homeowner", status: "active", joinDate: "Jun 12, 2025", properties: 3, activeListings: 2 },
      { id: 6, name: "David Chen", email: "d.chen@email.com", type: "homeowner", status: "active", joinDate: "Aug 22, 2025", properties: 12, activeListings: 9 },
      // Agents
      { id: 7, name: "Eleanor Thompson", email: "eleanor@thompsonestates.co.uk", type: "agent", status: "active", joinDate: "Jan 8, 2024", portfolio: 15, leads: 42 },
      { id: 8, name: "Marcus Reid", email: "marcus@reidprop.com", type: "agent", status: "active", joinDate: "Apr 15, 2024", portfolio: 8, leads: 28 },
    ];

    const filteredUsers = allUsers.filter(user => {
      const matchesType = userTypeFilter === 'all' || user.type === userTypeFilter;
      const matchesSearch = user.name.toLowerCase().includes(userSearchQuery.toLowerCase()) ||
                           user.email.toLowerCase().includes(userSearchQuery.toLowerCase());
      return matchesType && matchesSearch;
    });

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">User Management</h1>
            <p className="text-gray-500 text-[14px] mt-1">View and manage all platform users across different roles.</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search users..."
              value={userSearchQuery}
              onChange={(e) => setUserSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-[16px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent"
            />
          </div>

          <div className="flex gap-2">
            {(['all', 'renters', 'homeowners', 'agents'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setUserTypeFilter(filter)}
                className={`px-4 py-3 rounded-[12px] text-[13px] font-bold transition-colors capitalize ${
                  userTypeFilter === filter
                    ? 'bg-[#c85212] text-white'
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-[12px] font-bold text-gray-500 uppercase tracking-wider">
                  <th className="p-4">User</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Joined</th>
                  <th className="p-4">Details</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredUsers.map(user => (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-[13px] font-bold text-gray-600">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-bold text-[14px] text-[#10182c]">{user.name}</div>
                          <div className="text-[12px] text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase ${
                        user.type === 'renter' ? 'bg-blue-50 text-blue-600' :
                        user.type === 'homeowner' ? 'bg-green-50 text-green-600' :
                        'bg-purple-50 text-purple-600'
                      }`}>
                        {user.type}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                        user.status === 'active' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="p-4 text-[13px] text-gray-600">{user.joinDate}</td>
                    <td className="p-4 text-[13px] text-gray-600">
                      {user.type === 'renter' && (
                        <div className="space-y-1">
                          <div>{user.favoriteProperties} favorites</div>
                          <div>{user.reviewsPosted} reviews</div>
                        </div>
                      )}
                      {user.type === 'homeowner' && (
                        <div className="space-y-1">
                          <div>{user.properties} properties</div>
                          <div>{user.activeListings} active</div>
                        </div>
                      )}
                      {user.type === 'agent' && (
                        <div className="space-y-1">
                          <div>{user.portfolio} listings</div>
                          <div>{user.leads} leads</div>
                        </div>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="View details">
                          <Eye size={16} className="text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="More options">
                          <MoreVertical size={16} className="text-gray-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderPropertiesTab = () => {
    const [propertyStatusFilter, setPropertyStatusFilter] = useState<'all' | 'active' | 'inactive' | 'pending'>('all');
    const [propertySearchQuery, setPropertySearchQuery] = useState("");

    const allProperties = [
      { id: 1, title: "2 Pankshin Road", location: "Plateau, Nigeria", owner: "Sarah O'Connor", ownerType: "homeowner", status: "active", price: "£450,000/yr", beds: 4, baths: 4, enquiries: 12, views: 245 },
      { id: 2, title: "10 Oyo Street", location: "Oyo, Nigeria", owner: "Emma Walsh", ownerType: "homeowner", status: "active", price: "£350,000/yr", beds: 5, baths: 3, enquiries: 8, views: 168 },
      { id: 3, title: "Modern 2-Bed Flat", location: "Islington, London", owner: "Eleanor Thompson", ownerType: "agent", status: "active", price: "£2,500/mo", beds: 2, baths: 1, enquiries: 14, views: 245 },
      { id: 4, title: "Luxury Penthouse", location: "Canary Wharf, London", owner: "Eleanor Thompson", ownerType: "agent", status: "active", price: "£3,200/mo", beds: 3, baths: 2, enquiries: 8, views: 189 },
      { id: 5, title: "15 Enugu Avenue", location: "Enugu, Nigeria", owner: "David Chen", ownerType: "homeowner", status: "inactive", price: "£200,000/yr", beds: 3, baths: 2, enquiries: 4, views: 89 },
      { id: 6, title: "Ikoyi Studio Apartment", location: "Ikoyi, Lagos", owner: "Sarah O'Connor", ownerType: "homeowner", status: "pending", price: "£250,000/yr", beds: 1, baths: 1, enquiries: 0, views: 0 },
      { id: 7, title: "Charming 1-Bed Garden Flat", location: "Highgate, London", owner: "Marcus Reid", ownerType: "agent", status: "pending", price: "£1,950/mo", beds: 1, baths: 1, enquiries: 0, views: 0 },
    ];

    const filteredProperties = allProperties.filter(prop => {
      const matchesStatus = propertyStatusFilter === 'all' || prop.status === propertyStatusFilter;
      const matchesSearch = prop.title.toLowerCase().includes(propertySearchQuery.toLowerCase()) ||
                           prop.location.toLowerCase().includes(propertySearchQuery.toLowerCase()) ||
                           prop.owner.toLowerCase().includes(propertySearchQuery.toLowerCase());
      return matchesStatus && matchesSearch;
    });

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">All Properties</h1>
            <p className="text-gray-500 text-[14px] mt-1">View and manage all property listings on the platform.</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search properties..."
              value={propertySearchQuery}
              onChange={(e) => setPropertySearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-[16px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#c85212] focus:border-transparent"
            />
          </div>

          <div className="flex gap-2">
            {(['all', 'active', 'inactive', 'pending'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setPropertyStatusFilter(filter)}
                className={`px-4 py-3 rounded-[12px] text-[13px] font-bold transition-colors capitalize ${
                  propertyStatusFilter === filter
                    ? 'bg-[#c85212] text-white'
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Table */}
        <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-[12px] font-bold text-gray-500 uppercase tracking-wider">
                  <th className="p-4">Property</th>
                  <th className="p-4">Owner</th>
                  <th className="p-4">Price</th>
                  <th className="p-4 text-center">Specs</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-center">Performance</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredProperties.map(prop => (
                  <tr key={prop.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <div>
                        <div className="font-bold text-[14px] text-[#10182c]">{prop.title}</div>
                        <div className="text-[12px] text-gray-500 flex items-center gap-1">
                          <MapPin size={12} />
                          {prop.location}
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <div className="text-[13px] font-medium text-[#10182c]">{prop.owner}</div>
                        <span className={`text-[11px] px-2 py-0.5 rounded-full ${
                          prop.ownerType === 'homeowner' ? 'bg-green-50 text-green-600' : 'bg-purple-50 text-purple-600'
                        }`}>
                          {prop.ownerType}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 font-bold text-[14px] text-[#c85212]">{prop.price}</td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-3 text-[12px] text-gray-600">
                        <span className="flex items-center gap-1">
                          <Bed size={14} /> {prop.beds}
                        </span>
                        <span className="flex items-center gap-1">
                          <Bath size={14} /> {prop.baths}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                        prop.status === 'active' ? 'bg-green-50 text-green-600' :
                        prop.status === 'pending' ? 'bg-orange-50 text-[#c85212]' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {prop.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="text-[12px] space-y-1">
                        <div className="flex items-center gap-1 text-gray-600">
                          <Eye size={12} /> {prop.views} views
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                          <MessageSquare size={12} /> {prop.enquiries} enquiries
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="View details">
                          <Eye size={16} className="text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="More options">
                          <MoreVertical size={16} className="text-gray-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderReviewsTab = () => {
    const allReviews = [
      { id: 1, renterName: "John Doe", propertyTitle: "2 Pankshin Road", rating: 5, reviewText: "Absolutely loved this property! The location was perfect, close to all amenities. The homeowner was very responsive and maintained the property well. Would highly recommend to anyone looking in this area.", datePosted: "Apr 15, 2026", status: "published" },
      { id: 2, renterName: "Sarah Williams", propertyTitle: "10 Oyo Street", rating: 3, reviewText: "Decent property but had some maintenance issues. Hot water was inconsistent and the AC in the bedroom needed repair. Location is good though, and rent was reasonable for the area.", datePosted: "Mar 8, 2026", status: "published" },
      { id: 3, renterName: "Mike Johnson", propertyTitle: "15 Enugu Avenue", rating: 2, reviewText: "Not satisfied with the overall experience. Property was not as described in the listing. Several issues were never fixed despite multiple requests.", datePosted: "May 10, 2026", status: "pending" },
      { id: 4, renterName: "Emma Taylor", propertyTitle: "Modern 2-Bed Flat", rating: 5, reviewText: "Amazing apartment in a great location! The agent was very professional and helpful throughout the entire rental process. Everything was exactly as advertised.", datePosted: "Apr 22, 2026", status: "published" },
    ];

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div>
          <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">Reviews Management</h1>
          <p className="text-gray-500 text-[14px] mt-1">Moderate and manage all property reviews from renters.</p>
        </div>

        <div className="space-y-4">
          {allReviews.map(review => (
            <div key={review.id} className="bg-white rounded-[20px] p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-[13px] font-bold text-gray-600">
                    {review.renterName.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-bold text-[15px] text-[#10182c]">{review.renterName}</h3>
                    <p className="text-[12px] text-gray-500">Reviewed {review.propertyTitle}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className={i < review.rating ? "fill-[#fbff79] text-[#fbff79]" : "text-gray-300"} />
                    ))}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                    review.status === 'published' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-[#c85212]'
                  }`}>
                    {review.status}
                  </span>
                </div>
              </div>
              <p className="text-[14px] text-gray-700 leading-relaxed mb-3">{review.reviewText}</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-[12px] text-gray-500">{review.datePosted}</span>
                <div className="flex gap-2">
                  {review.status === 'pending' && (
                    <>
                      <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-[10px] text-[12px] font-bold transition-colors flex items-center gap-2">
                        <Check size={14} /> Approve
                      </button>
                      <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-[10px] text-[12px] font-bold transition-colors flex items-center gap-2">
                        <X size={14} /> Reject
                      </button>
                    </>
                  )}
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-[10px] text-[12px] font-bold transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  };

  const renderAnalyticsTab = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] font-bold tracking-tight">Platform Analytics</h1>
        <p className="text-gray-500 text-[14px] mt-1">Comprehensive insights and performance metrics across the platform.</p>
      </div>

      {/* All the charts from overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend Chart */}
        <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
          <h2 className="font-bold text-[18px] text-[#10182c] mb-6 font-['Montserrat',sans-serif] flex items-center gap-2">
            <TrendingUp size={20} className="text-green-600" />
            Revenue Trend
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
              <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} tickFormatter={(value) => `€${(value / 1000).toFixed(0)}k`} />
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                formatter={(value: number) => [`€${value.toLocaleString()}`, 'Revenue']}
              />
              <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* User Growth Chart */}
        <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
          <h2 className="font-bold text-[18px] text-[#10182c] mb-6 font-['Montserrat',sans-serif] flex items-center gap-2">
            <Users size={20} className="text-blue-600" />
            User Growth
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
              <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Line type="monotone" dataKey="renters" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="homeowners" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="agents" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Property Listings Trend */}
        <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
          <h2 className="font-bold text-[18px] text-[#10182c] mb-6 font-['Montserrat',sans-serif] flex items-center gap-2">
            <Activity size={20} className="text-[#c85212]" />
            Property Listings Trend
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={propertyListingsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
              <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Bar dataKey="approved" fill="#10b981" radius={[8, 8, 0, 0]} />
              <Bar dataKey="pending" fill="#f59e0b" radius={[8, 8, 0, 0]} />
              <Bar dataKey="rejected" fill="#ef4444" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Property Type Distribution */}
        <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
          <h2 className="font-bold text-[18px] text-[#10182c] mb-6 font-['Montserrat',sans-serif] flex items-center gap-2">
            <Building size={20} className="text-purple-600" />
            Property Type Distribution
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={propertyTypeData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {propertyTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-3 mt-4 justify-center">
            {propertyTypeData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-[12px] text-gray-600">{item.name}: {item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Geographic Distribution */}
      <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
        <h2 className="font-bold text-[18px] text-[#10182c] mb-6 font-['Montserrat',sans-serif] flex items-center gap-2">
          <MapPin size={20} className="text-[#c85212]" />
          Geographic Distribution
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={geographicData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis type="number" stroke="#6b7280" style={{ fontSize: '12px' }} />
            <YAxis dataKey="location" type="category" stroke="#6b7280" style={{ fontSize: '12px' }} width={80} />
            <Tooltip
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              formatter={(value: number) => [value, 'Properties']}
            />
            <Bar dataKey="properties" fill="#c85212" radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );

  // Property Manager Render Functions
  const renderPMDashboard = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-['Montserrat',sans-serif] font-bold text-[32px] text-[#10182c]">PM Dashboard</h1>
          <p className="text-[#6a7282] text-[16px] font-['Mulish',sans-serif] mt-1">Property management overview and performance.</p>
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

      <div className="grid grid-cols-4 gap-5">
        <div className="bg-white rounded-[20px] p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gray-100 rounded-[12px] flex items-center justify-center">
              <Building2 className="w-6 h-6 text-[#10182c]" />
            </div>
            <div>
              <p className="text-[#6a7282] text-[13px]">Total Properties</p>
              <p className="font-bold text-[28px] text-[#10182c]">{pmDashboardStats.totalProperties}</p>
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
              <p className="font-bold text-[28px] text-[#10182c]">{pmDashboardStats.occupancyRate}</p>
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
              <p className="font-bold text-[28px] text-[#10182c]">{pmDashboardStats.averageRating}</p>
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
              <p className="font-bold text-[28px] text-[#10182c]">{pmDashboardStats.teamMembers}</p>
            </div>
          </div>
        </div>
      </div>

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

  const renderPMPortfolio = () => (
    <div className="space-y-6">
      <div>
        <h1 className="font-['Montserrat',sans-serif] font-bold text-[32px] text-[#10182c]">My Portfolio</h1>
        <p className="text-[#6a7282] text-[16px] font-['Mulish',sans-serif] mt-1">Manage your active and expired listings.</p>
      </div>

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

              <div className="flex items-center justify-between">
                <button className={`flex-1 py-2 rounded-[10px] text-[13px] font-bold transition-colors ${
                  listing.status === "LIVE"
                    ? "bg-gray-100 text-[#10182c] hover:bg-gray-200"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}>
                  {listing.status === "LIVE" ? <><Unlock className="w-3 h-3 inline mr-1" /> LIVE</> : <><Lock className="w-3 h-3 inline mr-1" /> HIDDEN</>}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPMEnquiries = () => (
    <div className="space-y-6">
      <div>
        <h1 className="font-['Montserrat',sans-serif] font-bold text-[32px] text-[#10182c]">Enquiries</h1>
        <p className="text-[#6a7282] text-[16px] font-['Mulish',sans-serif] mt-1">Manage your leads and convert them faster.</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-[20px] p-6 border border-gray-100">
          <h3 className="font-bold text-[20px] text-[#10182c] mb-5">Incoming Enquiries</h3>
          <div className="space-y-4">
            {pmEnquiries.map((enquiry) => (
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

  const renderPMPrescreened = () => (
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

  const renderPMPropertyManagement = () => (
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

  const renderPMRewards = () => (
    <div className="space-y-6">
      <div>
        <h1 className="font-['Montserrat',sans-serif] font-bold text-[32px] text-[#10182c]">My Rewards</h1>
        <p className="text-[#6a7282] text-[16px] font-['Mulish',sans-serif] mt-1">Invite friends to Apartey and earn keys. Use your keys to redeem exclusive rewards.</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
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

  const renderPMAnalytics = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-['Montserrat',sans-serif] font-bold text-[32px] text-[#10182c]">PM Analytics</h1>
          <p className="text-[#6a7282] text-[16px] font-['Mulish',sans-serif] mt-1">Firm-wide portfolio intelligence</p>
        </div>
        <button className="px-5 py-2.5 bg-white border border-gray-200 rounded-[12px] font-bold text-[14px] hover:bg-gray-50 flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-4 gap-5">
        <div className="bg-white rounded-[20px] p-6 border border-gray-100">
          <p className="text-[#6a7282] text-[13px] mb-2">Total Views</p>
          <p className="font-bold text-[28px] text-[#10182c]">{pmAnalyticsData.totalViews.toLocaleString()}</p>
          <p className="text-green-600 text-[12px] mt-1">{pmAnalyticsData.totalViewsChange}</p>
        </div>
        <div className="bg-white rounded-[20px] p-6 border border-gray-100">
          <p className="text-[#6a7282] text-[13px] mb-2">Engagement</p>
          <p className="font-bold text-[28px] text-[#10182c]">{pmAnalyticsData.engagement}</p>
          <p className="text-[#6a7282] text-[12px] mt-1">{pmAnalyticsData.engagementDesc}</p>
        </div>
        <div className="bg-white rounded-[20px] p-6 border border-gray-100">
          <p className="text-[#6a7282] text-[13px] mb-2">Average Review</p>
          <p className="font-bold text-[28px] text-[#10182c]">{pmAnalyticsData.averageReview}</p>
          <p className="text-[#6a7282] text-[12px] mt-1">Based on {pmAnalyticsData.reviewCount} reviews</p>
        </div>
        <div className="bg-white rounded-[20px] p-6 border border-gray-100">
          <p className="text-[#6a7282] text-[13px] mb-2">Market Comparison</p>
          <p className="font-bold text-[28px] text-green-600">{pmAnalyticsData.marketComparison}</p>
          <p className="text-[#6a7282] text-[12px] mt-1">In your location</p>
        </div>
      </div>

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

  const renderPMProfile = () => (
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

  const renderPMTeams = () => (
    <div className="space-y-6">
      <div>
        <h1 className="font-['Montserrat',sans-serif] font-bold text-[32px] text-[#10182c]">Teams and Roles</h1>
        <p className="text-[#6a7282] text-[16px] font-['Mulish',sans-serif] mt-1">Invite a Team Member to Okonkwo Properties Ltd</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
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

  const renderPMSettings = () => (
    <div className="space-y-6">
      <div>
        <h1 className="font-['Montserrat',sans-serif] font-bold text-[32px] text-[#10182c]">PM Settings</h1>
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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-[#f9fafb]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden text-gray-600 hover:text-[#10182c]">
              <Menu size={24} />
            </button>
            <Link to="/" className="font-['Montserrat',sans-serif] text-[24px] font-bold text-[#10182c]">
              Apartey <span className="text-[#c85212] text-[12px] ml-1">ADMIN</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setProfileModalOpen(true)}
              className="px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 rounded-[10px] text-[13px] font-bold text-gray-700 transition-colors flex items-center gap-2"
            >
              <RefreshCw size={16} />
              <span className="hidden md:inline">Switch Profile</span>
            </button>

            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="w-10 h-10 rounded-full bg-[#c85212] flex items-center justify-center text-white font-bold">
                <Shield size={20} />
              </div>
              <div className="hidden sm:block">
                <p className="text-[13px] font-bold text-[#10182c]">Admin User</p>
                <p className="text-[12px] text-gray-500">System Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:sticky top-[73px] left-0 h-[calc(100vh-73px)] w-64 bg-white border-r border-gray-200 transition-transform z-40 flex flex-col`}>
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-[14px] font-medium transition-colors ${
                activeTab === "overview" ? 'bg-[#c85212] text-white' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <LayoutDashboard size={18} />
              Overview
            </button>

            <button
              onClick={() => setActiveTab("approvals")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-[14px] font-medium transition-colors ${
                activeTab === "approvals" ? 'bg-[#c85212] text-white' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Clock size={18} />
              Property Approvals
              {stats.pendingApprovals > 0 && (
                <span className="ml-auto bg-[#c85212] text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                  {stats.pendingApprovals}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab("users")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-[14px] font-medium transition-colors ${
                activeTab === "users" ? 'bg-[#c85212] text-white' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Users size={18} />
              User Management
            </button>

            <button
              onClick={() => setActiveTab("properties")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-[14px] font-medium transition-colors ${
                activeTab === "properties" ? 'bg-[#c85212] text-white' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Home size={18} />
              All Properties
            </button>

            <button
              onClick={() => setActiveTab("reviews")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-[14px] font-medium transition-colors ${
                activeTab === "reviews" ? 'bg-[#c85212] text-white' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Star size={18} />
              Reviews
            </button>

            <button
              onClick={() => setActiveTab("analytics")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-[14px] font-medium transition-colors ${
                activeTab === "analytics" ? 'bg-[#c85212] text-white' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Activity size={18} />
              Analytics
            </button>

            <button
              onClick={() => setActiveTab("services")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-[14px] font-medium transition-colors ${
                activeTab === "services" ? 'bg-[#c85212] text-white' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Wrench size={18} />
              Services
              <span className="ml-auto bg-[#fbff79] text-[#10182c] text-[10px] font-bold px-2 py-0.5 rounded-full">3 pending</span>
            </button>

            <button
              onClick={() => setActiveTab("partners")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-[14px] font-medium transition-colors ${
                activeTab === "partners" ? 'bg-[#c85212] text-white' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Store size={18} />
              Partners
              <span className="ml-auto bg-[#fbff79] text-[#10182c] text-[10px] font-bold px-2 py-0.5 rounded-full">2 pending</span>
            </button>

            <div className="pt-4 mt-4 border-t border-gray-200">
              <button
                onClick={() => setActiveTab("pm-dashboard")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-[14px] font-medium transition-colors ${
                  activeTab === "pm-dashboard" ? 'bg-[#c85212] text-white' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <LayoutDashboard size={18} />
                PM Dashboard
              </button>

              <button
                onClick={() => setActiveTab("pm-portfolio")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-[14px] font-medium transition-colors ${
                  activeTab === "pm-portfolio" ? 'bg-[#c85212] text-white' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Building2 size={18} />
                My Portfolio
              </button>

              <button
                onClick={() => setActiveTab("pm-enquiries")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-[14px] font-medium transition-colors ${
                  activeTab === "pm-enquiries" ? 'bg-[#c85212] text-white' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <MessageSquare size={18} />
                PM Enquiries
              </button>

              <button
                onClick={() => setActiveTab("pm-prescreened")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-[14px] font-medium transition-colors ${
                  activeTab === "pm-prescreened" ? 'bg-[#c85212] text-white' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <CheckCircle size={18} />
                Pre-Screened Queue
              </button>

              <button
                onClick={() => setActiveTab("pm-property-management")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-[14px] font-medium transition-colors ${
                  activeTab === "pm-property-management" ? 'bg-[#c85212] text-white' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Home size={18} />
                Property Mgmt
              </button>

              <button
                onClick={() => setActiveTab("pm-rewards")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-[14px] font-medium transition-colors ${
                  activeTab === "pm-rewards" ? 'bg-[#c85212] text-white' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Gift size={18} />
                Rewards
              </button>

              <button
                onClick={() => setActiveTab("pm-analytics")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-[14px] font-medium transition-colors ${
                  activeTab === "pm-analytics" ? 'bg-[#c85212] text-white' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <TrendingUp size={18} />
                PM Analytics
              </button>

              <button
                onClick={() => setActiveTab("pm-profile")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-[14px] font-medium transition-colors ${
                  activeTab === "pm-profile" ? 'bg-[#c85212] text-white' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <User size={18} />
                Firm Profile
              </button>

              <button
                onClick={() => setActiveTab("pm-teams")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-[14px] font-medium transition-colors ${
                  activeTab === "pm-teams" ? 'bg-[#c85212] text-white' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Users size={18} />
                Teams & Roles
              </button>

              <button
                onClick={() => setActiveTab("pm-settings")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-[14px] font-medium transition-colors ${
                  activeTab === "pm-settings" ? 'bg-[#c85212] text-white' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Settings size={18} />
                PM Settings
              </button>
            </div>

            <div className="pt-4 mt-4 border-t border-gray-200">
              <p className="px-4 py-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Role Dashboards</p>

              <Link
                to="/renter"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-[14px] font-medium text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <Users size={18} />
                Renter View
              </Link>

              <Link
                to="/homeowner"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-[14px] font-medium text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <Home size={18} />
                Homeowner View
              </Link>

              <Link
                to="/agent"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-[14px] font-medium text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <Building size={18} />
                Agent View
              </Link>
            </div>
          </nav>

          <div className="p-4 border-t border-gray-200 space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-[14px] font-medium text-gray-600 hover:bg-gray-50 transition-colors">
              <Settings size={18} />
              Settings
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-[14px] font-medium text-red-600 hover:bg-red-50 transition-colors">
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 max-w-[1400px] mx-auto w-full">
          {activeTab === "overview" && renderOverviewTab()}
          {activeTab === "approvals" && renderApprovalsTab()}
          {activeTab === "users" && renderUsersTab()}
          {activeTab === "properties" && renderPropertiesTab()}
          {activeTab === "reviews" && renderReviewsTab()}
          {activeTab === "analytics" && renderAnalyticsTab()}
          {activeTab === "pm-dashboard" && renderPMDashboard()}
          {activeTab === "pm-portfolio" && renderPMPortfolio()}
          {activeTab === "pm-enquiries" && renderPMEnquiries()}
          {activeTab === "pm-prescreened" && renderPMPrescreened()}
          {activeTab === "pm-property-management" && renderPMPropertyManagement()}
          {activeTab === "pm-rewards" && renderPMRewards()}
          {activeTab === "pm-analytics" && renderPMAnalytics()}
          {activeTab === "pm-profile" && renderPMProfile()}
          {activeTab === "pm-teams" && renderPMTeams()}
          {activeTab === "pm-settings" && renderPMSettings()}

          {activeTab === "partners" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-['Montserrat',sans-serif] font-bold text-[28px] text-[#10182c]">Partner Brands</h1>
                  <p className="text-gray-500 text-[14px] mt-1">Review and approve brand partner applications from the public form.</p>
                </div>
                <Link to="/partners" target="_blank" className="text-[#c85212] text-[13px] font-bold hover:underline flex items-center gap-1">
                  View partner page <ArrowRight size={14} />
                </Link>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4">
                {[["Pending Review", "2", "bg-[#fbff79]/20 text-[#c85212]"], ["Live Partners", "5", "bg-green-50 text-green-600"], ["Rejected", "1", "bg-red-50 text-red-500"]].map(([l, v, cls]) => (
                  <div key={l} className="bg-white border border-gray-100 rounded-[16px] p-5 flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-[12px] flex items-center justify-center ${cls} shrink-0`}>
                      <Store size={20} />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-gray-400 font-bold">{l}</p>
                      <p className="text-[28px] font-bold text-[#10182c] leading-none mt-1">{v}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pending applications */}
              <div className="bg-white border border-gray-100 rounded-[20px] shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                  <h2 className="font-bold text-[#10182c] text-[16px]">Pending Applications</h2>
                  <span className="bg-[#fbff79] text-[#10182c] text-[11px] font-bold px-3 py-1 rounded-full">2 awaiting</span>
                </div>
                <div className="divide-y divide-gray-50">
                  {[
                    { name: "Lagos Furniture Hub", category: "Furniture", owner: "Tunde Adeyemi", phone: "+234 805 444 5555", tier: "Growth", submitted: "3 hours ago" },
                    { name: "KitchenPlus Nigeria", category: "Kitchen & Dining", owner: "Ngozi Eze", phone: "+234 806 555 6666", tier: "Starter", submitted: "1 day ago" },
                  ].map((app) => (
                    <div key={app.name} className="px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-[10px] bg-[#10182c] flex items-center justify-center text-white font-bold text-[16px] shrink-0">
                          {app.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-[#10182c] text-[15px]">{app.name}</p>
                          <p className="text-[12px] text-gray-500 mt-0.5">{app.category} · {app.owner} · Tier: {app.tier}</p>
                          <p className="text-[11px] text-gray-400 mt-0.5">{app.phone} · Submitted {app.submitted}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <button className="flex items-center gap-1.5 px-4 py-2 rounded-[10px] border border-gray-200 text-gray-500 text-[12px] font-bold hover:bg-gray-50 transition-colors">
                          <Eye size={13} /> Preview
                        </button>
                        <button className="flex items-center gap-1.5 px-4 py-2 rounded-[10px] bg-green-500 hover:bg-green-600 text-white text-[12px] font-bold transition-colors">
                          <Check size={13} /> Approve
                        </button>
                        <button className="flex items-center gap-1.5 px-4 py-2 rounded-[10px] bg-red-50 hover:bg-red-100 text-red-500 text-[12px] font-bold transition-colors">
                          <X size={13} /> Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live partners */}
              <div className="bg-white border border-gray-100 rounded-[20px] shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                  <h2 className="font-bold text-[#10182c] text-[16px]">Live Partners</h2>
                  <Link to="/partners" target="_blank" className="text-[#c85212] text-[13px] font-bold hover:underline">View on site</Link>
                </div>
                <div className="divide-y divide-gray-50">
                  {[
                    { name: "HomeStyle Furniture", category: "Furniture", tier: "Pro", clicks: 312 },
                    { name: "CoolBreeze Appliances", category: "Appliances", tier: "Growth", clicks: 189 },
                    { name: "SleepWell Bedding", category: "Bedding & Linen", tier: "Starter", clicks: 74 },
                    { name: "SmartNest Lagos", category: "Smart Home", tier: "Growth", clicks: 210 },
                    { name: "GreenLeaf Garden Co.", category: "Garden & Outdoor", tier: "Starter", clicks: 43 },
                  ].map((partner) => (
                    <div key={partner.name} className="px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-[10px] bg-[#10182c] flex items-center justify-center text-white font-bold text-[14px]">{partner.name.charAt(0)}</div>
                        <div>
                          <p className="font-bold text-[#10182c] text-[14px]">{partner.name}</p>
                          <p className="text-[12px] text-gray-400">{partner.category} · {partner.tier} · {partner.clicks} clicks</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="text-[12px] text-gray-400 hover:text-red-500 font-bold px-3 py-1.5 rounded-[8px] hover:bg-red-50 transition-colors">Unpublish</button>
                        <button className="text-[12px] text-[#c85212] font-bold px-3 py-1.5 rounded-[8px] hover:bg-[#c85212]/5 transition-colors">Edit</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "services" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-['Montserrat',sans-serif] font-bold text-[28px] text-[#10182c]">Service Listings</h1>
                  <p className="text-gray-500 text-[14px] mt-1">Review and publish service provider submissions from the public form.</p>
                </div>
                <Link to="/services" target="_blank" className="text-[#c85212] text-[13px] font-bold hover:underline flex items-center gap-1">
                  View public board <ArrowRight size={14} />
                </Link>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4">
                {[["Pending Review", "3", "bg-[#fbff79]/20 text-[#c85212]"], ["Live Listings", "9", "bg-green-50 text-green-600"], ["Rejected", "2", "bg-red-50 text-red-500"]].map(([l, v, cls]) => (
                  <div key={l} className="bg-white border border-gray-100 rounded-[16px] p-5 flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-[12px] flex items-center justify-center ${cls} shrink-0`}>
                      <Wrench size={20} />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-gray-400 font-bold">{l}</p>
                      <p className="text-[28px] font-bold text-[#10182c] leading-none mt-1">{v}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pending submissions */}
              <div className="bg-white border border-gray-100 rounded-[20px] shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                  <h2 className="font-bold text-[#10182c] text-[16px]">Pending Review</h2>
                  <span className="bg-[#fbff79] text-[#10182c] text-[11px] font-bold px-3 py-1 rounded-full">3 awaiting</span>
                </div>
                <div className="divide-y divide-gray-50">
                  {[
                    { name: "ProClean Services", category: "Cleaning", owner: "Ada Nwosu", phone: "+234 801 111 2222", location: "Lekki, Lagos", submitted: "2 hours ago" },
                    { name: "KwikMove Logistics", category: "Moving & Logistics", owner: "Seun Badejo", phone: "+234 802 222 3333", location: "Nationwide", submitted: "5 hours ago" },
                    { name: "BrightWire Electricals", category: "Maintenance", owner: "Emeka Obi", phone: "+234 803 333 4444", location: "Abuja", submitted: "1 day ago" },
                  ].map((sub) => (
                    <div key={sub.name} className="px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-[10px] bg-[#10182c] flex items-center justify-center text-white font-bold text-[16px] shrink-0">
                          {sub.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-[#10182c] text-[15px]">{sub.name}</p>
                          <p className="text-[12px] text-gray-500 mt-0.5">{sub.category} · {sub.owner} · {sub.location}</p>
                          <p className="text-[11px] text-gray-400 mt-0.5">{sub.phone} · Submitted {sub.submitted}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <button className="flex items-center gap-1.5 px-4 py-2 rounded-[10px] border border-gray-200 text-gray-500 text-[12px] font-bold hover:bg-gray-50 transition-colors">
                          <Eye size={13} /> Preview
                        </button>
                        <button className="flex items-center gap-1.5 px-4 py-2 rounded-[10px] bg-green-500 hover:bg-green-600 text-white text-[12px] font-bold transition-colors">
                          <Check size={13} /> Approve
                        </button>
                        <button className="flex items-center gap-1.5 px-4 py-2 rounded-[10px] bg-red-50 hover:bg-red-100 text-red-500 text-[12px] font-bold transition-colors">
                          <X size={13} /> Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live listings */}
              <div className="bg-white border border-gray-100 rounded-[20px] shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                  <h2 className="font-bold text-[#10182c] text-[16px]">Live Listings</h2>
                  <Link to="/services" target="_blank" className="text-[#c85212] text-[13px] font-bold hover:underline">View on site</Link>
                </div>
                <div className="divide-y divide-gray-50">
                  {[
                    { name: "FastFix Plumbing", category: "Maintenance", enquiries: 14, rating: "4.8" },
                    { name: "ClearSpace Cleaning Co.", category: "Cleaning", enquiries: 31, rating: "4.9" },
                    { name: "LensCraft Studios", category: "Photography", enquiries: 22, rating: "4.9" },
                  ].map((listing) => (
                    <div key={listing.name} className="px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-[10px] bg-[#10182c] flex items-center justify-center text-white font-bold text-[14px]">{listing.name.charAt(0)}</div>
                        <div>
                          <p className="font-bold text-[#10182c] text-[14px]">{listing.name}</p>
                          <p className="text-[12px] text-gray-400">{listing.category} · ⭐ {listing.rating} · {listing.enquiries} enquiries</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="text-[12px] text-gray-400 hover:text-red-500 font-bold px-3 py-1.5 rounded-[8px] hover:bg-red-50 transition-colors">Unpublish</button>
                        <button className="text-[12px] text-[#c85212] font-bold px-3 py-1.5 rounded-[8px] hover:bg-[#c85212]/5 transition-colors">Edit</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Property Details Modal */}
      <AnimatePresence>
        {showPropertyDetailsModal && selectedProperty !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm" onClick={() => setShowPropertyDetailsModal(false)}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[24px] overflow-hidden w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
            >
              {(() => {
                const property = pendingProperties.find(p => p.id === selectedProperty);
                if (!property) return null;

                return (
                  <>
                    <div className="relative h-64">
                      <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                      <button
                        onClick={() => setShowPropertyDetailsModal(false)}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors"
                      >
                        <X size={20} />
                      </button>
                      <div className="absolute bottom-4 left-4">
                        <span className={`px-3 py-1.5 rounded-full text-[11px] font-bold ${
                          property.status === 'pending' ? 'bg-orange-100 text-[#c85212]' :
                          property.status === 'approved' ? 'bg-green-100 text-green-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {property.status === 'pending' ? 'Pending Review' :
                           property.status === 'approved' ? 'Approved' : 'Rejected'}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 space-y-6">
                      <div>
                        <h2 className="font-['Montserrat',sans-serif] text-[24px] font-bold text-[#10182c] mb-2">{property.title}</h2>
                        <p className="text-[15px] text-gray-500 flex items-center gap-1">
                          <MapPin size={16} />
                          {property.address}, {property.city}, {property.country}
                        </p>
                        <p className="text-[28px] font-bold text-[#c85212] mt-3">{property.price}</p>
                      </div>

                      <div className="flex items-center gap-6 text-[14px] text-gray-600">
                        <span className="flex items-center gap-2">
                          <Bed size={18} className="text-gray-400" />
                          {property.beds} Bedrooms
                        </span>
                        <span className="flex items-center gap-2">
                          <Bath size={18} className="text-gray-400" />
                          {property.baths} Bathrooms
                        </span>
                        <span className="flex items-center gap-2">
                          <Maximize size={18} className="text-gray-400" />
                          {property.sqft}
                        </span>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <h3 className="font-bold text-[16px] text-[#10182c] mb-2">Description</h3>
                        <p className="text-[14px] text-gray-600 leading-relaxed">{property.description}</p>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <h3 className="font-bold text-[16px] text-[#10182c] mb-3">Listing Information</h3>
                        <div className="grid grid-cols-2 gap-4 text-[13px]">
                          <div>
                            <p className="text-gray-500 mb-1">Listed By</p>
                            <p className="font-bold text-[#10182c]">{property.ownerName}</p>
                            <p className="text-gray-600">{property.listingType === 'agent' ? 'Agent' : 'Homeowner'}</p>
                          </div>
                          <div>
                            <p className="text-gray-500 mb-1">Contact</p>
                            <p className="font-bold text-[#10182c]">{property.ownerEmail}</p>
                          </div>
                          <div>
                            <p className="text-gray-500 mb-1">Submitted Date</p>
                            <p className="font-bold text-[#10182c]">{property.submittedDate}</p>
                          </div>
                        </div>
                      </div>

                      {property.status === 'pending' && (
                        <div className="flex gap-3 pt-4">
                          <button
                            onClick={() => handleApproveProperty(property.id)}
                            className="flex-1 py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-[12px] transition-colors text-[14px] flex items-center justify-center gap-2"
                          >
                            <Check size={16} /> Approve Listing
                          </button>
                          <button
                            onClick={() => handleRejectProperty(property.id)}
                            className="flex-1 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-[12px] transition-colors text-[14px] flex items-center justify-center gap-2"
                          >
                            <X size={16} /> Reject Listing
                          </button>
                        </div>
                      )}
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <ProfileSwitcherModal
        open={profileModalOpen}
        onOpenChange={setProfileModalOpen}
        currentRole="admin"
        onRoleSelect={handleRoleSwitch}
      />
    </motion.div>
  );
}
