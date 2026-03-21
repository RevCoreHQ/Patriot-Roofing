import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { CTASection } from '@/components/sections/CTASection';

const allFaqs = [
  { question: 'How much does a roof replacement cost in North Carolina?', answer: 'Roof replacement costs typically range from $8,000 to $25,000 depending on the size of your roof, materials chosen, and complexity of the project. We provide free estimates for accurate pricing on your specific home.' },
  { question: 'How long does a roof replacement take?', answer: 'Most residential roof replacements take 1 to 3 days depending on the size of the roof, weather conditions, and any repairs needed to the decking beneath.' },
  { question: 'How do I know if I need a new roof?', answer: 'Common signs include missing or curling shingles, leaks or water stains in your attic, granules in your gutters, a sagging roofline, and a roof that is over 20 years old. We offer free inspections to assess your roof condition.' },
  { question: 'Do you help with insurance claims?', answer: 'Yes. We work with your insurance company throughout the claims process, from the initial damage inspection to the final repair. We document all damage and communicate directly with your adjuster.' },
  { question: 'What roofing materials do you use?', answer: 'We work with all major roofing materials including architectural shingles, three-tab shingles, and metal roofing. We use trusted brands and can help you choose the best option for your home and budget.' },
  { question: 'Are you licensed and insured?', answer: 'Yes. Patriot Roofing & Home Repair is fully licensed and insured with comprehensive liability coverage for your protection.' },
  { question: 'What areas do you serve?', answer: 'We serve Lexington, Greensboro, Winston-Salem, High Point, Thomasville, Kernersville, Clemmons, and surrounding North Carolina communities. Call to confirm availability for your location.' },
  { question: 'Do you offer free estimates?', answer: 'Yes. Every project begins with a free inspection where we assess the condition of your roof, identify any issues, and provide a detailed written estimate with no obligation.' },
  { question: 'Do you offer kitchen and bathroom renovations?', answer: 'Yes. In addition to roofing services, we offer full kitchen and bathroom renovation services including cabinets, countertops, tile work, plumbing updates, and more.' },
  { question: 'What should I do if my roof is leaking?', answer: 'Call us immediately at (336) 479-6059. We offer prompt repair services to address leaks and prevent further damage to your home. If safe, you can place a bucket under the leak and move valuables away from the affected area.' },
  { question: 'How long do roofing materials last?', answer: 'Three-tab shingles typically last 15 to 20 years, architectural shingles last 25 to 30 years, and metal roofing can last 40 to 70 years. Actual lifespan depends on installation quality, ventilation, and weather exposure.' },
  { question: 'Do you offer warranties on your work?', answer: 'Yes. We stand behind our workmanship and offer warranties on all roofing installations and replacements. We also help you register manufacturer warranties for the materials used on your project.' },
];

export const metadata: Metadata = generatePageMetadata({
  title: 'FAQ — Roofing & Home Repair Questions | Patriot Roofing NC',
  description: 'Answers to common questions about roof replacement costs, timelines, insurance claims, materials, and more. Patriot Roofing & Home Repair — Lexington, NC.',
  path: '/faq',
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema(allFaqs)} />
      <div className="section-padding pb-0">
        <div className="container-narrow">
          <Breadcrumbs items={[{ label: 'FAQ', href: '/faq' }]} />
          <div className="text-center mb-4">
            <p className="text-brand-600 font-medium text-sm tracking-wide uppercase mb-3">Questions & Answers</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-slate-600">
              Find answers to the most common questions about our roofing and home repair services.
            </p>
          </div>
        </div>
      </div>
      <FAQAccordion faqs={allFaqs} />
      <CTASection headline="Still Have Questions?" description="Call us at (336) 479-6059 or request a free inspection. We are happy to answer anything." />
    </>
  );
}
