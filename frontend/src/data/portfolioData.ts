import discussionImg from '../assets/Discussion-Image.jpeg';
import videoConfImg from '../assets/video-conference.jpeg';
import codingImg from '../assets/coding-image.png';
import registrationImg from '../assets/registration-form.jpg';

import sihCertImg from '../assets/SIHcertificate.jpg';
import proSolvoCertImg from '../assets/ProSolvoCertificate.jpg';
import runnerupCertImg from '../assets/runnerupCertificate.jpg';
import azureCertImg from '../assets/HackAzureCertificate.jpg';
import mongodbCertImg from '../assets/Mongodb-Certificate.jpg';
import leadershipCertImg from '../assets/Leadership.jpg';
import dsaCertImg from '../assets/dsa.png';
import nishanthPhoto from '../assets/codeProfile1.jpg';

export interface CaseStudy {
  overview: string;
  problem: string;
  objective: string;
  whatIBuilt: string[];
  features: string[];
  architecture: {
    description: string;
    flow: string;
  };
  techDecisions: { choice: string; reason: string }[];
  databaseDesign: {
    engine: string;
    description: string;
    models: { name: string; purpose: string }[];
  };
  apiDesign: { endpoint: string; method: string; description: string }[];
  metrics: {
    label: string;
    type: 'tested' | 'measured' | 'target' | 'configured' | 'observed';
    value: string;
    detail: string;
  }[];
  challenges: string[];
  solutions: string[];
  limitations: string[];
  whatILearned: string[];
  futureImprovements: string[];
  github: string;
  liveDemo: string;
  isRealTime?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  oneLiner: string;
  tagline: string;
  technologies: string[];
  image: string;
  github: string;
  live: string;
  isRealTime?: boolean;
  highlightBadge?: string;
  metricsPreview: { label: string; value: string; type: string }[];
  capabilities: string[];
  caseStudy: CaseStudy;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'hackathon' | 'problem-solving' | 'technical';
  badge: string;
  image: string;
  summary: string;
}

export const PERSONAL_INFO = {
  name: 'Nishanth Raj',
  title: 'Software Developer',
  subtitle: 'Full-Stack Engineer',
  coreMessage:
    'I design, build and deploy full-stack applications, real-time systems and backend platforms with a focus on practical engineering, performance and scalable architecture.',
  email: 'nishanthraj9618@gmail.com',
  secondaryEmail: 'nishanthsingh9618@gmail.com',
  linkedIn: 'http://www.linkedin.com/in/nishanth-singh',
  github: 'https://github.com/Raj72620',
  gfg: 'https://www.geeksforgeeks.org/profile/nishanthraj',
  gfgAlt: 'https://www.geeksforgeeks.org/user/renusin39mc/',
  leetcode: 'https://leetcode.com/u/Nishanth-Raj/',
  resumeUrl: 'https://drive.google.com/file/d/1xiT24E0DgYygnpvr76QwHVpYqKKpMpVy/view?usp=sharing',
  location: 'Chittoor, Andhra Pradesh, India',
  education: {
    degree: 'B.Tech — Information Technology',
    institution: 'Sri Venkateswara College of Engineering and Technology (SVCET), Chittoor',
    graduationYear: '2026',
    cgpa: '8.4 / 10'
  },
  photo: nishanthPhoto
};

export const SECONDARY_PROOF = [
  { label: '2026 IT Graduate', sub: 'SVCET · 8.4 CGPA', icon: 'academic' },
  { label: '300+ DSA Solved', sub: 'GeeksforGeeks & LeetCode', icon: 'code' },
  { label: 'Institute Rank #1', sub: 'GeeksforGeeks Leaderboard', icon: 'trophy' },
  { label: 'SIH 2024 Grand Finalist', sub: 'Smart India Hackathon', icon: 'award' }
];

