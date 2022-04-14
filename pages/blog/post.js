import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function BlogPost() {
  return (
    <Layout>
      <NextSeo title="Blog" />

      <Header active={'blog'} />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >
          <Container>
            <m.div variants={fade}>
              <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl mb-3">Blog - Example Post</h1>
              <h2 className="mb-4 italic">By: Rosie Riley - 10th April 2021</h2>
              <div className="content max-w-3xl mb-4">
                <p>Wivey Grows is a project set up to enable the community to grow together. All are welcome to come, dig, build, plant, eat, share & learn alongside a regular group of gardeners, facilitating the regeneration of this incredible local space.</p>

                <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              
              <FancyLink destination="/" a11yText="Navigate to the blog index page" label="Back To All Posts" underline />
            </m.div>
          </Container>
        </m.div>
      </LazyMotion>

      <Footer />
    </Layout>
  )
}
