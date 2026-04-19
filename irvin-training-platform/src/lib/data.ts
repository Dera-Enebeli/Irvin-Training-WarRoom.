export interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  steps: string[];
}

export interface LegalReference {
  id: string;
  title: string;
  law: string;
  keyPoints: string[];
  penalty: string;
}

export interface PitchScript {
  id: string;
  title: string;
  context: string;
  content: string;
}

export interface Objection {
  id: string;
  objection: string;
  counters: { point: string; response: string }[];
}

export interface Vulnerability {
  id: string;
  title: string;
  description: string;
  evidence: string;
  pitch: string;
}

export interface PricingTier {
  id: number;
  name: string;
  price: string;
  timeline: string;
  includes: string[];
  notIncludes?: string[];
}

export const pricingTiers: PricingTier[] = [
  {
    id: 1,
    name: "Findings Report",
    price: "₦1.5-2M",
    timeline: "3-5 days",
    includes: [
      "Full vulnerability audit report",
      "Documented findings with screenshots",
      "Evidence of each security gap",
      "Prioritized risk assessment",
      "Executive summary for management"
    ],
    notIncludes: [
      "Fixing any vulnerabilities",
      "Implementation assistance",
      "NDPA compliance setup",
      "Ongoing support"
    ]
  },
  {
    id: 2,
    name: "Basic Remediation",
    price: "₦2.5-3M",
    timeline: "1-2 weeks",
    includes: [
      "Everything in Tier 1",
      "Disable user enumeration endpoint",
      "Remove WordPress version from URLs",
      "Configure basic security headers",
      "Fix Referer header leaks",
      "1-week support for questions"
    ],
    notIncludes: [
      "NDPA compliance documentation",
      "Ongoing monitoring",
      "Legal representation"
    ]
  },
  {
    id: 3,
    name: "Full Compliance",
    price: "₦4-5M",
    timeline: "2-4 weeks",
    includes: [
      "Everything in Tier 2",
      "NDPA 2023 compliance setup",
      "Data processing policy document",
      "Cookie consent mechanism",
      "Privacy policy update",
      "Records of processing activities (Article 8)",
      "CAR filing assistance",
      "3-month ongoing support",
      "Security monitoring"
    ],
    notIncludes: [
      "Database migration",
      "Infrastructure changes",
      "Legal representation in court"
    ]
  },
  {
    id: 4,
    name: "Migration & Overhaul",
    price: "₦15-30M",
    timeline: "2-6 months",
    includes: [
      "Complete database analysis",
      "Secure platform migration",
      "Full website rebuild if needed",
      "Complete NDPA compliance suite",
      "Staff training on new system",
      "6-12 months maintenance",
      "Disaster recovery setup",
      "Security audit certification"
    ],
    notIncludes: [
      "Legal liability for future breaches",
      "Third-party vendor issues",
      "Client-side data handling"
    ]
  }
];

export const technicalChecklist: ChecklistItem[] = [
  {
    id: 'wp-version',
    title: 'WordPress Version Check',
    description: 'Check if the site is broadcasting its WordPress version number in URLs',
    steps: [
      'Open the website in Chrome',
      'Right-click > Inspect > Network Tab',
      'Refresh the page',
      'Look for URLs containing "ver=6.1.5" or similar version numbers',
      'Screenshot the initiator column showing index.js?ver=6.1.5:1',
      'This exposes the exact WP version to hackers'
    ]
  },
  {
    id: 'schema-fetch',
    title: 'Schema Fetch Analysis',
    description: 'Find third-party schema requests that leak user data',
    steps: [
      'In Network tab, filter by "Fetch/XHR"',
      'Look for requests named "schema" or similar',
      'Click on the request to open the side panel',
      'Go to Headers tab',
      'Check the "Referer" header - it shows exact page user is viewing',
      'Screenshot the Referer line showing /payday-loan/ or similar'
    ]
  },
  {
    id: 'referer-leak',
    title: 'Referer Header Leak Detection',
    description: 'Document how the site leaks user financial intent to third parties',
    steps: [
      'Find any request to google, doubleclick, or external APIs',
      'Click the request > Headers tab',
      'Scroll to "Request Headers" section',
      'Find the "Referer" line (spelled with one r)',
      'The Referer tells the third party exactly what page the user is on',
      'Example: Referer: https://www.irvinglobalgroup.com/payday-loan/'
    ]
  },
  {
    id: 'api-enumeration',
    title: 'REST API Enumeration',
    description: 'Check if WordPress REST API exposes user data publicly',
    steps: [
      'Go to URL: [site]/wp-json/wp/v2/users',
      'If it returns JSON with user data, it is vulnerable',
      'Screenshot the response showing admin usernames',
      'Note: IDs 1, 2, 3 are usually the original creator accounts',
      'This allows hackers to run brute force attacks on known usernames'
    ]
  },
  {
    id: 'form-exposure',
    title: 'Form & Endpoint Exposure',
    description: 'Find exposed form IDs and validation rules',
    steps: [
      'In Network tab, look for /contact-forms/ requests',
      'Click the request to see the endpoint URL',
      'Note the specific form ID (e.g., 2199)',
      'This allows attackers to enumerate all forms on the site',
      'Exposed validation rules can aid script injection attacks'
    ]
  },
  {
    id: 'document-findings',
    title: 'Document Findings',
    description: 'How to properly document and present your findings',
    steps: [
      'Capture screenshots of each vulnerability',
      'Highlight the specific evidence (version number, Referer, etc.)',
      'Prepare a live demo - open site, show Network tab in real-time',
      'Create a simple PDF audit report with findings',
      'Practice the walkthrough until you can do it in 2 minutes'
    ]
  }
];