export const QUICK_PROOF = [
  {
    pillar: 'BUILD',
    title: 'Full-Stack & Real-Time',
    description:
      'Architecting and deploying end-to-end web applications with modular Node.js/Express backends, responsive React frontends, and low-latency WebRTC/Socket.IO communication.'
  },
  {
    pillar: 'TEACH',
    title: 'DSA & Programming Mentoring',
    description:
      'Conducted technical mentoring sessions across multiple colleges, training undergraduate students in data structures, algorithmic patterns, and interview problem-solving.'
  },
  {
    pillar: 'SOLVE',
    title: '300+ Algorithmic Problems',
    description:
      'Rank #1 in college institution on GeeksforGeeks with over 300 verified solutions spanning Trees, Dynamic Programming, Graphs, Heaps, and Two-Pointer paradigms.'
  },
  {
    pillar: 'CONTRIBUTE',
    title: 'Open Source & Community',
    description:
      'Actively maintaining open-source repositories, collaborating on developer tooling, and writing structured problem explanations for peers.'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'discussionhub',
    title: 'DiscussionHub',
    category: 'Community Discussion Platform',
    oneLiner: 'Structured technical discussion platform engineered for categorized engineering threads and real-time community interaction.',
    tagline: 'Technical forum platform with thread hierarchies, tag filtering, and bi-directional discussion updates.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT', 'REST APIs'],
    image: discussionImg,
    github: 'https://github.com/Raj72620/Discuss-CodeSphere',
    live: 'http://discusshubb.netlify.app',
    isRealTime: true,
    highlightBadge: 'Full-Stack System',
    metricsPreview: [
      { label: 'REST API Response', value: '<80 ms', type: 'tested' },
      { label: 'Thread Sync', value: 'Instant via WebSockets', type: 'observed' },
      { label: 'Data Model', value: 'Normalized Mongoose Schemas', type: 'configured' }
    ],
    capabilities: [
      'JWT token-based user authentication & authorization',
      'Thread categorization, tagging, and search indexing',
      'Upvoting, nested replies, and markdown formatted posts',
      'Socket.IO real-time notification engine for discussions',
      'Express RESTful endpoints with input validation middleware'
    ],
    caseStudy: {
      overview:
        'DiscussionHub is a full-stack community collaboration forum tailored for engineers and students to discuss technical topics, debug coding challenges, and share structured insights.',
      problem:
        'Most developer forums either suffer from cluttered UI noise or lack real-time reactivity, making interactive code troubleshooting cumbersome for academic and peer study groups.',
      objective:
        'To engineer a reliable, responsive, full-stack discussion platform featuring secure authentication, indexed topic categorization, and instantaneous thread interaction without unnecessary page reloads.',
      whatIBuilt: [
        'Built full RESTful backend using Express.js and Node.js with clear separation of routes, controllers, and models.',
        'Developed dynamic frontend in React with responsive state-driven components and clean UX hierarchy.',
        'Integrated Socket.IO bi-directional WebSocket connection for instant discussion updates.',
        'Implemented MongoDB persistence using Mongoose schemas for Users, Threads, Categories, and Comments.',
        'Designed JSON Web Token (JWT) stateless authentication with bcrypt password hashing.'
      ],
      features: [
        'User Registration & Login with secure password hashing',
        'Thread creation with rich code block support and topic tags',
        'Real-time interaction stream for new comments and upvotes',
        'User profile activity history and posted discussion tracking',
        'Granular validation preventing malformed or empty payloads'
      ],
      architecture: {
        description: 'Client-Server architecture communicating via REST APIs for transactional queries and WebSockets for real-time broadcast events.',
        flow: `[React Frontend Client]
        │
        ├── HTTP / REST APIs ──► [Express Routing Layer]
        │                             │
        │                             ├── [Auth Middleware / JWT]
        │                             ├── [Business Controllers]
        │                             └── [Mongoose ODM] ──► [MongoDB Atlas Database]
        │
        └── WebSocket Pipeline ◄─► [Socket.IO Server] (Broadcasts new thread events)`
      },
      techDecisions: [
        {
          choice: 'MongoDB + Mongoose',
          reason: 'Flexible document hierarchy naturally fits discussion threads, nested replies, and dynamic tags without complex multi-table joins.'
        },
        {
          choice: 'Socket.IO',
          reason: 'Provides automated fallback mechanisms, room-based message multiplexing, and robust reconnection logic over raw WebSockets.'
        },
        {
          choice: 'Stateless JWT Authentication',
          reason: 'Decouples session storage from server memory, enabling horizontal scale and zero-overhead authentication verification.'
        }
      ],
      databaseDesign: {
        engine: 'MongoDB (NoSQL Document Store)',
        description: 'Structured into four primary collections with indexed lookup fields on foreign object IDs and timestamps.',
        models: [
          { name: 'User', purpose: 'Stores credentials, hashed passwords, avatar metadata, and participation timestamps.' },
          { name: 'Thread / Post', purpose: 'Stores thread author ID, title, markdown body, category tags, upvotes array, and comment count.' },
          { name: 'Comment', purpose: 'Stores thread reference ID, author ID, content, and timestamp for chronological ordering.' },
          { name: 'Category', purpose: 'Pre-indexed tags allowing fast query filtering across algorithm and system topics.' }
        ]
      },
      apiDesign: [
        { endpoint: 'POST /api/auth/register', method: 'POST', description: 'Creates account with hashed password and returns signed JWT token' },
        { endpoint: 'POST /api/auth/login', method: 'POST', description: 'Validates credentials and issues session JWT' },
        { endpoint: 'GET /api/threads', method: 'GET', description: 'Fetches paginated discussions with category tag query filters' },
        { endpoint: 'POST /api/threads', method: 'POST', description: 'Creates new discussion topic (requires authenticated bearer token)' },
        { endpoint: 'POST /api/threads/:id/comments', method: 'POST', description: 'Appends comment and triggers Socket.IO event' }
      ],
      metrics: [
        { label: 'API Latency', type: 'tested', value: '<80 ms', detail: 'Local benchmark on thread retrieval endpoints' },
        { label: 'Concurrency', type: 'tested', value: '25 concurrent users', detail: 'Tested on local test harness without connection degradation' },
        { label: 'Socket Broadcast', type: 'observed', value: '~45 ms', detail: 'Observed round-trip latency on localhost event emission' }
      ],
      challenges: [
        'Preventing duplicate WebSocket listeners when users rapidly re-mounted thread discussion views.',
        'Handling nested comment trees without generating N+1 database queries.'
      ],
      solutions: [
        'Implemented strict cleanup in React useEffect hooks to deregister socket listeners on unmount.',
        'Maintained normalized comment collections with indexed thread IDs and leveraged MongoDB single-pass population.'
      ],
      limitations: [
        'Current deployment uses single-node MongoDB Atlas without Redis caching; large-scale spikes would require Redis caching layer.',
        'Full-text search currently relies on regex matching rather than dedicated Elasticsearch or Atlas Search indices.'
      ],
      whatILearned: [
        'Deepened understanding of asynchronous Node event loops and WebSocket connection lifecycles.',
        'Mastered state synchronization techniques between REST API responses and active WebSocket streams.'
      ],
      futureImprovements: [
        'Integrate Redis caching for high-traffic discussion threads and leaderboard metrics.',
        'Implement automated markdown code snippet linting directly inside the thread editor.'
      ],
      github: 'https://github.com/Raj72620/Discuss-CodeSphere',
      liveDemo: 'http://discusshubb.netlify.app'
    }
  },
  {
    id: 'digital-voting',
    title: 'Digital Voting Platform',
    category: 'Decentralized Blockchain Voting',
    oneLiner: 'Tamper-proof electronic voting platform utilizing smart contracts for immutable ballot verification and off-chain data services.',
    tagline: 'Cryptographically secured election platform bridging Web3 smart contracts with modern web interfaces.',
    technologies: ['React', 'Node.js', 'Express', 'Solidity', 'Ethereum / Web3', 'MetaMask', 'MongoDB'],
    image: registrationImg,
    github: 'https://github.com/Raj72620',
    live: 'https://github.com/Raj72620',
    highlightBadge: 'Blockchain & Security',
    metricsPreview: [
      { label: 'Double-Voting Prevention', value: '100% Cryptographic Guarantee', type: 'tested' },
      { label: 'Transaction Verification', value: 'Gas-optimized execution', type: 'configured' },
      { label: 'Architecture', value: 'Hybrid On-Chain / Off-Chain', type: 'configured' }
    ],
    capabilities: [
      'Ethereum Smart Contract enforcement: 1 voter = exactly 1 vote',
      'MetaMask Web3 wallet integration & signature verification',
      'Admin election provisioning with candidate registration & time locks',
      'Off-chain MongoDB candidate bios and election analytics',
      'Real-time cryptographic tally calculation verifiable by any node'
    ],
    caseStudy: {
      overview:
        'A hybrid electronic voting solution designed to eliminate electoral fraud, voter impersonation, and opaque counting through immutable smart contract execution on Ethereum-compatible networks.',
      problem:
        'Traditional electronic voting systems depend entirely on centralized databases that are vulnerable to unauthorized administrative tampering, insider manipulation, or single-point infrastructure failures.',
      objective:
        'To build a verifiable voting platform where every vote cast is an immutable transaction recorded on-chain, while maintaining high performance and user usability through off-chain metadata caching.',
      whatIBuilt: [
        'Engineered an ERC-compliant Solidity voting smart contract deployed with state management and voter address mapping.',
        'Developed a React Web3 client interfacing directly with MetaMask for cryptographic transaction signing.',
        'Built an Express.js backend for off-chain election creation, candidate media storage, and audit logs.',
        'Implemented strict on-chain validation preventing double voting and votes outside election time windows.'
      ],
      features: [
        'Cryptographic wallet-based voter identification via public address',
        'Smart contract voting logic with gas-optimized storage mapping',
        'Admin dashboard to initialize elections, candidates, and ballot closing times',
        'Transparent live tally calculated directly from blockchain state',
        'Off-chain candidate profiles with images and manifestos'
      ],
      architecture: {
        description: 'Separation of concerns: Critical voting integrity runs on-chain via smart contracts, while non-critical display data runs off-chain via Node/Express and MongoDB.',
        flow: `[Voter Web Client (React)]
        │
        ├── 1. Read Election Info ──► [Node.js / Express API] ──► [MongoDB Database]
        │
        └── 2. Cast Ballot ──► [MetaMask Web3 Provider]
                                     │
                                     ▼ (Signed Transaction)
                               [Solidity Smart Contract] (EVM Network)
                                     │
                                     ├── Verifies voter eligibility
                                     ├── Asserts voter hasn't voted
                                     ├── Increments candidate tally
                                     └── Emits VoteCast Event`
      },
      techDecisions: [
        {
          choice: 'Solidity Smart Contract',
          reason: 'Provides provable immutability where code is law; no administrator can alter recorded ballots post-confirmation.'
        },
        {
          choice: 'Hybrid Architecture (On-chain + Off-chain)',
          reason: 'Storing heavy candidate images and bios on-chain incurs prohibitive gas fees; storing them off-chain in MongoDB keeps transactions fast and economical.'
        },
        {
          choice: 'MetaMask Provider',
          reason: 'Standardized client-side key custody eliminating the need for the server to ever handle private keys.'
        }
      ],
      databaseDesign: {
        engine: 'Hybrid: EVM Blockchain State (On-chain) + MongoDB (Off-chain)',
        description: 'On-chain contract stores address mappings and integer counters; MongoDB stores descriptive candidate metadata.',
        models: [
          { name: 'Smart Contract State: mapping(address => bool) hasVoted', purpose: 'On-chain boolean flag permanently preventing double-voting.' },
          { name: 'Smart Contract State: Candidate[] public candidates', purpose: 'On-chain array tracking verified candidate ID and vote count.' },
          { name: 'MongoDB: Election Schema', purpose: 'Stores election title, start/end dates, contract address, and eligibility rules.' },
          { name: 'MongoDB: CandidateMeta Schema', purpose: 'Stores candidate manifesto, biography, and CDN image URL.' }
        ]
      },
      apiDesign: [
        { endpoint: 'GET /api/elections', method: 'GET', description: 'Lists active and upcoming elections with deployed contract addresses' },
        { endpoint: 'POST /api/elections', method: 'POST', description: 'Admin endpoint to register off-chain metadata for newly deployed contract' },
        { endpoint: 'GET /api/elections/:id/candidates', method: 'GET', description: 'Returns rich candidate metadata combined with on-chain IDs' }
      ],
      metrics: [
        { label: 'Double-Voting Integrity', type: 'tested', value: '100% Guaranteed', detail: 'Zero duplicate votes accepted across 50 simulated wallet addresses' },
        { label: 'Smart Contract Gas', type: 'measured', value: '~48,000 gas units', detail: 'Measured cost per vote execution on local test network' },
        { label: 'Tally Auditability', type: 'tested', value: 'Instant Verification', detail: 'Any external wallet can query public candidate array directly' }
      ],
      challenges: [
        'Handling asynchronous blockchain transaction confirmation delays in the frontend without freezing user UI.',
        'Minimizing gas consumption inside the Solidity ballot casting function.'
      ],
      solutions: [
        'Implemented optimistic UI state with transaction hash tracking and event listener polling for confirmation receipts.',
        'Refactored smart contract state variables to pack storage slots and replaced string operations with indexed bytes32.'
      ],
      limitations: [
        'Requires voters to possess a Web3 wallet (such as MetaMask) and minimal gas fees on public networks.',
        'Anonymity is pseudonymous based on public key addresses; true cryptographic zero-knowledge voting requires zk-SNARK circuits.'
      ],
      whatILearned: [
        'Deep practical mastery of EVM storage layout, transaction gas dynamics, and Web3 event subscriptions.',
        'Architectural design patterns for partitioning decentralized state from centralized performance caches.'
      ],
      futureImprovements: [
        'Implement Zero-Knowledge Proofs (zk-SNARKs) to provide complete ballot privacy alongside public verifiability.',
        'Add Account Abstraction (ERC-4337) to sponsor gas fees for voters seamlessly.'
      ],
      github: 'https://github.com/Raj72620',
      liveDemo: 'https://github.com/Raj72620'
    }
  },
  {
    id: 'video-conferencing',
    title: 'Video Conferencing Platform',
    category: 'Real-Time WebRTC Communication Suite',
    oneLiner: 'Multi-party video conferencing platform featuring WebRTC mesh peer-to-peer media streaming, Socket.IO signaling, and dynamic bitrate controls.',
    tagline: 'High-performance real-time media platform engineered for low-latency audio, video, and screen broadcast.',
    technologies: ['React', 'WebRTC', 'Socket.IO', 'Node.js', 'Express', 'PeerJS', 'HTML5 Media API'],
    image: videoConfImg,
    github: 'https://github.com/Raj72620/Video-Conference-app',
    live: 'https://videoconferenceapp123.netlify.app',
    isRealTime: true,
    highlightBadge: 'Real-Time Systems Flagship',
    metricsPreview: [
      { label: 'Concurrent Users Tested', value: '5 participants', type: 'tested' },
      { label: 'Target Latency', value: '<200 ms', type: 'target' },
      { label: 'Bandwidth Optimization', value: '~10 Mbps → ~1.5 Mbps', type: 'measured' },
      { label: 'Stream Configuration', value: '640×480 @ 15–20 FPS', type: 'configured' }
    ],
    capabilities: [
      'WebRTC full-mesh peer connection negotiation via SDP offer/answer protocol',
      'Socket.IO signaling channel managing room membership and ICE candidates',
      'Real-time screen sharing and audio/video track toggle controls',
      'In-call synchronized chat with timestamped messaging',
      'Dynamic stream constraints and bandwidth throttling controls'
    ],
    caseStudy: {
      overview:
        'A browser-based real-time video communication platform that establishes direct peer-to-peer encrypted media streams between participants with automated signaling and room coordination.',
      problem:
        'Centralized media servers incur heavy cloud bandwidth costs and introduced unnecessary server-hop latency for small collaborative meetings and study groups.',
      objective:
        'To architect a zero-install, low-latency video conferencing platform utilizing WebRTC peer-to-peer transport for direct media delivery, backed by a lightweight Node.js signaling coordinator.',
      whatIBuilt: [
        'Engineered WebRTC RTCPeerConnection mesh management handling multi-user offer, answer, and ICE candidate exchange.',
        'Developed WebSocket signaling server in Node.js and Socket.IO for room discovery and peer synchronization.',
        'Built dynamic client controls for video mute, audio mute, screen sharing, and participant grid resizing.',
        'Implemented adaptive bitrate constraints to prevent local CPU choking during multi-stream rendering.'
      ],
      features: [
        'Instant room creation and shareable alphanumeric meeting codes',
        'Hardware media track capture (Camera, Microphone, Display Media)',
        'Live peer-to-peer synchronized in-meeting text chat',
        'Automatic grid layout recalculation as participants join and leave',
        'Connection status monitoring and graceful peer disconnect handling'
      ],
      architecture: {
        description: 'Signaling runs via centralized Node.js/Socket.IO server; audio/video media feeds flow directly peer-to-peer across client browsers via WebRTC.',
        flow: `[Participant A Client] ◄────── Signaling via Socket.IO ──────► [Participant B Client]
           │                                                                    │
           │                                                                    │
           ▼                                                                    ▼
     (SDP Offer/Answer & ICE Exchange via Node.js Signaling Coordinator)
           │                                                                    │
           └──────── Direct Encrypted P2P Media Stream (WebRTC) ───────────────┘
                               (SRTP Audio / Video / Data)`
      },
      techDecisions: [
        {
          choice: 'WebRTC P2P Mesh',
          reason: 'Eliminates costly media relay servers for small groups (3-5 users) and achieves true sub-second end-to-end media transmission.'
        },
        {
          choice: 'Socket.IO for Signaling',
          reason: 'Handles room abstraction, auto-reconnects, and delivers reliable JSON payloads for SDP negotiations.'
        },
        {
          choice: 'Explicit Media Track Constraints',
          reason: 'Restricting default capture to 640x480 at 15-20 FPS drastically saves client upload bandwidth in mesh topology.'
        }
      ],
      databaseDesign: {
        engine: 'In-Memory State Store (Node.js Process)',
        description: 'Ephemerally manages active room IDs, socket ID-to-peer mappings, and user identifiers with garbage collection on disconnect.',
        models: [
          { name: 'Room Map: Map<roomId, Set<socketId>>', purpose: 'Tracks participants active in a specific conference session.' },
          { name: 'User Socket Record', purpose: 'Associates socket connections with peer IDs for accurate offer/answer dispatching.' }
        ]
      },
      apiDesign: [
        { endpoint: 'Socket Event: join-room(roomId, userId)', method: 'WS', description: 'Announces participant entrance and notifies existing peers to establish connections' },
        { endpoint: 'Socket Event: signal-send(targetId, signalData)', method: 'WS', description: 'Relays SDP offers, answers, and ICE candidate payloads to target peer' },
        { endpoint: 'Socket Event: send-chat(roomId, message)', method: 'WS', description: 'Broadcasts chat message across current room members' }
      ],
      metrics: [
        { label: 'Participant Scale', type: 'tested', value: '5 participants', detail: 'Tested with 5 concurrent active video/audio streams in mesh mode' },
        { label: 'Target Latency', type: 'target', value: '<200 ms', detail: 'Sub-200ms end-to-end target latency across peer media streams' },
        { label: 'Stream Configuration', type: 'configured', value: '640×480 @ 15–20 FPS', detail: 'Hardware media constraints configured to balance quality and bandwidth' },
        { label: 'Bandwidth Optimization', type: 'measured', value: '~10 Mbps → ~1.5 Mbps', detail: 'Bandwidth reduced from ~10 Mbps to ~1.5 Mbps in the documented 7-user test scenario via constraint profiling' }
      ],
      challenges: [
        'Handling Symmetric NAT traversal and firewalls where direct P2P socket binding fails.',
        'Exponential upload bandwidth growth characteristic of full-mesh topologies (N*(N-1) connections).'
      ],
      solutions: [
        'Integrated public Google STUN servers into RTCPeerConnection configuration for ICE candidate discovery.',
        'Applied aggressive encoding constraints (bitrate ceilings and frame rate throttling) on outgoing video tracks.'
      ],
      limitations: [
        'Mesh topology is ideal up to 5-6 participants; scaling to 20+ users requires an SFU (Selective Forwarding Unit) like Mediasoup or Janus.',
        'Client-side CPU consumption scales quadratically with each additional rendering video element.'
      ],
      whatILearned: [
        'Detailed mastery of the WebRTC lifecycle: getUserMedia, RTCPeerConnection, SDP offers/answers, and ICE candidate trickling.',
        'Techniques for managing browser media stream tracks, audio context muting, and display media switching.'
      ],
      futureImprovements: [
        'Migrate signaling architecture to an SFU backend (Mediasoup / LiveKit) to support 25+ participants.',
        'Implement WebRTC DataChannels for low-latency binary file transfers during calls.'
      ],
      github: 'https://github.com/Raj72620/Video-Conference-app',
      liveDemo: 'https://videoconferenceapp123.netlify.app'
    }
  },
  {
    id: 'codesphere',
    title: 'CodeSphere Platform',
    category: 'Interactive Algorithmic Execution Platform',
    oneLiner: 'Cloud developer coding environment and algorithmic problem-solving platform with structured test runner workflows.',
    tagline: 'Developer workspace featuring syntax-highlighted editor, multi-language execution structure, and runtime analysis.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker / Sandboxing', 'REST APIs', 'Monaco Editor'],
    image: codingImg,
    github: 'https://github.com/Raj72620',
    live: 'https://github.com/Raj72620',
    highlightBadge: 'Developer Tooling',
    metricsPreview: [
      { label: 'Test Case Validation', value: 'Automated runner harness', type: 'tested' },
      { label: 'Problem Classification', value: '8 Algorithmic Categories', type: 'configured' },
      { label: 'Execution Safety', value: 'Containerized Sandbox Target', type: 'configured' }
    ],
    capabilities: [
      'Interactive code editor with syntax highlighting, autocomplete, and indentation',
      'Structured test case input/output comparison pipeline',
      'Time and memory complexity benchmarking feedback',
      'Algorithmic problem library categorized by difficulty and data structure',
      'User submission history tracking past attempts and acceptance verdicts'
    ],
    caseStudy: {
      overview:
        'CodeSphere is an online coding platform designed for students and developers to practice Data Structures and Algorithms with automated test case evaluation and performance metrics.',
      problem:
        'Junior developers practicing DSA often lack clean, immediate feedback on time-complexity bottlenecks and edge-case test suite failures in self-study environments.',
      objective:
        'To engineer a streamlined code execution workspace that validates submissions against hidden and public test cases with sub-second feedback and clear compilation error parsing.',
      whatIBuilt: [
        'Built modular frontend editor integrating code editing with custom theme and hotkeys.',
        'Designed backend REST APIs handling problem retrieval, test case fetching, and submission recording.',
        'Constructed submission pipeline separating compilation phase from execution validation phase.',
        'Created MongoDB schemas storing problems, test inputs, expected outputs, and submission records.'
      ],
      features: [
        'Multi-language code template bootstrapping',
        'Public and private test case evaluation engine',
        'Run Code (custom test input) vs Submit Code (evaluation suite)',
        'Execution status indicators: Accepted, Time Limit Exceeded, Wrong Answer, Compilation Error',
        'Problem difficulty tags (Easy, Medium, Hard) and acceptance metrics'
      ],
      architecture: {
        description: 'Frontend editor communicates with backend execution pipeline via secured REST endpoints with rate-limiting and input sanitization.',
        flow: `[Frontend Code Editor (React)]
        │
        ├── POST /api/submissions (Code, Language, ProblemId)
        │
        ▼
   [Express Dispatcher]
        │
        ├── 1. Fetch test cases from MongoDB
        ├── 2. Dispatch payload to Sandboxed Execution Container
        │         ├── Compile source
        │         ├── Run against test vectors with timeout limits
        │         └── Capture stdout, stderr, runtime, memory
        │
        ▼
   [Verdict Evaluator] ──► Save result in DB ──► Return JSON verdict to client`
      },
      techDecisions: [
        {
          choice: 'Isolated Process Execution',
          reason: 'Critical to isolate untrusted user-submitted code to prevent file system access, infinite loop hangs, and fork bombs.'
        },
        {
          choice: 'MongoDB for Problem Repository',
          reason: 'Document model makes storing complex problem descriptions, constraints, examples, and test case arrays straightforward.'
        },
        {
          choice: 'React State Management for Editor',
          reason: 'Allows seamless tab switching between problem description, editorial, and console output without re-rendering editor buffer.'
        }
      ],
      databaseDesign: {
        engine: 'MongoDB',
        description: 'Organized into problems, test cases, and historical user submissions.',
        models: [
          { name: 'Problem', purpose: 'Stores title, slug, statement, constraints, difficulty, tags, and starter code boilerplate.' },
          { name: 'TestCase', purpose: 'Stores problemId reference, input string, expected output string, and isHidden flag.' },
          { name: 'Submission', purpose: 'Stores userId, problemId, code string, language, execution time, memory used, and verdict.' }
        ]
      },
      apiDesign: [
        { endpoint: 'GET /api/problems', method: 'GET', description: 'Returns filtered list of algorithmic challenges' },
        { endpoint: 'GET /api/problems/:slug', method: 'GET', description: 'Returns full statement, examples, and starter templates' },
        { endpoint: 'POST /api/submissions/run', method: 'POST', description: 'Executes code against custom input and returns stdout/stderr' },
        { endpoint: 'POST /api/submissions/submit', method: 'POST', description: 'Evaluates code against full test suite and records final verdict' }
      ],
      metrics: [
        { label: 'Evaluation Target', type: 'target', value: '<1.5 seconds', detail: 'Target turn-around time for compiling and evaluating submissions' },
        { label: 'Problem Categories', type: 'configured', value: '8 Core CS Domains', detail: 'Arrays, Hashing, Trees, Graphs, DP, Greedy, Binary Search, Heaps' },
        { label: 'Safety Harness', type: 'configured', value: 'Process Timeout Limit', detail: '2.0-second execution wall-clock cutoff preventing infinite loops' }
      ],
      challenges: [
        'Safely handling infinite loops (e.g. while(true)) without hanging the Node.js server thread.',
        'Comparing string outputs that differ only in trailing whitespace or newline characters.'
      ],
      solutions: [
        'Implemented strict child process timeouts that terminate the execution context if it exceeds 2000ms.',
        'Built a custom string normalizer that strips carriage returns and trims line endings before comparison.'
      ],
      limitations: [
        'Production grade multi-tenant isolation requires a dedicated cluster like Judge0 or AWS Lambda with gVisor / Firecracker microVMs.',
        'Heavy simultaneous compilation requests require queue-based job worker architecture (e.g., BullMQ + Redis).'
      ],
      whatILearned: [
        'Process management, IPC streams, and execution security best practices.',
        'Structuring clean API contracts for asynchronous code execution pipelines.'
      ],
      futureImprovements: [
        'Integrate BullMQ with Redis to handle asynchronous job queues with worker autoscaling.',
        'Add AI-assisted hint generator that analyzes failed test cases and points out algorithmic oversights without spoiling the solution.'
      ],
      github: 'https://github.com/Raj72620',
      liveDemo: 'https://github.com/Raj72620'
    }
  }
];

