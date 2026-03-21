import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import { siteConfig } from '@/data/site-config';
import { Header } from '@/components/layout/Header';
import { MainWrapper } from '@/components/layout/MainWrapper';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomBar } from '@/components/layout/MobileBottomBar';
import { BackToTop } from '@/components/ui/BackToTop';
import { JsonLd } from '@/components/seo/JsonLd';
import { localBusinessSchema, webSiteSchema } from '@/lib/schema';
import '@/styles/globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Roofing & Home Repair in Lexington, NC`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'roofing contractor Lexington NC',
    'roof replacement Lexington NC',
    'roofing installation North Carolina',
    'roof repair Greensboro NC',
    'home repair Lexington NC',
    'kitchen renovation Lexington NC',
    'bathroom renovation Lexington NC',
    'roofing company Winston-Salem',
    'Patriot Roofing',
  ],
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: siteConfig.ogImage ? [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: `${siteConfig.name} — Roofing & Home Repair in Lexington, NC` }] : [],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://assets.cdn.filesafe.space" />
        <link rel="preconnect" href="https://storage.googleapis.com" />
        <JsonLd data={[localBusinessSchema(), webSiteSchema()]} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
        <MobileBottomBar />
        <BackToTop />
      </body>
    </html>
  );
}
