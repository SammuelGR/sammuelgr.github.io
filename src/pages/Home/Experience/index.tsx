import { useIntl } from 'react-intl';

import { Container } from './styles';
import { TechnologiesCard } from './TechnologiesCard';

export default function Experience(): JSX.Element {
  const intl = useIntl();

  return (
    <Container id="Experience">
      <TechnologiesCard
        color="#E441FF"
        title={intl.formatMessage({ id: 'home.experience.title.core_stack' })}
        type="core"
      />
      <TechnologiesCard
        color="#5379B2"
        title={intl.formatMessage({ id: 'home.experience.title.secondary_stack' })}
        type="secondary"
      />
      <TechnologiesCard
        color="#FF6E41"
        title={intl.formatMessage({ id: 'home.experience.title.web3_stack' })}
        type="web3"
      />
    </Container>
  );
}
