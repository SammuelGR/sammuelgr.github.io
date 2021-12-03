import { v4 as uuidv4 } from 'uuid';

import NodeIcon from '../assets/logos/nodejs-icon.svg';
import ReactIcon from '../assets/logos/react-icon.svg';
import MongoIcon from '../assets/logos/mongodb-icon.svg';
import NextIcon from '../assets/logos/nextjs-icon.svg';
// import PostgresqlIcon from '../assets/logos/postgresql-icon.svg';
import DockerIcon from '../assets/logos/docker-icon.svg';
import TypescriptIcon from '../assets/logos/typescript-icon.svg';
// import TypescriptIcon from '../assets/logos/typescript-icon.png';
import AWSIcon from '../assets/logos/aws-icon.svg';
import WebpackIcon from '../assets/logos/webpack-icon.svg';
import SassIcon from '../assets/logos/sass-icon.svg';
import FirebaseIcon from '../assets/logos/firebase-icon.svg';
import ReduxIcon from '../assets/logos/redux-icon.svg';
import JestIcon from '../assets/logos/jest-icon.svg';

export const technologies = [
  {
    id: uuidv4(),
    title: 'Experiente',
    content: [
      {
        title: 'ReactJs',
        url: 'https://reactjs.org/',
        icon: ReactIcon,
        id: uuidv4(),
      },
      {
        title: 'React Native',
        url: 'https://reactnative.dev/',
        icon: ReactIcon,
        id: uuidv4(),
      },
      {
        title: 'Typescript',
        url: 'https://www.typescriptlang.org/',
        icon: TypescriptIcon,
        id: uuidv4(),
      },
      {
        title: 'NodeJs',
        url: 'https://nodejs.org/',
        icon: NodeIcon,
        id: uuidv4(),
      },
      {
        title: 'MongoDB',
        url: 'https://www.mongodb.com/',
        icon: MongoIcon,
        id: uuidv4(),
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Intermediário',
    content: [
      // {
      //   title: 'PostgreSQL',
      //   url: 'https://www.postgresql.org/',
      //   icon: PostgresqlIcon,
      //   id: uuidv4(),
      // },
      {
        title: 'Docker',
        url: 'https://www.docker.com/',
        icon: DockerIcon,
        id: uuidv4(),
      },
      {
        title: 'Webpack',
        url: 'https://webpack.js.org/',
        icon: WebpackIcon,
        id: uuidv4(),
      },
      {
        title: 'Firebase',
        url: 'https://firebase.google.com/',
        icon: FirebaseIcon,
        id: uuidv4(),
      },
      {
        title: 'AWS',
        url: 'https://aws.amazon.com/',
        icon: AWSIcon,
        id: uuidv4(),
      },
      {
        title: 'Redux',
        url: 'https://redux.js.org/',
        icon: ReduxIcon,
        id: uuidv4(),
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Quero aprender',
    content: [
      {
        title: 'NextJs',
        url: 'https://nextjs.org/',
        icon: NextIcon,
        id: uuidv4(),
      },
      {
        title: 'Sass',
        url: 'https://sass-lang.com/',
        icon: SassIcon,
        id: uuidv4(),
      },
      {
        title: 'Jest',
        url: 'https://jestjs.io/',
        icon: JestIcon,
        id: uuidv4(),
      },
    ],
  },
];
