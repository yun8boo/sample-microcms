import { FC } from "react"
import { Header } from "./Header"
import styles from "./Layout.module.css"

type Props = {}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header　/>
      {children}
    </div>
  )
}