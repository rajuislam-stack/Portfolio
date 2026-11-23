import bookmarkImg from './assets/bookmark.png';
import githubImg from './assets/github-search.png';
import hibpCloneImg from './assets/hibp-clone.png';
import taskTrackerImg from './assets/task-tracker.png';
import charCounterImg from './assets/char-counter.png';
import passwordGenImg from './assets/password-generator.png';


//For Project Section

export const projectsInfo = [
  {
    id: 1,
    title: 'Bookmark Manager Application',
    subtitle: 'Add, filter, and organize your essential web links in real time.',
    projectImage: bookmarkImg,
    overlayGradient: 'linear-gradient(to top right, rgba(0, 0, 0, 0.96) 25%, rgba(153, 27, 27, 0.65) 70%, rgba(220, 38, 38, 0.40) 100%)',
    tech: ['Vanilla JS', 'Sass', 'LocalStorage'],
    features: [
      'Real-time URL filtering and quick search',
      'Client-side data persistence via LocalStorage',
      'Clean modular DOM manipulation architecture'
    ],
    liveUrl: 'https://bookmark-manager-application-with-j.vercel.app/',
    githubUrl: 'https://github.com/rajuislam-stack/Bookmark-Manager-Application-with-JavaScript'
  },
  {
    id: 2,
    title: 'GitHub Profile Finder',
    subtitle: 'Fetch live API data with structured React Context & Reducer state logic.',
    projectImage: githubImg,
    overlayGradient: 'linear-gradient(to top right, rgba(0, 0, 0, 0.96) 25%, rgba(88, 28, 135, 0.65) 70%, rgba(147, 51, 234, 0.40) 100%)',
    tech: ['React.js', 'REST API', 'Tailwind CSS'],
    features: [
      'Asynchronous GitHub REST API data fetching',
      'React for state management and tailwind CSS styling for responsive UI',
      'Dynamic user profile and repository statistics'
    ],
    liveUrl: 'https://github-user-search-app-with-react-j.vercel.app/',
    githubUrl: 'https://github.com/rajuislam-stack/github-user-search-app-with-react.js'
  },
  {
    id: 3,
    title: 'Have I Been Pwned UI Clone',
    subtitle: 'A responsive security-focused landing page built with modern layout precision.',
    projectImage: hibpCloneImg,
    overlayGradient:'linear-gradient(to top right, rgba(0, 0, 0, 0.96) 25%, rgba(136, 19, 55, 0.65) 70%, rgba(225, 29, 72, 0.38) 100%)',
    tech: ['HTML5', 'CSS3', 'Responsive Design'],
    features: [
      'Mobile-first responsive grid and Flexbox layout',
      'Clean dark-themed cybersecurity interface structure',
      'Cross-browser compatible semantic HTML markup'
    ],
    liveUrl: 'https://responsive-have-i-been-pwned-websit.vercel.app/', 
    githubUrl: 'https://github.com/rajuislam-stack/Responsive-HaveIBeenPwned-Website-Clone'
  },
  {
    id: 4,
    title: 'Study Task Tracker',
    subtitle: 'Plan daily academic goals, track study progress, and manage tasks efficiently.',
    projectImage: taskTrackerImg,
    overlayGradient: 'linear-gradient(to top right, rgba(0, 0, 0, 0.96) 25%, rgba(67, 56, 202, 0.60) 70%, rgba(124, 58, 237, 0.38) 100%)',
    tech: ['React.js', 'Tailwind CSS', 'LocalStorage'],
    features: [
      'Create, update, and manage daily study tasks',
      'Component-driven state handling for task completion',
      'Persistent browser storage for dark and light mode preferences'
    ],
    liveUrl: 'https://study-task-tracker-with-reactjs.vercel.app/', 
    githubUrl: 'https://github.com/rajuislam-stack/Study-Task-Tracker-With-ReactJS'
    },
  {
    id: 5,
    title: 'Real-Time Character Counter',
    subtitle: 'Analyze text metrics instantly with live character, word, and limit tracking.',
    projectImage: charCounterImg,
    overlayGradient: 'linear-gradient(to top right, rgba(0, 0, 0, 0.96) 25%, rgba(112, 26, 117, 0.65) 70%, rgba(192, 38, 211, 0.38) 100%)',
    tech: ['HTML5', 'CSS3', 'Vanilla JS'],
    features: [
      'Instant character and word count calculation on input',
      'Configurable character limit alerts and space toggle',
      'Lightweight, zero-dependency event-driven logic'
    ],
    liveUrl: 'https://real-time-character-counter-app.vercel.app/', 
    githubUrl: 'https://github.com/rajuislam-stack/Real-Time-Character-Counter-App'
  },
  {
    id: 6,
    title: 'Password Generator Application',
    subtitle: 'Generate strong, customizable passwords with real-time security feedback.',
    projectImage: passwordGenImg,
    overlayGradient: 'linear-gradient(to top right, rgba(0, 0, 0, 0.96) 25%, rgba(127, 29, 29, 0.65) 70%, rgba(239, 68, 68, 0.38) 100%)',
    tech: ['HTML5', 'CSS3', 'Vanilla JS'],
    features: [
      'Custom character length and symbol/number toggles',
      'Instant password strength calculation logic',
      'One-click clipboard copy with visual confirmation'
    ],
    liveUrl: 'https://password-generator-web-application.vercel.app/',
    githubUrl: 'https://github.com/rajuislam-stack/Password-Generator-Web-Application'
  }
];


