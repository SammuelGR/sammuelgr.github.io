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
            Conhecido como Sammy™, tenho {getSammyAge()} anos e comecei a
            programar em 2016, quando iniciei o curso Técnico de Informática no
            CEFET-MG. Lá eu participei algumas competições, dentre elas a OBI,
            CRIA e TICC - essa última sendo interna do Cefet, da qual levei a
            medalha de prata. Não concluí o curso, porém segui na área e em 2018
            comecei em desenvolvimento mobile. Logo depois evoluí em web e
            expandi para o backend, chegando hoje à atuar como FullStack.
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
