import { useState } from "react";
import { useParams, Link } from "react-router";
import { 
  ArrowLeft, MapPin, Edit2, Calendar, MessageSquare, Clock, 
  CheckCircle2, AlertCircle, TrendingUp, Users, Eye, MousePointerClick, 
  Upload, X, Check, FileText, Activity
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { toast, Toaster } from "sonner@2.0.3";

// Dummy data to simulate the specific listing
const MOCK_LISTING = {
  id: "1",
  image: "https://images.unsplash.com/photo-1770217102047-06e8490267ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFsJTIwYXBhcnRtZW50JTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NzMxNjEyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  title: "2 Pankshin Road",
  location: "Plateau, Nigeria",
  status: "active",
  propertyStatus: "occupied",
  tenantEmail: "yakubu.m@example.com",
  leaseStart: "2025-01-01",
  leaseDuration: "12 months",
  rentAmount: "£450,000",
  tenantReviews: "Great tenant, communicates well and pays on time.",
  newEnquiries: 3,
  totalEnquiries: 12,
  price: "£450,000",
  description: "A beautiful and well-maintained property in the heart of Plateau. Features spacious living areas and a modern kitchen.",
  views: 342,
  bookings: [
    { id: 1, name: "Yakubu M.", date: "Oct 24", time: "10:00 AM", status: "confirmed" },
    { id: 2, name: "Sarah T.", date: "Oct 26", time: "2:30 PM", status: "pending" }
  ],
  enquiries: [
    { id: 1, name: "Amaka D.", date: "2 hours ago", message: "Is this property still available for viewing this weekend?", status: "unread", email: "amaka@example.com", phone: "+234 801 234 5678" },
    { id: 2, name: "Chidi O.", date: "1 day ago", message: "Do you allow pets in the apartment?", status: "read", email: "chidi.o@example.com", phone: "+234 802 345 6789" },
    { id: 3, name: "Binta F.", date: "3 days ago", message: "I would like to know if the rent is negotiable. Thanks.", status: "read", email: "binta99@example.com", phone: "+234 803 456 7890" }
  ]
};

export function HomeownerListingDetailsPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const [listing, setListing] = useState(MOCK_LISTING);
  
  // Edit states for tenant details
  const [isEditingTenant, setIsEditingTenant] = useState(false);
  const [tenantDetails, setTenantDetails] = useState({
    propertyStatus: listing.propertyStatus,
    email: listing.tenantEmail,
    rent: listing.rentAmount,
    leaseStart: listing.leaseStart,
    leaseDuration: listing.leaseDuration,
    reviews: listing.tenantReviews
  });

  // Edit states for property details
  const [isEditingProperty, setIsEditingProperty] = useState(false);
  const [propertyDetails, setPropertyDetails] = useState({
    title: listing.title,
    location: listing.location,
    price: listing.price,
    description: listing.description,
    status: listing.status
  });

  const handleSaveTenant = () => {
    setListing({
      ...listing,
      propertyStatus: tenantDetails.propertyStatus,
      tenantEmail: tenantDetails.email,
      rentAmount: tenantDetails.rent,
      leaseStart: tenantDetails.leaseStart,
      leaseDuration: tenantDetails.leaseDuration,
      tenantReviews: tenantDetails.reviews
    });
    setIsEditingTenant(false);
    toast.success("Tenant information updated successfully.");
  };

  const handleSaveProperty = () => {
    setListing({
      ...listing,
      title: propertyDetails.title,
      location: propertyDetails.location,
      price: propertyDetails.price,
      description: propertyDetails.description,
      status: propertyDetails.status
    });
    setIsEditingProperty(false);
    toast.success("Property details updated successfully.");
  };

  return (
    <div className="min-h-screen bg-[#f5f6f8] flex flex-col font-['Inter',sans-serif]">
      <Toaster position="top-center" />
      
      {/* Header Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 px-4 py-4 lg:px-8 shadow-sm">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/homeowner" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#10182c] hover:text-white transition-colors">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="font-['Montserrat',sans-serif] text-[20px] font-bold text-[#10182c]">{listing.title}</h1>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider ${
                  listing.propertyStatus === 'occupied' ? 'bg-blue-100 text-blue-700' : 
                  listing.propertyStatus === 'vacant' ? 'bg-green-100 text-green-700' : 
                  'bg-gray-100 text-gray-700'
                }`}>
                  {listing.propertyStatus}
                </span>
              </div>
              <p className="text-[13px] text-gray-500 flex items-center gap-1 mt-0.5"><MapPin size={14} /> {listing.location}</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            {listing.status !== 'unlisted' ? (
              <Link to={`/properties/${listing.id}`} className="bg-white border border-gray-200 hover:bg-gray-50 text-[#10182c] px-4 py-2 rounded-[10px] text-[13px] font-bold transition-colors flex items-center gap-2">
                <Eye size={16} /> View Public Ad
              </Link>
            ) : (
              <span className="bg-gray-50 border border-gray-200 text-gray-400 px-4 py-2 rounded-[10px] text-[13px] font-bold flex items-center gap-2 cursor-not-allowed">
                <Eye size={16} /> Ad Unlisted
              </span>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 lg:p-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-[20px] p-5 border border-gray-100 shadow-sm flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[#10b981]/10 flex items-center justify-center text-[#10b981]">
                  <Eye size={20} />
                </div>
                <span className="text-gray-500 text-[12px] font-bold uppercase tracking-wider">Ad Views</span>
              </div>
              <div className="flex items-end gap-3">
                <h3 className="text-[#10182c] text-[28px] font-bold font-['Montserrat',sans-serif]">
                  {listing.status === 'unlisted' ? '--' : listing.views}
                </h3>
                {listing.status !== 'unlisted' && <span className="text-[#10b981] text-[13px] font-medium flex items-center mb-1.5"><TrendingUp size={14} className="mr-1"/> +12%</span>}
              </div>
            </div>

            <div className="bg-white rounded-[20px] p-5 border border-gray-100 shadow-sm flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <MessageSquare size={20} />
                </div>
                <span className="text-gray-500 text-[12px] font-bold uppercase tracking-wider">Total Enquiries</span>
              </div>
              <div className="flex items-end gap-3">
                <h3 className="text-[#10182c] text-[28px] font-bold font-['Montserrat',sans-serif]">{listing.totalEnquiries}</h3>
                {listing.newEnquiries > 0 && <span className="bg-red-100 text-red-700 text-[11px] font-bold px-2 py-0.5 rounded-full mb-1.5">{listing.newEnquiries} New</span>}
              </div>
            </div>

            <div className="bg-white rounded-[20px] p-5 border border-gray-100 shadow-sm flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                  <Calendar size={20} />
                </div>
                <span className="text-gray-500 text-[12px] font-bold uppercase tracking-wider">Bookings</span>
              </div>
              <h3 className="text-[#10182c] text-[28px] font-bold font-['Montserrat',sans-serif]">{listing.bookings.length}</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Navigation & Image */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden p-3">
                <div className="relative h-[240px] w-full rounded-[16px] overflow-hidden mb-4 group">
                  <ImageWithFallback src={listing.image} alt={listing.title} className="w-full h-full object-cover" />
                  <button className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-[#10182c] px-3 py-1.5 rounded-lg text-[12px] font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                    <Edit2 size={14} /> Change Photo
                  </button>
                  <div className="absolute top-3 left-3 flex gap-2">
                    {listing.status === 'active' ? (
                      <span className="bg-[#10b981] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> Ad Active
                      </span>
                    ) : listing.status === 'unlisted' ? (
                      <span className="bg-gray-800 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                        Unlisted
                      </span>
                    ) : (
                      <span className="bg-gray-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                        Ad Paused
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="space-y-1">
                  <button onClick={() => setActiveTab('overview')} className={`w-full text-left px-4 py-3 rounded-xl text-[14px] font-bold transition-colors flex items-center gap-3 ${activeTab === 'overview' ? 'bg-[#c85212]/10 text-[#c85212]' : 'text-gray-600 hover:bg-gray-50'}`}>
                    <Activity size={18} /> Overview & Status
                  </button>
                  <button onClick={() => setActiveTab('tenant')} className={`w-full text-left px-4 py-3 rounded-xl text-[14px] font-bold transition-colors flex items-center gap-3 ${activeTab === 'tenant' ? 'bg-[#c85212]/10 text-[#c85212]' : 'text-gray-600 hover:bg-gray-50'}`}>
                    <Users size={18} /> Tenant Details
                  </button>
                  <button onClick={() => setActiveTab('edit')} className={`w-full text-left px-4 py-3 rounded-xl text-[14px] font-bold transition-colors flex items-center gap-3 ${activeTab === 'edit' ? 'bg-[#c85212]/10 text-[#c85212]' : 'text-gray-600 hover:bg-gray-50'}`}>
                    <Edit2 size={18} /> Edit Property
                  </button>
                  <button onClick={() => setActiveTab('bookings')} className={`w-full text-left px-4 py-3 rounded-xl text-[14px] font-bold transition-colors flex items-center gap-3 justify-between ${activeTab === 'bookings' ? 'bg-[#c85212]/10 text-[#c85212]' : 'text-gray-600 hover:bg-gray-50'}`}>
                    <div className="flex items-center gap-3">
                      <Calendar size={18} /> Bookings
                    </div>
                    {listing.bookings.length > 0 && <span className="bg-gray-200 text-gray-700 text-[11px] px-2 py-0.5 rounded-full">{listing.bookings.length}</span>}
                  </button>
                  <button onClick={() => setActiveTab('enquiries')} className={`w-full text-left px-4 py-3 rounded-xl text-[14px] font-bold transition-colors flex items-center gap-3 justify-between ${activeTab === 'enquiries' ? 'bg-[#c85212]/10 text-[#c85212]' : 'text-gray-600 hover:bg-gray-50'}`}>
                    <div className="flex items-center gap-3">
                      <MessageSquare size={18} /> Enquiries
                    </div>
                    {listing.enquiries.filter(e => e.status === 'unread').length > 0 && <span className="bg-red-100 text-red-700 text-[11px] px-2 py-0.5 rounded-full">{listing.enquiries.filter(e => e.status === 'unread').length}</span>}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Content Area */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-6 lg:p-8 min-h-[500px]">
                <AnimatePresence mode="wait">
                  
                  {/* OVERVIEW TAB */}
                  {activeTab === 'overview' && (
                    <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                      <div>
                        <h2 className="font-['Montserrat',sans-serif] text-[22px] font-bold text-[#10182c] mb-2">Current Status</h2>
                        <p className="text-[14px] text-gray-500">Manage the availability and ad visibility of this property.</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border border-gray-200 rounded-xl p-5">
                          <h3 className="text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2"><FileText size={16} /> Property Status</h3>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[15px] font-bold text-[#10182c]">Currently: <span className="capitalize">{listing.propertyStatus}</span></span>
                          </div>
                          <p className="text-[13px] text-gray-500 mb-5">Change this to "Occupied" once a lease is signed to collect tenant details.</p>
                          <button onClick={() => setActiveTab('tenant')} className="w-full bg-[#10182c] hover:bg-[#1a2642] text-white py-2.5 rounded-xl text-[13px] font-bold transition-colors">
                            Manage Occupancy
                          </button>
                        </div>

                        <div className="border border-gray-200 rounded-xl p-5">
                          <h3 className="text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2"><Eye size={16} /> Listing Ad Status</h3>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[15px] font-bold text-[#10182c]">Currently: <span className="capitalize">{listing.status}</span></span>
                          </div>
                          <p className="text-[13px] text-gray-500 mb-5">
                            {listing.status === 'unlisted' ? 'This property is not visible on the marketplace.' : 'Pause your ad to temporarily hide it from search results.'}
                          </p>
                          <div className="flex gap-2">
                            {listing.status !== 'unlisted' && (
                              <button 
                                onClick={() => {
                                  const newStatus = listing.status === 'active' ? 'inactive' : 'active';
                                  setListing({...listing, status: newStatus});
                                  setPropertyDetails({...propertyDetails, status: newStatus});
                                  toast.success(`Listing ad ${newStatus === 'active' ? 'activated' : 'paused'}.`);
                                }} 
                                className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-[#10182c] py-2.5 rounded-xl text-[13px] font-bold transition-colors"
                              >
                                {listing.status === 'active' ? 'Pause Listing' : 'Activate Listing'}
                              </button>
                            )}
                            <button 
                              onClick={() => {
                                const newStatus = listing.status === 'unlisted' ? 'inactive' : 'unlisted';
                                setListing({...listing, status: newStatus});
                                setPropertyDetails({...propertyDetails, status: newStatus});
                                toast.info(`Property is now ${newStatus}.`);
                              }} 
                              className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-[#10182c] py-2.5 rounded-xl text-[13px] font-bold transition-colors"
                            >
                              {listing.status === 'unlisted' ? 'Prepare Ad' : 'Unlist Entirely'}
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-100 pt-8 mt-4">
                        <h3 className="font-['Montserrat',sans-serif] text-[18px] font-bold text-[#10182c] mb-4">Recent Enquiries</h3>
                        {listing.newEnquiries > 0 ? (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#c85212]/10 text-[#c85212] flex items-center justify-center font-bold">A</div>
                                <div>
                                  <h4 className="font-bold text-[#10182c] text-[14px]">Amaka D.</h4>
                                  <p className="text-[12px] text-gray-500 truncate max-w-[200px] sm:max-w-md">Is this property still available for viewing this weekend?</p>
                                </div>
                              </div>
                              <span className="text-[11px] text-gray-400 group-hover:text-[#c85212] transition-colors">2 hours ago</span>
                            </div>
                            <button onClick={() => setActiveTab('enquiries')} className="text-[#c85212] text-[13px] font-bold hover:underline w-full text-center mt-2">View all {listing.totalEnquiries} messages</button>
                          </div>
                        ) : (
                          <div className="text-center py-8 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                            <MessageSquare size={32} className="mx-auto text-gray-300 mb-3" />
                            <p className="text-gray-500 text-[14px]">No new enquiries for this property.</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* TENANT DETAILS TAB */}
                  {activeTab === 'tenant' && (
                    <motion.div key="tenant" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="font-['Montserrat',sans-serif] text-[22px] font-bold text-[#10182c] mb-2">Occupancy & Tenant Info</h2>
                          <p className="text-[14px] text-gray-500">Track who is currently renting your property.</p>
                        </div>
                        {!isEditingTenant && (
                          <button onClick={() => setIsEditingTenant(true)} className="text-[#c85212] hover:bg-[#c85212]/10 px-4 py-2 rounded-xl text-[13px] font-bold transition-colors flex items-center gap-2">
                            <Edit2 size={16} /> Edit Details
                          </button>
                        )}
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <div className="mb-6">
                          <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Property Status</label>
                          {isEditingTenant ? (
                            <select 
                              value={tenantDetails.propertyStatus} 
                              onChange={(e) => setTenantDetails({...tenantDetails, propertyStatus: e.target.value})}
                              className="w-full md:w-1/2 border border-gray-300 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212] bg-white"
                            >
                              <option value="vacant">Vacant</option>
                              <option value="occupied">Occupied</option>
                              <option value="unavailable">Unavailable</option>
                            </select>
                          ) : (
                            <div className="flex items-center gap-2">
                              <span className={`px-3 py-1 rounded-md text-[13px] font-bold uppercase tracking-wider ${
                                listing.propertyStatus === 'occupied' ? 'bg-blue-100 text-blue-700' : 
                                listing.propertyStatus === 'vacant' ? 'bg-green-100 text-green-700' : 
                                'bg-gray-200 text-gray-700'
                              }`}>
                                {listing.propertyStatus}
                              </span>
                            </div>
                          )}
                        </div>

                        <AnimatePresence>
                          {(isEditingTenant ? tenantDetails.propertyStatus === 'occupied' : listing.propertyStatus === 'occupied') ? (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="space-y-5 border-t border-gray-200 pt-6">
                              <div className="bg-blue-50 text-blue-800 p-4 rounded-xl text-[13px] flex gap-3 items-start border border-blue-100 mb-6">
                                <CheckCircle2 className="shrink-0 text-blue-600 mt-0.5" size={16} />
                                <p>This information is usually automatically populated when a renter signs their lease via the Apartey platform. You can also manually edit these details.</p>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                  <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Tenant Email</label>
                                  {isEditingTenant ? (
                                    <input type="email" value={tenantDetails.email} onChange={(e) => setTenantDetails({...tenantDetails, email: e.target.value})} placeholder="tenant@example.com" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212] bg-white" />
                                  ) : (
                                    <div className="text-[15px] font-medium text-[#10182c]">{listing.tenantEmail || 'Not provided'}</div>
                                  )}
                                </div>
                                <div>
                                  <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Agreed Rent Amount</label>
                                  {isEditingTenant ? (
                                    <input type="text" value={tenantDetails.rent} onChange={(e) => setTenantDetails({...tenantDetails, rent: e.target.value})} className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212] bg-white" />
                                  ) : (
                                    <div className="text-[15px] font-medium text-[#10182c]">{listing.rentAmount || 'Not provided'}</div>
                                  )}
                                </div>
                                <div>
                                  <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Lease Start Date</label>
                                  {isEditingTenant ? (
                                    <input type="date" value={tenantDetails.leaseStart} onChange={(e) => setTenantDetails({...tenantDetails, leaseStart: e.target.value})} className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212] bg-white" />
                                  ) : (
                                    <div className="text-[15px] font-medium text-[#10182c]">{listing.leaseStart || 'Not provided'}</div>
                                  )}
                                </div>
                                <div>
                                  <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Lease Duration</label>
                                  {isEditingTenant ? (
                                    <select value={tenantDetails.leaseDuration} onChange={(e) => setTenantDetails({...tenantDetails, leaseDuration: e.target.value})} className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212] bg-white">
                                      <option value="6 months">6 months</option>
                                      <option value="12 months">12 months</option>
                                      <option value="24 months">24 months</option>
                                      <option value="custom">Custom</option>
                                    </select>
                                  ) : (
                                    <div className="text-[15px] font-medium text-[#10182c]">{listing.leaseDuration || 'Not provided'}</div>
                                  )}
                                </div>
                              </div>
                              <div>
                                <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Tenant Notes & Reviews</label>
                                {isEditingTenant ? (
                                  <textarea value={tenantDetails.reviews} onChange={(e) => setTenantDetails({...tenantDetails, reviews: e.target.value})} rows={4} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212] bg-white resize-none"></textarea>
                                ) : (
                                  <div className="text-[14px] text-gray-700 bg-white p-4 rounded-xl border border-gray-200 min-h-[100px]">
                                    {listing.tenantReviews || 'No notes added yet.'}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>

                        {(!isEditingTenant && listing.propertyStatus === 'vacant') && (
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 p-5 bg-white border border-gray-200 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
                            <div>
                              <h4 className="text-[14px] font-bold text-[#10182c]">No active tenant</h4>
                              <p className="text-[13px] text-gray-500">This property is currently vacant. Has a renter signed a lease offline?</p>
                            </div>
                            <button onClick={() => setIsEditingTenant(true)} className="bg-[#10182c] hover:bg-[#1a2642] text-white px-5 py-2.5 rounded-xl text-[13px] font-bold transition-colors whitespace-nowrap shadow-sm">
                              Manually Add Tenant
                            </button>
                          </motion.div>
                        )}
                      </div>

                      {isEditingTenant && (
                        <div className="flex justify-end gap-3 pt-4">
                          <button onClick={() => {
                            setTenantDetails({
                              propertyStatus: listing.propertyStatus,
                              email: listing.tenantEmail,
                              rent: listing.rentAmount,
                              leaseStart: listing.leaseStart,
                              leaseDuration: listing.leaseDuration,
                              reviews: listing.tenantReviews
                            });
                            setIsEditingTenant(false);
                          }} className="px-6 py-2.5 rounded-xl text-[14px] font-bold text-gray-600 hover:bg-gray-100 transition-colors">
                            Cancel
                          </button>
                          <button onClick={handleSaveTenant} className="bg-[#10182c] hover:bg-[#1a2642] text-white px-6 py-2.5 rounded-xl text-[14px] font-bold transition-colors shadow-sm">
                            Save Tenant Info
                          </button>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* EDIT PROPERTY TAB */}
                  {activeTab === 'edit' && (
                    <motion.div key="edit" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="font-['Montserrat',sans-serif] text-[22px] font-bold text-[#10182c] mb-2">Edit Listing Details</h2>
                          <p className="text-[14px] text-gray-500">Update how your property appears to potential renters.</p>
                        </div>
                        {!isEditingProperty && (
                          <button onClick={() => setIsEditingProperty(true)} className="text-[#c85212] hover:bg-[#c85212]/10 px-4 py-2 rounded-xl text-[13px] font-bold transition-colors flex items-center gap-2">
                            <Edit2 size={16} /> Edit Mode
                          </button>
                        )}
                      </div>

                      <div className="space-y-5">
                        <div>
                          <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Property Title</label>
                          {isEditingProperty ? (
                            <input type="text" value={propertyDetails.title} onChange={(e) => setPropertyDetails({...propertyDetails, title: e.target.value})} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]" />
                          ) : (
                            <div className="text-[15px] font-medium text-[#10182c] bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">{listing.title}</div>
                          )}
                        </div>
                        <div>
                          <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Location</label>
                          {isEditingProperty ? (
                            <div className="relative">
                              <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                              <input type="text" value={propertyDetails.location} onChange={(e) => setPropertyDetails({...propertyDetails, location: e.target.value})} className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]" />
                            </div>
                          ) : (
                            <div className="text-[15px] font-medium text-[#10182c] bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 flex items-center gap-2"><MapPin size={16} className="text-gray-400" /> {listing.location}</div>
                          )}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Price</label>
                            {isEditingProperty ? (
                              <input type="text" value={propertyDetails.price} onChange={(e) => setPropertyDetails({...propertyDetails, price: e.target.value})} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]" />
                            ) : (
                              <div className="text-[15px] font-medium text-[#10182c] bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">{listing.price}</div>
                            )}
                          </div>
                          <div>
                            <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Ad Status</label>
                            {isEditingProperty ? (
                              <select value={propertyDetails.status} onChange={(e) => setPropertyDetails({...propertyDetails, status: e.target.value})} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212] bg-white">
                                <option value="active">Active</option>
                                <option value="inactive">Paused / Inactive</option>
                              </select>
                            ) : (
                              <div className="text-[15px] font-medium text-[#10182c] bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 capitalize">{listing.status}</div>
                            )}
                          </div>
                        </div>
                        <div>
                          <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-2">Description</label>
                          {isEditingProperty ? (
                            <textarea value={propertyDetails.description} onChange={(e) => setPropertyDetails({...propertyDetails, description: e.target.value})} rows={5} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212] resize-none"></textarea>
                          ) : (
                            <div className="text-[14px] text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100 min-h-[100px]">
                              {listing.description}
                            </div>
                          )}
                        </div>
                      </div>

                      {isEditingProperty && (
                        <div className="flex justify-end gap-3 pt-4">
                          <button onClick={() => {
                            setPropertyDetails({
                              title: listing.title,
                              location: listing.location,
                              price: listing.price,
                              description: listing.description,
                              status: listing.status
                            });
                            setIsEditingProperty(false);
                          }} className="px-6 py-2.5 rounded-xl text-[14px] font-bold text-gray-600 hover:bg-gray-100 transition-colors">
                            Cancel
                          </button>
                          <button onClick={handleSaveProperty} className="bg-[#10182c] hover:bg-[#1a2642] text-white px-6 py-2.5 rounded-xl text-[14px] font-bold transition-colors shadow-sm">
                            Save Changes
                          </button>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* ENQUIRIES TAB */}
                  {activeTab === 'enquiries' && (
                    <motion.div key="enquiries" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="font-['Montserrat',sans-serif] text-[22px] font-bold text-[#10182c] mb-2">Enquiries & Messages</h2>
                          <p className="text-[14px] text-gray-500">Communicate with prospective renters.</p>
                        </div>
                      </div>

                      <div className="space-y-3 mt-6">
                        {listing.enquiries.map((enquiry) => (
                          <div key={enquiry.id} className="p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group relative">
                            {enquiry.status === 'unread' && <div className="absolute top-4 right-4 w-2.5 h-2.5 bg-red-500 rounded-full"></div>}
                            <div className="flex items-center gap-4 mb-3">
                              <div className="w-12 h-12 rounded-full bg-[#10182c]/5 text-[#10182c] flex items-center justify-center font-bold text-[18px]">
                                {enquiry.name.charAt(0)}
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-center">
                                  <h4 className={`font-bold text-[15px] ${enquiry.status === 'unread' ? 'text-[#10182c]' : 'text-gray-700'}`}>{enquiry.name}</h4>
                                  <span className="text-[11px] text-gray-400 font-medium mr-4">{enquiry.date}</span>
                                </div>
                                <p className="text-[13px] text-gray-500 mt-0.5">{enquiry.email} • {enquiry.phone}</p>
                              </div>
                            </div>
                            <div className={`text-[14px] ${enquiry.status === 'unread' ? 'text-[#10182c] font-medium' : 'text-gray-600'}`}>
                              "{enquiry.message}"
                            </div>
                            <div className="mt-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button onClick={(e) => { e.stopPropagation(); toast.success(`Replying to ${enquiry.name}`); }} className="bg-[#10182c] hover:bg-[#1a2642] text-white px-4 py-2 rounded-lg text-[12px] font-bold transition-colors">Reply</button>
                              <button onClick={(e) => { e.stopPropagation(); toast.success(`Lease agreement sent to ${enquiry.email}`); }} className="bg-[#c85212] hover:bg-[#a6400c] text-white px-4 py-2 rounded-lg text-[12px] font-bold transition-colors">Send Lease Agreement</button>
                              <button onClick={(e) => { e.stopPropagation(); toast.info(`Archived message from ${enquiry.name}`); }} className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-[12px] font-bold transition-colors">Archive</button>
                            </div>
                          </div>
                        ))}
                        
                        {listing.enquiries.length === 0 && (
                          <div className="text-center py-10 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                            <MessageSquare size={32} className="mx-auto text-gray-300 mb-3" />
                            <p className="text-gray-500 text-[14px]">No enquiries yet for this property.</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* BOOKINGS TAB */}
                  {activeTab === 'bookings' && (
                    <motion.div key="bookings" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                      <div>
                        <h2 className="font-['Montserrat',sans-serif] text-[22px] font-bold text-[#10182c] mb-2">Upcoming Bookings</h2>
                        <p className="text-[14px] text-gray-500">Manage viewing appointments for this property.</p>
                      </div>

                      <div className="space-y-4 mt-6">
                        {listing.bookings.map((booking) => (
                          <div key={booking.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="w-14 h-14 rounded-xl bg-[#c85212]/10 text-[#c85212] flex flex-col items-center justify-center shrink-0">
                              <span className="text-[11px] font-bold uppercase">{booking.date.split(' ')[0]}</span>
                              <span className="text-[18px] font-bold font-['Montserrat',sans-serif] leading-none">{booking.date.split(' ')[1]}</span>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-[#10182c] text-[16px]">Viewing with {booking.name}</h4>
                              <div className="flex items-center gap-4 mt-1.5 text-[13px] text-gray-500">
                                <span className="flex items-center gap-1.5"><Clock size={14} /> {booking.time}</span>
                                {booking.status === 'confirmed' ? (
                                  <span className="flex items-center gap-1.5 text-[#10b981] font-medium"><CheckCircle2 size={14} /> Confirmed</span>
                                ) : (
                                  <span className="flex items-center gap-1.5 text-yellow-600 font-medium"><AlertCircle size={14} /> Pending</span>
                                )}
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                              {booking.status === 'pending' && (
                                <button onClick={() => toast.success(`Booking confirmed for ${booking.name}`)} className="flex-1 sm:flex-none text-[13px] font-bold text-white bg-[#10b981] hover:bg-[#059669] px-4 py-2 rounded-lg transition-colors text-center">Confirm</button>
                              )}
                              <button onClick={() => toast.success(`Lease agreement sent to ${booking.name}`)} className="flex-1 sm:flex-none text-[13px] font-bold text-white bg-[#10182c] hover:bg-[#1a2642] px-4 py-2 rounded-lg transition-colors text-center">Send Lease</button>
                              <button onClick={() => toast.info("Opening calendar to reschedule...")} className="flex-1 sm:flex-none text-[13px] font-bold text-[#10182c] bg-white border border-gray-200 hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors text-center">Reschedule</button>
                            </div>
                          </div>
                        ))}
                        
                        {listing.bookings.length === 0 && (
                          <div className="text-center py-10 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                            <Calendar size={32} className="mx-auto text-gray-300 mb-3" />
                            <p className="text-gray-500 text-[14px]">No upcoming bookings.</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}