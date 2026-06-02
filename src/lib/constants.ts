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
    tagline?: string;
    bodyFont?: string;
  };
  shoot?: string[];
  packaging?: string[];
  instaReels?: string;
  campaign?: {
    name: string;
    video: string;
    theme: string;
  };
  smmPosts?: { id: string; name: string; type: string; link: string; videoUrl?: string }[][];
  smmDriveLink?: string;
  tabs?: string[];
  magazines?: { name: string; link: string; id: string }[];
  conceptText?: string;
  campaignMedia?: { id: string; type: 'image' | 'video'; link: string; name: string }[];
  shootPosts?: { id: string; name: string; type: string; link: string }[][];
  shootDriveLink?: string;
  airbnb?: {
    url: string;
    title: string;
    desc: string;
    meta: { l: string; v: string }[];
  };
};

export const BUNKOUT_SMM_POSTS = [
  // Post 1 (6 items)
  [
    {
      id: '1Fq0JMg9_LkCNDggYFfVCaNfoU-HuIlJr',
      name: 'row 1 post 1 a .heic',
      type: 'image',
      link: 'https://drive.google.com/file/d/1Fq0JMg9_LkCNDggYFfVCaNfoU-HuIlJr/view?usp=drive_web'
    },
    {
      id: '1HD9mvlnWw29HDbekUBzLX8PBomJW82ZE',
      name: 'row 1 post 1 b .heic',
      type: 'image',
      link: 'https://drive.google.com/file/d/1HD9mvlnWw29HDbekUBzLX8PBomJW82ZE/view?usp=drive_web'
    },
    {
      id: '1gNse3BRX24YlKRf93pDCnEHh-5RXmhHA',
      name: 'row 1 post 1 c .heic',
      type: 'image',
      link: 'https://drive.google.com/file/d/1gNse3BRX24YlKRf93pDCnEHh-5RXmhHA/view?usp=drive_web'
    },
    {
      id: '1eAnRkzo3JPCxwbxSv-j1RJTsQdgM84_z',
      name: 'row 1 post 1 d .heic',
      type: 'image',
      link: 'https://drive.google.com/file/d/1eAnRkzo3JPCxwbxSv-j1RJTsQdgM84_z/view?usp=drive_web'
    },
    {
      id: '1KORmNbVBooAMSy5ootNrOTZM7_2FH2wI',
      name: 'row 1 post 1 e .heic',
      type: 'image',
      link: 'https://drive.google.com/file/d/1KORmNbVBooAMSy5ootNrOTZM7_2FH2wI/view?usp=drive_web'
    },
    {
      id: '1nHQQpd3-iWsJAH0CsCuBG-n1nYkNsJCW',
      name: 'row 1 post 1 f .heic',
      type: 'image',
      link: 'https://drive.google.com/file/d/1nHQQpd3-iWsJAH0CsCuBG-n1nYkNsJCW/view?usp=drive_web'
    },
  ],
  // Post 2 (6 items)
  [
    {
      id: '1mNDr4sFHraeoU1rci-ElP0mHab7MphEZ',
      name: 'row 1 post 2.jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1mNDr4sFHraeoU1rci-ElP0mHab7MphEZ/view?usp=drive_web'
    },
    {
      id: '1yve5H4tTD8tSwPvN_UeuXISTCg3WaRnC',
      name: 'row 1 post 2 a  .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1yve5H4tTD8tSwPvN_UeuXISTCg3WaRnC/view?usp=drive_web'
    },
    {
      id: '1HHV3zsEAkqshmzFC4JiTWoUCwscYRUx5',
      name: 'row 1 post 2  b .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1HHV3zsEAkqshmzFC4JiTWoUCwscYRUx5/view?usp=drive_web'
    },
    {
      id: '1S9tuJ8x6_ufe8NxrgT0i62jl7LyE_1oM',
      name: 'row 1 post 2 c .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1S9tuJ8x6_ufe8NxrgT0i62jl7LyE_1oM/view?usp=drive_web'
    },
    {
      id: '14eTVbLN3i_MUQUrZfsfeYmIEYtlBB7cu',
      name: 'row 1 post 2 d .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/14eTVbLN3i_MUQUrZfsfeYmIEYtlBB7cu/view?usp=drive_web'
    },
    {
      id: '1dXMhoH5khkk697IqRDjjeWhzZgSyWmoc',
      name: 'row 1 post 2 e .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1dXMhoH5khkk697IqRDjjeWhzZgSyWmoc/view?usp=drive_web'
    },
  ],
  // Post 3 (1 items)
  [
    {
      id: '1JhaBgpZB9zDAnb0EWHYvHan84ifkKh5i',
      name: 'ROW 1 POST 3 .mp4',
      type: 'video',
      link: 'https://drive.google.com/file/d/1JhaBgpZB9zDAnb0EWHYvHan84ifkKh5i/view?usp=drive_web'
    },
  ],
  // Post 4 (1 items)
  [
    {
      id: '1x3Kef3TdextJ8kXMlbxpdeRfQUuyXPPG',
      name: 'Row 2 Post 4.mp4',
      type: 'video',
      link: 'https://drive.google.com/file/d/1x3Kef3TdextJ8kXMlbxpdeRfQUuyXPPG/view?usp=drive_web'
    },
  ],
  // Post 5 (9 items)
  [
    {
      id: '1SWwIQz2rxYZmpGoEhQ3PrgmiDfOLCuez',
      name: 'Row 2 Post 5 .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1SWwIQz2rxYZmpGoEhQ3PrgmiDfOLCuez/view?usp=drive_web'
    },
    {
      id: '1umZRcaxZxohrW9W9z9LmeEQIov9km0aC',
      name: 'Row 2 Post 5  a .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1umZRcaxZxohrW9W9z9LmeEQIov9km0aC/view?usp=drive_web'
    },
    {
      id: '1ALrcK5tWRDeEVC6GRg0LjvWbDHEd9Avb',
      name: 'Row 2 Post 5  b .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1ALrcK5tWRDeEVC6GRg0LjvWbDHEd9Avb/view?usp=drive_web'
    },
    {
      id: '13_L_LoPujgKjhtEtJBAcUiFJk-vVFeuA',
      name: 'Row 2 Post 5  c .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/13_L_LoPujgKjhtEtJBAcUiFJk-vVFeuA/view?usp=drive_web'
    },
    {
      id: '13AfjMV9uu1fxhftECXF2AK2cM0G4KkFV',
      name: 'Row 2 Post 5  d .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/13AfjMV9uu1fxhftECXF2AK2cM0G4KkFV/view?usp=drive_web'
    },
    {
      id: '1kEDpeTu6yMOlQIW24Dr10tYqcqphFJfk',
      name: 'Row 2 Post 5  e .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1kEDpeTu6yMOlQIW24Dr10tYqcqphFJfk/view?usp=drive_web'
    },
    {
      id: '1vvRrnIg0kEKZjfZoQQedf2GIE8ugXTaP',
      name: 'Row 2 Post 5  f .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1vvRrnIg0kEKZjfZoQQedf2GIE8ugXTaP/view?usp=drive_web'
    },
    {
      id: '18-0s-8Rm1eWosz_8TC3XCEMYYOjpzfVS',
      name: 'Row 2 Post 5  g .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/18-0s-8Rm1eWosz_8TC3XCEMYYOjpzfVS/view?usp=drive_web'
    },
    {
      id: '14qXd-vsO2myO9X1gsEq2ibWaUad2jUJA',
      name: 'Row 2 Post 5 h  .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/14qXd-vsO2myO9X1gsEq2ibWaUad2jUJA/view?usp=drive_web'
    },
  ],
  // Post 6 (5 items)
  [
    {
      id: '1a_vtSc7__VnMYw6AtpQQbUNi41Bj1RkW',
      name: 'Row 2 Post 6 .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1a_vtSc7__VnMYw6AtpQQbUNi41Bj1RkW/view?usp=drive_web'
    },
    {
      id: '1GKb2qMR-rUy0tQpPzwssDAffSCJrn3GY',
      name: 'Row 2 Post 6 a .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1GKb2qMR-rUy0tQpPzwssDAffSCJrn3GY/view?usp=drive_web'
    },
    {
      id: '1XlDui4szKJYKvAFW1MvYZje24WP3XQOO',
      name: 'Row 2 Post 6  b .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1XlDui4szKJYKvAFW1MvYZje24WP3XQOO/view?usp=drive_web'
    },
    {
      id: '1O1I2X1SSYFNecYYgf02jCAZwVXGM6AXE',
      name: 'Row 2 Post 6  c .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1O1I2X1SSYFNecYYgf02jCAZwVXGM6AXE/view?usp=drive_web'
    },
    {
      id: '1zNyqp1o-EUi5CMbaugMB09nXJkRBge-K',
      name: 'Row 2 Post 6  d .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1zNyqp1o-EUi5CMbaugMB09nXJkRBge-K/view?usp=drive_web'
    },
  ],
  // Post 7 (7 items)
  [
    {
      id: '1ghoAVwlNi5N3Zk7z5YPmHdFcpXCsTgks',
      name: 'Row 3 Post 7  .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1ghoAVwlNi5N3Zk7z5YPmHdFcpXCsTgks/view?usp=drive_web'
    },
    {
      id: '1ImUbZyJt-arbZsGizl5tx-d81ufTUPPk',
      name: 'Row 3 Post 7 a .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1ImUbZyJt-arbZsGizl5tx-d81ufTUPPk/view?usp=drive_web'
    },
    {
      id: '16l8P1qo3BV-7IyAZxHhyU9q448TV9INd',
      name: 'Row 3 Post 7 b .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/16l8P1qo3BV-7IyAZxHhyU9q448TV9INd/view?usp=drive_web'
    },
    {
      id: '1rNBpWLe52gRFZrV3yaafe2oDnHLfvuMk',
      name: 'Row 3 Post 7 c .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1rNBpWLe52gRFZrV3yaafe2oDnHLfvuMk/view?usp=drive_web'
    },
    {
      id: '1oiCuS07rjHyL8DjsgMKDIiHu02NmGkF0',
      name: 'Row 3 Post 7 d .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1oiCuS07rjHyL8DjsgMKDIiHu02NmGkF0/view?usp=drive_web'
    },
    {
      id: '1aMMF-MfVfuCpa60V_1ihpsGL8LQWxm0F',
      name: 'Row 3 Post 7 e .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1aMMF-MfVfuCpa60V_1ihpsGL8LQWxm0F/view?usp=drive_web'
    },
    {
      id: '11GLSvlH5Mk7cbeq9qqBj8wbDBEk_Reib',
      name: 'Row 3 Post 7 f .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/11GLSvlH5Mk7cbeq9qqBj8wbDBEk_Reib/view?usp=drive_web'
    },
  ],
  // Post 8 (1 items)
  [
    {
      id: '1_k6LVe5uHluee-GHQLtVZMeny-fmb_0x',
      name: 'Row 3 Post 8 .mp4',
      type: 'video',
      link: 'https://drive.google.com/file/d/1_k6LVe5uHluee-GHQLtVZMeny-fmb_0x/view?usp=drive_web'
    },
  ],
  // Post 9 (6 items)
  [
    {
      id: '1k2tDtpWIvc4Nvucw4IiezyTTooj5WWEg',
      name: 'Row 3 Post 9.jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1k2tDtpWIvc4Nvucw4IiezyTTooj5WWEg/view?usp=drive_web'
    },
    {
      id: '19e7hUp_rnPVjH8mVTrlrCOZaFlWfWvsG',
      name: 'Row 3 Post 9 a .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/19e7hUp_rnPVjH8mVTrlrCOZaFlWfWvsG/view?usp=drive_web'
    },
    {
      id: '1F8fbzx8yuzL-hzPpvYZz4njZ_HDrt5MR',
      name: 'Row 3 Post 9 b .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1F8fbzx8yuzL-hzPpvYZz4njZ_HDrt5MR/view?usp=drive_web'
    },
    {
      id: '1pZn_RgyA5pWrj3OE8sLfU_O0IYwdV74E',
      name: 'Row 3 Post 9 c .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1pZn_RgyA5pWrj3OE8sLfU_O0IYwdV74E/view?usp=drive_web'
    },
    {
      id: '18FCV84SNAiJOrRZVo-lmciRAAGpZ93lC',
      name: 'Row 3 Post 9 d .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/18FCV84SNAiJOrRZVo-lmciRAAGpZ93lC/view?usp=drive_web'
    },
    {
      id: '17TL_s5uarupfofCrA8ZoYLQHWkwG4zqv',
      name: 'Row 3 Post 9 e .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/17TL_s5uarupfofCrA8ZoYLQHWkwG4zqv/view?usp=drive_web'
    },
  ],
  // Post 10 (5 items)
  [
    {
      id: '1ANU_JDFpV0e3t_DSpLuvUF-C6sogdA-b',
      name: 'Row 3 Post 10 .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1ANU_JDFpV0e3t_DSpLuvUF-C6sogdA-b/view?usp=drive_web'
    },
    {
      id: '15mfJ9kBnNgCJ9-GTVIxuLRKLzuoctOAd',
      name: 'Row 3 Post 10 a .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/15mfJ9kBnNgCJ9-GTVIxuLRKLzuoctOAd/view?usp=drive_web'
    },
    {
      id: '1C9drYZx7X9tet3Eb0Kdm-1-i33gnCxBR',
      name: 'Row 3 Post 10 b .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1C9drYZx7X9tet3Eb0Kdm-1-i33gnCxBR/view?usp=drive_web'
    },
    {
      id: '156UGHDWApdG1MS-Pe7po-dytyx-WRGbl',
      name: 'Row 3 Post 10 c .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/156UGHDWApdG1MS-Pe7po-dytyx-WRGbl/view?usp=drive_web'
    },
    {
      id: '1FP1cIXW-X6e-QG8zPj2A_mJZllkqgcrd',
      name: 'Row 3 Post 10 d .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1FP1cIXW-X6e-QG8zPj2A_mJZllkqgcrd/view?usp=drive_web'
    },
  ],
  // Post 11 (10 items)
  [
    {
      id: '1TqPAjIp-3D1GL6EqVo-He9jhBc31pH9Q',
      name: 'Row 3 Post 11 .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1TqPAjIp-3D1GL6EqVo-He9jhBc31pH9Q/view?usp=drive_web'
    },
    {
      id: '1YlfIWa-np-KQf_Vg0u44LEntK5006vhu',
      name: 'Row 3 Post 11 a .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1YlfIWa-np-KQf_Vg0u44LEntK5006vhu/view?usp=drive_web'
    },
    {
      id: '1uYgAruSIqVeY2kxFE8PH5e6c0AqxrjwY',
      name: 'Row 3 Post 11 b .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1uYgAruSIqVeY2kxFE8PH5e6c0AqxrjwY/view?usp=drive_web'
    },
    {
      id: '1BWyiRMtuV2IhSILz9cXCjrjAob3ojWkq',
      name: 'Row 3 Post 11 c .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1BWyiRMtuV2IhSILz9cXCjrjAob3ojWkq/view?usp=drive_web'
    },
    {
      id: '1BzqGtD8QiERqdTKrqp5hEILDop3MD0WM',
      name: 'Row 3 Post 11 d .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1BzqGtD8QiERqdTKrqp5hEILDop3MD0WM/view?usp=drive_web'
    },
    {
      id: '1S75HYHjGVMfJuOa0Rk0x02TsUCG7gRmH',
      name: 'Row 3 Post 11 e .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1S75HYHjGVMfJuOa0Rk0x02TsUCG7gRmH/view?usp=drive_web'
    },
    {
      id: '1ipTjVB0IC6c1Xf8o8ZIpK03wBZjFmY5a',
      name: 'Row 3 Post 11 f .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1ipTjVB0IC6c1Xf8o8ZIpK03wBZjFmY5a/view?usp=drive_web'
    },
    {
      id: '1OOlg6_0Orw3oSu90yCOSWZKbN5McqyPb',
      name: 'Row 3 Post 11 g .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1OOlg6_0Orw3oSu90yCOSWZKbN5McqyPb/view?usp=drive_web'
    },
    {
      id: '1ZkL0qD8Dg6tG3IupM_wlsmUtyOaVt0Qe',
      name: 'Row 3 Post 11 h .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1ZkL0qD8Dg6tG3IupM_wlsmUtyOaVt0Qe/view?usp=drive_web'
    },
    {
      id: '1w2LG0a2PlxNNLsJzHbzdHXmbLvoM4RfE',
      name: 'Row 3 Post 11 i .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1w2LG0a2PlxNNLsJzHbzdHXmbLvoM4RfE/view?usp=drive_web'
    },
  ],
  // Post 12 (8 items)
  [
    {
      id: '18AbItJTiedaZn81KnAXgjGgbEz-1a9RF',
      name: 'Row 3 Post 12 .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/18AbItJTiedaZn81KnAXgjGgbEz-1a9RF/view?usp=drive_web'
    },
    {
      id: '1T9O5I1wlBlskpqQB-Ywq0lEZ3PR-FNOn',
      name: 'Row 3 Post 12 a .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1T9O5I1wlBlskpqQB-Ywq0lEZ3PR-FNOn/view?usp=drive_web'
    },
    {
      id: '13ZNGnEzftdvoZLIcr0HpfqZh7q6EWEic',
      name: 'Row 3 Post 12 b .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/13ZNGnEzftdvoZLIcr0HpfqZh7q6EWEic/view?usp=drive_web'
    },
    {
      id: '1vooneUM3VOX_T-wQ-oPlDOPMygO6KbjE',
      name: 'Row 3 Post 12 c .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1vooneUM3VOX_T-wQ-oPlDOPMygO6KbjE/view?usp=drive_web'
    },
    {
      id: '1cDsM3eWnmWbvRyn24IYjrwEHRiFrezY5',
      name: 'Row 3 Post 12 d .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1cDsM3eWnmWbvRyn24IYjrwEHRiFrezY5/view?usp=drive_web'
    },
    {
      id: '1fO-1Ba67OHe-4Pmc7EnbRYmDW3xL5vvS',
      name: 'Row 3 Post 12 e .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1fO-1Ba67OHe-4Pmc7EnbRYmDW3xL5vvS/view?usp=drive_web'
    },
    {
      id: '1oJh9g0y53ox4FUwZxlsbKzdYHNsO7kH9',
      name: 'Row 3 Post 12 f .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1oJh9g0y53ox4FUwZxlsbKzdYHNsO7kH9/view?usp=drive_web'
    },
    {
      id: '1A3Y9_N4Kt-zhm56tpYJg-lads6gsNSSm',
      name: 'Row 3 Post 12 g .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1A3Y9_N4Kt-zhm56tpYJg-lads6gsNSSm/view?usp=drive_web'
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

export const DRESSING_ROOM_SMM_POSTS = [
  // Post 1 (1 item)
  [
    {
      id: '1G_TEsVvfJhkJ31lCGahYaoUwzcc931_L',
      name: 'post 1.jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1G_TEsVvfJhkJ31lCGahYaoUwzcc931_L/view?usp=drive_web'
    }
  ],
  // Post 2 (1 item)
  [
    {
      id: '1EFy8v-Wv6XaVNbIW7E5TgTlRK_loTItK',
      name: 'post 2.mp4',
      type: 'video',
      link: 'https://drive.google.com/file/d/1EFy8v-Wv6XaVNbIW7E5TgTlRK_loTItK/view?usp=drive_web',
      videoUrl: '/social-previews/dressingroom-video.mp4'
    }
  ],
  // Post 3 (1 item)
  [
    {
      id: '1ZCBvl0xdbLHHeO-GPi2gQUzftMGv412y',
      name: 'post 3.jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1ZCBvl0xdbLHHeO-GPi2gQUzftMGv412y/view?usp=drive_web'
    }
  ]
];

export const AVEC_AMOUR_SMM_POSTS = [
  // Post 1 (1 item)
  [
    {
      id: '1DkFwDBgFnuKLo3ejr_VV146I7z14tArS',
      name: '2.png',
      type: 'image',
      link: 'https://drive.google.com/file/d/1DkFwDBgFnuKLo3ejr_VV146I7z14tArS/view?usp=drive_web'
    }
  ],
  // Post 2 (1 item)
  [
    {
      id: '18QumxVmojZGuzxZs6EiZEnmM1CmW1_jK',
      name: '3.png',
      type: 'image',
      link: 'https://drive.google.com/file/d/18QumxVmojZGuzxZs6EiZEnmM1CmW1_jK/view?usp=drive_web'
    }
  ],
  // Post 3 (1 item)
  [
    {
      id: '1EgeItMH9ecDDkYSJ0QffGM3kt6EZoufA',
      name: '4.png',
      type: 'image',
      link: 'https://drive.google.com/file/d/1EgeItMH9ecDDkYSJ0QffGM3kt6EZoufA/view?usp=drive_web'
    }
  ],
  // Post 4 (1 item)
  [
    {
      id: '1l2cKJ9ZhjWh09UFdT6AxifjlChLHsvLP',
      name: '5.png',
      type: 'image',
      link: 'https://drive.google.com/file/d/1l2cKJ9ZhjWh09UFdT6AxifjlChLHsvLP/view?usp=drive_web'
    }
  ],
  // Post 5 (1 item)
  [
    {
      id: '1gW2bmst1lwBk7uRRalH8_QpcCiSSSYcf',
      name: '6.png',
      type: 'image',
      link: 'https://drive.google.com/file/d/1gW2bmst1lwBk7uRRalH8_QpcCiSSSYcf/view?usp=drive_web'
    }
  ],
  // Post 6 (1 item)
  [
    {
      id: '1_cytVQuEjEb7ib4ObLsDZqnrlIIwtdlr',
      name: '7.png',
      type: 'image',
      link: 'https://drive.google.com/file/d/1_cytVQuEjEb7ib4ObLsDZqnrlIIwtdlr/view?usp=drive_web'
    }
  ],
  // Post 7 (1 item)
  [
    {
      id: '1vxbnKDEIRF7PqSYg-wB5k1BAwwK35YrX',
      name: '8.png',
      type: 'image',
      link: 'https://drive.google.com/file/d/1vxbnKDEIRF7PqSYg-wB5k1BAwwK35YrX/view?usp=drive_web'
    }
  ],
  // Post 8 (1 item)
  [
    {
      id: '11AO5db5UA9d76bF8PjKv_mJgGEJUUK0C',
      name: '9.png',
      type: 'image',
      link: 'https://drive.google.com/file/d/11AO5db5UA9d76bF8PjKv_mJgGEJUUK0C/view?usp=drive_web'
    }
  ],
  // Post 9 (1 item)
  [
    {
      id: '1tGbYb1271qjAfjiVa7-i5-yZbIiCf0lI',
      name: '10.png',
      type: 'image',
      link: 'https://drive.google.com/file/d/1tGbYb1271qjAfjiVa7-i5-yZbIiCf0lI/view?usp=drive_web'
    }
  ]
];

export const VININN_SMM_POSTS = [
  // Post 1 (1 item)
  [
    {
      id: '1Lo8WPeoujmW_yQkDfpXcJxaKNODk0bQa',
      name: 'vininn.interiors_1',
      type: 'image',
      link: 'https://drive.google.com/file/d/1Lo8WPeoujmW_yQkDfpXcJxaKNODk0bQa/view?usp=drive_web'
    }
  ],
  // Post 2 (1 item)
  [
    {
      id: '1u5kTZg-SPkaSSnX2s4yG91ZQfbLatamy',
      name: 'vininn.interiors_2',
      type: 'video',
      link: 'https://drive.google.com/file/d/1u5kTZg-SPkaSSnX2s4yG91ZQfbLatamy/view?usp=drive_web',
      videoUrl: '/social-previews/vininn-video.mp4'
    }
  ],
  // Post 3 (1 item)
  [
    {
      id: '14L1IKetG_jga7PibspHBBGZ3zD1yHpjF',
      name: 'vininn.interiors_3',
      type: 'image',
      link: 'https://drive.google.com/file/d/14L1IKetG_jga7PibspHBBGZ3zD1yHpjF/view?usp=drive_web'
    }
  ]
];

export const TRAVEL_LIBRARY_SMM_POSTS = [
  // Post 1 (1 item)
  [
    {
      id: '1yCR3dE3nWyQSgkpqrFrYfLX3bmivnbA3',
      name: 'thetravellibrary.in_1',
      type: 'image',
      link: 'https://drive.google.com/file/d/1yCR3dE3nWyQSgkpqrFrYfLX3bmivnbA3/view?usp=drive_web'
    }
  ],
  // Post 2 (1 item)
  [
    {
      id: '1q0mJwBiooEojhX5rcgq-QV3hgS7iOpoz',
      name: 'thetravellibrary.in_2',
      type: 'image',
      link: 'https://drive.google.com/file/d/1q0mJwBiooEojhX5rcgq-QV3hgS7iOpoz/view?usp=drive_web'
    }
  ],
  // Post 3 (1 item)
  [
    {
      id: '1DYWFrBBe7tyVuB3SMBLBAvMko_lA3H8G',
      name: 'thetravellibrary.in_3',
      type: 'image',
      link: 'https://drive.google.com/file/d/1DYWFrBBe7tyVuB3SMBLBAvMko_lA3H8G/view?usp=drive_web'
    }
  ]
];

export const DURFSHAN_SMM_POSTS = [
  // Post 1 (Single image)
  [
    {
      id: '1wArkSBxqFffH-Ck6SEgfO6tsxPtI-oW3',
      name: 'row 1 post 1 .webp',
      type: 'image',
      link: 'https://drive.google.com/file/d/1wArkSBxqFffH-Ck6SEgfO6tsxPtI-oW3/view?usp=drive_web'
    }
  ],
  // Post 2 (Carousel)
  [
    {
      id: '1rHlp7Eje-Iv6PfBdQkbC5k-SqpieAt6F',
      name: 'row 1 post 2 .webp',
      type: 'image',
      link: 'https://drive.google.com/file/d/1rHlp7Eje-Iv6PfBdQkbC5k-SqpieAt6F/view?usp=drive_web'
    },
    {
      id: '1X4rVtkeVJMLe_nuw0zyvEkeU8n0qdTZh',
      name: 'row 1 post 2 a .webp',
      type: 'image',
      link: 'https://drive.google.com/file/d/1X4rVtkeVJMLe_nuw0zyvEkeU8n0qdTZh/view?usp=drive_web'
    }
  ],
  // Post 3 (Carousel)
  [
    {
      id: '18e_KpQtTaA2RWFO3KfNcPNCFQ-Ppne_g',
      name: 'row 1 post 3 .webp',
      type: 'image',
      link: 'https://drive.google.com/file/d/18e_KpQtTaA2RWFO3KfNcPNCFQ-Ppne_g/view?usp=drive_web'
    },
    {
      id: '18FujoONpL1fsPViSxITRji6Mbt1ZAEJJ',
      name: 'row 1 post 3 a .webp',
      type: 'image',
      link: 'https://drive.google.com/file/d/18FujoONpL1fsPViSxITRji6Mbt1ZAEJJ/view?usp=drive_web'
    },
    {
      id: '1L4TLCDGGHytOn_-tx7hM_yI6xpDkQIM1',
      name: 'row 1 post 3 b .webp',
      type: 'image',
      link: 'https://drive.google.com/file/d/1L4TLCDGGHytOn_-tx7hM_yI6xpDkQIM1/view?usp=drive_web'
    }
  ]
];

export const NOGAH_SMM_POSTS = [
  // Post 1 (1 item)
  [
    {
      id: '/brands/nogah/nogah-smm-1.jpg',
      name: 'row 1 post 1 .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1tNXmpB8Val4cdMBBBmwQNRKoNcy1xGy_/view?usp=drive_web'
    }
  ],
  // Post 2 (1 item)
  [
    {
      id: '/brands/nogah/nogah-smm-2.jpg',
      name: 'row 1 post 2 .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1e0ENqFVOuP-PLViA7MNVVIZrzeCgCYyG/view?usp=drive_web'
    }
  ],
  // Post 3 (1 item)
  [
    {
      id: '/brands/nogah/nogah-smm-3.jpg',
      name: 'row 1 post 3 .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1_duKxgoNaz5ng1v-Cq_6zFTzJcs3qylh/view?usp=drive_web'
    }
  ]
];

export const BAYROUTE_SMM_POSTS = [
  // Post 1
  [
    {
      id: '1rhKUEALDrisLpu8O1q-NxTWBW31467ZZ',
      name: '7 Layer Shawarma.jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1rhKUEALDrisLpu8O1q-NxTWBW31467ZZ/view?usp=drive_web'
    }
  ],
  // Post 2
  [
    {
      id: '1WnIIOAfWYFul6W2wLtHVn1Aegh03SRWM',
      name: 'Gemista.jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1WnIIOAfWYFul6W2wLtHVn1Aegh03SRWM/view?usp=drive_web'
    }
  ],
  // Post 3
  [
    {
      id: '1LOfRgR3TXHkssC9eRWa2f8t-P4vztYas',
      name: 'Harissa & Honey Halloumi.jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1LOfRgR3TXHkssC9eRWa2f8t-P4vztYas/view?usp=drive_web'
    }
  ]
];

export const HYRO_SMM_POSTS = [
  // Post 1
  [
    {
      id: '1fdOWiMNIw56rYG8Qk8wvhhrBLNmvAkLj',
      name: 'Elevator ride to elevated living.mp4',
      type: 'video',
      link: 'https://drive.google.com/file/d/1fdOWiMNIw56rYG8Qk8wvhhrBLNmvAkLj/view?usp=drive_web',
      videoUrl: '/social-previews/hyro-video-1.mp4'
    }
  ],
  // Post 2
  [
    {
      id: '1fB0C-4E3Ret98RdTNTqp8M6MrbT-fw8R',
      name: 'One address. Three ways to live it.mp4',
      type: 'video',
      link: 'https://drive.google.com/file/d/1fB0C-4E3Ret98RdTNTqp8M6MrbT-fw8R/view?usp=drive_web',
      videoUrl: '/social-previews/hyro-video-2.mp4'
    }
  ],
  // Post 3
  [
    {
      id: '1gXLceJcxWeIyirlYeBIhBA5koroprgkC',
      name: 'Karjat Villa Tour.mp4',
      type: 'video',
      link: 'https://drive.google.com/file/d/1gXLceJcxWeIyirlYeBIhBA5koroprgkC/view?usp=drive_web',
      videoUrl: '/social-previews/hyro-video-3.mp4'
    }
  ]
];

export const ETNICA_SMM_POSTS = [
  // Post 1
  [
    {
      id: '1iK50W3drDfZn6yC9BNJvecWo_-c3HW6E',
      name: 'row 1 post 2.jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1iK50W3drDfZn6yC9BNJvecWo_-c3HW6E/view?usp=drive_web'
    }
  ],
  // Post 2
  [
    {
      id: '1NF9D8AZOnDbYHgVuAArm50BeIU7FYeWQ',
      name: 'row 1 post 3.jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1NF9D8AZOnDbYHgVuAArm50BeIU7FYeWQ/view?usp=drive_web'
    }
  ],
  // Post 3
  [
    {
      id: '1uXdwJp19fgnMPd_HJUVFW5BZ8I1Ojvbc',
      name: 'row 2 post 4 .jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1uXdwJp19fgnMPd_HJUVFW5BZ8I1Ojvbc/view?usp=drive_web'
    }
  ]
];

export const SOUP_SMM_POSTS = [
  // Post 1
  [
    {
      id: '1oaH4bRZx59b_hNYZsbTRIwnN_C7Cbxkc',
      name: 'row 1 post 2.jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1oaH4bRZx59b_hNYZsbTRIwnN_C7Cbxkc/view?usp=drive_web'
    }
  ],
  // Post 2
  [
    {
      id: '1U5dmvHb2TrlSYtmqZJvKl1WDXozXn-AL',
      name: 'row 2 post 4.jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1U5dmvHb2TrlSYtmqZJvKl1WDXozXn-AL/view?usp=drive_web'
    }
  ],
  // Post 3
  [
    {
      id: '1TSi0xicKsGm_krqmXL-I5BTvrWshEqrj',
      name: 'row 2 post 5.jpg',
      type: 'image',
      link: 'https://drive.google.com/file/d/1TSi0xicKsGm_krqmXL-I5BTvrWshEqrj/view?usp=drive_web'
    }
  ]
];

export const REDEFINE_SMM_POSTS = [
  // Post 1
  [
    {
      id: '1R9bBwT7cmNBe9lA7geFQ8J_1b1CDATek',
      name: 'redefine-post-1',
      type: 'image',
      link: 'https://drive.google.com/file/d/1R9bBwT7cmNBe9lA7geFQ8J_1b1CDATek/view?usp=drive_link'
    }
  ],
  // Post 2
  [
    {
      id: '14koeSOAnsdSwhCpI0ntz_4T0IWAeLCER',
      name: 'redefine-post-2',
      type: 'image',
      link: 'https://drive.google.com/file/d/14koeSOAnsdSwhCpI0ntz_4T0IWAeLCER/view?usp=drive_link'
    }
  ],
  // Post 3
  [
    {
      id: '1P2j0zAPloEbWfvdLVxAokS1_rYqnLVmq',
      name: 'redefine-post-3',
      type: 'image',
      link: 'https://drive.google.com/file/d/1P2j0zAPloEbWfvdLVxAokS1_rYqnLVmq/view?usp=drive_link'
    }
  ]
];

export const ANTARIKSH_SMM_POSTS = [
  // Post 1
  [
    {
      id: '1lbM74unt6QDaLLNZ6p4cuoXRoa08e5Q0',
      name: 'antariksh-post-1',
      type: 'image',
      link: 'https://drive.google.com/file/d/1lbM74unt6QDaLLNZ6p4cuoXRoa08e5Q0/view?usp=drive_link'
    }
  ],
  // Post 2
  [
    {
      id: '1Ks-sST9ZnUMij8BglgorNVdX3nIc9m1g',
      name: 'antariksh-post-2',
      type: 'image',
      link: 'https://drive.google.com/file/d/1Ks-sST9ZnUMij8BglgorNVdX3nIc9m1g/view?usp=drive_link'
    }
  ],
  // Post 3
  [
    {
      id: '1ljHj8Cx14etffjTXDqYKBWUsdzzeJT75',
      name: 'antariksh-post-3',
      type: 'image',
      link: 'https://drive.google.com/file/d/1ljHj8Cx14etffjTXDqYKBWUsdzzeJT75/view?usp=drive_link'
    }
  ]
];

export const GREEN_CARAT_SMM_POSTS = [
  // Post 1
  [
    {
      id: '1tNXmpB8Val4cdMBBBmwQNRKoNcy1xGy_',
      name: 'greencarat-post-1',
      type: 'image',
      link: 'https://drive.google.com/file/d/1tNXmpB8Val4cdMBBBmwQNRKoNcy1xGy_/view?usp=drive_link'
    }
  ],
  // Post 2
  [
    {
      id: '1e0ENqFVOuP-PLViA7MNVVIZrzeCgCYyG',
      name: 'greencarat-post-2',
      type: 'image',
      link: 'https://drive.google.com/file/d/1e0ENqFVOuP-PLViA7MNVVIZrzeCgCYyG/view?usp=drive_link'
    }
  ],
  // Post 3
  [
    {
      id: '1_duKxgoNaz5ng1v-Cq_6zFTzJcs3qylh',
      name: 'greencarat-post-3',
      type: 'image',
      link: 'https://drive.google.com/file/d/1_duKxgoNaz5ng1v-Cq_6zFTzJcs3qylh/view?usp=drive_link'
    }
  ]
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
    social: [],
    smmPosts: DRESSING_ROOM_SMM_POSTS,
    smmDriveLink: 'https://drive.google.com/drive/folders/1OflvOhEKvtCC5ST3JVfraD5_Vmn_FpBb',
    brand: {
      name: 'The Dressing Room',
      colors: ['#FFF6EE', '#8E776B', '#B29C8A', '#050B1A'],
      colorNames: ['Ivory', 'Taupe Brown', 'Beige', 'Navy'],
      font: 'Cinzel',
      bodyFont: 'Montserrat',
      style: 'Chic · Elegant · Contemporary',
      logo: '/brand-logos/Tdr.png',
      logoLink: 'https://drive.google.com/drive/folders/1f0p83XUeZIc-MvvY-HaACMIQAae4i_LB?usp=drive_link',
      details: 'A premium fashion brand focusing on chic, contemporary wear for women. The branding reflects elegance and modern aesthetics.'
    },
    tabs: ['Branding & Logo', 'Social Media']
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
    social: [],
    smmPosts: DURFSHAN_SMM_POSTS,
    smmDriveLink: 'https://drive.google.com/drive/folders/1msXga11GJ6n7-YtPILOpJb-R9mk757gd',
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
    smmPosts: BAYROUTE_SMM_POSTS,
    smmDriveLink: 'https://drive.google.com/drive/folders/1tGqNiX--dZ_63pVDku_JLeZvjOXNAe3k',
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
    social: [],
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
    },
    tabs: ['Website', 'Social Media', 'Airbnb Listing'],
    airbnb: {
      url: 'https://www.airbnb.co.in/users/profile/1469222464763297439?previous_page_name=PdpHomeMarketplace',
      title: 'Airbnb Host Profile',
      desc: 'Optimized Airbnb profiles and property listings that drive direct bookings and visibility. Every listing is positioned as an aspirational escape to engage premium travelers.',
      meta: [
        { l: 'Platform', v: 'Airbnb' },
        { l: 'Properties', v: 'Exclusive Villas' },
        { l: 'Host Profile', v: 'Utopian Villas' }
      ]
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
    smmPosts: HYRO_SMM_POSTS,
    smmDriveLink: 'https://drive.google.com/drive/folders/1DWfVAS7Omxdbtyz1OedfZf7q2-5kubfq',
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
    social: [],
    smmPosts: ANTARIKSH_SMM_POSTS,
    smmDriveLink: 'https://drive.google.com/drive/folders/1sk49dl8SFu2iqUOEu2bnEnpbXlMlScWO',
    brand: {
      name: 'Antariksh',
      colors: ['#333344', '#F4F2F0', '#050B1A', '#888899'],
      colorNames: ['Charcoal', 'Ivory', 'Navy', 'Silver'],
      font: 'Playfair Display',
      style: 'Luxurious · Brilliant · Timeless',
      logo: '/brand-logos/antariksh.jpg',
      details: 'A luxury diamond jewellery brand emphasizing exquisite craftsmanship and timeless designs. The social presence is curated to showcase the brilliance of their statement pieces.'
    },
    tabs: ['Website', 'Branding & Logo', 'Social Media']
  },
  bunkout: {
    title: 'Bunkout',
    category: 'Vacation Rental · Website · Branding · Social Media · Ads',
    web: {
      url: 'bunkout.in',
      title: 'Vacation Rental Experience',
      desc: 'A premium vacation rental experience booking portal. Seamless villa tours, real-time availability check, and modern design reflecting luxury holiday stays.',
      gradient: 'radial-gradient(ellipse at 50% 50%, #123E3F26 0%, #050B1A 70%)',
      meta: [{ l: 'Industry', v: 'Hospitality / Travel' }, { l: 'Deliverables', v: 'Web + Brand + SMM' }, { l: 'Market', v: 'India & Global' }]
    },
    social: [],
    smmPosts: BUNKOUT_SMM_POSTS,
    smmDriveLink: 'https://drive.google.com/drive/folders/1jxXsVWq1FnyegBhdZQLNTS37a-3Gjvez?usp=sharing',
    brand: {
      name: 'Bunkout',
      colors: ['#123E3F', '#C4A56F', '#F7F8F8', '#050B1A'],
      colorNames: ['Green', 'Beige', 'Ivory', 'Navy'],
      font: 'Kiona',
      bodyFont: 'Montserrat',
      tagline: 'Stay Somewhere Amazing',
      style: 'Modern · Cozy · Luxurious',
      logo: '/brand-logos/BUNKOUT.png',
      logoLink: 'https://drive.google.com/drive/folders/1gVakXanQAFVZoJa2LmvNTpUFh0cbrzXj?usp=sharing',
      details: 'A premium vacation rental brand offering luxury escape villas. The visual system incorporates cozy modern colors, bold branding, and high-converting marketing campaigns.'
    },
    tabs: ['Website', 'Branding & Logo', 'Social Media']
  },
  travellibrary: {
    title: 'The Travel Library',
    category: 'Website · Branding · Social Media · Magazine',
    web: {
      url: 'thetravellibrary.in',
      title: 'Curated Journeys',
      desc: 'A premium digital travel guide and editorial magazine for modern explorers.',
      gradient: 'radial-gradient(ellipse at 50% 50%, #1D243926 0%, #050B1A 70%)',
      meta: [{ l: 'Deliverables', v: 'Brand + Web + Editorial' }, { l: 'Niche', v: 'Luxury Travel' }]
    },
    social: [],
    smmPosts: TRAVEL_LIBRARY_SMM_POSTS,
    smmDriveLink: 'https://drive.google.com/drive/folders/10Kacgp2CZMMXqZBexGSLOWfVaWawiSr6',
    brand: {
      name: 'The Travel Library',
      colors: ['#1D2439', '#D2BB95', '#F4F2F0', '#A88F71'],
      colorNames: ['Blue', 'Gold', 'Ivory', 'Dark Gold'],
      font: 'Butler',
      bodyFont: 'Montserrat',
      style: 'Editorial · Curated · Luxurious',
      logo: '/brand-logos/Logo (2).png',
      details: 'The Travel Library represents luxury travel positioning, translating the romance of physical magazines into a modern, interactive web portal.'
    },
    tabs: ['Website', 'Branding & Logo', 'Social Media', 'Magazine'],
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
    smmPosts: NOGAH_SMM_POSTS,
    smmDriveLink: 'https://drive.google.com/drive/folders/1ZGyjxg9NJlJsyGrIAsG8CLmnzFoymVGs',
    packaging: [
      '/brands/nogah/nogah-packaging-1.jpg',
      '/brands/nogah/nogah-packaging-2.jpg',
      '/brands/nogah/nogah-packaging-3.jpg'
    ],
    brand: {
      name: 'Nogah',
      colors: ['#173331', '#E5D1A3', '#A46850', '#DAD3C5', '#EEEBE6'],
      colorNames: ['Teal', 'Gold', 'Terracotta', 'Beige', 'Ivory'],
      font: 'Futura Light BT',
      style: 'Minimalist · Sophisticated · Timeless',
      logo: '/brand-logos/nogah.png',
      details: 'Nogah is a high-end artisanal jewellery brand. The visual identity revolves around delicate metalwork, tactile packaging surfaces, and a luxury social aesthetic.'
    },
    tabs: ['Branding & Logo', 'Social Media', 'Packaging']
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
    smmPosts: GREEN_CARAT_SMM_POSTS,
    smmDriveLink: 'https://drive.google.com/drive/folders/1ZGyjxg9NJlJsyGrIAsG8CLmnzFoymVGs',
    shootPosts: [
      [
        {
          id: '1ulTRvsIA3bAyYQw7IHtSL0zY1mFvj1U8',
          name: 'shoot-1',
          type: 'image',
          link: 'https://drive.google.com/file/d/1ulTRvsIA3bAyYQw7IHtSL0zY1mFvj1U8/view?usp=drive_link'
        }
      ],
      [
        {
          id: '1KMZxi0z43q-s9RUWD5KsJkfouI3XQv7o',
          name: 'shoot-2',
          type: 'image',
          link: 'https://drive.google.com/file/d/1KMZxi0z43q-s9RUWD5KsJkfouI3XQv7o/view?usp=drive_link'
        }
      ],
      [
        {
          id: '1-Xi9k8ZM11PkJhAgk4EkPvQrslfk88kK',
          name: 'shoot-3',
          type: 'image',
          link: 'https://drive.google.com/file/d/1-Xi9k8ZM11PkJhAgk4EkPvQrslfk88kK/view?usp=drive_link'
        }
      ]
    ],
    shootDriveLink: 'https://drive.google.com/drive/folders/1OH9yiMPJIqMgjbiZwxQKvHeST2sWAU5Y',
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
    smmPosts: REDEFINE_SMM_POSTS,
    smmDriveLink: 'https://drive.google.com/drive/folders/16CvuzibJSJtG-foe4DVddzN-Zc81w5lA',
    campaignMedia: [
      {
        id: '1AgMy0CgIKdqIQ6q0frf1j3QvxeZQkEyP',
        type: 'image',
        name: 'campaign-1',
        link: 'https://drive.google.com/file/d/1AgMy0CgIKdqIQ6q0frf1j3QvxeZQkEyP/view?usp=drive_link'
      },
      {
        id: '1oBCqidpCT7Ah6C2cvZicZ68MDcb76Buq',
        type: 'image',
        name: 'campaign-video',
        link: 'https://drive.google.com/file/d/1oBCqidpCT7Ah6C2cvZicZ68MDcb76Buq/view?usp=drive_link'
      },
      {
        id: '1KFz515o5bskjchFP6CDt1AnE59ds4V8D',
        type: 'image',
        name: 'campaign-2',
        link: 'https://drive.google.com/file/d/1KFz515o5bskjchFP6CDt1AnE59ds4V8D/view?usp=drive_link'
      }
    ],
    brand: {
      name: 'Redefine',
      colors: ['#FF3E6C', '#050B1A', '#FFFFFF', '#F0E6EA'],
      colorNames: ['Neon Rose', 'Navy', 'White', 'Blush'],
      font: 'Outfit',
      style: 'Energetic · Bold · Futuristic',
      details: 'Redefine activewear combines athletic aesthetics with urban fashion. Global campaigns in New York and London position it at the intersection of high fashion and street performance.'
    },
    tabs: ['Website', 'Social Media', 'Campaigns (NY / London / Etc)']
  },
  soup: {
    title: 'SOUP',
    category: 'Social Media',
    web: null,
    social: [],
    smmPosts: SOUP_SMM_POSTS,
    smmDriveLink: 'https://drive.google.com/drive/folders/1QT2qhpY2mY5rop6lmOr9GlzgS1NFIY3V',
    brand: {
      name: 'SOUP',
      colors: ['#E85A4F', '#08080C', '#FFFFFF', '#FAEBEA'],
      colorNames: ['Warm Coral', 'Charcoal Black', 'White', 'Warm Sand'],
      font: 'Inter',
      style: 'Playful · Creative · Raw',
      logo: '/brand-logos/soup.png',
      details: 'SOUP is a creative content studio producing scroll-stopping visual assets and lifestyle shoots for food and lifestyle brands.'
    },
    tabs: ['Social Media']
  },
  etnicabasatasalty: {
    title: 'Etnica / Basata / Salty',
    category: 'Website · Shoot',
    web: {
      url: 'etnicaworld.com',
      title: 'Resort & Swimwear Collective',
      desc: 'A digital collective representing tropical resort wear, beach accessories, and ocean lifestyle brands.',
      gradient: 'radial-gradient(ellipse at 50% 50%, #D8A47F26 0%, #050B1A 70%)',
      meta: [{ l: 'Collectives', v: '3 Resort Brands' }, { l: 'Aesthetic', v: 'Sun-Kissed / Boho' }]
    },
    social: [],
    smmPosts: ETNICA_SMM_POSTS,
    smmDriveLink: 'https://drive.google.com/drive/folders/1LMGe9G3hgQ182TNMLSA9xbpGtk2vnLqK',
    brand: {
      name: 'Etnica / Basata / Salty',
      colors: ['#D8A47F', '#050B1A', '#FFFFFF', '#FCF8F5'],
      colorNames: ['Terracotta', 'Navy', 'White', 'Sand'],
      font: 'Cormorant Garamond',
      style: 'Bohemian · Organic · Coastal',
      logo: '/brand-logos/etnica.png',
      details: 'A unified visual presentation for three sister beachwear brands: Etnica, Basata, and Salty. The design captures the warmth of coastal suns and sandy shorelines.'
    },
    tabs: ['Website', 'Shoot']
  },
  avecamourratherbake: {
    title: 'Avec Amour / Rather Bake',
    category: 'Shoot · Social Media',
    web: null,
    social: [],
    smmPosts: AVEC_AMOUR_SMM_POSTS,
    smmDriveLink: 'https://drive.google.com/drive/folders/1H77XlmuI_AmHc79GjwbQFnqhy4GhQUg9',
    brand: {
      name: 'Avec Amour / Rather Bake',
      colors: ['#C06C84', '#0A080E', '#FFFFFF', '#FFF0F5'],
      colorNames: ['Dusty Rose', 'Deep Night', 'White', 'Lavender Blush'],
      font: 'Playfair Display',
      style: 'Artisanal · Delicate · Romantic',
      logo: '/brand-logos/Avec Amour.png',
      details: 'Avec Amour and Rather Bake are premium artisanal pastry brands. The brand aesthetic focuses on visual pastry craftsmanship, pastel colorways, and luxury product shoots.'
    },
    tabs: ['Shoot']
  },
  vinnin: {
    title: 'Vinnin',
    category: 'Branding · Social Media',
    web: null,
    social: [],
    smmPosts: VININN_SMM_POSTS,
    smmDriveLink: 'https://drive.google.com/drive/folders/19LhIO8-cKIx6wdJ7Ghn-a8k6NaFUd7ic',
    brand: {
      name: 'Vinnin',
      colors: ['#8A2BE2', '#05050A', '#FFFFFF', '#F0E6FA'],
      colorNames: ['Electric Purple', 'Void Black', 'White', 'Soft Purple'],
      font: 'Outfit',
      bodyFont: 'Montserrat',
      style: 'Streetwear · Edgy · Urban',
      logo: '/brand-logos/Logo (4).png',
      details: 'Vinnin is a contemporary streetwear fashion brand. The visual identity emphasizes high-contrast purple hues, heavy typography, and underground culture vibes.'
    },
    tabs: ['Social Media']
  }
};