import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function Calendar() {
  return (
    <Layout>
      <NextSeo title="Calendar" />

      <Header active={'calendar'} />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >
          <Container>
            <m.div variants={fade}>
              <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl mb-4">Calendar</h1>
              <div className="content max-w-3xl mb-4">
                <p>Wivey Grows is a project set up to enable the community to grow together. All are welcome to come, dig, build, plant, eat, share & learn alongside a regular group of gardeners, facilitating the regeneration of this incredible local space.</p>

                <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>

              <a target="_blank" rel="noopener noreferrer" href="https://localendar.com/elsie?JSP=PublishedCalendar&mode=PUBLISH_PUBLIC&search_type=M0&start_date=04/01/22&calendar_id=2658268" aria-label={'Navigate to our calendar'} className={`hover:text-gray-500 focus:text-gray-500 underline`}>View Our Full Calendar</a>
            </m.div>
          </Container>
        </m.div>
      </LazyMotion>

      <Footer />
    </Layout>
  )
}
