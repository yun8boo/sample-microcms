import Image from 'next/image'
import styles from './FirstView.module.css'

interface Props {
  firstView: FirstViewType
}
interface FirstViewType {
  fieldId: string
  backgroundImage: {
    url: string
    height: number
    width: number
  }
  productTitle: string
  mainTitleFirst: string
  mainTitleSecond: string
  description: string
  downLoadCtaTitle: string
  downLoadCtaLink: string
  demoCtaTitle: string
  demoCtaLink: string
}

export const FirstView = ({ firstView }: Props) => {
  return (
    <div className={styles.container}>
      <p>FirstView</p>
    </div>
  )
}