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
  shoot?: string[];
  instaReels?: string;
  campaign?: {
    name: string;
    video: string;
    theme: string;
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
      { type: 'Brand Awareness', copy: 'Where Trade Policy Meets Progress.', bg: 'linear-gradient(135deg,#050B1A,#0c1e50)', link: 'https://www.instagram.com/p/C9e_d7dSkyG/?igsh=YjZzczBwZXF2MWdh', image: '/social-previews/cepa-1.jpg' },
      { type: 'Event Promotion', copy: 'Annual Trade Summit 2024 — Register Now.', bg: 'linear-gradient(135deg,#071040,#1535C8)', link: 'https://www.instagram.com/p/C9cJp4Dp1pQ/?igsh=NXQ4ZTR0cmNtb3Nj', image: '/social-previews/cepa-2.jpg' },
      { type: 'Insight Post', copy: 'How India-UAE CEPA is reshaping bilateral trade.', bg: 'linear-gradient(135deg,#08103a,#1a2d70)', link: 'https://www.instagram.com/p/C-ZYPxvyRTO/?igsh=b3B3YnVyZjRvNGN5', image: '/social-previews/cepa-3.jpg' },
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
      logo: '/brand-logos/bayroute.png',
      logoLink: 'https://drive.google.com/drive/folders/1tGqNiX--dZ_63pVDku_JLeZvjOXNAe3k',
      details: 'A premium Middle Eastern dining experience. We conducted an extensive shoot to capture the rich culinary heritage and exotic ambiance.'
    },
    shoot: [
      '/shoot/1.jpg',
      '/shoot/2.jpg',
      '/shoot/3.jpg',
      '/shoot/4.jpg',
      '/shoot/5.jpg',
      '/shoot/6.jpg'
    ]
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
    social: [],
    campaign: {
      name: '“Hyderabad After Sunset ft. Coca-Cola x LBB”',
      video: '/social-previews/cocacola-campaign.mp4',
      theme: 'Celebrating the essence of Ramadan nights in Hyderabad — where streets come alive after iftar, families gather for authentic food, and every meal feels complete with an ice-cold sip of The Coca-Cola Company. Partnering with LBB (Little Black Book) helps position it as a discovery-led food experience for audiences looking for the best Ramadan spots.'
    },
    brand: {
      name: 'Coca-Cola',
      colors: ['#E31837', '#FFFFFF', '#050B1A', '#FF5555'],
      colorNames: ['Coke Red', 'White', 'Navy', 'Light Red'],
      font: 'Inter',
      style: 'Vibrant · Authentic · Refreshing',
      logo: '/brand-logos/coca-cola.png'
    }
  },
  hyro: {
    title: 'Hyro Realty',
    category: 'Real Estate · Video · Social',
    web: null,
    social: [
      { type: 'Insta Post', copy: 'Experience the walkthrough of prime flats in South Mumbai.', bg: 'linear-gradient(135deg,#050B1A,#111a22)', link: 'https://www.instagram.com/p/DTCyx80iIxW/?img_index=4&igsh=d2pzeTVvemk2ZGRh', image: '/social-previews/hyro-insta-1.jpg' },
      { type: 'Insta Post', copy: 'Visualizing spaces with AI-powered furnishing.', bg: 'linear-gradient(135deg,#080d11,#223344)', link: 'https://www.instagram.com/p/DSb8ldgCHDS/?igsh=MWQ1cDM1OWc4aHlrdQ==', image: '/social-previews/hyro-insta-2.jpg' },
      { type: 'Insta Post', copy: 'Premium amenities that define modern living.', bg: 'linear-gradient(135deg,#06090c,#1a2633)', link: 'https://www.instagram.com/p/DSWnemSCF9V/?igsh=MXExeWZxeTRkanhyaw==', image: '/social-previews/hyro-insta-3.jpg' }
    ],
    instaReels: 'https://drive.google.com/drive/folders/1NTW29_J-0m97_OsMKNkkb9DHT6nF_ywi?usp=sharing',
    brand: {
      name: 'Hyro Realty',
      colors: ['#223344', '#E6ECF8', '#050B1A', '#557799'],
      colorNames: ['Slate', 'Light', 'Navy', 'Steel'],
      font: 'Plus Jakarta Sans',
      style: 'Modern · Premium · Innovative',
      logo: '/brand-logos/hyro.jpg',
      details: 'The reel concept focused on creating visually engaging walkthroughs of premium flats in South Mumbai, featuring both newly launched and upcoming residential properties.\n\nThe idea was to move beyond standard empty flat walkthroughs by integrating AI-powered virtual furnishing, which transformed vacant spaces into fully styled interiors. This helped potential buyers visualize how the apartments could look once furnished, making the spaces feel more aspirational, warm, and livable.\n\nThe reels highlighted:\n• Detailed flat walkthroughs showcasing layout, space, and design elements\n• AI-generated furnished versions of empty rooms to provide a realistic lifestyle preview\n• Building amenities such as gyms, pools, lounges, parking spaces, terraces, and other premium facilities\n• Location and project highlights to position the properties as desirable investments in South Mumbai\n\nThe overall objective was to create reels that felt modern, immersive, and informative, helping audiences better imagine themselves living in these luxury spaces while also showcasing the full value of the property.'
    }
  },
  antariksh: {
    title: 'Antariksh Diamonds',
    category: 'Jewellery · Social Media · Branding',
    web: null,
    social: [
      { type: 'Collection Showcase', copy: 'Brilliance that outshines the stars.', bg: 'linear-gradient(135deg,#050B1A,#1a1a22)', link: 'https://www.instagram.com/p/DITgzuBv22T/?igsh=MWZnZDE4MnA1NjExNw==', image: '/social-previews/antariksh-1.jpg' },
      { type: 'Craftsmanship Reel', copy: 'Every facet tells a story of perfection.', bg: 'linear-gradient(135deg,#0d0d11,#333344)', link: 'https://www.instagram.com/reel/DIRKNm4PuFW/?igsh=MWJsNWgxZnpyMDY0dA==', image: '/social-previews/antariksh-2.jpg' },
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

