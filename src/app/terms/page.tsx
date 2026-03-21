import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = generatePageMetadata({
  title: 'Terms of Service | Patriot Roofing & Home Repair',
  description: 'Terms of service for Patriot Roofing & Home Repair website. Read our terms and conditions.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <div className="section-padding">
      <div className="container-narrow">
        <Breadcrumbs items={[{ label: 'Terms of Service', href: '/terms' }]} />
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-8">Terms of Service</h1>

        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:text-slate-900">
          <p className="lead text-slate-500">Last updated: March 2026</p>

          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provisions of
            this agreement. If you do not agree to these terms, please do not use this site.
          </p>

          <h2>Services</h2>
          <p>
            {siteConfig.name} provides roofing installation, replacement, repair, home renovation, and home repair
            services in the Lexington, NC area and surrounding communities. All services are subject to a written
            estimate and agreement between {siteConfig.name} and the customer.
          </p>

          <h2>Estimates and Pricing</h2>
          <p>
            All estimates provided are valid for 30 days from the date of issue unless otherwise stated. Final
            pricing may vary based on the actual scope of work, material costs, and any unforeseen conditions
            discovered during the project.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            The information on this website is provided on an &quot;as is&quot; basis. {siteConfig.name} makes no
            warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
            without limitation, implied warranties of merchantability or fitness for a particular purpose.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these terms, please contact us at{' '}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or call{' '}
            <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phone}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