export const wpVulnerabilities: Vulnerability[] = [
  {
    id: 'version-broadcast',
    title: 'Version Number Broadcast',
    description: 'The site explicitly reveals WordPress 6.1.5 in URLs',
    evidence: 'index.js?ver=6.1.5:1 in the Initiator column',
    pitch: "This isn't just a number - it's a Public Vulnerability Broadcast. Hackers use automated bots to scan for sites running version 6.1.5 because they have documented 'known exploits' for that specific version. You're handing them the keys to the building."
  },
  {
    id: 'user-enumeration',
    title: 'Admin User Enumeration',
    description: 'The /wp-json/wp/v2/users endpoint exposes admin usernames',
    evidence: 'JSON response showing usernames: irving, puzqqzdurzay, xvbswdwxgeqy',
    pitch: 'A hacker no longer needs to guess login names. They can now run targeted brute force attacks specifically against these three IDs. ID #1 (irving) likely has God Mode over the entire financial portal.'
  },
  {
    id: 'referer-leak',
    title: 'Financial Intent Leak via Referer',
    description: 'The Referer header broadcasts exactly what page users are viewing',
    evidence: 'Referer: https://www.irvinglobalgroup.com/payday-loan/',
    pitch: "Every time a client visits the Payday Loan page, your website tells Google: 'User X is currently looking for a Payday Loan.' You're effectively providing your competitors with a free list of people seeking loans."
  },
  {
    id: 'form-enumeration',
    title: 'Form ID Enumeration',
    description: 'Exposed form IDs allow mapping of all hidden forms',
    evidence: '/contact-forms/2199/feedback/schema - reveals form ID 2199',
    pitch: "You're exposing internal system IDs to the public. Any teenager with a laptop can now map out every hidden form on your site just by changing that number - including hidden admin forms or internal application portals."
  },
  {
    id: 'protocol-lag',
    title: 'Protocol Lag (HTTP/2 vs QUIC)',
    description: 'Site runs on outdated HTTP/2 with high latency',
    evidence: 'Protocol column shows h2, waterfall shows significant latency',
    pitch: 'In fintech, speed equals trust. If a client waits 5 seconds for a loan page to load, they assume your internal processing is just as slow and leave for a faster competitor.'
  }
];

export const devtoolsSteps = [
  {
    step: 1,
    action: 'Open the target website in Chrome',
    detail: 'Navigate to the Irvin Global site or any site you want to audit'
  },
  {
    step: 2,
    action: 'Right-click anywhere on the page',
    detail: 'Select "Inspect" from the context menu'
  },
  {
    step: 3,
    action: 'Click on the "Network" tab',
    detail: 'This shows all network requests the page is making'
  },
  {
    step: 4,
    action: 'Refresh the page (F5 or Ctrl+R)',
    detail: 'This captures all initial requests as the page loads'
  },
  {
    step: 5,
    action: 'Filter for specific requests',
    detail: 'Type "google", "doubleclick", "fetch", or "xhr" in the filter box'
  },
  {
    step: 6,
    action: 'Click on a request to see details',
    detail: 'A panel slides out from the right'
  },
  {
    step: 7,
    action: 'Check the "Headers" tab',
    detail: 'Look for "Referer" - this shows what page the user is on'
  },
  {
    step: 8,
    action: 'Check the "Initiator" column',
    detail: 'Look for version numbers like ver=6.1.5'
  },
  {
    step: 9,
    action: 'Screenshot the evidence',
    detail: 'Capture the specific lines that prove the vulnerability'
  }
];

export const headersAnalysis = [
  {
    header: 'Referer',
    explanation: "Shows the exact URL the user is visiting. Spelled with one 'r' in HTTP protocol.",
    example: 'Referer: https://www.irvinglobalgroup.com/payday-loan/',
    risk: 'Broadcasts financial intent - tells third parties what products user is interested in'
  },
  {
    header: 'Initiator',
    explanation: 'Shows which script or file initiated the request',
    example: 'index.js?ver=6.1.5:1',
    risk: 'Exposes WordPress version - hackers search for this specific version to find exploits'
  },
  {
    header: 'User-Agent',
    explanation: 'Identifies the browser and device being used',
    example: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36...',
    risk: 'Can reveal device information but less critical than Referer'
  },
  {
    header: 'Protocol',
    explanation: 'The HTTP protocol version being used',
    example: 'h2 (HTTP/2) or h3 (QUIC)',
    risk: 'Old h2 protocol causes latency - slow loading times = lost customers'
  }
];

