export const siteConfig = {
  name: 'Patriot Roofing & Home Repair',
  tagline: 'Protecting Homes with Quality Roofing & Repairs',
  description:
    "Lexington, NC's trusted roofing and home repair contractor. Professional roofing installation, roof replacement, repairs, and home renovations. 15+ years experience. Free inspections.",
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://patriotroofingandhomerepair.com',
  ogImage: '/api/og',
  phone: '(336) 479-6059',
  phoneRaw: '+13364796059',
  email: 'timothy@patriotroofingandhomerepair.com',
  address: {
    street: '316 W Davidson Ave',
    city: 'Lexington',
    state: 'NC',
    zip: '27295',
    full: '316 W Davidson Ave, Lexington, NC 27295',
  },
  hours: {
    weekday: '8:00 AM – 5:00 PM',
    saturday: 'Closed',
    sunday: 'Closed',
    schema: ['Mo-Fr 08:00-17:00'],
  },
  social: {
    google: 'https://www.google.com/maps/place/Patriot+Roofing+and+Home+Repair',
    facebook: 'https://www.facebook.com/PatriotRoofingandHomeRepairLLCNC',
    instagram: 'https://www.instagram.com/patriotroofinghomerepair',
    yelp: 'https://www.yelp.com/biz/patriot-roofing-and-home-repair-lexington',
  },
  trustPoints: [
    { label: '15+ Years Experience', icon: 'Shield' as const },
    { label: '99% Customer Satisfaction', icon: 'BadgeCheck' as const },
    { label: 'Free Inspections', icon: 'ClipboardCheck' as const },
    { label: 'Licensed & Insured', icon: 'FileText' as const },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
