import { useState } from "react";
import { Link, useParams } from "react-router";
import {
  MapPin, Star, Shield, MessageSquare, Building, Calendar,
  ChevronLeft, Check, Heart, Bath, Bed, Home
} from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SharedNavbar } from "./SharedNavbar";
import { Footer } from "./Footer";

// Mock Data
const HOMEOWNER_MOCK_DATA = {
  id: "1",
  name: "Michael Okafor",
  role: "Verified Homeowner",
  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  rating: 4.8,
  reviews: 124,
  joined: "2021",
  responseRate: "98%",
  responseTime: "within an hour",
  about: "Hi, I'm Michael! I've been managing premium properties in Abuja and Lagos for over 5 years. My goal is to provide seamless, comfortable, and safe living experiences for all my renters. All my properties are well-maintained and located in secure neighborhoods.",
  properties: [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1770217102047-06e8490267ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      baths: 4,
      beds: 4,
      title: "2 Pankshin Road, Pankshin",
      price: "£450,000",
      location: "Plateau, Nigeria",
      rating: "4.0"
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      baths: 3,
      beds: 3,
      title: "15 Enugu Avenue, Enugu",
      price: "£200,000",
      location: "Enugu, Nigeria",
      rating: "4.5"
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      baths: 2,
      beds: 2,
      title: "Victoria Island Luxury Flat",
      price: "£350,000",
      location: "Lagos, Nigeria",
      rating: "4.9"
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1518780602350-92ddcb42ad91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      baths: 2,
      beds: 3,
      title: "Ikoyi Serviced Apartment",
      price: "£400,000",
      location: "Lagos, Nigeria",
      rating: "4.8"
    },
    {
      id: "5",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      baths: 4,
      beds: 5,
      title: "Maitama Executive Villa",
      price: "£650,000",
      location: "Abuja, Nigeria",
      rating: "4.9"
    },
    {
      id: "6",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      baths: 1,
      beds: 2,
      title: "Lekki Phase 1 Studio",
      price: "£150,000",
      location: "Lagos, Nigeria",
      rating: "4.6"
    },
    {
      id: "7",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      baths: 3,
      beds: 4,
      title: "Asokoro Family Home",
      price: "£550,000",
      location: "Abuja, Nigeria",
      rating: "4.7"
    },
    {
      id: "8",
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      baths: 2,
      beds: 2,
      title: "Wuse 2 Penthouse",
      price: "£300,000",
      location: "Abuja, Nigeria",
      rating: "4.8"
    },
    {
      id: "9",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      baths: 3,
      beds: 3,
      title: "Gwarinpa Townhouse",
      price: "£420,000",
      location: "Abuja, Nigeria",
      rating: "4.5"
    },
    {
      id: "10",
      image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      baths: 5,
      beds: 6,
      title: "Banana Island Mansion",
      price: "£950,000",
      location: "Lagos, Nigeria",
      rating: "5.0"
    },
    {
      id: "11",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      baths: 1,
      beds: 1,
      title: "Yaba Compact Flat",
      price: "£120,000",
      location: "Lagos, Nigeria",
      rating: "4.2"
    },
    {
      id: "12",
      image: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      baths: 2,
      beds: 3,
      title: "Surulere Tech Hub Apartment",
      price: "£180,000",
      location: "Lagos, Nigeria",
      rating: "4.4"
    }
  ],
  reviewsList: [
    {
      id: 1,
      author: "Sarah J.",
      date: "October 2023",
      rating: 5,
      text: "Michael was incredibly responsive and the apartment was exactly as described. Any minor issues were resolved the same day. Highly recommend renting from him!",
      reply: {
        text: "Thank you so much for the kind words, Sarah! It was a pleasure having you as a tenant. Wishing you all the best in your new home!",
        date: "October 2023"
      }
    },
    {
      id: 2,
      author: "David O.",
      date: "August 2023",
      rating: 4,
      text: "Great homeowner. The property was clean and well maintained. The move-in process was seamless and professional.",
      reply: null
    },
    {
      id: 3,
      author: "Amara K.",
      date: "June 2023",
      rating: 3,
      text: "Property was decent but communication could have been faster during the move-in period. Things improved after the first week.",
      reply: {
        text: "Hi Amara, thank you for your honest feedback. We hear you on the communication — we've since brought on a dedicated property coordinator. We genuinely hope the rest of your stay made up for the rocky start.",
        date: "June 2023"
      }
    }
  ]
};

