import { useState } from "react";
import svgPaths from "../imports/svg-832hvynkq3";
import { Bath, BedDouble, MapPin, ArrowRight, Heart, Shield, Scale } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./ScrollAnimations";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { PropertyComparisonTool, CompareBar, type CompareProperty } from "./PropertyComparisonTool";

const listings = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1705181045134-8d76e86efa6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBMb25kb24lMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcwNDAyMDAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "For Sale",
    badge: "Featured",
    bathrooms: 2,
    bedrooms: 3,
    rating: 4.8,
    reviews: 42,
    address: "14 Shoreditch High Street",
    price: "£625,000",
    location: "London E1",
    sqft: "1,200 sq ft",
    sqm: 111,
    verified: true,
    furnished: true,
    parking: true,
    petsAllowed: false,
    amenities: ["Gym", "Concierge", "Roof terrace", "EV charging"],
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1760017768714-ef54adfdc032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBCcml0aXNoJTIwdG93bmhvdXNlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcwNDAyMDAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "For Rent",
    badge: "New",
    bathrooms: 3,
    bedrooms: 4,
    rating: 4.5,
    reviews: 28,
    address: "7 Clifton Crescent",
    price: "£2,800/mo",
    location: "Bristol BS8",
    sqft: "1,850 sq ft",
    sqm: 172,
    verified: true,
    furnished: false,
    parking: true,
    petsAllowed: true,
    amenities: ["Garden", "Garage", "Storage"],
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1760611656071-a8bef0578874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBwZW50aG91c2UlMjBjaXR5JTIwdmlld3xlbnwxfHx8fDE3NzA0MDIwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "For Sale",
    badge: null,
    bathrooms: 2,
    bedrooms: 2,
    rating: 4.2,
    reviews: 17,
    address: "22 Deansgate Square",
    price: "£485,000",
    location: "Manchester M15",
    sqft: "980 sq ft",
    sqm: 91,
    verified: false,
    furnished: true,
    parking: false,
    petsAllowed: false,
    amenities: ["Gym", "Concierge", "24h security"],
  },
];

function StarIcon() {
  return (
    <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 19.8091 18.8396">
      <path d={svgPaths.p16d9d7e0} fill="#FBC948" />
    </svg>
  );
}

