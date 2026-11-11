import bookmarkImg from "./assets/bookmark.png";
import githubImg from './assets/github-search.png';


export const projects = [
  {
    id: 1,
    title: 'Bookmark Manager',
    subtitle: 'Organize, filter, and persist your essential web links in real time.',
    bgImage: bookmarkImg, 
    tech: ['Vanilla JS', 'Sass', 'LocalStorage'],
    features: ['Real-time filtering', 'LocalStorage data persistence', 'Clean modular DOM architecture'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id:2,
    title: 'GitHub Profile Finder',
    subtitle: 'Fetch live API data with structured React Context & Reducer state logic.',
    bgImage: githubImg,
    tech: ['React.js', 'API', 'Tailwind CSS'],
    features: ['Async API fetching', 'Context API & Reducer state', 'Dynamic user repo analytics'],
    liveUrl: '#',
    githubUrl: '#'
  }
];