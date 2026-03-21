export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Roofing Installation', href: '/services/roofing-installation' },
      { label: 'Roof Replacement', href: '/services/roof-replacement' },
      { label: 'Roofing Repair', href: '/services/roofing-repair' },
      { label: 'Kitchen Renovation', href: '/services/kitchen-renovation' },
      { label: 'Bathroom Renovation', href: '/services/bathroom-renovation' },
      { label: 'Home Repair', href: '/services/home-repair' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  {
    label: 'Areas',
    href: '/service-areas',
    children: [
      { label: 'Lexington', href: '/service-areas/lexington' },
      { label: 'Greensboro', href: '/service-areas/greensboro' },
      { label: 'Winston-Salem', href: '/service-areas/winston-salem' },
      { label: 'High Point', href: '/service-areas/high-point' },
      { label: 'Thomasville', href: '/service-areas/thomasville' },
      { label: 'Kernersville', href: '/service-areas/kernersville' },
      { label: 'Clemmons', href: '/service-areas/clemmons' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  services: [
    { label: 'Roofing Installation', href: '/services/roofing-installation' },
    { label: 'Roof Replacement', href: '/services/roof-replacement' },
    { label: 'Roofing Repair', href: '/services/roofing-repair' },
    { label: 'Kitchen Renovation', href: '/services/kitchen-renovation' },
    { label: 'Bathroom Renovation', href: '/services/bathroom-renovation' },
    { label: 'Home Repair', href: '/services/home-repair' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Process', href: '/process' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  areas: [
    { label: 'Lexington', href: '/service-areas/lexington' },
    { label: 'Greensboro', href: '/service-areas/greensboro' },
    { label: 'Winston-Salem', href: '/service-areas/winston-salem' },
    { label: 'High Point', href: '/service-areas/high-point' },
    { label: 'Thomasville', href: '/service-areas/thomasville' },
    { label: 'Kernersville', href: '/service-areas/kernersville' },
    { label: 'Clemmons', href: '/service-areas/clemmons' },
  ],
};
