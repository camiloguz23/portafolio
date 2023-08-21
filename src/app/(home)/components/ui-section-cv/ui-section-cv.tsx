import { UiBtnDownload, UiBtnWhatsAap } from '@/components';
import style from './ui-section-cv.module.scss';

function UiSectionCV(): JSX.Element {
  return (
    <div className={style.sectionCv}>
      <UiBtnDownload />
      <UiBtnWhatsAap />
    </div>
  );
}

export default UiSectionCV;
