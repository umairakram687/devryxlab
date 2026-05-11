import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import { Search, Briefcase, MapPin, Clock, ArrowRight, Coffee } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Devryxlab team. We are always looking for talented engineers, designers, and product thinkers who care deeply about craft.",
};

const perks = [
  { icon: "🌍", title: "Remote First", desc: "Work from anywhere in the world. We care about output, not location." },
  { icon: "📈", title: "Equity Opportunity", desc: "Senior hires get meaningful stake in projects they help shape." },
  { icon: "🧠", title: "Learning Budget", desc: "$500/year for courses, books, and conferences of your choice." },
  { icon: "⚡", title: "Fast Decisions", desc: "Small team means no bureaucracy. Your ideas actually get implemented." },
  { icon: "🛡️", title: "NDA & IP Clarity", desc: "You'll always know what you own and what we own. No grey areas." },
  { icon: "🚀", title: "Real Impact", desc: "Work on products used by real users, not internal tools nobody sees." },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-xs font-medium mb-6">
              We&apos;re Hiring
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Build the Future{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                With Us
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              We are a small, senior team that moves fast and ships quality software. 
              If you care about your craft and want to work on products that matter, 
              you might be exactly who we are looking for.
            </p>
            {/* Search bar */}
            <div className="flex gap-3 max-w-xl">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search roles, skills, or departments..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  disabled
                />
              </div>
              <button
                disabled
                className="px-5 py-3.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium opacity-60 cursor-not-allowed"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* No Positions Available */}
      <section className="py-8 pb-24">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xl font-bold text-foreground">Open Positions</h2>
            <span className="text-sm text-muted-foreground">0 positions found</span>
          </div>

          {/* Empty state */}
          <div className="max-w-2xl mx-auto text-center py-20 px-8 rounded-3xl border border-border bg-muted/20">
            <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-6">
              <Coffee className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              No Open Positions Right Now
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We don&apos;t have any active job postings at this moment, but we are always 
              interested in meeting talented people. If you are a great fit, reach out — 
              we create roles for the right people.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:careers@devryxlab.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Send Your Resume <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border text-foreground text-sm font-medium hover:bg-muted/50 transition-colors"
              >
                Learn About the Team
              </Link>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Send your CV to{" "}
              <a href="mailto:careers@devryxlab.com" className="text-primary hover:underline">
                careers@devryxlab.com
              </a>{" "}
              and we&apos;ll keep you in mind for future openings.
            </p>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Why Devryxlab</div>
            <h2 className="text-3xl font-bold text-foreground">What We Offer</h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
              We believe great people deserve a great environment to do their best work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {perks.map((p) => (
              <div key={p.title} className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors group">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="flex gap-6 justify-center mb-8 text-4xl">
            <Briefcase className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            What We Look For
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We value craftsmanship over credentials. If you write clean, maintainable code, 
            communicate clearly, take ownership of your work, and genuinely care about the 
            people who use what you build — we want to hear from you.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-10 text-left">
            {[
              "Strong communication skills",
              "Ownership mentality",
              "Attention to detail",
              "Curiosity and self-learning",
              "Respect for deadlines",
              "Constructive feedback culture",
            ].map((trait) => (
              <div key={trait} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {trait}
              </div>
            ))}
          </div>
          <a
            href="mailto:careers@devryxlab.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