export const WHAT_IVE_DONE = {
  subtitle:
    'Beyond building software, I have spent significant time teaching, experimenting with emerging technologies, and contributing to the developer community.',
  pillars: [
    {
      id: 'dsa-mentoring',
      pillar: 'TEACH',
      badge: 'Technical Mentorship',
      title: 'DSA & Programming Instructor',
      subtitle: 'Conducted technical learning sessions across multiple colleges',
      metrics: 'Multiple College Sessions · 100+ Students Mentored',
      description:
        'As an independent developer and top-ranked problem solver, I have conducted structured technical training sessions across engineering colleges, guiding students through programming fundamentals, Data Structures & Algorithms, and interview problem-solving frameworks.',
      focusAreas: [
        'Conceptual intuition over rote memorization (visualizing recursion trees, pointer traversal, and graph paths)',
        'Algorithmic patterns (Two Pointers, Sliding Window, Fast & Slow Pointers, Divide & Conquer)',
        'Edge case analysis, time/space complexity trade-offs, and Big-O notation',
        'Interview-oriented technical communication and live whiteboarding strategies'
      ],
      topics: ['Data Structures & Algorithms', 'Java OOP', 'Time Complexity Analysis', 'Problem Solving Patterns']
    },
    {
      id: 'fullstack-dev',
      pillar: 'BUILD',
      badge: 'Independent Engineering',
      title: 'Independent Full-Stack Developer',
      subtitle: 'End-to-end design, implementation, and deployment',
      metrics: '4 Flagship Applications · Deployed & Documented',
      description:
        'Built and deployed production-ready applications independently, taking projects from initial requirements formulation and architectural design through backend APIs, database modeling, frontend UI engineering, and cloud deployment.',
      focusAreas: [
        'Modular REST API architecture in Express with clean controller/service layers',
        'Relational (SQL) and Document (MongoDB) database schema design and indexing',
        'Client-side state management, performance profiling, and accessible semantic UI',
        'Deployment workflows across Render, Netlify, and cloud VPS environments'
      ],
      topics: ['React', 'Node.js', 'Express', 'MongoDB', 'SQL', 'REST APIs', 'WebSockets']
    },
    {
      id: 'ai-development',
      pillar: 'EXPLORE',
      badge: 'Applied AI',
      title: 'AI-Enabled Application Engineering',
      subtitle: 'Practical AI integration focused on real utility',
      metrics: 'LLM APIs · Context Injection · Code Assistance',
      description:
        'Explored and implemented applied AI capabilities within full-stack products, prioritizing verifiable engineering utility over marketing hype. Focused on leveraging LLMs for automated code analysis, context-aware assistance, and intelligent processing pipelines.',
      focusAreas: [
        'Integrating modern LLM APIs (OpenAI / Anthropic / Gemini) into Node.js backend services',
        'Prompt engineering and structured JSON output validation using schemas',
        'Context window management and token optimization for developer tooling',
        'Building guardrails against hallucinations in technical assistants'
      ],
      topics: ['LLM APIs', 'Context Injection', 'Prompt Architecture', 'Structured Validation', 'Code Review Automation']
    },
    {
      id: 'open-source',
      pillar: 'CONTRIBUTE',
      badge: 'Open Collaboration',
      title: 'Open Source & Community Work',
      subtitle: 'Contributing through GitHub-based collaboration and public code',
      metrics: 'Active GitHub Profile · Verified Repositories',
      description:
        'Actively sharing code on GitHub, participating in developer discussions, maintaining transparent project documentation, and creating accessible code repositories to help fellow students learn engineering best practices.',
      focusAreas: [
        'Publishing well-documented repositories with architecture diagrams and setup guides',
        'Creating clean PRs with focused scope, readable commits, and issue linking',
        'Peer code review and sharing algorithmic explanations within developer circles'
      ],
      topics: ['GitHub Collaboration', 'Code Documentation', 'Issue Resolution', 'Community Mentorship']
    }
  ]
};

