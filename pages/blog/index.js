import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function BlogIndex() {
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
              <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl mb-4">Blog</h1>
              <div className="content max-w-3xl mb-4">
                <p>Wivey Grows is a project set up to enable the community to grow together. All are welcome to come, dig, build, plant, eat, share & learn alongside a regular group of gardeners, facilitating the regeneration of this incredible local space.</p>

                <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              
              <ul className="list-disc list-inside">
                <li><FancyLink destination="/blog/post" a11yText="Navigate to the example blog post page" label="Example Blog Post" underline /></li>
                <li><FancyLink destination="/blog/post" a11yText="Navigate to the example blog post page" label="Another Example Blog Post" underline /></li>
                <li><FancyLink destination="/blog/post" a11yText="Navigate to the example blog post page" label="One More Blog Post" underline /></li>
              </ul>
            </m.div>
          </Container>
        </m.div>
      </LazyMotion>

      <Footer />
    </Layout>
  )
}
