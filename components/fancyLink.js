import Link from 'next/link'

export default function FancyLink( {destination, a11yText, label, extraClasses, active, underline, light} ) {
  let colors = 'text-green-light hover:text-off-white focus-visible:text-off-white focus-visible:border-none focus-visible:outline-none focus-visible:ring-4 ring-green-light ring-offset-green ring-offset-8'

  if (active) {
    colors = 'text-off-white hover:text-off-white focus-visible:text-off-white focus-visible:border-none focus-visible:outline-none focus-visible:ring-4 ring-green-light ring-offset-green ring-offset-8' 
  }

  if (light) {
    colors = 'text-green-dark hover:text-green-light focus-visible:text-green-light' 
  }
  return (
    <Link href={destination}>
      <a aria-label={a11yText} className={`hover:text-off-white focus-visible:text-off-white inline-block ${extraClasses} ${colors}  ${underline && 'underline'}`}>
        {label}
      </a>
    </Link>
  )
}