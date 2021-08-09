import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Anirudh Sriram', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Anirudh Sriram',
  subtitle: 'I am a web developer and a JavaScript Enthusiast',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: 'I am Anirudh Sriram, a self taught web developer.I am a Computer Science masters student at SUNY Buffalo. I am a part time open source contributer and was a full time web developer at Siemens.',
  paragraphTwo: 'I spend most of my time building projects to learn new tech and improve my standing on HackerRank and Leetcode.',
  paragraphThree: 'I Currently work on React, Python and Angular.',
  resume: 'https://docs.google.com/document/d/e/2PACX-1vRuZ785q7-8EbdC7WAEIvxacZ2Ycvffw_vpVE08rySmnT5S0ZK8MJiGeX19akFMI8t9BLWIjDHBkjvy/pub', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'StockWatch.png',
    title: 'StockWatch',
    info: 'My CS50 final project to track stocks of interest and allow users to correlate stock performance with news revolving around the stock.',
    info2: 'StockWatch is built on the Angular platform with database, authentication and hosting on firebase.',
    url: 'https://cs50-2c42b.web.app',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hackerNewsClone.png',
    title: 'HackerNews Clone',
    info: 'A hackernews top 10 news aggregator.' ,
    info2: 'Built with react and axios for consumption of the hackernews API. Deployed on github pages. Serves as my crisp top 10 that I need',
    repo: 'https://github.com/AnirudhSriram/hackerNewsClone', 
    url: 'https://anirudhsriram.github.io/hackerNewsClone/' // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'meme-gen.png',
    title: 'Meme Generator',
    info: 'A fun web app for creating completely random memes',
    info2: 'One of my first React projects, MemeGenerator is a simple, no-frills meme generator.',
    repo: 'https://github.com/AnirudhSriram/Meme-Generator',
    url: '', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'anirudhsriram1995@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/anirudhsriramzz',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/anirudhsriram/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/AnirudhSriram',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
