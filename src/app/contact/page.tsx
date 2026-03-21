import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ContactForm } from '@/components/forms/ContactForm';
import { siteConfig } from '@/data/site-config';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Patriot Roofing & Home Repair — Free Inspection | Lexington, NC',
  description: 'Get a free roof inspection and estimate. Call (336) 479-6059 or fill out our form. Serving Lexington, Greensboro, Winston-Salem, and surrounding NC areas.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
    <JsonLd data={breadcrumbSchema([
      { name: 'Home', url: siteConfig.url },
      { name: 'Contact', url: `${siteConfig.url}/contact` },
    ])} />
    <div className="section-padding">
      <div className="container-wide">
        <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - Info */}
          <div className="lg:col-span-2">
            <p className="text-brand-600 font-medium text-sm tracking-wide uppercase mb-3">Get In Touch</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-6">
              Request Your Free Inspection
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Tell us about your project and we will be in touch within one business day. Or call us directly, we are happy to talk.
            </p>

            <div className="space-y-5">
              <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 group-hover:bg-brand-100 transition-colors">
                  <Phone className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Call Us</p>
                  <p className="font-semibold text-slate-900">{siteConfig.phone}</p>
                </div>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 group-hover:bg-brand-100 transition-colors">
                  <Mail className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-semibold text-slate-900">{siteConfig.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-semibold text-slate-900">{siteConfig.address.full}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Hours</p>
                  <p className="font-semibold text-slate-900">Mon–Fri {siteConfig.hours.weekday}</p>
                  <p className="text-sm text-slate-500">Sat–Sun: {siteConfig.hours.saturday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6 lg:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Google Maps */}
    <section className="px-4 sm:px-6 lg:px-8 pb-16">
      <div className="container-wide">
        <div className="rounded-2xl overflow-hidden shadow-card border border-slate-100" style={{ height: '400px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3256.0!2d-80.2534!3d35.8243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ5JzI3LjUiTiA4MMKwMTUnMTIuMiJX!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Patriot Roofing & Home Repair — Lexington, NC"
          />
        </div>
      </div>
    </section>
    </>
  );
}
