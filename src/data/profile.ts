import type { ImageMetadata } from 'astro';
import anybipeImage from '../assets/publications/anybipe.jpg';
import gbcImage from '../assets/publications/gbc.jpg';
import physicalworldImage from '../assets/publications/physicalworld.png';

export interface BiographySegment {
  text: string;
  href?: string;
}

// Missing profile links are not rendered.
export const profile = {
  name: 'Wentao He',
  role: "Master's student",
  affiliation: 'University of Michigan School of Information',
  email: 'wentaohe@umich.edu',
  description: "Wentao He is a master's student at the University of Michigan School of Information, working with Nima Fazeli and JJ (Jeong Joon) Park.",
  introduction: [
    [
      { text: "I am a master's student at the University of Michigan School of Information, working with Professor " },
      { text: 'Nima Fazeli', href: 'https://robotics.umich.edu/people/faculty/nima-fazeli/' },
      { text: ' and Professor ' },
      { text: 'JJ (Jeong Joon) Park', href: 'https://jjparkcv.github.io/' },
      { text: '.' },
    ],
    [
      { text: 'Previously, I studied Electronic and Computer Engineering at Shanghai Jiao Tong University, where I worked with Professor ' },
      { text: 'Junguo Lu', href: 'https://sais.sjtu.edu.cn/faculty/lujunguo.html' },
      { text: ' in the ' },
      { text: 'Machine Vision and Autonomous System Laboratory (MVASL)', href: 'https://github.com/sjtu-mvasl-robotics' },
      { text: '.' },
    ],
  ] satisfies BiographySegment[][],
  links: [
    { label: 'Email: wentaohe [at] umich [dot] edu', href: 'mailto:wentaohe@umich.edu' },
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=6iFVV7YAAAAJ&hl=en' },
    { label: 'GitHub', href: 'https://github.com/wthe2004' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wthe2004/' },
    { label: 'CV', href: '' },
  ],
};

export interface Publication {
  title: string;
  titleHref: string;
  image: ImageMetadata;
  imageAlt: string;
  animation?: string;
  diagram?: 'physics';
  authors: string[];
  authorMarks?: Record<string, string>;
  authorNote?: string;
  venue: string;
  year: string;
  description: string;
  links: { label: string; href: string }[];
}

export const publications: Publication[] = [
  {
    title: 'PhysiCalWorld: In-Context Physics Calibration for World Models',
    titleHref: 'https://physical-world.github.io/',
    image: physicalworldImage,
    diagram: 'physics',
    imageAlt: 'PhysiCalWorld uses an in-context interaction sequence to calibrate a world model to test-environment physics.',
    authors: ['Yunhao Luo', 'Wentao He', 'Yinpei Dai', 'Hyelin Nam', 'Hongze Fu', 'Joyce Chai', 'Nima Fazeli', 'Jeong Joon Park'],
    authorMarks: { 'Yunhao Luo': '*', 'Wentao He': '*', 'Nima Fazeli': '†', 'Jeong Joon Park': '†' },
    authorNote: '* Equal contribution · † Equal advising',
    venue: 'ICLR · Under review',
    year: '',
    description: 'Calibrating world models to the physics of a new scene through in-context interaction, without fine-tuning or physics labels.',
    links: [{ label: 'Project', href: 'https://physical-world.github.io/' }],
  },
  {
    title: 'GBC: Generalized Behavior-Cloning Framework for Whole-Body Humanoid Imitation',
    titleHref: 'https://github.com/sjtu-mvasl-robotics/GBC',
    image: gbcImage,
    imageAlt: 'GBC: two robot poses above their corresponding human reference poses.',
    authors: ['Yifei Yao', 'Chengyuan Luo', 'Jiaheng Du', 'Wentao He', 'Jun-Guo Lu'],
    venue: 'arXiv preprint',
    year: '2025',
    description: 'A unified framework for motion retargeting and whole-body imitation learning across different humanoid robots.',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2508.09960' },
      { label: 'Code', href: 'https://github.com/sjtu-mvasl-robotics/GBC' },
    ],
  },
  {
    title: 'AnyBipe: An Automated End-to-End Framework for Training and Deploying Bipedal Robots Powered by Large Language Models',
    titleHref: 'https://github.com/sjtu-mvasl-robotics/AnyBipe',
    image: anybipeImage,
    animation: '/anybipe-demo.gif',
    imageAlt: 'AnyBipe: a real bipedal robot walking on grass.',
    authors: ['Yifei Yao', 'Wentao He', 'Chenyu Gu', 'Jiaheng Du', 'Fuwei Tan', 'Zhen Zhu', 'Jun-Guo Lu'],
    venue: 'IROS',
    year: '2025',
    description: 'An LLM-guided framework connecting reward design, reinforcement learning, and sim-to-real evaluation for bipedal robot locomotion.',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2409.08904' },
      { label: 'Code', href: 'https://github.com/sjtu-mvasl-robotics/AnyBipe' },
    ],
  },
];
