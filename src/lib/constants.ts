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
  smmPosts?: { id: string; name: string; type: string; link: string }[][];
  smmDriveLink?: string;
  tabs?: string[];
  magazines?: { name: string; link: string; id: string }[];
  conceptText?: string;
};

export const BUNKOUT_SMM_POSTS = [
  [
    {
      id: '1Fq0JMg9_LkCNDggYFfVCaNfoU-HuIlJr',
      name: 'row 1 post 1 a',
      type: 'image',
      link: 'https://drive.google.com/file/d/1Fq0JMg9_LkCNDggYFfVCaNfoU-HuIlJr/view?usp=drive_web'
    },
    {
      id: '1HD9mvlnWw29HDbekUBzLX8PBomJW82ZE',
      name: 'row 1 post 1 b',
      type: 'image',
      link: 'https://drive.google.com/file/d/1HD9mvlnWw29HDbekUBzLX8PBomJW82ZE/view?usp=drive_web'
    },
    {
      id: '1gNse3BRX24YlKRf93pDCnEHh-5RXmhHA',
      name: 'row 1 post 1 c',
      type: 'image',
      link: 'https://drive.google.com/file/d/1gNse3BRX24YlKRf93pDCnEHh-5RXmhHA/view?usp=drive_web'
    },
    {
      id: '1eAnRkzo3JPCxwbxSv-j1RJTsQdgM84_z',
      name: 'row 1 post 1 d',
      type: 'image',
      link: 'https://drive.google.com/file/d/1eAnRkzo3JPCxwbxSv-j1RJTsQdgM84_z/view?usp=drive_web'
    },
    {
      id: '1KORmNbVBooAMSy5ootNrOTZM7_2FH2wI',
      name: 'row 1 post 1 e',
      type: 'image',
      link: 'https://drive.google.com/file/d/1KORmNbVBooAMSy5ootNrOTZM7_2FH2wI/view?usp=drive_web'
    },
    {
      id: '1nHQQpd3-iWsJAH0CsCuBG-n1nYkNsJCW',
      name: 'row 1 post 1 f',
      type: 'image',
      link: 'https://drive.google.com/file/d/1nHQQpd3-iWsJAH0CsCuBG-n1nYkNsJCW/view?usp=drive_web'
    },
  ],
  [
    {
      id: '1yve5H4tTD8tSwPvN_UeuXISTCg3WaRnC',
      name: 'row 1 post 2 a',
      type: 'image',
      link: 'https://drive.google.com/file/d/1yve5H4tTD8tSwPvN_UeuXISTCg3WaRnC/view?usp=drive_web'
    },
    {
      id: '1mNDr4sFHraeoU1rci-ElP0mHab7MphEZ',
      name: 'row 1 post 2',
      type: 'image',
      link: 'https://drive.google.com/file/d/1mNDr4sFHraeoU1rci-ElP0mHab7MphEZ/view?usp=drive_web'
    },
    {
      id: '1HHV3zsEAkqshmzFC4JiTWoUCwscYRUx5',
      name: 'row 1 post 2 b',
      type: 'image',
      link: 'https://drive.google.com/file/d/1HHV3zsEAkqshmzFC4JiTWoUCwscYRUx5/view?usp=drive_web'
    },
    {
      id: '1S9tuJ8x6_ufe8NxrgT0i62jl7LyE_1oM',
      name: 'row 1 post 2 c',
      type: 'image',
      link: 'https://drive.google.com/file/d/1S9tuJ8x6_ufe8NxrgT0i62jl7LyE_1oM/view?usp=drive_web'
    },
    {
      id: '14eTVbLN3i_MUQUrZfsfeYmIEYtlBB7cu',
      name: 'row 1 post 2 d',
      type: 'image',
      link: 'https://drive.google.com/file/d/14eTVbLN3i_MUQUrZfsfeYmIEYtlBB7cu/view?usp=drive_web'
    },
    {
      id: '1dXMhoH5khkk697IqRDjjeWhzZgSyWmoc',
      name: 'row 1 post 2 e',
      type: 'image',
      link: 'https://drive.google.com/file/d/1dXMhoH5khkk697IqRDjjeWhzZgSyWmoc/view?usp=drive_web'
    },
  ],
  [
    {
      id: '1JhaBgpZB9zDAnb0EWHYvHan84ifkKh5i',
      name: 'ROW 1 POST 3',
      type: 'video',
      link: 'https://drive.google.com/file/d/1JhaBgpZB9zDAnb0EWHYvHan84ifkKh5i/view?usp=drive_web'
    },
  ],
  [
    {
      id: '1x3Kef3TdextJ8kXMlbxpdeRfQUuyXPPG',
      name: 'Row 2 Post 4',
      type: 'video',
      link: 'https://drive.google.com/file/d/1x3Kef3TdextJ8kXMlbxpdeRfQUuyXPPG/view?usp=drive_web'
    },
  ],
  [
    {
      id: '1umZRcaxZxohrW9W9z9LmeEQIov9km0aC',
      name: 'Row 2 Post 5 a',
      type: 'image',
      link: 'https://drive.google.com/file/d/1umZRcaxZxohrW9W9z9LmeEQIov9km0aC/view?usp=drive_web'
    },
    {
      id: '1SWwIQz2rxYZmpGoEhQ3PrgmiDfOLCuez',
      name: 'Row 2 Post 5',
      type: 'image',
      link: 'https://drive.google.com/file/d/1SWwIQz2rxYZmpGoEhQ3PrgmiDfOLCuez/view?usp=drive_web'
    },
    {
      id: '1ALrcK5tWRDeEVC6GRg0LjvWbDHEd9Avb',
      name: 'Row 2 Post 5 b',
      type: 'image',
      link: 'https://drive.google.com/file/d/1ALrcK5tWRDeEVC6GRg0LjvWbDHEd9Avb/view?usp=drive_web'
    },
    {
      id: '13_L_LoPujgKjhtEtJBAcUiFJk-vVFeuA',
      name: 'Row 2 Post 5 c',
      type: 'image',
      link: 'https://drive.google.com/file/d/13_L_LoPujgKjhtEtJBAcUiFJk-vVFeuA/view?usp=drive_web'
    },
    {
      id: '13AfjMV9uu1fxhftECXF2AK2cM0G4KkFV',
      name: 'Row 2 Post 5 d',
      type: 'image',
      link: 'https://drive.google.com/file/d/13AfjMV9uu1fxhftECXF2AK2cM0G4KkFV/view?usp=drive_web'
    },
    {
      id: '1kEDpeTu6yMOlQIW24Dr10tYqcqphFJfk',
      name: 'Row 2 Post 5 e',
      type: 'image',
      link: 'https://drive.google.com/file/d/1kEDpeTu6yMOlQIW24Dr10tYqcqphFJfk/view?usp=drive_web'
    },
    {
      id: '1vvRrnIg0kEKZjfZoQQedf2GIE8ugXTaP',
      name: 'Row 2 Post 5 f',
      type: 'image',
      link: 'https://drive.google.com/file/d/1vvRrnIg0kEKZjfZoQQedf2GIE8ugXTaP/view?usp=drive_web'
    },
    {
      id: '18-0s-8Rm1eWosz_8TC3XCEMYYOjpzfVS',
      name: 'Row 2 Post 5 g',
      type: 'image',
      link: 'https://drive.google.com/file/d/18-0s-8Rm1eWosz_8TC3XCEMYYOjpzfVS/view?usp=drive_web'
    },
    {
      id: '14qXd-vsO2myO9X1gsEq2ibWaUad2jUJA',
      name: 'Row 2 Post 5 h',
      type: 'image',
      link: 'https://drive.google.com/file/d/14qXd-vsO2myO9X1gsEq2ibWaUad2jUJA/view?usp=drive_web'
    },
  ],
  [
    {
      id: '1a_vtSc7__VnMYw6AtpQQbUNi41Bj1RkW',
      name: 'Row 2 Post 6',
      type: 'image',
      link: 'https://drive.google.com/file/d/1a_vtSc7__VnMYw6AtpQQbUNi41Bj1RkW/view?usp=drive_web'
    },
    {
      id: '1GKb2qMR-rUy0tQpPzwssDAffSCJrn3GY',
      name: 'Row 2 Post 6 a',
      type: 'image',
      link: 'https://drive.google.com/file/d/1GKb2qMR-rUy0tQpPzwssDAffSCJrn3GY/view?usp=drive_web'
    },
    {
      id: '1XlDui4szKJYKvAFW1MvYZje24WP3XQOO',
      name: 'Row 2 Post 6 b',
      type: 'image',
      link: 'https://drive.google.com/file/d/1XlDui4szKJYKvAFW1MvYZje24WP3XQOO/view?usp=drive_web'
    },
    {
      id: '1O1I2X1SSYFNecYYgf02jCAZwVXGM6AXE',
      name: 'Row 2 Post 6 c',
      type: 'image',
      link: 'https://drive.google.com/file/d/1O1I2X1SSYFNecYYgf02jCAZwVXGM6AXE/view?usp=drive_web'
    },
    {
      id: '1zNyqp1o-EUi5CMbaugMB09nXJkRBge-K',
      name: 'Row 2 Post 6 d',
      type: 'image',
      link: 'https://drive.google.com/file/d/1zNyqp1o-EUi5CMbaugMB09nXJkRBge-K/view?usp=drive_web'
    },
  ],
];

