import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Devryxlab collects, uses, and protects your personal information when you use our software development services.",
};

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: [
      {
        subtitle: "1.1 Information You Provide Directly",
        body: `When you contact us, request a quote, or engage our services, we collect:
        
• **Full name and email address** — provided through our contact forms or project intake forms.
• **Phone number** — optionally provided for project communication.
• **Company name and role** — to understand your business context and tailor our solutions.
• **Project details and requirements** — including technical specifications, design preferences, budget ranges, and timelines shared during discovery calls or written briefs.
• **Payment information** — billing address and invoice details. We do not store credit card data; payments are processed by trusted third-party providers (Stripe or bank transfer).`,
      },
      {
        subtitle: "1.2 Information Collected Automatically",
        body: `When you visit our website, we automatically collect:
        
• **IP address and approximate geolocation** — used for analytics and security.
• **Browser type, device type, and operating system** — for optimising site performance.
• **Pages visited, time on page, and referral source** — through privacy-respecting analytics (we use Vercel Analytics or Plausible, which do not use third-party cookies).
• **Cookies and local storage** — only essential cookies are used by default. You can manage preferences via our cookie notice.`,
      },
      {
        subtitle: "1.3 Information from Third Parties",
        body: `If you connect with us via LinkedIn, Upwork, or Fiverr, we may receive your name, profile information, and contact details as provided by those platforms and subject to their privacy policies.`,
      },
    ],
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: [
      {
        subtitle: "",
        body: `We process your personal data only for legitimate, specific purposes:

• **Service delivery** — to scope, plan, develop, test, and deploy software projects you commission.
• **Project communication** — to send progress updates, request feedback, share deliverables, and coordinate timelines via email, Slack, or other agreed channels.
• **Invoicing and accounting** — to issue invoices, process payments, and maintain financial records as required by law.
• **Legal compliance** — to comply with applicable laws, regulations, and professional standards in the jurisdictions we operate.
• **Service improvement** — to analyse anonymised usage data to improve our website and the services we offer.
• **Marketing** (only with consent) — to send newsletters, case studies, or service announcements. You can unsubscribe at any time.
• **Security** — to detect, prevent, and respond to fraud, abuse, or security threats.

We never sell your personal data to third parties. We do not use your project data to train AI models without your explicit written consent.`,
      },
    ],
  },
  {
    id: "data-sharing",
    title: "3. Data Sharing and Third-Party Services",
    content: [
      {
        subtitle: "",
        body: `We share your data only where necessary to deliver our services or comply with legal obligations:

| Recipient | Purpose | Data Shared |
|---|---|---|
| **Vercel / AWS / Cloud Hosts** | Hosting project infrastructure | Project files, env configs |
| **GitHub / GitLab** | Version control and code collaboration | Source code, project repos |
| **Stripe / Bank** | Payment processing | Invoice data, billing address |
| **Slack / Notion / Linear** | Project management and communication | Project specs, messages |
| **Google Workspace** | Email communication | Email content |
| **Plausible / Vercel Analytics** | Website analytics (cookieless) | Anonymised visit data |

All third-party processors are contractually bound to protect your data and may not use it for their own purposes. We do not transfer your data outside of GDPR-compliant jurisdictions without appropriate safeguards in place.`,
      },
    ],
  },
  {
    id: "data-retention",
    title: "4. Data Retention",
    content: [
      {
        subtitle: "",
        body: `We retain your data for as long as necessary to fulfil the purposes for which it was collected:

• **Active project data** — retained throughout the project engagement and for 2 years afterwards for support and warranty purposes.
• **Financial records** — retained for 7 years as required by accounting regulations.
• **Marketing communications** — retained until you unsubscribe or request deletion.
• **Website analytics** — retained for 13 months in anonymised, aggregated form.
• **General enquiries** — retained for 12 months if no project engagement follows.

When data is no longer required, it is securely deleted or anonymised.`,
      },
    ],
  },
  {
    id: "your-rights",
    title: "5. Your Rights",
    content: [
      {
        subtitle: "",
        body: `Depending on your location, you have the following rights regarding your personal data:

• **Right of access** — request a copy of the personal data we hold about you.
• **Right to rectification** — request correction of inaccurate or incomplete data.
• **Right to erasure** — request deletion of your data, subject to legal retention requirements.
• **Right to restriction** — request that we limit processing of your data.
• **Right to data portability** — receive your data in a structured, machine-readable format.
• **Right to object** — object to processing based on legitimate interests or for direct marketing.
• **Right to withdraw consent** — where processing is based on consent, withdraw it at any time.

To exercise any of these rights, contact us at **privacy@devryxlab.com**. We will respond within 30 days. You also have the right to lodge a complaint with your local data protection authority.`,
      },
    ],
  },
  {
    id: "security",
    title: "6. Security Measures",
    content: [
      {
        subtitle: "",
        body: `We take data security seriously and implement industry-standard measures:

• All data in transit is encrypted using TLS 1.2 or higher.
• Project repositories use private access controls with multi-factor authentication required for all team members.
• Sensitive credentials and environment variables are stored in encrypted secret managers (e.g., Vercel Environment Variables, AWS Secrets Manager).
• We conduct regular security reviews and dependency audits on codebases we maintain.
• Access to client project data is restricted to team members actively working on that project (principle of least privilege).
• In the event of a data breach that affects your personal data, we will notify you within 72 hours as required by applicable law.`,
      },
    ],
  },
  {
    id: "cookies",
    title: "7. Cookies",
    content: [
      {
        subtitle: "",
        body: `Our website uses a minimal cookie footprint:

• **Essential cookies** — necessary for the website to function (e.g., form security tokens). Cannot be disabled.
• **Analytics cookies** — we use privacy-first, cookieless analytics that do not track individuals across sites and do not require consent banners under most jurisdictions.
• **Preference cookies** — store your theme preference (light/dark mode). Session-scoped.

We do not use advertising cookies, retargeting pixels, or social media tracking scripts on our site.`,
      },
    ],
  },
  {
    id: "children",
    title: "8. Children's Privacy",
    content: [
      {
        subtitle: "",
        body: `Our services are intended for businesses and professionals aged 18 and over. We do not knowingly collect personal data from individuals under the age of 16. If you believe we have inadvertently collected data from a minor, please contact us immediately and we will delete it promptly.`,
      },
    ],
  },
  {
    id: "changes",
    title: "9. Changes to This Policy",
    content: [
      {
        subtitle: "",
        body: `We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. We will notify you of material changes by posting the updated policy on this page with a revised "Last Updated" date. For significant changes, we may also notify you by email. Continued use of our services after changes take effect constitutes acceptance of the updated policy.`,
      },
    ],
  },
  {
    id: "contact",
    title: "10. Contact Us",
    content: [
      {
        subtitle: "",
        body: `For any privacy-related questions, requests, or concerns, please contact:

**Devryxlab**
Privacy & Data Protection
📧 privacy@devryxlab.com
🌐 https://devryxlab.com

We are committed to resolving your concerns promptly and transparently.`,
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      {/* Hero Header */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-6">
              Legal Document
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Devryxlab, we are committed to protecting your privacy and
              handling your personal data responsibly. This policy explains
              exactly what we collect, why, and how.
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
          {/* Sidebar Table of Contents */}
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
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-10 text-sm text-foreground leading-relaxed">
              <strong>Summary:</strong> We collect only the data necessary to
              deliver your project and run our business. We never sell your
              data. We use secure, privacy-respecting tools. You have full
              rights over your data. Read on for full details.
            </div>

            <div className="space-y-14">
              {sections.map((section) => (
                <section key={section.id} id={section.id}>
                  <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                    {section.title}
                  </h2>
                  <div className="space-y-6">
                    {section.content.map((block, i) => (
                      <div key={i}>
                        {block.subtitle && (
                          <h3 className="text-base font-semibold text-foreground mb-3">
                            {block.subtitle}
                          </h3>
                        )}
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">
                          {block.body.split("\n").map((line, j) => {
                            if (line.startsWith("•")) {
                              return (
                                <div key={j} className="flex gap-2 mb-1.5">
                                  <span className="text-primary mt-1 shrink-0">
                                    •
                                  </span>
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
                            if (line.startsWith("|")) {
                              return null; // handled separately below
                            }
                            return (
                              <p
                                key={j}
                                className="mb-2"
                                dangerouslySetInnerHTML={{
                                  __html: line.replace(
                                    /\*\*(.*?)\*\*/g,
                                    "<strong class='text-foreground'>$1</strong>"
                                  ),
                                }}
                              />
                            );
                          })}
                          {/* Render table if body contains markdown table */}
                          {block.body.includes("|---|") && (
                            <div className="overflow-x-auto mt-4">
                              <table className="w-full text-sm border-collapse">
                                <thead>
                                  <tr className="bg-muted/50">
                                    {block.body
                                      .split("\n")
                                      .find((l) => l.startsWith("|") && !l.includes("---"))
                                      ?.split("|")
                                      .filter(Boolean)
                                      .map((h, hi) => (
                                        <th
                                          key={hi}
                                          className="text-left px-4 py-2 font-semibold text-foreground border border-border"
                                          dangerouslySetInnerHTML={{
                                            __html: h
                                              .trim()
                                              .replace(
                                                /\*\*(.*?)\*\*/g,
                                                "$1"
                                              ),
                                          }}
                                        />
                                      ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {block.body
                                    .split("\n")
                                    .filter(
                                      (l) =>
                                        l.startsWith("|") &&
                                        !l.includes("---") &&
                                        l !==
                                          block.body
                                            .split("\n")
                                            .find(
                                              (x) =>
                                                x.startsWith("|") &&
                                                !x.includes("---")
                                            )
                                    )
                                    .map((row, ri) => (
                                      <tr
                                        key={ri}
                                        className="border-b border-border hover:bg-muted/20 transition-colors"
                                      >
                                        {row
                                          .split("|")
                                          .filter(Boolean)
                                          .map((cell, ci) => (
                                            <td
                                              key={ci}
                                              className="px-4 py-2 border border-border text-muted-foreground"
                                              dangerouslySetInnerHTML={{
                                                __html: cell
                                                  .trim()
                                                  .replace(
                                                    /\*\*(.*?)\*\*/g,
                                                    "<strong class='text-foreground'>$1</strong>"
                                                  ),
                                              }}
                                            />
                                          ))}
                                      </tr>
                                    ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="mt-16 p-8 rounded-2xl border border-border bg-muted/30 text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Questions about your privacy?
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                We are happy to explain anything. Reach out and we will respond
                within 24 hours.
              </p>
              <a
                href="mailto:privacy@devryxlab.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Contact Privacy Team
              </a>
              <div className="mt-6 pt-6 border-t border-border flex justify-center gap-6 text-sm text-muted-foreground">
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
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
