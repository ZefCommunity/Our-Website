/** Volunteer & Community Ecosystem — not a sponsor or funding partner */
export const VOLUNTEERS_DATA = [
  {
    id: 'we-make-change',
    name: 'We Make Change',
    description:
      'Zurfte Empowercare Foundation is a member of the We Make Change ecosystem, a global platform that connects social impact organizations with skilled volunteers and changemakers. Through this ecosystem, ZEF is able to access talented professionals who contribute their expertise to strengthen our programs, operations, and long-term impact.',
    logo: 'https://assets.softr-files.com/applications/8a2b14a4-0623-4f0d-848d-9b0ebe87e33e/assets/f309f700-304e-440d-aa7d-db7e1b1980b6.png',
    link: 'https://app.wemakechange.org/',
    category: 'Volunteer & Community Ecosystem',
  },
];

/** Technology Supporters — not a sponsor, funding, or strategic partner */
export const SUPPORTERS_DATA = [
  {
    id: 'microsoft-for-nonprofits',
    name: 'Microsoft for Nonprofits',
    description:
      "Zurfte Empowercare Foundation utilizes Microsoft 365 for Nonprofits through Microsoft's nonprofit technology program. These tools support communication, collaboration, productivity, and organizational operations, enabling our teams and volunteers to work more effectively.",
    // Brandfetch only publishes a dark-theme mark for Microsoft; dark panel keeps contrast
    logo: 'https://cdn.brandfetch.io/idchmboHEZ/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    link: 'https://nonprofit.microsoft.com/en-us/getting-started',
    category: 'Technology Supporters',
    logoPanelClassName: 'bg-slate-900',
  },
];

export const PARTNERS_DATA = [...VOLUNTEERS_DATA, ...SUPPORTERS_DATA];