//For Services Section


export const servicesData = [
  {
    id: 1,
    title: "Full-Stack Web & Laravel App Development",
    role: "End-to-End Web Solutions",
    badge: "Full-Stack",
    summary:
      "Building structured, dynamic web applications with clean backend logic, database integration, and responsive interfaces using PHP, MySQL, and Laravel.",
    deliverables: [
      "Custom web applications & CRUD-based management systems",
      "Database schema design & secure data handling with MySQL",
      "Form validation, session/auth flows & clean MVC architecture",
      "Deployment-ready code structure with Git & GitHub",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "JavaScript",
      "Tailwind CSS",
      "Git",
    ],
  },
  {
    id: 2,
    title: "Modern Frontend & UI Development",
    role: "Responsive & Interactive UI",
    badge: "Frontend",
    summary:
      "Crafting fast, mobile-first user interfaces and interactive web apps with component-driven architecture, smooth animations, and clean styling.",
    deliverables: [
      "Responsive multi-page sites & interactive web apps (e.g., task trackers, search & utility apps)",
      "State management, API integration & local persistence",
      "Smooth UI transitions and micro-interactions",
      "Pixel-accurate layouts from design references & Figma",
    ],
    technologies: [
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Sass (SCSS)",
      "Framer Motion",
      "HTML5",
      "CSS3",
    ],
  },
  {
    id: 3,
    title: "Bug Fixing, UI Polish & Code Refactoring",
    role: "Debugging & Optimization",
    badge: "Maintenance & Fixes",
    summary:
      "Diagnosing layout glitches, broken state/logic, and PHP/JS errors while refactoring messy code into cleaner, more maintainable modules.",
    deliverables: [
      "Fixing responsive layout issues across mobile, tablet, and desktop",
      "Debugging JavaScript state, event handling, and API/form issues",
      "Resolving PHP runtime/validation errors & cleaning up logic",
      "Improving code readability, structure, and UI consistency",
    ],
    technologies: [
      "JavaScript",
      "React.js",
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "Sass (SCSS)",
      "GitHub",
    ],
  },
];

export const serviceHighlights = [
  {
    id: 1,
    value: "1+",
    label: "Years of Daily Coding Practice",
  },
  {
    id: 2,
    value: "10+",
    label: "Frontend & Web Apps Built",
  },
  {
    id: 3,
    value: "3",
    label: "Core Service Tracks",
  },
  {
    id: 4,
    value: "100%",
    label: "Hands-On & Detail-Focused Execution",
  },
];