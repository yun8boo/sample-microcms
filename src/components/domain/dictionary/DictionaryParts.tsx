import Image from 'next/image'
import { Body } from './Body';

interface Props {
  contents: any[]
}

export const DictionaryParts = ({ contents }: Props) => {
  console.log(contents);
  const parts = contents.map((content, i) => {
    switch(content.fieldId) {
      case 'body':
        return <Body html={content.body} />
      case 'image':
        return <Image key={i} src={content.image.url} width={content.image.width}  height={content.image.height}/>
      default:
        return null
    }
  })
  return (
    <div>{parts}</div>
  )
}