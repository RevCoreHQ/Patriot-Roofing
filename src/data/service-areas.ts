export interface AreaBodySection {
  heading: string;
  text: string;
}

export interface ServiceAreaData {
  slug: string;
  city: string;
  state: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  isPrimary: boolean;
  nearbyNote?: string;
  heroImage?: string;
  body: AreaBodySection[];
}

export const serviceAreas: ServiceAreaData[] = [
  {
    slug: 'lexington',
    city: 'Lexington',
    state: 'NC',
    metaTitle: 'Roofing & Home Repair in Lexington, NC | Patriot Roofing',
    metaDescription:
      'Professional roofing installation, replacement, repair, and home renovation services in Lexington, NC. Patriot Roofing & Home Repair — locally owned, 15+ years experience. Call (336) 479-6059.',
    h1: 'Roofing & Home Repair Services in Lexington, NC',
    intro:
      'Patriot Roofing & Home Repair, LLC is proud to call Lexington, NC home. As a locally owned and operated company with over 15 years of experience, we provide professional roofing installation, roof replacement, storm damage repair, kitchen and bathroom renovations, and general home repair services to homeowners throughout Lexington and Davidson County. We know this community because we live and work here every day.',
    isPrimary: true,
    heroImage: '',
    body: [
      {
        heading: 'Serving Lexington Homeowners with Pride',
        text: 'Lexington is more than our business address — it is where our families live, where our kids go to school, and where our reputation matters most. Patriot Roofing & Home Repair has completed hundreds of projects across Lexington neighborhoods, from the historic homes near Uptown to the newer developments along Cotton Grove Road and Old Salisbury Road. Whether you need a full roof replacement on a mid-century ranch, storm damage repair after a summer thunderstorm, or a complete kitchen renovation to modernize your home, our team delivers honest assessments, transparent pricing, and quality workmanship that stands the test of time. We answer our phone, show up when we say we will, and treat your home with the same care we would give our own.',
      },
      {
        heading: 'Local Expertise You Can Trust',
        text: 'With over 15 years of hands-on experience in the roofing and home repair industry, Patriot Roofing has built deep knowledge of the building styles, materials, and construction methods common to Lexington and Davidson County. We understand the challenges that come with maintaining older homes in established neighborhoods as well as the standards expected in newer construction. Our crews are trained in the latest roofing systems from leading manufacturers, and we stay current on North Carolina building codes and permit requirements. When you hire Patriot Roofing, you are hiring a company that knows Lexington inside and out — not an out-of-town crew chasing storm work.',
      },
      {
        heading: 'Built to Handle North Carolina Weather',
        text: 'Central North Carolina experiences a demanding climate that puts roofing systems to the test year-round. Hot, humid summers with temperatures regularly exceeding 90 degrees accelerate shingle aging and can cause ventilation problems in poorly maintained attics. Severe thunderstorms, high winds, and occasional hail move through Davidson County every spring and summer, and the remnants of Atlantic hurricanes can bring sustained heavy rain and damaging gusts well inland. Winter ice storms, though less frequent, can create ice dams and cause significant damage to aging roofs. Patriot Roofing specifies materials and installation methods designed to withstand the full range of North Carolina weather conditions, and we offer prompt storm damage inspections and insurance claim assistance when severe weather does strike.',
      },
    ],
  },
  {
    slug: 'greensboro',
    city: 'Greensboro',
    state: 'NC',
    metaTitle: 'Roofing & Home Repair in Greensboro, NC | Patriot Roofing',
    metaDescription:
      'Expert roofing installation, replacement, repair, and home renovation in Greensboro, NC. Patriot Roofing & Home Repair — 15+ years experience, free estimates. Call (336) 479-6059.',
    h1: 'Roofing & Home Repair Services in Greensboro, NC',
    intro:
      'Patriot Roofing & Home Repair serves homeowners throughout Greensboro, NC with professional roofing services, kitchen and bathroom renovations, and dependable home repairs. As the third-largest city in North Carolina, Greensboro has a diverse housing stock that requires experienced, knowledgeable contractors. Our team brings over 15 years of industry experience to every Greensboro project, large or small.',
    isPrimary: true,
    heroImage: '',
    body: [
      {
        heading: 'Professional Roofing Across Greensboro',
        text: 'Greensboro is a city of distinct neighborhoods, each with its own architectural character and roofing needs. From the stately older homes in Irving Park and Fisher Park to the sprawling developments in northern Greensboro near Friendly Center and along Battleground Avenue, Patriot Roofing has the experience to handle any residential roofing project. We install high-performance asphalt shingle systems, provide expert roof repairs, and specialize in complete roof replacements that improve curb appeal and protect your home for decades. Our team also handles skylight installation, gutter replacement, and attic ventilation improvements — the details that make the difference between a roof that simply covers your home and one that truly performs.',
      },
      {
        heading: 'Neighborhoods We Serve in Greensboro',
        text: 'Our Greensboro service coverage is comprehensive. We work in established neighborhoods like Lindley Park, Sunset Hills, Hamilton Lakes, Starmount, and Lake Jeanette, as well as newer communities in Pleasant Garden, McLeansville, and the rapidly growing areas near Piedmont Triad International Airport. Many Greensboro homes built in the 1970s through the 1990s are now reaching the point where original roofing systems need full replacement, and homeowners in these neighborhoods are turning to Patriot Roofing for straightforward advice on materials, timing, and cost. We also serve homeowners who need interior work, including kitchen remodels, bathroom updates, and general repairs that keep older Greensboro homes in top condition.',
      },
      {
        heading: 'Why Greensboro Homeowners Choose Patriot Roofing',
        text: 'Greensboro homeowners have no shortage of contractor options, which is exactly why reputation and reliability matter. Patriot Roofing & Home Repair earns business through referrals, repeat customers, and a straightforward approach that homeowners appreciate. We provide detailed written estimates with no hidden fees, we use quality materials from trusted manufacturers, and we never pressure you into work you do not need. Our proximity to Greensboro from our Lexington base means we respond quickly to service calls and can have a crew on-site for inspections within days, not weeks. When storms roll through the Piedmont Triad and leave damage behind, we are one of the first companies on the ground helping homeowners assess damage and navigate the insurance claims process.',
      },
    ],
  },
  {
    slug: 'winston-salem',
    city: 'Winston-Salem',
    state: 'NC',
    metaTitle: 'Roofing & Home Repair in Winston-Salem, NC | Patriot Roofing',
    metaDescription:
      'Trusted roofing and home repair services in Winston-Salem, NC. Roof replacement, storm damage repair, renovations & more. Patriot Roofing — call (336) 479-6059 for a free estimate.',
    h1: 'Roofing & Home Repair Services in Winston-Salem, NC',
    intro:
      'Patriot Roofing & Home Repair proudly serves homeowners in Winston-Salem, NC with complete roofing services and quality home repairs. Winston-Salem is one of the Piedmont Triad\'s anchor cities, with a rich mix of historic and modern homes that demand skilled, reliable contractors. Our team brings 15+ years of roofing and renovation experience to every Winston-Salem project.',
    isPrimary: true,
    heroImage: '',
    body: [
      {
        heading: 'Roofing Solutions for Winston-Salem Homes',
        text: 'Winston-Salem\'s housing stock spans well over a century of architectural styles, from the historic bungalows and Craftsman homes of West End and Ardmore to the modern developments in Clemmons and Lewisville on the city\'s western edge. Each era of construction presents different roofing challenges, and Patriot Roofing has the expertise to address them all. We perform complete roof replacements using architectural shingles rated for the wind and weather conditions common to the Carolina Piedmont, and we handle targeted repairs for homeowners who need to extend the life of an existing roof. Our crews are meticulous about flashing details, ridge ventilation, and drip edge installation — the often-overlooked elements that prevent leaks and premature failure.',
      },
      {
        heading: 'Storm Damage Response in the Piedmont',
        text: 'Winston-Salem sits in a region of North Carolina that is particularly susceptible to severe summer thunderstorms, and the remnants of tropical systems that track inland from the coast can deliver sustained heavy rainfall and damaging winds to Forsyth County. These weather events frequently damage roofing systems, tear off shingles, and expose vulnerable areas around chimneys, vents, and valleys. Patriot Roofing provides rapid storm damage assessments for Winston-Salem homeowners, including detailed photo documentation that supports insurance claims. We work directly with your insurance adjuster to ensure the full scope of damage is identified and covered, and we handle the repairs or replacement promptly so your home is protected before the next storm arrives.',
      },
      {
        heading: 'Beyond Roofing — Complete Home Repair',
        text: 'In addition to roofing, Patriot Roofing & Home Repair offers Winston-Salem homeowners a full range of interior and exterior home improvement services. Our kitchen renovation projects transform outdated spaces into functional, modern kitchens with new cabinetry, countertops, and fixtures. Bathroom remodels address everything from simple vanity replacements to complete gut renovations with new tile, plumbing, and layout changes. We also handle general home repairs including siding, trim, drywall, and the dozens of smaller maintenance items that Winston-Salem homeowners need addressed by a contractor they can trust. Having one reliable company for both your roof and your home repair needs means fewer phone calls, consistent quality, and a team that already knows your property.',
      },
    ],
  },
  {
    slug: 'high-point',
    city: 'High Point',
    state: 'NC',
    metaTitle: 'Roofing & Home Repair in High Point, NC | Patriot Roofing',
    metaDescription:
      'Reliable roofing installation, replacement, repair, and home renovation in High Point, NC. Patriot Roofing & Home Repair — 15+ years experience. Call (336) 479-6059.',
    h1: 'Roofing & Home Repair Services in High Point, NC',
    intro:
      'Patriot Roofing & Home Repair provides High Point, NC homeowners with professional roofing services, home renovations, and dependable repair work. Known worldwide as the Furniture Capital, High Point is also home to thousands of residential properties that need experienced roofing contractors who deliver quality work at fair prices. Our team is ready to help with everything from a simple roof repair to a complete home renovation.',
    isPrimary: true,
    heroImage: '',
    body: [
      {
        heading: 'Trusted Roofing Services in High Point',
        text: 'High Point offers a wide range of residential properties, from the charming early-twentieth-century homes near downtown and the Washington Street district to the established neighborhoods along Eastchester Drive and the newer subdivisions spreading into the surrounding countryside. Patriot Roofing has worked on homes across the full spectrum of High Point\'s housing market, and we understand the specific roofing requirements that come with each type of construction. Whether your home has the steep-pitched roof common to older Piedmont homes or the lower-slope design typical of modern construction, we install and repair roofing systems that perform reliably in North Carolina\'s demanding climate. Every project begins with a thorough inspection and an honest assessment of your roof\'s condition.',
      },
      {
        heading: 'Protecting Your Home from Carolina Weather',
        text: 'High Point sits in the heart of the Piedmont Triad, where hot and humid summers, powerful afternoon thunderstorms, and the occasional tropical weather remnant create year-round stress on residential roofing systems. Sustained humidity accelerates the growth of moss, algae, and mildew on shingles, while temperature extremes cause materials to expand and contract over thousands of cycles during their lifetime. Patriot Roofing specifies algae-resistant shingles and ensures proper attic ventilation to combat moisture buildup that can rot decking and reduce the lifespan of your roof. When severe weather moves through Guilford County, our team responds quickly with damage assessments and temporary protection measures to prevent water intrusion until permanent repairs can be completed.',
      },
      {
        heading: 'Home Repair and Renovation Services',
        text: 'Beyond roofing, Patriot Roofing & Home Repair helps High Point homeowners maintain and improve their properties with kitchen renovations, bathroom remodels, and general repair services. Many High Point homes, particularly those built in the mid-twentieth century, have kitchens and bathrooms that are ready for a modern update. Our renovation projects are managed with the same attention to detail and clear communication that define our roofing work. We provide detailed project scopes, realistic timelines, and regular progress updates so you always know what to expect. From replacing a leaking roof to transforming an outdated kitchen, Patriot Roofing is the one contractor High Point homeowners need on their side.',
      },
    ],
  },
  {
    slug: 'thomasville',
    city: 'Thomasville',
    state: 'NC',
    metaTitle: 'Roofing & Home Repair in Thomasville, NC | Patriot Roofing',
    metaDescription:
      'Roofing and home repair services in Thomasville, NC. Roof replacement, repair, storm damage, and renovations. Patriot Roofing & Home Repair — call (336) 479-6059.',
    h1: 'Roofing & Home Repair Services in Thomasville, NC',
    intro:
      'Patriot Roofing & Home Repair extends our full range of roofing and home repair services to homeowners in Thomasville, NC. Located just minutes from our Lexington home base, Thomasville is a community we know well and serve regularly. From roof replacements to kitchen renovations, our experienced team is ready to take care of your home.',
    isPrimary: false,
    nearbyNote:
      'Thomasville is within our service area. Call to confirm availability for your specific address.',
    heroImage: '',
    body: [
      {
        heading: 'Roofing Services for Thomasville Residents',
        text: 'Thomasville\'s residential neighborhoods feature a mix of well-maintained older homes near the downtown core and newer construction in the areas surrounding the city. Many homes in the National Avenue and Salem Street corridors were built decades ago and are reaching the age where original roofing systems require replacement. Patriot Roofing specializes in these full replacement projects, removing old materials down to the deck, inspecting and repairing any underlying damage, and installing modern shingle systems that offer superior wind resistance and weather protection. We also handle smaller repairs, including leak diagnosis, flashing replacement, and shingle patching for roofs that still have usable life remaining.',
      },
      {
        heading: 'A Neighbor You Can Count On',
        text: 'Thomasville is one of the closest communities to our Lexington headquarters, which means faster response times and lower travel costs for homeowners who need roofing work or home repairs. Our familiarity with the area extends beyond geography — we understand the local building codes, the common construction methods used in Davidson County homes, and the specific weather patterns that affect roofing performance in the central Piedmont. North Carolina\'s combination of heavy spring rains, intense summer heat and humidity, and occasional winter ice events makes it essential to have a roof that is properly installed and well maintained. Patriot Roofing offers free inspections for Thomasville homeowners who want to understand the current condition of their roof and plan for future maintenance or replacement.',
      },
    ],
  },
  {
    slug: 'kernersville',
    city: 'Kernersville',
    state: 'NC',
    metaTitle: 'Roofing & Home Repair in Kernersville, NC | Patriot Roofing',
    metaDescription:
      'Roofing and home repair services in Kernersville, NC. Expert roof replacement, storm damage repair, and home renovations. Patriot Roofing — call (336) 479-6059.',
    h1: 'Roofing & Home Repair Services in Kernersville, NC',
    intro:
      'Patriot Roofing & Home Repair serves homeowners in Kernersville, NC with dependable roofing services and quality home repairs. Kernersville\'s location between Winston-Salem and Greensboro has made it one of the Piedmont Triad\'s fastest-growing communities, and our team is proud to serve the homeowners who have made this town their home.',
    isPrimary: false,
    nearbyNote:
      'Kernersville is within our service area. Call to confirm availability for your specific address.',
    heroImage: '',
    body: [
      {
        heading: 'Roofing Expertise for a Growing Community',
        text: 'Kernersville has experienced significant residential growth over the past two decades, with new subdivisions and established neighborhoods coexisting throughout the town. Many homes in the older sections along Main Street and near Kernersville Lake were built in the 1960s through 1980s and are now due for their second or even third roof replacement. Meanwhile, newer homes in developments off Union Cross Road and Piney Grove Road may need warranty repairs, storm damage restoration, or upgrades to improve energy efficiency. Patriot Roofing handles the full spectrum of residential roofing work in Kernersville, from straightforward shingle replacements to more involved projects that require deck repair, improved ventilation, or upgraded flashing systems. Our estimates are detailed, our pricing is competitive, and we stand behind every project we complete.',
      },
      {
        heading: 'Reliable Home Repair Services',
        text: 'In addition to roofing, Kernersville homeowners rely on Patriot Roofing & Home Repair for kitchen renovations, bathroom remodels, and general home maintenance. North Carolina\'s climate is tough on homes — humidity drives moisture into walls and crawl spaces, summer storms damage siding and trim, and the constant cycle of heat and cold takes a toll on exterior materials. Our home repair services address these issues with the same professionalism and quality that define our roofing work. Whether you need a bathroom updated, a kitchen remodeled, or exterior repairs completed before the next storm season, Patriot Roofing is one call away at (336) 479-6059.',
      },
    ],
  },
  {
    slug: 'clemmons',
    city: 'Clemmons',
    state: 'NC',
    metaTitle: 'Roofing & Home Repair in Clemmons, NC | Patriot Roofing',
    metaDescription:
      'Professional roofing and home repair services in Clemmons, NC. Roof replacement, repair, renovations & more. Patriot Roofing & Home Repair — call (336) 479-6059.',
    h1: 'Roofing & Home Repair Services in Clemmons, NC',
    intro:
      'Patriot Roofing & Home Repair provides Clemmons, NC homeowners with professional roofing installation, roof replacement, storm damage repair, and home renovation services. Clemmons is a thriving community on the western side of Winston-Salem, and our team is committed to delivering the same high-quality workmanship here that we bring to every project across the Piedmont Triad.',
    isPrimary: false,
    nearbyNote:
      'Clemmons is within our service area. Call to confirm availability for your specific address.',
    heroImage: '',
    body: [
      {
        heading: 'Quality Roofing for Clemmons Homeowners',
        text: 'Clemmons has earned a reputation as one of the most desirable residential communities in the Piedmont Triad, with well-maintained neighborhoods like Clemmons Village, Meadowlands, and the established areas along Lewisville-Clemmons Road. Homes in these neighborhoods represent significant investments, and protecting that investment starts with a properly installed, well-maintained roof. Patriot Roofing works with Clemmons homeowners to evaluate their current roofing system, identify any areas of concern, and recommend the most cost-effective path forward — whether that means targeted repairs, a partial re-roof, or a complete tear-off and replacement. We use high-quality architectural shingles rated for the wind speeds and weather exposure common to the North Carolina Piedmont, and every installation includes proper ice and water shield, drip edge, and ridge ventilation.',
      },
      {
        heading: 'Home Improvements Built to Last',
        text: 'Beyond roofing, Clemmons homeowners trust Patriot Roofing & Home Repair for kitchen and bathroom renovations that add value and functionality to their homes. The humid North Carolina climate can be particularly hard on bathrooms, where moisture infiltration leads to mold, mildew, and deteriorating tile and grout over time. Our bathroom renovation projects address these underlying issues while delivering a modern, updated look. Kitchen remodels are equally popular among Clemmons homeowners looking to open up floor plans, upgrade appliances, and install durable new countertops and cabinetry. Whatever your home improvement needs, Patriot Roofing brings honest advice, skilled craftsmanship, and a commitment to completing every project on time and on budget. Call us at (336) 479-6059 to schedule a free consultation.',
      },
    ],
  },
];

export function getServiceAreaBySlug(slug: string) {
  return serviceAreas.find((a) => a.slug === slug);
}
