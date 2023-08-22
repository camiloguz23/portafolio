import style from './grid-layout.module.scss';

interface Prop {
  children: React.ReactNode;
  sizeMin: number;
}

export default function GridLayout({ children, sizeMin }: Prop): JSX.Element {
  return (
    <div className={style.grid} style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${sizeMin}px, 1fr))` }}>
      {children}
    </div>
  );
}
