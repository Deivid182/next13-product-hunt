import Link from 'next/link'

interface NavbarItemProps {
  label: string
  href: string
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, href }) => {
  return (
    <Link 
      className='hover:text-coral-red text-slate-gray font-normal'
      href={href}>
      {label}
    </Link>
  )
}

export default NavbarItem