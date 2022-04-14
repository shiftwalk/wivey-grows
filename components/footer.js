import Container from '@/components/container'

export default function Footer() {
  return (
    <footer className="mb-4">
      <Container>
        <div className="border-t border-black py-4">
          <div className="flex flex-wrap text-xs">
            <div className="flex space-x-1 mb-1 md:mb-0">
              <span className="block">Footer Stuff</span>
            </div>

            <div className="md:ml-auto w-full md:w-auto flex space-x-1">
              <span className="block">Site by <a href="https://shiftwalk.studio" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-500 focus:text-gray-500">ShiftWalk</a></span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}