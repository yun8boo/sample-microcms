interface Props {
  value: string
}

export const InquiryDownloadButton = ({value}: Props) => {
  return (
    <button>
      { value }
    </button>
  )
}