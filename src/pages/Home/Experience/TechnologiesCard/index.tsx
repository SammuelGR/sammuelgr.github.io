import ReactTooltip from 'react-tooltip';

import { technologies } from 'constants/technologies';

import { Container } from './styles';

interface Props {
  color: string;
  title: string;
  type: 'core' | 'secondary' | 'web3';
}

export function TechnologiesCard({ color, title, type }: Props): JSX.Element {
  const techGroup = technologies.find(({ type: techType }) => techType === type);

  return (
    <>
      <ReactTooltip type="dark" effect="solid" />

      <Container color={color}>
        <p>{title}</p>

        <section>
          {techGroup?.content.map(tech => (
            <div data-tip={tech.title} key={tech.id}>
              <img src={tech.icon} alt={tech.title} />
            </div>
          ))}
        </section>
      </Container>
    </>
  );
}
