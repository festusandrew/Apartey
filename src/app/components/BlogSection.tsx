import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./ScrollAnimations";
import { motion } from "motion/react";
import { ArrowRight, Clock, User } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const blogPosts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1759428935131-cee6cd331234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHklMjBidXlpbmclMjB0aXBzfGVufDF8fHx8MTc3MDQwMjAwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Buying Guide",
    tagColor: "#c85212",
    title:
      "First-Time Buyer? 8 Things You Must Know Before Signing in the UK",
    excerpt:
      "From stamp duty thresholds to survey types, here's everything first-time buyers need to navigate the UK property market with confidence.",
    author: "Sarah Mitchell",
    readTime: "6 min read",
    date: "Jan 28, 2026",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1646592491550-6ef7a11ecc58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwaW50ZXJpb3IlMjBkZXNpZ24lMjByZW5vdmF0aW9ufGVufDF8fHx8MTc3MDQwMjAwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Renovation",
    tagColor: "#10182c",
    title:
      "Converting Your Home to a Rental: 6 Tips to Protect You & Your Property",
    excerpt:
      "Thinking of renting out your property? Learn how to prepare, price, and protect your investment with these essential homeowner tips.",
    author: "David Chen",
    readTime: "5 min read",
    date: "Jan 22, 2026",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1599401083079-3b5ab15ef007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMG5laWdoYm9yaG9vZCUyMGNvbW11bml0eSUyMHN0cmVldHxlbnwxfHx8fDE3NzA0MDIwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Neighbourhood",
    tagColor: "#4CAF50",
    title:
      "The 10 Best Up-and-Coming Neighbourhoods in the UK for 2026",
    excerpt:
      "From Salford Quays to Tottenham Hale, discover where property values are rising and community life is thriving.",
    author: "Emma Lawson",
    readTime: "8 min read",
    date: "Jan 15, 2026",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-white" />

      <div className="relative max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-24">
        {/* Header */}
        <AnimatedSection variant="fadeUp">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-[3px] rounded-full bg-[#c85212]" />
                <span className="font-['Mulish',sans-serif] text-[#c85212] text-[12px] md:text-[13px] uppercase tracking-[2px]">
                  Our Blog
                </span>
              </div>
              <h2 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[28px] md:text-[36px] lg:text-[44px] leading-[1.1] tracking-[-0.5px]">
                Latest from Our Blog
              </h2>
              <p className="font-['Mulish',sans-serif] text-[#10182c]/60 text-[15px] md:text-[17px] tracking-[0.2px] mt-3 max-w-[440px]">
                Expert insights, market trends, and practical advice for renters, buyers, and homeowners.
              </p>
            </div>
            <motion.button
              whileHover={{ gap: "12px" }}
              className="flex items-center gap-2 text-[#c85212] font-['Mulish',sans-serif] font-bold text-[15px] tracking-[0.3px] cursor-pointer group"
            >
              Read More Articles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </AnimatedSection>

        {/* Blog Cards */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          staggerDelay={0.15}
        >
          {blogPosts.map((post) => (
            <StaggerItem key={post.id} variant="fadeUp">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col bg-white rounded-2xl overflow-hidden cursor-pointer group border border-[#10182c]/5 hover:border-[#c85212]/12 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(16,24,44,0.08)] transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-[220px] md:h-[240px] lg:h-[260px] overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10182c]/30 via-transparent to-transparent" />

                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <div
                      className="rounded-full px-3.5 py-1.5 backdrop-blur-sm shadow-sm"
                      style={{ backgroundColor: post.tagColor }}
                    >
                      <span className="font-['Mulish',sans-serif] font-bold text-white text-[11px] tracking-[0.5px] uppercase">
                        {post.tag}
                      </span>
                    </div>
                  </div>

                  {/* Read time */}
                  <div className="absolute bottom-4 right-4">
                    <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5">
                      <Clock className="w-3 h-3 text-[#10182c]/50" />
                      <span className="font-['Mulish',sans-serif] text-[#10182c]/60 text-[11px] tracking-[0.3px]">
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <h3 className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[17px] md:text-[19px] leading-[1.35] tracking-[0.1px] mb-3 group-hover:text-[#c85212] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="font-['Mulish',sans-serif] text-[#10182c]/50 text-[14px] leading-[1.6] tracking-[0.2px] mb-5 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#10182c]/6">
                    <div className="flex items-center gap-2">
                      <div className="w-[28px] h-[28px] rounded-full bg-[#10182c]/8 flex items-center justify-center">
                        <User className="w-3.5 h-3.5 text-[#10182c]/40" />
                      </div>
                      <span className="font-['Mulish',sans-serif] text-[#10182c]/50 text-[13px] tracking-[0.2px]">
                        {post.author}
                      </span>
                    </div>
                    <span className="font-['Mulish',sans-serif] text-[#10182c]/30 text-[12px] tracking-[0.3px]">
                      {post.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
