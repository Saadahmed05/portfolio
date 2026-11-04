// Single source of truth for everything the site says.
// Every fact here comes from the resume or from the linked repository's code/README.

export const site = {
  name: "Saad Khazi Ahmed",
  shortName: "Saad Ahmed",
  url: "https://saadkhaziahmed.vercel.app",
  email: "saadkhaziahmed2005@gmail.com",
  github: "https://github.com/Saadahmed05",
  linkedin: "https://linkedin.com/in/saadahmed05",
  location: "Hyderabad, India",
  resume: "/Saad_Khazi_Ahmed_Resume.pdf",
  description:
    "Saad Khazi Ahmed is a final-year CSE (AI & ML) student in Hyderabad who builds AI systems from the data up: NLP corpus pipelines, recognition models, LLM tools and the backends and deploy pipelines around them.",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "recognition", label: "Recognition" },
  { id: "contact", label: "Contact" },
] as const;

export const education = [
  {
    school: "Vidya Jyothi Institute of Technology",
    place: "Hyderabad",
    detail: "B.Tech, Computer Science & Engineering (AI & ML)",
    result: "CGPA 8.96 / 10",
    years: "2023 — 2027",
  },
  {
    school: "Narayana Junior College",
    place: "Kurnool",
    detail: "Intermediate, MPC",
    result: "93%",
    years: "2021 — 2023",
  },
];

export const internship = {
  role: "AI Developer Intern",
  org: "VISWAM.AI",
  program: "Telugu LLM initiative — Meta × IIIT Hyderabad × Swecha Telangana",
  place: "Hyderabad",
  dates: "May — Jun 2025",
  points: [
    "Built NLP data pipelines for a national-scale Telugu large language model, working across multilingual speech and text datasets.",
    "Wrote the preprocessing workflows that cleaned, annotated and deduplicated raw data and assembled it into training corpora.",
    "Designed ingestion pipelines to bring new multilingual datasets into the corpus at scale.",
    "Worked with AI researchers on dataset validation, model evaluation and the data engineering in between.",
  ],
  stages: ["Speech + text sources", "Clean", "Annotate", "Deduplicate", "Validate", "Training corpus"],
};

export type Project = {
  slug: "hmer" | "cold-email" | "parking" | "cicd";
  index: string;
  title: string;
  kicker: string;
  problem: string;
  built: string;
  details: string[];
  decision: { label: string; text: string };
  stack: string[];
  context: string;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "hmer",
    index: "A",
    title: "Handwriting to LaTeX",
    kicker: "Handwritten Mathematical Expression Recognition",
    problem:
      "Handwritten maths is two-dimensional. Fractions, exponents and radicals stack and nest, so line-by-line OCR can read the symbols but loses the structure that gives them meaning.",
    built:
      "A recognition system that takes an image of a handwritten expression and produces structured LaTeX that can be typeset, searched or evaluated.",
    details: [
      "Image preprocessing to normalise handwriting before it reaches the model.",
      "OCR combined with an attention-based sequence model that emits the expression as LaTeX tokens.",
      "Training and evaluation tuned across multiple handwritten datasets.",
    ],
    decision: {
      label: "Why sequence modelling",
      text: "Predicting a LaTeX token sequence, with attention deciding where to look at each step, lets the model recover nesting and position together instead of classifying symbols in isolation.",
    },
    stack: ["Python", "Deep learning", "Computer vision", "OCR"],
    context: "Academic project",
    links: [],
  },
  {
    slug: "cold-email",
    index: "B",
    title: "Cold Email Agent",
    kicker: "LLM-powered outreach writer",
    problem:
      "Personalised outreach takes time to write well, and the generic templates that save that time are the ones people ignore.",
    built:
      "A Python agent that turns four inputs (who is sending, what they offer, who they are writing to, and the tone) into a complete message: subject line, a body under 120 words, a call to action, and a follow-up for the next day.",
    details: [
      "OpenAI-compatible client routed through OpenRouter to Mistral 7B Instruct.",
      "A library of 25 industry-specific prompt templates.",
      "The wider workflow connects generation to REST APIs, Supabase and Vercel for storage and delivery.",
    ],
    decision: {
      label: "Fixed output contract",
      text: "The prompt pins the response to the same four parts every time, so output can be parsed and sent without hand-editing. Going through an OpenAI-compatible endpoint means the model can be swapped without touching the code.",
    },
    stack: ["Python", "LLMs", "Prompt engineering", "REST APIs", "Supabase"],
    context: "Personal project",
    links: [{ label: "Repository", href: "https://github.com/Saadahmed05/cold-email-agent" }],
  },
  {
    slug: "parking",
    index: "C",
    title: "Smart Parking System",
    kicker: "Real-time slot monitoring on NodeMCU",
    problem:
      "In most car parks nobody knows which slots are free until they drive past them, so drivers circle and queues build at the entrance.",
    built:
      "An IoT system that watches 10+ parking slots and keeps their status up to date automatically, so availability can be read at a glance.",
    details: [
      "A sensor at each slot, read by a NodeMCU board.",
      "Embedded firmware turns raw readings into occupied / free states.",
      "Live status updates without anyone checking slots by hand.",
    ],
    decision: {
      label: "Hardware meets software",
      text: "Most of the work sat at the boundary: getting dependable detection out of physical sensors and turning it into a status people can trust.",
    },
    stack: ["IoT", "NodeMCU", "Embedded systems", "Sensors"],
    context: "Hardware project",
    links: [],
  },
  {
    slug: "cicd",
    index: "D",
    title: "Commit to Kubernetes",
    kicker: "Containerised web app with automated CI/CD",
    problem:
      "Deploying by hand is how untested builds reach users and how a bad release turns into downtime.",
    built:
      "A Node.js web app that is tested, containerised and deployed to Kubernetes automatically on every push, through two independent pipelines: GitHub Actions and Jenkins.",
    details: [
      "Jest tests with coverage, then a multi-stage, non-root Docker image with a health check.",
      "Each image is smoke-tested before it is pushed, and tagged by commit SHA so it can be traced.",
      "Rolling updates with zero unavailable pods, readiness and liveness probes, and an automatic rollback if a rollout fails.",
      "Horizontal Pod Autoscaler (2–6 pods at 70% CPU). Jenkins is configured entirely as code.",
    ],
    decision: {
      label: "Testing the deploy, not just the build",
      text: "Cloud runners can't reach a cluster on a laptop, so the Actions pipeline spins up a throwaway kind cluster inside the runner, deploys the new image and checks /health. Jenkins deploys the same image to the real local cluster.",
    },
    stack: ["Node.js", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
    context: "Personal project",
    links: [{ label: "Repository", href: "https://github.com/Saadahmed05/devops-webapp" }],
  },
];

