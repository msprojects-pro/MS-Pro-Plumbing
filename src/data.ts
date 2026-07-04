import { ServiceItem, TestimonialItem, GalleryItem } from './types';

export const servicesData: ServiceItem[] = [
  {
    id: 'boiler',
    title: 'Boiler Installation & Repairs',
    description: 'Gas Safe registered technicians providing expert diagnostics, repairs, and energy-efficient new boiler installations with long-term warranties.',
    longDescription: 'Our Gas Safe certified engineers specialise in both rapid breakdown resolution and energy-efficient system upgrades. We work with leading manufacturers like Worcester Bosch, Vaillant, and Baxi to offer up to 12-year manufacturer warranties. From heat exchanger replacements to complete system design, we ensure reliable, high-performance central heating tailored to your budget.',
    iconName: 'Flame'
  },
  {
    id: 'heating',
    title: 'Central Heating Systems',
    description: 'Design, repair, and power flushing of central heating setups to ensure maximum warmth and energy-efficiency throughout your home.',
    longDescription: 'We provide comprehensive central heating services, including system upgrades, heating controls (smart thermostats), zone valve repairs, and full central heating installations. We offer specialist power flushing to clear sludge and rust, dramatically improving your system\'s efficiency and reducing your monthly energy bills.',
    iconName: 'Thermometer'
  },
  {
    id: 'gas',
    title: 'Gas Appliance Servicing',
    description: 'Comprehensive annual safety inspections, cooker & hob installations, and landlord gas safety certificates (CP12).',
    longDescription: 'Safety is our absolute priority. We perform thorough servicing of boilers, gas fires, hobs, and water heaters to ensure safe operation and prevent carbon monoxide hazards. We also work with local UK landlords to provide fully certified Landlord Gas Safety Audits (CP12 certificates) with digital reporting for quick compliance.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'emergency',
    title: 'General Plumbing & Emergencies',
    description: 'Rapid-response emergency repair services for burst pipes, blockages, leaks, and general hardware plumbing fixes.',
    longDescription: 'Plumbing crises don\'t wait, and neither do we. Our team is fully equipped to handle emergency call-outs across the local area—from major water leaks and burst mains to blocked toilets and sinks. We carry standard replacement valves, pipe fittings, and gaskets on our vans to ensure same-day fixes whenever possible.',
    iconName: 'Wrench'
  },
  {
    id: 'bathroom',
    title: 'Bathroom Plumbing & Installations',
    description: 'Transformative full bathroom installations, shower upgrades, premium tap replacement, and custom sanitary ware pipework.',
    longDescription: 'From a simple, high-pressure thermostatic shower upgrade to full-scale bathroom remodeling, we coordinate every detail of the plumbing install. We ensure flawless water flow, proper drainage ventilation, and professional sealing of all luxury sanitary ware and modern freestanding bathtubs.',
    iconName: 'ShowerHead'
  },
  {
    id: 'hotwater',
    title: 'Hot Water Systems',
    description: 'Installation and servicing of unvented cylinders, traditional gravity-fed water cylinders, and modern direct-hot-water pumps.',
    longDescription: 'Enjoy high-pressure hot water from every shower and tap in your home. We install and maintain unvented hot water cylinders (such as Megaflo systems), which run directly from your mains pressure to provide exceptional, reliable performance without requiring cold water tanks in your loft.',
    iconName: 'Droplet'
  },
  {
    id: 'radiator',
    title: 'Radiator Installation & Repairs',
    description: 'Modern radiator upgrades, thermostatic radiator valve (TRV) installations, leak resolutions, and efficient balancing.',
    longDescription: 'Upgrade your home\'s style and heating efficiency with designer vertical radiators, sleek flat panels, or classic column models. We install accurate, energy-saving Thermostatic Radiator Valves (TRVs) and balance the system flow to ensure every room heats up evenly and quickly.',
    iconName: 'Tv2'
  },
  {
    id: 'leak',
    title: 'Leak Detection & Maintenance',
    description: 'Non-invasive leak detection, thermal imaging, pipe insulation, and preventive system maintenance.',
    longDescription: 'Undetected leaks can cause severe, costly structural damage to your home. We use non-invasive acoustic testing and advanced thermal cameras to pinpoint hidden pipe leaks behind walls or underneath concrete floors, resolving the issue quickly with minimal disruption to your decor.',
    iconName: 'Search'
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Mark Henderson',
    location: 'Manchester, UK',
    rating: 5,
    text: 'MS Pro did an outstanding job replacing our ancient combi boiler. They were polite, tidy, and got the heating running within a single day. Price was exactly as quoted, and the workmanship is absolutely flawless. Highly recommend!',
    date: 'June 2026'
  },
  {
    id: 't2',
    name: 'Sarah Jenkins',
    location: 'Salford, UK',
    rating: 5,
    text: 'Had an emergency water leak under the kitchen floor on a Friday evening. Called MS Pro and they arrived within 45 minutes. Found the leaking copper pipe, repaired it in no time, and saved our flooring from water damage. Brilliant service!',
    date: 'May 2026'
  },
  {
    id: 't3',
    name: 'David & Helen Vance',
    location: 'Stockport, UK',
    rating: 5,
    text: 'We hired MS Pro to plumb our complete bathroom remodel. The thermostatic rainfall shower, the floating vanity basin, and the designer vertical radiator are installed perfectly. Highly professional, Gas Safe qualified, and super reliable.',
    date: 'April 2026'
  },
  {
    id: 't4',
    name: 'Robert Collins',
    location: 'Altrincham, UK',
    rating: 5,
    text: 'Excellent service for my annual landlord gas safety inspection. Prompt arrival, comprehensive check-out, and the digital CP12 certificate was emailed straight to me and my tenant within an hour. Professional and honest pricing.',
    date: 'March 2026'
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Premium Combi Boiler Install',
    category: 'boiler',
    imageUrl: '/images/boiler_repair.jpg', // Clean public path
    description: 'Complete combi boiler system installation with professional copper pipework and vertical magnetic scale filter.'
  },
  {
    id: 'g2',
    title: 'Luxury Walk-In Bathroom Install',
    category: 'bathroom',
    imageUrl: '/images/bathroom_install.jpg', // Clean public path
    description: 'Bespoke modern bathroom featuring a high-pressure rainfall shower and sleek wall-hung sanitary ware.'
  },
  {
    id: 'g3',
    title: 'Professional Pipe Alignment',
    category: 'heating',
    imageUrl: '/images/hero_boiler_plumbing.jpg', // Clean public path
    description: 'Custom copper piping and premium flow manifolds for multi-zone underfloor and radiator heating.'
  },
  {
    id: 'g4',
    title: 'Modern Tiled Bathroom Plumbing',
    category: 'bathroom',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    description: 'Plumbing and leak-proofing of custom brass thermostatic valves in a master bathroom suite.'
  },
  {
    id: 'g5',
    title: 'Sleek Radiator & Smart TRV Upgrade',
    category: 'heating',
    imageUrl: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=800&q=80',
    description: 'Designer matte charcoal radiator installation with high-efficiency thermostatic temperature valve.'
  },
  {
    id: 'g6',
    title: 'Luxury Kitchen Tap Plumbing',
    category: 'plumbing',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    description: 'Installation of a high-end pull-out spring mixer tap with under-sink pressure regulator and flexible copper tails.'
  }
];
