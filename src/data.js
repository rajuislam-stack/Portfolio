import bookmarkImg from './assets/bookmark.png';
import githubImg from './assets/github-search.png';
import hibpCloneImg from './assets/hibp-clone.png';
import taskTrackerImg from './assets/task-tracker.png';
import charCounterImg from './assets/char-counter.png';
import passwordGenImg from './assets/password-generator.png';

export const projects = [
  {
    id: 1,
    title: 'Bookmark Manager Application',
    subtitle: 'Add, filter, and organize your essential web links in real time.',
    projectImage: bookmarkImg,
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