// Active work. Facts from the SIEdits README, spike results and commit history.
export const current = {
  title: "SIEdits",
  kicker: "An open-source video editor that your AI assistant can operate",
  lead: "syedmukheeth",
  leadUrl: "https://github.com/syedmukheeth",
  summary:
    "Timeline editing and motion graphics in the browser, for talking-head creators. Every cut, caption, zoom and graphic is a typed, validated operation, so the creator's own assistant (Claude, ChatGPT, Cursor) can edit through an MCP connector, and every change can still be undone or tweaked by hand.",
  contribution:
    "I'm contributing alongside the project's creator. So far: fixing the Windows setup, hardening the local API, and stripping generic UI patterns out of the editor so it reads like professional editing software.",
  status: "Week 1 — go / no-go spikes before product code",
  spikes: [
    {
      q: "Can the browser decode footage, draw captions and export a 1080×1920 MP4?",
      a: "Valid H.264 + AAC output. Under 1× real time once, 2.4–2.7× under sustained load.",
      verdict: "Works, needs speed",
    },
    {
      q: "Are Whisper (WebGPU) word timestamps good enough for word-level captions?",
      a: "31% within ±100 ms raw. A constant +145 ms lag; 89–92% after correcting it.",
      verdict: "Needs correction",
    },
    {
      q: "Can an AI client drive edits through a remote MCP server with typed ops?",
      a: "Full agent edit round-trip passes locally. OAuth and deployment still open.",
      verdict: "Passes locally",
    },
  ],
  stack: ["TypeScript", "React 19", "Hono", "Zod", "MCP", "WebCodecs", "Whisper (WebGPU)"],
  links: [{ label: "Repository", href: "https://github.com/syedmukheeth/SIEdits" }],
};

export const moreWork = [
  {
    title: "PlacementIQ",
    text: "Placement analytics dashboard comparing JNTUA-affiliated colleges with leading institutions.",
    tech: "TypeScript",
    links: [
      { label: "Live", href: "https://project-tau-six-95.vercel.app" },
      { label: "Code", href: "https://github.com/Saadahmed05/PlacementIQ" },
    ],
  },
  {
    title: "MediVoice AI",
    text: "Clinical voice-transcription and documentation interface built on the Next.js App Router.",
    tech: "Next.js · TypeScript",
    links: [
      { label: "Live", href: "https://medivoice-ai-ten.vercel.app" },
      { label: "Code", href: "https://github.com/Saadahmed05/Medivoice-ai" },
    ],
  },
  {
    title: "Resume Benchmark AI",
    text: "Scores SWE student resumes against signals found in resumes that got accepted.",
    tech: "TypeScript",
    links: [{ label: "Code", href: "https://github.com/Saadahmed05/resumefeedback" }],
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "Java", "Go", "C", "SQL", "JavaScript"] },
  {
    group: "AI / ML",
    items: ["Machine learning", "NLP", "Large language models", "Prompt engineering", "Computer vision", "OCR"],
  },
  { group: "Backend", items: ["Flask", "Django", "REST APIs", "Supabase"] },
  { group: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "Jenkins", "Vercel", "Git & GitHub"] },
  { group: "Data", items: ["Power BI", "Excel"] },
  {
    group: "Foundations",
    items: ["Data structures & algorithms", "OOP", "DBMS", "Operating systems", "Computer networks"],
  },
];

export const hackathons = [
  { result: "Finalist", name: "HackForge 2.0", host: "ISL Engineering College" },
  { result: "Participant", name: "CodeStreet Hackathon", host: "American Express" },
  { result: "Participant", name: "Bharatiya Antariksh Hackathon", host: "ISRO" },
];

export const certifications = [
  { name: "Cloud Engineering, Data & Analytics (CEDA) Launchpad", issuer: "PwC" },
  { name: "Machine Learning using Python", issuer: "Infosys" },
  { name: "Red Hat Linux Fundamentals", issuer: "Red Hat" },
  { name: "Python Essentials", issuer: "Cisco" },
  { name: "C Essentials", issuer: "Cisco" },
  { name: "Data Analytics Essentials", issuer: "Cisco" },
];
