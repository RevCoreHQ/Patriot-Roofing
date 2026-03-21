export interface FAQ {
  question: string;
  answer: string;
}

export interface BodySection {
  heading: string;
  text: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  category: 'roofing' | 'renovation' | 'repair';
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  features: string[];
  body: BodySection[];
  faqs: FAQ[];
  relatedSlugs: string[];
  primaryKeyword: string;
}

export const services: ServiceData[] = [
  {
    slug: 'roofing-installation',
    title: 'Roofing Installation',
    shortTitle: 'Roof Installation',
    category: 'roofing',
    metaTitle: 'Professional Roofing Installation in Lexington, NC | Patriot Roofing & Home Repair',
    metaDescription: 'Expert roofing installation in Lexington, NC and the Piedmont Triad. Architectural shingles, proper ventilation, and quality underlayment. 15+ years experience. Call (336) 479-6059 for a free estimate.',
    h1: 'Professional Roofing Installation in Lexington, NC',
    intro: "Whether you're building a new home or re-roofing an existing structure, Patriot Roofing & Home Repair delivers professional roofing installation backed by 15+ years of experience in the Piedmont Triad. We use only premium materials from trusted manufacturers, ensuring your roof stands up to North Carolina's hot summers, heavy rain, and occasional ice storms. From the initial consultation to the final cleanup, our licensed crew handles every detail so you get a roof that protects your family for decades.",
    heroImage: '',
    heroAlt: 'Professional roofing installation on a residential home in Lexington, North Carolina',
    features: [
      'Architectural shingle installation with manufacturer-certified techniques',
      'Premium synthetic underlayment for superior moisture protection',
      'Ridge vent and soffit ventilation for optimal attic airflow',
      'Step and counter flashing at all penetrations and wall junctions',
      'Seamless gutter installation and downspout routing',
      'Full jobsite cleanup with magnetic nail sweeps',
    ],
    body: [
      {
        heading: 'Our Roofing Installation Process',
        text: "Every Patriot Roofing installation begins with a thorough property assessment. We inspect the existing deck structure, measure your roof's dimensions, and evaluate ventilation needs before recommending materials. Once you approve the scope and design, our crew works efficiently to complete most residential installations in one to three days, minimizing disruption to your household. We coordinate material deliveries, pull all required Davidson County permits, and keep you informed at every stage. After installation, we perform a detailed quality inspection and walk you through the finished work so you know exactly what was done and why.",
      },
      {
        heading: 'Premium Materials Built for North Carolina Weather',
        text: "Central North Carolina's climate demands roofing materials that can handle temperature swings, UV exposure, and heavy rainfall. That's why Patriot Roofing installs architectural shingles rated for winds up to 130 mph, paired with high-performance synthetic underlayment that resists moisture infiltration far better than traditional felt paper. We also install ice and water shield in vulnerable areas such as valleys, eaves, and around skylights to prevent ice-dam leaks during those rare but damaging winter storms. Every component, from the drip edge to the ridge cap, is selected to work as a system that extends the life of your roof.",
      },
      {
        heading: 'Why Lexington Homeowners Choose Patriot Roofing',
        text: "Patriot Roofing & Home Repair is locally owned and operated right here in Lexington, NC. We've built our reputation by treating every home like our own, showing up on time, communicating clearly, and leaving the property cleaner than we found it. Our team is fully licensed and insured, and we stand behind every installation with workmanship warranties that go beyond the manufacturer's material coverage. We also serve homeowners across Greensboro, Winston-Salem, High Point, Thomasville, Kernersville, and Clemmons, bringing the same commitment to quality that has made us a trusted name in Davidson County.",
      },
    ],
    faqs: [
      {
        question: 'How long does a new roof installation take?',
        answer: 'Most residential roofing installations are completed in one to three days, depending on the size and complexity of the roof. Larger homes, steep pitches, or multi-story structures may require additional time. Weather can also affect scheduling, but we monitor forecasts closely and will communicate any delays as soon as possible.',
      },
      {
        question: 'What roofing materials do you recommend for homes in Lexington, NC?',
        answer: 'For most homes in the Piedmont Triad, we recommend architectural asphalt shingles. They offer excellent durability against North Carolina heat, wind, and rain while providing a clean, attractive appearance. We carry products from leading manufacturers like GAF, CertainTeed, and Owens Corning, all rated for high-wind resistance and backed by strong manufacturer warranties.',
      },
      {
        question: 'How much does a new roof installation cost?',
        answer: 'The cost of a new roof depends on the size of your home, the pitch of the roof, the materials selected, and whether any decking repairs are needed. Most residential installations in the Lexington area range from $8,000 to $18,000. We provide free, detailed estimates with no hidden fees so you know exactly what to expect before work begins.',
      },
      {
        question: 'What kind of warranty comes with a Patriot Roofing installation?',
        answer: 'Every installation includes both a manufacturer material warranty, typically 25 to 50 years depending on the shingle line, and our own workmanship warranty that covers labor and installation quality. This dual-layer protection means you are covered whether the issue is a manufacturing defect or an installation-related concern. We will walk you through your warranty details at project completion.',
      },
    ],
    relatedSlugs: ['roof-replacement', 'roofing-repair'],
    primaryKeyword: 'roofing installation Lexington NC',
  },
  {
    slug: 'roof-replacement',
    title: 'Roof Replacement',
    shortTitle: 'Roof Replacement',
    category: 'roofing',
    metaTitle: 'Roof Replacement in Lexington, NC | Full Tear-Off & Re-Roof | Patriot Roofing & Home Repair',
    metaDescription: 'Complete roof replacement services in Lexington, NC. Full tear-off, deck inspection, and premium shingle installation. Serving Greensboro, Winston-Salem, and the Piedmont Triad. Free estimates.',
    h1: 'Complete Roof Replacement Services in Lexington, NC',
    intro: "When repairs are no longer enough, a full roof replacement restores your home's protection, energy efficiency, and curb appeal. Patriot Roofing & Home Repair specializes in complete tear-off and re-roof projects across Lexington, Greensboro, Winston-Salem, and surrounding Piedmont Triad communities. Our experienced crew removes every layer down to the deck, inspects the sheathing for damage, and installs a brand-new roofing system built to last through decades of North Carolina weather.",
    heroImage: '',
    heroAlt: 'Complete roof replacement being performed on a residential home in Lexington, North Carolina',
    features: [
      'Full tear-off of existing roofing materials down to the deck',
      'Comprehensive deck and sheathing inspection with rot repair as needed',
      'New synthetic underlayment with ice and water shield in critical areas',
      'Architectural shingle installation with manufacturer-certified techniques',
      'Upgraded ridge and soffit ventilation for improved energy efficiency',
      'Transferable manufacturer warranty plus Patriot workmanship guarantee',
    ],
    body: [
      {
        heading: 'When Is It Time to Replace Your Roof?',
        text: "Most asphalt shingle roofs in North Carolina last between 20 and 30 years, but several factors can shorten that lifespan. If you notice curling or buckling shingles, granule loss in your gutters, daylight visible through the attic, or recurring leaks despite repairs, your roof is likely telling you it's time for a replacement. Storm damage from hail, fallen branches, or high winds can also push a roof past the point of cost-effective repair. A professional inspection from Patriot Roofing will give you an honest assessment, and we will never recommend a replacement when a repair will do the job.",
      },
      {
        heading: 'The Patriot Roof Replacement Process',
        text: "Our replacement process starts with a detailed inspection and honest consultation. We document the current condition of your roof, discuss material options and colors, and provide a transparent written estimate. On installation day, our crew strips the old roofing down to bare sheathing, giving us the opportunity to inspect every square foot of decking for soft spots, rot, or water damage. Any compromised decking is replaced before we lay down new underlayment, install ice and water shield in valleys and at eaves, and apply your chosen shingles. We finish with new flashing at all penetrations, proper ridge ventilation, and a thorough cleanup that includes magnetic nail sweeps across your entire yard and driveway.",
      },
      {
        heading: 'The Return on Investment of a New Roof',
        text: "A roof replacement is one of the highest-ROI home improvements you can make. According to national remodeling data, homeowners typically recoup 60 to 70 percent of the cost at resale, and in competitive North Carolina markets like Greensboro and Winston-Salem, a new roof can make the difference between a quick sale and a home that sits on the market. Beyond resale value, a modern roofing system with proper ventilation can lower your monthly energy bills by reducing attic heat buildup in the summer and preventing ice dam formation in the winter. Many homeowners also see a reduction in their homeowner's insurance premiums after upgrading to impact-resistant shingles.",
      },
    ],
    faqs: [
      {
        question: 'What are the signs I need a roof replacement instead of a repair?',
        answer: 'Key indicators include widespread shingle curling or buckling, significant granule loss, multiple active leaks, sagging sections of the roofline, and a roof that is 20 years old or older. If repair costs are approaching 30 to 50 percent of a replacement, it usually makes more financial sense to invest in a new roof. We offer free inspections and will always give you an honest recommendation.',
      },
      {
        question: 'How much does a roof replacement cost in the Lexington, NC area?',
        answer: 'A full roof replacement for an average-sized home in the Piedmont Triad typically ranges from $10,000 to $22,000, depending on roof size, pitch, material selection, and the extent of any deck repairs. We provide free written estimates that itemize every cost, so there are no surprises on installation day.',
      },
      {
        question: 'Will my homeowner\'s insurance cover a roof replacement?',
        answer: 'If the damage was caused by a covered event such as a storm, hail, or fallen tree, your homeowner\'s insurance may cover part or all of the replacement cost minus your deductible. Patriot Roofing has extensive experience working with insurance adjusters and can help you document the damage, file your claim, and ensure you receive a fair settlement.',
      },
      {
        question: 'How long does a roof replacement take from start to finish?',
        answer: 'Most roof replacements are completed in two to four days once materials are delivered and weather permits. The timeline depends on roof size, complexity, and whether any significant decking repairs are discovered during tear-off. We will give you a projected schedule before we start and keep you updated throughout the project.',
      },
    ],
    relatedSlugs: ['roofing-installation', 'roofing-repair'],
    primaryKeyword: 'roof replacement Lexington NC',
  },
  {
    slug: 'roofing-repair',
    title: 'Roofing Repair',
    shortTitle: 'Roof Repair',
    category: 'roofing',
    metaTitle: 'Roof Repair in Lexington, NC | Leak & Storm Damage Repair | Patriot Roofing & Home Repair',
    metaDescription: 'Fast, reliable roof repair in Lexington, NC. Leak detection, storm damage repair, missing shingles, and emergency service. Serving the Piedmont Triad. Call (336) 479-6059.',
    h1: 'Expert Roof Repair Services in Lexington, NC',
    intro: "From a single missing shingle to major storm damage, Patriot Roofing & Home Repair provides fast, dependable roof repair services throughout Lexington, NC and the surrounding Piedmont Triad. Ignoring even a small roof issue can lead to water damage, mold growth, and costly structural repairs down the road. Our skilled technicians diagnose the problem accurately and fix it right the first time, using quality materials that match your existing roof so the repair blends seamlessly.",
    heroImage: '',
    heroAlt: 'Roofing repair technician fixing storm-damaged shingles on a home in Lexington, North Carolina',
    features: [
      'Advanced leak detection using moisture meters and infrared scanning',
      'Shingle replacement matched to your existing roof color and style',
      'Flashing repair and replacement at chimneys, vents, and wall junctions',
      'Gutter repair, reattachment, and downspout rerouting',
      'Storm damage assessment and insurance claim documentation',
      'Emergency tarping and temporary repair service for urgent leaks',
    ],
    body: [
      {
        heading: 'Common Roof Problems in the Piedmont Triad',
        text: "North Carolina's climate creates unique challenges for residential roofs. Summer thunderstorms can drive rain under compromised flashing, while winter ice dams push meltwater beneath shingles at the eaves. High winds peel back aging shingle tabs, and hail leaves behind dents and cracks that accelerate granule loss. Even without dramatic storms, normal wear from UV exposure and temperature cycling causes shingles to curl, crack, and lose their seal over time. Patriot Roofing has repaired thousands of roofs across Davidson, Guilford, and Forsyth counties, so we know exactly what to look for and how to fix it.",
      },
      {
        heading: 'How We Diagnose and Repair Your Roof',
        text: "Accurate diagnosis is the key to a lasting repair. Our technicians start with a visual inspection of the exterior, checking for missing or damaged shingles, cracked flashing, clogged gutters, and signs of animal intrusion. When the source of a leak is not obvious from the outside, we use moisture meters and, when necessary, infrared imaging to trace the water path from the interior stain back to the point of entry. Once we identify the issue, we explain it to you in plain language, provide a written repair estimate, and complete the work promptly. We carry a wide selection of shingle colors and styles on our trucks so most repairs can be finished the same day we arrive.",
      },
      {
        heading: 'Preventing Future Roof Damage',
        text: "The best way to avoid expensive repairs is a proactive maintenance plan. Patriot Roofing recommends scheduling a professional roof inspection at least once a year, ideally in the spring after winter weather has passed, and again after any major storm. During these inspections, we check for early signs of wear, clear debris from valleys and gutters, reseal exposed nail heads, and address minor issues before they become major problems. Keeping your trees trimmed back from the roof line also reduces the risk of branch damage and limits the leaf and moss buildup that traps moisture against your shingles.",
      },
    ],
    faqs: [
      {
        question: 'Do you offer emergency roof repair services?',
        answer: 'Yes. Patriot Roofing provides emergency tarping and temporary repair services for urgent situations such as storm damage, fallen trees, or active leaks that threaten the interior of your home. Call us at (336) 479-6059 and we will respond as quickly as possible to secure your property and prevent further damage until a permanent repair can be completed.',
      },
      {
        question: 'How much does a typical roof repair cost?',
        answer: 'Minor repairs such as replacing a few shingles or resealing flashing typically cost between $250 and $800. More extensive repairs involving multiple areas, decking replacement, or significant flashing work can range from $800 to $3,000 or more. We provide free inspections and transparent estimates so you know exactly what the repair will cost before we begin.',
      },
      {
        question: 'Can you help me file an insurance claim for storm damage?',
        answer: 'Absolutely. We work with insurance companies regularly and can help you through the entire claims process. Our team will document the damage with detailed photos and written reports, meet with your insurance adjuster on site if needed, and ensure that the scope of work matches the damage so you receive a fair payout. There is no extra charge for this assistance.',
      },
      {
        question: 'Is it okay to temporarily patch a roof leak myself?',
        answer: 'In an emergency, placing a tarp over the damaged area and securing it with weighted boards can help minimize interior water damage until a professional arrives. However, we strongly recommend against attempting permanent repairs yourself, as improper techniques can void your warranty, create additional damage, or pose a safety risk on a sloped roof. Call Patriot Roofing and we will handle the repair safely and correctly.',
      },
    ],
    relatedSlugs: ['roof-replacement', 'roofing-installation'],
    primaryKeyword: 'roof repair Lexington NC',
  },
  {
    slug: 'kitchen-renovation',
    title: 'Kitchen Renovation',
    shortTitle: 'Kitchen Renovation',
    category: 'renovation',
    metaTitle: 'Kitchen Renovation in Lexington, NC | Custom Remodeling | Patriot Roofing & Home Repair',
    metaDescription: 'Full-service kitchen renovation in Lexington, NC. Custom cabinets, countertops, backsplash, flooring, and more. Serving Greensboro, Winston-Salem, and the Piedmont Triad. Free estimates.',
    h1: 'Kitchen Renovation Services in Lexington, NC',
    intro: "The kitchen is the heart of every home, and a well-planned renovation can transform it from outdated and cramped into a beautiful, functional space your family will enjoy for years. Patriot Roofing & Home Repair brings 15+ years of craftsmanship to every kitchen remodel in Lexington, NC and across the Piedmont Triad. Whether you want to update your cabinets and countertops or gut the room for a completely new layout, our team manages the entire project from design through final walkthrough.",
    heroImage: '',
    heroAlt: 'Beautifully renovated kitchen with custom cabinets and granite countertops in Lexington, North Carolina',
    features: [
      'Custom and semi-custom cabinet installation with soft-close hardware',
      'Granite, quartz, and butcher block countertop fabrication and installation',
      'Tile, glass, and stone backsplash design and installation',
      'Hardwood, luxury vinyl plank, and tile flooring options',
      'Recessed, pendant, and under-cabinet lighting upgrades',
      'Plumbing updates including sink, faucet, and dishwasher connections',
    ],
    body: [
      {
        heading: 'Designing Your Dream Kitchen',
        text: "Great kitchen renovations start with great planning. Our process begins with an in-home consultation where we discuss your goals, assess the current space, and talk through layout possibilities. Whether you want to open up a galley kitchen, add an island, or simply refresh the finishes, we help you choose materials and configurations that fit your lifestyle and budget. We work with trusted local suppliers across the Piedmont Triad to source cabinets, countertops, tile, and fixtures at competitive prices, and we present clear timelines so you know when each phase of the project will happen.",
      },
      {
        heading: 'Quality Craftsmanship in Every Detail',
        text: "A kitchen renovation involves multiple trades working in sequence, from demolition and framing to electrical, plumbing, cabinetry, countertops, backsplash, and flooring. Patriot Roofing & Home Repair coordinates every step so the project stays on schedule and on budget. Our carpenters hang cabinets level and square, our tile setters deliver clean grout lines and precise cuts, and our finish team ensures that every outlet cover, trim piece, and caulk joint is flawless. We treat your home with respect, protecting finished areas with drop cloths and cleaning up at the end of every workday.",
      },
      {
        heading: 'Increase Your Home Value with a Kitchen Remodel',
        text: "Kitchen renovations consistently rank among the top home improvements for return on investment. In North Carolina's competitive real estate markets, an updated kitchen can help your home sell faster and command a higher price. Even a mid-range remodel that includes new cabinets, countertops, flooring, and appliances can recoup a significant portion of the investment at resale. Beyond financial returns, a modernized kitchen improves daily life by providing better storage, more counter space, improved lighting, and energy-efficient appliances that lower your utility bills.",
      },
    ],
    faqs: [
      {
        question: 'How long does a kitchen renovation take?',
        answer: 'A typical kitchen renovation in the Lexington area takes four to eight weeks from demolition to completion, depending on the scope of the project. Simple cosmetic updates like cabinet refacing and new countertops can be done in two to three weeks, while a full gut renovation with layout changes, new plumbing, and electrical work may take eight to twelve weeks. We provide a detailed timeline before work begins.',
      },
      {
        question: 'How much does a kitchen remodel cost in the Piedmont Triad?',
        answer: 'Kitchen renovation costs vary widely based on the size of the space and the materials selected. A mid-range kitchen remodel in the Lexington and Greensboro area typically ranges from $15,000 to $40,000, while a high-end renovation with custom cabinetry and premium countertops can exceed $50,000. We offer free consultations and detailed written estimates to help you plan within your budget.',
      },
      {
        question: 'Can I stay in my home during the kitchen renovation?',
        answer: 'Yes, most homeowners stay in their homes during a kitchen remodel. We recommend setting up a temporary kitchen area with a microwave, coffee maker, and portable cooktop in another room. Our crew works to minimize dust and noise, and we clean up daily. We will discuss logistics with you before the project begins so you can prepare comfortably.',
      },
      {
        question: 'Do you handle the permits for a kitchen renovation?',
        answer: 'Yes. If your renovation involves electrical, plumbing, or structural changes, permits are typically required by Davidson County or your local municipality. Patriot Roofing & Home Repair handles the entire permitting process, including application, inspection scheduling, and final sign-off, so you do not have to deal with the paperwork.',
      },
    ],
    relatedSlugs: ['bathroom-renovation', 'home-repair'],
    primaryKeyword: 'kitchen renovation Lexington NC',
  },
  {
    slug: 'bathroom-renovation',
    title: 'Bathroom Renovation',
    shortTitle: 'Bathroom Renovation',
    category: 'renovation',
    metaTitle: 'Bathroom Renovation in Lexington, NC | Full Remodeling | Patriot Roofing & Home Repair',
    metaDescription: 'Complete bathroom renovation in Lexington, NC. Tile, vanity, shower, tub, plumbing, and lighting upgrades. Serving Greensboro, Winston-Salem, High Point, and the Piedmont Triad.',
    h1: 'Bathroom Renovation Services in Lexington, NC',
    intro: "An outdated bathroom drags down your home's comfort and value. Patriot Roofing & Home Repair delivers complete bathroom renovations across Lexington, NC and the Piedmont Triad, turning tired bathrooms into modern, spa-like retreats. From a simple vanity and fixture swap to a full gut remodel with new tile, walk-in showers, and custom lighting, our skilled craftsmen handle every aspect of the project with attention to detail and respect for your home.",
    heroImage: '',
    heroAlt: 'Modern bathroom renovation with walk-in tile shower and new vanity in Lexington, North Carolina',
    features: [
      'Custom tile work for floors, walls, and shower surrounds',
      'Vanity and cabinet installation with countertop options',
      'Walk-in shower and bathtub installation or conversion',
      'Complete plumbing rough-in and fixture installation',
      'LED recessed lighting and decorative sconce installation',
      'Exhaust fan and ventilation upgrades to prevent moisture damage',
    ],
    body: [
      {
        heading: 'Planning Your Bathroom Remodel',
        text: "A successful bathroom renovation requires careful planning, especially when working within the compact footprint most bathrooms provide. During our initial consultation, we review your existing layout, discuss what is and is not working, and explore design options that maximize both function and aesthetics. We help you select tile patterns, vanity styles, fixtures, and lighting that create a cohesive look while staying within budget. If you want to convert a tub to a walk-in shower, add a double vanity, or improve accessibility with grab bars and a curbless entry, we can design a solution that meets your needs.",
      },
      {
        heading: 'Expert Tile and Fixture Installation',
        text: "Bathrooms demand precision because every surface is exposed to moisture. Our tile setters use proper waterproofing membranes behind shower walls and beneath floors to prevent leaks and mold growth. We set tile with consistent spacing, clean grout lines, and polished bullnose or Schluter edge trim for a professional finish. Plumbing fixtures are installed to manufacturer specifications, and we pressure-test supply lines and drain connections before closing up walls. The result is a bathroom that looks beautiful on the surface and performs reliably behind the scenes for years to come.",
      },
      {
        heading: 'Adding Value and Comfort to Your Home',
        text: "Bathroom renovations deliver one of the strongest returns on investment of any interior remodeling project. Updated bathrooms are a top priority for buyers in the Lexington, Greensboro, and Winston-Salem markets, and even a modest refresh can add measurable value to your home. Beyond resale appeal, a renovated bathroom improves daily life with better water pressure, modern fixtures that conserve water, improved ventilation that prevents mold, and a design that simply feels good to use every morning. Patriot Roofing & Home Repair has completed bathroom remodels in homes of every age and style across the Piedmont Triad, and we bring that experience to every project.",
      },
    ],
    faqs: [
      {
        question: 'How long does a bathroom renovation take?',
        answer: 'A standard bathroom renovation typically takes two to four weeks, depending on the scope. A cosmetic update with new tile, vanity, and fixtures can often be completed in about two weeks, while a full gut remodel that includes moving plumbing, rerouting electrical, and reconfiguring the layout may take four to six weeks. We provide a detailed schedule before starting work.',
      },
      {
        question: 'How much does a bathroom remodel cost in Lexington, NC?',
        answer: 'Bathroom renovation costs in the Piedmont Triad generally range from $8,000 to $25,000 for a standard bathroom and $20,000 to $45,000 for a master bathroom with premium finishes. The final cost depends on the size of the space, the materials you select, and whether any plumbing or electrical reconfiguration is needed. We offer free consultations and written estimates with no obligation.',
      },
      {
        question: 'Can you convert my bathtub into a walk-in shower?',
        answer: 'Yes, tub-to-shower conversions are one of our most popular bathroom renovation requests. We remove the existing tub, reroute the drain and supply lines as needed, install a waterproof shower pan and custom tile surround, and add a glass door or panel for a clean, modern look. We can also incorporate accessibility features like a built-in bench, grab bars, and a handheld showerhead.',
      },
      {
        question: 'Do I need to upgrade my bathroom ventilation during a remodel?',
        answer: 'We strongly recommend it. Proper ventilation is critical in a bathroom to prevent mold growth, peeling paint, and moisture damage to drywall and framing. If your current exhaust fan is undersized, noisy, or non-functional, we can install a new, quiet fan rated for your bathroom size and vent it properly to the exterior. This is an affordable upgrade that protects your renovation investment over the long term.',
      },
    ],
    relatedSlugs: ['kitchen-renovation', 'home-repair'],
    primaryKeyword: 'bathroom renovation Lexington NC',
  },
  {
    slug: 'home-repair',
    title: 'Home Repair & Maintenance',
    shortTitle: 'Home Repair',
    category: 'repair',
    metaTitle: 'Home Repair & Handyman Services in Lexington, NC | Patriot Roofing & Home Repair',
    metaDescription: 'Reliable home repair and handyman services in Lexington, NC. Drywall, painting, doors, windows, flooring, siding, and more. Serving Greensboro, Winston-Salem, and the Piedmont Triad.',
    h1: 'Home Repair & Maintenance Services in Lexington, NC',
    intro: "Every home needs ongoing maintenance and the occasional repair, but finding a contractor you can trust for smaller jobs can be a challenge. Patriot Roofing & Home Repair fills that gap with reliable, high-quality home repair and handyman services across Lexington, NC and the Piedmont Triad. No job is too small for our team. Whether you need a drywall patch, a door that actually closes properly, or a full exterior siding repair, we show up on time, do the work right, and leave your home in better shape than we found it.",
    heroImage: '',
    heroAlt: 'Home repair professional performing maintenance work on a residential property in Lexington, North Carolina',
    features: [
      'Drywall repair, patching, and finishing for walls and ceilings',
      'Interior and exterior painting with proper surface preparation',
      'Door and window repair, replacement, and weatherstripping',
      'Hardwood, laminate, vinyl, and tile flooring repair and installation',
      'Vinyl and fiber cement siding repair and replacement',
      'General handyman services for a wide range of household projects',
    ],
    body: [
      {
        heading: 'Reliable Repairs for Every Part of Your Home',
        text: "From water-damaged drywall in the bathroom to a drafty front door that no longer seals, the list of things that need fixing in a home never seems to end. Patriot Roofing & Home Repair handles it all. Our experienced technicians are skilled in carpentry, drywall finishing, painting, flooring, and basic plumbing and electrical work, so you can address multiple issues in a single service visit instead of calling three different contractors. We work on homes of all ages, from historic properties in downtown Lexington to newer construction in Thomasville and Clemmons, and we tailor our approach to preserve the character and integrity of your home.",
      },
      {
        heading: 'Our Approach to Home Maintenance',
        text: "We believe that preventive maintenance saves homeowners money in the long run by catching small problems before they turn into expensive repairs. When we visit your home for a repair, we take the time to inspect the surrounding area and let you know if we spot any other issues that should be addressed. Rotting trim around a window, for example, is often a sign that flashing or caulk has failed and water is getting behind the siding. By fixing both the symptom and the cause, we help you avoid repeat repairs. We also offer seasonal maintenance check-ups to help keep your home in top condition year-round.",
      },
      {
        heading: 'Serving the Piedmont Triad with Honest, Affordable Service',
        text: "Patriot Roofing & Home Repair has been serving homeowners across Davidson, Guilford, Forsyth, and Randolph counties for over 15 years. We have built our business on word-of-mouth referrals, which means our reputation is everything. Every repair we perform is backed by a satisfaction guarantee, and we communicate openly about pricing so you never face a surprise bill. Whether you are in Lexington, Greensboro, Winston-Salem, High Point, Kernersville, or anywhere in between, you can count on Patriot for honest assessments, fair pricing, and work that is done right the first time.",
      },
    ],
    faqs: [
      {
        question: 'What types of home repairs do you handle?',
        answer: 'We handle a wide range of residential repairs including drywall patching and finishing, interior and exterior painting, door and window repair or replacement, flooring repairs, siding repair, trim and molding work, deck repairs, fence repairs, and general handyman tasks. If you are not sure whether a job falls within our scope, give us a call at (336) 479-6059 and we will let you know.',
      },
      {
        question: 'Is there a minimum charge for small repair jobs?',
        answer: 'We have a modest service call minimum to cover travel and setup time, but we keep it reasonable so that small repairs remain affordable. Many homeowners find it cost-effective to bundle several smaller tasks into a single visit. During your consultation, we will provide a clear quote that covers everything, so there are no surprises.',
      },
      {
        question: 'How quickly can you schedule a home repair?',
        answer: 'For non-emergency repairs, we can typically schedule a visit within one to two weeks. If you have an urgent issue such as a broken water line, a security concern like a damaged door or window, or weather-related damage, let us know and we will do our best to prioritize your repair. Our goal is to be responsive and dependable for every customer.',
      },
      {
        question: 'Do you provide free estimates for home repair work?',
        answer: 'Yes. We offer free estimates for most home repair projects. A technician will visit your property, assess the work needed, and provide a detailed written quote before any work begins. For very small jobs, we can sometimes provide an estimate over the phone based on photos you send us. There is never any obligation, and we are happy to answer questions about the scope and timeline of the repair.',
      },
    ],
    relatedSlugs: ['kitchen-renovation', 'bathroom-renovation'],
    primaryKeyword: 'home repair Lexington NC',
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slugs: string[]): ServiceData[] {
  return slugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is ServiceData => s !== undefined);
}
