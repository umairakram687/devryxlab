import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import { ArrowRight, Shield, CheckCircle, Globe, Users, Zap, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Devryxlab — a full-service software development studio building high-performance web apps, mobile solutions, and digital products for ambitious businesses.",
};

const values = [
  {
    icon: Shield,
    title: "Security-First Development",
    description:
      "Every project we build follows HIPAA-compliant protocols, NDA-backed confidentiality, and industry security standards from day one — not as an afterthought.",
  },
  {
    icon: CheckCircle,
    title: "Milestone-Based Delivery",
    description:
      "We break every project into clear, agreed milestones. You see real progress at every stage, with the ability to review and approve before we move forward.",
  },
  {
    icon: Globe,
    title: "Global Compliance Ready",
    description:
      "We help clients achieve regulatory approvals — from Saudi Arabian NELC integrations to GDPR compliance and government-endorsed third-party certifications.",
  },
  {
    icon: Users,
    title: "True Partnership",
    description:
      "We treat every client project as if it were our own business. We ask the hard questions, challenge assumptions, and push for solutions that actually work.",
  },
  {
    icon: Zap,
    title: "Performance Obsessed",
    description:
      "Sub-second load times, optimised databases, and lean architectures aren't optional extras — they are built into every line of code we write.",
  },
  {
    icon: Award,
    title: "Post-Launch Support",
    description:
      "Every project includes one month of free maintenance after go-live. We don't disappear after delivery — we make sure your product succeeds in production.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "4", label: "Countries Served" },
  { value: "100%", label: "Milestone Success Rate" },
];

const team = [
  {
    name: "Umair Akram",
    role: "CEO & Founder",
    bio: "Full-stack engineer with deep expertise in React, Next.js, and cloud infrastructure. 6+ years building scalable digital products.",
    initials: "UA",
    color: "from-primary to-secondary",
    image: "/images/CEO.png",
  },
  {
    name: "Design Lead",
    role: "UI/UX Architect",
    bio: "Specialises in user-centric design systems, Figma prototyping, and conversion-optimised interfaces for web and mobile.",
    initials: "DL",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Backend Lead",
    role: "Systems Engineer",
    bio: "Expert in Node.js, PostgreSQL, and REST/GraphQL APIs. Focused on scalable, secure, and well-documented backend systems.",
    initials: "BL",
    color: "from-purple-500 to-pink-500",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-6">
            Who We Are
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            We Build Software That{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Actually Works
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
            Devryxlab is a remote-first software development studio. We partner with startups, scaleups, 
            and enterprises to design, build, and launch digital products — from idea to production, 
            with full transparency at every step.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/blog/milestone-based-development"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:bg-muted/50 transition-colors"
            >
              Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {s.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Our Story</div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Built by developers, for businesses who are serious about quality
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Devryxlab was founded after years of seeing the same problems repeat: agencies 
                  that over-promised and under-delivered, projects that dragged on without visible 
                  progress, and codebases that became unmaintainable within months of launch.
                </p>
                <p>
                  We built Devryxlab on a different model. Every project runs on a 
                  <strong className="text-foreground"> milestone-based delivery system</strong> — 
                  clear deliverables, clear timelines, and payment tied to real progress, not invoices 
                  sent on the 1st of the month.
                </p>
                <p>
                  We work with clients who need software that complies with real-world regulations — 
                  healthcare platforms requiring <strong className="text-foreground">HIPAA-compliant architecture</strong>, 
                  educational platforms requiring <strong className="text-foreground">NELC government integration</strong>, 
                  and SaaS products requiring GDPR-aligned data handling.
                </p>
                <p>
                  Every engagement starts with an NDA. Every line of code is owned by you after full delivery. 
                  And every project includes a post-launch support window, because software isn't finished at deployment.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
                    <Shield className="w-8 h-8 text-primary mb-3" />
                    <div className="font-semibold text-foreground text-sm">NDA Protected</div>
                    <div className="text-xs text-muted-foreground mt-1">Every engagement starts with confidentiality</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-secondary/10 border border-secondary/20">
                    <Globe className="w-8 h-8 text-secondary mb-3" />
                    <div className="font-semibold text-foreground text-sm">NELC Compliant</div>
                    <div className="text-xs text-muted-foreground mt-1">Saudi & GCC government integrations</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="p-6 rounded-2xl bg-muted border border-border">
                    <CheckCircle className="w-8 h-8 text-green-500 mb-3" />
                    <div className="font-semibold text-foreground text-sm">HIPAA Ready</div>
                    <div className="text-xs text-muted-foreground mt-1">Healthcare data compliance built-in</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-muted border border-border">
                    <Award className="w-8 h-8 text-amber-500 mb-3" />
                    <div className="font-semibold text-foreground text-sm">30-Day Warranty</div>
                    <div className="text-xs text-muted-foreground mt-1">Free maintenance post-launch</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">How We Work</div>
            <h2 className="text-4xl font-bold text-foreground">Our Core Principles</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">The People</div>
            <h2 className="text-4xl font-bold text-foreground">Meet the Team</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A small, senior team that punches above its weight. No juniors, no outsourcing without disclosure.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-105 transition-transform shadow-lg overflow-hidden`}>
                  {member.image ? (
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  ) : (
                    member.initials
                  )}
                </div>
                <h3 className="font-bold text-foreground text-lg">{member.name}</h3>
                <div className="text-primary text-sm font-medium mb-3">{member.role}</div>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Let's talk about your project. No pressure, no jargon — just an honest conversation 
            about what you need and how we can help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/blog/milestone-based-development"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-semibold hover:bg-muted/50 transition-colors"
            >
              Read Our Process
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
