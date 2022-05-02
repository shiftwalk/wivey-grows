import { ReactSVG } from 'react-svg'

export default function Hero({ heading }) {
  return (
    <div className="w-full pt-[200px] pb-8 md:pb-8 xl:pb-12 bg-green relative mb-[17vw] md:mb-[15vw]">
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

      <div className="w-full text-green absolute bottom-0 left-0 right-0 mb-[-15vw] z-0">
        <svg className="w-full bg-off-white" viewBox="0 0 1440 320">
          <path fill="currentColor" fill-opacity="1" d="M0,160L60,176C120,192,240,224,360,224C480,224,600,192,720,165.3C840,139,960,117,1080,122.7C1200,128,1320,160,1380,176L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </div>
    </div>
  )
}