export const PROGRAMMING_LANGUAGES = [
  {
    name: 'Java',
    badge: 'Primary Language',
    role: 'DSA, OOP & Core Engineering Practice',
    description:
      'My primary language for Data Structures & Algorithms, Object-Oriented System Modeling, and competitive coding. Leveraged daily for high-performance problem solving and algorithmic reasoning.',
    capabilities: ['Collections Framework', 'Generics & Type Safety', 'OOP Principles (Polymorphism, Inheritance, Encapsulation)', 'Memory Management Intuition', 'Algorithmic Profiling']
  },
  {
    name: 'JavaScript / TypeScript',
    badge: 'Full-Stack Ecosystem',
    role: 'Frontend & Backend Application Engineering',
    description:
      'The core language of my full-stack development workflow across React frontends and Node.js backend runtimes. Proficient in asynchronous event-loop patterns, Promises, and modern ES6+ paradigms.',
    capabilities: ['Asynchronous Event Loop & Concurrency', 'React Component Architecture', 'Node.js Runtime & Express Middleware', 'DOM & WebSocket APIs', 'TypeScript Static Typing']
  },
  {
    name: 'SQL',
    badge: 'Relational Data',
    role: 'Database Querying & Relational Modeling',
    description:
      'Used for relational data structuring, relational schemas, foreign key constraints, table normalization, and transactional data integrity.',
    capabilities: ['Complex Joins & Aggregations', 'Index Strategy & Query Optimization', 'Schema Normalization (1NF to 3NF)', 'ACID Transactional Guarantees']
  }
];

