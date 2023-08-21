import style from './grid-layout.module.scss'

interface Prop {
  children: React.ReactNode
}

export default function GridLayout({ children }: Prop): JSX.Element {
  return (
    <div className={style.grid} >{children}</div>
  )
}
