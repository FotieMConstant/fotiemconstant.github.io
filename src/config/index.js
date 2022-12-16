/* eslint-disable max-len */
import featuredProjects from './featured';
import projects from './projects';

module.exports = {
  email: 'fotiecodes@gmail.com',
  featuredProjects,
  projects,
  skills: ['JavaScript', 'Vuejs', 'Nuxtjs', 'Python'],
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/FotieMConstant',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/fotie-m-constant/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/fotie_codes/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/fotie_codes',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Blog',
      url: 'https://dev.to/fotiecodes',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],
  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },
};