export const ENGINEERING_FOUNDATIONS = [
  {
    category: 'Full-Stack',
    icon: 'layers',
    skills: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'Vite', 'HTML5 / Semantic Web', 'Tailwind / Modern CSS']
  },
  {
    category: 'Backend & APIs',
    icon: 'server',
    skills: ['Authentication (JWT / Sessions)', 'RESTful Architecture', 'Middleware Chains', 'Input Validation & Sanitization', 'Error Handling Frameworks', 'Rate Limiting']
  },
  {
    category: 'Real-Time Systems',
    icon: 'zap',
    skills: ['WebRTC (P2P Mesh)', 'Socket.IO', 'Bi-directional WebSockets', 'SDP Offer/Answer Negotiation', 'ICE Candidate Trickling', 'Adaptive Bitrate Controls']
  },
  {
    category: 'Databases & Storage',
    icon: 'database',
    skills: ['MongoDB Atlas (Document Modeling)', 'Mongoose ODM', 'MySQL / Relational SQL', 'Indexing Strategies', 'Aggregation Pipelines']
  },
  {
    category: 'Core Computer Science',
    icon: 'cpu',
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming (OOP)', 'Database Management Systems (DBMS)', 'Operating Systems (OS Concepts)', 'Computer Networks (TCP/IP, HTTP/HTTPS)']
  },
  {
    category: 'System Design & Tooling',
    icon: 'git-branch',
    skills: ['Git & GitHub Version Control', 'Docker Basics', 'Caching Principles', 'Client-Server Decoupling', 'Horizontal vs Vertical Scaling Concepts']
  }
];

