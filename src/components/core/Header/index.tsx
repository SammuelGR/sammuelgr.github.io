import {
  Container,
  Ellipse,
  Navigation,
  Title,
  Underline,
} from './index.style';

export function Header(): JSX.Element {
  return (
    <Container>
      <div>
        <Navigation>
          <a href="#AboutMe">Sobre mim</a>
          <a href="#Experience">Habilidades</a>
          <a href="#Portfolio">Portfólio</a>
          <a href="#Contact">Contato</a>
        </Navigation>

        <Underline />
      </div>

      <div>
        <Title>Sammuel</Title>
        <Title>Reis</Title>
      </div>

      <Ellipse />
    </Container>
  );
}
