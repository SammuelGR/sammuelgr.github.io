import {Tooltip as ReactTooltip} from 'react-tooltip';

import { technologies } from 'constants/technologies';

import { Container } from './styles';

interface Props {
  color: string;
  title: string;
  type: 'core' | 'secondary' | 'web3';
}

export function TechnologiesCard({ color, title, type }: Props): JSX.Element {
  const techGroup = technologies.find(({ type: techType }) => techType === type);
  const tooltipId = `technologies-tooltip-${type}`;

  return (
    <>
      <ReactTooltip id={tooltipId} place="top" variant="dark" opacity={1} />


      <Container color={color}>
        <p>{title}</p>

        <section>
          {techGroup?.content.map(tech => (
            <div
            data-tooltip-content={tech.title}
              data-tooltip-id={tooltipId}
              key={tech.id}
            >
              <img src={tech.icon} alt={tech.title} />
            </div>
          ))}
        </section>
      </Container>
    </>
  );
}