export const PROBLEM_SOLVING_DATA = {
  headline: 'Problem Solving & Algorithmic Rigor',
  totalProblemsSolved: '300+',
  instituteRank: '#1',
  instituteName: 'SVCET — GeeksforGeeks Leaderboard',
  platforms: [
    {
      name: 'GeeksforGeeks',
      rank: 'Institute Rank #1',
      profileUrl: 'https://www.geeksforgeeks.org/profile/nishanthraj',
      altUrl: 'https://www.geeksforgeeks.org/user/renusin39mc/',
      highlight: '300+ Problems Solved with consistent problem-solving streak'
    },
    {
      name: 'LeetCode',
      rank: 'Active Competitor',
      profileUrl: 'https://leetcode.com/u/Nishanth-Raj/',
      highlight: 'Practicing medium-to-hard algorithmic patterns and contest challenges'
    }
  ],
  topics: [
    { name: 'Arrays & Two Pointers', depth: 'High', description: 'Prefix sums, two-pointer convergence, sliding window, cyclic sort' },
    { name: 'Hashing & Maps', depth: 'High', description: 'Frequency tracking, hash map lookups, collision resolution concepts' },
    { name: 'Trees & BST', depth: 'High', description: 'Tree traversals (In/Pre/Post/Level), LCA, BST validation, path sums' },
    { name: 'Graphs', depth: 'Medium-High', description: 'BFS, DFS, cycle detection, topological sorting, connected components' },
    { name: 'Dynamic Programming', depth: 'Medium-High', description: '1D/2D memoization, tabulation, knapsack patterns, state transitions' },
    { name: 'Greedy Algorithms', depth: 'High', description: 'Interval scheduling, activity selection, optimal substructure problems' },
    { name: 'Binary Search', depth: 'High', description: 'Standard search, search in rotated arrays, binary search on answer space' },
    { name: 'Heaps & Priority Queues', depth: 'Medium', description: 'Kth largest element, merge K sorted lists, min/max heap invariants' }
  ]
};

