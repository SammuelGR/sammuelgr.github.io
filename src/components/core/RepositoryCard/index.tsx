import Gitfork from '../../../assets/icons/gitfork.svg';

import { Container, Topics } from './index.style';

interface IProps {
  repo: {
    name: string;
    description: string;
    topics: Array<{
      name: string;
    }>;
    url: string;
  };
}

export function RepositoryCard({ repo }: IProps): JSX.Element {
  return (
    <Container href={repo.url} target="_blank" rel="noreferrer">
      <div>
        <img src={Gitfork} alt="Git fork icon" />
        <span>{repo.name}</span>
      </div>

      <div>
        <p>{repo.description}</p>
      </div>

      <Topics>
        {repo.topics.map(topic => (
          <div key={topic.name}>
            <div />

            <small>{topic.name}</small>
          </div>
        ))}
      </Topics>
    </Container>
  );
}
