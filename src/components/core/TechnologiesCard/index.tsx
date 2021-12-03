import { useState } from 'react';

import { technologies } from '../../../constants/technologies';
import { Container } from './index.style';

interface Props {
  color: string;
  title: string;
}

export function TechnologiesCard({ color, title }: Props): JSX.Element {
  const [card] = useState(technologies.find(item => item.title === title));

  return (
    <Container color={color}>
      <p>{card?.title}</p>
      <section>
        {card?.content.map(tech => (
          <a href={tech.url} target="_blank" rel="noreferrer" key={tech.id}>
            <div>
              {/* <img src={NodeIcon} alt={tech.title} /> */}
              <img src={tech.icon} alt={tech.title} />
            </div>
          </a>
        ))}
      </section>
    </Container>
  );
}
