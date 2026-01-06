import { FormattedMessage } from 'react-intl';

import Polygon1 from '../../../assets/Polygon_1.png';
import Polygon2 from '../../../assets/Polygon_2.png';
import { getSammyAge } from '../../../utils/dateUtils';
import { Avatar, Container, Polygons } from './styles';

const myAge = getSammyAge();

const About = (): JSX.Element => {
  return (
    <Container id="AboutMe">
      <article>
        <h1>
          <FormattedMessage id="home.about_me.title" />
        </h1>

        <p>
          <FormattedMessage
            id="home.about_me.description"
            values={{ age: myAge }}
          />
        </p>
      </article>

      <article>
        <Avatar />

        <Polygons>
          <img src={Polygon1} alt="Polygon1" />
          <img src={Polygon2} alt="Polygon2" />
        </Polygons>

        <h3>
          <FormattedMessage id="home.about_me.position" />
        </h3>
      </article>
    </Container>
  );
};

export default About;
