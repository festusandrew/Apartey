import { useState } from "react";
import { Link, useParams } from "react-router";
import {
  MapPin, Heart, Share2, Star, ChevronLeft,
  Bed, Bath, Maximize, Calendar, Car, Shield, ShieldCheck, Check,
  Home, Info, User, ArrowRight, Clock, Map, Sofa, MessageSquare
} from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SharedNavbar } from "./SharedNavbar";
import { Footer } from "./Footer";

// Mock data to match what's in the Renter dashboard + more details
const PROPERTY_MOCK_DATA = {
  id: "1",
  title: "2 Pankshin Road, Pankshin",
  price: "£450,000",
  interval: "/year",
  location: "Plateau, Nigeria",
  address: "2 Pankshin Road, GRA, Plateau",
  rating: "4.0",
  reviews: 28,
  beds: 4,
  baths: 4,
  area: "250m²",
  furnished: "Yes",
  available: "Immediate",
  description: "Experience luxurious living in this stunning 4-bedroom apartment located in the prestigious GRA area of Plateau. Features include spacious en-suite bedrooms, a modern fully-fitted kitchen, a large living room with large windows bringing in natural light, and premium finishings throughout. The property is highly secured with 24/7 power supply and a serene environment perfect for families or professionals.",
  images: [
    "https://images.unsplash.com/photo-1770217102047-06e8490267ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFsJTIwYXBhcnRtZW50JTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NzMxNjEyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5zaW9uJTIwaW50ZXJpb3J8ZW58MXx8fDE3MjE4MTk5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  ],
  homeowner: {
    name: "Michael Okafor",
    role: "Verified Homeowner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    rating: 4.8,
    reviews: 124,
    joined: "2021",
    responseRate: "98%",
  },
  amenities: [
    "24/7 Security", "Backup Generator", "Fitted Kitchen",
    "Swimming Pool", "Gym", "Ample Parking", "Air Conditioning",
    "Water Treatment", "Waste Disposal", "Internet/WiFi"
  ],
  reviewsList: [
    {
      id: 1, author: "Yakubu A.", initials: "YA", date: "Jan 2026", rating: 4,
      text: "Brilliant property — well maintained, spacious rooms, and the homeowner was incredibly easy to deal with. The backup generator never let us down.",
      helpful: 12,
      reply: {
        text: "Thank you, Yakubu! It was a genuine pleasure having you. We take maintenance seriously and we're glad the generator gave you peace of mind. Hope to stay in touch!",
        date: "Jan 2026"
      }
    },
    {
      id: 2, author: "Chioma E.", initials: "CE", date: "Nov 2025", rating: 5,
      text: "Moved in last November and haven't had a single issue. Michael responds to every message within the hour. The pool and gym are a bonus I use daily.",
      helpful: 19,
      reply: null
    },
    {
      id: 3, author: "Bola F.", initials: "BF", date: "Sep 2025", rating: 3,
      text: "The property itself is lovely but the handover process was a bit slow — took almost two weeks to sort the initial paperwork.",
      helpful: 6,
      reply: {
        text: "Hi Bola, thank you for the honest feedback. The delay was due to a third-party verification backlog during that period — we've since moved to a faster digital process. Your experience helped us improve and we appreciate it.",
        date: "Sep 2025"
      }
    },
    {
      id: 4, author: "James O.", initials: "JO", date: "Jul 2025", rating: 4,
      text: "Great location in GRA. Security is top-notch. The only minor issue was occasional water pressure drops in the morning — nothing major.",
      helpful: 8,
      reply: null
    },
  ]
};

export function PropertyDetailsPage() {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [isFavorited, setIsFavorited] = useState(true); // default to true since we come from favorites mostly

  // In a real app we'd fetch data based on ID, using mock for now
  const property = PROPERTY_MOCK_DATA;

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col font-['Mulish',sans-serif]">
      {/* ───── Navbar ───── */}
      <SharedNavbar transparent={false} />

      <main className="flex-1 py-8">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          
          {/* Breadcrumbs & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <Link to="/profile" className="flex items-center text-gray-500 hover:text-[#c85212] transition-colors text-[14px] font-medium w-fit">
              <ChevronLeft size={16} className="mr-1" />
              Back to Dashboard
            </Link>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsFavorited(!isFavorited)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-[14px] font-bold text-[#10182c] hover:bg-gray-50 transition-colors shadow-sm"
              >
                <Heart size={16} className={isFavorited ? "text-[#c85212] fill-[#c85212]" : "text-gray-400"} />
                {isFavorited ? "Saved" : "Save"}
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-[14px] font-bold text-[#10182c] hover:bg-gray-50 transition-colors shadow-sm">
                <Share2 size={16} className="text-gray-400" />
                Share
              </button>
            </div>
          </div>

          {/* Title & Header Info */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#10182c] text-white text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">For Rent</span>
              <span className="bg-[#fbff79]/30 text-[#10182c] text-[12px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Star size={12} className="fill-[#10182c]" /> 
                {property.rating} ({property.reviews} Reviews)
              </span>
            </div>
            <h1 className="font-['Montserrat',sans-serif] text-[32px] md:text-[40px] font-bold text-[#10182c] leading-tight">
              {property.title}
            </h1>
            <div className="flex items-center text-gray-500 text-[15px] mt-2">
              <MapPin size={18} className="mr-1.5 text-gray-400" />
              {property.address}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 h-[400px] md:h-[500px]">
            <div className="md:col-span-3 rounded-[24px] overflow-hidden bg-gray-200 relative group h-full">
              <ImageWithFallback 
                src={property.images[activeImage]} 
                alt="Property main view" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="hidden md:flex flex-col gap-4 h-full">
              {property.images.slice(1, 4).map((img, i) => (
                <div 
                  key={i} 
                  onClick={() => setActiveImage(i + 1)}
                  className={`rounded-[16px] overflow-hidden bg-gray-200 flex-1 cursor-pointer relative ${activeImage === i + 1 ? 'ring-2 ring-[#c85212] ring-offset-2' : ''}`}
                >
                  <ImageWithFallback src={img} alt={`Gallery view ${i+1}`} className="w-full h-full object-cover hover:opacity-90 transition-opacity" />
                  {i === 2 && property.images.length > 4 && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-bold text-[18px]">+{property.images.length - 4}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-2 space-y-10">
              
              {/* Key Features Overview */}
              <div className="flex flex-wrap gap-4 py-6 border-y border-gray-200">
                <div className="flex items-center gap-3 pr-6 sm:border-r border-gray-200 last:border-0">
                  <div className="w-12 h-12 rounded-full bg-[#f5f6f8] flex items-center justify-center text-[#10182c]">
                    <Bed size={24} />
                  </div>
                  <div>
                    <div className="text-[18px] font-bold text-[#10182c]">{property.beds}</div>
                    <div className="text-[13px] text-gray-500 uppercase font-bold tracking-wide">Bedrooms</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 pr-6 sm:border-r border-gray-200 last:border-0">
                  <div className="w-12 h-12 rounded-full bg-[#f5f6f8] flex items-center justify-center text-[#10182c]">
                    <Bath size={24} />
                  </div>
                  <div>
                    <div className="text-[18px] font-bold text-[#10182c]">{property.baths}</div>
                    <div className="text-[13px] text-gray-500 uppercase font-bold tracking-wide">Bathrooms</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 pr-6 sm:border-r border-gray-200 last:border-0">
                  <div className="w-12 h-12 rounded-full bg-[#f5f6f8] flex items-center justify-center text-[#10182c]">
                    <Maximize size={24} />
                  </div>
                  <div>
                    <div className="text-[18px] font-bold text-[#10182c]">{property.area}</div>
                    <div className="text-[13px] text-gray-500 uppercase font-bold tracking-wide">Area</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#f5f6f8] flex items-center justify-center text-[#10182c]">
                    <Sofa size={24} />
                  </div>
                  <div>
                    <div className="text-[18px] font-bold text-[#10182c]">{property.furnished}</div>
                    <div className="text-[13px] text-gray-500 uppercase font-bold tracking-wide">Furnished</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="font-['Montserrat',sans-serif] text-[24px] font-bold text-[#10182c] mb-4">About this property</h2>
                <p className="text-gray-600 leading-relaxed text-[16px]">
                  {property.description}
                </p>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="font-['Montserrat',sans-serif] text-[24px] font-bold text-[#10182c] mb-6">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
                  {property.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#fbff79]/30 flex items-center justify-center text-[#10182c] shrink-0">
                        <Check size={14} />
                      </div>
                      <span className="text-[#10182c] font-medium">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-['Montserrat',sans-serif] text-[24px] font-bold text-[#10182c]">
                    Renter Reviews
                    <span className="ml-3 text-[16px] font-normal text-gray-400">({property.reviews})</span>
                  </h2>
                  <div className="flex items-center gap-1.5 bg-[#fbff79]/30 px-3 py-1.5 rounded-full">
                    <Star size={14} className="fill-[#c85212] text-[#c85212]" />
                    <span className="font-bold text-[#10182c] text-[14px]">{property.rating}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {property.reviewsList.map((review) => (
                    <div key={review.id} className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-5 md:p-6">
                      {/* Reviewer header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#10182c]/10 flex items-center justify-center font-bold text-[#10182c] text-[14px] shrink-0">
                            {review.initials}
                          </div>
                          <div>
                            <h4 className="font-bold text-[#10182c] text-[15px]">{review.author}</h4>
                            <span className="text-[12px] text-gray-400">Verified Renter · {review.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-0.5 shrink-0">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={13} className={i < review.rating ? "fill-[#c85212] text-[#c85212]" : "fill-gray-200 text-gray-200"} />
                          ))}
                        </div>
                      </div>

                      {/* Review text */}
                      <p className="text-gray-600 text-[15px] leading-relaxed mb-4">"{review.text}"</p>

                      {/* Helpful count */}
                      <p className="text-[12px] text-gray-400 mb-4">{review.helpful} people found this helpful</p>

                      {/* Homeowner reply thread */}
                      {review.reply && (
                        <div className="border-l-2 border-[#c85212]/50 pl-4 bg-[#fff9f6] rounded-r-[12px] p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-[#c85212] flex items-center justify-center shrink-0">
                              <Home size={12} className="text-white" />
                            </div>
                            <span className="text-[12px] font-bold text-[#c85212]">Homeowner Response</span>
                            <span className="text-[11px] text-gray-400">· {review.reply.date}</span>
                          </div>
                          <p className="text-[14px] text-gray-700 leading-relaxed">"{review.reply.text}"</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <button className="w-full mt-5 py-3.5 border-2 border-dashed border-gray-200 rounded-[16px] text-gray-400 hover:text-[#c85212] hover:border-[#c85212]/40 font-bold text-[14px] transition-colors">
                  Show all {property.reviews} reviews
                </button>
              </div>

              {/* Location */}
              <div>
                <h2 className="font-['Montserrat',sans-serif] text-[24px] font-bold text-[#10182c] mb-6">Location</h2>
                <div className="w-full h-[300px] bg-gray-200 rounded-[24px] overflow-hidden relative">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Map view" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <div className="bg-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3">
                      <MapPin size={24} className="text-[#c85212]" />
                      <div>
                        <div className="font-bold text-[#10182c] text-[14px]">Exact location provided after booking</div>
                        <div className="text-[12px] text-gray-500">Plateau, Nigeria</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Pricing & Contact */}
            <div>
              <div className="sticky top-[100px] space-y-6">
                
                {/* Pricing Card */}
                <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-200">
                  <div className="mb-6">
                    <span className="text-[32px] font-bold text-[#c85212] font-['Montserrat',sans-serif]">{property.price}</span>
                    <span className="text-gray-500 text-[16px]">{property.interval}</span>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between text-[15px]">
                      <span className="text-gray-500 flex items-center gap-2"><Calendar size={18} /> Available from</span>
                      <span className="font-bold text-[#10182c]">{property.available}</span>
                    </div>
                    <div className="flex items-center justify-between text-[15px]">
                      <span className="text-gray-500 flex items-center gap-2"><Clock size={18} /> Min Term</span>
                      <span className="font-bold text-[#10182c]">12 Months</span>
                    </div>
                  </div>

                  <button className="w-full bg-[#10182c] hover:bg-[#1a2642] text-white py-4 rounded-[16px] font-bold text-[16px] transition-colors mb-3">
                    Apply Now
                  </button>
                  <button className="w-full bg-transparent hover:bg-gray-50 text-[#10182c] border-2 border-gray-200 py-3.5 rounded-[16px] font-bold text-[16px] transition-colors">
                    Request Viewing
                  </button>

                  <div className="mt-4 flex items-start gap-3 p-4 bg-[#f5f6f8] rounded-xl">
                    <ShieldCheck size={24} className="text-green-600 shrink-0" />
                    <div>
                      <h4 className="text-[14px] font-bold text-[#10182c] mb-1">Apartey Guarantee</h4>
                      <p className="text-[12px] text-gray-500 leading-tight">Your payment is protected until you sign the lease agreement.</p>
                    </div>
                  </div>
                </div>

                {/* Homeowner Card */}
                <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-200">
                  <h3 className="font-['Montserrat',sans-serif] font-bold text-[18px] text-[#10182c] mb-4">Meet the Homeowner</h3>
                  
                  <Link to={`/homeowners/1`} className="flex items-center gap-4 mb-4 group cursor-pointer hover:bg-gray-50 p-2 -ml-2 rounded-xl transition-colors">
                    <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-transparent group-hover:border-[#c85212] transition-colors">
                      <ImageWithFallback src={property.homeowner.image} alt={property.homeowner.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[18px] text-[#10182c] group-hover:text-[#c85212] transition-colors">{property.homeowner.name}</h4>
                      <div className="flex items-center text-[13px] text-gray-500 mt-1">
                        <Shield size={14} className="mr-1 text-green-600" />
                        {property.homeowner.role}
                      </div>
                    </div>
                  </Link>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-[#f5f6f8] p-3 rounded-xl">
                      <div className="text-[12px] text-gray-500 font-bold uppercase">Rating</div>
                      <div className="font-bold text-[#10182c] flex items-center mt-1">
                        <Star size={14} className="fill-[#10182c] mr-1" /> {property.homeowner.rating}
                      </div>
                    </div>
                    <div className="bg-[#f5f6f8] p-3 rounded-xl">
                      <div className="text-[12px] text-gray-500 font-bold uppercase">Response</div>
                      <div className="font-bold text-[#10182c] mt-1">{property.homeowner.responseRate}</div>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-[#10182c] py-3.5 rounded-[16px] font-bold text-[15px] transition-colors">
                    <MessageSquare size={18} />
                    Message Homeowner
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ───── Footer ───── */}
      <Footer />
    </div>
  );
}
