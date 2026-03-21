import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy | Patriot Roofing & Home Repair',
  description: 'Privacy policy for Patriot Roofing & Home Repair. Learn how we collect, use, and protect your personal information.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="section-padding">
      <div className="container-narrow">
        <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy' }]} />
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:text-slate-900">
          <p className="lead text-slate-500">Last updated: March 2026</p>

          <h2>Information We Collect</h2>
          <p>
            When you use our website or contact us through our form, we may collect personal information including
            your name, email address, phone number, and details about your roofing or home repair project. We
            collect this information solely to respond to your inquiries and provide estimates for our services.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information you provide to:</p>
          <ul>
            <li>Respond to your inquiries and provide estimates</li>
            <li>Schedule inspections and service appointments</li>
            <li>Communicate about your project</li>
            <li>Improve our website and services</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your information
            with trusted service providers who assist us in operating our website and conducting our business,
            provided they agree to keep this information confidential.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized
            access, alteration, disclosure, or destruction.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us at{' '}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or call{' '}
            <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phone}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
