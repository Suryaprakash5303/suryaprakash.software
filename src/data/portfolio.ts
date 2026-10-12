/**
 * Central portfolio data — generated from Surya Prakash's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'SURYAPRAKASH PERUMAL',
  displayName: 'Surya Prakash',
  firstName: 'SURYAPRAKASH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A SURYAPRAKASH ORIGINAL',
  role: 'AI Developer & Front-End Developer',
  tagline: ['AI DEVELOPER', 'FRONT-END DEVELOPER', 'AGENTIC AI'],
  intro:
    'Software Engineer with 2 years of experience in scalable front-end development, specializing in React.js, Next.js, and user-focused applications. Currently working at Tata Consultancy Services as an Oracle JD Edwards Developer and AI Developer, supporting retail analytics and enterprise systems. Skilled in building end-to-end AI-powered solutions using LLMs, RAG pipelines, Agentic AI, and automation workflows.',
  location: 'Bangalore, India',
  email: 'suryaprakash.software@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/suryaprakashperumal5303/',
    github: 'https://github.com/Suryaprakash5303',
  },
  resumePdf: `${import.meta.env.BASE_URL}assets/Surya_Prakash_Resume.pdf`,
  portrait: {
    src: `${import.meta.env.BASE_URL}assets/portrait-720.webp`,
    srcSet: `${import.meta.env.BASE_URL}assets/portrait-420.webp 420w, ${import.meta.env.BASE_URL}assets/portrait-720.webp 720w, ${import.meta.env.BASE_URL}assets/portrait-1100.webp 1100w`,
    alt: 'Portrait of Surya Prakash',
  },
  interests: ['Agentic AI', 'RAG Pipelines', 'Knowledge Graphs', 'Enterprise AI Automation'],
};

export const education = [
  {
    school: 'SRM Institute of Science and Technology',
    place: 'Chennai',
    degree: 'B.Tech — Information Technology',
    period: 'September 2020 – May 2024',
    score: 'CGPA 9.40',
  },
  {
    school: 'Jayam Vidhyalaya Matriculation Higher Secondary School',
    place: 'Harur',
    degree: 'HSLC',
    period: 'June 2019 – March 2020',
    score: '85%',
  },
];

export const experience = [
  {
    company: 'Tata Consultancy Services',
    role: 'AI Developer & Oracle JDE RDA Developer',
    place: 'Bangalore',
    period: 'September 2024 – Present',
    points: [
      'Developed a Python-based AI document validation and reconciliation pipeline using Gemini 2.5 Flash and Google Vertex AI, automating daily retail sales verification across 70+ UAE retail stores.',
      'Engineered an AI-powered document extraction and validation workflow using Python and Vertex AI across 20 document types and ~20 business-rule checks, cross-referencing Z Reports, bank transactions, and BPM sales records.',
      'Designed an AI-driven reconciliation solution using Gemini 2.5 Flash, targeting an 80% reduction in manual validation effort, 5× faster document processing, and projected business benefit equivalent to 3 FTEs.',
      'Implemented structured JSON outputs and exception-detection workflows to identify transaction mismatches, streamline financial audits, and support automated daily sales posting.',
      'Developed and optimized Oracle JD Edwards EnterpriseOne RDA reports using Business Views, data selection, sequencing, event rules, and system functions to streamline enterprise retail reporting and financial operations.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'cmarcps',
    title: 'CMARCPS',
    year: '2026',
    genre: 'AI • Multi-Agent AI • LangGraph',
    logline: 'Conversational Multi-Agent Retail Customer Personalization System with LangGraph, MCP, and Neo4j Knowledge Graphs.',
    stack: ['LangGraph', 'Multi-Agent AI', 'MCP', 'Hybrid RAG', 'Neo4j', 'Python'],
    build: [
      'Developed an AI-powered retail personalization system using LangGraph, LLMs, and Multi-Agent AI, integrating MCP, Hybrid RAG, and Neo4j Knowledge Graphs for intelligent information retrieval and context-aware customer experiences.',
      'Implemented Machine Learning models for customer churn prediction and purchase propensity analysis, incorporating AI guardrails, privacy controls, and role-based data access.',
    ],
    features: [
      'LangGraph multi-agent coordination system',
      'MCP (Model Context Protocol) integration',
      'Hybrid RAG with Neo4j Knowledge Graphs',
      'Customer churn prediction & purchase propensity ML models',
      'AI guardrails, privacy controls, and role-based data access',
    ],
    metrics: [
      { value: 'Finalist', label: 'AI Friday Regional Round' },
      { value: 'Multi-Agent', label: 'LangGraph architecture' },
      { value: 'Hybrid RAG', label: 'Neo4j Knowledge Graphs' },
      { value: '100%', label: 'privacy & RBAC guardrails' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'flow',
  },
  {
    id: 'sustainability-compliance',
    title: 'Sustainability & Compliance AI',
    year: '2026',
    genre: 'Agentic AI • Compliance • Next.js',
    logline: 'A compliance verification platform using Next.js, FastAPI, LLMs, Agentic AI, and vector databases for sustainability assessments.',
    stack: ['Next.js', 'FastAPI', 'LLMs', 'Agentic AI', 'RAG', 'Vector DB'],
    build: [
      'Built a compliance verification platform using Next.js, FastAPI, LLMs, Agentic AI, RAG, and vector databases to automate sustainability assessments.',
      'Developed intelligent document analysis and conversational AI that provide real-time compliance insights and sustainability verification support.',
    ],
    features: [
      'Automated sustainability & circularity assessment workflows',
      'Intelligent document analysis & compliance parsing',
      'Conversational AI delivering real-time recommendations',
      'FastAPI high-speed backend with vector database retrieval',
      'Modern responsive Next.js web application interface',
    ],
    metrics: [
      { value: 'Runner-Up', label: 'TCS AI Friday Season 2' },
      { value: 'Real-Time', label: 'compliance verification' },
      { value: 'Agentic AI', label: 'intelligent document analysis' },
      { value: 'Vector DB', label: 'semantic regulatory search' },
    ],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'shield',
  },
  {
    id: 'n8n-rag-chatbot',
    title: 'n8n AI RAG Chatbot',
    year: '2025',
    genre: 'Workflow Automation • RAG • GenAI',
    logline: 'An agentic RAG-based AI chatbot built with n8n, Gemini, and OpenAI APIs for enterprise knowledge analysis.',
    stack: ['n8n', 'Gemini API', 'OpenAI API', 'RAG', 'Agent Workflows'],
    build: [
      'Developed an agentic RAG-based AI chatbot using the n8n platform integrated with Gemini and OpenAI APIs.',
      'Enabled company knowledge analysis to support project planning and internal decision-making.',
      'Integrated the chatbot into a corporate website for intelligent, context-aware responses.',
    ],
    features: [
      'n8n agentic workflow automation & pipeline design',
      'Dual LLM integration with Gemini and OpenAI APIs',
      'Corporate knowledge analysis & intelligent decision support',
      'Embedded responsive corporate website chatbot widget',
    ],
    metrics: [
      { value: 'Agentic RAG', label: 'n8n workflow architecture' },
      { value: 'Dual API', label: 'Gemini & OpenAI integration' },
      { value: 'Context-Aware', label: 'corporate responses' },
      { value: 'Production', label: 'website integration' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'real-estate-app',
    title: 'Real Estate Platform',
    year: '2025',
    genre: 'Full-Stack Front-End • Next.js • REST',
    logline: 'A scalable Next.js application with lead generation, agent, buyer, and seller modules and REST API workflows.',
    stack: ['Next.js', 'React', 'REST API', 'JavaScript', 'CSS'],
    build: [
      'Built a scalable Next.js application with lead generation, agent, buyer, and seller modules.',
      'Integrated REST APIs for data retrieval, form submissions, and business workflows with a focus on responsive UI and performance.',
    ],
    features: [
      'Dedicated modules for Lead Generation, Agents, Buyers, and Sellers',
      'REST API integration for dynamic property listings and submissions',
      'High-performance client-side rendering and responsive layout',
      'Interactive business workflows and inquiries management',
    ],
    metrics: [
      { value: '4 Modules', label: 'lead, agent, buyer & seller' },
      { value: '100%', label: 'responsive UI performance' },
      { value: 'REST API', label: 'seamless data integration' },
      { value: 'Next.js', label: 'modular architecture' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'animacorpus-platform',
    title: 'AnimaCorpus Platform',
    year: '2024',
    genre: 'Healthcare • Next.js • Chatbot',
    logline: 'A Next.js healthcare front-end with chatbot integration and therapist/patient management modules.',
    stack: ['Next.js', 'React', 'Chatbot', 'REST API', 'JavaScript'],
    build: [
      'Developed a Next.js front-end with chatbot integration and therapist/patient management modules.',
      'Consumed REST APIs to handle user data, sessions, and workflows while delivering a user-centric interface.',
    ],
    features: [
      'Therapist and patient dedicated management modules',
      'Integrated conversational healthcare chatbot assistant',
      'Session tracking and user data management via REST APIs',
      'Accessible, empathetic, and user-centric UI design',
    ],
    metrics: [
      { value: '2 Portals', label: 'therapist & patient modules' },
      { value: 'Interactive', label: 'integrated chatbot' },
      { value: 'User-Centric', label: 'accessible healthcare UI' },
      { value: 'REST API', label: 'session & data workflows' },
    ],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'tcs-ai-friday',
    title: 'Runner-Up',
    org: 'TCS AI Friday Season 2',
    detail: 'Developed an AI-powered sustainability and circularity compliance verification platform using Agentic AI, LLMs, RAG, FastAPI, and Next.js with real-time recommendations.',
    laurel: 'Regional Runner-Up',
  },
  {
    id: 'tcs-certificate',
    title: 'Certificate of Appreciation',
    org: 'Tata Consultancy Services',
    detail: 'Recognized by Unit Head Abhijit Niyogi during the TCS Town Hall for valuable contributions, innovation, and active involvement in AI initiatives for the Retail UK, EMEA & India Unit.',
    laurel: 'Town Hall Honor',
  },
  {
    id: 'cmarcps-finalist',
    title: 'Regional Finalist',
    org: 'AI Friday Regional Finals',
    detail: 'Selected for Regional Final Round with CMARCPS — Conversational Multi-Agent Retail Customer Personalization System powered by LangGraph, MCP, and Neo4j.',
    laurel: 'Regional Finalist',
  },
  {
    id: 'srmist-cgpa',
    title: 'CGPA 9.40 Distinction',
    org: 'SRM Institute of Science and Technology',
    detail: 'Graduated B.Tech in Information Technology with an outstanding academic record of 9.40 CGPA.',
    laurel: 'Academic Distinction',
  },
  {
    id: 'retail-ai-pipeline',
    title: 'AI Reconciliation Pipeline',
    org: 'Tata Consultancy Services',
    detail: 'Developed a Python AI reconciliation pipeline using Gemini 2.5 Flash and Google Vertex AI across 70+ UAE stores, targeting an 80% effort reduction and 5× faster processing.',
    laurel: 'Enterprise Impact',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'TCS', name: 'Certificate of Appreciation – Retail UK, EMEA & India Unit', link: '#' },
  { issuer: 'TCS', name: 'AI Friday Season 2 – Regional Runner-Up Recognition', link: '#' },
  { issuer: 'Credential', name: 'Generative AI & Agentic AI Workflows (Certification Slot)', link: '#' },
  { issuer: 'Credential', name: 'React.js & Next.js Scalable Web Development (Certification Slot)', link: '#' },
  { issuer: 'Credential', name: 'Python & Enterprise Database Systems (Certification Slot)', link: '#' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Python, Java & JavaScript',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'Java', mono: 'Jv' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & AI',
    subtitle: 'Modern front-end & agentic systems',
    skills: [
      { name: 'React JS', mono: 'Re', note: 'Primary' },
      { name: 'Next JS', mono: 'Nx', note: 'Primary' },
      { name: 'LangGraph', mono: 'Lg' },
      { name: 'LangChain', mono: 'Lc' },
      { name: 'Google ADK', mono: 'Ad' },
      { name: 'FastAPI', mono: 'Fa' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Relational, vector & knowledge stores',
    skills: [
      { name: 'SQL', mono: 'Sq' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'Supabase DB', mono: 'Sb' },
      { name: 'Neo4j', mono: 'N4' },
      { name: 'Vector DB', mono: 'Vc' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Enterprise',
    subtitle: 'Automation, workflows & systems',
    skills: [
      { name: 'Oracle JD Edwards 9.1', mono: 'Jd' },
      { name: 'REST API', mono: 'Ap' },
      { name: 'n8n AI Automation', mono: 'N8' },
      { name: 'RAG', mono: 'Rg' },
      { name: 'Git', mono: 'Gt' },
      { name: 'Postman', mono: 'Pm' },
    ],
  },
  {
    id: 'architecture',
    title: 'AI Architectures',
    subtitle: 'Agentic workflows & guardrails',
    skills: [
      { name: 'Multi-Agent AI', mono: 'Ma' },
      { name: 'Hybrid RAG', mono: 'Hr' },
      { name: 'MCP Integration', mono: 'Mc' },
      { name: 'LLM Embeddings', mono: 'Em' },
      { name: 'AI Guardrails', mono: 'Gr' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['TCS AI Reconciliation Pipeline', 'CMARCPS', 'FastAPI Compliance Platform'],
  Java: ['SRM Institute Engineering', 'Enterprise Systems'],
  JavaScript: ['Real Estate Front-End', 'AnimaCorpus Platform', 'Next.js Apps'],
  'React JS': ['Real Estate Platform', 'AnimaCorpus Platform'],
  'Next JS': ['Sustainability & Compliance AI', 'Real Estate Platform', 'AnimaCorpus Platform'],
  LangGraph: ['CMARCPS Retail Personalization'],
  LangChain: ['CMARCPS', 'Sustainability AI'],
  'Google ADK': ['AI Agentic Frameworks'],
  FastAPI: ['Sustainability & Compliance AI', 'TCS AI Friday Season 2'],
  SQL: ['Oracle JDE RDA', 'Enterprise Sales Analytics'],
  PostgreSQL: ['Database Management', 'Enterprise Systems'],
  'Supabase DB': ['Scalable Cloud Data Storage'],
  Neo4j: ['CMARCPS Knowledge Graphs'],
  'Vector DB': ['Sustainability Compliance Platform', 'Hybrid RAG'],
  'Oracle JD Edwards 9.1': ['TCS RDA Developer', 'Retail Batch Reports'],
  'REST API': ['Real Estate App', 'AnimaCorpus', 'TCS Integrations'],
  'n8n AI Automation': ['n8n AI RAG Chatbot'],
  RAG: ['n8n AI RAG Chatbot', 'CMARCPS Hybrid RAG', 'Compliance Verification'],
  Git: ['Version Control', 'Project Collaboration'],
  Postman: ['REST API Verification', 'Backend Testing'],
  'Multi-Agent AI': ['CMARCPS Regional Finalist'],
  'Hybrid RAG': ['CMARCPS Knowledge Retrieval'],
  'MCP Integration': ['CMARCPS Model Context Protocol'],
  'LLM Embeddings': ['TCS Sales Invoice Pipeline', 'Vector Compliance Search'],
  'AI Guardrails': ['CMARCPS Privacy & Role-Based Access'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2020 – 2024',
    synopsis: 'B.Tech in Information Technology at SRM Institute of Science and Technology, Chennai — graduating with a CGPA of 9.40.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Academic Excellence',
        description: 'B.Tech in Information Technology at SRMIST Chennai — graduating with a 9.40 CGPA and deep foundations in algorithms, databases, and full-stack development.',
        tags: ['SRMIST', 'B.Tech IT', 'CGPA 9.40'],
        runtime: 'Sep 2020 – May 2024',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Engineering Roots',
        description: 'Building strong computer science fundamentals in Python, Java, JavaScript, and modern front-end web architectures.',
        tags: ['Python', 'Java', 'JavaScript'],
        runtime: 'Chennai',
        palette: jade,
      },
    ],
  },
  {
    number: 2,
    title: 'Enterprise & Analytics',
    period: '2024 – Present',
    synopsis: 'AI Developer & Oracle JD Edwards RDA Developer at Tata Consultancy Services, Bangalore — retail analytics and enterprise pipelines.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Enterprise Developer',
        description: 'Supporting retail analytics at Tata Consultancy Services — designing batch reports, data selection rules, and smart fields in Oracle JDE RDA.',
        tags: ['TCS', 'Oracle JDE', 'Enterprise 9.1'],
        runtime: 'Sep 2024 – Present',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The AI Reconciliation Pipeline',
        description: 'Engineered a Python AI reconciliation pipeline using Gemini 2.5 Flash & Google Vertex AI, automating sales validation across 70+ UAE stores with an 80% effort reduction.',
        tags: ['Python', 'Gemini 2.5 Flash', 'Vertex AI', 'Retail Analytics'],
        runtime: 'TCS Production',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'Town Hall Honor',
        description: 'Awarded Certificate of Appreciation by Unit Head Abhijit Niyogi during the TCS Town Hall for valuable contributions to AI initiatives.',
        tags: ['Recognition', 'TCS Town Hall', 'Retail UK/EMEA'],
        runtime: 'Town Hall',
        palette: amber,
      },
    ],
  },
  {
    number: 3,
    title: 'Agentic AI & Hackathons',
    period: '2025 – 2026',
    synopsis: 'Taking competitive AI stages by storm — TCS AI Friday Regional Finals and Season 2 Runner-Up.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'CMARCPS: Multi-Agent Retail',
        description: 'Built a conversational retail personalization system using LangGraph, Multi-Agent AI, MCP, Hybrid RAG, and Neo4j Knowledge Graphs.',
        tags: ['LangGraph', 'Multi-Agent', 'Neo4j', 'MCP'],
        runtime: 'AI Friday Finals',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'Compliance & Circularity',
        description: 'Runner-Up at TCS AI Friday Season 2 — building an AI-powered sustainability verification platform with Next.js, FastAPI, LLMs, and RAG.',
        tags: ['Runner-Up', 'FastAPI', 'Next.js', 'Vector DB'],
        runtime: 'Season 2 Runner-Up',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Web Platforms & Automation',
    period: '2025 – 2026',
    synopsis: 'Delivering production-grade applications — from n8n corporate RAG chatbots to scalable Next.js multi-module platforms.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'n8n Corporate RAG',
        description: 'Architected an agentic RAG chatbot using n8n with Gemini and OpenAI APIs, integrated into a corporate website for strategic decisions.',
        tags: ['n8n', 'Gemini API', 'OpenAI', 'RAG'],
        runtime: 'Enterprise Automation',
        palette: amber,
      },
      {
        code: 'S04 E02',
        title: 'Real Estate Ecosystem',
        description: 'Engineered a scalable Next.js front-end with lead generation, agent, buyer, and seller modules connected to high-speed REST APIs.',
        tags: ['Next.js', 'React', 'REST APIs'],
        runtime: 'Private Project',
        palette: ocean,
      },
      {
        code: 'S04 E03',
        title: 'AnimaCorpus Healthcare',
        description: 'Developed an empathetic Next.js healthcare interface featuring interactive chatbot integration and therapist/patient workflows.',
        tags: ['Next.js', 'Chatbot', 'Healthcare UI'],
        runtime: 'Private Project',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'The frontier of agentic intelligence — enterprise Multi-Agent workflows, Knowledge Graphs, and autonomous systems.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Arc',
        description: 'Exploring large-scale Multi-Agent ecosystems, Model Context Protocol (MCP) integrations, and next-generation front-end engineering.',
        tags: ['Agentic AI', 'MCP', 'Knowledge Graphs'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary focus', title: 'Agentic AI', detail: 'LangGraph • Multi-Agent AI • MCP • Hybrid RAG', palette: crimson },
  { label: 'The AI Original', title: 'CMARCPS', detail: 'Retail personalization • Neo4j Knowledge Graphs', palette: amber },
  { label: 'Regional Stage', title: 'TCS AI Friday', detail: 'Season 2 Runner-Up • Compliance platform', palette: jade },
  { label: 'Enterprise Role', title: 'TCS Developer', detail: 'AI Developer & Oracle JDE RDA • Bangalore', palette: violet },
  { label: 'Academic Peak', title: 'CGPA 9.40', detail: 'B.Tech IT • SRM Institute of Science and Tech', palette: amber },
  { label: 'Automation Original', title: 'n8n RAG Bot', detail: 'Agentic workflow • Gemini & OpenAI APIs', palette: ocean },
  { label: 'Compliance AI', title: 'Sustainability AI', detail: 'Next.js • FastAPI • Intelligent document analysis', palette: jade },
  { label: 'Enterprise Tech', title: 'Oracle JDE 9.1', detail: 'RDA Batch reporting • Data selection rules', palette: crimson },
  { label: 'Front-End Stack', title: 'Next.js & React', detail: 'Scalable web applications • 2 years experience', palette: ocean },
  { label: 'Town Hall Honor', title: 'Appreciation Award', detail: 'Awarded by Retail UK, EMEA & India Unit Head', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · IT',
    lines: ['SRM Institute of Science and Technology, Chennai', 'September 2020 – May 2024'],
    chips: ['CGPA 9.40'],
  },
  {
    kicker: 'Enterprise',
    title: 'Tata Consultancy Services',
    lines: [
      'AI Developer & Oracle JDE RDA Developer · Bangalore',
      'Gemini 2.5 Flash & Vertex AI sales reconciliation across 70+ UAE stores',
      'Python AI validation workflows & Oracle JDE EnterpriseOne RDA reports',
    ],
    chips: ['TCS', 'Gemini 2.5 Flash', 'Vertex AI', 'Python', 'Oracle JDE'],
  },
  {
    kicker: 'Skills',
    title: 'AI & Front-End',
    lines: ['Python, Java, JavaScript · React.js, Next.js, FastAPI', 'LangGraph, LangChain, Google ADK, n8n AI Agent Automation', 'PostgreSQL, Supabase DB, SQL, Neo4j, Vector Databases'],
    chips: ['Python', 'React.js', 'Next.js', 'LangGraph', 'FastAPI', 'RAG'],
  },
  {
    kicker: 'Projects',
    title: 'Five Productions',
    lines: [
      'CMARCPS — LangGraph Multi-Agent retail system with Neo4j',
      'Sustainability & Compliance — AI verification platform (Runner-Up)',
      'n8n AI RAG Chatbot — Gemini & OpenAI enterprise integration',
      'Real Estate & AnimaCorpus — Scalable Next.js front-end applications',
    ],
  },
  {
    kicker: 'Achievements',
    title: 'Top Honors',
    lines: [
      'Runner-Up — TCS AI Friday Season 2',
      'Certificate of Appreciation — TCS Town Hall (Unit Head Abhijit Niyogi)',
      'Regional Finalist — AI Friday (CMARCPS Multi-Agent AI)',
    ],
  },
  {
    kicker: 'Current Mission',
    title: 'Now Streaming',
    lines: ['Autonomous Agentic AI · Knowledge Graphs · High-Performance Web'],
  },
];

export type ProfileId = 'sushmita' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sushmita',
    name: 'Surya',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & architecture first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & enterprise', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2024–2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Credentials`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
