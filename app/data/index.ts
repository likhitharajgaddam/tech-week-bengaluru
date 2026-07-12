/* ─────────────────────────────────────────────────────────────────
   Bengaluru AI & Developer Week 2026  |  21–26 July 2026
   ───────────────────────────────────────────────────────────────── */

/* ── Timeline ─────────────────────────────────────────────────── */
export const timelineData = [
  {
    day: 1,
    date: "21 July",
    title: "NXP Tech Days Bengaluru 2026",
    color: "#2563EB",
    venue: "Bengaluru",
    activities: [
      { time: "Morning",   icon: "coffee",  label: "Registration & Opening Keynote" },
      { time: "Afternoon", icon: "laptop",  label: "AI at the Edge & Automotive Software" },
      { time: "Evening",   icon: "users",   label: "Networking Reception" },
      { time: "Night",     icon: "monitor", label: "Live Technical Demonstrations" },
    ],
    description:
      "NXP Tech Days Bengaluru 2026 — a full-day embedded systems and semiconductor conference featuring AI at the edge, automotive software, industrial IoT, technical sessions, live demonstrations, and networking with engineers across India.",
    link: "https://www.aicas.com/events/nxp-tech-days-bengaluru-2026/",
    linkLabel: "View Official Event",
    badge: "Embedded Systems",
  },
  {
    day: 2,
    date: "22 July",
    title: "ABBYY Ascend DevCon — Day 1",
    color: "#0EA5E9",
    venue: "Bengaluru",
    activities: [
      { time: "Morning",   icon: "mic",      label: "Executive Keynotes" },
      { time: "Afternoon", icon: "laptop",   label: "Enterprise AI Sessions" },
      { time: "Evening",   icon: "users",    label: "Networking" },
      { time: "Night",     icon: "briefcase", label: "Partner Showcase" },
    ],
    description:
      "ABBYY Ascend DevCon kicks off with executive keynotes on intelligent automation, enterprise AI sessions covering OCR, document AI and LLMs, and a partner showcase networking evening.",
    link: "https://www.meetup.com/abbyy-ascend-devcon-2026/events/315423262/",
    linkLabel: "View Official Event",
    badge: "Enterprise AI",
  },
  {
    day: 3,
    date: "23 July",
    title: "ABBYY Ascend DevCon — Day 2",
    color: "#0EA5E9",
    venue: "Bengaluru",
    activities: [
      { time: "Morning",   icon: "laptop",  label: "Developer Workshops" },
      { time: "Afternoon", icon: "star",    label: "Certifications" },
      { time: "Evening",   icon: "award",   label: "Hackathon Finals" },
      { time: "Night",     icon: "users",   label: "Closing Ceremony" },
    ],
    description:
      "Day two of ABBYY Ascend DevCon — hands-on developer workshops, certification tracks, hackathon finale and closing ceremony.",
    link: "https://www.meetup.com/abbyy-ascend-devcon-2026/events/315423262/",
    linkLabel: "View Official Event",
    badge: "Enterprise AI",
  },
  {
    day: 4,
    date: "24 July",
    title: "Hackathon Registration & Community Day",
    color: "#10B981",
    venue: "Bengaluru, India",
    activities: [
      { time: "Morning",   icon: "coffee", label: "Registration & Check-in" },
      { time: "Afternoon", icon: "users",  label: "Welcome Sessions & Event Briefing" },
      { time: "Evening",   icon: "star",   label: "Networking, Refreshments & Community Activities" },
      { time: "Night",     icon: "users",  label: "Team Introductions & Preparation" },
    ],
    description:
      "A preparation day before the AI Build Day event where participants complete registrations, collect welcome kits, attend orientation sessions, enjoy refreshments, network with fellow developers, and participate in community engagement activities.",
    link: "https://luma.com/ai-84kw",
    linkLabel: "Register",
    badge: "Community",
  },
  {
    day: 5,
    date: "25 July",
    title: "AI Internship Hackathon 2026",
    color: "#F59E0B",
    venue: "Bengaluru, India",
    activities: [
      { time: "Morning",   icon: "coffee", label: "Opening Ceremony & Team Briefing" },
      { time: "Afternoon", icon: "laptop", label: "AI Development Sprint" },
      { time: "Evening",   icon: "users",  label: "Mentor Reviews & Networking" },
      { time: "Night",     icon: "award",  label: "Project Presentations & Internship Announcements" },
    ],
    description:
      "A full-day AI hackathon where participants develop innovative AI solutions, attend mentor checkpoints, showcase their projects, and compete for internship opportunities.",
    link: "https://luma.com/ai-84kw",
    linkLabel: "Register",
    badge: "Hackathon",
  },
  {
    day: 6,
    date: "26 July",
    title: "AI Mobile Coders Meetup",
    color: "#10B981",
    venue: "Bengaluru",
    activities: [
      { time: "Morning",   icon: "users",   label: "Community Talks" },
      { time: "Afternoon", icon: "laptop",  label: "AI Mobile Workshops" },
      { time: "Evening",   icon: "users",   label: "Networking" },
      { time: "Night",     icon: "moon",    label: "Closing Meetup" },
    ],
    description:
      "Close out the week with the AI Mobile Coders Meetup — community talks on AI-powered mobile apps, GenAI and cross-platform development, hands-on workshops and open networking.",
    link: "https://aimobilecoders.com/events/2",
    linkLabel: "View Official Event",
    badge: "AI Community",
  },
];

