import FancyLink from '@/components/fancyLink'
import Container from '@/components/container'

export default function Header({ active }) {
  return (
    <header className="py-4 bg-gray-200 mb-4 md:mb-6 xl:mb-8">
      <Container>
        <div className="flex flex-wrap">
          <FancyLink destination="/" a11yText="Navigate to the home page" label="Wivey Grows" extraClasses="mb-1 md:mb-0" />

          <nav className="ml-auto flex space-x-3 w-full text-sm md:text-base md:w-auto">
            <FancyLink destination="/" a11yText="Navigate to the home page" label="Home" active={active == 'home'} />

            <FancyLink destination="/about" a11yText="Navigate to the about page" label="About" active={active == 'about'} />

            <FancyLink destination="/calendar" a11yText="Navigate to the calendar page" label="Calendar" active={active == 'calendar'} />

            <FancyLink destination="/blog" a11yText="Navigate to the blog page" label="Blog" active={active == 'blog'} />
            
            <FancyLink destination="/get-involved" a11yText="Navigate to the get involved page" label="Get Involved" active={active == 'get-involved'} />
          </nav>
        </div>
      </Container>
    </header>
  )
}