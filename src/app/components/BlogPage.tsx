import { useState, useMemo } from "react";
import { Link } from "react-router";
import {
  Search,
  ArrowRight,
  ChevronRight,
  Clock,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import imgApartey1 from "figma:asset/7d425bbf61d32feb50fb9bfbd3b2ace1146e5ed1.png";
import imgImage8 from "figma:asset/283a9cba8d924b3c1da8d99aad3275c0ae3d36cc.png";
import imgImage9 from "figma:asset/094ad79142b11e4db48c945ec035889217795159.png";
import svgPaths from "../imports/svg-u114kfou8c";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./ScrollAnimations";

/* ═══════════════════════════════════════════════════════
   BLOG DATA
   ═══════════════════════════════════════════════════════ */
export const BLOG_ARTICLES = [
  {
    id: "converting-home-to-rental",
    title: "Converting Your Home to a Rental: 6 Tips to Protect You & Your Property.",
    excerpt:
      "Learn the essential steps to transform your home into a profitable rental while safeguarding your investment and avoiding common pitfalls.",
    category: "Renting",
    image: imgImage8,
    author: "Andrew",
    date: "Jan 15, 2025",
    tag: "Buying Guide",
    views: 1250,
    likes: 102,
    readTime: "8 min read",
  },
  {
    id: "understanding-rental-regulations",
    title: "Understanding Local Rental Regulations: What You Need to Know.",
    excerpt:
      "Navigate the complex world of homeowner-tenant laws, zoning rules, and compliance requirements with this comprehensive guide.",
    category: "Renting",
    image: imgImage8,
    author: "Andrew",
    date: "Jan 15, 2025",
    tag: "Buying Guide",
    views: 1250,
    likes: 102,
    readTime: "10 min read",
  },
  {
    id: "setting-right-rental-price",
    title: "Setting the Right Rental Price: How to Evaluate Your Property's Worth.",
    excerpt:
      "Discover data-driven strategies for pricing your rental property competitively while maximizing your return on investment.",
    category: "Renting",
    image: imgImage8,
    author: "Andrew",
    date: "Jan 20, 2025",
    tag: "Pricing",
    views: 980,
    likes: 87,
    readTime: "6 min read",
  },
  {
    id: "preparing-home-for-tenants",
    title: "Preparing Your Home for Tenants: Essential Maintenance Checklist.",
    excerpt:
      "Ensure your property is move-in ready with this comprehensive checklist covering everything from plumbing to safety equipment.",
    category: "Maintenance",
    image: imgImage8,
    author: "Sarah",
    date: "Feb 1, 2025",
    tag: "Maintenance",
    views: 870,
    likes: 64,
    readTime: "7 min read",
  },
  {
    id: "choosing-right-tenants",
    title: "Choosing the Right Tenants: Screening Tips for Homeowners.",
    excerpt:
      "A thorough screening process is your best protection. Learn how to identify responsible renters and protect your property.",
    category: "Homeowners",
    image: imgImage8,
    author: "Michael",
    date: "Feb 10, 2025",
    tag: "Screening",
    views: 1120,
    likes: 93,
    readTime: "9 min read",
  },
  {
    id: "creating-solid-rental-agreement",
    title: "Creating a Solid Rental Agreement: Key Clauses to Include.",
    excerpt:
      "Protect both parties with a well-crafted lease. Learn which clauses are essential and how to avoid costly legal mistakes.",
    category: "Legal",
    image: imgImage8,
    author: "Femi",
    date: "Feb 18, 2025",
    tag: "Legal",
    views: 1340,
    likes: 115,
    readTime: "11 min read",
  },
];

const ALL_CATEGORIES = ["All", ...Array.from(new Set(BLOG_ARTICLES.map((a) => a.category)))];

/* ═══════════════════════════════════════════════════════
   SHARED NAVBAR (dark, matches About page)
   ═══════════════════════════════════════════════════════ */
import { SharedNavbar } from "./SharedNavbar";

export function BlogNavbar() {
  return <SharedNavbar activePage="Blog" transparent />;
}

/* ═══════════════════════════════════════════════════════
   SHARED FOOTER (dark, matches About page)
   ═══════════════════════════════════════════════════════ */
export function BlogFooter() {
  return (
    <footer className="bg-[#10182c] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-bl-full opacity-40" style={{ backgroundImage: "linear-gradient(225deg, rgba(200,82,18,0.08) 0%, transparent 100%)" }} />

      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 pt-16 md:pt-20 pb-10 md:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-5">
            <Link to="/" className="relative inline-block h-[50px] w-[140px] mb-6">
              <img src={imgApartey1} alt="Apartey" className="absolute h-[321%] left-[-17%] top-[-110%] w-[131%] max-w-none" />
            </Link>
            <p className="font-['Mulish',sans-serif] text-white/60 text-[15px] md:text-[17px] leading-[1.6] mb-6 max-w-[420px]">
              Apartey is a community-powered rent intelligence platform designed to help renters make better, smarter housing decisions.
            </p>
            <p className="font-['Mulish',sans-serif] text-white/30 text-[14px]">&copy; 2025 Apartey. All rights reserved.</p>
          </div>

          {/* Right */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-['Mulish',sans-serif] font-bold text-white text-[16px] mb-5">Company</h4>
              <div className="flex flex-col gap-3">
                <Link to="/about" className="font-['Mulish',sans-serif] text-white/60 text-[15px] hover:text-[#c85212] transition-colors">About us</Link>
                <Link to="/blog" className="font-['Mulish',sans-serif] text-white/60 text-[15px] hover:text-[#c85212] transition-colors">Blog</Link>
              </div>
            </div>
            <div>
              <h4 className="font-['Mulish',sans-serif] font-bold text-white text-[16px] mb-5">Support</h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="font-['Mulish',sans-serif] text-white/60 text-[15px] hover:text-[#c85212] transition-colors">Contact us</a>
                <a href="#" className="font-['Mulish',sans-serif] text-white/60 text-[15px] hover:text-[#c85212] transition-colors">FAQ</a>
              </div>
            </div>
            <div>
              <h4 className="font-['Mulish',sans-serif] font-bold text-white text-[16px] mb-5">Legal</h4>
              <div className="flex flex-col gap-3">
                {["Privacy Policy", "Terms of Service", "Cookies Settings"].map((l) => (
                  <a key={l} href="#" className="font-['Mulish',sans-serif] text-white/60 text-[15px] hover:text-[#c85212] transition-colors">{l}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════
   ARTICLE CARD
   ═══════════════════════════════════════════════════════ */
function ArticleCard({ article, variant = "default" }: { article: (typeof BLOG_ARTICLES)[0]; variant?: "default" | "horizontal" }) {
  if (variant === "horizontal") {
    return (
      <Link to={`/blog/${article.id}`} className="block group">
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="bg-white rounded-[20px] overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(200,82,18,0.1)] transition-shadow duration-500 flex flex-col md:flex-row h-full"
        >
          {/* Image */}
          <div className="relative w-full md:w-[45%] shrink-0 h-[220px] md:h-auto overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <span className="absolute top-4 left-4 bg-[#c85212] text-white font-['Mulish',sans-serif] text-[12px] tracking-[0.5px] uppercase px-3 py-1 rounded-full">
              {article.category}
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10 flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-['Mulish',sans-serif] text-[#c85212] text-[13px] tracking-[0.5px]">{article.date}</span>
              <span className="w-1 h-1 rounded-full bg-black/20" />
              <span className="flex items-center gap-1.5 font-['Mulish',sans-serif] text-black/40 text-[13px]">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            <h3 className="font-['Montserrat',sans-serif] text-[#10182c] text-[22px] md:text-[26px] lg:text-[30px] tracking-[-0.5px] leading-[1.2] mb-3">
              {article.title}
            </h3>

            <p className="font-['Mulish',sans-serif] text-[#667085] text-[15px] md:text-[17px] leading-[1.6] mb-6 line-clamp-2">
              {article.excerpt}
            </p>

            <div className="flex items-center gap-2 font-['Mulish',sans-serif] font-bold text-[#c85212] text-[15px] group-hover:gap-3 transition-all">
              Read Article <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  return (
    <Link to={`/blog/${article.id}`} className="block group h-full">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="bg-white rounded-[20px] overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(200,82,18,0.1)] transition-shadow duration-500 h-full flex flex-col"
      >
        {/* Image */}
        <div className="relative h-[200px] md:h-[220px] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <span className="absolute top-4 left-4 bg-[#c85212] text-white font-['Mulish',sans-serif] text-[11px] md:text-[12px] tracking-[0.5px] uppercase px-3 py-1 rounded-full">
            {article.category}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 md:p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-['Mulish',sans-serif] text-[#c85212] text-[12px] md:text-[13px] tracking-[0.5px]">{article.date}</span>
            <span className="w-1 h-1 rounded-full bg-black/20" />
            <span className="flex items-center gap-1 font-['Mulish',sans-serif] text-black/40 text-[12px] md:text-[13px]">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>

          <h3 className="font-['Montserrat',sans-serif] text-[#10182c] text-[17px] md:text-[20px] tracking-[-0.3px] leading-[1.3] mb-3 flex-1">
            {article.title}
          </h3>

          <p className="font-['Mulish',sans-serif] text-[#667085] text-[14px] md:text-[15px] leading-[1.6] mb-5 line-clamp-2">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-[#f0f0f0]">
            <span className="font-['Mulish',sans-serif] text-black/40 text-[13px]">By {article.author}</span>
            <span className="flex items-center gap-1.5 font-['Mulish',sans-serif] font-bold text-[#c85212] text-[13px] group-hover:gap-2.5 transition-all">
              Read <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

/* ═══════════════════════════════════════════════════════
   BLOG LISTING PAGE
   ═══════════════════════════════════════════════════════ */
export function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const featured = BLOG_ARTICLES[0];

  const filteredArticles = useMemo(() => {
    let results = BLOG_ARTICLES;
    if (activeCategory !== "All") {
      results = results.filter((a) => a.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.category.toLowerCase().includes(q)
      );
    }
    return results;
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-[#f8f9fb] min-h-screen">
      {/* ───── HERO ───── */}
      <section className="relative bg-[#10182c] overflow-hidden pb-16 md:pb-24">
        {/* Decorative */}
        <div className="absolute top-[100px] right-[-80px] md:right-[-30px] w-[350px] md:w-[550px] h-[350px] md:h-[550px] border border-[rgba(200,82,18,0.1)] rounded-full opacity-40" />
        <div className="absolute top-[160px] right-[20px] md:right-[80px] w-[220px] md:w-[380px] h-[220px] md:h-[380px] border border-[rgba(251,255,121,0.06)] rounded-full opacity-30" />
        <div className="absolute bottom-[-200px] left-[-250px] w-[500px] md:w-[800px] h-[500px] md:h-[800px] border border-[rgba(255,255,255,0.02)] rounded-full" />
        <div className="absolute top-[200px] left-[10%] w-1.5 h-1.5 rounded-full bg-[#c85212] opacity-25 hidden md:block" />
        <div className="absolute top-[350px] left-[25%] w-1.5 h-1.5 rounded-full bg-[#c85212] opacity-15 hidden md:block" />
        <div className="absolute top-[250px] right-[20%] w-1.5 h-1.5 rounded-full bg-[#fbff79] opacity-20 hidden lg:block" />

        <BlogNavbar />

        {/* Hero content */}
        <div className="relative z-10 max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 pt-14 md:pt-20 lg:pt-24">
          {/* Breadcrumb */}
          <AnimatedSection variant="fadeUp" delay={0}>
            <div className="flex items-center gap-2.5 mb-8">
              <Link to="/" className="font-['Mulish',sans-serif] text-white/40 text-[14px] md:text-[15px] tracking-[0.64px] hover:text-white/60 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-white/20" />
              <span className="font-['Mulish',sans-serif] text-[#c85212] text-[14px] md:text-[15px] tracking-[0.64px]">Blog</span>
            </div>
          </AnimatedSection>

          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-10">
            <AnimatedSection variant="fadeUp" delay={0.1}>
              <h1 className="font-['Montserrat',sans-serif] text-white text-[40px] md:text-[56px] lg:text-[72px] tracking-[-2px] leading-[1.05]">
                Apartey{" "}
                <span className="text-[#c85212]">Blog</span>
              </h1>
              <p className="font-['Mulish',sans-serif] text-white/50 text-[16px] md:text-[19px] tracking-[0.2px] leading-[1.6] mt-4 max-w-[560px]">
                Insights, tips, and stories about real estate and living spaces
              </p>
            </AnimatedSection>

            {/* Search */}
            <AnimatedSection variant="fadeUp" delay={0.2}>
              <div className="w-full lg:w-[420px] flex items-center bg-white/[0.07] border border-white/10 rounded-full px-5 py-3 gap-3 backdrop-blur-sm">
                <Search className="w-4.5 h-4.5 text-white/40 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="flex-1 bg-transparent border-none outline-none font-['Mulish',sans-serif] text-white text-[15px] tracking-[0.3px] placeholder:text-white/30"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="text-white/40 hover:text-white/70 cursor-pointer">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </AnimatedSection>
          </div>

          {/* Featured article */}
          <AnimatedSection variant="fadeUp" delay={0.25}>
            <Link to={`/blog/${featured.id}`} className="block group">
              <div className="relative rounded-[24px] overflow-hidden h-[300px] md:h-[400px] lg:h-[480px]">
                <img
                  src={imgImage9}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10182c] via-[rgba(16,24,44,0.3)] to-transparent" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#c85212] text-white font-['Mulish',sans-serif] text-[11px] md:text-[12px] tracking-[0.8px] uppercase px-3.5 py-1.5 rounded-full">
                      {featured.category}
                    </span>
                    <span className="bg-white/10 backdrop-blur-md text-white/80 font-['Mulish',sans-serif] text-[11px] md:text-[12px] tracking-[0.5px] px-3 py-1.5 rounded-full border border-white/10">
                      Featured
                    </span>
                  </div>

                  <h2 className="font-['Montserrat',sans-serif] text-white text-[24px] md:text-[34px] lg:text-[42px] tracking-[-1px] leading-[1.15] max-w-[700px] mb-3">
                    {featured.title}
                  </h2>

                  <p className="font-['Mulish',sans-serif] text-white/60 text-[14px] md:text-[16px] leading-[1.5] max-w-[550px] mb-5 hidden md:block">
                    {featured.excerpt}
                  </p>

                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-2 font-['Mulish',sans-serif] font-bold text-white text-[14px] md:text-[15px] group-hover:gap-3 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="flex items-center gap-1.5 font-['Mulish',sans-serif] text-white/40 text-[13px]">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ───── ALL ARTICLES ───── */}
      <section className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 py-14 md:py-20">
        {/* Section header + category pills */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 md:mb-14">
          <AnimatedSection variant="fadeLeft">
            <h2 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] md:text-[36px] tracking-[-0.8px] leading-[1.1]">
              All Articles
            </h2>
          </AnimatedSection>

          <AnimatedSection variant="fadeRight">
            <div className="flex items-center gap-2 flex-wrap">
              {ALL_CATEGORIES.map((cat) => (
                <motion.button
                  key={cat}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full font-['Mulish',sans-serif] text-[13px] md:text-[14px] tracking-[0.3px] cursor-pointer transition-all duration-300 border ${
                    activeCategory === cat
                      ? "bg-[#10182c] text-white border-[#10182c]"
                      : "bg-white text-[#667085] border-[#e5e7eb] hover:border-[#c85212] hover:text-[#c85212]"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Articles grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            {filteredArticles.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-['Mulish',sans-serif] text-[#667085] text-[18px]">No articles found. Try a different search or category.</p>
              </div>
            ) : (
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7" staggerDelay={0.07}>
                {filteredArticles.map((article) => (
                  <StaggerItem key={article.id}>
                    <ArticleCard article={article} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      <BlogFooter />
    </div>
  );
}

export default BlogPage;