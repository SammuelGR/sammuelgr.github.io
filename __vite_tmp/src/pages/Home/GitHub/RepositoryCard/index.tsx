import Gitfork from 'assets/icons/gitfork.svg';
import { type GithubRepo } from 'models/github';

import { Container, Topics } from './styles';

interface RepositoryCardProps {
  repo: GithubRepo;
}

export default function RepositoryCard({ repo }: RepositoryCardProps): JSX.Element {
  return (
    <Container href={repo.htmlUrl} target="_blank" rel="noreferrer">
      <div>
        <img src={Gitfork} alt="Git fork icon" />
        <span>{repo.name}</span>
      </div>

      <div>
        <p>{repo.description}</p>
      </div>

      <Topics>
        {repo.topics?.map(name => (
          <div key={name}>
            <div />

            <small>{name}</small>
          </div>
        ))}
      </Topics>
    </Container>
  );
}
