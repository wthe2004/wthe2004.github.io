// Replace the bracketed text with your details. Missing links are not rendered.
export const profile = {
  name: 'Wentao He',
  role: '[Your position]',
  affiliation: '[Your institution]',
  email: '',
  description: 'Academic homepage of Wentao He.',
  introduction: [
    'I am [your position] at [your institution], working with [your advisor or collaborators]. My research focuses on [your research interests].',
    'Previously, I [your education or research experience]. I am interested in [the questions you would like to explore].',
  ],
  links: [
    { label: 'Email', href: '' },
    { label: 'Scholar', href: '' },
    { label: 'GitHub', href: 'https://github.com/wthe2004' },
    { label: 'CV', href: '' },
  ],
};

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  description: string;
  links: { label: string; href: string }[];
  placeholder?: boolean;
}

// Layout examples only, not actual publications. Replace or remove these entries.
export const publications: Publication[] = [
  {
    title: '[Title of your first research project]',
    authors: ['Wentao He', '[Collaborator]', '[Collaborator]'],
    venue: '[Conference or journal]',
    year: '20XX',
    description: '[A short sentence about the question this work asks and its main contribution.]',
    links: [],
    placeholder: true,
  },
  {
    title: '[Title of your second research project]',
    authors: ['[Collaborator]', 'Wentao He', '[Collaborator]'],
    venue: '[Conference or journal]',
    year: '20XX',
    description: '[A short sentence about what you built, studied, or discovered.]',
    links: [],
    placeholder: true,
  },
];
