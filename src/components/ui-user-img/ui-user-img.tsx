import style from './ui-user-img.module.scss';

interface Prop {
  pathImg: string;
  alt: string;
}

function UiUserImg({ alt, pathImg }: Prop): JSX.Element {
  return (
    <div className={style.circle}>
      <img src={pathImg} alt={alt} className={style.user} />
    </div>
  );
}

export default UiUserImg;
