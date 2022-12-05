import { FormattedMessage } from 'react-intl';

import { Container, Ellipse, Navigation, Title } from './styles';

export function Header(): JSX.Element {
  return (
    <Container>
      <Navigation>
        <a href="#AboutMe">
          <FormattedMessage id="home.header.button.about_me" />
        </a>

        <a href="#Experience">
          <FormattedMessage id="home.header.button.experience" />
        </a>

        <a href="#Portfolio">
          <FormattedMessage id="home.header.button.portfolio" />
        </a>

        <a href="#Contact">
          <FormattedMessage id="home.header.button.contact" />
        </a>
      </Navigation>

      <div>
        <Title>
          <FormattedMessage id="home.header.title" />
        </Title>
      </div>

      <Ellipse />
    </Container>
  );
}
