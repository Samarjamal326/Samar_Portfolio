import { Project, Experience, Certification, Achievement, TechItem, ContactInfo } from '../types/portfolio';

export const contactInfo: ContactInfo = {
  email: 'samarjamal326@gmail.com',
  phone: '+91 8445759368',
  location: 'Dehradun, India',
  github: 'https://github.com/Samarjamal326',
  linkedin: 'https://www.linkedin.com/in/samar-jamal',
  resumePdf: '/Samar_Jamal_Resume.pdf',
};

export const bioData = {
  name: 'Samar Jamal',
  role: 'AI & Machine Learning Student',
  university: 'Graphic Era Hill University',
  degree: 'B.Tech in Computer Science (Specialization in AI & ML)',
  period: 'Aug 2023 – Present',
  school: 'Oxford School of Excellence',
  schoolPeriod: 'Apr 2022 – Mar 2023',
  schoolStream: 'Senior Secondary (PCM)',
  shortIntro: 'Computer Science student specializing in AI & ML at Graphic Era Hill University, Dehradun. AI/ML Intern at FlyRank and Machine Learning Trainee at Amazon ML Summer School.',
  overview: [
    'I am an AI & Machine Learning student at Graphic Era Hill University, Dehradun. My focus is on applied machine learning, computer vision, and reinforcement learning environments.',
    'Currently, I am working as an AI/ML Intern at FlyRank building search-performance ML workflows and holdout validation playbooks. I am also a Machine Learning Trainee at the Amazon ML Summer School, selected through a competitive nationwide process covering deep learning, RL, LLMs, and causal inference.',
    'My work includes building an OpenEnv-compliant RL disaster-response simulator evaluated with LLM agents, an edge-AI assistive IoT device on ESP32, and full-stack medical intelligence platforms with RAG.',
  ],
};

