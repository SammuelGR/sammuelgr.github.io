import { FormattedMessage } from 'react-intl';

import GithubLogo from 'assets/github.svg';
import { useProfileData } from 'hooks/useProfileData';
import { useAllRepos } from 'hooks/useRepos';

import CardPlaceholder from './CardPlaceholder';
import RepositoryCard from './RepositoryCard';
import { Container, GithubProfileContainer, ReposContainer } from './styles';

export default function GitHub(): JSX.Element {
  const { data: repos, isLoading: isReposLoading } = useAllRepos();
  const { data: profileData } = useProfileData();

  return (
    <Container id="Portfolio">
      <ReposContainer>
        {isReposLoading ? <CardPlaceholder /> : repos?.map(repo => <RepositoryCard key={repo.name} repo={repo} />)}
      </ReposContainer>

      <GithubProfileContainer>
        <img src={GithubLogo} alt="Github logo" />

        <a href="https://github.com/SammuelGR" target="_blank" rel="noreferrer">
          @SammuelGR
        </a>

        <p>
          {profileData?.followers || 0} <FormattedMessage id="home.github.followers" />
        </p>

        <p>
          {profileData?.publicRepos || 0} <FormattedMessage id="home.github.repos" />
        </p>
      </GithubProfileContainer>
    </Container>
  );
}