export function HomeownerPublicProfilePage() {
  const { id } = useParams();
  // Fetch homeowner based on ID in a real app
  const homeowner = HOMEOWNER_MOCK_DATA;
  
  const [visibleProperties, setVisibleProperties] = useState(6);

  const handleLoadMore = () => {
    setVisibleProperties(prev => Math.min(prev + 6, homeowner.properties.length));
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col font-['Mulish',sans-serif]">
      <SharedNavbar transparent={false} />

      <main className="flex-1 py-8">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          
          <div className="mb-8">
            <button onClick={() => window.history.back()} className="flex items-center text-gray-500 hover:text-[#c85212] transition-colors text-[14px] font-medium w-fit">
              <ChevronLeft size={16} className="mr-1" />
              Back
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            
            {/* Left Column: Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm border border-gray-200 sticky top-[100px]">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md relative">
                    <ImageWithFallback src={homeowner.image} alt={homeowner.name} className="w-full h-full object-cover" />
                  </div>
                  <h1 className="font-['Montserrat',sans-serif] text-[24px] font-bold text-[#10182c]">{homeowner.name}</h1>
                  <div className="flex items-center text-[14px] text-gray-500 mt-1.5 font-medium">
                    <Shield size={16} className="mr-1.5 text-green-600" />
                    {homeowner.role}
                  </div>
                </div>

                <div className="space-y-4 py-6 border-y border-gray-100 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-[14px]">Reviews</span>
                    <span className="font-bold text-[#10182c] flex items-center"><Star size={14} className="fill-[#10182c] mr-1" /> {homeowner.reviews}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-[14px]">Rating</span>
                    <span className="font-bold text-[#10182c]">{homeowner.rating} / 5.0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-[14px]">Response Rate</span>
                    <span className="font-bold text-[#10182c]">{homeowner.responseRate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-[14px]">Joined</span>
                    <span className="font-bold text-[#10182c]">{homeowner.joined}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center gap-2 bg-[#10182c] hover:bg-[#1a2642] text-white py-3.5 rounded-[16px] font-bold text-[15px] transition-colors">
                    <MessageSquare size={18} />
                    Message Homeowner
                  </button>
                </div>
                
                <p className="text-[12px] text-gray-400 text-center mt-4">
                  Usually responds {homeowner.responseTime}
                </p>
              </div>
            </div>

            {/* Right Column: Details & Properties */}
            <div className="lg:col-span-2 space-y-10">
              
              {/* About */}
              <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm border border-gray-200">
                <h2 className="font-['Montserrat',sans-serif] text-[22px] font-bold text-[#10182c] mb-4">About {homeowner.name.split(' ')[0]}</h2>
                <p className="text-gray-600 leading-relaxed text-[16px]">
                  {homeowner.about}
                </p>
                
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#f5f6f8] rounded-full text-[13px] font-bold text-[#10182c] flex items-center gap-2">
                    <Check size={14} className="text-[#c85212]" /> Identity Verified
                  </span>
                  <span className="px-4 py-2 bg-[#f5f6f8] rounded-full text-[13px] font-bold text-[#10182c] flex items-center gap-2">
                    <Check size={14} className="text-[#c85212]" /> Phone Verified
                  </span>
                  <span className="px-4 py-2 bg-[#f5f6f8] rounded-full text-[13px] font-bold text-[#10182c] flex items-center gap-2">
                    <Check size={14} className="text-[#c85212]" /> Email Verified
                  </span>
                </div>
              </div>

              {/* Properties */}
              <div>
                <h2 className="font-['Montserrat',sans-serif] text-[22px] font-bold text-[#10182c] mb-6">Properties by {homeowner.name.split(' ')[0]}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {homeowner.properties.slice(0, visibleProperties).map((property) => (
                    <Link to={`/properties/${property.id}`} key={property.id} className="group flex flex-col bg-white rounded-[24px] p-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="relative h-[200px] w-full rounded-[16px] overflow-hidden mb-4">
                        <ImageWithFallback src={property.image} alt={property.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md rounded-full p-2 shadow-sm hover:scale-110 transition-transform">
                          <Heart size={16} className="text-gray-400" />
                        </div>
                      </div>
                      <div className="px-2 pb-2">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3 text-[13px] text-gray-500">
                            <div className="flex items-center gap-1.5"><Bed size={16} /> {property.beds} Bed</div>
                            <div className="flex items-center gap-1.5"><Bath size={16} /> {property.baths} Bath</div>
                          </div>
                          <div className="flex items-center text-[12px] font-bold text-[#10182c]">
                            <Star size={12} className="fill-[#10182c] mr-1" /> {property.rating}
                          </div>
                        </div>
                        <h4 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[16px] mb-1 truncate">{property.title}</h4>
                        <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-50">
                          <span className="font-['Montserrat',sans-serif] font-bold text-[18px] text-[#c85212]">{property.price}</span>
                          <span className="text-[13px] text-gray-500 truncate ml-2 flex items-center gap-1"><MapPin size={14} /> {property.location.split(',')[0]}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                {visibleProperties < homeowner.properties.length && (
                  <div className="flex justify-center mt-8">
                    <button 
                      onClick={handleLoadMore}
                      className="px-6 py-3 border-2 border-[#10182c] text-[#10182c] font-bold text-[14px] rounded-full hover:bg-[#10182c] hover:text-white transition-colors flex items-center gap-2"
                    >
                      Load More Properties
                    </button>
                  </div>
                )}
              </div>

              {/* Reviews */}
              <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm border border-gray-200">
                <h2 className="font-['Montserrat',sans-serif] text-[22px] font-bold text-[#10182c] mb-6">What renters say</h2>
                <div className="space-y-6">
                  {homeowner.reviewsList.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                      {/* Reviewer row */}
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-[#10182c]/10 flex items-center justify-center text-[#10182c] font-bold text-[14px] shrink-0">
                            {review.author.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-[#10182c] text-[15px]">{review.author}</h4>
                            <span className="text-[12px] text-gray-400">{review.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={13} className={i < review.rating ? "fill-[#c85212] text-[#c85212]" : "fill-gray-200 text-gray-200"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 text-[15px] leading-relaxed mb-3">"{review.text}"</p>

                      {/* Homeowner reply thread */}
                      {review.reply && (
                        <div className="ml-4 pl-4 border-l-2 border-[#c85212]/40 bg-[#fff9f6] rounded-r-[12px] p-4">
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
                <button className="w-full mt-6 py-3 border-2 border-gray-200 rounded-[16px] text-[#10182c] font-bold text-[15px] hover:bg-gray-50 transition-colors">
                  Show all {homeowner.reviews} reviews
                </button>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
