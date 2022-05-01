import Link from 'next/link'

export default function FancyLink( {destination, a11yText, label, extraClasses, active, underline} ) {
  return (
    <Link href={destination}>
      <a aria-label={a11yText} className={`hover:text-off-white focus:text-off-white ${extraClasses} ${active ? 'text-off-white' : 'text-green-light'} ${underline && 'underline'}`}>
        {label}
      </a>
    </Link>
  )
}