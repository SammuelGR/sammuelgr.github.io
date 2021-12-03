import LinkedinIcon from '../../../assets/icons/linkedin.png';
import InstagramIcon from '../../../assets/icons/instagram.png';
import GithubIcon from '../../../assets/icons/github.png';

import { Container } from './index.styles';

interface IProps {
  id: string;
}

export function Footer({ id }: IProps): JSX.Element {
  return (
    <Container id={id}>
      <div>
        <a
          href="https://www.linkedin.com/in/sammuel-reis/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={LinkedinIcon} alt="Linkedin icon" />
        </a>
        <a
          href="https://instagram.com/sammuelgr"
          rel="noreferrer"
          target="_blank"
        >
          <img src={InstagramIcon} alt="Instagram icon" />
        </a>
        <a href="https://github.com/sammuelgr" rel="noreferrer" target="_blank">
          <img src={GithubIcon} alt="Github icon" />
        </a>
      </div>

      <small>
        © Alguns direitos reservados. Designed by:{' '}
        <a
          href="https://www.behance.net/gallery/131517819/Portifolio-Website-Design"
          rel="noreferrer"
          target="_blank"
        >
          Pimenta
        </a>
      </small>
    </Container>
  );
}
