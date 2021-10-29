interface Props {
  value: string
}

export const DocumentDownloadButton = ({value}: Props) => {
  return (
    <button>
      { value }
    </button>
  )
}