import Image from './image'

export default function BodyImage({ asset }) {
  return(
    <div className="mb-8 md:mb-12">
      {/* {JSON.stringify(defaultImage)} */}
      <Image asset={asset} className="" />
    </div>
  )
}