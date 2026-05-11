import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import { ArrowLeft, Shield, CheckCircle, Globe, Clock, Calendar, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How We Deliver: Our Milestone-Based Development Strategy",
  description:
    "From HIPAA-compliant architecture and NDA-protected engagements to government-approved integrations like NELC — the exact framework Devryxlab uses to deliver complex software on time.",
};

const milestones = [
  {
    number: "01",
    title: "UI/UX & Prototype",
    color: "from-blue-500 to-indigo-600",
    deliverables: [
      "Figma design for all panels and user-facing screens",
      "Complete user flow mapping for all roles and panels",
      "Interactive prototype showing how the system looks and functions",
      "Design system: typography, color palette, components",
      "Client review and sign-off before development begins",
    ],
    outcome: "You see exactly what you are getting before a single line of code is written.",
  },
  {
    number: "02",
    title: "Frontend Development",
    color: "from-violet-500 to-purple-600",
    deliverables: [
      "Full frontend development for all panels based on approved Figma",
      "Responsive design compatible with all screen sizes (mobile, tablet, desktop, TV)",
      "Web app interfaces, admin panels, and any client-facing dashboards",
      "Accessibility compliance (WCAG 2.1 AA)",
      "Performance optimised — sub-2s load times target",
    ],
    outcome: "A fully functional frontend you can navigate and review, ready for backend integration.",
  },
  {
    number: "03",
    title: "Backend Development",
    color: "from-pink-500 to-rose-600",
    deliverables: [
      "Full backend architecture — databases, server logic, and APIs",
      "Implementation of all business logic and workflows",
      "Secure REST or GraphQL API development",
      "Authentication, authorisation, and role-based access control",
      "Third-party API integrations (payment gateways, SMS, email, external services)",
    ],
    outcome: "A fully operational backend with documented APIs and admin access credentials.",
  },
  {
    number: "04",
    title: "Integration, Testing & Go-Live",
    color: "from-amber-500 to-orange-600",
    deliverables: [
      "Full integration between frontend and backend",
      "End-to-end testing across all user flows and edge cases",
      "Performance and load testing",
      "Bug fixing and quality assurance",
      "Production deployment and go-live support",
      "Handover documentation and codebase walkthrough",
    ],
    outcome: "A complete, fully tested, production-ready system delivered and deployed.",
  },
];

