import { Container, Ellipse, Navigation, Title } from './index.style';

export function Header(): JSX.Element {
  return (
    <Container>
      <Navigation>
        <a href="#AboutMe">Sobre mim</a>
        <a href="#Experience">Habilidades</a>
        <a href="#Portfolio">Portfólio</a>
        <a href="#Contact">Contato</a>
      </Navigation>

      <div>
        <Title>Sammuel</Title>
        <Title>Reis</Title>
      </div>

      <Ellipse />
    </Container>
  );
}
