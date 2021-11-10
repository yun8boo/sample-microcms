import styles from './IntroduceCompanyLogo.module.css'

interface Props {
  logos: any[]
  installNumber: number
}

export const IntroduceCompanyLogo = ({installNumber}: Props) => {
  return (
    <div className={styles.container}>
      <p>IntroduceCompanyLogo</p>
      <p>大手企業から中小企業・ベンチャー企業まで<b>{installNumber}</b>社以上の導入実績</p>
    </div>
  )
}