export const projectsData: Project[] = [
  {
    id: 'payback',
    title: 'PayBack',
    category: 'Machine Learning & Autonomous Systems',
    tagline: 'Autonomous B2B payment recovery platform using calibrated XGBoost scoring and Razorpay webhook-driven reconciliation.',
    description: 'PayBack is an autonomous platform for B2B payment recovery. Uses an XGBoost model calibrated with Isotonic Regression to score invoices by expected recovery value. Based on scores, the system triggers automated recovery workflows, reconciles payments through Razorpay webhooks, and writes state to Supabase PostgreSQL.',
    keyMetrics: [
      { label: 'Scoring Engine', value: 'XGBoost + Isotonic Calibration' },
      { label: 'Payment Integration', value: 'Razorpay Webhooks' },
      { label: 'Backend', value: 'FastAPI + PostgreSQL' },
      { label: 'Storage', value: 'Supabase' },
    ],
    techStack: ['Python', 'FastAPI', 'XGBoost', 'Scikit-learn', 'Razorpay API', 'Supabase', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/Samarjamal326/PayBack',
    architecture: `
Razorpay Webhooks --> FastAPI (HMAC Verification) --> XGBoost + Isotonic Calibration
                                                            |
                                                            v
                                             ERV Decision --> Escalation Workflow
                                                            |
                                                            v
                                                     Supabase PostgreSQL
    `,
    challenges: [
      {
        title: 'Probability Calibration for Expected Value Scoring',
        solution: 'Raw XGBoost probability outputs are often uncalibrated near extremes. Applied Isotonic Regression post-processing to align predicted probabilities with empirical recovery rates for reliable scoring.'
      },
      {
        title: 'Idempotent Webhook Processing',
        solution: 'Ensured payment event processing by storing idempotency keys and using row-level locking in PostgreSQL to handle Razorpay webhook retries safely.'
      }
    ],
    layoutType: 'flagship'
  },
  {
    id: 'mediscan-ai',
    title: 'MediScan AI',
    category: 'Generative AI & RAG',
    tagline: 'RAG-powered healthcare intelligence platform for disease prediction and report Q&A with Gemini API and Pinecone.',
    description: 'Engineered a full-stack AI healthcare platform using React, TypeScript, Node.js, and PostgreSQL for disease prediction, drug recommendation, and heart-risk assessment. Built a RAG chatbot with the Gemini API and Pinecone using semantic search and persistent conversational memory, with contextual query rewriting and source-grounded retrieval.',
    keyMetrics: [
      { label: 'Vector Index', value: 'Pinecone' },
      { label: 'LLM Integration', value: 'Google Gemini API' },
      { label: 'Frontend & Backend', value: 'React, TypeScript, Node.js' },
      { label: 'Database', value: 'PostgreSQL' },
    ],
    techStack: ['Python', 'Google Gemini API', 'Pinecone', 'LangChain', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/Samarjamal326/MediScan_Ai',
    architecture: `
Medical Report (PDF) --> OCR / Chunking --> Embedding --> Pinecone Vector Index
                                                               |
User Query --> Contextual Query Rewriting --> Gemini API --> Grounded Response
    `,
    challenges: [
      {
        title: 'Source Grounding in Clinical Responses',
        solution: 'Designed contextual query rewriting and strict source-grounded retrieval constraints to reduce ungrounded outputs and maintain high retrieval relevance.'
      }
    ],
    layoutType: 'dual'
  },
  {
    id: 'disaster-coordinator',
    title: 'AI Disaster Response Coordinator',
    category: 'Reinforcement Learning & Agent Systems',
    tagline: 'OpenEnv reinforcement learning environment for disaster-response resource allocation and priority triage.',
    description: 'Built an OpenEnv-compliant RL environment in Python for disaster-response resource allocation, modeling priority triage and constrained dispatch. Benchmarked a Qwen2.5-72B-Instruct baseline with a 0.884 weighted evaluation score; containerized with Docker and served inference through FastAPI.',
    keyMetrics: [
      { label: 'Environment', value: 'OpenEnv RL Framework' },
      { label: 'Baseline Agent', value: 'Qwen2.5-72B-Instruct' },
      { label: 'Benchmark Score', value: '0.884 weighted' },
      { label: 'Deployment', value: 'FastAPI + Docker' },
    ],
    techStack: ['Python', 'OpenEnv', 'PyTorch', 'Qwen2.5-72B', 'FastAPI', 'Docker'],
    githubUrl: 'https://github.com/Samarjamal326/Disaster_Management',
    architecture: `
Incident Generator --> OpenEnv Environment (State & Action Space)
                                     |
                          Qwen2.5-72B-Instruct Baseline
                                     |
                          Triage & Dispatch Allocation
                                     |
                          FastAPI Inference / Benchmark
    `,
    challenges: [
      {
        title: 'Constrained Multi-Objective Resource Allocation',
        solution: 'Formulated a state-action reward structure that penalizes delayed critical triage while respecting constrained vehicle and supply capacities over multi-step episodes.'
      }
    ],
    layoutType: 'dual'
  },
  {
    id: 'scene-classification',
    title: 'Scene Classification — alrIEEEna\'26 ML Challenge',
    category: 'Deep Learning & Computer Vision',
    tagline: 'EfficientNet-B2 classifier trained on 397 categories using PyTorch, mixed-precision AMP, and OneCycleLR.',
    description: 'Developed an EfficientNet-B2 classifier for the alrIEEEna\'26 ML Challenge organized by IEEE SB GEHU. Trained across 397 scene categories using PyTorch, mixed-precision training (AMP), and OneCycleLR scheduling for stable convergence.',
    keyMetrics: [
      { label: 'Backbone', value: 'EfficientNet-B2' },
      { label: 'Categories', value: '397 classes' },
      { label: 'Framework', value: 'PyTorch (AMP)' },
      { label: 'Scheduler', value: 'OneCycleLR' },
    ],
    techStack: ['PyTorch', 'timm', 'EfficientNet-B2', 'Albumentations', 'AMP', 'OneCycleLR'],
    githubUrl: 'https://github.com/Samarjamal326/alrIEEEna26-ML-Challenge',
    architecture: `Input (RGB) --> Augmentation --> EfficientNet-B2 Backbone --> Global Avg Pool --> Linear --> Softmax`,
    challenges: [
      {
        title: 'Optimization Stability Across 397 Categories',
        solution: 'Used OneCycleLR learning rate scheduling alongside AMP mixed-precision training to achieve fast and stable convergence.'
      }
    ],
    layoutType: 'ledger'
  },
  {
    id: 'senselink',
    title: 'SenseLink',
    category: 'Edge AI & Assistive Systems',
    tagline: 'Assistive IoT platform on ESP32 using YOLO for real-time obstacle detection and on-device NLP.',
    description: 'Built an edge-AI assistive system on ESP32 using YOLO for real-time object and obstacle detection with navigation support. Integrated live captioning with on-device NLP and computer vision pipelines for constrained-device inference.',
    keyMetrics: [
      { label: 'Hardware', value: 'ESP32 Platform' },
      { label: 'Vision Model', value: 'YOLO Detection' },
      { label: 'NLP', value: 'On-Device Captioning' },
      { label: 'Purpose', value: 'Assistive Navigation' },
    ],
    techStack: ['ESP32', 'Python', 'YOLO', 'OpenCV', 'Embedded Systems'],
    githubUrl: 'https://github.com/Samarjamal326/Sense_Link',
    architecture: `ESP32 Camera --> YOLO Object Detection --> On-Device NLP Guidance --> Audio / Navigation Output`,
    challenges: [
      {
        title: 'Edge Inference Constraints',
        solution: 'Optimized inference throughput for constrained hardware environments to support responsive obstacle alerts.'
      }
    ],
    layoutType: 'ledger'
  },
  {
    id: 'medi-orchestrator',
    title: 'Medi Orchestrator',
    category: 'Multi-Agent AI Systems',
    tagline: 'Multi-agent clinical routing framework with Qdrant vector retrieval and deterministic safety guardrails.',
    description: 'Multi-agent clinical routing system using LangChain, FastAPI, and Qdrant vector retrieval. Routes incoming queries to specialized triage and knowledge retrieval agents with deterministic validation guardrails.',
    keyMetrics: [
      { label: 'Architecture', value: 'Multi-Agent Routing' },
      { label: 'Vector Store', value: 'Qdrant' },
      { label: 'Backend', value: 'FastAPI + LangChain' },
      { label: 'Guardrails', value: 'Deterministic Validation' },
    ],
    techStack: ['Python', 'Qdrant', 'LangChain', 'FastAPI', 'Pydantic'],
    githubUrl: 'https://github.com/Samarjamal326/MediOrchesctrator-Agent',
    architecture: `Query --> Orchestrator --> [Triage Agent | Knowledge Agent (Qdrant)] --> Safety Guardrail --> Response`,
    challenges: [
      {
        title: 'Multi-Agent State Management',
        solution: 'Implemented structured message schemas with Pydantic and explicit hop boundaries to ensure deterministic routing.'
      }
    ],
    layoutType: 'ledger'
  }
];

export const experienceData: Experience[] = [
  {
    id: 'flyrank',
    role: 'AI/ML Intern',
    company: 'FlyRank',
    location: 'Remote',
    period: 'Aug 2026 – Present',
    current: true,
    type: 'Internship',
    highlights: [
      'Built a content-refresh ML workflow using anonymized search-performance data to prioritize pages for review.',
      'Defined targets, features, data contracts, and validation; compared a gradient-boosting model using client-level holdout validation.',
      'Evaluated Precision@K, Average Precision, and ROC-AUC; translated results into an actionable content-refresh playbook.',
    ],
    skills: ['Python', 'Machine Learning', 'Gradient Boosting', 'Model Validation', 'ROC-AUC'],
  },
  {
    id: 'amazon-ml',
    role: 'Machine Learning Trainee',
    company: 'Amazon ML Summer School',
    location: 'Remote',
    period: 'Jul 2026 – Present',
    current: true,
    type: 'Training Program',
    highlights: [
      'Selected through a competitive, multi-stage nationwide process for a cohort trained by Amazon Applied Scientists and Engineers.',
      'Built foundations in Python, PyTorch, deep learning, reinforcement learning, large language models, and causal inference through structured coursework and projects.',
    ],
    skills: ['PyTorch', 'Deep Learning', 'Reinforcement Learning', 'LLMs', 'Causal Inference'],
  },
  {
    id: 'servicenow',
    role: 'Micro-Intern',
    company: 'ServiceNow',
    location: 'India',
    period: '2024',
    current: false,
    type: 'Micro-Internship',
    highlights: [
      'Completed a structured micro-internship covering platform fundamentals and enterprise workflow automation.',
    ],
    skills: ['ServiceNow', 'Workflow Automation'],
  },
];

export const certificationsData: Certification[] = [
  {
    id: 'cert-gcp-arcade',
    name: 'Google Cloud Arcade Program',
    issuer: 'Google Cloud Skills Boost',
    date: '2025',
    verifyUrl: 'https://www.cloudskillsboost.google',
  },
  {
    id: 'cert-aws-cloud',
    name: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Sep – Oct 2025',
    verifyUrl: 'https://aws.amazon.com/training/',
  },
  {
    id: 'cert-ibm-dl-rl',
    name: 'Deep Learning and Reinforcement Learning',
    issuer: 'IBM (Coursera)',
    date: 'Jan – Feb 2025',
    verifyUrl: 'https://www.coursera.org',
  },
];

export const achievementsData: Achievement[] = [
  {
    id: 'achieve-hackon',
    title: 'Amazon HackOn Season 6',
    rank: 'Top 75 Coder',
    organizer: 'Amazon India',
    year: '2024',
    description: 'Top 75 Coder in Amazon HackOn Season 6, selected among thousands of participants nationwide.',
  },
  {
    id: 'achieve-hackoholic',
    title: 'Hack-O-Holic 3.0',
    rank: '2nd Runner-Up',
    organizer: 'Graphic Era Hill University',
    year: '2024',
    description: '2nd Runner-Up in Hack-O-Holic 3.0 among 500+ participants.',
  },
  {
    id: 'achieve-codev',
    title: 'Codev Club',
    rank: 'Core Member',
    organizer: 'Codev Club, GEHU',
    year: '2023 – Present',
    description: 'Core Member, Codev Club – co-organized 3+ hackathons and coding events.',
  },
  {
    id: 'achieve-ieee',
    title: 'IEEE Research Club',
    rank: 'Active Member',
    organizer: 'IEEE SB GEHU',
    year: '2023 – Present',
    description: 'Active member, IEEE Research Club – contributed to technical events and innovation initiatives.',
  },
];

export const techStackData: TechItem[] = [
  // Languages
  { name: 'Python',              category: 'Languages',               deviconClass: 'devicon-python-plain colored' },
  { name: 'C/C++',               category: 'Languages',               deviconClass: 'devicon-cplusplus-plain colored' },
  { name: 'Java',                category: 'Languages',               deviconClass: 'devicon-java-plain colored' },
  { name: 'JavaScript',          category: 'Languages',               deviconClass: 'devicon-javascript-plain colored' },
  { name: 'TypeScript',          category: 'Languages',               deviconClass: 'devicon-typescript-plain colored' },
  { name: 'SQL',                 category: 'Languages',               deviconClass: 'devicon-postgresql-plain colored' },

  // Machine Learning & Deep Learning
  { name: 'PyTorch',             category: 'ML & Deep Learning',      deviconClass: 'devicon-pytorch-plain colored' },
  { name: 'TensorFlow',          category: 'ML & Deep Learning',      deviconClass: 'devicon-tensorflow-original colored' },
  { name: 'Scikit-learn',        category: 'ML & Deep Learning',      deviconClass: 'devicon-scikitlearn-plain colored' },
  { name: 'NumPy',               category: 'ML & Deep Learning',      deviconClass: 'devicon-numpy-plain colored' },
  { name: 'Pandas',              category: 'ML & Deep Learning',      deviconClass: 'devicon-pandas-plain colored' },
  { name: 'Matplotlib',          category: 'ML & Deep Learning',      deviconClass: 'devicon-matplotlib-plain colored' },
  { name: 'Jupyter',             category: 'ML & Deep Learning',      deviconClass: 'devicon-jupyter-plain colored' },
  { name: 'XGBoost',             category: 'ML & Deep Learning',      deviconClass: '' },

  // Generative AI & LLMs
  { name: 'LangChain',           category: 'Generative AI & Vision',  simpleIconKey: 'siLangchain' },
  { name: 'Hugging Face',        category: 'Generative AI & Vision',  simpleIconKey: 'siHuggingface' },
  { name: 'Pinecone',            category: 'Generative AI & Vision',  simpleIconKey: 'siPinecone' },
  { name: 'Qdrant',              category: 'Generative AI & Vision',  simpleIconKey: 'siQdrant' },
  { name: 'Google Gemini API',   category: 'Generative AI & Vision',  simpleIconKey: 'siGooglegemini' },
  { name: 'OpenCV',              category: 'Generative AI & Vision',  deviconClass: 'devicon-opencv-plain colored' },

  // Backend & Web
  { name: 'FastAPI',             category: 'Backend & Web',           deviconClass: 'devicon-fastapi-plain colored' },
  { name: 'Django',              category: 'Backend & Web',           deviconClass: 'devicon-django-plain colored' },
  { name: 'Node.js',             category: 'Backend & Web',           deviconClass: 'devicon-nodejs-plain colored' },
  { name: 'React',               category: 'Backend & Web',           deviconClass: 'devicon-react-original colored' },
  { name: 'PostgreSQL',          category: 'Backend & Web',           deviconClass: 'devicon-postgresql-plain colored' },
  { name: 'Supabase',            category: 'Backend & Web',           deviconClass: 'devicon-supabase-plain colored' },

  // Databases & Cloud
  { name: 'Git',                 category: 'Databases & Cloud',       deviconClass: 'devicon-git-plain colored' },
  { name: 'GitHub',              category: 'Databases & Cloud',       deviconClass: 'devicon-github-original' },
  { name: 'Docker',              category: 'Databases & Cloud',       deviconClass: 'devicon-docker-plain colored' },
  { name: 'AWS',                 category: 'Databases & Cloud',       deviconClass: 'devicon-amazonwebservices-plain-wordmark colored' },
  { name: 'Google Cloud',        category: 'Databases & Cloud',       deviconClass: 'devicon-googlecloud-plain colored' },
  { name: 'Vercel',              category: 'Databases & Cloud',       deviconClass: 'devicon-vercel-original' },
];
