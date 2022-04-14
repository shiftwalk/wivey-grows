import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function GetInvolved() {
  return (
    <Layout>
      <NextSeo title="Get Involved" />

      <Header active={'get-involved'} />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Container>
            <m.div variants={fade} className="mb-12 md:mb-16 xl:mb-24">
              <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl mb-4">Get Involved</h1>
              <div className="content max-w-3xl mb-4">
                <p>Wivey Grows is a project set up to enable the community to grow together. All are welcome to come, dig, build, plant, eat, share & learn alongside a regular group of gardeners, facilitating the regeneration of this incredible local space.</p>
              </div>

              <div className="content max-w-3xl mb-4">
                <ul>
                  <li>Email: <a href="mailto:info@wiveygrows.net" className="underline hover:text-gray-500 focus:text-gray-500">info@wiveygrows.net</a></li>
                  <li>Instagram: <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/wiveygrows" className="underline hover:text-gray-500 focus:text-gray-500">@wiveygrows</a></li>
                  <li className="mb-5">Facebook: <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/wiveygrows" className="underline hover:text-gray-500 focus:text-gray-500">wiveygrows</a></li>
                  <li><a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/wiveygrows" className="underline hover:text-gray-500 focus:text-gray-500">Newsletter</a></li>

                  <li><a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/wiveygrows" className="underline hover:text-gray-500 focus:text-gray-500">Donate</a></li>
                </ul>
              </div>
            </m.div>
          </Container>

          <m.div variants={fade} className="w-full">
            <Footer />
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}
