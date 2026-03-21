import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { CTASection } from '@/components/sections/CTASection';
import { JsonLd } from '@/components/seo/JsonLd';
import { howToSchema, breadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Process — Inspection to Completion | Patriot Roofing NC',
  description: 'From free roof inspection to detailed estimate to expert installation. Learn how Patriot Roofing & Home Repair handles your roofing and home improvement project in Lexington, NC.',
  path: '/process',
});

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Our Process', url: `${siteConfig.url}/process` },
          ]),
          howToSchema(
            [
              { name: 'Free Inspection', text: 'We inspect your roof, identify any issues, and discuss your options with honest, straightforward recommendations.' },
              { name: 'Detailed Estimate', text: 'You receive a transparent, written estimate with a clear scope of work. No hidden fees, no surprises.' },
              { name: 'Professional Installation', text: 'Our experienced crew handles every detail of your project with quality materials and expert craftsmanship.' },
              { name: 'Final Walkthrough', text: 'We walk the completed project with you, ensure everything meets your expectations, and leave your property clean.' },
            ],
            'How Patriot Roofing Handles Your Roofing Project',
            'A clear 4-step process from free inspection to final walkthrough for roofing and home repair projects in Lexington, NC.'
          ),
        ]}
      />

      <div className="section-padding pb-0">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Our Process', href: '/process' }]} />
          <div className="max-w-3xl mb-4">
            <p className="text-brand-600 font-medium text-sm tracking-wide uppercase mb-3">How We Work</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-4">
              A Clear, Proven Process From Inspection to Completion
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              A roofing project or home renovation is a significant investment. Our structured process ensures you know exactly what to expect at every stage and that you are completely satisfied with the result.
            </p>
          </div>
        </div>
      </div>
      <ProcessSteps />

      <section className="section-padding bg-slate-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">The Patriot Difference</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            Before any work begins, we conduct a thorough inspection of your roof and provide a detailed, written estimate that covers every aspect of the job. You will know exactly what materials we are using, what the scope of work includes, and what the total cost will be. There are no hidden fees, no vague line items, and no surprises.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            We believe in transparent communication from start to finish. Our team keeps you informed at every stage of the project, from the day we begin to the final walkthrough. If anything changes or needs your attention, you will hear from us right away.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white to-slate-50">
        <div className="container-narrow">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Step 1: Free Roof Inspection
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                Every project starts with a comprehensive inspection of your roof. One of our experienced team members will examine your roofing system from top to bottom, checking for missing or damaged shingles, flashing issues, ventilation problems, gutter condition, and signs of water damage. We also inspect the attic and interior for any evidence of leaks or moisture. This inspection is completely free with no obligation. By the end, we will have a clear picture of your roof&apos;s condition and can discuss your options honestly, whether that means a simple repair, a partial fix, or a full replacement.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Step 2: Detailed Estimate
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                After the inspection, we prepare a detailed, written estimate that clearly outlines the scope of work, materials to be used, and total project cost. For roofing projects, this includes tear-off, deck inspection and repair, underlayment, shingle installation, flashing, ventilation, and cleanup. For renovation and repair projects, we itemize every component so you understand exactly what you are getting. We present this estimate in person and answer any questions you may have. There are no high-pressure tactics, just honest information to help you make the best decision for your home.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Step 3: Professional Installation
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                Once you approve the estimate, we schedule your project and get to work. Our experienced crew handles every aspect of the installation with attention to detail and respect for your property. We use quality materials from trusted manufacturers, follow all building codes and best practices, and maintain a clean jobsite throughout the project. For roofing work, we complete most residential projects in 1 to 3 days. For renovation and repair projects, we provide a clear timeline during the estimate phase. We communicate with you throughout the process and address any questions or concerns promptly.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Step 4: Final Walkthrough
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                When the work is complete, we conduct a thorough final walkthrough with you to review every detail of the finished project. We want you to see the quality of our work up close and confirm that everything meets your expectations. We also clean up the jobsite completely, including a magnet sweep of your yard and driveway to pick up any stray nails. Before we leave, we provide you with all warranty information and our direct contact information for any future questions or needs. Our goal is for you to feel completely confident in the work we have done and to know that we are always here if you need us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection headline="Ready to Start Your Project?" />
    </>
  );
}
