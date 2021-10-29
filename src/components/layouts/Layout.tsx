import { FC } from "react"
import { Header, HeaderProps } from "./Header"

type Props = & HeaderProps

export const Layout: FC<Props> = ({ children, documentDownloadButtonText, inquiryDownloadButtonText }) => {
  return (
    <div>
      <Header documentDownloadButtonText={documentDownloadButtonText} inquiryDownloadButtonText={inquiryDownloadButtonText} />
      {children}
    </div>
  )
}