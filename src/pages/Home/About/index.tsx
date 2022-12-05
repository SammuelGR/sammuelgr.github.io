import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import Polygon1 from '../../../assets/Polygon_1.png';
import Polygon2 from '../../../assets/Polygon_2.png';
import { getSammyAge } from '../../../utils/dateUtils';

import { Container, Avatar, Polygons } from './styles';

const About = (): JSX.Element => {
  const [myAge, setMyAge] = useState<number>(0);

  useEffect(() => {
    setMyAge(getSammyAge());
  }, []);

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
          <a href="https://www.ripio.com/br/" rel="noreferrer" target="_blank">
            <FormattedMessage id="home.about_me.workplace" />
          </a>
        </h3>

        <h3>
          <FormattedMessage id="home.about_me.location" />
        </h3>
      </article>
    </Container>
  );
};

export default About;
