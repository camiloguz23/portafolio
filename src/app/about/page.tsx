import { MainLayout } from '@/layout';
import { UiAbout, UiSkill } from './components';

function About(): JSX.Element {
  return (
    <MainLayout>
      <UiAbout />
      <UiSkill />
    </MainLayout>
  );
}

export default About;
