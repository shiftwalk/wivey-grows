import { ReactSVG } from 'react-svg'

export default function Hero({ heading }) {
  return (
    <div className="w-full pt-[200px] pb-10 md:pb-12 xl:pb-16 bg-green relative mb-[17vw] md:mb-[12vw]">
      <div className="w-full text-center relative z-10">              
        <div className="relative inline-block">
          <div className="absolute top-0 right-0 z-0 mt-[-16%] md:mt-[-15%] lg:mt-[-10%] mr-[12%]">
            <div className="w-[10vw] md:w-[7vw] xl:w-[6vw]">
              <ReactSVG
                src="images/duck.svg"
                beforeInjection={(svg) => {
                  svg.setAttribute('style', 'width: 100%', 'height: auto')
                }}
              />
            </div>
          </div>
          <h1 className="text-off-white text-[12vw] md:text-[10vw] xl:text-[8vw] 2xl:text-[130px] leading-none md:leading-none xl:leading-none 2xl:leading-none mb-4 uppercase font-display inline-block">{heading}</h1>
        </div>
      </div>

      <div className="w-full text-green absolute bottom-0 left-0 right-0 mb-[-5.5vw] z-0">
        <svg className="w-full bg-off-white" viewBox="0 0 1599 106" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1599 42.905s-164.5 68.781-406.5 62.144c-242-6.637-238.543-49.932-393-62.144-155.778-12.317-230.5-56.714-399.75 0S0 42.905 0 42.905V0h1599v42.905Z" fill="currentColor"/></svg>
      </div>
    </div>
  )
}