export const legalReferences: LegalReference[] = [
  {
    id: 'ndpa-2023',
    title: 'Nigeria Data Protection Act 2023',
    law: 'NDPA 2023',
    keyPoints: [
      'Data Controllers must protect personal data by default',
      'Section 24(3): "Duty of Care" - data controllers owe duty to protect data subjects',
      'Section 24(1)(f): Mandates "appropriate security... against unauthorized processing"',
      'Section 24(2): Requires "appropriate technical and organizational measures" for confidentiality',
      'Section 34 & 40: Must delete/decommission old systems still holding data',
      'Section 48: Penalty - ₦10 Million or 2% of Annual Gross Revenue',
      'Requires "freely given, specific, and informed consent" before tracking',
      'Classifies financial status (seeking loan) as Sensitive Personal Data',
      'Cross-border data transfers require explicit consent'
    ],
    penalty: '2% of Annual Gross Revenue or ₦10 Million (whichever is higher)'
  },
  {
    id: 'gaid-2025',
    title: 'General Application and Implementation Directive 2025',
    law: 'GAID 2025',
    keyPoints: [
      'Issued March 2025 by NDPC - "The new law of the land"',
      'Ended the "grace period" for Nigerian firms',
      'June 30, 2025 deadline for Compliance Audit Returns (CAR)',
      'Article 7: Compliance Measures - Privacy by Design required',
      'Article 7(f): Requires Confidentiality, Integrity and Availability',
      'Article 7(i): Requires Privacy by Design - trackers without consent violate this',
      'Article 7(m): Requires Transparency - hidden API leaks violate this',
      'Article 19: Security Requirements - breach detection & containment measures',
      'Article 20: 72-hour breach notification to NDPC required',
      'Article 24: Lawful Basis - consent, contract, legal obligation, vital interests, public task, legitimate interests',
      'Article 27: Must tell users exactly what data is sent to Google',
      'Article 28: DPIA (Data Privacy Impact Assessment) mandatory for financial firms',
      'Article 34: Data Processing Agreement requirements - processor must have written DPA',
      'Type-1 violations for unauthorized data disclosure'
    ],
    penalty: '2% of annual revenue - enforceable as of September 2025'
  },
  {
    id: 'cybercrimes-2024',
    title: 'Cybercrimes (Amendment) Act 2024',
    law: 'CCAA 2024',
    keyPoints: [
      'Section 16A: Unlawful access to financial data - 5 years imprisonment',
      'Section 18: Computer-related fraud - 10 years or ₦10M fine',
      'Section 22: Interception of electronic messages - 3 years imprisonment',
      'Section 25: Identity theft/fraud - 7 years imprisonment',
      'Complements NDPA - adds criminal liability (jail time) to civil fines',
      'NDPA 2% revenue fine + criminal prosecution = double jeopardy for officers',
      'Personal liability for CTO/CIO who fail to secure systems'
    ],
    penalty: '5-10 years imprisonment + ₦10 Million fine'
  },
  {
    id: 'ndpr-2019',
    title: 'Nigeria Data Protection Regulation 2019 (Legacy)',
    law: 'NDPR 2019',
    keyPoints: [
      'Original data protection framework (repealed by GAID 2025)',
      'Defined Data Controllers and Data Processors',
      'Required consent for data processing',
      'Subject to NDPC oversight',
      'Still relevant for understanding evolution of Nigerian privacy law',
      'Useful when arguing "you were warned in 2019"'
    ],
    penalty: 'Warning orders and fines up to ₦10 Million (now superseded)'
  }
];