/* ── Events ───────────────────────────────────────────────────── */
export const eventsData = [
  {
    id: 1,
    title: "NXP Tech Days Bengaluru 2026",
    subtitle: "Embedded Systems",
    date: "21 July 2026",
    venue: "Bengaluru, India",
    description:
      "A full-day embedded systems and semiconductor conference featuring AI at the edge, automotive software, industrial IoT, technical sessions, live demonstrations, and networking with engineers across India.",
    color: "#2563EB",
    tag: "Embedded Systems",
    link: "https://www.aicas.com/events/nxp-tech-days-bengaluru-2026/",
    ctaLabel: "Learn More",
    scrollTo: null,
  },
  {
    id: 2,
    title: "ABBYY Ascend DevCon 2026",
    subtitle: "Enterprise AI",
    date: "22–23 July 2026",
    venue: "Bengaluru, India",
    description:
      "A two-day enterprise AI developer conference focused on intelligent automation, document AI, OCR, large language models, technical sessions, certifications and networking with software architects and developers.",
    color: "#0EA5E9",
    tag: "Enterprise AI",
    link: "https://www.meetup.com/abbyy-ascend-devcon-2026/events/315423262/",
    ctaLabel: "Learn More",
    scrollTo: null,
  },
  {
    id: 3,
    title: "Hackathon Registration & Community Day",
    subtitle: "Community",
    date: "24 July 2026",
    venue: "Bengaluru, India",
    description:
      "A preparation day before the AI Build Day event where participants complete registrations, collect welcome kits, attend orientation sessions, enjoy refreshments, network with fellow developers, and participate in community engagement activities.",
    color: "#10B981",
    tag: "Community",
    link: null,
    ctaLabel: "Register",
    scrollTo: "register",
  },
  {
    id: 4,
    title: "AI Internship Hackathon 2026",
    subtitle: "Hackathon",
    date: "25 July 2026",
    venue: "Bengaluru, India",
    description:
      "An AI-focused hackathon where students and developers collaborate to build innovative AI solutions, receive mentorship from industry experts, participate in technical challenges, and compete for internship opportunities with partner organizations.",
    color: "#F59E0B",
    tag: "Hackathon",
    link: "https://luma.com/ai-84kw",
    ctaLabel: "Register",
    scrollTo: null,
  },
  {
    id: 5,
    title: "AI Mobile Coders Meetup",
    subtitle: "AI Community",
    date: "26 July 2026",
    venue: "Bengaluru, India",
    description:
      "Developer community sessions covering AI-powered mobile applications, GenAI, cross-platform development, networking, and collaborative discussions.",
    color: "#10B981",
    tag: "AI Community",
    link: "https://aimobilecoders.com/events/2",
    ctaLabel: "Learn More",
    scrollTo: null,
  },
];

