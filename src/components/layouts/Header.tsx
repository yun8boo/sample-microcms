import { DocumentDownloadButton } from "../DocumentDownloadButton"
import { InquiryDownloadButton } from "../InquiryDownloadButton"

interface Props {
  documentDownloadButtonText: string
  inquiryDownloadButtonText: string
}

export type HeaderProps = React.ComponentProps<typeof Header>;

export const Header = ({ documentDownloadButtonText, inquiryDownloadButtonText }: Props) => {
  return (
    <header>
      <DocumentDownloadButton value={documentDownloadButtonText} />
      <InquiryDownloadButton value={inquiryDownloadButtonText} />
    </header>
  )
}