export const pitchScripts: PitchScript[] = [
  {
    id: 'whatsapp-hook',
    title: 'WhatsApp Hook Message',
    context: 'First contact - get them to say "Come to the office"',
    content: `I've just run a Security Network Audit on your platform. Beyond the visual errors, your site is currently leaking the financial intent of your clients to third-party ad networks.

When a client looks at your loan products, they are being "tagged" by trackers, allowing your competitors to target them directly. For a financial group, this isn't just a bug - it's a compliance breach.

I can be at your office to show you the proof and how to fix it. When works for you?`
  },
  {
    id: 'whatsapp-pattern-interrupt',
    title: 'WhatsApp Pattern Interrupt',
    context: 'For when they focus on Instagram instead of website',
    content: `I hear you on Instagram! But having a "broken" website is actually worse than having no website at all. It tells every client who Googles you that the firm has stopped paying attention to the details.

I can turn that "abandoned" site into a high-speed, secure asset that runs itself. Who should I send the security report to?`
  },
  {
    id: 'in-person-intro',
    title: 'In-Person Boardroom Introduction',
    context: 'Opening statement when sitting with decision makers',
    content: `I've reviewed the current digital infrastructure of Irvin Global against the 2026 NDPC Enforcement Guidelines. Currently, the firm is exposed to a Type-1 Compliance Breach because the Payday Loan portal is leaking behavioral data to third-party networks without consent.

In the current 2026 "Enforcement Season," where the NDPC is actively issuing 2% revenue fines, this website is a massive financial liability. I have a Next.js 16 framework that is "Compliant by Design" - it blocks all leaks and secures your client intent within a private environment.`
  },
  {
    id: 'the-close',
    title: 'The ₦5M Close',
    context: 'When presenting the price',
    content: `My fee for this full migration is ₦5.0 Million. This isn't for a "new website" - it's for the total removal of a ₦100 Million regulatory liability.

This covers:
- The decommissioning of the vulnerable legacy infrastructure
- The deployment of a private, high-speed "Black Box" framework that ensures Zero-Leakage of client intent
- A 12-month Compliance Guarantee where I act as your external Data Security Liaison

For a firm of Irvin Global's stature, leaving a ₦100M exposure open is a risk that far outweighs a ₦5M investment in permanent security.`
  },
  {
    id: 'nda-script',
    title: 'NDA Script',
    context: 'Before showing the full vulnerability roadmap',
    content: `To protect Irvin Global from these vulnerabilities being made public during our discussion, I've prepared a standard NDA. This ensures that the specific security gaps I'm about to reveal stay strictly between us.`
  },
  {
    id: 'walk-away',
    title: 'The Walk Away',
    context: 'When they try to haggle below ₦4M',
    content: `I understand. My price reflects the ₦300M in risk I am remediating. If you'd rather take the chance with the NDPC, I respect that decision. My offer stands for 48 hours.`
  }
];

export const objections: Objection[] = [
  {
    id: 'instagram',
    objection: 'We don\'t really use the website - we focus on Instagram',
    counters: [
      {
        point: 'Single Point of Failure',
        response: "I've noticed your Instagram presence is strong, but relying solely on a third-party platform is a massive operational risk. Your website is the only digital asset Irvin Global actually owns. If your Instagram is compromised today, where do your clients go to verify that you are a legitimate, licensed financial institution?"
      },
      {
        point: 'Ad Spend Waste',
        response: "Even if you focus on Instagram, that traffic eventually has to 'land' somewhere to convert into a loan application. If your Instagram ads are sending wealthy clients to a website that is slow, broken, or leaking data, you are essentially paying Instagram to burn your reputation."
      },
      {
        point: 'Institutional Trust',
        response: "Instagram is for 'Awareness,' but a Website is for 'Closing.' A high-net-worth investor or corporate partner isn't going to sign a ₦50M deal via Instagram DM. They are going to Google 'Irvin Global,' and what they find right now is an abandoned site."
      },
      {
        point: 'Passive Leak',
        response: "Even if you 'don't use it,' the website is still live. This means it is still leaking data. You are currently carrying 100% of the NDPR legal liability for a site you say you 'don't use.' That's like leaving a back door unlocked because you 'don't use that room' - the burglars don't care."
      }
    ]
  },
  {
    id: 'fix-themselves',
    objection: 'We\'ll just have our IT guy fix it',
    counters: [
      {
        point: 'The Black Box Rule',
        response: "Show them the Results, not the Process. Tell them what is leaking, but don't tell them the exact line of code or the specific plugin causing it."
      },
      {
        point: 'Proprietary Framework',
        response: "My fix is built on a custom Next.js 16/Turbopack 'Black Box' architecture that their current WordPress team literally doesn't know how to use. If they try to fix it themselves on WordPress, they'll just be 'putting a band-aid on a gunshot wound.'"
      },
      {
        point: 'NDA Protection',
        response: "Even if they \"fix\" it, they haven't addressed the architectural vulnerability. The 'Referer' leak is built into the way WordPress works. To stop it, you have to move from 'Public Browser' to 'Private Server' - that's a migration, not a patch."
      }
    ]
  },
  {
    id: 'ssl-secure',
    objection: 'We have an SSL certificate - aren\'t we secure?',
    counters: [
      {
        point: 'The Front Door vs Back Door',
        response: "An SSL certificate only encrypts the 'tunnel' between the user and the server. It does nothing to stop the website itself from 'leaking' data out of the back door to third-party trackers. You're locking the front door but leaving the windows wide open."
      }
    ]
  },
  {
    id: 'certification',
    objection: 'Are you a certified auditor?',
    counters: [
      {
        point: 'The Pro Answer',
        response: "I am a Web Architect and Security Specialist. I perform Technical Vulnerability Assessments. While I am not a DPCO filing your annual returns, I am the one who remediates the technical failures that the DPCOs would flag in their report. Most DPCOs are lawyers - they tell you that you are breaking the law. I am the engineer who tells you how you are breaking it and provides the technical framework to stop it."
      },
      {
        point: 'Technical Receipts',
        response: "I have the Network Log of the leak (objective fact), I can quote the NDPA 2023 Section 24 (Duty of Care), and I can show you the Vercel Preview of the secure site (physical proof). I'm not claiming to be a lawyer - I'm showing you an engineer who can fix what the lawyers would flag."
      }
    ]
  }
];

