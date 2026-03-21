import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = generatePageMetadata({
  title: 'Financing & Insurance — Roof Replacement Options | Patriot Roofing NC',
  description: 'Ask about financing options for your roofing or home renovation project. We also help with insurance claims for storm damage. Contact Patriot Roofing for details.',
  path: '/financing',
});

export default function FinancingPage() {
  return (
    <>
      <div className="section-padding">
        <div className="container-narrow">
          <Breadcrumbs items={[{ label: 'Financing', href: '/financing' }]} />
          <p className="text-brand-600 font-medium text-sm tracking-wide uppercase mb-3">Financing & Insurance</p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-6">
            Flexible Options for Your Project
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            A new roof or home renovation is a significant investment in your property. We understand that budgeting for a large project requires planning, and we want to make the process as accessible as possible.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            During your free consultation, ask about available financing arrangements. We can discuss payment structures and options that work for your budget and project scope. Every situation is unique, and we are happy to work with you to find the right fit.
          </p>
          <h2 className="text-2xl font-display font-bold text-slate-900 mt-10 mb-4">Insurance Claims Assistance</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            If your roof has been damaged by a storm, hail, or wind, your homeowner&apos;s insurance may cover part or all of the repair or replacement cost. Patriot Roofing & Home Repair works directly with your insurance company throughout the claims process. We document all damage, provide detailed estimates, and communicate with your adjuster to help ensure you receive fair coverage for the work your home needs.
          </p>
          <Button href="/contact" size="lg">Ask About Financing Options</Button>
        </div>
      </div>
      <CTASection variant="light" headline="Ready to Get Started?" description="Contact us for a free inspection and ask about financing or insurance claims during your consultation." />
    </>
  );
}
