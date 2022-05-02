import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { ReactSVG } from 'react-svg'

export default function BlogPost() {
  return (
    <Layout>
      <NextSeo title="Blog Post" />

      <Header active={'blog'} />

      <div className="w-full pt-[200px] pb-8 md:pb-8 xl:pb-12 bg-green relative mb-[17vw] md:mb-[15vw]">
        <div className="w-full text-center relative z-10">
          <h1 className="text-off-white text-[12vw] md:text-[10vw] xl:text-[8vw] 2xl:text-[130px] leading-none md:leading-none xl:leading-none 2xl:leading-none mb-4 uppercase font-display max-w-[1200px] mx-auto px-6 md:px-12">Blog Post Title Goes Here</h1>

          <span className="text-lg md:text-xl xl:text-2xl text-center block mb-1 md:mb-2 text-off-white">14.05.22</span>
        </div>

        <div className="w-full text-green absolute bottom-0 left-0 right-0 mb-[-15vw] z-0">
          <svg className="w-full bg-off-white" viewBox="0 0 1440 320">
            <path fill="currentColor" fill-opacity="1" d="M0,160L60,176C120,192,240,224,360,224C480,224,600,192,720,165.3C840,139,960,117,1080,122.7C1200,128,1320,160,1380,176L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
        </div>
      </div>

      <Container>
        <div className="relative">
          <article className="mb-[10vw]">
            <div className="flex flex-wrap xl:items-center mb-[13vw]">
              <div className="w-11/12 md:w-9/12 mx-auto max-w-[1000px]">
                <div className="relative mb-[8vw] md:mb-[6vw]">
                  <div className={`absolute rounded-2xl inset-0 scale-[1.01] bg-green-light -rotate-3`}></div>
                  <img src="https://placedog.net/720/460" alt="CHANGE ME" className={`w-full rounded-2xl relative z-10 mb-4 md:mb-6`} />

                  <div className="absolute top-0 left-0 z-[100] ml-[-5%] md:ml-[-10%] xl:ml-[-14%] mt-[0%] md:mt-[12%] xl:mt-[20%] rotate-3">
                    <div className="w-[18vw] md:w-[14vw]">
                      <ReactSVG
                        src="images/sunflower.svg"
                        beforeInjection={(svg) => {
                          svg.setAttribute('style', 'width: 100%')
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="w-11/12 md:w-10/12">
                  <div className="content content--fancy mb-10 md:mb-12 xl:mb-16">
                    <p>Wivey Grows is a project set up to enable the community to grow together. All are welcome to come, dig, build, plant, eat, share &amp; learn alongside a regular group of gardeners, facilitating the regeneration of this incredible local space.</p>

                    <p>Quisque sagittis turpis vel massa posuere pellentesque in condimentum mi. Sed sagittis tortor tellus, sit amet rhoncus nunc fringilla ut. Nullam facilisis dignissim tempus. Cras eget mauris eget enim ultrices vulputate. Phasellus non nulla at enim tincidunt lobortis sit amet scelerisque dolor. Proin dignissim mauris dui, ut vehicula nulla venenatis at. Suspendisse suscipit egestas maximus. Duis elit nisl, bibendum ut lectus id, hendrerit pharetra nibh. Phasellus pulvinar dolor et efficitur porttitor.</p>

                    <p>Pellentesque quis massa eros. Integer massa est, interdum vel congue id, egestas a diam. Pellentesque pulvinar, turpis vitae sodales gravida, dolor justo cursus nibh, et porttitor lectus urna eu augue. Nunc non odio id massa lacinia tristique nec quis diam. Aliquam erat volutpat. Pellentesque porta tellus vel dictum euismod. Aenean ut imperdiet ante. Donec molestie erat a enim dictum maximus. Nullam at diam id nisi rhoncus interdum. Sed malesuada porttitor cursus.</p>

                    <p>Integer gravida, ligula in ullamcorper egestas, lorem neque tincidunt lacus, at congue nisi mauris quis lectus. Vestibulum faucibus ornare elementum. Aenean porttitor in magna non dapibus. Proin vel arcu vitae nisi varius tincidunt vel eu lorem. Phasellus sed lacus at metus pretium dapibus. Donec vehicula lectus ac sollicitudin elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum cursus id nulla eget placerat. Curabitur sed nisi vel ligula volutpat hendrerit a at urna. Cras non lectus auctor, convallis orci ac, pretium sem.</p>
                  </div>

                  <div className="md:flex md:space-x-6">
                    <Link href="/blog">
                      <a className="block md:inline-block font-display bg-pink hover:bg-off-black text-off-white px-8 py-5 text-lg md:text-[2vw] 2xl:text-[30px] uppercase rounded-full leading-none md:leading-none xl:leading-none 2xl:leading-none text-center mb-5 md:mb-0">Back To All Posts</a>
                    </Link>

                    <Link href="/get-involved">
                      <a className="block md:inline-block font-display bg-green-light hover:bg-off-black text-off-white px-8 py-5 text-lg md:text-[2vw] 2xl:text-[30px] uppercase rounded-full leading-none md:leading-none xl:leading-none 2xl:leading-none text-center">Get Involved</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </Container>

      <div className="w-full">
        <Footer />
      </div>
    </Layout>
  )
}