export const toughQuestions = [
  {
    question: '"But we have an SSL certificate (the padlock). Aren\'t we secure?"',
    answer: "An SSL certificate only encrypts the 'tunnel' between the user and the server. It does nothing to stop the website itself from 'leaking' data out of the back door to third-party trackers. You're locking the front door but leaving the windows wide open."
  },
  {
    question: '"Is this really a \'Data Breach\'?"',
    answer: "Under NDPR (Nigeria Data Protection Regulation), any unauthorized sharing of 'User Intent' or 'Behavioral Data' with third parties without explicit consent is a compliance risk. Your site is currently sharing that intent with global ad networks every time a page loads."
  },
  {
    question: '"Why is your Next.js version better?"',
    answer: "My build uses a 'Server-Side' architecture. This means the user's browser never talks to third parties directly. All data is processed in a secure 'Black Box' on the server. No leaks, no trackers, and it loads in under 1 second."
  },
  {
    question: '"How do we know you won\'t hack us?"',
    answer: "I'm a professional Web Architect. Hackers don't walk into the Maitama Head Office with a signed NDA and a performance-tested solution on Vercel. Hackers sell your data on the dark web. I'm here to ensure that data never leaves your server."
  }
];

export const warRoomSummary = {
  threePoints: [
    'Software Exposure: You are telling hackers exactly how to attack you (v6.1.5)',
    'Privacy Breach: You are giving away your clients\' financial secrets to ad networks',
    'Performance Failure: Your slow "Network Waterfall" is losing you customers in real-time'
  ],
  masterPlan: [
    "Don't sue. It makes you look like an enemy.",
    'Audit. Show them the leaks.',
    'Advise. Tell them they are in violation of the NDPR.',
    'Solve. Sell them the "Zero-Leak" site.'
  ],
  closingStrategy: "Don't call it a 'Compliance Audit' - call it a 'Technical Vulnerability & Privacy Remediation.' Use an NDA before showing the 'Roadmap' of the vulnerabilities. Focus on the Rebuild - you aren't just giving them a report; you are giving them a secure asset."
};

export const quickStart = {
  overview: 'This platform trains you to audit Nigerian financial institutions for data privacy vulnerabilities and pitch security remediation services.',
  threeStepProcess: [
    {
      step: 1,
      title: 'Audit',
      description: 'Use DevTools to find vulnerabilities (WP version leaks, Referer headers, API exposure)'
    },
    {
      step: 2,
      title: 'Legal Pitch',
      description: 'Present findings as NDPA 2023 / GAID 2025 compliance violations with 2% revenue penalties'
    },
    {
      step: 3,
      title: 'Close',
      description: 'Sell the Next.js migration for ₦4-5M using fear tactics + NDA protection'
    }
  ],
  roleSplit: {
    you: 'Handle Technical: Finding vulnerabilities, running DevTools, live boardroom demos',
    partner: 'Handle Legal/Pitch: NDPA citations, objection handling, closing the deal'
  }
};

export const searchIndexes = [
  { term: 'WordPress version leak', page: '/technical/wp-vulnerabilities', context: 'ver=6.1.5 broadcast' },
  { term: 'NDPA 2023', page: '/legal-pitch/legal-reference', context: 'Nigeria Data Protection Act' },
  { term: 'GAID 2025', page: '/legal-pitch/legal-reference', context: 'March 2025 directive' },
  { term: 'Referer header', page: '/technical/headers-analysis', context: 'Financial intent leak' },
  { term: 'wp-json users', page: '/technical/wp-vulnerabilities', context: 'User enumeration' },
  { term: '₦5 million', page: '/legal-pitch/closing', context: 'Price point' },
  { term: 'objection handling', page: '/legal-pitch/objection-handling', context: 'Counters' },
  { term: 'checklist', page: '/technical/audit-checklist', context: '6-step audit process' },
  { term: 'WhatsApp script', page: '/legal-pitch/pitch-scripts', context: 'Hook message' },
  { term: 'NDA', page: '/legal-pitch/closing', context: 'Non-disclosure agreement' },
  { term: 'war room', page: '/war-room', context: 'Defense strategy' },
  { term: 'lagos prep', page: '/lagos-prep', context: 'School audit project' },
  { term: 'lagosprepikoyi', page: '/lagos-prep', context: 'School website' },
  { term: 'Gmail professionalism', page: '/technical/wp-vulnerabilities', context: 'Using Gmail instead of corporate domain' },
  { term: 'Lorem ipsum', page: '/technical/wp-vulnerabilities', context: 'Placeholder text on live site' },
  { term: 'ghost pages', page: '/technical/wp-vulnerabilities', context: 'Duplicate homepages, abandoned site' },
  { term: 'real cases', page: '/technical/real-cases', context: 'Real-world data breach examples' },
  { term: 'CEX.IO', page: '/technical/real-cases', context: 'Crypto exchange user enumeration' },
  { term: 'Illinois DHS', page: '/technical/real-cases', context: 'Government data breach 700k' },
  { term: 'disadvantages', page: '/technical/risks', context: 'What could go wrong' },
  { term: 'liability', page: '/legal-pitch/closing', context: 'Contract protections' },
  { term: 'Section 24', page: '/legal-pitch/legal-reference', context: 'Duty of Care' },
  { term: 'Article 7', page: '/legal-pitch/legal-reference', context: 'GAID compliance measures' },
  { term: 'contract', page: '/legal-pitch/closing', context: 'Risk disclosure, liability cap' }
];