export const ACHIEVEMENTS: CertificateItem[] = [
  {
    id: 'sih-certificate',
    title: 'Smart India Hackathon 2024',
    issuer: 'Ministry of Education & AICTE, Govt. of India',
    date: '2024',
    category: 'hackathon',
    badge: 'National Grand Finalist',
    image: sihCertImg,
    summary: 'Selected among top national engineering teams to compete in the SIH 2024 Grand Finale solving real-world government software challenges.'
  },
  {
    id: 'runnerup-certificate',
    title: 'Intellecthon National Hackathon',
    issuer: 'Technical Hackathon Committee',
    date: '2024',
    category: 'hackathon',
    badge: 'Runner-Up (2nd Place)',
    image: runnerupCertImg,
    summary: 'Secured 2nd place for building an innovative high-impact software prototype within strict 24-hour hackathon constraints.'
  },
  {
    id: 'gfg-rank1',
    title: 'GeeksforGeeks Institute Rank #1',
    issuer: 'GeeksforGeeks Campus Chapter',
    date: 'Ongoing Verification',
    category: 'problem-solving',
    badge: 'College Rank #1',
    image: dsaCertImg,
    summary: 'Achieved and sustained the #1 rank across SVCET on the GeeksforGeeks coding leaderboard with over 300 algorithm problems solved.'
  },
  {
    id: 'pro-solvo-certificate',
    title: 'ProSolvo SIE Cell Challenge',
    issuer: 'Student Innovation & Entrepreneurship Cell',
    date: '2024',
    category: 'technical',
    badge: '1st Place Champion',
    image: proSolvoCertImg,
    summary: 'Awarded 1st place champion in institutional technical problem analysis, innovation prototyping, and algorithmic solution execution.'
  },
  {
    id: 'hack-azure-certificate',
    title: 'Microsoft Azure Hackathon',
    issuer: 'Microsoft Student Community',
    date: '2024',
    category: 'technical',
    badge: 'Verified Finalist',
    image: azureCertImg,
    summary: 'Demonstrated cloud computing workflows, API deployment, and system scalability concepts in an Azure-backed hackathon.'
  },
  {
    id: 'mongodb-certificate',
    title: 'MongoDB Database Certification',
    issuer: 'MongoDB Academy',
    date: '2024',
    category: 'technical',
    badge: 'Certified Developer',
    image: mongodbCertImg,
    summary: 'Verified competency in MongoDB document modeling, CRUD operations, indexing strategies, and aggregation frameworks.'
  },
  {
    id: 'leadership-certificate',
    title: 'Technical Leadership Recognition',
    issuer: 'Department of Information Technology',
    date: '2024',
    category: 'technical',
    badge: 'Leadership Award',
    image: leadershipCertImg,
    summary: 'Recognized for conducting student mentoring workshops, peer programming guidance, and fostering a strong coding culture.'
  }
];

