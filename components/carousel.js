import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "@/components/image";
import { m } from "framer-motion";

const Carousel = ({ slides, contained, id, video, single, videoImage }) => {
  const [viewportRef, embla] = useEmblaCarousel({ speed: 4, skipSnaps: false, loop: true, inViewThreshold: 0.75});
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  const toggleVideo = () => {
    setVideoPlaying(true)
  }

  return (
    <>
    <div className={`embla ${single && 'embla--single' }`}>
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            { video && (
              <div className="embla__slide">
                <div className="embla__slide__inner">
                  <div className={`inset-0 absolute rounded-2xl rotate-3 bg-green`}></div>
                  {videoPlaying && (
                    <div className="absolute inset-0 z-50 w-full h-full object-center object-cover rounded-2xl">
                      <video loop={false} autoPlay="autoplay" playsInline={true} controls={true} className="object-cover h-full w-full will-change rounded-2xl">
                      <source src={video} type="video/mp4" />
    
                        Sorry. Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full z-20">
                    <button onClick={toggleVideo} className="border-none outline-none w-[8vw] h-[8vw] rounded-full bg-pink flex items-center justify-center focus-visible:outline-none focus-visible:border-none focus-visible:ring-8 ring-pink ring-offset-off-white ring-offset-8 hover:scale-110 hover:bg-orange">
                      <svg className="w-[3vw] -mr-2" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36.5 19.402c2 1.155 2 4.041 0 5.196L5 42.785c-2 1.154-4.5-.29-4.5-2.598V3.813C.5 1.504 3 .061 5 1.215l31.5 18.187Z" fill="#F8F3DD"/></svg>
                    </button>
                  </div>
                  
                  {videoImage && (
                    <div className="absolute inset-0 scale-[0.995]">
                      <Image
                        image={videoImage}
                        layout="fill"
                        widthOverride={1400}
                        className="w-full"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  <div className={`inset-0 absolute rounded-2xl rotate-3 ${ (index / 2) == 0 ? 'bg-green' : 'bg-green-light' }`}></div>
                  <div className="absolute inset-0 scale-[0.995] ">
                    <Image
                      image={slide}
                      layout="fill"
                      widthOverride={1400}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`embla__dot ${index === selectedIndex ? "is-selected" : ""}`}
              type="button"
              onClick={() => scrollTo(index)}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
