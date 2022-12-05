import { useEffect, useState } from 'react';

import GithubLogo from '../../assets/github.svg';
import {
  Header,
  Footer,
  TechnologiesCard,
  RepositoryCard,
} from '../../components/core';
import { GET_USER_INFO } from '../../constants/endpoints';
import { repos } from '../../constants/repos';
import { githubApiRest } from '../../services/github';

import AboutSection from './About';
import {
  ExperienceContainer,
  GithubContainer,
  ReposContainer,
  GithubProfileContainer,
} from './styles';

export function Home(): JSX.Element {
  const [githubData, setGithubData] = useState({
    followers: 0,
    public_repos: 0,
  });

  async function loadGithubData() {
    try {
      const { data } = await githubApiRest.get(`${GET_USER_INFO}/sammuelgr`);
      setGithubData(data);
    } catch (err) {
      throw new Error('Error fetching github data');
    }
  }

  useEffect(() => {
    loadGithubData();
  }, []);

  return (
    <div>
      <Header />

      <AboutSection />

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
          <p>{githubData.followers} seguidores</p>
          <p>{githubData.public_repos} repositórios</p>
        </GithubProfileContainer>
      </GithubContainer>

      <Footer id="Contact" />
    </div>
  );
}