const complianceItems = [
  {
    icon: Shield,
    title: "HIPAA-Compliant Architecture",
    description:
      "For healthcare and medtech projects, we implement HIPAA-compliant data handling from the ground up. This includes encrypted data at rest and in transit, audit logging, role-based access control, and Business Associate Agreement (BAA) documentation. We don't retrofit compliance — we architect for it from day one.",
    color: "text-blue-500",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: CheckCircle,
    title: "NDA-Protected Engagements",
    description:
      "Every Devryxlab engagement begins with a mutual Non-Disclosure Agreement before any project details are discussed. Your ideas, business logic, proprietary algorithms, and competitive strategy stay confidential. We extend NDA obligations to every team member working on your project, not just the account lead.",
    color: "text-green-500",
    bg: "bg-green-500/10 border-green-500/20",
  },
  {
    icon: Globe,
    title: "Government Third-Party Approvals",
    description:
      "We have experience building software that integrates with and receives approval from government-mandated platforms. A key example is the Saudi Arabia NELC (National e-Learning Center) integration at integration.nelc.gov.sa — which requires strict xAPI (Tin Can) compliance, specific statement sequences, and passing an official validator. We handle the full certification process.",
    color: "text-amber-500",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
];

export default function MilestoneBlogPost() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden border-b border-border">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/8 rounded-full blur-[130px]" />
        </div>
        <div className="container mx-auto px-4 relative max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-8 group transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
              Process & Strategy
            </span>
            <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium border border-border">
              Compliance
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            How We Deliver: Our Milestone-Based Development Strategy
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            From HIPAA-compliant architecture and NDA-protected engagements to government-approved 
            third-party integrations like NELC — the exact framework we use to deliver complex 
            software projects on time, on budget, and to a standard that passes official scrutiny.
          </p>

          <div className="flex flex-wrap items-center gap-6 pb-8">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-bold overflow-hidden shadow-md">
                <Image src="/images/CEO.png" alt="Umair Akram" fill className="object-cover" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Umair Akram</div>
                <div className="text-xs text-muted-foreground">CEO & Founder, Devryxlab</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                May 10, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                8 min read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        
        {/* Intro */}
        <div className="prose-custom space-y-5 mb-16 text-muted-foreground leading-relaxed text-base">
          <p>
            Most software development engagements fail the same way: vague scope, invisible progress, 
            invoice surprises, and a delivery that looks nothing like the original brief. After years 
            of watching this happen — and building systems to prevent it — we codified our entire 
            delivery model into a framework we call <strong className="text-foreground">Milestone-Based Development</strong>.
          </p>
          <p>
            This isn&apos;t a sales pitch. It&apos;s the actual process we use on every project, 
            including the compliance requirements, legal protections, and third-party approval 
            steps that most agencies don&apos;t talk about.
          </p>
        </div>

        {/* Compliance Section */}
        <section className="mb-20">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Before We Write Code
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Compliance, Confidentiality & Approvals
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Before any project begins, we address the three pillars that most agencies skip entirely: 
            legal protection, regulatory architecture, and third-party certification.
          </p>

          <div className="space-y-6">
            {complianceItems.map((item) => (
              <div key={item.title} className={`p-7 rounded-2xl border ${item.bg}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center shrink-0 mt-0.5`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* NELC callout */}
          <div className="mt-8 p-6 rounded-xl bg-muted/30 border border-border">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
              <Globe className="w-4 h-4 text-primary" />
              Example: NELC Government Integration
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The Saudi National e-Learning Center (
              <a
                href="https://integration.nelc.gov.sa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                integration.nelc.gov.sa
              </a>
              ) requires learning management systems to pass a strict xAPI (Tin Can API) 
              compliance validator before integration approval. We have built and validated 
              systems against this standard — including the correct &quot;registered&quot;, &quot;earned&quot;, 
              and lifecycle statement sequences that the validator requires. We handle the full 
              submission and approval process on behalf of our clients.
            </p>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="mb-20">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            The Delivery Framework
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Milestone-Based Delivery
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Every project we take on — regardless of size or complexity — is broken into four 
            clearly defined milestones. Each milestone has specific deliverables, a review window, 
            and client sign-off before the next phase begins.
          </p>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            The project is developed from scratch, including all panels and required interfaces, 
            and includes <strong className="text-foreground">one month of free maintenance</strong> after 
            production delivery.
          </p>

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={m.number} className="relative">
                {i < milestones.length - 1 && (
                  <div className="absolute left-7 top-20 bottom-0 w-0.5 bg-border" />
                )}
                <div className="flex gap-5">
                  {/* Number */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-lg`}>
                    {m.number}
                  </div>
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      Milestone {m.number} — {m.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 italic">{m.outcome}</p>
                    <ul className="space-y-2">
                      {m.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Support Section */}
        <section className="mb-20">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              Post-Launch Support
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every project includes <strong className="text-foreground">one month of free maintenance</strong> after 
              the project goes live in production. This covers:
            </p>
            <ul className="space-y-2">
              {[
                "Bug fixes for any functionality we built that does not perform as accepted",
                "Performance monitoring and response time optimisation",
                "Minor content or configuration updates",
                "Third-party API changes that affect your system",
                "Priority response for critical production issues",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why It Works */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-6">Why This Model Works</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Visible Progress",
                body: "You never wonder what is happening. Every milestone ends with a real deliverable you can see, use, and evaluate.",
              },
              {
                title: "Controlled Risk",
                body: "Payment is tied to delivery. If we don't deliver a milestone to the agreed standard, the next payment doesn't happen.",
              },
              {
                title: "Scope Discipline",
                body: "Milestones force clarity on both sides. Scope creep is caught early, not after months of invisible drift.",
              },
              {
                title: "Compliance Baked In",
                body: "HIPAA, NELC, GDPR, and NDA requirements are addressed before development, not scrambled at deployment.",
              },
            ].map((card) => (
              <div key={card.title} className="p-6 rounded-xl border border-border bg-muted/20 hover:bg-muted/40 transition-colors">
                <h3 className="font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12 pt-8 border-t border-border">
          {["Development Process", "HIPAA Compliance", "NELC Integration", "NDA", "Milestones", "Software Delivery"].map((tag) => (
            <span key={tag} className="px-3 py-1.5 rounded-full bg-muted border border-border text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="p-10 rounded-3xl border border-border bg-muted/20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground text-sm mb-7 max-w-lg mx-auto">
            We&apos;ll start with an NDA, then a no-obligation discovery call to scope your project, 
            define your milestones, and give you a transparent timeline.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Start a Project
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:bg-muted/50 transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
