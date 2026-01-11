import { Footer, Header } from 'components/core';

import AboutSection from './About';
import ExperienceSection from './Experience';
import GitHubSection from './GitHub';

export function Home(): JSX.Element {
  return (
    <div>
      <Header />

      <AboutSection />

      <ExperienceSection />

      <GitHubSection />

      <Footer id="Contact" />
    </div>
  );
}