export function FeaturedListings() {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [compareList, setCompareList] = useState<CompareProperty[]>([]);
  const [showCompareTool, setShowCompareTool] = useState(false);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleCompare = (listing: typeof listings[0]) => {
    const prop: CompareProperty = {
      id: listing.id,
      image: listing.image,
      title: listing.address,
      price: listing.price,
      location: listing.location,
      beds: listing.bedrooms,
      baths: listing.bathrooms,
      rating: String(listing.rating),
      reviews: listing.reviews,
      sqm: listing.sqm,
      parking: listing.parking,
      furnished: listing.furnished,
      petsAllowed: listing.petsAllowed,
      amenities: listing.amenities,
    };
    setCompareList(prev => {
      const already = prev.find(p => p.id === prop.id);
      if (already) return prev.filter(p => p.id !== prop.id);
      if (prev.length >= 4) return prev;
      return [...prev, prop];
    });
  };

  const isInCompare = (id: number) => compareList.some(p => p.id === id);

  return (
    <section id="listings" className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-white" />

      <div className="relative max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-24">
        {/* Header */}
        <AnimatedSection variant="fadeUp">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-[3px] rounded-full bg-[#c85212]" />
                <span className="font-['Mulish',sans-serif] text-[#c85212] text-[12px] md:text-[13px] uppercase tracking-[2px]">
                  Handpicked For You
                </span>
              </div>
              <h2 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[28px] md:text-[36px] lg:text-[44px] leading-[1.1] tracking-[-0.5px]">
                Featured Listings
              </h2>
              <p className="font-['Mulish',sans-serif] text-[#10182c]/60 text-[15px] md:text-[17px] tracking-[0.2px] mt-3 max-w-[440px]">
                Verified properties with real community reviews from residents who lived there.
              </p>
            </div>
            <motion.button
              whileHover={{ gap: "12px" }}
              className="flex items-center gap-2 text-[#c85212] font-['Mulish',sans-serif] font-bold text-[15px] tracking-[0.3px] cursor-pointer group"
            >
              View All Listings
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </AnimatedSection>

        {/* Listing Cards */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          staggerDelay={0.15}
        >
          {listings.map((listing) => {
            const inCompare = isInCompare(listing.id);
            return (
            <StaggerItem key={listing.id} variant="fadeUp">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col bg-white rounded-2xl overflow-hidden cursor-pointer group border shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(16,24,44,0.1)] transition-all duration-500 ${inCompare ? "border-[#c85212]/50 ring-2 ring-[#c85212]/20" : "border-[#10182c]/5 hover:border-[#c85212]/15"}`}
              >
                {/* Image */}
                <div className="relative h-[240px] md:h-[270px] lg:h-[300px] overflow-hidden">
                  <ImageWithFallback
                    src={listing.image}
                    alt={listing.address}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10182c]/40 via-transparent to-transparent" />

                  {/* Top bar */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-white/95 backdrop-blur-sm rounded-full px-3.5 py-1.5 shadow-sm">
                        <span className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[12px] tracking-[0.3px]">
                          {listing.type}
                        </span>
                      </div>
                      {listing.badge && (
                        <div
                          className={`rounded-full px-3 py-1.5 shadow-sm ${
                            listing.badge === "Featured"
                              ? "bg-[#c85212] text-white"
                              : "bg-[#10182c] text-white"
                          }`}
                        >
                          <span className="font-['Mulish',sans-serif] font-bold text-[11px] tracking-[0.3px]">
                            {listing.badge}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileTap={{ scale: 1.2 }}
                        onClick={(e) => { e.stopPropagation(); toggleCompare(listing); }}
                        disabled={!inCompare && compareList.length >= 4}
                        title={inCompare ? "Remove from comparison" : "Compare this property"}
                        className={`w-[38px] h-[38px] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
                          inCompare
                            ? "bg-[#c85212] shadow-lg"
                            : "bg-white/20 backdrop-blur-md hover:bg-white/40"
                        }`}
                      >
                        <Scale className="w-[17px] h-[17px] text-white" />
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 1.3 }}
                        onClick={(e) => { e.stopPropagation(); toggleFavorite(listing.id); }}
                        className={`w-[38px] h-[38px] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                          favorites.has(listing.id)
                            ? "bg-[#c85212] shadow-lg"
                            : "bg-white/20 backdrop-blur-md hover:bg-white/40"
                        }`}
                      >
                        <Heart
                          className={`w-[18px] h-[18px] transition-colors duration-300 ${
                            favorites.has(listing.id)
                              ? "text-white fill-white"
                              : "text-white"
                          }`}
                        />
                      </motion.button>
                    </div>
                  </div>

                  {/* Bottom price tag on image */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-sm">
                      <span className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[20px] md:text-[22px] tracking-[-0.3px]">
                        {listing.price}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 md:p-6 flex flex-col gap-3">
                  {/* Address */}
                  <h3 className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[18px] md:text-[20px] leading-[1.2] tracking-[0.1px] group-hover:text-[#c85212] transition-colors duration-300">
                    {listing.address}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#10182c]/40" />
                    <span className="font-['Mulish',sans-serif] text-[#10182c]/50 text-[13px] tracking-[0.3px]">
                      {listing.location}
                    </span>
                    {listing.verified && (
                      <>
                        <span className="text-[#10182c]/20 mx-1">|</span>
                        <Shield className="w-3.5 h-3.5 text-[#4CAF50]" />
                        <span className="font-['Mulish',sans-serif] text-[#4CAF50] text-[12px] tracking-[0.3px]">
                          Verified
                        </span>
                      </>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-[#10182c]/8 my-1" />

                  {/* Features + Rating Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <BedDouble className="w-4 h-4 text-[#10182c]/35" />
                        <span className="font-['Mulish',sans-serif] text-[#10182c]/60 text-[13px] tracking-[0.3px]">
                          {listing.bedrooms} Beds
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bath className="w-4 h-4 text-[#10182c]/35" />
                        <span className="font-['Mulish',sans-serif] text-[#10182c]/60 text-[13px] tracking-[0.3px]">
                          {listing.bathrooms} Baths
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <StarIcon />
                      <span className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[13px] tracking-[0.2px]">
                        {listing.rating}
                      </span>
                      <span className="font-['Mulish',sans-serif] text-[#10182c]/40 text-[12px]">
                        ({listing.reviews})
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>

      {/* Floating Compare Bar */}
      <AnimatePresence>
        <CompareBar
          compareList={compareList}
          onRemove={(id) => setCompareList(prev => prev.filter(p => p.id !== id))}
          onOpen={() => setShowCompareTool(true)}
          onClear={() => setCompareList([])}
        />
      </AnimatePresence>

      {/* Full-screen Comparison Tool */}
      <AnimatePresence>
        {showCompareTool && compareList.length >= 2 && (
          <PropertyComparisonTool
            mode="guest"
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
    </section>
  );
}
