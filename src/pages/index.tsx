import { getSammyAge } from '../utils/dateUtils';

import Polygon1 from '../assets/Polygon_1.png';
import Polygon2 from '../assets/Polygon_2.png';
import GithubLogo from '../assets/github.svg';

import { repos } from '../constants/repos';

import {
  Header,
  Footer,
  TechnologiesCard,
  RepositoryCard,
} from '../components/core';
import {
  AboutContainer,
  Avatar,
  Polygons,
  ExperienceContainer,
  GithubContainer,
  ReposContainer,
  GithubProfileContainer,
} from './index.style';

export function Home(): JSX.Element {
  return (
    <div>
      <Header />

      <AboutContainer id="AboutMe">
        <article>
          <h1>Olá!</h1>

          <p>
            Conhecido como Sammy™, tenho {getSammyAge()} anos e desenvolvo desde
            2016, quando iniciei o colegial integrado com Técnico de Informática
            no CEFET-MG. Lá eu participei de eventos, competições e construí
            minha base na programação. Em 2018 decidi focar em React e fiz
            vários cursos, destacando o bootcamp GoStack da Rocketseat onde
            evoluí muito no ecossistema React e iniciei no backend em NodeJs.
            Estudei diversas tecnologias como MongoDB, Postgres, TypeORM, Redis
            e Firebase no backend, React Native com e sem Expo no mobile, e
            ReactJs pra web. Desde a metade de 2020 atuo como desenvolvedor
            Fullstack com NodeJs e MongoDB no backend e React no front,
            incluindo mobile com React Native. Participo da integração de
            diversos serviços como AWS, Firebase, push notification,
            autenticação, etc e trabalho com react-hooks, context-api e até
            Redux em alguns casos. Na estilização uso Styled Components e
            procuro as principais libs quando necessário (por ex:
            react-router-dom, react-navigation, Animatable, Axios, etc) e
            aplicar boas práticas, seguindo os princípios SOLID e buscando a
            melhor arquitetura pra cada projeto.
          </p>
        </article>

        <article>
          <Avatar />

          <Polygons>
            <img src={Polygon1} alt="Polygon1" />
            <img src={Polygon2} alt="Polygon2" />
          </Polygons>

          <h3>
            <a
              href="https://www.weaccelerate.com.br/"
              rel="noreferrer"
              target="_blank"
            >
              Accelerate
            </a>
          </h3>
          <h3>Belo Horizonte - MG, Brasil</h3>
        </article>
      </AboutContainer>

      <ExperienceContainer id="Experience">
        <TechnologiesCard color="#E441FF" title="Experiente" />
        <TechnologiesCard color="#5379B2" title="Intermediário" />
        <TechnologiesCard color="#FF6E41" title="Quero aprender" />
      </ExperienceContainer>

      <GithubContainer id="Portfolio">
        <ReposContainer>
          {repos.map(repo => (
            <RepositoryCard key={repo.name} repo={repo} />
          ))}
        </ReposContainer>

        <GithubProfileContainer>
          <img src={GithubLogo} alt="Github logo" />
          <a
            href="https://github.com/SammuelGR"
            target="_blank"
            rel="noreferrer"
          >
            @SammuelGR
          </a>
          <p>266 commits</p>
          <p>43 repositórios</p>
        </GithubProfileContainer>
      </GithubContainer>

      <Footer id="Contact" />
    </div>
  );
}