// Real-World Case Studies for Pitch
export const realCases = [
  {
    id: 'pathstone',
    name: 'Pathstone Family Office',
    riskLevel: 'High',
    date: 'March 2026',
    description: 'Wealth management firm overseeing $170 Billion targeted by ShinyHunters group',
    damage: '641,000 records stolen including sensitive legal and financial data',
    relevance: 'Exact same profile as Irvin Global - investment firm for elite clients',
    source: 'SC Media (March 2, 2026)',
    url: 'https://www.scmagazine.com/browse/news',
    summary: 'Pathstone Family Office, a wealth management firm managing $170 billion, was targeted by the ShinyHunters hacking group. The attack resulted in 641,000 records being stolen, including sensitive legal and financial data. This breach demonstrates that even high-net-worth financial institutions with significant security resources remain vulnerable to sophisticated cyber attacks. The attack vector likely involved API vulnerabilities similar to those found on Irvin Global\'s site.'
  },
  {
    id: 'navia',
    name: 'Navia Benefit Solutions',
    riskLevel: 'Medium',
    date: 'March 2026',
    description: 'Benefits administrator breached via exposed API',
    damage: '2.7 Million records exposed for nearly a month before detection',
    relevance: 'Proves API leaks lead to mass data theft even for "lower risk" companies',
    source: 'Washington State Health Care Authority (March 18, 2026)',
    url: 'https://www.hca.wa.gov/about/news/navia-benefit-solutions-data-breach',
    summary: 'Navia Benefit Solutions, a benefits administrator, experienced a data breach through an exposed API that went undetected for nearly a month. 2.7 million records were exposed during this period. This case proves that API vulnerabilities can lead to mass data theft even for organizations that might be considered "lower risk." The prolonged detection time (almost 30 days) shows how vulnerabilities can be exploited silently before anyone notices.'
  },
  {
    id: 'wordpress-backdoor',
    name: '20,000+ WordPress Sites',
    riskLevel: 'High',
    date: 'April 15, 2026',
    description: 'Critical backdoor (CVE-2026-0920) discovered in LA-Studio Element Kit plugin',
    damage: 'Unauthenticated attackers can create admin accounts - complete site takeover',
    relevance: 'Shows WordPress plugins are ticking time bombs - even if Irvin\'s code is fine',
    source: 'Wordfence Intelligence (Jan 21, 2026)',
    url: 'https://www.wordfence.com/blog/wordfence-intelligence-uncovers-critical-backdoor-in-la-studio-element-kit-plugin/',
    summary: 'A critical backdoor vulnerability (CVE-2026-0920) was discovered in the LA-Studio Element Kit plugin affecting over 20,000 WordPress sites. This vulnerability allows unauthenticated attackers to create admin accounts, achieving complete site takeover. This case demonstrates that WordPress plugins are ticking time bombs - even if a site\'s custom code is secure, a single vulnerable plugin can compromise the entire infrastructure. Irvin Global\'s WordPress site faces this exact risk.'
  },
  {
    id: 'illinois-dhs',
    name: 'Illinois Department of Human Services',
    riskLevel: 'Medium',
    date: 'January 2026',
    description: 'Human error - incorrect privacy settings on mapping website',
    damage: '700,000+ residents\' data exposed for 3+ years - names, addresses, case numbers',
    relevance: 'Level 4 mistake caused disaster - proves even "minor" issues are catastrophic',
    source: 'ABC7 Chicago, BleepingComputer (Jan 2026)',
    url: 'https://abc7chicago.com/post/illinois-department-human-services-reports-yearslong-data-breach',
    summary: 'The Illinois Department of Human Services suffered a massive data breach caused by a simple human error - incorrect privacy settings on a mapping website. For over 3 years, the personal data of 700,000+ residents including names, addresses, and case numbers was exposed. This case is a "Level 4" mistake - not a sophisticated hack, just wrong privacy settings. If a Level 4 mistake causes such disaster, what do Level 7 vulnerabilities like Irvin\'s (active data broadcasting, exposed admin IDs) cause?'
  },
  {
    id: 'cex-io',
    name: 'CEX.IO Crypto Exchange',
    riskLevel: 'High',
    date: 'March 2026',
    description: 'Security researcher found exposed /wp-json/wp/v2/users endpoint',
    damage: '19 registered users exposed with full names and usernames - brute force risk',
    relevance: 'Crypto exchange (higher risk than finance) had same vulnerability as Irvin',
    source: 'Block Magnates (March 5, 2026)',
    url: 'https://blog.blockmagnates.com/how-i-uncovered-employee-data-on-a-crypto-exchange-via-wordpress-misconfiguration',
    summary: 'A security researcher discovered that CEX.IO, a cryptocurrency exchange (which typically has higher security standards than traditional finance), had the exact same WordPress vulnerability as Irvin Global - an exposed /wp-json/wp/v2/users endpoint. This exposed 19 registered users including their full names and usernames, creating brute force attack risk. This case proves that even security-conscious crypto companies make the same mistakes as Irvin Global.'
  }
];

