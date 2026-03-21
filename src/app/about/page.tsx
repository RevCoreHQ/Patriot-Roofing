import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { CTASection } from '@/components/sections/CTASection';
import { siteConfig } from '@/data/site-config';
import { Shield, Users, Eye, Award } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'About Patriot Roofing & Home Repair — Lexington, NC Roofing Contractor',
  description: 'Locally owned roofing and home repair contractor with 15+ years experience. Roofing installation, replacement, repair, and home renovations in Lexington, NC.',
  path: '/about',
});

const values = [
  { icon: Shield, title: 'Quality Workmanship', description: 'We never cut corners. Every project is completed with the materials, techniques, and attention to detail that ensure long-lasting results.' },
  { icon: Users, title: 'Customer-Focused Service', description: 'Your satisfaction is our top priority. We treat every home like our own and every customer like family.' },
  { icon: Eye, title: 'Transparent Pricing', description: 'No hidden fees, no surprises. You receive a clear, detailed estimate before any work begins so you know exactly what to expect.' },
  { icon: Award, title: 'Licensed & Insured', description: 'Full licensing and comprehensive insurance coverage, protecting you and your property at every stage of your project.' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: siteConfig.url },
        { name: 'About', url: `${siteConfig.url}/about` },
      ])} />

      <div className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />

          <div className="max-w-3xl">
            <p className="text-brand-600 font-medium text-sm tracking-wide uppercase mb-3">About Us</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-6">
              15+ Years of Protecting Homes in North Carolina
            </h1>
            <div className="prose prose-lg text-slate-600 space-y-4">
              <p>
                Patriot Roofing & Home Repair was founded on a simple principle: every homeowner deserves dependable roofing and home improvement services delivered with honesty and pride. For over 15 years, we have been serving homeowners in Lexington, NC and surrounding communities with quality workmanship, reliable service, and long-lasting results that protect and enhance their homes.
              </p>
              <p>
                As a locally owned and operated business, we are deeply invested in the communities we serve. Our team lives here, works here, and stands behind every project we deliver. We understand North Carolina&apos;s unique climate challenges, from hot, humid summers to severe storms and winter weather, and we build every roof and complete every repair with those conditions in mind.
              </p>
              <p>
                What sets us apart is our commitment to doing things right the first time. Every project begins with a thorough inspection and a transparent, detailed estimate. We communicate clearly at every stage, use quality materials, and ensure the finished product meets our high standards and your expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-narrow">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Our Story
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                Patriot Roofing & Home Repair started with a commitment to honest work and a belief that homeowners in the Piedmont Triad region deserved better from their contractors. Over 15 years later, that belief has grown into a full-service roofing and home improvement company that has completed over a thousand projects across Lexington, Greensboro, Winston-Salem, High Point, and beyond. We have earned the trust of homeowners one project at a time. Our growth has been entirely organic, driven by referrals from satisfied clients who recommend us to their neighbors, friends, and family members. That word-of-mouth reputation is something we protect by never compromising on quality, communication, or follow-through.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Experience You Can Count On
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                Fifteen years of roofing and home repair in North Carolina teaches lessons that no textbook can. We know which roofing materials perform best in our hot, humid summers and which ones hold up under severe storm conditions. We understand the building codes and permit requirements across the cities and counties we serve. We have worked through every type of weather event that North Carolina can throw at a roof, from heavy thunderstorms and hail to hurricane remnants and winter ice. This accumulated experience translates directly into better recommendations, smoother projects, and more durable results for our clients.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Complete Roofing & Home Services
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                While roofing is our specialty, Patriot Roofing & Home Repair offers a full range of home improvement services including kitchen renovations, bathroom remodeling, and general home repair. This means you can rely on one trusted contractor for multiple projects, whether you need a new roof, a kitchen upgrade, or maintenance repairs throughout your home. Having a single team that understands your property and your standards makes the entire process simpler and more efficient.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Our Commitment to You
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                Our relationship with clients does not end when the last nail is driven. Patriot Roofing & Home Repair stands behind our work and is always available if you have questions or need follow-up service. We believe that the true measure of a contractor is not just the quality of the work, but how they treat you after the project is done. Many of our earliest clients still call us when they need help, and we consider that long-term loyalty the highest compliment we can receive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-brand-600" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection headline="Ready to Get Started?" />
    </>
  );
}
