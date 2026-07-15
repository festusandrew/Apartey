import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import {
  ArrowLeft,
  UserRound as UserRoundIcon,
  Eye,
  Heart,
  Tag,
  Calendar,
  Clock,
  ChevronRight,
  Share2,
  Bookmark,
  ArrowUpRight,
} from "lucide-react";
import imgImage8 from "figma:asset/283a9cba8d924b3c1da8d99aad3275c0ae3d36cc.png";
import { BlogNavbar, BlogFooter, BLOG_ARTICLES } from "./BlogPage";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./ScrollAnimations";
import { motion } from "motion/react";

/* ─── Full article content (mock) ─── */
const ARTICLE_CONTENT: Record<
  string,
  { title: string; intro: string; sections: { heading: string; content: string; bullets?: string[] }[] }
> = {
  "converting-home-to-rental": {
    title: "Converting Your Home to a Rental: 6 Tips to Protect You & Your Property.",
    intro:
      "Converting your home into a rental property can be a lucrative investment, but it requires careful planning and preparation to protect both yourself and your property.",
    sections: [
      {
        heading: "1. Understand Your Local Laws",
        content:
          "Before converting your property, research local zoning laws, homeowner-tenant regulations, and any required permits or licenses. Some areas have specific requirements for rental properties that differ from owner-occupied homes.",
      },
      {
        heading: "2. Get Proper Insurance",
        content:
          "Standard homeowner's insurance typically doesn't cover rental activities. You'll need to switch to a homeowner insurance policy that covers property damage, liability, and potentially lost rental income.",
      },
      {
        heading: "3. Prepare the Property",
        content:
          "Make necessary repairs and upgrades before listing. Ensure all systems are functioning properly, address safety concerns, and consider cosmetic improvements that will attract quality tenants.",
        bullets: [
          "Fix any plumbing or electrical issues",
          "Install smoke and carbon monoxide detectors",
          "Ensure all locks and security features work",
          "Deep clean the entire property",
          "Consider fresh paint and new flooring",
        ],
      },
      {
        heading: "4. Screen Tenants Thoroughly",
        content:
          "A thorough screening process is your best protection against problematic tenants. This includes credit checks, employment verification, rental history, and references.",
      },
      {
        heading: "5. Create a Solid Lease Agreement",
        content:
          "Your lease is your most important legal document. It should clearly outline rent amount, payment terms, maintenance responsibilities, rules, and termination procedures.",
      },
      {
        heading: "6. Plan for Property Management",
        content:
          "Decide whether you'll manage the property yourself or hire a property management company. Consider the time commitment, your proximity to the property, and your experience with homeowner responsibilities.",
      },
    ],
  },
  "understanding-rental-regulations": {
    title: "Understanding Local Rental Regulations: What You Need to Know.",
    intro:
      "Navigating the complex world of rental regulations can be overwhelming for both homeowners and tenants. Understanding your local laws is crucial for a successful rental experience and avoiding costly legal issues.",
    sections: [
      {
        heading: "Why Local Rental Regulations Matter",
        content:
          "Rental regulations vary significantly from one location to another. What's legal in Lagos might be prohibited in Abuja, and what's required in your state might not apply in neighboring regions. These laws are designed to protect both homeowners and tenants while ensuring fair housing practices.",
      },
      {
        heading: "Key Areas Covered by Rental Regulations",
        content:
          "1. Security Deposits and Fees\nMost jurisdictions have specific rules about how much homeowners can charge for security deposits, when they must be returned, and what deductions are permissible. Understanding these limits can save you from disputes down the road.\n\n2. Rent Control and Increases\nSome areas have rent control laws that limit how much and how often rent can be increased. Even in areas without rent control, there are often requirements for proper notice before rent increases.\n\n3. Habitability Standards\nHomeowners are typically required to maintain properties in habitable condition. This includes ensuring proper plumbing, electrical systems, heating, and structural integrity. Tenants also have rights regarding repairs and maintenance.\n\n4. Eviction Procedures\nEviction laws are particularly complex and vary widely. Understanding the proper procedures, notice requirements, and tenant rights is essential for homeowners to avoid legal complications.",
      },
      {
        heading: "How to Stay Informed",
        content: "",
        bullets: [
          "Contact your local housing authority or tenant rights organization",
          "Review your state and local government websites for housing regulations",
          "Consult with a real estate attorney familiar with local laws",
          "Join local homeowner or tenant associations for ongoing updates",
          "Stay informed about legislative changes that might affect rental properties",
        ],
      },
      {
        heading: "Common Mistakes to Avoid",
        content: "Many rental disputes arise from misunderstanding or ignoring local regulations. Some common mistakes include:",
        bullets: [
          "Using generic lease agreements without considering local requirements",
          "Charging excessive fees or deposits beyond legal limits",
          "Failing to provide proper notice for rent increases or lease changes",
          "Not understanding fair housing laws and discrimination protections",
          "Ignoring required disclosures about property conditions or hazards",
        ],
      },
      {
        heading: "Taking Action",
        content:
          "Whether you're a homeowner or tenant, taking the time to understand your local rental regulations is an investment in your success and peace of mind. Don't wait until a problem arises – educate yourself now and ensure your rental arrangements comply with all applicable laws.",
      },
    ],
  },
  "setting-right-rental-price": {
    title: "Setting the Right Rental Price: How to Evaluate Your Property's Worth.",
    intro:
      "Pricing your rental property correctly is one of the most important decisions you'll make as a homeowner. Set it too high and you'll struggle to find tenants; too low and you'll leave money on the table.",
    sections: [
      { heading: "Research Comparable Properties", content: "Start by researching similar properties in your area. Look at listings with comparable size, condition, location, and amenities to establish a baseline price range." },
      { heading: "Consider Your Property's Unique Features", content: "Identify what makes your property stand out — whether it's a renovated kitchen, parking availability, proximity to public transit, or outdoor space. These features can justify a premium." },
      { heading: "Factor in All Costs", content: "Make sure your rental price covers mortgage payments, property taxes, insurance, maintenance costs, and leaves room for profit. Don't forget to account for potential vacancy periods." },
      { heading: "Adjust for Market Conditions", content: "Monitor seasonal trends and local market conditions. Rental demand typically peaks during summer months and may dip during winter, allowing you to adjust pricing accordingly." },
    ],
  },
  "preparing-home-for-tenants": {
    title: "Preparing Your Home for Tenants: Essential Maintenance Checklist.",
    intro: "A well-maintained property attracts quality tenants and reduces costly emergency repairs. Use this comprehensive checklist to ensure your rental is move-in ready.",
    sections: [
      { heading: "Exterior Inspection", content: "Check the roof, gutters, siding, and foundation for damage. Ensure walkways are clear and outdoor lighting works properly." },
      { heading: "Plumbing Systems", content: "Test all faucets, toilets, and water heaters. Look for leaks under sinks and around water connections. Ensure proper drainage in all fixtures." },
      { heading: "Electrical Systems", content: "Test all outlets, switches, and fixtures. Verify that circuit breakers are properly labeled and functioning. Install GFCI outlets in kitchens and bathrooms." },
      { heading: "Safety Equipment", content: "Install smoke detectors on every level and carbon monoxide detectors near sleeping areas. Check fire extinguishers and ensure all exit paths are clear." },
    ],
  },
  "choosing-right-tenants": {
    title: "Choosing the Right Tenants: Screening Tips for Homeowners.",
    intro: "Finding reliable tenants is crucial for protecting your investment and ensuring a smooth rental experience. A thorough screening process helps identify responsible renters.",
    sections: [
      { heading: "Application Process", content: "Create a comprehensive rental application that collects essential information including employment history, income verification, previous addresses, and references." },
      { heading: "Background and Credit Checks", content: "Run credit reports to assess financial responsibility. Check for eviction history and criminal background as permitted by local laws, always following fair housing guidelines." },
      { heading: "Income Verification", content: "A common rule of thumb is that rent should not exceed 30% of a tenant's gross monthly income. Request pay stubs, tax returns, or employment verification letters." },
      { heading: "Reference Checks", content: "Contact previous homeowners to learn about the applicant's rental history, payment reliability, and property care. Also verify employment with current employers." },
    ],
  },
  "creating-solid-rental-agreement": {
    title: "Creating a Solid Rental Agreement: Key Clauses to Include.",
    intro: "A well-crafted rental agreement protects both homeowners and tenants by clearly defining expectations, responsibilities, and procedures for handling common rental situations.",
    sections: [
      { heading: "Essential Terms", content: "Include the full legal names of all parties, property address, lease term, rent amount, payment schedule, and security deposit details." },
      { heading: "Maintenance and Repairs", content: "Clearly define who is responsible for different types of maintenance. Specify how tenants should report issues and your timeline for addressing repairs." },
      { heading: "Rules and Restrictions", content: "Address pet policies, noise restrictions, guest policies, smoking rules, and any other property-specific guidelines. Be specific to avoid misunderstandings." },
      { heading: "Termination Procedures", content: "Detail the process for lease renewal, non-renewal notices, early termination penalties, and eviction procedures. Include required notice periods for both parties." },
    ],
  },
};