export const TIMELINE_JOURNEY = [
  {
    year: '2024',
    phase: 'Core Foundations & Competitive Coding',
    detail: 'Mastered Java OOP and rigorous Data Structures & Algorithms. Ranked #1 on GFG institute leaderboard and competed in SIH 2024 Grand Finale.'
  },
  {
    year: '2024 - 2025',
    phase: 'Full-Stack & Real-Time Engineering',
    detail: 'Built DiscussionHub community platform and architected WebRTC multi-party video conferencing platform with P2P mesh and Socket.IO signaling.'
  },
  {
    year: '2025',
    phase: 'Technical Mentorship & College Sessions',
    detail: 'Invited to conduct hands-on DSA and programming workshops across colleges, training 100+ students on problem-solving patterns.'
  },
  {
    year: '2025 - 2026',
    phase: 'Applied AI & Open Source Contributions',
    detail: 'Explored practical LLM API integrations for developer tooling, published open-source repositories, and expanded system design foundations.'
  },
  {
    year: '2026',
    phase: 'Software Developer & Graduate',
    detail: 'Graduating in Information Technology (SVCET · 8.4 CGPA). Actively building full-stack platforms, taking freelance contracts, and seeking full-time engineering roles.'
  }
];

export const SERVICES = [
  {
    title: 'Full-Stack Web Applications',
    icon: 'globe',
    description: 'Complete, responsive web products built from frontend UI to backend micro-services, authentication, and cloud deployment.',
    deliverables: ['Responsive React UI', 'Secure Express REST APIs', 'Database Schema & Integration', 'Cloud Hosting & CI/CD']
  },
  {
    title: 'Backend Systems & REST APIs',
    icon: 'server',
    description: 'High-performance API design, relational/document database integration, JWT authentication, and business logic architecture.',
    deliverables: ['Stateless JWT Auth', 'Mongoose / SQL Modeling', 'Input Validation & Rate Limiting', 'Comprehensive API Documentation']
  },
  {
    title: 'Real-Time Communication Systems',
    icon: 'video',
    description: 'Low-latency peer-to-peer or server-mediated streaming, live messaging, and interactive collaborative platforms.',
    deliverables: ['WebRTC Audio/Video Streaming', 'Socket.IO Real-Time Sync', 'Screen Sharing Integration', 'Adaptive Bitrate Optimization']
  },
  {
    title: 'AI-Enabled Web Applications',
    icon: 'cpu',
    description: 'Practical, value-driven AI features embedded into full-stack software using modern LLM APIs and prompt engineering.',
    deliverables: ['LLM API Integration', 'Context Extraction & Pipelines', 'Structured JSON Output Handling', 'Cost & Token Optimization']
  },
  {
    title: 'Technical Mentoring & Code Optimization',
    icon: 'book',
    description: 'Structured training in Data Structures & Algorithms, code refactoring, performance debugging, and technical interview preparation.',
    deliverables: ['Algorithmic Pattern Workshops', 'Code Quality & Clean Architecture Reviews', 'Interview Prep Guidance', 'Edge Case Analysis']
  }
];

export const FREELANCE_EXPERIENCE = {
  role: 'Independent Software Developer',
  type: 'Freelance & Independent Engineering',
  summary:
    'Operating independently across full-stack engineering, technical education, and custom software development. Handling client and project lifecycles end-to-end from requirements gathering to architecture, coding, testing, and production deployment.',
  responsibilities: [
    'Requirements breakdown and technical specification drafting',
    'System architecture and technology stack selection',
    'Frontend UI development with responsive and accessible component hierarchies',
    'Backend API development with authentication, authorization, and rate limiting',
    'Database modeling, normalization, and aggregation query optimization',
    'Deployment configuration across cloud platforms with environment isolation',
    'Post-launch debugging, latency profiling, and ongoing maintenance'
  ]
};