export const UTOPIAN_VILLAS_SMM_POSTS = [
  [
    {
      id: '1ikD6TzxJ_9B5xBzyh8dcOPJoK_YDHNuh',
      name: 'post 1',
      type: 'image',
      link: 'https://drive.google.com/file/d/1ikD6TzxJ_9B5xBzyh8dcOPJoK_YDHNuh/view?usp=drive_web'
    },
    {
      id: '1giCTgm21gaR3yH73UfRVTCuD43F3-J2_',
      name: 'post 1 a',
      type: 'image',
      link: 'https://drive.google.com/file/d/1giCTgm21gaR3yH73UfRVTCuD43F3-J2_/view?usp=drive_web'
    },
    {
      id: '1-HOXtUg61d2Kose8BiTnNprgYHitdkjK',
      name: 'post 1 b',
      type: 'image',
      link: 'https://drive.google.com/file/d/1-HOXtUg61d2Kose8BiTnNprgYHitdkjK/view?usp=drive_web'
    },
    {
      id: '10HqfHP2S9M8KfMERkTdnUdIxhoGRPYqP',
      name: 'post 1 c',
      type: 'image',
      link: 'https://drive.google.com/file/d/10HqfHP2S9M8KfMERkTdnUdIxhoGRPYqP/view?usp=drive_web'
    },
    {
      id: '1ncdvldP50fiYXxYxbF8Icw3hvjR_WFzr',
      name: 'post 1 d',
      type: 'image',
      link: 'https://drive.google.com/file/d/1ncdvldP50fiYXxYxbF8Icw3hvjR_WFzr/view?usp=drive_web'
    },
  ],
  [
    {
      id: '19c5vZDA3TW8Vs1kK-t6FJdI19ETO5uQ-',
      name: 'post 2',
      type: 'image',
      link: 'https://drive.google.com/file/d/19c5vZDA3TW8Vs1kK-t6FJdI19ETO5uQ-/view?usp=drive_web'
    },
    {
      id: '1b8x9PDUMACgK90OLy4tX10UpBoW3WZp0',
      name: 'post 2 a',
      type: 'image',
      link: 'https://drive.google.com/file/d/1b8x9PDUMACgK90OLy4tX10UpBoW3WZp0/view?usp=drive_web'
    },
    {
      id: '1FPWOFTghsv0e9p1fOWrNOsmvWLRds6aE',
      name: 'post 2 b',
      type: 'image',
      link: 'https://drive.google.com/file/d/1FPWOFTghsv0e9p1fOWrNOsmvWLRds6aE/view?usp=drive_web'
    },
    {
      id: '1KZMwpfn6-hLolxMl6LCPHqO1Z5jk_Goj',
      name: 'post 2 c',
      type: 'image',
      link: 'https://drive.google.com/file/d/1KZMwpfn6-hLolxMl6LCPHqO1Z5jk_Goj/view?usp=drive_web'
    },
    {
      id: '1MVUwzQZZMqNrdFl-VKoEty9T00qEHRDV',
      name: 'post 2 d',
      type: 'image',
      link: 'https://drive.google.com/file/d/1MVUwzQZZMqNrdFl-VKoEty9T00qEHRDV/view?usp=drive_web'
    },
    {
      id: '1FvE6ON59I1viXZyOGlPgtlwue8pAR2z_',
      name: 'post 2 e',
      type: 'image',
      link: 'https://drive.google.com/file/d/1FvE6ON59I1viXZyOGlPgtlwue8pAR2z_/view?usp=drive_web'
    },
  ],
  [
    {
      id: '18yzjdqreNzsf1rp9iZ2IXo8HBnKWXc3K',
      name: 'post 3',
      type: 'image',
      link: 'https://drive.google.com/file/d/18yzjdqreNzsf1rp9iZ2IXo8HBnKWXc3K/view?usp=drive_web'
    },
    {
      id: '1nUE5HTtrz7xcdOvg9gNxx64tLuqmcqPo',
      name: 'post 3 a',
      type: 'image',
      link: 'https://drive.google.com/file/d/1nUE5HTtrz7xcdOvg9gNxx64tLuqmcqPo/view?usp=drive_web'
    },
    {
      id: '13ZsUmzzw6r5LT1n0ykXBPU7KwZBD9JNI',
      name: 'post 3 b',
      type: 'image',
      link: 'https://drive.google.com/file/d/13ZsUmzzw6r5LT1n0ykXBPU7KwZBD9JNI/view?usp=drive_web'
    },
    {
      id: '1EWzEAjnGBWhST6f582vaGA-YpXglq3Gi',
      name: 'post 3 c',
      type: 'image',
      link: 'https://drive.google.com/file/d/1EWzEAjnGBWhST6f582vaGA-YpXglq3Gi/view?usp=drive_web'
    },
    {
      id: '1VmmQYJJaMkhJvSBIgmJcJ-BhtNEGoiz3',
      name: 'post 3 d',
      type: 'image',
      link: 'https://drive.google.com/file/d/1VmmQYJJaMkhJvSBIgmJcJ-BhtNEGoiz3/view?usp=drive_web'
    },
    {
      id: '1K5rztgMgcvA6Pu4Y7N3_JgFOV4g2A-S1',
      name: 'post 3 e',
      type: 'image',
      link: 'https://drive.google.com/file/d/1K5rztgMgcvA6Pu4Y7N3_JgFOV4g2A-S1/view?usp=drive_web'
    },
    {
      id: '1XwfntPlbZQMWUXrvGSC2xa5MTiWMG6Rn',
      name: 'post 3 f',
      type: 'image',
      link: 'https://drive.google.com/file/d/1XwfntPlbZQMWUXrvGSC2xa5MTiWMG6Rn/view?usp=drive_web'
    },
  ],
];

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
      logo: '/brand-logos/Tdr.png',
      logoLink: 'https://drive.google.com/drive/folders/1f0p83XUeZIc-MvvY-HaACMIQAae4i_LB?usp=drive_link',
      details: 'A premium fashion brand focusing on chic, contemporary wear for women. The branding reflects elegance and modern aesthetics.'
    }
  },
  durfshan: {
    title: 'Durfshan',
    category: 'Ethnic Wear · Social Media · Branding',
    web: {
      url: 'durfshan.com',
      title: 'Timeless Ethnic Wear',
      desc: 'An exquisite collection blending traditional Indian craftsmanship with modern silhouettes.',
      gradient: 'radial-gradient(ellipse at 50% 50%, #333a2226 0%, #050B1A 70%)',
      meta: [{ l: 'Deliverables', v: 'Brand + Web + SMM' }, { l: 'Niche', v: 'Ethnic Luxury' }]
    },
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
    },
    tabs: ['Website', 'Social Media']
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
    ],
    conceptText: 'The idea behind the shoot is to celebrate Bayroute’s 8th store launch by transforming the photoshoot into a luxurious Arabian-inspired visual journey. Blending the richness of Middle Eastern culture with Bayroute’s modern, premium identity.\n\nThe concept is not just about showcasing food or drinks, but about creating a world that feels immersive, cinematic, elegant, and rooted in Arabian aesthetics.',
    tabs: ['Concept', 'Shoot']
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
    smmPosts: UTOPIAN_VILLAS_SMM_POSTS,
    smmDriveLink: 'https://drive.google.com/drive/folders/19ODNOA1j87L1bHgiJWzsxPtwmznyq7Jy?usp=sharing',
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
    },
    conceptText: 'The reel concept focused on creating visually engaging walkthroughs of premium flats in South Mumbai, featuring both newly launched and upcoming residential properties.\n\nThe idea was to move beyond standard empty flat walkthroughs by integrating AI-powered virtual furnishing, which transformed vacant spaces into fully styled interiors. This helped potential buyers visualize how the apartments could look once furnished, making the spaces feel more aspirational, warm, and livable.\n\nThe reels highlighted:\n• Detailed flat walkthroughs showcasing layout, space, and design elements\n• AI-generated furnished versions of empty rooms to provide a realistic lifestyle preview\n• Building amenities such as gyms, pools, lounges, parking spaces, terraces, and other premium facilities\n• Location and project highlights to position the properties as desirable investments in South Mumbai\n\nThe overall objective was to create reels that felt modern, immersive, and informative, helping audiences better imagine themselves living in these luxury spaces while also showcasing the property\'s full value.',
    tabs: ['AI Campaign', 'Social Media', 'Shoot']
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
  },
  bunkout: {
    title: 'Bunkout',
    category: 'Vacation Rental · Website · Branding · Social Media · Ads',
    web: {
      url: 'bunkout.in',
      title: 'Vacation Rental Experience',
      desc: 'A premium vacation rental experience booking portal. Seamless villa tours, real-time availability check, and modern design reflecting luxury holiday stays.',
      gradient: 'radial-gradient(ellipse at 50% 50%, #3461FF26 0%, #050B1A 70%)',
      meta: [{ l: 'Industry', v: 'Hospitality / Travel' }, { l: 'Deliverables', v: 'Web + Brand + SMM' }, { l: 'Market', v: 'India & Global' }]
    },
    social: [],
    smmPosts: BUNKOUT_SMM_POSTS,
    smmDriveLink: 'https://drive.google.com/drive/folders/1jxXsVWq1FnyegBhdZQLNTS37a-3Gjvez?usp=sharing',
    brand: {
      name: 'Bunkout',
      colors: ['#3461FF', '#050B1A', '#FFFFFF', '#E6ECF8'],
      colorNames: ['Blue', 'Navy', 'White', 'Off-White'],
      font: 'Plus Jakarta Sans',
      style: 'Modern · Cozy · Luxurious',
      logo: '/brand-logos/BUNKOUT.png',
      logoLink: 'https://drive.google.com/drive/folders/1gVakXanQAFVZoJa2LmvNTpUFh0cbrzXj?usp=sharing',
      details: 'A premium vacation rental brand offering luxury escape villas. The visual system incorporates cozy modern colors, bold branding, and high-converting marketing campaigns.'
    }
  },
  travellibrary: {
    title: 'The Travel Library',
    category: 'Website · Branding · Social Media · Magazine',
    web: {
      url: 'thetravellibrary.in',
      title: 'Curated Journeys',
      desc: 'A premium digital travel guide and editorial magazine for modern explorers.',
      gradient: 'radial-gradient(ellipse at 50% 50%, #005F5426 0%, #050B1A 70%)',
      meta: [{ l: 'Deliverables', v: 'Brand + Web + Editorial' }, { l: 'Niche', v: 'Luxury Travel' }]
    },
    social: [],
    brand: {
      name: 'The Travel Library',
      colors: ['#005F54', '#050B1A', '#FFFFFF', '#E6ECF8'],
      colorNames: ['Forest Teal', 'Navy', 'White', 'Light Grey'],
      font: 'Playfair Display',
      style: 'Editorial · Curated · Luxurious',
      logo: '/brand-logos/Logo (2).png',
      details: 'The Travel Library represents luxury travel positioning, translating the romance of physical magazines into a modern, interactive web portal.'
    },
    tabs: ['Website', 'Social Media', 'Magazine'],
    magazines: [
      {
        name: 'The Travel Library - Edition 1',
        link: 'https://drive.google.com/file/d/1sO37cAWyHPqy6CMMc3oET5QYQ9-NjDBJ/view?usp=drive_link',
        id: '1sO37cAWyHPqy6CMMc3oET5QYQ9-NjDBJ'
      },
      {
        name: 'The Travel Library - Edition 2',
        link: 'https://drive.google.com/file/d/1wnOza9Jv4AAQyuTfx4ieSTCaTBBlWreW/view?usp=drive_link',
        id: '1wnOza9Jv4AAQyuTfx4ieSTCaTBBlWreW'
      }
    ]
  },
  nogah: {
    title: '3 jewellery brand (Nogah)',
    category: 'Branding · Social Media · Packaging',
    web: null,
    social: [],
    brand: {
      name: 'Nogah',
      colors: ['#D4AF37', '#0A0811', '#FFFFFF', '#F7F5F0'],
      colorNames: ['Champagne Gold', 'Deep Violet', 'White', 'Ivory'],
      font: 'Cormorant Garamond',
      style: 'Minimalist · Sophisticated · Timeless',
      logo: '/brand-logos/nogah.png',
      details: 'Nogah is a high-end artisanal jewellery brand. The visual identity revolves around delicate metalwork, tactile packaging surfaces, and a luxury social aesthetic.'
    },
    tabs: ['Social Media', 'Packaging']
  },
  greencarat: {
    title: 'The Green Carat',
    category: 'Website · Branding · Social Media · Shoot',
    web: {
      url: 'thegreencarat.com',
      title: 'Sustainable Fine Jewellery',
      desc: 'E-commerce platform for eco-friendly, ethically sourced lab-grown diamond jewellery.',
      gradient: 'radial-gradient(ellipse at 50% 50%, #1E462026 0%, #050B1A 70%)',
      meta: [{ l: 'Industry', v: 'Sustainable Jewellery' }, { l: 'Platform', v: 'Next.js E-Commerce' }]
    },
    social: [],
    brand: {
      name: 'The Green Carat',
      colors: ['#1E4620', '#050B1A', '#FFFFFF', '#E8F0E8'],
      colorNames: ['Emerald Green', 'Navy', 'White', 'Soft Sage'],
      font: 'Montserrat',
      style: 'Ethical · Modern · Luxury',
      logo: '/brand-logos/greencarat.png',
      details: 'Sustainable diamonds deserve a brilliant digital showcase. The Green Carat visual identity combines organic green tones with clean geometric typography.'
    },
    tabs: ['Website', 'Social Media', 'Shoot']
  },
  redefine: {
    title: 'Redefine',
    category: 'Website · Social Media · Shoot · Campaigns',
    web: {
      url: 'redefinebyrd.com',
      title: 'Activewear Redefined',
      desc: 'High-performance activewear brand engineered for modern movement and lifestyle.',
      gradient: 'radial-gradient(ellipse at 50% 50%, #FF3E6C26 0%, #050B1A 70%)',
      meta: [{ l: 'Category', v: 'Athleisure' }, { l: 'Global Shoots', v: 'London / NY' }]
    },
    social: [],
    brand: {
      name: 'Redefine',
      colors: ['#FF3E6C', '#050B1A', '#FFFFFF', '#F0E6EA'],
      colorNames: ['Neon Rose', 'Navy', 'White', 'Blush'],
      font: 'Outfit',
      style: 'Energetic · Bold · Futuristic',
      details: 'Redefine activewear combines athletic aesthetics with urban fashion. Global campaigns in New York and London position it at the intersection of high fashion and street performance.'
    },
    tabs: ['Website', 'Social Media', 'Shoot', 'Campaigns (NY / London / Etc)']
  },
  soup: {
    title: 'SOUP',
    category: 'Social Media · Shoot',
    web: null,
    social: [],
    brand: {
      name: 'SOUP',
      colors: ['#E85A4F', '#08080C', '#FFFFFF', '#FAEBEA'],
      colorNames: ['Warm Coral', 'Charcoal Black', 'White', 'Warm Sand'],
      font: 'Inter',
      style: 'Playful · Creative · Raw',
      details: 'SOUP is a creative content studio producing scroll-stopping visual assets and lifestyle shoots for food and lifestyle brands.'
    },
    tabs: ['Social Media', 'Shoot']
  },
  etnicabasatasalty: {
    title: 'Etnica / Basata / Salty',
    category: 'Website · Social Media · Shoots',
    web: {
      url: 'etnicaworld.com',
      title: 'Resort & Swimwear Collective',
      desc: 'A digital collective representing tropical resort wear, beach accessories, and ocean lifestyle brands.',
      gradient: 'radial-gradient(ellipse at 50% 50%, #D8A47F26 0%, #050B1A 70%)',
      meta: [{ l: 'Collectives', v: '3 Resort Brands' }, { l: 'Aesthetic', v: 'Sun-Kissed / Boho' }]
    },
    social: [],
    brand: {
      name: 'Etnica / Basata / Salty',
      colors: ['#D8A47F', '#050B1A', '#FFFFFF', '#FCF8F5'],
      colorNames: ['Terracotta', 'Navy', 'White', 'Sand'],
      font: 'Cormorant Garamond',
      style: 'Bohemian · Organic · Coastal',
      logo: '/brand-logos/etnica.png',
      details: 'A unified visual presentation for three sister beachwear brands: Etnica, Basata, and Salty. The design captures the warmth of coastal suns and sandy shorelines.'
    },
    tabs: ['Website', 'Social Media', 'Shoots']
  },
  avecamourratherbake: {
    title: 'Avec Amour / Rather Bake',
    category: 'Shoot · Social Media',
    web: null,
    social: [],
    brand: {
      name: 'Avec Amour / Rather Bake',
      colors: ['#C06C84', '#0A080E', '#FFFFFF', '#FFF0F5'],
      colorNames: ['Dusty Rose', 'Deep Night', 'White', 'Lavender Blush'],
      font: 'Playfair Display',
      style: 'Artisanal · Delicate · Romantic',
      logo: '/brand-logos/Avec Amour.png',
      details: 'Avec Amour and Rather Bake are premium artisanal pastry brands. The brand aesthetic focuses on visual pastry craftsmanship, pastel colorways, and luxury product shoots.'
    },
    tabs: ['Shoot', 'Social Media']
  },
  vinnin: {
    title: 'Vinnin',
    category: 'Branding · Social Media',
    web: null,
    social: [],
    brand: {
      name: 'Vinnin',
      colors: ['#8A2BE2', '#05050A', '#FFFFFF', '#F0E6FA'],
      colorNames: ['Electric Purple', 'Void Black', 'White', 'Soft Purple'],
      font: 'Outfit',
      style: 'Streetwear · Edgy · Urban',
      logo: '/brand-logos/VININN.png',
      details: 'Vinnin is a contemporary streetwear fashion brand. The visual identity emphasizes high-contrast purple hues, heavy typography, and underground culture vibes.'
    },
    tabs: ['Social Media']
  }
};