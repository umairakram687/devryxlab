import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on software development, product strategy, compliance, and digital innovation from the Devryxlab team.",
};

const posts = [
  {
    slug: "milestone-based-development",
    title: "How We Deliver: Our Milestone-Based Development Strategy",
    excerpt:
      "From HIPAA-compliant architecture and NDA-protected engagements to government-approved third-party integrations — here is the exact framework we use to deliver complex software projects on time and on budget.",
    category: "Process & Strategy",
    date: "May 10, 2026",
    readTime: "8 min read",
    tags: ["Development Process", "HIPAA", "NELC", "Milestones", "NDA"],
    featured: true,
  },
];

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      {/* Header */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 relative text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-6">
            Insights & Strategy
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            The Devryxlab Blog
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real insights on software development, compliance, product strategy, 
            and how we approach building digital products.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-24">
        {/* Featured Post */}
        {featured && (
          <Link href={`/blog/${featured.slug}`} className="block group mb-12">
            <article className="relative rounded-3xl border border-border bg-muted/20 hover:bg-muted/40 hover:border-primary/30 transition-all duration-300 overflow-hidden p-8 md:p-12">
              <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-gradient-to-bl from-primary/10 to-transparent pointer-events-none rounded-3xl" />
              <div className="relative">
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                    Featured
                  </span>
                  <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium border border-border">
                    {featured.category}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors max-w-3xl leading-tight">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl text-lg">
                  {featured.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {featured.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-5">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-background border border-border text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        )}

        {/* More posts placeholder */}
        <div className="border-t border-border pt-12 text-center">
          <p className="text-muted-foreground text-sm mb-6">More articles coming soon. Subscribe to get notified.</p>
          <div className="flex gap-3 justify-center max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <button className="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