// Additional Vulnerabilities to add to WP Vulnerabilities
export const additionalVulnerabilities: Vulnerability[] = [
  {
    id: 'gmail-gap',
    title: 'Gmail Professionalism Gap',
    description: 'Using standard unsecured Gmail addresses instead of corporate @irvinglobal.com.ng domain',
    evidence: 'Branch communications using @gmail.com instead of corporate domain',
    pitch: "For a financial group handling millions, using Gmail is a massive trust-killer. It looks like a 'scam' setup to high-net-worth clients and is much easier to hack or spoof than a corporate-grade encrypted mail server."
  },
  {
    id: 'lorem-ipsum',
    title: 'Lorem Ipsum Placeholder Text',
    description: 'Latin placeholder text still visible on several service pages',
    evidence: 'Same Lorem Ipsum text in Services sections - site abandoned mid-build',
    pitch: "You are a billion-naira institution operating with 'Lorem Ipsum' Latin placeholder text on your live site. This signals complete abandonment and invites hackers to exploit 'dark corners' you aren\'t monitoring."
  },
  {
    id: 'ghost-pages',
    title: 'Ghost Pages & Duplicate Homepages',
    description: 'Multiple versions of homepage live, unrendered templates, raw layout code',
    evidence: 'Duplicate homepages confuse Google, raw code visible in unfinished sections',
    pitch: "Your site has multiple live versions of the homepage - this confuses Google and makes the firm look unmanaged. Unrendered templates and raw layout code show the site was abandoned mid-build."
  },
  {
    id: 'mobile-performance',
    title: 'Poor Mobile Performance',
    description: 'Site extremely heavy and laggy on mobile - high bounce rates',
    evidence: 'Current framework forcing unnecessary file downloads before main content shows',
    pitch: "Your site is so slow on mobile that users leave before the page loads. In fintech, speed equals trust. If a client waits 5 seconds for your loan page, they assume your processing is just as slow and go to a faster competitor."
  },
  {
    id: 'json-proof',
    title: 'User Enumeration JSON Proof',
    description: 'Actual JSON data pulled from /wp-json/wp/v2/users endpoint',
    evidence: 'id: 1, name: "irvin"; id: 2, name: "xvbswdwxgeqy"; id: 3, name: "puzqqzdurzay"',
    pitch: "I pulled this data without a password. These admin IDs are now known to anyone who visits your site. Hackers can use these for targeted brute force attacks or social engineering against your staff."
  }
];

// Legal Updates - Section vs Article distinction
export const legalDistinction = {
  section24: {
    title: 'Section 24 - NDPA 2023 (The Law)',
    description: 'The Foundation Act - uses "Sections"',
    keyPoints: [
      'Section 24(3): "Duty of Care" - data controllers owe a duty to protect data subjects',
      'Section 24(1)(f): Mandates "appropriate security... against unauthorized or unlawful processing"',
      'Section 24(2): Requires "appropriate technical and organizational measures" for confidentiality',
      'Section 48: Administrative Penalties - ₦10M or 2% of revenue'
    ],
    useCase: 'When discussing legal liability and the broad duty of care obligation'
  },
  article7: {
    title: 'Article 7 - GAID 2025 (The Directive)',
    description: 'Implementation Manual - uses "Articles"',
    keyPoints: [
      'Article 7(f): Requires "Confidentiality, Integrity and Availability"',
      'Article 7(i): Requires "Privacy by Design" - trackers firing without consent violates this',
      'Article 7(m): Requires "Transparency" - hidden API leaks violate this',
      'Article 10: Filing of CAR - March 31 deadline',
      'Article 19: Consent to Cookies - no tracking before consent'
    ],
    useCase: 'When discussing specific technical failures and implementation requirements'
  }
};

