import BlockContent from '@sanity/block-content-to-react'
import { blockSerializers } from './body-renderer'


const EditorialContentWrapper = ({ text }) => {
  return (
    <BlockContent
      serializers={{ 
        types: blockSerializers,
        container: ({ children }) => children
      }}
        blocks={text}
    />
  )
}

export default EditorialContentWrapper