import { Link } from "react-router";
import { motion } from "motion/react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./ScrollAnimations";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDM2MjY4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "James Hartley",
    role: "Verified Renter",
    address: "12 Camden High St, London NW1",
    rating: 5,
    review:
      "Living at 12 Camden High Street was fantastic! The apartment was modern and spacious, with great amenities. The neighbourhood is lively and safe. Apartey's reviews helped me avoid a dodgy flat in Hackney and find this gem instead.",
    date: "Dec 03, 2025",
  },
  {
    id: 2,
    avatar:
      "https://images.unsplash.com/photo-1623594675959-02360202d4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAzNTYwNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Amara Okafor",
    role: "Homeowner",
    address: "5 Garki Close, Clifton, Bristol",
    rating: 4,
    review:
      "The platform was spotless and intuitive. I listed my property and had 15 qualified enquiries within a week. The review system actually builds trust with prospective tenants, which meant better quality renters applying.",
    date: "Nov 28, 2025",
  },
  {
    id: 3,
    avatar:
      "https://images.unsplash.com/photo-1770058428099-f2d64ab34006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMG1hbiUyMGNhc3VhbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDQwMjAwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Ethan Connolly",
    role: "First-time Buyer",
    address: "8 Deansgate, Manchester M3",
    rating: 5,
    review:
      "As a first-time buyer, I was terrified of making the wrong choice. Apartey's community insights gave me the confidence to go ahead. Reading genuine reviews from actual residents was invaluable. Found my dream flat!",
    date: "Nov 15, 2025",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i <= rating ? "text-[#FBC948] fill-[#FBC948]" : "text-[#E5E7EB] fill-[#E5E7EB]"
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  const accentColors = [
    "from-[#c85212]/8 to-transparent",
    "from-[#10182c]/6 to-transparent",
    "from-[#c85212]/6 to-transparent",
  ];

  return (
    <Link to={`/reviews/${testimonial.id}`} className="block flex-1 min-w-0">
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-2xl border border-[#10182c]/6 p-6 md:p-8 relative overflow-hidden h-full hover:border-[#c85212]/15 hover:shadow-[0_16px_50px_rgba(16,24,44,0.08)] transition-all duration-400"
    >
      {/* Subtle gradient bg */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${accentColors[index % accentColors.length]} pointer-events-none`}
      />

      {/* Quote icon */}
      <div className="absolute top-5 right-5">
        <Quote className="w-8 h-8 text-[#10182c]/5" />
      </div>

      {/* Author */}
      <div className="flex items-center gap-3.5 mb-5 relative z-10">
        <div className="w-[48px] h-[48px] md:w-[54px] md:h-[54px] rounded-full overflow-hidden shrink-0 ring-2 ring-[#c85212]/15 ring-offset-2">
          <ImageWithFallback
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[15px] md:text-[16px] leading-[1.2] tracking-[0.1px]">
            {testimonial.name}
          </h4>
          <p className="font-['Mulish',sans-serif] text-[#c85212] text-[12px] md:text-[13px] tracking-[0.3px] mt-0.5">
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Address chip */}
      <div className="inline-flex items-center gap-1.5 bg-[#10182c]/4 rounded-full px-3 py-1.5 mb-4">
        <span className="font-['Mulish',sans-serif] text-[#10182c]/60 text-[12px] tracking-[0.2px]">
          {testimonial.address}
        </span>
      </div>

      {/* Star Rating */}
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Review */}
      <p className="font-['Mulish',sans-serif] text-[#10182c]/65 text-[14px] md:text-[15px] leading-[1.7] tracking-[0.2px] mb-6 relative z-10">
        "{testimonial.review}"
      </p>

      {/* Footer */}
      <div className="pt-4 border-t border-[#10182c]/6 flex items-center justify-between">
        <p className="font-['Mulish',sans-serif] text-[#10182c]/35 text-[12px] tracking-[0.3px]">
          {testimonial.date}
        </p>
        <div className="flex items-center gap-1 bg-[#4CAF50]/8 rounded-full px-2.5 py-1">
          <div className="w-[6px] h-[6px] rounded-full bg-[#4CAF50]" />
          <span className="font-['Mulish',sans-serif] text-[#4CAF50] text-[11px] tracking-[0.3px]">
            Verified
          </span>
        </div>
      </div>
    </motion.div>
    </Link>
  );
}

export function TrustedVoices() {
  return (
    <section
      id="trusted-voices"
      className="relative w-full overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fafbfc] to-white" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #10182c 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-24">
        {/* Header */}
        <AnimatedSection variant="fadeUp" className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <div className="w-8 h-[3px] rounded-full bg-[#c85212]" />
            <span className="font-['Mulish',sans-serif] text-[#c85212] text-[12px] md:text-[13px] uppercase tracking-[2px]">
              Testimonials
            </span>
            <div className="w-8 h-[3px] rounded-full bg-[#c85212]" />
          </div>
          <h2 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[28px] md:text-[36px] lg:text-[48px] leading-[1.1] tracking-[-0.5px]">
            Trusted Local Voices
          </h2>
          <p className="font-['Mulish',sans-serif] text-[#10182c]/55 text-[15px] md:text-[17px] tracking-[0.2px] mt-4 max-w-[520px] mx-auto">
            Real stories from verified residents. We enforce strict guidelines to
            ensure every review is authentic and helpful.
          </p>
        </AnimatedSection>

        {/* Testimonials */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-12"
          staggerDelay={0.15}
        >
          {testimonials.map((t, i) => (
            <StaggerItem key={t.id} variant="fadeUp">
              <TestimonialCard testimonial={t} index={i} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Read All Button */}
        <AnimatedSection
          variant="fadeUp"
          delay={0.4}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.03, backgroundColor: "#c85212", color: "#fff", borderColor: "#c85212" }}
            whileTap={{ scale: 0.97 }}
            className="border-2 border-[#10182c]/12 rounded-full px-8 py-3.5 cursor-pointer transition-all duration-300 flex items-center gap-2 group"
          >
            <span className="font-['Mulish',sans-serif] font-bold text-[#10182c]/60 text-[15px] tracking-[0.3px] group-hover:text-white transition-colors">
              Read All Reviews
            </span>
          </motion.button>
        </AnimatedSection>
      </div>
    </section>
  );
}