/* ─── Reading progress bar ─── */
function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent">
      <motion.div className="h-full bg-[#c85212] origin-left" style={{ width: `${progress}%` }} />
    </div>
  );
}

/* ─── Table of Contents ─── */
function TableOfContents({ sections }: { sections: { heading: string }[] }) {
  return (
    <div className="bg-[#f8f9fb] border border-[#e5e7eb] rounded-[16px] p-6">
      <h4 className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[14px] tracking-[0.8px] uppercase mb-4">
        In this article
      </h4>
      <div className="flex flex-col gap-2.5">
        {sections.map((s, i) => (
          <button
            key={i}
            onClick={() => {
              const el = document.getElementById(`section-${i}`);
              if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="text-left font-['Mulish',sans-serif] text-[#667085] text-[14px] leading-[1.5] hover:text-[#c85212] transition-colors cursor-pointer pl-3 border-l-2 border-transparent hover:border-[#c85212]"
          >
            {s.heading}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   BLOG ARTICLE PAGE
   ═══════════════════════════════════════════════════════ */
export function BlogArticlePage() {
  const { slug } = useParams();
  const article = BLOG_ARTICLES.find((a) => a.id === slug);
  const content = slug ? ARTICLE_CONTENT[slug] : null;

  const relatedArticles = BLOG_ARTICLES.filter((a) => a.id !== slug).slice(0, 3);

  if (!article || !content) {
    return (
      <div className="bg-[#10182c] min-h-screen">
        <BlogNavbar />
        <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 py-32 text-center">
          <h1 className="font-['Montserrat',sans-serif] text-white text-[36px] mb-4">Article not found</h1>
          <Link to="/blog" className="font-['Mulish',sans-serif] text-[#c85212] hover:underline text-[17px]">
            &larr; Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f9fb] min-h-screen">
      <ReadingProgress />

      {/* ───── HERO HEADER ───── */}
      <section className="relative bg-[#10182c] overflow-hidden pb-12 md:pb-16">
        {/* Decorative */}
        <div className="absolute top-[80px] right-[-60px] w-[300px] md:w-[500px] h-[300px] md:h-[500px] border border-[rgba(200,82,18,0.08)] rounded-full opacity-40" />
        <div className="absolute bottom-[-100px] left-[-200px] w-[400px] h-[400px] border border-[rgba(255,255,255,0.02)] rounded-full" />
        <div className="absolute top-[180px] left-[12%] w-1.5 h-1.5 rounded-full bg-[#c85212] opacity-20 hidden md:block" />
        <div className="absolute top-[240px] right-[25%] w-1.5 h-1.5 rounded-full bg-[#fbff79] opacity-15 hidden lg:block" />

        <BlogNavbar />

        <div className="relative z-10 max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 pt-10 md:pt-14">
          {/* Breadcrumb */}
          <AnimatedSection variant="fadeUp" delay={0}>
            <div className="flex items-center gap-2 mb-8">
              <Link to="/" className="font-['Mulish',sans-serif] text-white/40 text-[14px] tracking-[0.64px] hover:text-white/60 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/20" />
              <Link to="/blog" className="font-['Mulish',sans-serif] text-white/40 text-[14px] tracking-[0.64px] hover:text-white/60 transition-colors">Blog</Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/20" />
              <span className="font-['Mulish',sans-serif] text-[#c85212] text-[14px] tracking-[0.64px]">{article.category}</span>
            </div>
          </AnimatedSection>

          {/* Category + read time */}
          <AnimatedSection variant="fadeUp" delay={0.05}>
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-[#c85212] text-white font-['Mulish',sans-serif] text-[11px] md:text-[12px] tracking-[0.8px] uppercase px-3.5 py-1.5 rounded-full">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-white/40 font-['Mulish',sans-serif] text-[13px]">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>
          </AnimatedSection>

          {/* Title */}
          <AnimatedSection variant="fadeUp" delay={0.1}>
            <h1 className="font-['Montserrat',sans-serif] text-white text-[32px] md:text-[44px] lg:text-[56px] tracking-[-1.5px] leading-[1.1] max-w-[900px] mb-6">
              {content.title}
            </h1>
          </AnimatedSection>

          {/* Meta row */}
          <AnimatedSection variant="fadeUp" delay={0.15}>
            <div className="flex flex-wrap items-center gap-5 md:gap-6">
              {/* Author */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#c85212]/20 flex items-center justify-center">
                  <UserRoundIcon className="w-4 h-4 text-[#c85212]" />
                </div>
                <div>
                  <p className="font-['Mulish',sans-serif] font-bold text-white text-[14px] leading-none">{article.author}</p>
                  <p className="font-['Mulish',sans-serif] text-white/40 text-[12px] mt-0.5">Author</p>
                </div>
              </div>

              <div className="w-px h-6 bg-white/10 hidden md:block" />

              <div className="flex items-center gap-2 text-white/50">
                <Calendar className="w-4 h-4" />
                <span className="font-['Mulish',sans-serif] text-[13px]">{article.date}</span>
              </div>
              <div className="flex items-center gap-2 text-white/50">
                <Tag className="w-4 h-4" />
                <span className="font-['Mulish',sans-serif] text-[13px]">{article.tag}</span>
              </div>
              <div className="flex items-center gap-2 text-white/50">
                <Eye className="w-4 h-4" />
                <span className="font-['Mulish',sans-serif] text-[13px]">{article.views.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2 text-white/50">
                <Heart className="w-4 h-4" />
                <span className="font-['Mulish',sans-serif] text-[13px]">{article.likes}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ───── FEATURED IMAGE ───── */}
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 -mt-1">
        <AnimatedSection variant="scaleUp" delay={0.2}>
          <div className="relative rounded-[20px] md:rounded-[24px] overflow-hidden aspect-[2.2/1] shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
            <img src={imgImage8} alt={content.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </AnimatedSection>
      </div>

      {/* ───── ARTICLE CONTENT ───── */}
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 pt-10 md:pt-14 pb-16 md:pb-24">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* Sidebar */}
          <aside className="lg:w-[280px] shrink-0 lg:order-2">
            <div className="lg:sticky lg:top-20 flex flex-col gap-5">
              {/* Actions */}
              <div className="flex lg:flex-col gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 bg-white border border-[#e5e7eb] rounded-[12px] px-4 py-3 font-['Mulish',sans-serif] text-[#10182c] text-[14px] cursor-pointer hover:border-[#c85212] hover:text-[#c85212] transition-colors flex-1 lg:flex-none justify-center lg:justify-start"
                >
                  <Share2 className="w-4 h-4" /> Share Article
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 bg-white border border-[#e5e7eb] rounded-[12px] px-4 py-3 font-['Mulish',sans-serif] text-[#10182c] text-[14px] cursor-pointer hover:border-[#c85212] hover:text-[#c85212] transition-colors flex-1 lg:flex-none justify-center lg:justify-start"
                >
                  <Bookmark className="w-4 h-4" /> Save for Later
                </motion.button>
              </div>

              {/* Table of contents */}
              <div className="hidden lg:block">
                <TableOfContents sections={content.sections} />
              </div>
            </div>
          </aside>

          {/* Main content */}
          <article className="flex-1 lg:order-1 min-w-0">
            {/* Intro */}
            <AnimatedSection variant="fadeUp" delay={0.25}>
              <p className="font-['Mulish',sans-serif] text-[#10182c] text-[18px] md:text-[21px] leading-[1.7] mb-10 pb-8 border-b border-[#e5e7eb]">
                {content.intro}
              </p>
            </AnimatedSection>

            {/* Sections */}
            {content.sections.map((section, idx) => (
              <AnimatedSection key={idx} variant="fadeUp" delay={0.05}>
                <div id={`section-${idx}`} className="mb-10">
                  <h2 className="font-['Montserrat',sans-serif] text-[#10182c] text-[22px] md:text-[26px] tracking-[-0.5px] leading-[1.3] mb-4 scroll-mt-24">
                    {section.heading}
                  </h2>
                  {section.content && (
                    <div className="font-['Mulish',sans-serif] text-[#4b5563] text-[16px] md:text-[18px] leading-[1.75] whitespace-pre-line">
                      {section.content}
                    </div>
                  )}
                  {section.bullets && (
                    <ul className="mt-4 space-y-2.5">
                      {section.bullets.map((bullet, bidx) => (
                        <li key={bidx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c85212] mt-2.5 shrink-0" />
                          <span className="font-['Mulish',sans-serif] text-[#4b5563] text-[16px] md:text-[18px] leading-[1.75]">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </AnimatedSection>
            ))}

            {/* Bottom CTA */}
            <div className="mt-12 pt-8 border-t border-[#e5e7eb]">
              <div className="bg-[#10182c] rounded-[20px] p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[160px] h-[160px] rounded-bl-full opacity-50" style={{ backgroundImage: "linear-gradient(225deg, rgba(200,82,18,0.25) 0%, transparent 100%)" }} />
                <h3 className="font-['Montserrat',sans-serif] text-white text-[22px] md:text-[28px] tracking-[-0.5px] leading-[1.2] mb-3 relative z-10">
                  Found this helpful?
                </h3>
                <p className="font-['Mulish',sans-serif] text-white/50 text-[15px] md:text-[17px] leading-[1.6] mb-6 max-w-[480px] relative z-10">
                  Explore more articles on renting, property management, and making smarter housing decisions.
                </p>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 bg-[#c85212] text-white rounded-full px-6 py-3 font-['Mulish',sans-serif] font-bold text-[15px] hover:bg-[#b84a10] transition-colors relative z-10"
                >
                  Browse All Articles <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* ───── RELATED ARTICLES ───── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24">
          <AnimatedSection variant="fadeUp">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-['Montserrat',sans-serif] text-[#10182c] text-[26px] md:text-[32px] tracking-[-0.8px]">
                More Articles
              </h2>
              <Link
                to="/blog"
                className="flex items-center gap-2 font-['Mulish',sans-serif] font-bold text-[#c85212] text-[15px] hover:gap-3 transition-all"
              >
                View all <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7" staggerDelay={0.08}>
            {relatedArticles.map((a) => (
              <StaggerItem key={a.id}>
                <Link to={`/blog/${a.id}`} className="block group h-full">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="bg-[#f8f9fb] rounded-[20px] overflow-hidden hover:shadow-[0_12px_40px_rgba(200,82,18,0.08)] transition-shadow duration-500 h-full flex flex-col"
                  >
                    <div className="relative h-[200px] overflow-hidden">
                      <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 bg-[#c85212] text-white font-['Mulish',sans-serif] text-[11px] tracking-[0.5px] uppercase px-3 py-1 rounded-full">{a.category}</span>
                    </div>
                    <div className="flex flex-col flex-1 p-5 md:p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-['Mulish',sans-serif] text-[#c85212] text-[12px] tracking-[0.5px]">{a.date}</span>
                        <span className="w-1 h-1 rounded-full bg-black/20" />
                        <span className="flex items-center gap-1 font-['Mulish',sans-serif] text-black/40 text-[12px]">
                          <Clock className="w-3 h-3" />{a.readTime}
                        </span>
                      </div>
                      <h3 className="font-['Montserrat',sans-serif] text-[#10182c] text-[17px] md:text-[19px] tracking-[-0.3px] leading-[1.3] mb-3 flex-1">{a.title}</h3>
                      <div className="flex items-center justify-between pt-4 border-t border-[#e5e7eb]">
                        <span className="font-['Mulish',sans-serif] text-black/40 text-[13px]">By {a.author}</span>
                        <span className="flex items-center gap-1.5 font-['Mulish',sans-serif] font-bold text-[#c85212] text-[13px] group-hover:gap-2.5 transition-all">
                          Read <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <BlogFooter />
    </div>
  );
}

export default BlogArticlePage;