
import { Benefit } from "./Benefit/Benefit"
import { CaseStudy } from "./CaseStudy/CaseStudy"
import { Cta } from "./Cta/Cta"
import { Feature } from "./Feature/Feature"
import { FirstView } from "./FirstView/FirstView"
import { IntroduceCompanyLogo } from "./IntroduceCompanyLogo/IntroduceCompanyLogo"
import { Issues } from "./Issues/Issues"
import { MainFunction } from "./MainFunction/MainFunction"
import { SocialSituation } from "./SocialSituation/SocialSituation"
import { ThreeReasons } from "./ThreeReasons/ThreeReasons"

interface Props {
  displays: any[]
  globalValue: any
}

export const LpParts = ({ displays, globalValue }: Props) => {
  const parts = displays.map((display, i) => {
    switch(display.fieldId) {
      case 'firstView':
        return <FirstView key={display.fieldId} firstView={display} />
      case 'issues':
        return <Issues key={display.fieldId} />
      case 'socialSituation':
        return <SocialSituation key={display.fieldId} />
      case 'ctaParts':
        return <Cta key={i} />
      case 'threeReasons':
        return <ThreeReasons key={display.fieldId} />
      case 'feature':
        return <Feature key={display.fieldId} />
      case 'mainFunction':
        return <MainFunction key={display.fieldId} />
      case 'introduceCompanyLogo':
        return <IntroduceCompanyLogo key={display.fieldId} logos={display} installNumber={globalValue.installNumber} />
      case 'caseStudy':
        return <CaseStudy key={display.fieldId} />
      case 'benefit':
        return <Benefit key={display.fieldId} />
      default:
        return null
    }
  })
  return (
    <div>{parts}</div>
  )
}