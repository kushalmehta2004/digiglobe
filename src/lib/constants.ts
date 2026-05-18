export type ProjectData = {
  title: string;
  category: string;
  web: {
    url: string;
    title: string;
    desc: string;
    color?: string;
    gradient: string;
    meta: { l: string; v: string }[];
  } | null;
  social: {
    type: string;
    copy: string;
    bg: string;
    link?: string;
    image?: string;
    video?: string;
  }[];
  brand: {
    name: string;
    colors: string[];
    colorNames: string[];
    font: string;
    style: string;
    logo?: string;
    logoLink?: string;
    details?: string;
  };
};

export const PROJECTS: Record<string, ProjectData> = {
  cepa: {
    title: 'CEPA Council',
    category: 'B2B · Policy · Branding',
    web: {
      url: 'cepacouncil.com',
      title: 'Government Policy Portal',
      desc: 'A flagship B2B web platform for CEPA Council, designed for credibility and authority. Clean information architecture, clear user journeys, and a powerful brand presence.',
      color: 'from #0c1530 to #0f1e45',
      gradient: 'radial-gradient(ellipse at 60% 30%,rgba(52,97,255,.3) 0%,#050B1A 70%)',
      meta: [{ l: 'Industry', v: 'Policy / Trade' }, { l: 'Market', v: 'India & UAE' }, { l: 'Deliverables', v: 'Web + Branding' }]
    },
    social: [
      { type: 'Brand Awareness', copy: 'Where Trade Policy Meets Progress.', bg: 'linear-gradient(135deg,#050B1A,#0c1e50)', link: 'https://www.instagram.com/p/DU5r6YGE51F/?igsh=MTVtbWZrODV5ZjBmZg==', image: '/social-previews/cepa-1.jpg' },
      { type: 'Event Promotion', copy: 'Annual Trade Summit 2024 — Register Now.', bg: 'linear-gradient(135deg,#071040,#1535C8)', link: 'https://www.instagram.com/reel/DVBEOCagRj8/?igsh=MTR2ZHZ4NWNkajYzbA==', video: '/social-previews/cepa-2.mp4' },
      { type: 'Insight Post', copy: 'How India-UAE CEPA is reshaping bilateral trade.', bg: 'linear-gradient(135deg,#08103a,#1a2d70)', link: 'https://www.instagram.com/p/DVtQmhtE8Zl/?igsh=ZWs1ZHVyd3Z3Mmtz', image: '/social-previews/cepa-3.jpg' },
    ],
    brand: {
      name: 'CEPA Council',
      colors: ['#1535C8', '#050B1A', '#FFFFFF', '#E6ECF8'],
      colorNames: ['Royal Blue', 'Navy', 'White', 'Off-White'],
      font: 'Plus Jakarta Sans',
      style: 'Corporate · Authoritative · Global',
      logo: '/brand-logos/cepa.jpg'
    }
  },
  genex: {
    title: 'Genex Pharma',
    category: 'Healthcare · Web Design · Identity',
    web: {
      url: 'genexpharma.co.in',
      title: 'Pharmaceutical Brand Website',
      desc: 'A trust-first digital presence for a pharmaceutical manufacturer. Designed to communicate clinical excellence, regulatory compliance, and product portfolio with clarity.',
      gradient: 'radial-gradient(ellipse at 40% 60%,rgba(21,53,200,.2) 0%,#050B1A 70%)',
      meta: [{ l: 'Industry', v: 'Healthcare / Pharma' }, { l: 'Market', v: 'India' }, { l: 'Deliverables', v: 'Web + Branding' }]
    },
    social: [
      { type: 'Product Launch', copy: 'Introducing our new pharmaceutical range — trusted by doctors nationwide.', bg: 'linear-gradient(135deg,#050B1A,#0B1630)' },
      { type: 'Awareness', copy: 'Your health, our commitment. 25 years of pharmaceutical excellence.', bg: 'linear-gradient(135deg,#071228,#1535C8)' },
      { type: 'CSR Post', copy: 'Bringing quality healthcare to communities across India.', bg: 'linear-gradient(135deg,#050F30,#0c1d5a)' },
    ],
    brand: { name: 'Genex Pharma', colors: ['#1535C8', '#FFFFFF', '#050B1A', '#3461FF'], colorNames: ['Blue', 'White', 'Navy', 'Accent'], font: 'Plus Jakarta Sans', style: 'Clinical · Trusted · Professional' }
  },
  nrich: {
    title: 'Nrich Skyotel',
    category: 'Hospitality · Web · Social Media',
    web: {
      url: 'nrichskyotel.com',
      title: 'Boutique Hotel Website',
      desc: 'An immersive hospitality web experience that converts browsers into bookers. Stunning visuals, seamless room booking flow, and a brand story guests actually read.',
      gradient: 'radial-gradient(ellipse at 70% 40%,rgba(91,130,255,.2) 0%,#050B1A 70%)',
      meta: [{ l: 'Industry', v: 'Hospitality' }, { l: 'Market', v: 'India' }, { l: 'Deliverables', v: 'Web + Social + Photos' }]
    },
    social: [
      { type: 'Lifestyle', copy: 'Wake up to views that take your breath away. Book your stay.', bg: 'linear-gradient(135deg,#050B1A,#111D3E)' },
      { type: 'Offer', copy: 'Weekend Getaway Package — 20% Off This Month Only.', bg: 'linear-gradient(135deg,#071228,#1535C8)' },
      { type: 'Review', copy: '"Best hotel experience in the city." — Our Guests.', bg: 'linear-gradient(135deg,#08103a,#0c1d5a)' },
    ],
    brand: { name: 'Nrich Skyotel', colors: ['#1535C8', '#E6ECF8', '#050B1A', '#5B82FF'], colorNames: ['Blue', 'Light', 'Navy', 'Sky'], font: 'Plus Jakarta Sans', style: 'Luxury · Warm · Aspirational' }
  },
  asian: {
    title: 'Asian Diamonds EU',
    category: 'Luxury E-commerce · Europe · Branding',
    web: {
      url: 'asiandiamonds.eu',
      title: 'Luxury Diamond E-commerce',
      desc: 'A premium European e-commerce platform for bespoke diamond jewellery. Crafted for a luxury audience with immaculate product presentation and seamless purchase experience.',
      gradient: 'radial-gradient(ellipse at 50% 30%,rgba(30,69,224,.25) 0%,#050B1A 70%)',
      meta: [{ l: 'Industry', v: 'Luxury / Jewellery' }, { l: 'Market', v: 'Europe' }, { l: 'Deliverables', v: 'E-com + Branding' }]
    },
    social: [
      { type: 'Product Showcase', copy: 'Eternal brilliance, crafted to perfection. Explore our collection.', bg: 'linear-gradient(135deg,#050B1A,#0c1530)' },
      { type: 'Brand Story', copy: 'From Asia to Europe — bringing heritage craftsmanship to the world.', bg: 'linear-gradient(135deg,#08103a,#1535C8)' },
      { type: 'Occasion', copy: 'Celebrate every milestone with a diamond that lasts forever.', bg: 'linear-gradient(135deg,#050B1A,#111D3E)' },
    ],
    brand: { name: 'Asian Diamonds EU', colors: ['#1535C8', '#E6ECF8', '#050B1A', '#B8C8F8'], colorNames: ['Royal', 'Pearl', 'Navy', 'Ice'], font: 'Plus Jakarta Sans', style: 'Luxury · Refined · Timeless' }
  },
  subham: {
    title: 'Subham Construction',
    category: 'Real Estate · Web Design · Social Media',
    web: {
      url: 'subhamconstruction.com',
      title: 'Real Estate Developer Website',
      desc: 'A credibility-first web presence for a growing construction firm. Project showcase, testimonials, and a lead capture system designed to convert serious buyers.',
      gradient: 'radial-gradient(ellipse at 30% 60%,rgba(52,97,255,.2) 0%,#050B1A 70%)',
      meta: [{ l: 'Industry', v: 'Real Estate' }, { l: 'Market', v: 'India' }, { l: 'Deliverables', v: 'Web + Social' }]
    },
    social: [
      { type: 'Project Launch', copy: 'Presenting our newest residential township — where families thrive.', bg: 'linear-gradient(135deg,#050B1A,#0B1630)' },
      { type: 'Milestone', copy: '500+ families now call Subham home. Thank you for your trust.', bg: 'linear-gradient(135deg,#071228,#1535C8)' },
      { type: 'Testimonial', copy: '"The best investment decision we ever made." — Happy Homeowner.', bg: 'linear-gradient(135deg,#050B1A,#111D3E)' },
    ],
    brand: { name: 'Subham Construction', colors: ['#1535C8', '#FFFFFF', '#050B1A', '#3461FF'], colorNames: ['Blue', 'White', 'Navy', 'Accent'], font: 'Plus Jakarta Sans', style: 'Trustworthy · Bold · Community' }
  },
  sanghvi: {
    title: 'Sanghvi Star',
    category: 'Manufacturing · Branding · Web',
    web: {
      url: 'sanghvistar.com',
      title: 'Manufacturing Company Website',
      desc: 'A professional digital presence for a manufacturing leader. Showcases product range, capabilities, certifications, and a strong B2B enquiry system.',
      gradient: 'radial-gradient(ellipse at 60% 40%,rgba(21,53,200,.2) 0%,#050B1A 70%)',
      meta: [{ l: 'Industry', v: 'Manufacturing' }, { l: 'Market', v: 'India' }, { l: 'Deliverables', v: 'Web + Branding' }]
    },
    social: [
      { type: 'Product Feature', copy: 'Precision engineered. Built to perform. Explore our range.', bg: 'linear-gradient(135deg,#050B1A,#0c1530)' },
      { type: 'Certification', copy: 'ISO Certified. Industry trusted. Quality never compromised.', bg: 'linear-gradient(135deg,#071228,#1535C8)' },
      { type: 'Company Post', copy: '30 years of manufacturing excellence. The Sanghvi Star legacy continues.', bg: 'linear-gradient(135deg,#050B1A,#111D3E)' },
    ],
    brand: { name: 'Sanghvi Star', colors: ['#1535C8', '#E6ECF8', '#050B1A', '#5B82FF'], colorNames: ['Blue', 'Light', 'Navy', 'Accent'], font: 'Plus Jakarta Sans', style: 'Industrial · Reliable · Established' }
  },
  ttl: {
    title: 'The Travel Library',
    category: 'Luxury Travel · Brand Identity · Website · Social Media',
    web: {
      url: 'thetravellibrary.in',
      title: 'Luxury Travel Agency — Beyond Experience',
      desc: 'A full-brand build for a luxury travel agency — combining an elegant visual identity, a bespoke website with destination showcases, and a refined social media presence. Built to attract discerning travellers seeking private, curated experiences.',
      gradient: 'linear-gradient(160deg,#0D1220 0%,#1D2439 60%,#131825 100%)',
      meta: [{ l: 'Industry', v: 'Luxury Travel' }, { l: 'Deliverables', v: 'Brand + Web + Social' }, { l: 'Live at', v: 'thetravellibrary.in' }]
    },
    social: [
      { type: 'Brand Launch', copy: 'Beyond Experience. The Travel Library — redefining luxury travel, one journey at a time.', bg: 'linear-gradient(160deg,#1D2439,#0D1220)' },
      { type: 'Destination Reel', copy: 'Maldives. Private villa. No itinerary. Just you and the horizon.', bg: 'linear-gradient(160deg,#0D1A2E,#1D2439)' },
      { type: 'Service Highlight', copy: 'Private jets. Yacht charters. Michelin-starred picnics. Your wish, curated.', bg: 'linear-gradient(160deg,#131825,#2a3352)' },
    ],
    brand: {
      name: 'The Travel Library',
      colors: ['#1D2439', '#D2BB95', '#F4F2F0', '#AB8F71'],
      colorNames: ['Navy', 'Gold', 'Ivory', 'Deep Gold'],
      font: 'Butler (Headers) · Montserrat (Body)',
      style: 'Luxury · Refined · Bespoke · Timeless'
    }
  },
  dressingroom: {
    title: 'The Dressing Room',
    category: 'Fashion · Social Media · Branding',
    web: null,
    social: [
      { type: 'Fashion Reel', copy: 'Elevate your everyday style with our new collection.', bg: 'linear-gradient(135deg,#050B1A,#1a1122)', link: 'https://www.instagram.com/p/DU5r6YGE51F/?igsh=MTVtbWZrODV5ZjBmZg==', image: '/social-previews/dressingroom-1.jpg' },
      { type: 'Showcase', copy: 'Details that define you.', bg: 'linear-gradient(135deg,#0d0811,#332244)', link: 'https://www.instagram.com/reel/DVBEOCagRj8/?igsh=MTR2ZHZ4NWNkajYzbA==', video: '/social-previews/dressingroom-2.mp4' },
      { type: 'Style Inspiration', copy: 'Where elegance meets comfort.', bg: 'linear-gradient(135deg,#110a1a,#221133)', link: 'https://www.instagram.com/p/DVtQmhtE8Zl/?igsh=ZWs1ZHVyd3Z3Mmtz', image: '/social-previews/dressingroom-3.jpg' }
    ],
    brand: {
      name: 'The Dressing Room',
      colors: ['#332244', '#E6ECF8', '#050B1A', '#9977AA'],
      colorNames: ['Plum', 'Light', 'Navy', 'Lavender'],
      font: 'Playfair Display',
      style: 'Chic · Elegant · Contemporary',
      logo: '/brand-logos/dressingroom.png',
      logoLink: 'https://drive.google.com/drive/folders/1f0p83XUeZIc-MvvY-HaACMIQAae4i_LB?usp=drive_link',
      details: 'A premium fashion brand focusing on chic, contemporary wear for women. The branding reflects elegance and modern aesthetics.'
    }
  },
  durfshan: {
    title: 'Durfshan',
    category: 'Ethnic Wear · Social Media · Branding',
    web: null,
    social: [
      { type: 'Collection Launch', copy: 'Tradition woven with modern threads.', bg: 'linear-gradient(135deg,#050B1A,#1a1c11)', link: 'https://www.instagram.com/p/DTCkuKVCYxH/?igsh=bWxsaDVvdzRvNDNu', image: '/social-previews/durfshan-1.webp' },
      { type: 'Festive Edit', copy: 'Celebrate every moment in timeless grace.', bg: 'linear-gradient(135deg,#11130d,#333a22)', link: 'https://www.instagram.com/p/DRCLJYiiaaV/?igsh=ZnZ5ZmM3c2dnd2c3', image: '/social-previews/durfshan-2.webp' },
      { type: 'Craftsmanship', copy: 'Handcrafted perfection for your special days.', bg: 'linear-gradient(135deg,#0a0c08,#222611)', link: 'https://www.instagram.com/p/DUcsg-OiJm_/?igsh=djhoZnQzczFnb3Nj', image: '/social-previews/durfshan-3.webp' }
    ],
    brand: {
      name: 'Durfshan',
      colors: ['#333a22', '#F4F2F0', '#050B1A', '#889955'],
      colorNames: ['Olive', 'Ivory', 'Navy', 'Sage'],
      font: 'Cormorant Garamond',
      style: 'Traditional · Graceful · Handcrafted',
      logo: '/brand-logos/durfshan.png',
      logoLink: 'https://drive.google.com/drive/folders/1MCGFW7tWOPhlxR-rCxrsMhOz7QpOkzwz?usp=sharing',
      details: 'An ethnic wear brand that blends traditional Indian craftsmanship with modern silhouettes. The visual identity emphasizes timeless grace.'
    }
  },
  bayroute: {
    title: 'Bayroute',
    category: 'F&B · Photography · Branding',
    web: null,
    social: [
      { type: 'Culinary Journey', copy: 'Experience the authentic taste of the Middle East.', bg: 'linear-gradient(135deg,#050B1A,#221100)' },
      { type: 'Ambiance', copy: 'A dining experience designed to transport you.', bg: 'linear-gradient(135deg,#110800,#442200)' },
      { type: 'Signature Dish', copy: 'Flavors that tell a story.', bg: 'linear-gradient(135deg,#0c0600,#331a00)' }
    ],
    brand: {
      name: 'Bayroute',
      colors: ['#442200', '#F4F2F0', '#050B1A', '#D2BB95'],
      colorNames: ['Mocha', 'Ivory', 'Navy', 'Gold'],
      font: 'Montserrat',
      style: 'Exotic · Rich · Authentic',
      logoLink: 'https://drive.google.com/drive/folders/1tGqNiX--dZ_63pVDku_JLeZvjOXNAe3k',
      details: 'A premium Middle Eastern dining experience. We conducted an extensive shoot to capture the rich culinary heritage and exotic ambiance.'
    }
  },
  utopianvillas: {
    title: 'Utopian Villas',
    category: 'Hospitality · Web · Social Media',
    web: {
      url: 'utopianvillas.in',
      title: 'Luxury Villa Rentals',
      desc: 'A serene getaway destination showcasing premium villas for rent. The digital presence highlights the exclusivity and tranquility of the properties.',
      gradient: 'radial-gradient(ellipse at 40% 60%,rgba(50,200,150,.2) 0%,#050B1A 70%)',
      meta: [{ l: 'Industry', v: 'Hospitality' }, { l: 'Market', v: 'India' }, { l: 'Deliverables', v: 'Web + Social' }]
    },
    social: [
      { type: 'Property Tour', copy: 'Your private paradise awaits.', bg: 'linear-gradient(135deg,#050B1A,#002211)', link: 'https://www.instagram.com/p/DI3q-kKspN8/?igsh=MTRuc211Nnh4bDlsNQ==', image: '/social-previews/utopian-1.png' },
      { type: 'Staycation', copy: 'Unwind in the lap of luxury.', bg: 'linear-gradient(135deg,#001108,#004422)', link: 'https://www.instagram.com/p/DLcSC-KMV4o/?igsh=MWhub2ZjY245ZjM5NQ==', image: '/social-previews/utopian-2.png' },
      { type: 'Guest Experience', copy: 'Memories that last a lifetime.', bg: 'linear-gradient(135deg,#000c06,#00331a)', link: 'https://www.instagram.com/p/DIi-OUNzOuC/?igsh=MXFlYjdnMTBkb25iZg==', image: '/social-previews/utopian-3.png' }
    ],
    brand: {
      name: 'Utopian Villas',
      colors: ['#004422', '#E6ECF8', '#050B1A', '#55AA77'],
      colorNames: ['Forest', 'Light', 'Navy', 'Mint'],
      font: 'Plus Jakarta Sans',
      style: 'Serene · Exclusive · Luxurious',
      logo: '/brand-logos/utopianvillas.png',
      logoLink: 'https://drive.google.com/drive/folders/1-Fci_j6eCO8K1W9rP0fPWhDbGVAhK4HQ?usp=drive_link',
      details: 'Exclusive luxury villa rentals offering premium hospitality. The branding focuses on serenity, escape, and high-end living.'
    }
  },
  cocacola: {
    title: 'Coca-Cola',
    category: 'F&B · Campaign · Video',
    web: null,
    social: [
      { type: 'Campaign Reel', copy: 'Hyderabad After Sunset ft. Coca-Cola x LBB', bg: 'linear-gradient(135deg,#050B1A,#330000)', link: 'https://drive.google.com/drive/folders/16SvUUryxM5aF0aLDKC2ddaXeAIvYCrRC?usp=drive_link' },
      { type: 'Brand Story', copy: 'Real Magic in every sip.', bg: 'linear-gradient(135deg,#1a0000,#440000)' },
      { type: 'Food Pairing', copy: 'The perfect companion for your iftar.', bg: 'linear-gradient(135deg,#0c0000,#220000)' }
    ],
    brand: {
      name: 'Coca-Cola',
      colors: ['#E31837', '#FFFFFF', '#050B1A', '#FF5555'],
      colorNames: ['Coke Red', 'White', 'Navy', 'Light Red'],
      font: 'Inter',
      style: 'Vibrant · Authentic · Refreshing',
      details: 'Campaign Name: “Hyderabad After Sunset ft. Coca-Cola x LBB”\n\nTheme: Celebrating the essence of Ramadan nights in Hyderabad — where streets come alive after iftar, families gather for authentic food, and every meal feels complete with an ice-cold sip of The Coca-Cola Company. Partnering with LBB (Little Black Book) helps position it as a discovery-led food experience for audiences looking for the best Ramadan spots.'
    }
  },
  hyro: {
    title: 'Hyro Realty',
    category: 'Real Estate · Video · Social',
    web: null,
    social: [
      { type: 'Property Walkthrough', copy: 'Step into luxury living in South Mumbai.', bg: 'linear-gradient(135deg,#050B1A,#111a22)', link: 'https://www.instagram.com/hyro_realty?igsh=c3kzdnp3bjV2cmhw' },
      { type: 'Virtual Furnishing', copy: 'Imagine your life, fully styled.', bg: 'linear-gradient(135deg,#080d11,#223344)' },
      { type: 'Amenities', copy: 'Experience world-class facilities at your doorstep.', bg: 'linear-gradient(135deg,#06090c,#1a2633)' }
    ],
    brand: {
      name: 'Hyro Realty',
      colors: ['#223344', '#E6ECF8', '#050B1A', '#557799'],
      colorNames: ['Slate', 'Light', 'Navy', 'Steel'],
      font: 'Plus Jakarta Sans',
      style: 'Modern · Premium · Innovative',
      logo: '/brand-logos/hyro.jpg',
      details: 'The reel concept focused on creating visually engaging walkthroughs of premium flats in South Mumbai, featuring both newly launched and upcoming residential properties.\n\nThe idea was to move beyond standard empty flat walkthroughs by integrating AI-powered virtual furnishing, which transformed vacant spaces into fully styled interiors. This helped potential buyers visualize how the apartments could look once furnished, making the spaces feel more aspirational, warm, and livable.\n\nThe reels highlighted: Detailed flat walkthroughs, AI-generated furnished versions, Building amenities, Location and project highlights.'
    }
  },
  antariksh: {
    title: 'Antariksh Diamonds',
    category: 'Jewellery · Social Media · Branding',
    web: null,
    social: [
      { type: 'Collection Showcase', copy: 'Brilliance that outshines the stars.', bg: 'linear-gradient(135deg,#050B1A,#1a1a22)', link: 'https://www.instagram.com/p/DITgzuBv22T/?igsh=MWZnZDE4MnA1NjExNw==', image: '/social-previews/antariksh-1.jpg' },
      { type: 'Craftsmanship Reel', copy: 'Every facet tells a story of perfection.', bg: 'linear-gradient(135deg,#0d0d11,#333344)', link: 'https://www.instagram.com/reel/DIRKNm4PuFW/?igsh=MWJsNWgxZnpyMDY0dA==', video: '/social-previews/antariksh-2.mp4' },
      { type: 'Statement Pieces', copy: 'Adorn yourself in timeless luxury.', bg: 'linear-gradient(135deg,#09090c,#222233)', link: 'https://www.instagram.com/p/DIB3mW7vvme/?igsh=MXZmenUyanhzb2MxZg==', image: '/social-previews/antariksh-3.jpg' }
    ],
    brand: {
      name: 'Antariksh',
      colors: ['#333344', '#F4F2F0', '#050B1A', '#888899'],
      colorNames: ['Charcoal', 'Ivory', 'Navy', 'Silver'],
      font: 'Playfair Display',
      style: 'Luxurious · Brilliant · Timeless',
      logo: '/brand-logos/antariksh.jpg',
      details: 'A luxury diamond jewellery brand emphasizing exquisite craftsmanship and timeless designs. The social presence is curated to showcase the brilliance of their statement pieces.'
    }
  }
};

