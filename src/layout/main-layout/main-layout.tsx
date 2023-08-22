import style from './main-layout.module.scss';
interface Prop {
  children: React.ReactNode;
}
function MainLayout({ children }: Prop): JSX.Element {
  return (
    <main className={style.mainLayout}>
      <div className={style.children}>{children}</div>
    </main>
  );
}

export default MainLayout;
