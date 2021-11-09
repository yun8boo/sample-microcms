interface Props {
  html: string
}

export const EmbeddedHtml = ({html}: Props) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  )
}