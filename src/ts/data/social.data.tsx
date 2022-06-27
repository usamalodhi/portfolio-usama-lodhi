import socialInterface from '../interfaces/social.interfaces';

const socialData: socialInterface[] = [
  {
    id: 1,
    image: require('../../../public/assets/social/github.svg').default,
    alt: 'Github',
    title: 'Github',
    linkTo: 'https://www.google.com/',
  },
  {
    id: 2,
    image: require('../../../public/assets/social/linkedin.svg').default,
    alt: 'LinkedIn',
    title: 'LinkedIn',
    linkTo: 'https://www.google.com/',
  },
];

export default socialData;
