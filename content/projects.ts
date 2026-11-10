// All editable content lives in this file.
// Anything in [BRACKETS] is a placeholder: it shows on the site as red dashed text
// so you can find it. Replace the whole bracketed text with your real value.

export type Screenshot = {
  src: string; // e.g. "/screenshots/shopqr-1.png" (file goes in /public/screenshots)
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  name: string;
  summary: string;
  role: string;
  timeline: string;
  year: string;
  stack: string[];
  overview: string;
  problem: string;
  built: string;
  features: string[];
  result: string;
  improve: string;
  screenshots: Screenshot[];
  live: string;
  github: string;
};

export const site = {
  name: "Manash Khati",
  email: "webdevmanash@gmail.com",
  portfolio: "https://devmanash.vercel.app/", // "More projects" link in the footer
  socials: [
    { label: "X", href: "https://x.com/manashwebdev" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/manashwebdev" },
    { label: "GitHub", href: "https://github.com/manashwebdev" },
    { label: "Fiverr", href: "https://www.fiverr.com/manashwebdev" },
  ],
  about: [
    "I’m a full stack developer in Haridwar, India. I build MVPs end to end: the interface, the backend, the database, AI features and deployment, using React, Next.js, Node.js, Express and MongoDB.",
    "I have completed 55+ projects and shipped three SaaS-style products used by 200+ people: ShopQR, DevProof and ScopeShield. I focus on secure sign-in, fast pages (Lighthouse 90+ across my main projects) and practical use of the Gemini API. I work with founders who need a first version built and live. English and Hindi.",
  ],
  proof: "ShopQR, DevProof and ScopeShield are used by 200+ people in total.",
  description:
    "Case studies by Manash Khati, a full stack developer in Haridwar, India. React, Next.js, Node.js, MongoDB and the Gemini API. Each project: the problem, what was built, the result.",
};

export const projects: Project[] = [
  {
    slug: "devcircle",
    name: "DevCircle",
    summary: "A place for developers to learn in public and get feedback.",
    role: "Lead full stack developer",
    timeline: "Nov 2026 – Present",
    year: "2026",
    stack: ["Next.js", "Node.js", "Express", "MongoDB"],
    overview:
      "DevCircle is a platform for developers. They post their progress every day and get feedback from other developers. v1 launched as part of a 90 day coding challenge.",
    problem:
      "Beginner developers learn alone and quit early. They have nobody to share progress with.",
    built:
      "A web app where developers post daily progress and get feedback from other developers.",
    features: [
      "Daily progress posts",
      "Feedback from other developers on each post",
      "Real-time code collaboration workspace",
    ],
    result: "20 users on day one after the v1 launch, plus early positive feedback from other developers on X.",
    improve: "Add voice chat for pair programming.",
    screenshots: [],
    live: "https://devcircle-v1.vercel.app/",
    github: "https://github.com/manashwebdev/devcircle",
  },
  {
    slug: "shopqr",
    name: "ShopQR",
    summary: "QR menu and catalog SaaS for local shops.",
    role: "Full stack developer, end to end",
    timeline: "Oct 2026 – Nov 2026",
    year: "2026",
    stack: [
      "Next.js 15",
      "Express",
      "MongoDB",
      "Gemini API",
      "Cloudinary",
      "Docker",
      "Vercel",
      "Render",
    ],
    overview:
      "ShopQR lets local merchants launch a mobile-optimized catalog in minutes. Each shop gets a branded QR code and a shareable catalog, and customers order over WhatsApp. It has Free and Pro tiers.",
    problem:
      "Local merchants need a mobile-friendly catalog and a simple way to take orders, without building a website from scratch.",
    built:
      "A catalog builder with a branded QR code, shareable catalog, WhatsApp ordering and AI-written product descriptions using the Gemini API.",
    features: [
      "Catalog builder with a branded QR code and a shareable catalog link",
      "WhatsApp ordering with structured, pre-filled order messages",
      "AI-written product descriptions using the Gemini API",
      "Analytics tracking and customizable themes",
      "Security: bcrypt (cost 12), JWT sessions, a 5-attempt brute-force lockout, IP-based rate limiting and owner-scoped authorization",
    ],
    result:
      "Lighthouse 100/100/100/100 on desktop and 95 performance on mobile. 120 active shop merchants.",
    improve: "Add multi-language support for WhatsApp menus.",
    screenshots: [],
    live: "https://shopqr-nine.vercel.app/",
    github: "https://github.com/manashwebdev/shopqr",
  },
  {
    slug: "devproof",
    name: "DevProof",
    summary: "A credibility platform for developers.",
    role: "Full stack developer, end to end",
    timeline: "Oct 2026 – Nov 2026",
    year: "2026",
    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "GitHub API",
      "Tailwind CSS",
      "Framer Motion",
    ],
    overview:
      "DevProof has three analysis modules: claim verification, resume diffing and project health scoring. It turns GitHub activity into evidence a reader can check.",
    problem:
      "Resume claims are hard to check, and developers have no easy way to back them up with real activity.",
    built:
      "A tool that checks resume claims against GitHub activity and scores the health of a project.",
    features: [
      "GitHub activity analyzer that turns contribution metrics into Trust Scores",
      "Four evidence ratings: Strong, Moderate, Weak and No Evidence",
      "Resume comparison that detects added and removed skills and changed content",
      "PDF upload and parsing APIs",
      "Saved analysis history in MongoDB",
    ],
    result:
      "Lighthouse performance 98 on desktop and 92 on mobile, accessibility 98, best practices 96. 80 developers verifying resume claims.",
    improve: "Add automated GitHub repository health scoring.",
    screenshots: [],
    live: "https://devproof-eight.vercel.app/",
    github: "https://github.com/manashwebdev/devproof",
  },
  {
    slug: "scopeshield",
    name: "ScopeShield",
    summary: "A shared workspace where freelancers and clients agree on scope.",
    role: "Full stack developer, end to end",
    timeline: "Sep 2026",
    year: "2026",
    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Canvas API",
      "Vercel",
      "Render",
    ],
    overview:
      "ScopeShield is a shared scope-agreement workspace. Freelancers and clients keep deal terms in sync, and every change needs approval from both sides.",
    problem:
      "Deal terms between freelancers and clients change often, and both sides need to agree on every change.",
    built:
      "A shared workspace where freelancers and clients sync deal terms, with approval from both parties required for every change.",
    features: [
      "Shared scope-agreement workspace for freelancers and clients",
      "Dual-party approval required for every change",
      "Client Orbit: an HTML5 Canvas visualization that ranks projects by urgency, pending decisions and due dates",
      "Security: scrypt-hashed credentials, JWT sessions, login rate limiting and owner-scoped route authorization",
    ],
    result: "50 active freelancers and clients.",
    improve: "Build automated milestone payment tracking.",
    screenshots: [],
    live: "https://scopeshield-pi.vercel.app/",
    github: "https://github.com/manashwebdev/scopeshield",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
