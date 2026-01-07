import { v4 as uuidv4 } from 'uuid';

import BitcoinIcon from 'assets/logos/bitcoin-icon.svg';
import EthersIcon from 'assets/logos/ethers-icon.svg';
import JestIcon from 'assets/logos/jest-icon.svg';
import MongoIcon from 'assets/logos/mongodb-icon.svg';
import NextIcon from 'assets/logos/nextjs-icon.svg';
import NodeIcon from 'assets/logos/nodejs-icon.svg';
import PostgresqlIcon from 'assets/logos/postgresql-icon.svg';
import ReactIcon from 'assets/logos/react-icon.svg';
import RustIcon from 'assets/logos/rust-icon.svg';
import SolidityIcon from 'assets/logos/solidity-icon.svg';
import StyledComponentsIcon from 'assets/logos/styled-components.svg';
import TailwindcssIcon from 'assets/logos/tailwindcss-icon.svg';
import TanstackIcon from 'assets/logos/tanstack-icon.svg';
import TypescriptIcon from 'assets/logos/typescript-icon.svg';
import ViteIcon from 'assets/logos/vite-icon.svg';

export const technologies = [
  {
    id: uuidv4(),
    type: 'core',
    content: [
      {
        title: 'ReactJs',
        url: 'https://reactjs.org/',
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
        title: 'NextJs',
        url: 'https://nextjs.org/',
        icon: NextIcon,
        id: uuidv4(),
      },
      {
        title: 'Styled Components',
        url: 'https://styled-components.com/',
        icon: StyledComponentsIcon,
        id: uuidv4(),
      },
      {
        title: 'Jest',
        url: 'https://jestjs.io/',
        icon: JestIcon,
        id: uuidv4(),
      },
      {
        title: 'Tanstack Query / React Query',
        url: 'https://tanstack.com/query/latest',
        icon: TanstackIcon,
        id: uuidv4(),
      },
    ],
  },
  {
    id: uuidv4(),
    type: 'secondary',
    content: [
      {
        title: 'React Native',
        url: 'https://reactnative.dev/',
        icon: ReactIcon,
        id: uuidv4(),
      },
      {
        title: 'Node.js',
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
      {
        title: 'PostgreSQL',
        url: 'https://www.postgresql.org/',
        icon: PostgresqlIcon,
        id: uuidv4(),
      },
      {
        title: 'tailwindcss',
        url: 'https://tailwindcss.com/',
        icon: TailwindcssIcon,
        id: uuidv4(),
      },
      {
        title: 'Vite',
        url: 'https://vite.dev/',
        icon: ViteIcon,
        id: uuidv4(),
      },
    ],
  },
  {
    id: uuidv4(),
    type: 'web3',
    content: [
      {
        title: 'Solidity',
        url: 'https://www.soliditylang.org/',
        icon: SolidityIcon,
        id: uuidv4(),
      },
      {
        title: 'Rust',
        url: 'https://rust-lang.org/',
        icon: RustIcon,
        id: uuidv4(),
      },
      {
        title: 'ethers.js',
        url: 'https://ethers.org/',
        icon: EthersIcon,
        id: uuidv4(),
      },
      {
        title: 'Bitcoin',
        url: 'https://bitcoin.org/',
        icon: BitcoinIcon,
        id: uuidv4(),
      },
    ],
  },
];
