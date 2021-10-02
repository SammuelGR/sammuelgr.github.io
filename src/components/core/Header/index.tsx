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
          <a href="#/">Sobre mim</a>
          <a href="#/">Habilidades</a>
          <a href="#/">Portfólio</a>
          <a href="#/">Contato</a>
        </Navigation>

        <Underline />
      </div>

      <Title>Sammy™ 😎</Title>

      <Ellipse />
    </Container>
  );
}
