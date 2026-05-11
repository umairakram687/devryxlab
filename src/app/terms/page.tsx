import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service governing your engagement with Devryxlab for software development, web applications, mobile apps, and digital product design.",
};

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    body: `By engaging Devryxlab for any software development, web design, mobile application development, or related digital services — whether via a signed contract, statement of work (SOW), purchase order, or email confirmation — you agree to be bound by these Terms of Service.

If you are entering into this agreement on behalf of a company or organisation, you represent and warrant that you have the authority to bind that entity to these Terms.

If you do not agree to these Terms, do not engage our services.`,
  },
  {
    id: "services",
    title: "2. Services We Provide",
    body: `Devryxlab is a full-service software development studio that offers:

**Web Development**
Custom web applications, corporate websites, e-commerce platforms, SaaS products, and content management systems built on modern technology stacks (React, Next.js, Node.js, and others as agreed).

**Mobile Application Development**
Native and cross-platform mobile apps for iOS and Android, built with React Native, Flutter, or native Swift/Kotlin as appropriate for your project requirements.

**UI/UX Design**
User research, wireframing, prototyping, and high-fidelity interface design. We design for usability, accessibility, and conversion.

**Cloud Infrastructure & DevOps**
Deployment, CI/CD pipeline setup, server configuration, database management, monitoring, and ongoing infrastructure maintenance on AWS, Google Cloud, Vercel, and similar platforms.

**Technical Consulting**
Architecture reviews, technology audits, team augmentation, code reviews, and strategic advisory for startups and growing companies.

**Ongoing Maintenance & Support**
Post-launch support packages, bug fixing, performance optimisation, security updates, and feature additions under a retainer or hourly arrangement.

The specific scope, deliverables, timeline, and pricing for your project are defined in a separate Statement of Work (SOW) or project proposal, which forms part of your agreement with us.`,
  },
  {
    id: "project-process",
    title: "3. Project Process & Client Responsibilities",
    body: `**3.1 Discovery & Scoping**
Every engagement begins with a discovery phase to clearly define requirements, technical architecture, timelines, and acceptance criteria. Changes requested after the scope is finalised may result in additional charges and timeline adjustments.

**3.2 Client Responsibilities**
For us to deliver on time and to the highest standard, you agree to:

• Provide timely access to all necessary materials, credentials, and stakeholders.
• Designate a primary point of contact with authority to approve deliverables.
• Review and provide feedback on deliverables within the agreed review windows (typically 5 business days). Delays in feedback may result in timeline extensions.
• Provide accurate and complete project requirements. Significant changes to requirements mid-project will be treated as change requests.
• Ensure you hold all necessary licences for third-party content, fonts, images, and software you ask us to integrate.

**3.3 Change Requests**
Requests that fall outside the agreed scope will be documented in a Change Request Order. We will provide an estimate of additional cost and time. Work on change requests begins only after written approval.

**3.4 Revisions**
Each project deliverable includes a defined number of revision rounds as specified in your SOW. Additional revision rounds beyond the agreed allowance are billed at our standard hourly rate.`,
  },
  {
    id: "payment",
    title: "4. Payment Terms",
    body: `**4.1 Project Fees**
Fees are as stated in your proposal or SOW. Unless otherwise agreed:

• **Fixed-price projects:** 50% deposit required before work begins; 50% due upon completion or as milestones are reached.
• **Retainer / hourly projects:** Invoiced monthly in arrears, due within 14 days of invoice date.
• **Rush projects** (turnaround under 5 business days): A 25% rush surcharge applies.

**4.2 Late Payment**
Invoices unpaid after the due date accrue interest at 1.5% per month (18% per annum). We reserve the right to pause active work until overdue balances are settled.

**4.3 Expenses**
Third-party costs incurred for your project (domain names, hosting, stock imagery, licensed fonts, third-party APIs) are billed at cost plus a 10% administration fee, unless otherwise agreed.

**4.4 Taxes**
All fees are exclusive of applicable taxes (VAT, GST, sales tax). You are responsible for any taxes applicable in your jurisdiction.

**4.5 Currency**
All invoices are issued in USD unless an alternative currency is agreed in writing.`,
  },
  {
    id: "intellectual-property",
    title: "5. Intellectual Property",
    body: `**5.1 Client-Owned Deliverables (Upon Full Payment)**
Upon receipt of all fees owed, Devryxlab assigns to you full ownership of the custom code, design files, and other deliverables created exclusively for your project. This includes:
• Custom source code, components, and modules developed for your project.
• UI/UX designs, wireframes, and design system assets created specifically for you.
• Database schemas, API integrations, and technical architecture designed for your project.

**5.2 Devryxlab Retained Rights**
We retain ownership of:
• Our pre-existing tools, frameworks, libraries, and development methodologies ("Background IP").
• Generic, reusable code components, UI patterns, and utility functions that are not specific to your project. We grant you a perpetual, royalty-free licence to use these within your deliverables.
• Rights to display the completed project in our portfolio (see Section 5.4).

**5.3 Open Source Components**
Many modern projects incorporate open-source libraries and frameworks. These remain subject to their respective open-source licences. We will document all open-source dependencies used in your project.

**5.4 Portfolio Rights**
Unless you request otherwise in writing before project commencement, we reserve the right to display screenshots, descriptions, and case study information about your project in our portfolio, marketing materials, and social media. We will not disclose confidential business information without your approval.

**5.5 IP Indemnification**
You warrant that all materials you supply to us (content, images, trademarks, third-party software) do not infringe on any third-party intellectual property rights. You indemnify Devryxlab against any claims arising from your supplied materials.`,
  },
  {
    id: "confidentiality",
    title: "6. Confidentiality",
    body: `Both parties agree to keep confidential any non-public information disclosed during the engagement that is designated as confidential or that a reasonable person would understand to be confidential ("Confidential Information").

This obligation does not apply to information that:
• Is or becomes publicly available through no breach of this agreement.
• Was already known to the receiving party before disclosure.
• Is independently developed by the receiving party without reference to the Confidential Information.
• Is required to be disclosed by law or court order.

Devryxlab will:
• Use your Confidential Information only to deliver the contracted services.
• Limit access to team members with a need to know.
• Require those team members to maintain equivalent confidentiality obligations.

These confidentiality obligations survive termination of the engagement for a period of 3 years.

If your project requires a separate Non-Disclosure Agreement (NDA), we are happy to execute one before the discovery phase.`,
  },
  {
    id: "warranties",
    title: "7. Warranties & Guarantees",
    body: `**7.1 What We Warrant**
Devryxlab warrants that:
• Services will be performed professionally and in accordance with the agreed scope and acceptance criteria.
• Code delivered will be our original work or properly licensed third-party components.
• We have the right to enter into this agreement and provide the services.

**7.2 Bug Fix Warranty**
We provide a 30-day post-launch bug fix period for all project engagements, covering bugs in functionality we built that were not present at acceptance testing. This does not cover bugs introduced by client-side changes, third-party updates, or hosting environment changes.

**7.3 No Guarantee of Business Outcomes**
We do not warrant specific business outcomes such as revenue increases, user growth, search engine rankings, or conversion rates. These depend on many factors outside our control.

**7.4 Third-Party Services**
We are not responsible for the performance, availability, or pricing changes of third-party services, APIs, or platforms that your project depends on.`,
  },
  {
    id: "limitation",
    title: "8. Limitation of Liability",
    body: `To the maximum extent permitted by applicable law:

• **Cap on liability:** Devryxlab's total liability to you for any claim arising from this agreement is limited to the total fees paid by you to Devryxlab in the 12 months preceding the claim.

• **No consequential damages:** Neither party shall be liable for indirect, incidental, special, exemplary, or consequential damages, including loss of revenue, loss of profit, loss of data, or business interruption, even if advised of the possibility of such damages.

• **Force majeure:** Neither party is liable for delays or failures caused by circumstances beyond their reasonable control (natural disasters, government actions, internet outages, pandemics).

These limitations reflect a fair allocation of risk between commercial parties.`,
  },
  {
    id: "termination",
    title: "9. Termination",
    body: `**9.1 Termination by Client**
You may terminate a project engagement at any time with 14 days' written notice. You will owe:
• All fees for work completed to the termination date.
• Costs already incurred for third-party services, tools, or licences procured for your project.
• The non-refundable portion of any deposit, as specified in your SOW.

**9.2 Termination by Devryxlab**
We may terminate the engagement immediately if:
• You materially breach these Terms and fail to cure the breach within 10 days of written notice.
• Any invoice remains unpaid for more than 30 days.
• You engage in conduct that is illegal, harmful, or creates an abusive working environment for our team.

**9.3 Effect of Termination**
Upon termination, we will deliver all completed work to you after receipt of all outstanding fees. Intellectual property transfer (Section 5.1) applies only to fully paid work.`,
  },
  {
    id: "acceptable-use",
    title: "10. Acceptable Use",
    body: `You agree not to use our services to build, launch, or maintain any product or service that:

• Violates any applicable law or regulation.
• Promotes illegal activities, violence, or discrimination based on race, gender, religion, nationality, sexual orientation, disability, or other protected characteristics.
• Engages in phishing, spam, malware distribution, or other cybercrime.
• Infringes on the intellectual property rights of third parties.
• Collects personal data without proper consent or in violation of GDPR, CCPA, or equivalent regulations.
• Is designed to deceive users in a materially harmful way.

We reserve the right to refuse service or terminate engagements for projects that violate these acceptable use standards.`,
  },
  {
    id: "governing-law",
    title: "11. Governing Law & Disputes",
    body: `**11.1 Governing Law**
These Terms are governed by and construed in accordance with applicable commercial law. The specific governing jurisdiction is stated in your project contract or SOW.

**11.2 Dispute Resolution**
In the event of any dispute arising from these Terms or your engagement with Devryxlab, both parties agree to first attempt to resolve the dispute through good-faith negotiation within 30 days of written notice of the dispute.

If negotiation fails, disputes shall be submitted to binding arbitration before a mutually agreed arbitrator, or if no arbitrator is agreed upon within 15 days, through a recognised arbitration service.

**11.3 Exceptions**
Either party may seek emergency injunctive relief in a court of competent jurisdiction to prevent irreparable harm without first engaging the dispute resolution process above.`,
  },
  {
    id: "general",
    title: "12. General Provisions",
    body: `**Entire Agreement:** These Terms, together with your SOW or project proposal, constitute the entire agreement between the parties and supersede all prior discussions, representations, and agreements.

**Amendments:** We may update these Terms periodically. Material changes will be communicated via email with 14 days' notice. Continued engagement after changes take effect constitutes acceptance.

**Severability:** If any provision of these Terms is found to be unenforceable, the remaining provisions remain in full force and effect.

**Waiver:** Failure to enforce any provision of these Terms shall not constitute a waiver of that provision.

**Independent Contractors:** Devryxlab and its team members are independent contractors. Nothing in these Terms creates an employment, partnership, or joint venture relationship.

**Assignment:** You may not assign your rights or obligations under these Terms without our written consent. We may assign our rights to a successor entity in a merger or acquisition.

**Notices:** Legal notices must be sent in writing to the email addresses specified in your project contract.`,
  },
  {
    id: "contact",
    title: "13. Contact",
    body: `For questions about these Terms, or to discuss a specific project engagement:

**Devryxlab**
📧 legal@devryxlab.com
🌐 https://devryxlab.com
📍 Available globally — remote-first studio

We typically respond within 1 business day.`,
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      {/* Hero Header */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/10 pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-xs font-medium mb-6">
              Legal Document
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Terms of Service
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              These Terms govern your engagement with Devryxlab for software
              development and digital product services. Please read them
              carefully — they are written in plain language, not legalese.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span>
                <strong className="text-foreground">Last Updated:</strong> May
                10, 2026
              </span>
              <span>
                <strong className="text-foreground">Effective:</strong> May 10,
                2026
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar TOC */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-28 space-y-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Contents
              </p>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <article className="flex-1 max-w-3xl">
            {/* Quick Summary */}
            <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-5 mb-10 text-sm text-foreground leading-relaxed">
              <strong>Plain English Summary:</strong> You commission work, we
              deliver it professionally. You own what we build for you (after
              payment). We keep your information confidential. We fix bugs for
              30 days post-launch. Disputes get resolved through negotiation
              first.
            </div>

            <div className="space-y-14">
              {sections.map((section) => (
                <section key={section.id} id={section.id}>
                  <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                    {section.title}
                  </h2>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {section.body.split("\n").map((line, j) => {
                      if (line.startsWith("•")) {
                        return (
                          <div key={j} className="flex gap-2 mb-1.5">
                            <span className="text-primary mt-1 shrink-0">•</span>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: line
                                  .slice(1)
                                  .trim()
                                  .replace(
                                    /\*\*(.*?)\*\*/g,
                                    "<strong class='text-foreground'>$1</strong>"
                                  ),
                              }}
                            />
                          </div>
                        );
                      }
                      if (line.startsWith("**") && line.endsWith("**")) {
                        return (
                          <h3
                            key={j}
                            className="text-base font-semibold text-foreground mt-5 mb-2 first:mt-0"
                          >
                            {line.replace(/\*\*/g, "")}
                          </h3>
                        );
                      }
                      return (
                        <p
                          key={j}
                          className={line.trim() === "" ? "h-2" : "mb-2"}
                          dangerouslySetInnerHTML={{
                            __html: line.replace(
                              /\*\*(.*?)\*\*/g,
                              "<strong class='text-foreground'>$1</strong>"
                            ),
                          }}
                        />
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="mt-16 p-8 rounded-2xl border border-border bg-muted/30 text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Ready to start your project?
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Questions about these Terms before you commit? We are happy to
                walk you through anything.
              </p>
              <a
                href="mailto:legal@devryxlab.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Talk to Us
              </a>
              <div className="mt-6 pt-6 border-t border-border flex justify-center gap-6 text-sm text-muted-foreground">
                <Link
                  href="/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link href="/" className="hover:text-primary transition-colors">
                  Back to Home
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