// Disadvantages and Risks
export const disadvantages = [
  {
    id: 'false-positive',
    title: 'The "False Positive" Trap',
    description: 'Using presence of Google Tags and WP-JSON as proof of breach',
    risk: 'Smart IT Director might counter-argue GTM is in Consent Mode or WP-JSON is restricted to Public Data',
    mitigation: 'Be honest that you are making an "Educated Accusation" based on external signals. Until you have server logs, you cannot guarantee breach.'
  },
  {
    id: 'seo-suicide',
    title: 'The "SEO Suicide" Risk',
    description: 'Moving from WordPress to Next.js changes URL structure dramatically',
    risk: 'If you don\'t create a perfect 301 redirect map, Google ranking vanishes. Traffic drops 60% in days.',
    mitigation: 'Create a meticulous Redirect Map. Sell a "Phased Migration" - keep WordPress blog on subdomain, move main pages to Next.js first.'
  },
  {
    id: 'scope-creep',
    title: 'The "Scope Creep" Nightmare',
    description: 'Database might be a "spaghetti" mess of 10 years of bad plugins',
    risk: 'Migration takes 4 months not 4 weeks. Profit evaporates as you fix broken data links.',
    mitigation: 'Audit their content BEFORE signing. Quote based on known pages, not "we\'ll see."'
  },
  {
    id: 'internal-sabotage',
    title: 'The "Internal Sabotage" Risk',
    description: 'Current IT guy will hate you - you are telling his boss he\'s been incompetent',
    risk: 'IT guy blocks your access, "loses" database credentials, tells CEO your Next.js is "unstable"',
    mitigation: 'Don\'t attack the person - attack the system. Position yourself as helping them fix what they couldn\'t see.'
  },
  {
    id: 'ndpc-blowback',
    title: 'The "NDPC Blowback" Risk',
    description: 'Using law as a weapon might make them view you as extortionate',
    risk: 'Company reports you for "unauthorized scanning" or sees your discovery as an act of hacking',
    mitigation: 'Frame as "Pre-emptive Audit" not "Accusation." Say "We found patterns that could trigger an audit" not "You are illegal."'
  },
  {
    id: 'partnership-friction',
    title: 'The "Family/Partner Friction"',
    description: '₦5 Million changes relationships - who gets what?',
    risk: 'If project gets hard or client gets angry, who takes blame? How do you split ₦5M fairly?',
    mitigation: 'Have written partnership agreement BEFORE the project. Define roles, split, and decision-making clearly.'
  }
];

// Contract Protections
export const contractProtections = [
  {
    id: 'risk-disclosure',
    title: 'Risk Disclosure (SEO Shield)',
    clause: `The Client acknowledges that migrating from a monolithic CMS (WordPress) to a headless architecture (Next.js) involves a total restructuring of URL pathways and metadata. While the Developer will implement a '301 Redirect Map' to preserve SEO rankings, the Client accepts that search engines may re-index the site, which can cause temporary fluctuations in search visibility. The Developer is not liable for temporary drops in organic traffic during the transition period.`,
    purpose: 'Protects you if rankings drop after migration'
  },
  {
    id: 'liability-cap',
    title: 'Liability Cap (₦5M Shield)',
    clause: `To the maximum extent permitted by Nigerian Law (including the Companies and Allied Matters Act), the Developer's total liability for any claim arising out of this project—whether in contract, tort, or otherwise—shall not exceed the total amount actually paid by the Client to the Developer under this Agreement. Under no circumstances shall the Developer be liable for indirect, incidental, or consequential damages, including loss of profits or business interruption.`,
    purpose: 'Caps your maximum loss to amount paid - you don\'t lose your house'
  },
  {
    id: 'legacy-waiver',
    title: 'Legacy Data Waiver (WordPress Shield)',
    clause: `The Developer is responsible for migrating validated data records only. The Developer is not liable for any pre-existing security breaches, dormant malware, or unauthorized access points originated within the Client's legacy WordPress environment. The Client acknowledges that 'Zero-Day' vulnerabilities are a global risk and that the Developer provides a 'Security-by-Design' framework, not an absolute guarantee of future immunity from all possible cyberattacks.`,
    purpose: 'You aren\'t responsible for sins of the past'
  },
  {
    id: 'maintenance-clause',
    title: 'Maintenance Clause (Recurring Income)',
    clause: `This Agreement includes a 30-day post-launch 'Stability Period.' Ongoing security monitoring, Next.js dependency updates, and server maintenance beyond this period require a separate Sovereign Maintenance Agreement at a rate of ₦X,000 per month. Failure to maintain the system will void any performance guarantees provided by the Developer.`,
    purpose: 'Secures recurring income, prevents free ongoing work'
  }
];

// Updated WP Vulnerabilities to include new items
export const allVulnerabilities = [...wpVulnerabilities, ...additionalVulnerabilities];