/* ── Schedule ─────────────────────────────────────────────────── */
export const scheduleData = [
  {
    day: "Day 1",
    date: "21 July",
    title: "NXP Tech Days Bengaluru 2026",
    link: "https://www.aicas.com/events/nxp-tech-days-bengaluru-2026/",
    linkLabel: "View Official Event",
    slots: {
      morning:   "Registration & Opening Keynote",
      afternoon: "AI at the Edge & Automotive Software Sessions",
      evening:   "Networking Reception with Engineers",
      night:     "Live Technical Demonstrations & Industrial IoT",
    },
  },
  {
    day: "Day 2",
    date: "22 July",
    title: "ABBYY Ascend DevCon — Day 1",
    link: "https://www.meetup.com/abbyy-ascend-devcon-2026/events/315423262/",
    linkLabel: "View Official Event",
    slots: {
      morning:   "Executive Keynotes & Intelligent Automation",
      afternoon: "Enterprise AI Sessions: Document AI & OCR",
      evening:   "Networking & Partner Showcase",
      night:     "LLM Integration Labs & Evening Sessions",
    },
  },
  {
    day: "Day 3",
    date: "23 July",
    title: "ABBYY Ascend DevCon — Day 2",
    link: "https://www.meetup.com/abbyy-ascend-devcon-2026/events/315423262/",
    linkLabel: "View Official Event",
    slots: {
      morning:   "Developer Workshops: Document AI & OCR",
      afternoon: "Certification Tracks & LLM Integration Labs",
      evening:   "Hackathon Finals & Project Demos",
      night:     "Closing Ceremony & Awards",
    },
  },
  {
    day: "Day 4",
    date: "24 July",
    title: "Hackathon Registration & Community Day",
    link: "https://luma.com/ai-84kw",
    linkLabel: "Register",
    slots: {
      morning:   "Registration & Check-in",
      afternoon: "Welcome Sessions & Event Briefing",
      evening:   "Networking, Refreshments & Community Activities",
      night:     "Team Introductions & Preparation",
    },
  },
  {
    day: "Day 5",
    date: "25 July",
    title: "AI Internship Hackathon 2026",
    link: "https://luma.com/ai-84kw",
    linkLabel: "Register",
    slots: {
      morning:   "Opening Ceremony & Team Briefing",
      afternoon: "AI Development Sprint",
      evening:   "Mentor Reviews & Networking",
      night:     "Project Presentations & Internship Announcements",
    },
  },
  {
    day: "Day 6",
    date: "26 July",
    title: "AI Mobile Coders Meetup",
    link: "https://aimobilecoders.com/events/2",
    linkLabel: "View Official Event",
    slots: {
      morning:   "Community Talks: AI-Powered Mobile Apps",
      afternoon: "Workshops: GenAI & Cross-Platform Development",
      evening:   "Open Networking & Collaborative Discussions",
      night:     "Closing Meetup & Week Retrospective",
    },
  },
];

/* ── FAQ ──────────────────────────────────────────────────────── */
export const faqData = [
  {
    question: "What is Bengaluru AI & Developer Week 2026?",
    answer:
      "Bengaluru AI & Developer Week 2026 is a curated 6-day tech itinerary (21–26 July) bringing together four official events — NXP Tech Days, ABBYY Ascend DevCon, India Agentic AI Open Hackathon and the AI Mobile Coders Meetup — covering embedded systems, enterprise AI, agentic AI and mobile development.",
  },
  {
    question: "Are the events free to attend?",
    answer:
      "Each event has its own registration policy. The AI Mobile Coders Meetup and many community sessions are free. NXP Tech Days and ABBYY Ascend DevCon may have professional registration fees. The India Agentic AI Open Hackathon is free to enter. Check each official event page for up-to-date pricing and registration details.",
  },
  {
    question: "How do I register for the events?",
    answer:
      "Click the Learn More or Register button on each event card — it will take you directly to the official registration page. You can also register your interest using the form on this page to receive updates about all events in the week.",
  },
  {
    question: "Can students attend?",
    answer:
      "Absolutely. Bengaluru AI & Developer Week 2026 welcomes students, early-career developers, researchers and experienced professionals alike. The India Agentic AI Open Hackathon and AI Mobile Coders Meetup are especially beginner-friendly, with mentorship available throughout.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring your laptop, charger, government-issued ID for venue entry, and a curiosity for AI and software development. For the hackathon, teams should prepare their development environment in advance. Specific requirements are listed on each official event page.",
  },
  {
    question: "Which events require separate registration?",
    answer:
      "All four events require independent registration on their respective official websites. NXP Tech Days: aicas.com/events. ABBYY Ascend DevCon: meetup.com. India Agentic AI Open Hackathon: openhackathons.org. AI Mobile Coders Meetup: aimobilecoders.com. Links are provided on every event card.",
  },
];
