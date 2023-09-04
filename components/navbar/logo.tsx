import { BiLogoProductHunt } from 'react-icons/bi'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
      <BiLogoProductHunt className="text-coral-red w-12 h-12" />
    </Link>
  )
}

export default Logo