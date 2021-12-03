import { useState } from 'react';

import ReactTooltip from 'react-tooltip';

import { technologies } from '../../../constants/technologies';
import { Container } from './index.style';

interface Props {
  color: string;
  title: string;
}

export function TechnologiesCard({ color, title }: Props): JSX.Element {
  const [card] = useState(technologies.find(item => item.title === title));

  return (
    <>
      <ReactTooltip type="dark" effect="solid" />

      <Container color={color}>
        <p>{card?.title}</p>

        <section>
          {card?.content.map(tech => (
            <div data-tip={tech.title} key={tech.id}>
              <img src={tech.icon} alt={tech.title} />
            </div>
          ))}
        </section>
      </Container>
    </>
  );
}
